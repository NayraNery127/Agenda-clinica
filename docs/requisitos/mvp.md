# 3. MVP e Escopo

## O que está no MVP

- Consulta de horários disponíveis para uma data específica
- Bloqueio automático de feriados nacionais (via API pública)
- Bloqueio automático de finais de semana
- Bloqueio automático de datas passadas
- Criação de agendamento com nome do paciente, data e horário
- Bloqueio de horário já ocupado (concorrência tratada no banco)
- Listagem de agendamentos existentes

## O que está fora do MVP (não implementado de propósito)

- Autenticação de usuário (login de paciente ou da clínica)
- Cancelamento ou remarcação de consulta
- Notificação automática (e-mail, SMS, WhatsApp) de confirmação
- Múltiplos profissionais/especialidades na mesma clínica
- Painel administrativo para a recepção gerenciar a agenda

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
