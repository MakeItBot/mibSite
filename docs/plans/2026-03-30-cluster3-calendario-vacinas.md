# Cluster 3: Calendário de Vacinas & Preventivos Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Cluster 3 (Calendário de Vacinas & Preventivos) with 1 hub + 6 spokes to the programmatic SEO system, reusing existing dynamic routes, adding 3 new templates, and integrating with i18n.

**Architecture:** Identical to Cluster 1 & 2. The existing `[cluster]/page.tsx` and `[cluster]/[spoke]/page.tsx` dynamic routes handle ALL clusters automatically — only the JSON data, template components, and `clusters.ts` registration are needed. No new route files.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, lucide-react, shadcn/ui Button

---

## Task 1: Create Enriched Cluster 3 JSON

**Files:**
- Create: `src/data/clusters/calendario-vacinas.json`

**Step 1: Write the JSON file**

The existing `Spoke` TypeScript interface requires: `id`, `slug`, `url`, `template`, `title`, `h1`, `meta_description`, `keyword_primary`, `keywords_secondary`, `variables`, `faq`, `cta`, `related_spokes`, `related_posts`. All must be present.

Create `src/data/clusters/calendario-vacinas.json`:

```json
{
  "cluster_id": "calendario-vacinas",
  "cluster_name": "Calendário de Vacinas & Preventivos",
  "hub": {
    "slug": "calendario-vacinas",
    "url": "/solucoes/veterinarias/calendario-vacinas/",
    "title": "Calendário de Vacinas e Preventivos Automático | makeit.bot",
    "h1": "Calendário de Vacinas e Preventivos Automático para a Sua Clínica",
    "meta_description": "Sistema de gestão vacinal com lembretes automáticos, calendário por animal e marcação integrada. Nunca mais perca uma vacina de reforço.",
    "keyword_primary": "calendário vacinas cão gato",
    "keywords_secondary": [
      "lembretes vacinação automáticos veterinária",
      "gestão calendário vacinas clínica vet",
      "sistema vacinação animal automático"
    ]
  },
  "spokes": [
    {
      "id": "C3-S01",
      "slug": "vacinas-cachorro-filhote",
      "url": "/solucoes/veterinarias/calendario-vacinas/vacinas-cachorro-filhote/",
      "template": "lifecycle-stage",
      "title": "Vacinas para Cachorros e Gatinhos: Primo-Vacinação | makeit.bot",
      "h1": "Primo-Vacinação de Filhotes: Como Garantir Que Nenhuma Dose É Perdida",
      "meta_description": "A primo-vacinação de cachorros e gatinhos exige várias consultas em poucas semanas. Descubra como garantir que nenhum tutor perde uma dose.",
      "keyword_primary": "vacinas cachorro filhote quando",
      "keywords_secondary": [
        "primo-vacinação cachorro automático",
        "vacinas gatinho filhote protocolo",
        "lembrete vacina filhote veterinária"
      ],
      "variables": {
        "lifecycle_stage": "Filhote",
        "stage_description": "Período de primo-vacinação — várias consultas num curto espaço de tempo",
        "challenge": "O tutor tem entusiasmo alto na primeira consulta mas perde-se nas doses seguintes. Sem lembretes, muitos não completam o protocolo.",
        "key_message": "São necessárias várias doses — uma única vacina raramente é suficiente para protecção completa. Os intervalos importam.",
        "step_1": "Na primeira consulta: O veterinário regista a vacina. O sistema calcula as datas das próximas doses com base no protocolo da clínica.",
        "step_2": "Lembretes automáticos: Antes de cada dose, o tutor recebe lembrete por WhatsApp com link para marcação.",
        "step_3": "Se o tutor não marca: Lembrete de follow-up. Se continua sem marcar, a clínica é notificada.",
        "step_4": "Após a última dose: Mensagem de parabéns + informação sobre o reforço seguinte.",
        "step_5": "Informação educativa: Junto com cada lembrete, informação relevante definida pelo veterinário.",
        "disclaimer": "O protocolo vacinal deve ser definido pelo veterinário, adaptado a cada animal (espécie, raça, idade, estilo de vida, região). A informação nesta página é genérica e não substitui consulta profissional.",
        "cta_headline": "Nunca mais perca uma dose de primo-vacinação."
      },
      "faq": [
        {
          "question": "Quantas consultas de vacinação precisa um filhote?",
          "answer": "Depende do protocolo definido pelo veterinário — tipicamente entre 2 e 4 consultas nas primeiras semanas de vida. Consulte o seu veterinário para o plano específico do seu animal."
        },
        {
          "question": "O que acontece se atrasar uma dose?",
          "answer": "Depende do atraso e da vacina. O veterinário avalia caso a caso. O sistema de lembretes existe exactamente para evitar que isto aconteça."
        },
        {
          "question": "Quando posso passear o cachorro na rua?",
          "answer": "O veterinário indicará quando é seguro. Normalmente, após completar o protocolo de primo-vacinação."
        },
        {
          "question": "O sistema define o protocolo vacinal?",
          "answer": "Não. O protocolo é sempre definido pelo veterinário. O sistema limita-se a gerir as datas e enviar lembretes."
        }
      ],
      "cta": {
        "primary": { "text": "Experimentar Grátis", "url": "/contact/" },
        "secondary": { "text": "Ver como funciona", "url": "/contact/" }
      },
      "related_spokes": ["vacinas-adulto", "vacina-antirrabica-obrigatoria-portugal", "lembretes-automaticos-vacinacao"],
      "related_posts": ["clientes-perdidos-vacina", "receita-recorrente-vacinas"]
    },
    {
      "id": "C3-S02",
      "slug": "vacinas-adulto",
      "url": "/solucoes/veterinarias/calendario-vacinas/vacinas-adulto/",
      "template": "lifecycle-stage",
      "title": "Vacinas Anuais para Cães e Gatos Adultos | makeit.bot",
      "h1": "Reforço Vacinal Periódico: O Motor de Receita Recorrente da Sua Clínica",
      "meta_description": "O reforço vacinal periódico é o motor de receita recorrente da clínica. Automatize lembretes e garanta que os tutores não se esquecem.",
      "keyword_primary": "vacina anual cão gato",
      "keywords_secondary": [
        "reforço vacinal automático veterinária",
        "lembrete vacinação anual cão",
        "sistema vacinas adulto clínica"
      ],
      "variables": {
        "lifecycle_stage": "Adulto",
        "stage_description": "Reforço periódico durante toda a vida do animal — a consulta mais previsível e repetível",
        "challenge": "A maioria dos tutores que não faz o reforço simplesmente esqueceu-se. Não porque não se importa. Não porque mudou de clínica. Simplesmente porque ninguém lembrou.",
        "key_message": "A primo-vacinação acontece uma vez. O reforço acontece periodicamente — durante toda a vida do animal. Cada reforço perdido é uma consulta que desaparece.",
        "reminder_sequence": "Com antecedência: mensagem informativa + link para marcar. Próximo da data: pedido de marcação mais directo. Se não marcou: follow-up gentil. Em atraso: lembrete com nota sobre importância do reforço.",
        "added_value": "A consulta periódica é uma oportunidade de: detectar problemas precoces, recomendar desparasitação e antiparasitários, actualizar peso e prontuário, recomendar exames geriátricos, renovar a relação com o tutor.",
        "disclaimer": "O protocolo vacinal deve ser definido pelo veterinário. Esta informação é genérica.",
        "cta_headline": "Nunca mais perca um reforço."
      },
      "faq": [
        {
          "question": "O sistema sabe quando vence o reforço?",
          "answer": "Sim. A partir da data da última vacinação e do protocolo definido pelo veterinário, calcula automaticamente a data do próximo reforço."
        },
        {
          "question": "E se o veterinário usar vacinas com validade de 3 anos?",
          "answer": "O protocolo é configurável. Se determinada vacina tem reforço trianual e outra é anual, o sistema gere as duas frequências separadamente."
        },
        {
          "question": "O tutor pode ver o calendário do animal?",
          "answer": "O tutor recebe os lembretes directamente por WhatsApp, com as datas relevantes. Para detalhes, consulte o veterinário."
        }
      ],
      "cta": {
        "primary": { "text": "Recuperar Reforços em Atraso", "url": "/contact/" },
        "secondary": { "text": "Experimentar Grátis", "url": "/contact/" }
      },
      "related_spokes": ["vacinas-cachorro-filhote", "lembretes-automaticos-vacinacao", "vacina-antirrabica-obrigatoria-portugal"],
      "related_posts": ["clientes-perdidos-vacina", "receita-recorrente-vacinas"]
    },
    {
      "id": "C3-S03",
      "slug": "lembretes-automaticos-vacinacao",
      "url": "/solucoes/veterinarias/calendario-vacinas/lembretes-automaticos-vacinacao/",
      "template": "feature-focus",
      "title": "Lembretes Automáticos de Vacinação para Veterinárias | makeit.bot",
      "h1": "Lembretes Automáticos de Vacinação para a Sua Clínica",
      "meta_description": "Envie lembretes automáticos de vacinação por WhatsApp e SMS. O tutor recebe aviso antes da data de reforço. Nunca mais perca uma vacina.",
      "keyword_primary": "lembrete vacina animal automático",
      "keywords_secondary": [
        "lembretes automáticos vacinação WhatsApp",
        "notificação vacina reforço animal",
        "sistema lembretes veterinária"
      ],
      "variables": {
        "feature_name": "Lembretes Automáticos de Vacinação",
        "how_it_works": "O veterinário define o protocolo vacinal de cada animal. O sistema calcula a data do próximo reforço e envia lembretes com antecedência configurável, incluindo link directo para marcação online.",
        "key_metric": "Redução de trabalho manual da recepcionista — de horas por semana a zero",
        "channels": ["WhatsApp", "SMS"],
        "differentiator": "Proactivo vs reactivo. Lembretes de vacinação contactam o tutor ANTES de haver marcação — o objectivo é gerar a marcação, não confirmar uma existente.",
        "personalization": "Antecedência configurável | Número de follow-ups | Canal preferido | Mensagens personalizáveis por vacina",
        "integration": "Cada lembrete inclui link para o sistema de marcação. O tutor recebe, clica, marca. Os lembretes de consulta activam-se automaticamente.",
        "comparison_reminder_appointment": "Lembretes de consulta: consulta já marcada, objetivo reduzir no-show. Lembretes de vacinação: sem marcação, objetivo gerar marcação.",
        "rgpd_note": "Opt-out gerido automaticamente — requisito RGPD cumprido."
      },
      "faq": [
        {
          "question": "Quanto custa enviar lembretes?",
          "answer": "O custo por mensagem WhatsApp ronda alguns cêntimos. Para a maioria das clínicas, o custo mensal total é uma fracção de uma única consulta de vacinação."
        },
        {
          "question": "O tutor pode pedir para não receber?",
          "answer": "Sim. É um requisito RGPD e o sistema gere opt-out automaticamente."
        },
        {
          "question": "Qual a diferença entre lembretes de vacinação e lembretes de consulta?",
          "answer": "Os lembretes de consulta confirmam uma marcação que já existe. Os lembretes de vacinação são proactivos — contactam o tutor antes de haver marcação, para que a faça. São dois sistemas complementares."
        }
      ],
      "cta": {
        "primary": { "text": "Activar Lembretes de Vacinação", "url": "/contact/" },
        "secondary": { "text": "Ver demonstração", "url": "/contact/" }
      },
      "related_spokes": ["vacinas-cachorro-filhote", "vacinas-adulto", "desparasitacao"],
      "related_posts": ["clientes-perdidos-vacina", "receita-recorrente-vacinas"]
    },
    {
      "id": "C3-S04",
      "slug": "desparasitacao",
      "url": "/solucoes/veterinarias/calendario-vacinas/desparasitacao/",
      "template": "preventive-type",
      "title": "Desparasitação: Automatize os Lembretes para os Seus Clientes | makeit.bot",
      "h1": "Desparasitação: Automatize os Lembretes para os Seus Clientes",
      "meta_description": "Automatize lembretes de desparasitação para os tutores da sua clínica. O sistema lembra quando é altura — conforme o protocolo definido pelo veterinário.",
      "keyword_primary": "desparasitação cão gato",
      "keywords_secondary": [
        "lembrete desparasitação automático animal",
        "gestão desparasitação clínica veterinária",
        "quando desparasitar cão gato"
      ],
      "variables": {
        "preventive_type": "Desparasitação",
        "sub_types": "Interna (comprimido/pasta) | Externa (pipeta/coleira/spray)",
        "challenge": "A desparasitação é feita em casa pelo tutor. Sem lembrete externo, é das coisas mais fáceis de esquecer. O tutor não sabe se era mensal ou trimestral. Ou deu a interna mas esqueceu a externa.",
        "config_by_vet": "Tipo (interna, externa ou ambas) | Frequência conforme protocolo | Produto habitual (opcional)",
        "reminder_content": "Tipo de desparasitação a fazer | Produto recomendado se configurado | Opção de comprar na clínica ou confirmar que já tem em casa",
        "revenue_impact_1": "Venda de produto: os tutores que recebem lembrete tendem a comprar na clínica.",
        "revenue_impact_2": "Consultas: tutores que passam na clínica para comprar muitas vezes agendam check-up.",
        "protocol_note": "A frequência e o tipo de desparasitação dependem de: espécie e idade, estilo de vida, região geográfica, época do ano, condição de saúde. O veterinário é quem define.",
        "disclaimer": "A frequência e tipo de desparasitação devem ser definidos pelo veterinário. A informação nesta página é genérica."
      },
      "faq": [
        {
          "question": "O sistema decide a frequência de desparasitação?",
          "answer": "Não. O veterinário define. O sistema gere as datas e envia lembretes conforme esse protocolo."
        },
        {
          "question": "Lembra de interna E externa separadamente?",
          "answer": "Sim. São ciclos independentes, cada um com a sua própria frequência e datas de lembrete."
        },
        {
          "question": "Posso configurar frequências diferentes por animal?",
          "answer": "Sim. Cada animal pode ter o seu protocolo personalizado conforme o veterinário definir."
        },
        {
          "question": "E se o tutor comprar o produto online ou na farmácia?",
          "answer": "O lembrete funciona independentemente de onde compra. A clínica pode incluir opção de compra directa na mensagem."
        }
      ],
      "cta": {
        "primary": { "text": "Automatizar Lembretes de Desparasitação", "url": "/contact/" },
        "secondary": { "text": "Experimentar Grátis", "url": "/contact/" }
      },
      "related_spokes": ["antiparasitarios-protocolo", "lembretes-automaticos-vacinacao"],
      "related_posts": ["receita-recorrente-vacinas"]
    },
    {
      "id": "C3-S05",
      "slug": "antiparasitarios-protocolo",
      "url": "/solucoes/veterinarias/calendario-vacinas/antiparasitarios-protocolo/",
      "template": "preventive-type",
      "title": "Antiparasitários: Protocolo Adaptado à Região | makeit.bot",
      "h1": "Antiparasitários: Protocolo Adaptado à Sua Região",
      "meta_description": "O risco parasitário varia por região e estação. O makeit.bot adapta os lembretes ao protocolo definido pelo veterinário conforme a realidade local.",
      "keyword_primary": "antiparasitários quando aplicar",
      "keywords_secondary": [
        "antiparasitários cão gato portugal",
        "protocolo antiparasitário regional",
        "lembretes antiparasitários automáticos"
      ],
      "variables": {
        "preventive_type": "Antiparasitários",
        "sub_types": "Pulgas | Carraças | Flebótomos (leishmaniose) | Mosquitos (filariose)",
        "challenge": "Portugal tem climas diversos e o risco parasitário varia por região. O protocolo de uma clínica no norte pode ser diferente do de uma no Algarve.",
        "config_by_vet": "Protocolo base (frequência e tipo) | Variações sazonais se aplicável | Alertas para doenças endémicas da região",
        "seasonality": "A actividade parasitária tende a ser mais intensa nos meses mais quentes. Em zonas do sul e litoral pode manter-se durante todo o ano.",
        "seasonal_alert": "O sistema pode enviar alertas sazonais para lembrar tutores de reforçar a protecção na mudança de estação.",
        "protocol_factors": "Localização geográfica | Estilo de vida (interior/exterior, rural/urbano) | Época do ano | Espécie e raça | Doenças endémicas da região",
        "disclaimer": "O protocolo antiparasitário deve ser definido pelo veterinário conforme a região, espécie e estilo de vida do animal. Para informação sobre doenças endémicas, consulte o veterinário ou a DGAV."
      },
      "faq": [
        {
          "question": "O protocolo é igual para cães e gatos?",
          "answer": "Geralmente não. Gatos indoor precisam de menos protecção externa que gatos outdoor ou cães. O veterinário define o protocolo adequado para cada animal."
        },
        {
          "question": "E animais que viajam?",
          "answer": "O veterinário pode ajustar o protocolo temporariamente para animais que viajam para regiões com maior risco parasitário."
        },
        {
          "question": "O sistema recomenda produtos específicos?",
          "answer": "O sistema pode incluir o nome do produto habitual no lembrete, se o veterinário o configurar. Não faz recomendações autónomas de produtos."
        }
      ],
      "cta": {
        "primary": { "text": "Proteger os Seus Pacientes", "url": "/contact/" },
        "secondary": { "text": "Experimentar Grátis", "url": "/contact/" }
      },
      "related_spokes": ["desparasitacao", "lembretes-automaticos-vacinacao"],
      "related_posts": ["receita-recorrente-vacinas"]
    },
    {
      "id": "C3-S06",
      "slug": "vacina-antirrabica-obrigatoria-portugal",
      "url": "/solucoes/veterinarias/calendario-vacinas/vacina-antirrabica-obrigatoria-portugal/",
      "template": "compliance",
      "title": "Vacina Antirrábica Obrigatória em Portugal | makeit.bot",
      "h1": "Vacina Antirrábica em Portugal: O Que Precisa de Saber",
      "meta_description": "A vacina antirrábica é obrigatória para cães em Portugal. Saiba como garantir que nenhum paciente da sua clínica fica em incumprimento.",
      "keyword_primary": "vacina antirrábica cão obrigatória portugal",
      "keywords_secondary": [
        "antirrábica obrigatória cão portugal",
        "passaporte europeu animal viagem",
        "vacina antirrábica reforço veterinária"
      ],
      "variables": {
        "compliance_topic": "Vacina Antirrábica",
        "legal_status": "Obrigatória por lei para cães em Portugal",
        "certain_facts": "A vacina antirrábica é obrigatória para cães em Portugal | O incumprimento pode resultar em sanções para o tutor | É necessária para o Passaporte Europeu para Animais de Companhia | O reforço é periódico conforme indicação do veterinário e legislação",
        "official_sources": "DGAV — dgav.pt | OMV — omv.pt | Legislação — dre.pt",
        "legal_warning": "Não incluir valores de coimas (podem mudar). Sempre redirigir para DGAV para detalhes actualizados.",
        "passport_requirements": "Para viajar com cão, gato ou furão na UE: Microchip + Vacina antirrábica em dia + Passaporte Europeu emitido por veterinário autorizado.",
        "clinic_risk": "Sem sistema automático, a clínica não tem forma prática de identificar quais pacientes têm antirrábica em atraso.",
        "compliance_panel": "Vista de todos os cães com estado: Em dia (verde) | A vencer em breve (amarelo) | Em atraso (vermelho)",
        "seasonal_opportunity": "Antes da época de férias: alertar tutores cujos cães têm antirrábica a expirar — essencial para quem viaja.",
        "cat_note": "Para gatos: não obrigatória em Portugal em situação normal, mas necessária para viagens com Passaporte Europeu. Confirmar com veterinário.",
        "disclaimer": "A informação legal nesta página é de carácter informativo e genérico. A legislação pode ser alterada. Para informação vinculativa, consulte as fontes oficiais."
      },
      "faq": [
        {
          "question": "A antirrábica é mesmo obrigatória?",
          "answer": "Sim, para cães em Portugal. Consulte o site da DGAV (dgav.pt) para detalhes sobre a legislação em vigor."
        },
        {
          "question": "E para gatos?",
          "answer": "Em Portugal, a antirrábica não é obrigatória para gatos em situação normal — mas é necessária para viagens internacionais com Passaporte Europeu. Consulte o veterinário."
        },
        {
          "question": "Qual a multa por não vacinar?",
          "answer": "Existem sanções previstas na lei. Para valores actualizados, consulte a DGAV (dgav.pt)."
        },
        {
          "question": "Com que frequência é o reforço?",
          "answer": "Conforme indicação do veterinário e legislação em vigor. O sistema envia lembrete automaticamente antes da data de reforço."
        },
        {
          "question": "O meu cão nunca sai de casa. Precisa na mesma?",
          "answer": "A obrigação legal aplica-se a todos os cães, independentemente do estilo de vida. Consulte o veterinário."
        }
      ],
      "cta": {
        "primary": { "text": "Garantir Compliance Automático", "url": "/contact/" },
        "secondary": { "text": "Ver painel de cobertura vacinal", "url": "/contact/" }
      },
      "related_spokes": ["vacinas-cachorro-filhote", "vacinas-adulto", "lembretes-automaticos-vacinacao"],
      "related_posts": ["clientes-perdidos-vacina"]
    }
  ],
  "blog_posts_support": [
    {
      "slug": "clientes-perdidos-vacina",
      "title": "Quantos Clientes Perde por Não Lembrar da Vacina?",
      "category": "gestao-veterinaria",
      "target_keywords": ["receita perdida vacinas veterinária", "clientes esquecem vacinas"],
      "internal_links_to": ["hub-calendario-vacinas", "lembretes-automaticos-vacinacao", "vacinas-adulto"]
    },
    {
      "slug": "receita-recorrente-vacinas",
      "title": "Receita Recorrente: Vacinas como Motor Financeiro da Clínica",
      "category": "dados-insights",
      "target_keywords": ["receita recorrente clínica veterinária", "vacinas motor financeiro"],
      "internal_links_to": ["hub-calendario-vacinas", "vacinas-adulto", "desparasitacao"]
    }
  ]
}
```

