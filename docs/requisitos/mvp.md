# 3. MVP e Escopo

## O que está no MVP

- [UC01](/requisitos/casos-de-uso.md) — Consulta de horários disponíveis para uma data específica
- Bloqueio automático de feriados nacionais (via API pública) — parte de UC01/UC02
- Bloqueio automático de finais de semana — parte de UC01/UC02
- Bloqueio automático de datas passadas — parte de UC01/UC02
- [UC02](/requisitos/casos-de-uso.md) — Criação de agendamento com nome do paciente, data e horário
- Bloqueio de horário já ocupado (concorrência tratada no banco) — parte de UC02
- [UC03](/requisitos/casos-de-uso.md) — Listagem de agendamentos existentes

## O que está fora do MVP (não implementado de propósito)

- [UC07](/requisitos/casos-de-uso.md) — Autenticação de usuário (login de paciente ou da clínica)
- [UC04](/requisitos/casos-de-uso.md) — Cancelamento ou remarcação de consulta
- [UC06](/requisitos/casos-de-uso.md) — Notificação automática (e-mail, SMS, WhatsApp) de confirmação
- [UC08](/requisitos/casos-de-uso.md) — Múltiplos profissionais/especialidades na mesma clínica
- [UC05](/requisitos/casos-de-uso.md) — Painel administrativo para a recepção gerenciar a agenda
- [UC09](/requisitos/casos-de-uso.md) — Remarcação de agendamento (mover para novo horário numa ação só)
- [UC10](/requisitos/casos-de-uso.md) — Histórico de agendamentos por paciente (não só por data)
- [UC11](/requisitos/casos-de-uso.md) — Configuração do horário de funcionamento (hoje fixo em 08h-18h)
- [UC12](/requisitos/casos-de-uso.md) — Bloqueio manual de datas (férias coletivas, eventos), além dos feriados nacionais

Esses itens ficaram de fora conscientemente para manter o escopo do MVP focado no
problema central (eliminar a triagem manual de disponibilidade), sem expandir para
um sistema de gestão clínica completo.

## Critério de sucesso do MVP

O MVP é considerado funcional quando um paciente consegue, sem qualquer intervenção
humana:

1. Ver quais horários estão livres em uma data válida
2. Criar um agendamento em um desses horários
3. Receber confirmação imediata de que o agendamento foi salvo

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Definição inicial do escopo do MVP | Nayra |
| 2026-09-16 | 1.1 | Adiciona hyperlinks de cada item do MVP e do backlog para seu caso de uso | Nayra |
| 2026-09-16 | 1.2 | Adiciona UC09-UC12 ao backlog (remarcação, histórico, horário configurável, bloqueio manual) | Nayra |
