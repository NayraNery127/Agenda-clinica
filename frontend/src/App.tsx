import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333';

interface Availability {
  date: string;
  blocked: boolean;
  reason?: 'weekend' | 'holiday' | 'past';
  availableSlots: string[];
}

type Toast = { type: 'success' | 'error' | 'info'; text: string } | null;

function formatDatePtBr(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export default function App() {
  const [date, setDate] = useState('');
  const [patientName, setPatientName] = useState('');
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [toast, setToast] = useState<Toast>(null);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<string | null>(null); // horário sendo agendado agora

  async function checkAvailability(silentToast = false) {
    if (!date) return;
    setLoading(true);
    if (!silentToast) setToast(null);
    setAvailability(null);
    try {
      const res = await fetch(`${API_URL}/available?date=${date}`);
      const data = await res.json();
      setAvailability(data);
    } catch {
      setToast({ type: 'error', text: 'Não foi possível consultar a disponibilidade. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  }

  async function bookSlot(time: string) {
    if (!patientName.trim()) {
      setToast({ type: 'info', text: 'Informe seu nome antes de escolher um horário.' });
      return;
    }
    setBooking(time);
    try {
      const res = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientName, date, time }),
      });
      const data = await res.json();
      if (!res.ok) {
        setToast({ type: 'error', text: data.error ?? 'Não foi possível agendar.' });
        return;
      }
      await checkAvailability(true); // atualiza a lista, sem apagar o toast que vem a seguir
      setToast({ type: 'success', text: `Consulta confirmada para ${formatDatePtBr(date)} às ${time}.` });
    } catch {
      setToast({ type: 'error', text: 'Erro ao criar agendamento. Tente novamente.' });
    } finally {
      setBooking(null);
    }
  }

  const today = new Date().toISOString().split('T')[0];
  const isDateInPast = date !== '' && date < today;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-50 flex items-start sm:items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-600 text-white text-2xl mb-3 shadow-lg shadow-brand-600/20">
            🩺
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Agendamento de Consultas</h1>
          <p className="text-slate-500 text-sm mt-1">Escolha uma data e reserve seu horário</p>
        </div>

        {/* Cartão principal */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Seu nome</label>
              <input
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Nome completo"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Data da consulta</label>
              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-transparent transition ${
                  isDateInPast ? 'border-rose-300 focus:ring-rose-400' : 'border-slate-200 focus:ring-brand-500'
                }`}
              />
              {isDateInPast && (
                <p className="text-xs text-rose-600 mt-1.5">Escolha uma data a partir de hoje.</p>
              )}
            </div>

            <button
              onClick={() => checkAvailability()}
              disabled={!date || loading || isDateInPast}
              className="w-full rounded-xl bg-brand-600 text-white font-medium py-2.5 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 transition flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {loading ? 'Consultando...' : 'Ver horários disponíveis'}
            </button>
          </div>

          {/* Bloqueado (feriado / fim de semana / data passada) */}
          {availability?.blocked && (
            <div className="mt-5 rounded-xl bg-rose-50 border border-rose-100 px-4 py-3 text-rose-700 text-sm animate-slide-in">
              {availability.reason === 'holiday' && 'Esta data é feriado nacional. Escolha outro dia.'}
              {availability.reason === 'weekend' && 'Não atendemos aos finais de semana. Escolha um dia útil.'}
              {availability.reason === 'past' && 'Essa data já passou. Escolha uma data a partir de hoje.'}
            </div>
          )}

          {/* Horários disponíveis */}
          {availability && !availability.blocked && (
            <div className="mt-5 animate-slide-in">
              <h3 className="text-sm font-medium text-slate-700 mb-2.5">Horários disponíveis</h3>

              {availability.availableSlots.length === 0 ? (
                <p className="text-sm text-slate-500 bg-slate-50 rounded-xl px-4 py-3">
                  Nenhum horário livre nesse dia. Tente outra data.
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {availability.availableSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => bookSlot(slot)}
                      disabled={booking !== null}
                      className="rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 disabled:opacity-50 transition"
                    >
                      {booking === slot ? (
                        <span className="w-3.5 h-3.5 inline-block border-2 border-brand-300 border-t-brand-600 rounded-full animate-spin" />
                      ) : (
                        slot
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Toast de feedback */}
        {toast && (
          <div
            className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium shadow-md animate-slide-in flex items-start gap-2 ${
              toast.type === 'success'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                : toast.type === 'error'
                ? 'bg-rose-50 text-rose-700 border border-rose-100'
                : 'bg-amber-50 text-amber-700 border border-amber-100'
            }`}
          >
            <span>{toast.type === 'success' ? '✓' : toast.type === 'error' ? '⚠' : 'ℹ'}</span>
            <span>{toast.text}</span>
          </div>
        )}

        <p className="text-center text-xs text-slate-400 mt-6">
          Horário de funcionamento: 08:00 às 18:00 · Consultas de 1h · Feriados e fins de semana são bloqueados automaticamente
        </p>
      </div>
    </div>
  );
}
