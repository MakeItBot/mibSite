# Alertas Automáticos de Complicações Pós-Cirurgia

> **URL:** `/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/`
> **Template:** feature-focus | **Keyword:** sinais complicação pós-cirurgia animal
> **Meta description:** O sistema detecta respostas preocupantes do tutor e alerta o veterinário automaticamente. Três níveis de triagem: verde, amarelo, vermelho.

---

## Breadcrumb
`Início > Soluções > Veterinárias > Follow-up Pós-Cirurgia > Alertas de Complicações`

## H1: Alertas Automáticos de Complicações: Detecte Problemas Antes de Se Tornarem Urgências

O tutor nota que a ferida está mais vermelha que ontem. Pensa: "Será normal? Devo ligar?" A maioria decide esperar. Uns ligam a mais, outros a menos. Nenhum dos extremos é ideal — nem para o animal, nem para a clínica.

Os alertas automáticos de complicações do makeit.bot resolvem isto com um sistema de triagem em três cores: verde (tudo normal), amarelo (veterinário avalia remotamente) e vermelho (vá à clínica agora). O tutor sabe quando se preocupar. O veterinário é alertado só quando é relevante.

---

## Como Funciona

### O sistema de triagem em 3 níveis

**🟢 Verde — Recuperação Normal**
O tutor reporta sintomas normais para o dia de recuperação. O sistema responde automaticamente com mensagem de tranquilização.

Exemplo (Dia 2 após castração):
> Tutor: "A ferida está um bocado inchada"
> Sistema: "✅ Ligeiro inchaço nos primeiros 3 dias é completamente normal. Deve reduzir gradualmente. Continue a vigiar e mantenha o colar isabelino."

→ Veterinário **não é notificado**. Zero interrupção.

**🟡 Amarelo — Possível Problema**
O tutor reporta algo que pode ou não ser preocupante. O sistema notifica o veterinário para avaliação remota.

Exemplo (Dia 5 após castração):
> Tutor: "Acho que o Max tem menos apetite e está mais parado que ontem"
> Sistema: "⚠️ Vamos pedir ao veterinário que avalie. Pode enviar uma foto da ferida e uma foto do Max em repouso?"
> → Veterinário recebe notificação: "Check-in amarelo — [Max], Dia 5 pós-castração. Tutor reporta diminuição de apetite e letargia."

[PERSONALIZAR: Descreve como o veterinário recebe esta notificação. App? WhatsApp? Email? Dashboard?]

**🔴 Vermelho — Urgência Provável**
O tutor reporta sinais de alarme graves. O sistema instrui a ir à clínica imediatamente E notifica o veterinário.

Exemplo:
> Tutor: "A ferida está a sangrar"
> Sistema: "🔴 Este é um sinal de alarme. Leve o [Max] à clínica imediatamente. Se estiver fora de horário, contacte a urgência: [número]. Não tente tratar em casa."
> → Veterinário recebe alerta urgente: "🔴 URGÊNCIA — [Max], Dia 3 pós-castração. Hemorragia activa reportada pelo tutor."

---

## O Que Torna Isto Diferente de um Chatbot Genérico

| Chatbot genérico | Alertas makeit.bot |
|-----------------|-------------------|
| Respostas iguais independentemente do contexto | Respostas adaptadas ao dia de recuperação e tipo de cirurgia |
| Não sabe que cirurgia o animal fez | Sabe exactamente: castração, TPLO, extracção dentária... |
| Inchaço no dia 2 = mesma resposta que inchaço no dia 10 | Inchaço no dia 2 = verde. Inchaço no dia 10 = amarelo. |
| Não notifica o veterinário | Triagem automática com notificação ao veterinário |
| Sem contexto do historial | Toda a timeline de recuperação disponível |

**O contexto é tudo.** Uma ferida ligeiramente vermelha no dia 2 é normal. A mesma ferida no dia 10 é preocupante. O sistema sabe a diferença.

[PERSONALIZAR: Esta comparação é forte como argumento de venda. Reforça com exemplos concretos se tiveres.]

---

## Sinais de Alarme por Tipo de Cirurgia

### Castração / Esterilização

| Nível | Sinais |
|-------|--------|
| 🟢 | Ligeiro inchaço (dias 1-3), menor apetite (24h), sonolência (dia 0) |
| 🟡 | Lambedura excessiva, apetite baixo >24h, letargia >48h, inchaço que aumenta após dia 3 |
| 🔴 | Hemorragia activa, febre >39.5°C, vómitos persistentes, pus, prostração |

