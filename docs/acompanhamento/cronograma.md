# 11. Cronograma e Entregas

Linha do tempo das fases do projeto, do levantamento do problema até a publicação
da documentação.

| Fase | O que foi entregue |
|---|---|
| 1. Levantamento do problema | Análise do contexto (clínica, WhatsApp, agendamento manual) e definição do escopo técnico |
| 2. Backend | API REST em Express, integração com API de feriados, regras de negócio (feriado, fim de semana, data passada, conflito de horário), persistência em PostgreSQL via Prisma |
| 3. Testes automatizados | Cobertura da regra de negócio mais sensível a erro (cálculo de dia útil) com Jest |
| 4. Containerização | Dockerfile do backend e `docker-compose.yml` orquestrando banco + backend |
| 5. Frontend | Interface React consumindo os três endpoints, com fluxo completo de consulta e agendamento |
| 6. Refinamento visual | Reformulação da interface com Tailwind CSS: cartão central, toasts de feedback, estados de carregamento |
| 7. Correções de UX | Bloqueio de datas passadas com aviso imediato, sem depender de tentativa e erro |
| 8. Engenharia de Requisitos | Documentação retroativa: cenário atual, stakeholders, MVP, RFs, RNFs, casos de uso, matriz de esforço |
| 9. Publicação | Site de documentação publicado via GitHub Pages, com diagramas e histórico de decisões |

## Observação sobre a ordem

Note que, neste projeto, a documentação de requisitos (fase 8) veio **depois** da
implementação (fases 2–7) — o inverso da ordem ideal em um processo real de
Engenharia de Software. Isso é reconhecido intencionalmente: o objetivo aqui foi
demonstrar a capacidade de aplicar o raciocínio de requisitos a um sistema já
existente, não simular um processo que não ocorreu.

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação do cronograma de fases do projeto | Nayra |
