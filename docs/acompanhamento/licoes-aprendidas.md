# 10. Lições Aprendidas

Registro honesto dos problemas reais encontrados durante o desenvolvimento — e como
foram resolvidos. Diferente de um relatório polido, o valor aqui está em documentar
o processo real, erros incluídos.

## Ambiente e infraestrutura

- **Docker Desktop precisa estar aberto antes de `docker compose up`.** O comando
  falha silenciosamente com um erro de pipe/socket se o programa Docker Desktop não
  estiver rodando em segundo plano.
- **Espaço em disco baixo corrompe o Git.** Durante o desenvolvimento, o disco ficou
  com menos de 100 MB livres, o que corrompeu o diretório `.git` local no meio de uma
  operação. Solução: `git clone` de novo a partir do GitHub (o histórico remoto nunca
  foi afetado — só a cópia local).
- **Prisma no Alpine Linux precisa de `openssl`.** A imagem `node:20-alpine` não vem
  com essa biblioteca por padrão, e o Prisma Client depende dela em tempo de execução.
  Resolvido adicionando `RUN apk add --no-cache openssl` no Dockerfile.

## Tipagem e lógica

- **`fetch().json()` retorna `unknown`, não o tipo esperado.** TypeScript não infere
  o formato da resposta de uma API externa automaticamente — é preciso um cast
  explícito (`as NagerHoliday[]`) para evitar erro de compilação.
- **Ordem de `setState` importa em fluxos assíncronos.** Um bug real: a mensagem de
  confirmação de agendamento estava sendo apagada porque a função que atualizava a
  lista de horários (`checkAvailability`) resetava a mensagem *depois* dela ter sido
  definida. Corrigido invertendo a ordem das chamadas.
- **Datas como `Date` nativo variam com fuso horário.** Preferimos tratar datas como
  string (`YYYY-MM-DD`) o tempo todo, evitando que o dia mude dependendo de onde o
  código roda.

## Ferramentas de terceiros

- **Plugins de terceiros têm compatibilidade de versão frágil.** Tentamos usar o
  plugin `docsify-mermaid` para diagramas, mas diferentes combinações de versão do
  Mermaid quebravam a renderização de formas imprevisíveis (às vezes silenciosamente).
  Depois de três tentativas de configuração, a solução mais robusta foi abandonar a
  dependência externa e desenhar os diagramas em SVG puro, direto no Markdown — sem
  depender de nenhuma biblioteca JavaScript carregando corretamente.

## Fluxo de trabalho com Git

- **Extrair um `.zip` pode criar uma pasta duplicada dentro da outra**, se o zip já
  contiver a pasta raiz do projeto. Isso gerou confusão real ao navegar entre
  `agendamento/agendamento` no terminal.
- **Branches de vida curta funcionam melhor do que branches por "área" do projeto.**
  A ideia inicial era criar uma branch para "backend" e outra para "frontend" — mas
  isso não converge nunca. O padrão que funcionou foi uma branch por tarefa concreta
  (`fix/mensagem-confirmacao`, `feature/estilo-visual`), que nasce, é mesclada, e
  "morre".

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Registro inicial das lições aprendidas durante o desenvolvimento | Nayra |
