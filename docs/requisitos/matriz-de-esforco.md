# 7. Matriz de Esforço

Cruzamento entre **valor entregue** e **complexidade de implementação** para os
casos de uso do MVP e os itens deixados de fora dele (ver [MVP e Escopo](mvp.md)).
Essa matriz justifica visualmente as decisões de priorização.

<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <!-- Quadrantes -->
  <rect x="60" y="20" width="290" height="200" fill="#dcfce7"/>
  <rect x="350" y="20" width="290" height="200" fill="#dbeafe"/>
  <rect x="60" y="220" width="290" height="200" fill="#fef9c3"/>
  <rect x="350" y="220" width="290" height="200" fill="#fecaca"/>

  <!-- Linhas divisórias -->
  <line x1="60" y1="220" x2="640" y2="220" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="350" y1="20" x2="350" y2="420" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Eixos -->
  <text x="30" y="30" font-family="sans-serif" font-size="12" fill="#334155" transform="rotate(-90 30 30)">ALTO</text>
  <text x="30" y="415" font-family="sans-serif" font-size="12" fill="#334155" transform="rotate(-90 30 415)">BAIXO</text>
  <text x="15" y="225" font-family="sans-serif" font-size="13" fill="#334155" font-weight="bold" transform="rotate(-90 15 225)">VALOR</text>
  <text x="65" y="445" font-family="sans-serif" font-size="12" fill="#334155">BAIXO</text>
  <text x="590" y="445" font-family="sans-serif" font-size="12" fill="#334155">ALTO</text>
  <text x="300" y="460" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#334155" font-weight="bold">COMPLEXIDADE</text>

  <!-- Quadrante verde: alto valor, baixa complexidade -->
  <rect x="75" y="35" width="260" height="26" rx="4" fill="#ffffff" stroke="#16a34a"/>
  <text x="205" y="53" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">UC01 Consultar horários disponíveis</text>
  <rect x="75" y="66" width="260" height="26" rx="4" fill="#ffffff" stroke="#16a34a"/>
  <text x="205" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">UC03 Listar agendamentos</text>

  <!-- Quadrante azul: alto valor, alta complexidade -->
  <rect x="365" y="35" width="260" height="26" rx="4" fill="#ffffff" stroke="#2563eb"/>
  <text x="495" y="53" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e3a8a">UC02 Criar agendamento (concorrência)</text>
  <rect x="365" y="66" width="260" height="26" rx="4" fill="#ffffff" stroke="#2563eb"/>
  <text x="495" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e3a8a">Validação automática de feriados</text>

  <!-- Quadrante amarelo: baixo valor, baixa complexidade -->
  <rect x="75" y="235" width="260" height="26" rx="4" fill="#ffffff" stroke="#ca8a04"/>
  <text x="205" y="253" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854d0e">Painel administrativo simples</text>
  <rect x="75" y="266" width="260" height="26" rx="4" fill="#ffffff" stroke="#ca8a04"/>
  <text x="205" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854d0e">Cancelamento de agendamento</text>

  <!-- Quadrante vermelho: baixo valor, alta complexidade -->
  <rect x="365" y="235" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626"/>
  <text x="495" y="253" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Autenticação completa de usuário</text>
  <rect x="365" y="266" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626"/>
  <text x="495" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Múltiplos profissionais/especialidades</text>
  <rect x="365" y="297" width="260" height="26" rx="4" fill="#ffffff" stroke="#dc2626"/>
  <text x="495" y="315" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Notificação por e-mail/SMS/WhatsApp</text>
</svg>

**Legenda:** 🟢 verde = fazer primeiro (alto valor, baixo esforço) · 🔵 azul = grandes apostas (alto valor, alto esforço) · 🟡 amarelo = bom ter (baixo valor, baixo esforço) · 🔴 vermelho = evitar por agora (baixo valor, alto esforço)

## Leitura da matriz

Os dois quadrantes de cima (verde e azul) formam o **MVP**: itens de alto valor,
independente da complexidade. Os itens em vermelho são exatamente os listados como
"fora do MVP" em [MVP e Escopo](mvp.md) — ficaram de fora não por serem
irrelevantes, mas porque a razão valor/esforço não compensa nesta fase do projeto.

## Histórico de Versão

| Data | Versão | Descrição da Alteração | Autor(a) |
|---|---|---|---|
| 2026-09-15 | 1.0 | Criação da matriz de esforço com base nos casos de uso e itens fora do MVP | Nayra |