**Step 2: Verify valid JSON**

Run: `node -e "const d = require('./src/data/clusters/calendario-vacinas.json'); console.log('cluster_id:', d.cluster_id, '| spokes:', d.spokes.length)"`

Expected: `cluster_id: calendario-vacinas | spokes: 6`

**Step 3: Commit**

```bash
git add src/data/clusters/calendario-vacinas.json
git commit -m "data: add cluster 3 calendario-vacinas JSON data"
```

---

## Task 2: Extend TemplateType + Add i18n Translations

**Files:**
- Modify: `src/types/cluster.ts`
- Modify: `src/i18n/types.ts`
- Modify: `src/i18n/locales/pt.ts`
- Modify: `src/i18n/locales/en.ts`

**Step 1: Extend TemplateType in `src/types/cluster.ts`**

The current `TemplateType` union (after cluster 2) ends at `'resource'`. Add 3 new values:

```typescript
export type TemplateType =
  | 'solution-by-size'
  | 'solution-by-type'
  | 'problem-solution'
  | 'feature-focus'
  | 'comparison'
  | 'data-driven'
  | 'procedure-specific'
  | 'animal-type'
  | 'resource'
  | 'lifecycle-stage'
  | 'preventive-type'
  | 'compliance'
```

**Step 2: Add `cluster3` to `Translations` interface in `src/i18n/types.ts`**

