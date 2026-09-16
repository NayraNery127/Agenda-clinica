# 6. Casos de Uso

## Diagrama de Casos de Uso

<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <!-- Fronteira do sistema -->
  <rect x="180" y="20" width="340" height="380" rx="12" fill="#fafafa" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="350" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64748b">Agenda Clínica</text>

  <!-- Ator Paciente (stick figure) -->
  <g stroke="#1e3a8a" stroke-width="2" fill="none">
    <circle cx="60" cy="130" r="12" fill="#eff6ff"/>
    <line x1="60" y1="142" x2="60" y2="180"/>
    <line x1="35" y1="158" x2="85" y2="158"/>
    <line x1="60" y1="180" x2="40" y2="210"/>
    <line x1="60" y1="180" x2="80" y2="210"/>
  </g>
  <text x="60" y="228" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">Paciente</text>

  <!-- Ator Recepção (stick figure) -->
  <g stroke="#166534" stroke-width="2" fill="none">
    <circle cx="60" cy="290" r="12" fill="#f0fdf4"/>
    <line x1="60" y1="302" x2="60" y2="340"/>
    <line x1="35" y1="318" x2="85" y2="318"/>
    <line x1="60" y1="340" x2="40" y2="370"/>
    <line x1="60" y1="340" x2="80" y2="370"/>
  </g>
  <text x="60" y="388" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Recepção</text>

  <!-- Use cases (ellipses) -->
  <ellipse cx="360" cy="90" rx="140" ry="32" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="360" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">UC01 Consultar horários</text>

  <ellipse cx="360" cy="200" rx="140" ry="32" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="360" y="204" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">UC02 Criar agendamento</text>

  <ellipse cx="360" cy="320" rx="140" ry="32" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="360" y="324" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">UC03 Listar agendamentos</text>

  <!-- Linhas de associação -->
  <line x1="90" y1="140" x2="222" y2="95" stroke="#475569" stroke-width="1.5"/>
  <line x1="90" y1="150" x2="222" y2="195" stroke="#475569" stroke-width="1.5"/>
  <line x1="90" y1="290" x2="222" y2="318" stroke="#475569" stroke-width="1.5"/>

  <!-- UC02 depende de UC01 (extends) -->
  <line x1="360" y1="122" x2="360" y2="168" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow2)"/>
  <text x="400" y="150" font-family="sans-serif" font-size="10" fill="#64748b">«include»</text>

  <defs>
    <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#94a3b8"/>
    </marker>
  </defs>
</svg>

**Legenda:** 🔵 azul = casos de uso do paciente · 🟢 verde = caso de uso da recepção (uso indireto via API) · linha tracejada = dependência entre casos de uso

## UC01 — Consultar horários disponíveis

| | |
|---|---|
| **Ator** | Paciente |
| **Pré-condição** | Nenhuma |
| **Pós-condição** | Lista de horários livres exibida, ou motivo de bloqueio informado |

**Fluxo principal**

1. O paciente seleciona uma data no formulário.
2. O sistema envia a data ao backend (`GET /available`).
3. O backend verifica, em ordem: se a data já passou, se é fim de semana, se é
   feriado nacional.
4. Se nenhuma das três regras bloquear, o backend consulta os agendamentos já
   existentes naquela data e calcula os horários livres entre 08:00 e 18:00.
5. O sistema exibe os horários disponíveis ao paciente.

**Fluxo alternativo A1 — data bloqueada**

- 3a. Se a data é passada, fim de semana ou feriado, o sistema retorna o motivo do
  bloqueio.
- 3a1. O frontend exibe uma mensagem explicando o motivo, sem mostrar horários.

---

## UC02 — Criar agendamento

| | |
|---|---|
| **Ator** | Paciente |
| **Pré-condição** | UC01 executado com sucesso e horário disponível visível |
| **Pós-condição** | Agendamento persistido no banco de dados |

**Fluxo principal**

1. O paciente informa seu nome.
2. O paciente seleciona um horário disponível.
3. O sistema envia a solicitação ao backend (`POST /appointments`).
4. O backend revalida todas as regras de bloqueio (data passada, fim de semana,
   feriado) — independente do que o frontend já validou.
5. O backend tenta persistir o agendamento no banco de dados.
6. O banco garante, via constraint única, que não existam dois agendamentos na
   mesma data e horário.
7. O sistema confirma o agendamento ao paciente.

**Fluxo alternativo A1 — nome não informado**

- 1a. Se o campo de nome estiver vazio, o sistema impede o envio e avisa o paciente.

**Fluxo alternativo A2 — horário ocupado no momento exato do envio**

- 6a. Se outro paciente ocupou o mesmo horário poucos milissegundos antes, o banco
  rejeita a segunda tentativa (`P2002`), e o sistema informa que o horário não está
  mais disponível.

**Fluxo alternativo A3 — data inválida enviada diretamente à API**

- 4a. Se alguém tentar burlar a validação do frontend enviando uma data passada,
  de fim de semana ou de feriado diretamente à API, o backend rejeita a criação do
  agendamento (HTTP 409), independente do frontend.

---

## UC03 — Listar agendamentos

| | |
|---|---|
| **Ator** | Recepção da clínica (uso indireto, via API) |
| **Pré-condição** | Nenhuma |
| **Pós-condição** | Lista de agendamentos retornada, ordenada por data e horário |

**Fluxo principal**

1. É feita uma requisição (`GET /appointments`), opcionalmente filtrando por data.
2. O sistema retorna todos os agendamentos correspondentes, ordenados
   cronologicamente.

---

## Diagrama de Estados — ciclo de uma solicitação de agendamento

<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <defs>
    <marker id="arrow3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#475569"/>
    </marker>
  </defs>

  <circle cx="40" cy="150" r="8" fill="#1e293b"/>
  <line x1="48" y1="150" x2="90" y2="150" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>

  <rect x="90" y="120" width="140" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="160" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">Data Selecionada</text>

  <rect x="290" y="20" width="150" height="60" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="365" y="45" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#991b1b">Bloqueada</text>
  <text x="365" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#dc2626">feriado / fds / passada</text>

  <rect x="290" y="120" width="150" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="365" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">Horários Exibidos</text>

  <rect x="500" y="120" width="150" height="60" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="575" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">Horário Escolhido</text>

  <rect x="710" y="120" width="100" height="60" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="760" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Confirmado</text>

  <rect x="500" y="220" width="150" height="60" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="575" y="245" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#991b1b">Conflito</text>
  <text x="575" y="262" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#dc2626">horário ocupado</text>

  <line x1="230" y1="135" x2="288" y2="55" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="230" y1="150" x2="288" y2="150" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="440" y1="150" x2="498" y2="150" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="650" y1="140" x2="708" y2="140" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="600" y1="180" x2="590" y2="218" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="575" y1="220" x2="575" y2="182" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrow3)"/>

  <text x="565" y="200" font-family="sans-serif" font-size="9" fill="#64748b">tenta agendar</text>
  <text x="530" y="212" font-family="sans-serif" font-size="9" fill="#64748b">tenta outro horário</text>
</svg>

**Legenda:** 🔵 azul = estados intermediários do fluxo · 🟢 verde = estado de sucesso · 🔴 vermelho = estados de bloqueio/erro · linha tracejada = tentativa de recuperação

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação dos casos de uso UC01, UC02 e UC03 com diagramas | Nayra |
