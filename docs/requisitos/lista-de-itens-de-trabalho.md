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

## 7.2. Critérios de Valor

Cada item foi avaliado contra 4 critérios (V = atende, -- = não atende):

| Critério | Descrição |
|---|---|
| C1 | Resolve diretamente o problema central do negócio (triagem manual de horários) |
| C2 | Reduz erro humano ou risco operacional |
| C3 | É pré-requisito técnico para outra funcionalidade do sistema |
| C4 | Foi explicitamente solicitado no escopo original do projeto |

## 7.3. Justificativa de Valor Atribuído

Os itens UC04 a UC08 fazem parte do backlog (fora do MVP atual). Seus casos de uso
completos estão documentados em [6. Casos de Uso](/requisitos/casos-de-uso.md),
marcados como "backlog, não implementado".

| ID | Nome | C1 | C2 | C3 | C4 | VF (critérios atendidos) |
|---|---|---|---|---|---|---|
| UC01 | Consultar horários disponíveis | V | V | V | V | 4 |
| UC02 | Criar agendamento | V | V | -- | V | 3 |
| UC03 | Listar agendamentos | -- | V | -- | V | 2 |
| UC04 | Cancelamento de agendamento | -- | V | -- | -- | 1 |
| UC05 | Painel administrativo simples | -- | V | -- | -- | 1 |
| UC06 | Notificação por e-mail/SMS/WhatsApp | V | V | -- | -- | 2 |
| UC07 | Autenticação completa de usuário | -- | V | -- | -- | 1 |
| UC08 | Múltiplos profissionais/especialidades | -- | -- | -- | -- | 0 |

## 7.4. Cálculo de Prioridade

```text
Peso = VF (critérios atendidos) mapeado em escala de 0 a 10
Valor Final = Peso - CT (Complexidade Técnica)
```

| ID | Nome | VF | Peso | CT | Valor Final (Peso-CT) | MoSCoW | Quadrante | MVP |
|---|---|---|---|---|---|---|---|---|
| UC01 | Consultar horários disponíveis | 4 | 10 | 2 | 8 | Must Have | Quadrante 1 | X |
| UC02 | Criar agendamento | 3 | 8 | 4 | 4 | Must Have | Quadrante 2 | X |
| UC03 | Listar agendamentos | 2 | 6 | 1 | 5 | Should Have | Quadrante 1 | X |
| UC04 | Cancelamento de agendamento | 1 | 3 | 2 | 1 | Could Have | Quadrante 3 | -- |
| UC05 | Painel administrativo simples | 1 | 3 | 2 | 1 | Could Have | Quadrante 3 | -- |
| UC06 | Notificação por e-mail/SMS/WhatsApp | 2 | 6 | 3 | 3 | Could Have | Quadrante 4 | -- |
| UC07 | Autenticação completa de usuário | 1 | 3 | 4 | -1 | Won't Have (por agora) | Quadrante 4 | -- |
| UC08 | Múltiplos profissionais/especialidades | 0 | 0 | 4 | -4 | Won't Have (por agora) | Quadrante 4 | -- |

**Nota sobre consistência:** itens fora do MVP foram mantidos nos quadrantes de baixo
valor mesmo quando seu Peso numérico se aproxima do de itens do MVP (ex.: Notificação,
Peso 6). Isso é intencional — a decisão de escopo do MVP (ver [3. MVP e Escopo](/requisitos/mvp.md))
reflete um julgamento mais amplo do que os 4 critérios isolados conseguem capturar
sozinhos. A pontuação é um apoio à decisão, não um substituto dela.

## 7.5. Definição dos Quadrantes

| Quadrante | Característica |
|---|---|
| Quadrante 1 | Alto valor e baixa complexidade |
| Quadrante 2 | Alto valor e alta complexidade |
| Quadrante 3 | Baixo valor e baixa complexidade |
| Quadrante 4 | Baixo valor e alta complexidade |

## 7.6. Matriz de Esforço

