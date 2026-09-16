# 2. Mapa de Stakeholders

<svg viewBox="0 0 650 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
  <defs>
    <marker id="arrow4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Sistema central -->
  <rect x="250" y="105" width="150" height="50" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
  <text x="325" y="135" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e3a8a">Agenda Clínica</text>

  <!-- Paciente -->
  <rect x="20" y="20" width="140" height="50" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="90" y="50" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Paciente</text>

  <!-- Recepção -->
  <rect x="20" y="190" width="140" height="50" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="90" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Recepção da Clínica</text>

  <!-- Gestão -->
  <rect x="490" y="20" width="140" height="50" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="560" y="50" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#854d0e">Gestão da Clínica</text>

  <!-- Desenvolvedora -->
  <rect x="490" y="190" width="140" height="50" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="560" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#854d0e">Desenvolvedora</text>

  <!-- Linhas -->
  <line x1="160" y1="55" x2="248" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow4)"/>
  <text x="190" y="75" font-family="sans-serif" font-size="9" fill="#64748b">solicita agendamento</text>

  <line x1="160" y1="205" x2="248" y2="145" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow4)"/>
  <text x="180" y="200" font-family="sans-serif" font-size="9" fill="#64748b">reduz volume no WhatsApp</text>

  <line x1="490" y1="55" x2="402" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow4)"/>
  <text x="420" y="75" font-family="sans-serif" font-size="9" fill="#64748b">patrocina/aprova</text>

  <line x1="490" y1="205" x2="402" y2="145" stroke="#475569" stroke-width="1.5" marker-end="url(#arrow4)"/>
  <text x="405" y="200" font-family="sans-serif" font-size="9" fill="#64748b">constrói e mantém</text>
</svg>

**Legenda:** 🟢 verde = usuários diretos do sistema · 🟡 amarelo = patrocinadores/mantenedores

| Stakeholder | Relação com a solução | Interesse principal | Influência |
|---|---|---|---|
| Paciente | Usuário final | Agendar consulta de forma rápida, sem esperar resposta manual | Alta |
| Recepção da clínica | Usuária operacional indireta | Reduzir volume de mensagens repetitivas no WhatsApp | Alta |
| Gestão da clínica | Patrocinadora do sistema | Reduzir erros de agendamento e retrabalho | Média |
| Desenvolvedora (autora) | Responsável técnica | Entregar um sistema correto, testado e documentado | Alta |

## Observação sobre este mapa

Diferente de um projeto com cliente externo real, aqui a "clínica" é um cliente
hipotético definido pelo escopo do teste técnico original. Os interesses descritos
acima foram inferidos a partir do contexto do problema (comunicação por WhatsApp,
volume de mensagens, necessidade de validação automática) — não de entrevistas reais.
Isso é uma limitação intencional deste documento, coerente com a origem do projeto.
