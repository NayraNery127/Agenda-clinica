# Casos de Uso

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
