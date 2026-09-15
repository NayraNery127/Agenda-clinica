# Visão de Arquitetura

## Fluxo geral

```
Usuário escolhe data → Frontend chama backend → Backend consulta API de feriados
→ Backend valida (feriado / fim de semana / data passada / horário ocupado)
→ Retorna horários livres → Usuário escolhe → Backend salva no PostgreSQL
```

## Camadas

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend | React + TypeScript + Vite | build rápido, tipagem compartilhada com o backend |
| Estilização | Tailwind CSS | permite iteração visual rápida sem CSS solto |
| Backend | Node.js + Express + TypeScript | API REST simples, mesma linguagem do frontend |
| Persistência | PostgreSQL + Prisma | banco relacional real + ORM tipado, sem SQL manual |
| Feriados | [Nager.Date API](https://date.nager.at/api/v3/PublicHolidays/2026/BR) | fonte pública, com cache em memória por ano |
| Testes | Jest | cobre a regra de negócio mais sensível a erro |
| Execução local | Docker Compose | ambiente reproduzível com um único comando |

## Decisões de projeto

- **Datas como string (`YYYY-MM-DD`), não `Date`**: evita bugs de fuso horário entre
  frontend, backend e banco de dados — um problema clássico em sistemas de
  agendamento, onde uma data pode "virar o dia" dependendo de onde o cálculo é feito.
- **Validação duplicada (frontend + backend)**: o frontend bloqueia visualmente para
  dar feedback imediato, mas o backend revalida tudo, porque o frontend nunca é uma
  barreira de segurança confiável — qualquer um pode chamar a API diretamente.
- **Constraint única no banco (`date` + `time`)**: garante que não existam dois
  agendamentos conflitantes mesmo sob concorrência real (duas requisições quase
  simultâneas), sem depender de lógica de aplicação para isso.
- **Cache de feriados em memória, por ano**: evita bater na API pública a cada
  consulta de disponibilidade. Não foi usado um cache externo (Redis) por não haver
  volume que justifique essa complexidade adicional no escopo do MVP.
