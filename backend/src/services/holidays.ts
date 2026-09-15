/**
 * Serviço responsável por consultar feriados nacionais via API pública.
 * API: https://date.nager.at/api/v3/PublicHolidays/{ano}/{pais}
 *
 * Faz cache em memória por ano, já que a lista de feriados de um ano
 * não muda durante a execução do servidor — evita bater na API a cada request.
 */

interface NagerHoliday {
  date: string; // "2026-01-01"
  localName: string;
  name: string;
}

const holidayCache = new Map<number, Set<string>>();

export async function getHolidaysForYear(year: number): Promise<Set<string>> {
  if (holidayCache.has(year)) {
    return holidayCache.get(year)!;
  }

  const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/BR`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Falha ao consultar feriados (status ${response.status})`);
  }

  const data: NagerHoliday[] = await response.json();
  const dates = new Set(data.map((h) => h.date));

  holidayCache.set(year, dates);
  return dates;
}

export async function isHoliday(dateStr: string): Promise<boolean> {
  const year = parseInt(dateStr.split('-')[0], 10);
  const holidays = await getHolidaysForYear(year);
  return holidays.has(dateStr);
}
