import { isHoliday } from './holidays';
import { prisma } from '../lib/prisma';

/**
 * Regras de negócio:
 * - Funcionamento: 08:00 às 18:00
 * - Consultas de 1h (logo, 10 horários possíveis por dia)
 * - Bloqueado: feriados, finais de semana, horários já ocupados
 */

export const OPENING_HOUR = 8;
export const CLOSING_HOUR = 18;

export function isWeekend(dateStr: string): boolean {
  // new Date("YYYY-MM-DD") é interpretado como UTC meia-noite;
  // usamos isso de forma consistente (sem hora local) para evitar
  // que o dia da semana mude dependendo do fuso do servidor.
  const day = new Date(`${dateStr}T00:00:00Z`).getUTCDay();
  return day === 0 || day === 6; // domingo = 0, sábado = 6
}

function buildAllSlots(): string[] {
  const slots: string[] = [];
  for (let hour = OPENING_HOUR; hour < CLOSING_HOUR; hour++) {
    slots.push(`${String(hour).padStart(2, '0')}:00`);
  }
  return slots;
}

export interface AvailabilityResult {
  date: string;
  blocked: boolean;
  reason?: 'weekend' | 'holiday';
  availableSlots: string[];
}

export async function getAvailability(dateStr: string): Promise<AvailabilityResult> {
  if (isWeekend(dateStr)) {
    return { date: dateStr, blocked: true, reason: 'weekend', availableSlots: [] };
  }

  if (await isHoliday(dateStr)) {
    return { date: dateStr, blocked: true, reason: 'holiday', availableSlots: [] };
  }

  const allSlots = buildAllSlots();

  const taken = await prisma.appointment.findMany({
    where: { date: dateStr },
    select: { time: true },
  });
  const takenSet = new Set(taken.map((t) => t.time));

  const availableSlots = allSlots.filter((slot) => !takenSet.has(slot));

  return { date: dateStr, blocked: false, availableSlots };
}
