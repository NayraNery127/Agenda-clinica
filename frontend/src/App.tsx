import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333';

interface Availability {
  date: string;
  blocked: boolean;
  reason?: 'weekend' | 'holiday';
  availableSlots: string[];
}

export default function App() {
  const [date, setDate] = useState('');
  const [patientName, setPatientName] = useState('');
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function checkAvailability() {
    if (!date) return;
    setLoading(true);
    setMessage(null);
    setAvailability(null);
    try {
      const res = await fetch(`${API_URL}/available?date=${date}`);
      const data = await res.json();
      setAvailability(data);
    } catch {
      setMessage('Erro ao consultar disponibilidade.');
    } finally {
      setLoading(false);
    }
  }

  async function bookSlot(time: string) {
    if (!patientName.trim()) {
      setMessage('Informe seu nome antes de escolher um horário.');
      return;
    }
    try {
      const res = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientName, date, time }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error ?? 'Não foi possível agendar.');
        return;
      }
      setMessage(`Agendamento confirmado para ${date} às ${time}.`);
      checkAvailability(); // atualiza a lista removendo o horário ocupado
    } catch {
      setMessage('Erro ao criar agendamento.');
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 480, margin: '40px auto', padding: 16 }}>
      <h1>Agendamento de Consultas</h1>

      <label>
        Seu nome:
        <input
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Nome do paciente"
          style={{ display: 'block', width: '100%', marginBottom: 12 }}
        />
      </label>

      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ display: 'block', marginBottom: 12 }}
        />
      </label>

      <button onClick={checkAvailability} disabled={!date || loading}>
        {loading ? 'Consultando...' : 'Ver horários disponíveis'}
      </button>

      {availability?.blocked && (
        <p style={{ color: 'crimson', marginTop: 16 }}>
          Sem atendimento nesta data ({availability.reason === 'holiday' ? 'feriado' : 'fim de semana'}).
        </p>
      )}

      {availability && !availability.blocked && (
        <div style={{ marginTop: 16 }}>
          <h3>Horários disponíveis</h3>
          {availability.availableSlots.length === 0 && <p>Nenhum horário livre nesse dia.</p>}
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {availability.availableSlots.map((slot) => (
              <li key={slot}>
                <button onClick={() => bookSlot(slot)}>{slot}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}
