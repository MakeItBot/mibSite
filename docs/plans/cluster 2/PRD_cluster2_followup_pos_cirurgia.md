# PRD — Cluster 2: Follow-up Pós-Cirurgia | makeit.bot

**Versão:** 1.0
**Data:** Março 2026
**Cluster:** Follow-up Pós-Cirurgia
**Hub URL:** `/solucoes/veterinarias/followup-pos-cirurgia/`
**Mercado:** Portugal (PT-PT) + EN como expansão

---

## 1. Visão Geral do Cluster

### 1.1 O que é
Sistema automatizado de acompanhamento pós-operatório para clínicas veterinárias. Desde o momento em que o animal sai da cirurgia até à alta completa, o makeit.bot gere a comunicação com o tutor: instruções de cuidados, check-ins de evolução, alertas de sinais de complicação, e agendamento automático de consultas de controlo.

### 1.2 Porque é estratégico
- **Alto valor emocional:** o tutor está ansioso após a cirurgia — quem lhe der suporte ganha lealdade
- **Diferencial competitivo claro:** quase nenhuma clínica em Portugal automatiza o pós-operatório
- **Conexão directa com o Cluster 1:** o follow-up agenda automaticamente as consultas de controlo (cross-sell natural com o agendamento inteligente)
- **Redução de complicações:** acompanhamento proactivo detecta problemas mais cedo, o que é bom para o animal e para a reputação da clínica
- **Receita recorrente:** cada cirurgia gera 2-4 consultas de controlo — follow-up bem feito garante que acontecem

### 1.3 Produtos/Funcionalidades Envolvidas
| Funcionalidade | Descrição |
|---------------|-----------|
| Protocolo pós-operatório automático | Sequência de mensagens configurada por tipo de cirurgia |
| Check-ins de evolução | Perguntas automáticas ao tutor sobre o estado do animal |
| Alertas de sinais de alarme | Mensagens educativas sobre quando contactar a clínica urgentemente |
| Agendamento automático de controlo | Marcação das consultas de seguimento directamente no calendário |
| Relatório de evolução | Timeline do pós-operatório visível para veterinário e tutor |
| Fotos de evolução | Tutor envia fotos da ferida/recuperação; veterinário avalia remotamente |

[PERSONALIZAR: Confirma quais destas funcionalidades existem ou estão planeadas. Remove as que não fazem parte do roadmap.]

---

## 2. Público-Alvo

### 2.1 Quem compra (decisor)
- Directores clínicos / veterinários-proprietários
- Gestores de clínicas e hospitais veterinários
- Veterinários cirurgiões que querem diferenciar o serviço

### 2.2 Quem usa (utilizador)
- Veterinários (configuram protocolos, veem relatórios de evolução)
- Auxiliares/enfermeiros veterinários (monitorizam respostas dos tutores)
- Tutores dos animais (recebem mensagens, respondem check-ins, enviam fotos)

### 2.3 Dores específicas que resolve

**Para o veterinário:**
- "Não sei se o animal está a recuperar bem depois de sair daqui"
- "Os tutores ligam a toda a hora com dúvidas sobre o pós-operatório"
- "Alguns tutores não voltam para a consulta de controlo e o animal pode ter complicações"
- "Não tenho forma de acompanhar remotamente sem ser por telefone"

**Para o tutor:**
- "Não sei se isto é normal ou se devo levar o animal à urgência"
- "Esqueci-me das instruções que o veterinário me deu"
- "Quero mostrar como está a ferida mas não quero incomodar o veterinário"
- "Não me lembro quando é a consulta de controlo"

---

## 3. Arquitectura de Conteúdo

### 3.1 Mapa de Páginas

```
/solucoes/veterinarias/followup-pos-cirurgia/          ← HUB (página pilar)
├── /pos-castracao/                                      ← Spoke: procedimento mais comum
├── /pos-cirurgia-ortopedica/                            ← Spoke: alto valor, longa recuperação
├── /alertas-complicacoes/                               ← Spoke: feature de segurança
├── /por-tipo-animal/                                    ← Spoke: cão vs gato vs exótico
├── /checklist-pos-operatorio/                           ← Spoke: recurso para tutores
└── (futuros: /pos-cirurgia-oftalmologica/, /pos-cirurgia-oncologica/, etc.)
```

### 3.2 Inventário de Páginas

| # | Página | URL | Template | Keyword PT-PT |
|---|--------|-----|----------|--------------|
| 0 | **HUB: Follow-up Pós-Cirurgia** | `/solucoes/veterinarias/followup-pos-cirurgia/` | hub | follow-up pós-cirurgia veterinário |
| 1 | Follow-up Pós-Castração Automático | `.../pos-castracao/` | procedure-specific | acompanhamento pós castração animal |
| 2 | Monitorização Pós-Cirurgia Ortopédica | `.../pos-cirurgia-ortopedica/` | procedure-specific | pós-operatório ortopédico cão |
| 3 | Alertas Automáticos de Complicações | `.../alertas-complicacoes/` | feature-focus | sinais complicação pós-cirurgia animal |
| 4 | Follow-up por Tipo de Animal | `.../por-tipo-animal/` | animal-type | acompanhamento pós-cirurgia gato cão |
| 5 | Checklist Pós-Operatório para Tutores | `.../checklist-pos-operatorio/` | resource | cuidados pós-cirurgia animal checklist |

