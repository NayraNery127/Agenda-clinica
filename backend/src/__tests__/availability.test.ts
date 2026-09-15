import { isWeekend } from '../services/availability';

describe('isWeekend', () => {
  it('identifica sábado como fim de semana', () => {
    // 2026-02-14 é um sábado
    expect(isWeekend('2026-02-14')).toBe(true);
  });

  it('identifica domingo como fim de semana', () => {
    // 2026-02-15 é um domingo
    expect(isWeekend('2026-02-15')).toBe(true);
  });

  it('não bloqueia dia de semana comum', () => {
    // 2026-02-10 é uma terça-feira
    expect(isWeekend('2026-02-10')).toBe(false);
  });
});
