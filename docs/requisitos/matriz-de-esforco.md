# 8. Matriz de Esforço

Visualização dos itens da Lista de Itens de Trabalho posicionados por valor
entregue (eixo vertical) e complexidade técnica (eixo horizontal).

<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <rect x="60" y="20" width="290" height="200" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <rect x="350" y="20" width="290" height="200" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>
  <rect x="60" y="220" width="290" height="200" fill="#fef9c3" stroke="#ca8a04" stroke-width="1"/>
  <rect x="350" y="220" width="290" height="200" fill="#fecaca" stroke="#dc2626" stroke-width="1"/>

  <line x1="60" y1="220" x2="640" y2="220" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="350" y1="20" x2="350" y2="420" stroke="#1e293b" stroke-width="1.5"/>

  <text x="65" y="15" font-family="sans-serif" font-size="12" fill="#334155" font-weight="bold">ALTO VALOR</text>
  <text x="65" y="440" font-family="sans-serif" font-size="12" fill="#334155" font-weight="bold">BAIXO VALOR</text>
  <text x="65" y="460" font-family="sans-serif" font-size="12" fill="#334155">Baixa Complexidade</text>
  <text x="480" y="460" font-family="sans-serif" font-size="12" fill="#334155">Alta Complexidade</text>

  <rect x="75" y="35" width="260" height="26" rx="4" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
  <text x="205" y="53" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">UC01 Consultar horarios disponiveis</text>
  <rect x="75" y="66" width="260" height="26" rx="4" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
  <text x="205" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">UC03 Listar agendamentos</text>

  <rect x="365" y="35" width="260" height="26" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
  <text x="495" y="53" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e3a8a">UC02 Criar agendamento</text>

  <rect x="75" y="235" width="260" height="26" rx="4" fill="#ffffff" stroke="#ca8a04" stroke-width="1"/>
  <text x="205" y="253" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854d0e">Cancelamento de agendamento</text>
  <rect x="75" y="266" width="260" height="26" rx="4" fill="#ffffff" stroke="#ca8a04" stroke-width="1"/>
  <text x="205" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854d0e">Painel administrativo simples</text>

  <rect x="365" y="235" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
  <text x="495" y="253" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Autenticacao completa de usuario</text>
  <rect x="365" y="266" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
  <text x="495" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Multiplos profissionais/especialidades</text>
  <rect x="365" y="297" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
  <text x="495" y="315" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Notificacao por email/SMS/WhatsApp</text>
</svg>

**Legenda:** verde = fazer primeiro (alto valor, baixo esforço) · azul = grandes apostas (alto valor, alto esforço) · amarelo = bom ter (baixo valor, baixo esforço) · vermelho = evitar por agora (baixo valor, alto esforço)

## Leitura da matriz

Os quadrantes verde e azul formam o **MVP**: reúnem todo item de alto valor,
independente da complexidade técnica. Os quadrantes amarelo e vermelho são
exatamente os itens listados como fora do MVP — eles não são irrelevantes, apenas
não compensam a razão valor/esforço nesta fase.

---

Ver também: [7. Lista de Itens de Trabalho](/requisitos/lista-de-itens-de-trabalho.md)
(regras de negócio e tabela de priorização que geraram esta matriz).

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação da matriz de esforço com base nos casos de uso e itens fora do MVP | Nayra |
| 2026-09-16 | 2.0 | Substituição por tabela | Nayra |
| 2026-09-16 | 2.1 | Retorno ao diagrama visual (SVG), removendo emojis e caracteres acentuados de dentro do SVG, e correção do link para caminho absoluto | Nayra |