### 3.3 Blog Posts de Apoio

| # | Título | Slug | Categoria | Prioridade |
|---|--------|------|-----------|------------|
| 1 | Pós-operatório: a etapa mais crítica e mais negligenciada na vet | pos-operatorio-etapa-critica | Gestão Veterinária | P1 — Mês 2 |
| 2 | Como automatizar o follow-up sem perder o toque humano | automatizar-followup-toque-humano | Automação & IA | P1 — Mês 2 |
| 3 | Tutores satisfeitos voltam: o ROI do follow-up bem feito | roi-followup-pos-cirurgia | Dados & Insights | P2 — Mês 3 |

### 3.4 Ferramenta Gratuita (Lead Magnet)

| Ferramenta | URL | Lead Capture | Fase |
|-----------|-----|-------------|------|
| Checklist pós-operatório por procedimento | `/ferramentas/checklist-pos-operatorio/` | WhatsApp/email para receber | Mês 4 |

---

## 4. Dados Estruturados por Spoke

### Template: procedure-specific
Variáveis necessárias por página:
```
{
  "procedure": "nome do procedimento",
  "recovery_time": "tempo médio de recuperação",
  "control_visits": "número de consultas de controlo",
  "control_schedule": "quando acontecem (ex: 3 dias, 7 dias, 15 dias)",
  "common_complications": ["lista de complicações comuns"],
  "alarm_signs": ["sinais que exigem ida à urgência"],
  "care_instructions": ["instruções para o tutor"],
  "followup_messages": [
    { "day": 1, "message": "mensagem do dia 1" },
    { "day": 3, "message": "mensagem do dia 3" },
    ...
  ],
  "stats": {
    "annual_procedures_pt": "nº estimado em Portugal/ano",
    "complication_rate": "taxa de complicações",
    "no_followup_complication_rate": "taxa quando não há follow-up"
  }
}
```

### Template: feature-focus
Variáveis:
```
{
  "feature_name": "nome da funcionalidade",
  "how_it_works": "descrição do funcionamento",
  "channels": ["WhatsApp", "SMS", "Email"],
  "key_metric": "métrica principal de impacto",
  "setup_time": "tempo de configuração",
  "customization_options": ["lista de opções configuráveis"]
}
```

### Template: animal-type
Variáveis:
```
{
  "animal": "tipo de animal",
  "specific_needs": "necessidades específicas de recuperação",
  "common_surgeries": ["cirurgias mais comuns"],
  "recovery_differences": "como difere de outros animais",
  "tutor_concerns": ["preocupações típicas do tutor"]
}
```

### Template: resource
Variáveis:
```
{
  "resource_type": "checklist / guia / template",
  "target_audience": "tutor / veterinário / auxiliar",
  "format": "interactivo / PDF / mensagem",
  "lead_capture": "como captura o lead",
  "procedures_covered": ["lista de procedimentos cobertos"]
}
```

---

## 5. Links Internos — Mapa do Cluster 2

### 5.1 Links dentro do cluster

| De | Para | Tipo |
|----|------|------|
| HUB | Todos os 5 spokes | Cards/links no corpo |
| Cada spoke | HUB | Breadcrumb + link contextual |
| pos-castracao | alertas-complicacoes | Link no corpo (secção de sinais de alarme) |
| pos-cirurgia-ortopedica | alertas-complicacoes | Link no corpo |
| por-tipo-animal | pos-castracao, pos-cirurgia-ortopedica | Links por procedimento comum |
| checklist-pos-operatorio | todos os outros spokes | Links por procedimento |
| alertas-complicacoes | pos-castracao, pos-cirurgia-ortopedica | Exemplos por procedimento |

### 5.2 Links para outros clusters

| De (Cluster 2) | Para (outro cluster) | Contexto |
|----------------|---------------------|----------|
| HUB | C1: Agendamento Inteligente | "As consultas de controlo são agendadas automaticamente" |
| pos-castracao | C3: Calendário de Vacinas | "Após a castração, o calendário de vacinas pode precisar de ajuste" |
| checklist-pos-operatorio | C1: Lembretes Automáticos | "Receba lembretes das consultas de controlo" |
| por-tipo-animal | C4: Prontuário Inteligente | "Todo o histórico cirúrgico fica no prontuário" |

### 5.3 Links de blog posts para este cluster

| Blog Post | Link para | Contexto |
|-----------|----------|----------|
| "Pós-operatório: etapa mais crítica" | HUB + alertas-complicacoes | Problema → solução |
| "Automatizar follow-up sem perder toque humano" | HUB + pos-castracao | Funcionalidade em acção |
| "ROI do follow-up bem feito" | HUB + checklist | Dados → ferramenta |

---

## 6. SEO — Dados por Página

### 6.1 Keywords e Estimativa de Volume