Add before the closing brace of `Translations`:

```typescript
cluster3: {
  hubTitle: string
  hubSubtitle: string
  filhoteTitle: string
  filhoteDesc: string
  adultoTitle: string
  adultoDesc: string
  lembretesTitle: string
  lembretesDesc: string
  desparasitacaoTitle: string
  desparasitacaoDesc: string
  antiparasitariosTitle: string
  antiparasitariosDesc: string
  antirrabicaTitle: string
  antirrabicaDesc: string
  readMore: string
  whyCluster: {
    title: string
    subtitle: string
    benefit1Title: string
    benefit1Desc: string
    benefit2Title: string
    benefit2Desc: string
    benefit3Title: string
    benefit3Desc: string
  }
  cta: string
}
```

**Step 3: Add PT translations to `src/i18n/locales/pt.ts`**

Add before the closing `}` of the exported `pt` object:

```typescript
cluster3: {
  hubTitle: "Calendário de Vacinas & Preventivos",
  hubSubtitle: "Gestão automática do calendário vacinal de cada animal — lembretes de reforço, desparasitação e antiparasitários. Nunca mais perca uma vacina.",
  filhoteTitle: "Primo-Vacinação de Filhotes",
  filhoteDesc: "Várias doses em poucas semanas — o sistema agenda tudo e lembra o tutor de cada dose.",
  adultoTitle: "Vacinas Anuais para Adultos",
  adultoDesc: "O reforço periódico é o motor de receita recorrente. Automatize os lembretes e recupere consultas perdidas.",
  lembretesTitle: "Lembretes Automáticos de Vacinação",
  lembretesDesc: "Lembretes proactivos por WhatsApp antes da data de reforço — o tutor recebe, clica e marca.",
  desparasitacaoTitle: "Desparasitação Automática",
  desparasitacaoDesc: "Ciclos de desparasitação interna e externa geridos automaticamente conforme protocolo do veterinário.",
  antiparasitariosTitle: "Antiparasitários por Região",
  antiparasitariosDesc: "Protocolos adaptados ao risco parasitário da sua região — sazonalidade e alertas específicos.",
  antirrabicaTitle: "Antirrábica Obrigatória",
  antirrabicaDesc: "Garanta compliance legal para todos os cães registados. Painel de cobertura vacinal em tempo real.",
  readMore: "Conhecer mais",
  whyCluster: {
    title: "Vacinas: O Motor de Receita Que Está a Perder",
    subtitle: "Cada reforço perdido é uma consulta que desaparece — multiplicada por centenas de pacientes.",
    benefit1Title: "Receita Recorrente",
    benefit1Desc: "Cada animal precisa de reforços periódicos durante toda a vida. É a consulta mais previsível e mais perdida.",
    benefit2Title: "Clientes Que Voltam",
    benefit2Desc: "Um simples lembrete automático é suficiente para recuperar a maioria dos reforços em atraso.",
    benefit3Title: "Compliance Legal",
    benefit3Desc: "Antirrábica obrigatória em Portugal. O painel mostra quem está em dia, a vencer e em atraso.",
  },
  cta: "Gerir Calendário Vacinal",
},
```

