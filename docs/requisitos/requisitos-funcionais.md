# Requisitos Funcionais

| ID | Descrição | Prioridade |
|---|---|---|
| RF01 | O sistema deve permitir que o usuário informe uma data e visualize os horários disponíveis nessa data | Alta |
| RF02 | O sistema deve consultar uma API pública de feriados nacionais para determinar se a data é feriado | Alta |
| RF03 | O sistema deve bloquear automaticamente datas que caiam em feriado nacional | Alta |
| RF04 | O sistema deve bloquear automaticamente datas que caiam em sábado ou domingo | Alta |
| RF05 | O sistema deve bloquear automaticamente datas anteriores à data atual | Alta |
| RF06 | O sistema deve permitir que o usuário informe seu nome ao criar um agendamento | Alta |
| RF07 | O sistema deve permitir a criação de um agendamento em um horário disponível | Alta |
| RF08 | O sistema deve impedir a criação de dois agendamentos no mesmo horário e data | Alta |
| RF09 | O sistema deve revalidar, no backend, todas as regras de bloqueio (feriado, fim de semana, data passada) mesmo que o frontend já tenha validado, para impedir burla via requisição direta à API | Alta |
| RF10 | O sistema deve permitir a listagem de todos os agendamentos já criados | Média |
| RF11 | O sistema deve permitir a filtragem de agendamentos por data | Baixa |

## Rastreabilidade

RF02–RF05 e RF09 derivam diretamente do problema central descrito em
[Cenário Atual e Negócio](cenario-atual.md) (dependência de checagem manual de
feriados/finais de semana). RF08 deriva do desafio de concorrência listado no
mesmo documento.
