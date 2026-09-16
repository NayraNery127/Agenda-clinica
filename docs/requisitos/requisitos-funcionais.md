# 4. Requisitos Funcionais

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

Cada RF está mapeado a um Caso de Uso, além de RNFs e RNs relacionadas. A tabela
completa de rastreabilidade está em
[7. Lista de Itens de Trabalho](/requisitos/lista-de-itens-de-trabalho.md).

RF02–RF05 e RF09 derivam diretamente do problema central descrito em
[1. Cenário Atual e Negócio](/requisitos/cenario-atual.md) (dependência de checagem
manual de feriados/finais de semana). RF08 deriva do desafio de concorrência listado
no mesmo documento.

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Levantamento inicial dos requisitos funcionais | Nayra |
| 2026-09-16 | 1.1 | Adiciona rastreabilidade explícita com Casos de Uso e corrige link relativo quebrado | Nayra |
| 2026-09-16 | 1.2 | Adiciona hyperlinks na tabela de rastreabilidade | Nayra |
| 2026-09-16 | 1.3 | Expande tabela de rastreabilidade para incluir RNFs e RNs relacionadas, no mesmo formato usado no EcoQuest | Nayra |
| 2026-09-16 | 1.4 | Move a tabela de rastreabilidade completa para 7. Lista de Itens de Trabalho, mantendo aqui apenas o link | Nayra |