**Step 4: Add EN translations to `src/i18n/locales/en.ts`**

Add before the closing `}` of the exported `en` object:

```typescript
cluster3: {
  hubTitle: "Vaccination & Preventive Care Calendar",
  hubSubtitle: "Automated management of each animal's vaccination calendar — booster reminders, deworming, and antiparasitics. Never miss a vaccine again.",
  filhoteTitle: "Puppy & Kitten Vaccination",
  filhoteDesc: "Multiple doses in a few weeks — the system schedules everything and reminds the owner of each dose.",
  adultoTitle: "Annual Vaccines for Adults",
  adultoDesc: "Periodic boosters are the recurring revenue engine. Automate reminders and recover lost appointments.",
  lembretesTitle: "Automated Vaccination Reminders",
  lembretesDesc: "Proactive WhatsApp reminders before the booster date — owner receives, clicks and books.",
  desparasitacaoTitle: "Automated Deworming",
  desparasitacaoDesc: "Internal and external deworming cycles managed automatically per veterinarian protocol.",
  antiparasitariosTitle: "Antiparasitics by Region",
  antiparasitariosDesc: "Protocols adapted to your region's parasite risk — seasonality and specific alerts.",
  antirrabicaTitle: "Mandatory Rabies Vaccine",
  antirrabicaDesc: "Ensure legal compliance for all registered dogs. Real-time vaccination coverage dashboard.",
  readMore: "Learn More",
  whyCluster: {
    title: "Vaccines: The Revenue Engine You're Missing",
    subtitle: "Each missed booster is a lost appointment — multiplied across hundreds of patients.",
    benefit1Title: "Recurring Revenue",
    benefit1Desc: "Every animal needs periodic boosters for life. It's the most predictable and most lost appointment.",
    benefit2Title: "Returning Clients",
    benefit2Desc: "A simple automated reminder is enough to recover most overdue boosters.",
    benefit3Title: "Legal Compliance",
    benefit3Desc: "Rabies vaccine mandatory in Portugal. Dashboard shows who's up-to-date, expiring soon, or overdue.",
  },
  cta: "Manage Vaccination Calendar",
},
```

**Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

Expected: No errors

**Step 6: Commit**

```bash
git add src/types/cluster.ts src/i18n/types.ts src/i18n/locales/pt.ts src/i18n/locales/en.ts
git commit -m "i18n: add cluster 3 translations and new template types"
```

---

## Task 3: Create LifecycleStage Template

**Files:**
- Create: `src/components/cluster-templates/LifecycleStage.tsx`

**Step 1: Create the component**

This template is for `vacinas-cachorro-filhote` and `vacinas-adulto`. It shows a step-by-step how the system works, key messaging, and an FAQ.

Create `src/components/cluster-templates/LifecycleStage.tsx`:

```typescript
"use client"

import { motion } from "framer-motion"
import { Baby, Calendar, Bell, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function LifecycleStage({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const steps = [
    { key: "step_1", icon: Calendar },
    { key: "step_2", icon: Bell },
    { key: "step_3", icon: CheckCircle },
    { key: "step_4", icon: CheckCircle },
    { key: "step_5", icon: CheckCircle },
  ].filter(s => v[s.key])

  const isFilhote = spoke.slug.includes("filhote")

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {isFilhote ? <Baby className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
              {v.stage_description}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {spoke.cta?.primary && (
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.primary.url}>{spoke.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              )}
              {spoke.cta?.secondary && (
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.secondary.url}>{spoke.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge + Key Message */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-destructive">O Problema</h2>
              <p className="text-muted-foreground leading-relaxed">{v.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-primary">O Que Importa Saber</h2>
              <p className="text-muted-foreground leading-relaxed">{v.key_message}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works — steps */}
      {steps.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">Como o makeit.bot Gere o Processo</h2>
              <p className="text-muted-foreground">Automático desde a primeira visita até ao fim do protocolo.</p>
            </motion.div>
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-card border border-border rounded-xl"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary mb-1">Passo {i + 1}</div>
                      <p className="text-sm text-muted-foreground">{v[step.key]}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Added value (if present) */}
      {v.added_value && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Valor Além da Vacina</h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-2">
                {v.added_value.split("|").map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <dl className="space-y-6">
              {spoke.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <dt className="font-semibold mb-2">{item.question}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      {v.disclaimer && (
        <div className="container mx-auto px-4 max-w-3xl py-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{v.cta_headline ?? "Nunca mais perca uma vacina."}</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LifecycleStage
```

