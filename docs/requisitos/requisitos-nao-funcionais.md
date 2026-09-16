# 5. Requisitos Não-Funcionais

| ID | Descrição | Categoria |
|---|---|---|
| RNF01 | A consulta de horários disponíveis deve responder em até 2 segundos em condições normais de rede | Performance |
| RNF02 | O sistema deve funcionar corretamente independente do fuso horário do servidor onde está hospedado (datas tratadas como string, não como objeto `Date` local) | Confiabilidade |
| RNF03 | A lista de feriados de um ano deve ser mantida em cache em memória após a primeira consulta, evitando chamadas repetidas à API externa | Performance |
| RNF04 | O ambiente de desenvolvimento deve ser reproduzível em qualquer máquina via um único comando (`docker compose up --build`) | Portabilidade |
| RNF05 | A regra de negócio mais sensível a erro (cálculo de dia útil) deve ter cobertura de teste automatizado | Manutenibilidade |
| RNF06 | O código deve ser tipado de ponta a ponta (TypeScript no frontend e no backend) para reduzir erros em tempo de execução | Manutenibilidade |
| RNF07 | A interface deve fornecer feedback visual imediato (carregando, sucesso, erro) para toda ação do usuário | Usabilidade |

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Levantamento inicial dos requisitos não-funcionais | Nayra |
