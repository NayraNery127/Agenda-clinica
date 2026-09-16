# 1. Cenário Atual e Negócio

## 1.1. Identificação do Cliente

| | Descrição |
|---|---|
| **Perfil** | Clínica de saúde de pequeno/médio porte |
| **Canal de contato atual** | WhatsApp (atendimento manual por recepção) |
| **Volume estimado** | Dezenas de mensagens por dia solicitando horários |
| **Necessidade central** | Substituir triagem manual de agendamento por um fluxo automatizado |

## 1.2. Introdução ao negócio e contexto

Clínicas de pequeno e médio porte, sem sistema de agendamento próprio, costumam
concentrar o atendimento inicial em canais informais como WhatsApp. O paciente
pergunta diretamente à recepção: *"Tem consulta para tal dia?"*, *"Qual o horário
disponível?"*, *"Dá para marcar comigo?"*.

Esse modelo tem três fragilidades recorrentes:

- **Dependência humana constante**: toda consulta de disponibilidade exige alguém
  disponível para responder, mesmo fora do horário comercial.
- **Erro de checagem manual**: feriados e finais de semana às vezes escapam da
  triagem, gerando agendamentos que precisam ser desmarcados depois.
- **Falta de rastreabilidade**: sem um registro único e estruturado, é difícil saber
  com precisão quais horários já estão ocupados em tempo real.

## 1.3. Identificação do problema

O problema central identificado é que **o processo de verificação e confirmação de
horários depende inteiramente de atendimento humano manual, sem validação automática
de regras de negócio (feriados, finais de semana, conflitos de horário)**.

Causas associadas:

- Ausência de uma fonte única e automatizada da agenda da clínica
- Nenhuma integração com calendário de feriados nacionais
- Checagem de conflito de horário feita "de memória" ou em planilha solta

## 1.4. Desafios do projeto

- **Desafio de confiabilidade**: a validação de feriados e finais de semana precisa
  ser automática e não depender de a recepção lembrar da data certa. Ver
  [RN03 e RN04](/requisitos/lista-de-itens-de-trabalho.md).
- **Desafio de concorrência**: dois pacientes não podem conseguir marcar o mesmo
  horário ao mesmo tempo. Ver [RN06](/requisitos/lista-de-itens-de-trabalho.md) e
  [RNF05](/requisitos/requisitos-nao-funcionais.md).
- **Desafio de simplicidade de uso**: o fluxo de agendamento precisa ser mais rápido
  que mandar mensagem e esperar resposta — senão não há ganho real para o paciente.

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação do documento, estruturação do cenário atual e problema | Nayra |
| 2026-09-16 | 1.1 | Adiciona hyperlinks dos desafios para regras de negócio e RNFs relacionados | Nayra |