**Step 2: Commit**

```bash
git add src/components/cluster-templates/LifecycleStage.tsx
git commit -m "feat: add LifecycleStage cluster template"
```

---

## Task 4: Create PreventiveType Template

**Files:**
- Create: `src/components/cluster-templates/PreventiveType.tsx`

**Step 1: Create the component**

This template is for `desparasitacao` and `antiparasitarios-protocolo`. It emphasises vet-defined protocols, revenue impact, and FAQ.

Create `src/components/cluster-templates/PreventiveType.tsx`:

```typescript
"use client"

import { motion } from "framer-motion"
import { Shield, Settings, TrendingUp, AlertCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function PreventiveType({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const subTypes = v.sub_types?.split(" | ") ?? []
  const configItems = v.config_by_vet?.split(" | ") ?? []
  const protocolFactors = v.protocol_factors?.split(" | ") ?? []

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Medicina Preventiva
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="/contact/">Automatizar Agora <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sub-types */}
      {subTypes.length > 0 && (
        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-sm text-muted-foreground mb-6 font-semibold uppercase tracking-wide">Tipos cobertos</p>
            <div className="flex flex-wrap justify-center gap-3">
              {subTypes.map((type, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {type.trim()}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold mb-3">O Problema</h2>
                <p className="text-muted-foreground leading-relaxed">{v.challenge}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works — vet config */}
      {configItems.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Configurado pelo Veterinário</h2>
                </div>
                <ul className="space-y-3">
                  {configItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              {protocolFactors.length > 0 && (
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Factores do Protocolo</h2>
                  </div>
                  <ul className="space-y-3">
                    {protocolFactors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{factor.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Seasonality (if present) */}
      {v.seasonality && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Sazonalidade</h2>
            <p className="text-muted-foreground mb-4">{v.seasonality}</p>
            {v.seasonal_alert && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-sm font-medium text-primary">{v.seasonal_alert}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Revenue Impact */}
      {(v.revenue_impact_1 || v.revenue_impact_2) && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Impacto para a Clínica</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[v.revenue_impact_1, v.revenue_impact_2].filter(Boolean).map((impact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="text-sm text-muted-foreground">{impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <dl className="space-y-6">
              {spoke.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <dt className="font-semibold mb-2">{item.question}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      {v.disclaimer && (
        <div className="container mx-auto px-4 max-w-3xl pb-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja os seus pacientes. Automaticamente.</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default PreventiveType
```

