# 8. Matriz de Esforço

Visualização dos itens da [7. Lista de Itens de Trabalho](lista-de-itens-de-trabalho.md)
posicionados por valor entregue (eixo vertical) e complexidade técnica (eixo horizontal).

|  | **Baixa Complexidade** | **Alta Complexidade** |
|---|---|---|
| **Alto Valor** | 🟢 **Quadrante 1**<br>UC01 · Consultar horários disponíveis<br>UC03 · Listar agendamentos | 🔵 **Quadrante 2**<br>UC02 · Criar agendamento |
| **Baixo Valor** | 🟡 **Quadrante 3**<br>Cancelamento de agendamento<br>Painel administrativo simples | 🔴 **Quadrante 4**<br>Notificação por e-mail/SMS/WhatsApp<br>Autenticação completa de usuário<br>Múltiplos profissionais/especialidades |

**Legenda:** 🟢 fazer primeiro · 🔵 grandes apostas (essencial, mas custoso) · 🟡 bom ter · 🔴 evitar por agora

## Leitura da matriz

Os quadrantes 1 e 2 (verde e azul) formam o **MVP**: reúnem todo item de alto valor,
independente da complexidade técnica. Os quadrantes 3 e 4 (amarelo e vermelho) são
exatamente os itens listados como "fora do MVP" em [3. MVP e Escopo](mvp.md) — eles
não são irrelevantes, apenas não compensam a razão valor/esforço nesta fase.

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação da matriz de esforço com base nos casos de uso e itens fora do MVP | Nayra |
| 2026-09-16 | 2.0 | Substituição do diagrama SVG por tabela, com valores calculados a partir da Lista de Itens de Trabalho | Nayra |
