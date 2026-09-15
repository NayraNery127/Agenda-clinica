import { Router, Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { getAvailability, isWeekend, isPastDate } from '../services/availability';
import { isHoliday } from '../services/holidays';

const router = Router();

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^\d{2}:\d{2}$/;

/**
 * GET /available?date=2026-02-10
 * Retorna os horários disponíveis para a data informada.
 */
router.get('/available', async (req: Request, res: Response) => {
  const { date } = req.query;

  if (typeof date !== 'string' || !DATE_REGEX.test(date)) {
    return res.status(400).json({ error: 'Parâmetro "date" é obrigatório no formato YYYY-MM-DD.' });
  }

  try {
    const result = await getAvailability(date);
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(502).json({ error: 'Falha ao consultar disponibilidade (API de feriados indisponível).' });
  }
});

/**
 * POST /appointments
 * Body: { patientName: string, date: "YYYY-MM-DD", time: "HH:mm" }
 * Cria um agendamento, revalidando todas as regras de negócio no backend
 * (nunca confiar apenas na validação do frontend).
 */
router.post('/appointments', async (req: Request, res: Response) => {
  const { patientName, date, time } = req.body ?? {};

  if (typeof patientName !== 'string' || patientName.trim().length === 0) {
    return res.status(400).json({ error: '"patientName" é obrigatório.' });
  }
  if (typeof date !== 'string' || !DATE_REGEX.test(date)) {
    return res.status(400).json({ error: '"date" inválida. Use o formato YYYY-MM-DD.' });
  }
  if (typeof time !== 'string' || !TIME_REGEX.test(time)) {
    return res.status(400).json({ error: '"time" inválido. Use o formato HH:mm.' });
  }

  if (isPastDate(date)) {
    return res.status(409).json({ error: 'Não é possível agendar em uma data que já passou.' });
  }

  if (isWeekend(date)) {
    return res.status(409).json({ error: 'Não é possível agendar em finais de semana.' });
  }

  try {
    if (await isHoliday(date)) {
      return res.status(409).json({ error: 'Não é possível agendar em feriados.' });
    }

    const appointment = await prisma.appointment.create({
      data: { patientName: patientName.trim(), date, time },
    });

    return res.status(201).json(appointment);
  } catch (err: any) {
    if (err.code === 'P2002') {
      // violação da constraint @@unique([date, time])
      return res.status(409).json({ error: 'Esse horário já está ocupado.' });
    }
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao criar agendamento.' });
  }
});

/**
 * GET /appointments
 * Lista todos os agendamentos (opcionalmente filtrando por data).
 */
router.get('/appointments', async (req: Request, res: Response) => {
  const { date } = req.query;

  const appointments = await prisma.appointment.findMany({
    where: typeof date === 'string' ? { date } : undefined,
    orderBy: [{ date: 'asc' }, { time: 'asc' }],
  });

  return res.json(appointments);
});

export default router;
