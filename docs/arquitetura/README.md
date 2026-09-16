# 7. Visão de Arquitetura

## Fluxo geral

<svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Usuário -->
  <rect x="20" y="100" width="120" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="80" y="135" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1e3a8a">Usuário</text>

  <!-- Frontend -->
  <rect x="200" y="100" width="140" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="270" y="128" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e3a8a">Frontend</text>
  <text x="270" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3b82f6">React + TypeScript</text>

  <!-- Backend -->
  <rect x="400" y="100" width="140" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="470" y="128" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e3a8a">Backend</text>
  <text x="470" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3b82f6">Express + TypeScript</text>

  <!-- API Feriados -->
  <rect x="600" y="20" width="180" height="60" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="690" y="48" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#166534">API de Feriados</text>
  <text x="690" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#16a34a">Nager.Date (externa)</text>

  <!-- PostgreSQL -->
  <rect x="600" y="180" width="180" height="60" rx="10" fill="#fef3f2" stroke="#e11d48" stroke-width="2"/>
  <text x="690" y="208" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#9f1239">PostgreSQL</text>
  <text x="690" y="225" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#e11d48">banco de dados</text>

  <!-- Arrows -->
  <line x1="140" y1="130" x2="198" y2="130" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="340" y1="130" x2="398" y2="130" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="540" y1="115" x2="598" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="540" y1="145" x2="598" y2="205" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

  <text x="169" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">escolhe data</text>
  <text x="369" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">chama API</text>
  <text x="565" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">consulta</text>
  <text x="565" y="185" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">valida e persiste</text>
</svg>

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