| Página | Keyword PT-PT | Volume Estimado (PT) | Dificuldade |
|--------|--------------|---------------------|-------------|
| HUB | follow-up pós-cirurgia veterinário | Baixo (50-100) | Baixa |
| pos-castracao | acompanhamento pós castração animal | Médio (100-300) | Baixa |
| pos-cirurgia-ortopedica | pós-operatório ortopédico cão | Médio (100-200) | Baixa |
| alertas-complicacoes | sinais complicação pós-cirurgia animal | Médio (200-500) | Baixa |
| por-tipo-animal | cuidados pós-cirurgia gato / cão | Médio (200-500) | Baixa-Média |
| checklist-pos-operatorio | cuidados pós-cirurgia animal checklist | Médio (100-300) | Baixa |

[PERSONALIZAR: OBRIGATÓRIO validar estes volumes com Ubersuggest, Semrush ou Ahrefs antes de produzir conteúdo. Os valores são estimativas e o mercado PT pode ser diferente.]

**Nota importante:** As keywords deste cluster têm uma particularidade interessante — muitas são pesquisadas por tutores (não por veterinários). "Sinais complicação pós-cirurgia animal" é algo que um tutor preocupado pesquisa. Isso significa que estas páginas podem trazer tráfego de tutores, que depois podem recomendar o makeit.bot à clínica deles. É uma via indirecta de aquisição.

### 6.2 Schema Markup por Página

**HUB e Spokes de procedimento:**
- `SoftwareApplication` (para o produto)
- `FAQPage` (para as perguntas frequentes)
- `BreadcrumbList` (navegação)
- `HowTo` (para os protocolos de cuidados — schema novo, bom para featured snippets)

**Checklist (resource):**
- `HowTo` (passos do checklist)
- `FAQPage`

---

## 7. Diferenças PT-PT vs EN para Este Cluster

| Aspecto | Portugal (PT-PT) | EN |
|---------|-----------------|-----|
| Cirurgia mais comum | Castração/esterilização | Spay/neuter |
| Termos técnicos | "Pós-operatório", "pontos", "colar isabelino" | "Post-op", "sutures/stitches", "e-collar/cone" |
| Canal de follow-up | WhatsApp dominante | SMS + email + app |
| Preocupação do tutor | "Posso ligar se houver problema?" | "Is there a 24/7 number?" |
| Tom | Próximo, empático, "não se preocupe" | Professional, reassuring, "here's what to watch for" |
| Regulação | OMV, DGAV | State/national vet boards |
| Custo como argumento | Sim — "evite idas desnecessárias à urgência" | Menos — foco em "peace of mind" |

---

## 8. Métricas de Sucesso — Cluster 2

| Métrica | Mês 1 | Mês 3 | Mês 6 |
|---------|-------|-------|-------|
| Páginas indexadas | 6 | 6 | 6 + versões EN |
| Sessões orgânicas do cluster/mês | 30 | 150 | 500 |
| Keywords rankeando top 20 | 3 | 8 | 15 |
| Leads gerados pelo cluster | 2 | 8 | 20 |
| Checklist downloads/mês | — | 20 | 50 |

---

## 9. Roadmap de Produção

### Semana 1 (produção de conteúdo)
- [ ] Reescrever HUB com voz própria
- [ ] Reescrever spoke pos-castracao (o mais importante — procedimento mais comum)
- [ ] Reescrever spoke alertas-complicacoes (alto volume de busca por tutores)

### Semana 2 (restantes spokes + blog)
- [ ] Reescrever spoke pos-cirurgia-ortopedica
- [ ] Reescrever spoke por-tipo-animal
- [ ] Reescrever spoke checklist-pos-operatorio
- [ ] Escrever blog post "Pós-operatório: etapa mais crítica"
- [ ] Escrever blog post "Automatizar follow-up sem perder toque humano"

### Semana 3 (publicação + monitorização)
- [ ] Publicar todas as páginas
- [ ] Verificar indexação no Google Search Console
- [ ] Adicionar links internos do Cluster 1 para o Cluster 2
- [ ] Actualizar hub de veterinárias com link para este cluster
- [ ] Submeter sitemap actualizado

### Mês 3-4
- [ ] Criar ferramenta Checklist Pós-Operatório interactiva
- [ ] Escrever blog post "ROI do follow-up bem feito"
- [ ] Iniciar versão EN do hub

---

## 10. Riscos Específicos do Cluster 2

| Risco | Mitigação |
|-------|-----------|
| Conteúdo médico pode ser sensível — tutores podem tomar decisões clínicas baseadas nele | Disclaimer em todas as páginas: "Esta informação não substitui a consulta veterinária" |
| Protocolos pós-operatórios variam entre veterinários | Apresentar como "protocolo genérico configurável", não como recomendação clínica |
| Funcionalidade de fotos pode ter implicações RGPD | Consentimento explícito; dados apagados após alta; encriptação |
| Poucos dados estatísticos sobre pós-operatório em Portugal | Usar dados europeus/internacionais e ser transparente sobre as fontes |

---

*Próximo cluster: Cluster 3 — Calendário de Vacinas & Preventivos*