**Step 2: Commit**

```bash
git add src/components/cluster-templates/PreventiveType.tsx
git commit -m "feat: add PreventiveType cluster template"
```

---

## Task 5: Create Compliance Template

**Files:**
- Create: `src/components/cluster-templates/Compliance.tsx`

**Note:** `Comparison.tsx` already exists with the name `Comparison`. This new file is `CompliancePage.tsx` — export it as `ComplianceTemplate` to avoid name collision with any existing exports.

**Step 1: Create the component**

This template is for the `vacina-antirrabica-obrigatoria-portugal` spoke. It emphasises legal obligation, official sources, and the clinic's compliance tools.

Create `src/components/cluster-templates/ComplianceTemplate.tsx`:

```typescript
"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, ExternalLink, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function ComplianceTemplate({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const certainFacts = v.certain_facts?.split(" | ") ?? []
  const officialSources = v.official_sources?.split(" | ") ?? []
  const passportItems = v.passport_requirements?.split(" + ") ?? []
  const compliancePanelItems = v.compliance_panel?.split(" | ") ?? []

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-amber-500/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Obrigação Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {spoke.cta?.primary && (
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.primary.url}>{spoke.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              )}
              {spoke.cta?.secondary && (
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.secondary.url}>{spoke.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certain Facts */}
      {certainFacts.length > 0 && (
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">O Que Sabemos Com Certeza</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certainFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{fact.trim()}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinic Problem */}
      {v.clinic_risk && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold mb-3">O Problema Para a Clínica</h2>
                  <p className="text-muted-foreground">{v.clinic_risk}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Compliance Panel */}
      {v.compliance_panel && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-3 text-center">Painel de Compliance</h2>
            <p className="text-muted-foreground text-center mb-12">
              Vista em tempo real do estado vacinal de todos os pacientes registados.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { color: "green", label: "Em dia", icon: "🟢" },
                { color: "yellow", label: "A vencer em breve", icon: "🟡" },
                { color: "red", label: "Em atraso", icon: "🔴" },
              ].map((status, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{status.icon}</div>
                  <p className="font-semibold">{status.label}</p>
                </motion.div>
              ))}
            </div>
            {v.seasonal_opportunity && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center"
              >
                <p className="text-sm font-medium text-primary">
                  🌞 {v.seasonal_opportunity}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Passport Requirements */}
      {passportItems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Passaporte Europeu para Animais</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Para viajar com cão, gato ou furão na União Europeia, são necessários:
            </p>
            <ol className="space-y-3">
              {passportItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.trim()}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Official Sources */}
      {officialSources.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Fontes Oficiais</h2>
            <div className="grid gap-3">
              {officialSources.map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{source.trim()}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <dl className="space-y-6">
              {spoke.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <dt className="font-semibold mb-2">{item.question}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Legal Disclaimer */}
      {v.disclaimer && (
        <div className="container mx-auto px-4 max-w-3xl pb-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-amber-500/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Garanta que nenhum paciente fica em incumprimento.</h2>
          <p className="text-muted-foreground mb-8">Painel de compliance em tempo real. Alertas automáticos. 15 dias grátis.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Garantir Compliance Automático <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ComplianceTemplate
```

**Step 2: Commit**

```bash
git add src/components/cluster-templates/ComplianceTemplate.tsx
git commit -m "feat: add ComplianceTemplate cluster template"
```

---

## Task 6: Register Cluster 3 + Update Template Map

**Files:**
- Modify: `src/lib/clusters.ts`
- Modify: `app/(site)/solucoes/veterinarias/[cluster]/[spoke]/page.tsx`