<table style="width:100%; border-collapse:collapse; text-align:center; table-layout:fixed;">
  <tr>
    <td style="border:1px solid #cbd5e1; padding:8px;"></td>
    <td style="border:1px solid #cbd5e1; padding:8px; font-weight:bold;">Baixa Complexidade</td>
    <td style="border:1px solid #cbd5e1; padding:8px; font-weight:bold;">Alta Complexidade</td>
  </tr>
  <tr>
    <td style="border:1px solid #cbd5e1; padding:8px; font-weight:bold;">Alto Valor</td>
    <td style="border:2px solid #16a34a; background:#dcfce7; padding:12px;">
      <strong>Quadrante 1</strong><br>UC01 · Consultar horários<br>UC03 · Listar agendamentos
    </td>
    <td style="border:2px solid #2563eb; background:#dbeafe; padding:12px;">
      <strong>Quadrante 2</strong><br>UC02 · Criar agendamento
    </td>
  </tr>
  <tr>
    <td style="border:1px solid #cbd5e1; padding:8px; font-weight:bold;">Baixo Valor</td>
    <td style="border:2px solid #ca8a04; background:#fef9c3; padding:12px;">
      <strong>Quadrante 3</strong><br>Cancelamento<br>Painel administrativo
    </td>
    <td style="border:2px solid #dc2626; background:#fecaca; padding:12px;">
      <strong>Quadrante 4</strong><br>Notificação · Autenticação · Multiperfil
    </td>
  </tr>
</table>

**Legenda:** verde = fazer primeiro · azul = grandes apostas (essencial, custoso) · amarelo = bom ter · vermelho = evitar por agora

Os quadrantes 1 e 2 formam o **MVP**. Os quadrantes 3 e 4 são os itens listados como
fora do MVP em [3. MVP e Escopo](/requisitos/mvp.md).

## 7.7. Rastreabilidade RF-UC-RNF-RN

| ID | Nome | ID UC | Objetivo UC | RNFs Relacionados | RNs Relacionadas |
|---|---|---|---|---|---|
| RF01 | Consultar disponibilidade | UC01 | Mostrar horários livres numa data | RNF01, RNF02, RNF03, RNF06 | RN03, RN04, RN05 |
| RF02 | Consultar feriados | UC01 | Verificar se a data é feriado nacional | RNF03, RNF06 | RN03 |
| RF03 | Bloquear feriado | UC01 | Impedir agendamento em feriado | RNF03, RNF06 | RN03 |
| RF04 | Bloquear fim de semana | UC01 | Impedir agendamento em sábado/domingo | RNF02, RNF06 | RN04 |
| RF05 | Bloquear data passada | UC01 | Impedir agendamento em data já ocorrida | RNF02, RNF06 | RN05 |
| RF06 | Informar paciente | UC02 | Capturar identificação de quem agenda | RNF06, RNF07 | RN02 |
| RF07 | Criar agendamento | UC02 | Persistir agendamento em horário livre | RNF06, RNF07 | RN01, RN02 |
| RF08 | Impedir conflito de horário | UC02 | Bloquear dois agendamentos no mesmo horário | RNF06 | RN06 |
| RF09 | Revalidar no backend | UC02 | Repetir toda validação, ignorando o frontend | RNF06 | RN03, RN04, RN05, RN06 |
| RF10 | Listar agendamentos | UC03 | Retornar todos os agendamentos | RNF01, RNF06 | RN02 |
| RF11 | Filtrar por data | UC03 | Restringir listagem a uma data | RNF01, RNF06 | RN02 |

Todas as linhas têm pelo menos uma RNF relacionada porque **RNF06 (tipagem
ponta a ponta)** se aplica a toda a base de código, sem exceção. Já **RN02
(duração de 1h por consulta)** aparece em RF06/RF10/RF11 porque a própria noção
de "horário" e "agendamento" manipulada por esses requisitos é definida por essa
regra — mesmo quando o requisito não a aplica diretamente.

---

Ver também: [4. Requisitos Funcionais](/requisitos/requisitos-funcionais.md),
[5. Requisitos Não-Funcionais](/requisitos/requisitos-nao-funcionais.md) e
[6. Casos de Uso](/requisitos/casos-de-uso.md).

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação das regras de negócio e da tabela de priorização com cálculo de valor final | Nayra |
| 2026-09-16 | 2.0 | Unificação com a Matriz de Esforço em uma única página; adição da tabela de justificativa de valor (C1-C4); matriz reconstruída como tabela HTML colorida | Nayra |
| 2026-09-16 | 2.1 | Atribuição de IDs (UC04-UC08) aos itens de backlog, antes sem identificação | Nayra |
| 2026-09-16 | 2.2 | Atualização da referência: UC04-UC08 agora têm casos de uso completos na seção 6 | Nayra |
| 2026-09-16 | 2.3 | Adiciona rastreabilidade completa RF-UC-RNF-RN (movida de Requisitos Funcionais) | Nayra |
