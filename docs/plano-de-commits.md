# Plano de commits

Rode isso na ordem, dentro da pasta do projeto já com os arquivos deste pacote.
Cada bloco = um commit. Isso monta um histórico que mostra o raciocínio, não só o resultado.

```bash
git init
git add README.md .gitignore
git commit -m "docs: adiciona README com contexto do problema e arquitetura"

git add backend/prisma backend/package.json backend/tsconfig.json backend/jest.config.js backend/.env.example
git commit -m "chore: configura projeto backend (TypeScript, Prisma, Jest)"

git add backend/src/lib backend/src/services/holidays.ts
git commit -m "feat: integra API pública de feriados (Nager.Date) com cache por ano"

git add backend/src/services/availability.ts
git commit -m "feat: implementa cálculo de horários disponíveis (regras de negócio)"

git add backend/src/__tests__
git commit -m "test: cobre regra de fim de semana com Jest"

git add backend/src/routes backend/src/server.ts
git commit -m "feat: adiciona endpoints REST (GET /available, POST/GET /appointments)"

git add backend/Dockerfile docker-compose.yml
git commit -m "chore: adiciona Docker e docker-compose para subir banco + backend"

git add frontend
git commit -m "feat: adiciona frontend React para consulta e criação de agendamento"

git add docs/plano-de-commits.md
git commit -m "docs: documenta plano de commits do projeto"
```

## Depois disso

1. Crie o repositório no GitHub e conecte: `git remote add origin <url>` → `git push -u origin main`.
2. Rode `docker compose up --build` e confirme que tudo sobe.
3. Teste manualmente os 3 endpoints (Insomnia/Postman ou pelo próprio frontend).
4. Se quiser ir além do mínimo pedido: adicionar CI (GitHub Actions rodando `npm test`
   a cada push) é o tipo de coisa que separa um teste "que funciona" de um "que parece
   profissional" — e você já documentou isso no seu roadmap de dev jr.