**Step 1: Register Cluster 3 in `src/lib/clusters.ts`**

Read the file. Add import and register:

```typescript
import calendarioVacinasData from '@/data/clusters/calendario-vacinas.json'

const clusters: Record<string, Cluster> = {
  'agendamento-inteligente': agendamentoInteligenteData as Cluster,
  'followup-pos-cirurgia': followupPosCirurgiaData as Cluster,
  'calendario-vacinas': calendarioVacinasData as Cluster,
}
```

**Step 2: Update template map in `app/(site)/solucoes/veterinarias/[cluster]/[spoke]/page.tsx`**

Read the file. Add 3 new imports:

```typescript
import { LifecycleStage } from '@/components/cluster-templates/LifecycleStage'
import { PreventiveType } from '@/components/cluster-templates/PreventiveType'
import { ComplianceTemplate } from '@/components/cluster-templates/ComplianceTemplate'
```

Add 3 new entries to `templateMap`:

```typescript
'lifecycle-stage': <LifecycleStage {...templateProps} />,
'preventive-type': <PreventiveType {...templateProps} />,
'compliance': <ComplianceTemplate {...templateProps} />,
```

**Step 3: Commit**

```bash
git add src/lib/clusters.ts app/\(site\)/solucoes/veterinarias/\[cluster\]/\[spoke\]/page.tsx
git commit -m "feat: register cluster 3 and update spoke template map"
```

---

## Task 7: Update Navigation (Header + Footer)

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update Header**

Read `src/components/layout/Header.tsx`. Find the "Soluções" submenu and add after "Follow-up Pós-Cirurgia":

```typescript
{ name: "Calendário de Vacinas", href: "/solucoes/veterinarias/calendario-vacinas/" }
```

**Step 2: Update Footer**

Read `src/components/layout/Footer.tsx`. In the `footerLinks.solucoes` array, add after the follow-up links:

```typescript
{ name: "Calendário de Vacinas", href: "/solucoes/veterinarias/calendario-vacinas/" },
{ name: "Antirrábica Obrigatória", href: "/solucoes/veterinarias/calendario-vacinas/vacina-antirrabica-obrigatoria-portugal/" },
```

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "nav: add cluster 3 links to header and footer"
```

---

## Task 8: Build & Integration Testing

**Files:** All modified files

**Step 1: Run Next.js build**

Run: `npm run build`

Expected output:
```
✓ Compiled successfully
✓ Running TypeScript
✓ Generating static pages using 7 workers (41/41)
```

- 34 existing pages + 7 new pages (1 hub + 6 spokes) = **41 total**

**Step 2: Verify Cluster 3 URLs in build output**

Check for these in the route table:

```
● /solucoes/veterinarias/[cluster]
  ├ /solucoes/veterinarias/agendamento-inteligente
  ├ /solucoes/veterinarias/followup-pos-cirurgia
  └ /solucoes/veterinarias/calendario-vacinas         ← NEW

● /solucoes/veterinarias/[cluster]/[spoke]
  ├ ...existing...
  ├ /solucoes/veterinarias/calendario-vacinas/vacinas-cachorro-filhote
  ├ /solucoes/veterinarias/calendario-vacinas/vacinas-adulto
  ├ /solucoes/veterinarias/calendario-vacinas/lembretes-automaticos-vacinacao
  ├ /solucoes/veterinarias/calendario-vacinas/desparasitacao
  ├ /solucoes/veterinarias/calendario-vacinas/antiparasitarios-protocolo
  └ /solucoes/veterinarias/calendario-vacinas/vacina-antirrabica-obrigatoria-portugal
```

**Step 3: Final commit if needed**

```bash
git add .
git commit -m "build: cluster 3 implementation complete — 41 static pages"
```

---

## Summary

After completing all 8 tasks:

✅ Cluster 3 JSON data (1 hub + 6 spokes, all fields present)
✅ 3 new TemplateType values: `lifecycle-stage`, `preventive-type`, `compliance`
✅ i18n translations (PT-PT + EN) for cluster 3
✅ 3 new templates: `LifecycleStage`, `PreventiveType`, `ComplianceTemplate`
✅ Template map updated with 3 new entries
✅ Cluster 3 registered in `clusters.ts`
✅ Header + Footer navigation updated
✅ Build passes with 41 static pages

**New URLs (7 pages):**
- Hub: `/solucoes/veterinarias/calendario-vacinas/`
- Spokes:
  - `/solucoes/veterinarias/calendario-vacinas/vacinas-cachorro-filhote/` — LifecycleStage
  - `/solucoes/veterinarias/calendario-vacinas/vacinas-adulto/` — LifecycleStage
  - `/solucoes/veterinarias/calendario-vacinas/lembretes-automaticos-vacinacao/` — FeatureFocus (existing)
  - `/solucoes/veterinarias/calendario-vacinas/desparasitacao/` — PreventiveType
  - `/solucoes/veterinarias/calendario-vacinas/antiparasitarios-protocolo/` — PreventiveType
  - `/solucoes/veterinarias/calendario-vacinas/vacina-antirrabica-obrigatoria-portugal/` — ComplianceTemplate

---

## Execution Options

Plan saved to `docs/plans/2026-03-30-cluster3-calendario-vacinas.md`.

**1. Subagent-Driven (this session)** — Dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** — Open new session, use `superpowers:executing-plans`, batch execution with checkpoints

**Which approach?**