### Cirurgia Ortopédica

| Nível | Sinais |
|-------|--------|
| 🟢 | Não apoiar pata (dias 1-5), inchaço moderado, claudicação que melhora |
| 🟡 | Claudicação que não melhora após semana 2, inchaço persistente, recusa de exercício leve |
| 🔴 | Dor aguda súbita, membro em posição anormal, ferida aberta, febre |

### Extracção Dentária

| Nível | Sinais |
|-------|--------|
| 🟢 | Saliva com vestígios de sangue (24h), menor apetite (48h), preferir comida mole |
| 🟡 | Sangramento que não para após 24h, recusa total de comer >48h, inchaço facial |
| 🔴 | Hemorragia abundante, febre, dificuldade respiratória |

[PERSONALIZAR: IMPORTANTE — Faz validar estes quadros por um veterinário. Conteúdo clínico errado pode causar danos reais.]

---

## Para o Veterinário: O Que Recebe

Quando um alerta amarelo ou vermelho é activado, o veterinário recebe:

1. **Nível do alerta** (amarelo ou vermelho)
2. **Nome do animal e tutor**
3. **Tipo de cirurgia e dia de recuperação**
4. **O que o tutor reportou** (texto exacto)
5. **Fotos** (se o tutor enviou)
6. **Timeline completa** dos check-ins anteriores
7. **Botão de acção**: Responder ao tutor / Ligar ao tutor / Marcar consulta urgente

O veterinário decide o que fazer com toda a informação disponível. O sistema não toma decisões clínicas — facilita-as.

[PERSONALIZAR: Descreve a interface real. Dashboard? Notificação push? WhatsApp profissional?]

---

## Configuração

### Uma vez por tipo de cirurgia

O veterinário define:
- Quais sinais são verdes, amarelos e vermelhos para cada tipo de cirurgia
- Em que dias cada sinal muda de nível (ex: inchaço dia 2 = verde, dia 10 = amarelo)
- Quem recebe os alertas (veterinário cirurgião, veterinário de serviço, enfermeiro)
- Canal de notificação preferido

O sistema já vem com protocolos sugeridos para as cirurgias mais comuns. O veterinário pode usar como estão ou personalizar.

[PERSONALIZAR: Descreve os protocolos pré-configurados que tens. Quantos? Para que cirurgias?]

---

## FAQ

**O sistema toma decisões clínicas?**
Não. O sistema triagem e notifica. A decisão clínica é sempre do veterinário. Os alertas são baseados em protocolos definidos pelo próprio veterinário.

**E se o tutor reportar algo que não está na lista de sinais?**
[PERSONALIZAR: O sistema usa NLP para interpretar? Ou o tutor escolhe de uma lista? Descreve honestamente.]

**Posso ajustar os níveis de alerta?**
Sim. Cada clínica/veterinário pode ser mais ou menos conservador na triagem. Algumas preferem mais amarelos (cautela extra); outras preferem alertar apenas em casos claros.

**Funciona fora de horário?**
O sistema funciona 24/7. Os alertas vermelhos fora de horário podem ser encaminhados para o veterinário de urgência ou para uma mensagem com o contacto de emergência. [PERSONALIZAR: como funciona no teu sistema?]

**Quantos alertas falsos devo esperar?**
Com os protocolos bem configurados, a taxa de alertas amarelos que se revelam normais ronda os 20-30%. É melhor um alerta a mais do que uma complicação a menos. [PERSONALIZAR: tens dados sobre isto?]

---

## Disclaimer

> ⚠️ Os alertas automáticos são uma ferramenta de apoio, não de diagnóstico. Cada caso é único e a avaliação clínica presencial é insubstituível. Em caso de dúvida, contacte sempre o veterinário.

---

## Relacionados
- [Follow-up pós-castração](/solucoes/veterinarias/followup-pos-cirurgia/pos-castracao/)
- [Follow-up pós-cirurgia ortopédica](/solucoes/veterinarias/followup-pos-cirurgia/pos-cirurgia-ortopedica/)
- [Checklist pós-operatório para tutores](/solucoes/veterinarias/followup-pos-cirurgia/checklist-pos-operatorio/)

### Leia Também
- [Pós-operatório: a etapa mais crítica](/blog/pos-operatorio-etapa-critica/)
- [Como automatizar o follow-up sem perder o toque humano](/blog/automatizar-followup-toque-humano/)

---

**Detecte problemas cedo. Proteja os seus pacientes.**
[Experimentar grátis →](/demo/) | [Falar connosco →](/contacto/)
