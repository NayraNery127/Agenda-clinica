# 7. Lista de Itens de Trabalho

## 7.1. Regras de Negócio

| ID | Nome da Regra de Negócio | Descrição |
|---|---|---|
| RN01 | Horário de funcionamento | Consultas só podem ser agendadas entre 08:00 e 18:00 |
| RN02 | Duração da consulta | Cada consulta ocupa exatamente 1 hora |
| RN03 | Bloqueio de feriado | Não é permitido agendamento em feriados nacionais |
| RN04 | Bloqueio de fim de semana | Não é permitido agendamento em sábados ou domingos |
| RN05 | Bloqueio de data passada | Não é permitido agendamento em datas anteriores à data atual |
| RN06 | Unicidade de horário | Não pode haver dois agendamentos na mesma data e horário |

## 7.2. Cálculo de Prioridade

A prioridade final de cada item foi definida pela mesma fórmula usada no EcoQuest:

```text
Valor Final (VF) = Peso (valor entregue) - CT (Complexidade Técnica)
```

Peso e CT são atribuídos em escala de 1 a 10. Quanto maior o VF, maior a prioridade.

## 7.3. Tabela de Priorização

| ID | Nome | Peso | CT | VF (Peso-CT) | MoSCoW | Quadrante | MVP |
|---|---|---|---|---|---|---|---|
| UC01 | Consultar horários disponíveis | 8 | 2 | 6 | Must Have | Quadrante 1 | X |
| UC02 | Criar agendamento | 10 | 4 | 6 | Must Have | Quadrante 2 | X |
| UC03 | Listar agendamentos | 6 | 1 | 5 | Should Have | Quadrante 1 | X |
| — | Cancelamento de agendamento | 5 | 2 | 3 | Should Have | Quadrante 3 | -- |
| — | Painel administrativo simples | 4 | 2 | 2 | Could Have | Quadrante 3 | -- |
| — | Notificação por e-mail/SMS/WhatsApp | 5 | 3 | 2 | Could Have | Quadrante 4 | -- |
| — | Autenticação completa de usuário | 4 | 4 | 0 | Won't Have (por agora) | Quadrante 4 | -- |
| — | Múltiplos profissionais/especialidades | 3 | 4 | -1 | Won't Have (por agora) | Quadrante 4 | -- |

## 7.4. Definição dos Quadrantes

| Quadrante | Característica |
|---|---|
| Quadrante 1 | Alto valor e baixa complexidade |
| Quadrante 2 | Alto valor e alta complexidade |
| Quadrante 3 | Baixo valor e baixa complexidade |
| Quadrante 4 | Baixo valor e alta complexidade |

---

Ver também: [8. Matriz de Esforço](/requisitos/matriz-de-esforco.md) (visualização
gráfica desta priorização).

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação das regras de negócio e da tabela de priorização com cálculo de valor final | Nayra |
