# PRD — makeit.bot | Implementação SEO Programático & Estrutura de Conteúdo

**Versão:** 1.0
**Data:** 19 de Março de 2026
**Mercado:** Portugal (PT-PT) + Inglês (EN) como expansão
**Nicho inicial:** Clínicas Veterinárias
**Domínio:** makeit.bot

---

## 1. Contexto & Estado Atual

### 1.1 O que existe hoje
- Landing page em `makeit.bot` — site institucional minimalista
- Sem blog, sem subpáginas de soluções, sem conteúdo indexável
- Sem sitemap.xml configurado (ou não acessível)
- Sem estrutura de SEO (meta tags, schema markup, etc.)

### 1.2 O que precisamos construir
Uma estrutura completa de conteúdo e SEO programático que:
- Posicione o makeit.bot como referência em automação para veterinárias em Portugal
- Gere tráfego orgânico qualificado (donos/gestores de clínicas veterinárias)
- Converta visitantes em leads através de conteúdo + ferramentas gratuitas
- Escale para outros nichos no futuro sem reestruturação

### 1.3 Produtos makeit.bot para Veterinárias
| Produto | Descrição |
|---------|-----------|
| Agendamento Inteligente | Marcação online com confirmação automática |
| Anti-No-Show System | Lembretes em cascata + lista de espera inteligente |
| Follow-up Pós-Cirurgia | Acompanhamento automatizado pós-operatório |
| Calendário de Vacinas & Preventivos | Gestão completa de vacinação e desparasitação |
| Prontuário Inteligente | Histórico clínico do animal com IA |
| Marketing & Retenção | Campanhas automáticas, reativação de clientes |

---

## 2. Arquitetura de URLs

### 2.1 Estrutura hierárquica

```
makeit.bot/
├── /solucoes/                          ← Hub geral de soluções
│   └── /veterinarias/                  ← Hub do nicho veterinário
│       ├── /agendamento-inteligente/   ← Hub Cluster 1
│       │   ├── /clinica-pequeno-porte/
│       │   ├── /hospital-veterinario/
│       │   ├── /anti-no-show/
│       │   └── /lembretes-automaticos/
│       ├── /followup-pos-cirurgia/     ← Hub Cluster 2
│       ├── /calendario-vacinas/        ← Hub Cluster 3
│       ├── /prontuario-inteligente/    ← Hub Cluster 4
│       └── /marketing-retencao/        ← Hub Cluster 5
├── /blog/                              ← Blog principal
│   ├── /categoria/gestao-veterinaria/
│   ├── /categoria/automacao-ia/
│   ├── /categoria/experiencia-tutor/
│   └── /categoria/dados-insights/
├── /ferramentas/                       ← Lead magnets
│   ├── /calculadora-no-show/
│   ├── /calendario-vacinas-interativo/
│   └── /quiz-ia-veterinaria/
├── /en/                                ← Versão inglesa (espelho)
│   ├── /solutions/veterinary/
│   ├── /blog/
│   └── /tools/
└── /recursos/                          ← Whitepapers, guias
```

### 2.2 Regras de URL
- Sempre lowercase, sem acentos, com hífens
- Máximo 4 níveis de profundidade
- Trailing slash consistente (`/solucoes/veterinarias/` ✓)
- Inglês sempre sob `/en/` (subdiretório, NÃO subdomínio)
- Canonical + hreflang entre versões PT e EN
- Sem parâmetros de query para conteúdo indexável

---

## 3. Páginas a Criar — Inventário Completo

### 3.1 Páginas Estáticas (criadas manualmente, alta qualidade)

| # | Página | URL | Prioridade | Estado |
|---|--------|-----|------------|--------|
| 1 | Homepage renovada | `/` | P0 | Existente — requer reescrita |
| 2 | Página "Sobre" / Quem Somos | `/sobre/` | P1 | A criar |
| 3 | Página de Contacto | `/contacto/` | P1 | A criar |
| 4 | Hub Soluções | `/solucoes/` | P0 | A criar |
| 5 | Hub Veterinárias | `/solucoes/veterinarias/` | P0 | A criar |
| 6 | Página de Preços | `/precos/` | P1 | A criar |
| 7 | Página de Demo/Agendar | `/demo/` | P0 | A criar |
| 8 | Blog Index | `/blog/` | P0 | A criar |
| 9 | Ferramentas Index | `/ferramentas/` | P1 | A criar |
| 10 | Política de Privacidade | `/privacidade/` | P1 | A criar (RGPD obrigatório) |
| 11 | Termos de Serviço | `/termos/` | P1 | A criar |

### 3.2 Páginas de Cluster (Hubs — semi-manuais)

| # | Hub | URL | Cluster |
|---|-----|-----|---------|
| 1 | Agendamento Inteligente | `/solucoes/veterinarias/agendamento-inteligente/` | C1 |
| 2 | Follow-up Pós-Cirurgia | `/solucoes/veterinarias/followup-pos-cirurgia/` | C2 |
| 3 | Calendário de Vacinas | `/solucoes/veterinarias/calendario-vacinas/` | C3 |
| 4 | Prontuário Inteligente | `/solucoes/veterinarias/prontuario-inteligente/` | C4 |
| 5 | Marketing & Retenção | `/solucoes/veterinarias/marketing-retencao/` | C5 |

### 3.3 Páginas Programáticas (geradas por template)

#### Cluster 1: Agendamento + Anti-No-Show (8 páginas)
| Página | Template | Keyword Target (PT-PT) |
|--------|----------|----------------------|
| Agendamento para clínica de pequeno porte | solution-by-size | agendamento clínica veterinária pequena |
| Agendamento para hospital veterinário | solution-by-size | sistema agendamento hospital veterinário |
| Agendamento para pet shop com veterinário | solution-by-type | agendamento pet shop veterinário |
| Como reduzir no-show em veterinárias | problem-solution | faltas consultas veterinária como reduzir |
| Lembretes automáticos para clínicas | feature-focus | lembretes automáticos clínica veterinária |
| Lista de espera inteligente | feature-focus | lista espera inteligente veterinária |
| Custo do no-show: quanto a sua clínica perde | data-driven | custo faltas clínica veterinária |
| Agendamento manual vs automático | comparison | agendamento manual vs automático veterinária |

#### Cluster 2: Follow-up Pós-Cirurgia (5 páginas)
| Página | Template | Keyword Target (PT-PT) |
|--------|----------|----------------------|
| Follow-up pós-castração automático | procedure-specific | acompanhamento pós castração animal |
| Monitorização pós-cirurgia ortopédica | procedure-specific | pós-operatório ortopédico cão |
| Alertas automáticos de complicações | feature-focus | sinais complicação pós-cirurgia animal |
| Follow-up por tipo de animal | animal-type | acompanhamento pós-cirurgia gato cão |
| Checklist pós-operatório para tutores | resource | cuidados pós-cirurgia animal checklist |

#### Cluster 3: Calendário de Vacinas (6 páginas)
| Página | Template | Keyword Target (PT-PT) |
|--------|----------|----------------------|
| Calendário de vacinas para cachorros | lifecycle-stage | vacinas cachorro quando |
| Calendário de vacinas adulto | lifecycle-stage | vacina anual cão gato |
| Lembretes automáticos de vacinação | feature-focus | lembrete vacina animal automático |
| Desparasitação: quando e como automatizar | preventive-type | calendário desparasitação cão |
| Antiparasitários: protocolo por região | preventive-type | antiparasitários quando aplicar |
| Vacina antirrábica: obrigatória e como lembrar | compliance | vacina antirrábica cão obrigatória portugal |

#### Cluster 4: Prontuário Inteligente (4 páginas)
| Página | Template | Keyword Target (PT-PT) |
|--------|----------|----------------------|
| Prontuário com resumo automático por IA | ai-feature | prontuário IA veterinário |
| Histórico do animal acessível pelo tutor | stakeholder-view | histórico clínico animal online |
| Integração prontuário + agendamento | integration | sistema integrado clínica veterinária |
| Prontuário para clínicas de exóticos | specialty | prontuário veterinário exóticos |

#### Cluster 5: Marketing & Retenção (5 páginas)
| Página | Template | Keyword Target (PT-PT) |
|--------|----------|----------------------|
| Campanhas automáticas de aniversário do animal | campaign-type | marketing aniversário animal clínica |
| Reativação de clientes inativos | problem-solution | cliente inativo veterinária como reativar |
| NPS automático para clínicas | feature-focus | pesquisa satisfação veterinária |
| Email marketing para veterinárias | channel-type | email marketing veterinária |
| WhatsApp/SMS marketing para clínicas | channel-type | sms marketing clínica veterinária |

### 3.4 Blog Posts (primeiros 20 planeados)

| # | Título | Categoria | Cluster de Apoio | Prioridade |
|---|--------|-----------|-----------------|------------|
| 1 | 5 razões pelas quais 30% dos tutores faltam à consulta | Gestão Vet | C1 | P0 — Mês 1 |
| 2 | O verdadeiro custo de uma agenda vazia na sua clínica | Gestão Vet | C1 | P0 — Mês 1 |
| 3 | WhatsApp Business vs Chatbot: qual funciona melhor para vets? | Automação & IA | C1 | P1 — Mês 1 |
| 4 | Caso prático: clínica reduziu no-show em 60% com lembretes em cascata | Casos Práticos | C1 | P1 — Mês 2 |
| 5 | Pós-operatório: a etapa mais crítica e mais negligenciada | Gestão Vet | C2 | P1 — Mês 2 |
| 6 | Como automatizar o follow-up sem perder o toque humano | Automação & IA | C2 | P1 — Mês 2 |
| 7 | Tutores satisfeitos voltam: o ROI do follow-up bem feito | Dados & Insights | C2 | P2 — Mês 3 |
| 8 | Quantos clientes a sua clínica perde por não lembrar da vacina? | Gestão Vet | C3 | P1 — Mês 3 |
| 9 | Calendário de vacinas 2026: guia completo para tutores | Experiência Tutor | C3 | P1 — Mês 3 |
| 10 | Receita recorrente: vacinas como motor financeiro da clínica | Dados & Insights | C3 | P2 — Mês 3 |
| 11 | IA no veterinário: hype vs realidade prática em 2026 | Automação & IA | Todos | P1 — Mês 4 |
| 12 | O que o tutor espera de uma clínica em 2026 | Experiência Tutor | C5 | P2 — Mês 4 |
| 13 | RGPD na veterinária: o que precisa de saber sobre dados dos clientes | Gestão Vet | Todos | P1 — Mês 4 |
| 14 | Prontuário eletrónico vs papel: a transição que salva horas | Automação & IA | C4 | P2 — Mês 5 |
| 15 | Como calcular a taxa real de ocupação da sua clínica | Dados & Insights | C1 | P2 — Mês 5 |
| 16 | Marketing veterinário: 7 campanhas automáticas que funcionam | Automação & IA | C5 | P2 — Mês 5 |
| 17 | Benchmark: como está a sua clínica comparada à média em Portugal? | Dados & Insights | Todos | P2 — Mês 6 |
| 18 | Reativar clientes inativos: o guia completo para veterinárias | Gestão Vet | C5 | P2 — Mês 6 |
| 19 | Exóticos: o nicho em crescimento que a sua clínica pode captar | Gestão Vet | C4 | P3 — Mês 6 |
| 20 | Clínica veterinária do futuro: tendências para 2027 | Automação & IA | Todos | P3 — Mês 6 |

### 3.5 Ferramentas Gratuitas (Lead Magnets)

| # | Ferramenta | URL | Lead Capture | Fase |
|---|-----------|-----|-------------|------|
| 1 | Calculadora de custo do no-show | `/ferramentas/calculadora-no-show/` | Email para resultado completo | Mês 2 |
| 2 | Calendário de vacinas interativo | `/ferramentas/calendario-vacinas/` | Email para guardar/exportar PDF | Mês 3 |
| 3 | Checklist pós-operatório | `/ferramentas/checklist-pos-operatorio/` | WhatsApp para receber | Mês 4 |
| 4 | Quiz: a sua clínica está pronta para IA? | `/ferramentas/quiz-ia-veterinaria/` | Email para resultado | Mês 4 |
| 5 | Benchmark: compare a sua clínica | `/ferramentas/benchmark-clinica/` | Email para relatório | Mês 6 |

---

## 4. Requisitos Técnicos

### 4.1 Stack Recomendado

| Componente | Tecnologia | Justificação |
|-----------|-----------|--------------|
| Framework | Next.js 14+ (App Router) | SSG para páginas programáticas, ISR para blog, SEO nativo |
| CMS/Dados | MDX para blog + JSON datasets para páginas programáticas | Sem custo, Git-versionado, fácil de automatizar |
| Hosting | Vercel | Deploy automático, edge network, boa performance PT |
| Analytics | Google Search Console + Plausible | GSC obrigatório, Plausible leve e RGPD-friendly |
| Email | Resend ou Brevo | Transacional + newsletter, bom free tier |
| Forms | Formulário nativo + webhook | Sem dependência de terceiros |

### 4.2 Estrutura de Ficheiros (Next.js App Router)

```
app/
├── page.tsx                                    ← Homepage
├── sobre/page.tsx
├── contacto/page.tsx
├── precos/page.tsx
├── demo/page.tsx
├── privacidade/page.tsx
├── termos/page.tsx
├── solucoes/
│   ├── page.tsx                                ← Hub geral
│   └── veterinarias/
│       ├── page.tsx                            ← Hub nicho
│       ├── [cluster]/
│       │   ├── page.tsx                        ← Hub do cluster (gerado de JSON)
│       │   └── [spoke]/
│       │       └── page.tsx                    ← Página programática
├── blog/
│   ├── page.tsx                                ← Blog index
│   ├── [slug]/page.tsx                         ← Blog post (MDX)
│   └── categoria/
│       └── [categoria]/page.tsx                ← Listagem por categoria
├── ferramentas/
│   ├── page.tsx                                ← Index ferramentas
│   ├── calculadora-no-show/page.tsx
│   ├── calendario-vacinas/page.tsx
│   └── quiz-ia-veterinaria/page.tsx
├── en/                                         ← Espelho em inglês
│   ├── solutions/veterinary/...
│   ├── blog/...
│   └── tools/...
└── recursos/
    └── page.tsx

data/
├── clusters/
│   ├── agendamento-inteligente.json
│   ├── followup-pos-cirurgia.json
│   ├── calendario-vacinas.json
│   ├── prontuario-inteligente.json
│   └── marketing-retencao.json
├── templates/
│   ├── problem-solution.tsx
│   ├── feature-focus.tsx
│   ├── solution-by-size.tsx
│   ├── comparison.tsx
│   └── data-driven.tsx
└── blog/
    └── posts/
        ├── 5-razoes-faltas-consulta.mdx
        └── ...

content/
├── pt/                                         ← Conteúdo PT-PT
│   └── ...
└── en/                                         ← Conteúdo EN
    └── ...
```

### 4.3 Configuração SEO Obrigatória

#### Meta Tags (por página)
```html
<title>{titulo} | makeit.bot</title>
<meta name="description" content="{descricao até 155 chars}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://makeit.bot{url}" />
<link rel="alternate" hreflang="pt" href="https://makeit.bot{url}" />
<link rel="alternate" hreflang="en" href="https://makeit.bot/en{url_en}" />
<link rel="alternate" hreflang="x-default" href="https://makeit.bot{url}" />

<!-- Open Graph -->
<meta property="og:title" content="{titulo}" />
<meta property="og:description" content="{descricao}" />
<meta property="og:image" content="https://makeit.bot/og/{slug}.png" />
<meta property="og:url" content="https://makeit.bot{url}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
```

#### Schema Markup (JSON-LD)
Cada tipo de página tem schema específico:

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "makeit.bot",
  "url": "https://makeit.bot",
  "description": "Soluções de IA para clínicas veterinárias em Portugal",
  "logo": "https://makeit.bot/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales"
  }
}
```

**Páginas de Solução:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{nome da solução}",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
}
```

**Blog Posts:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{titulo}",
  "datePublished": "{data}",
  "dateModified": "{data_mod}",
  "author": { "@type": "Organization", "name": "makeit.bot" },
  "publisher": { "@type": "Organization", "name": "makeit.bot" }
}
```

**Páginas com FAQ:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{pergunta}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{resposta}"
      }
    }
  ]
}
```

### 4.4 Sitemap & Robots.txt

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://makeit.bot/sitemap.xml
```

**Sitemap:** Gerado automaticamente com `next-sitemap`, incluindo:
- Todas as páginas estáticas
- Todos os hubs e spokes de clusters
- Todos os blog posts
- Todas as ferramentas
- Versões EN de tudo

### 4.5 Performance & Core Web Vitals

| Métrica | Target |
|---------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Score | > 90 (todas as categorias) |
| Page Size | < 500KB por página |

**Requisitos:**
- Imagens em WebP com lazy loading (`next/image`)
- Fonts preloaded (máximo 2 famílias)
- CSS critical inline, resto async
- Zero JavaScript bloqueante no above-the-fold
- CDN edge (Vercel já fornece)

---

## 5. Templates Programáticos — Especificação

### 5.1 Estrutura Universal (todas as páginas programáticas)

Cada página programática DEVE conter:

1. **H1 dinâmico** — inclui keyword principal + variável
2. **Breadcrumb** — navegação hierárquica (schema BreadcrumbList)
3. **Parágrafo introdutório** — 150-200 palavras contextualizando a dor
4. **Secção de impacto** — dados/números sobre o problema
5. **Como o makeit.bot resolve** — descrição da funcionalidade com screenshot/GIF
6. **Depoimento ou caso de uso** — social proof
7. **FAQ** — 3-5 perguntas com schema FAQPage
8. **CTA principal** — demo, contacto, ou ferramenta gratuita
9. **Links internos** — para o hub + 2-3 spokes relacionados
10. **Secção "Leia também"** — 2-3 blog posts relacionados

### 5.2 Dados por Template (JSON)

Exemplo de `agendamento-inteligente.json`:
```json
{
  "cluster": "agendamento-inteligente",
  "hub": {
    "title": "Agendamento Inteligente para Veterinárias",
    "slug": "agendamento-inteligente",
    "description": "Sistema de marcação online com confirmação automática e anti-no-show para clínicas veterinárias em Portugal."
  },
  "spokes": [
    {
      "slug": "clinica-pequeno-porte",
      "template": "solution-by-size",
      "title": "Agendamento Inteligente para Clínicas de Pequeno Porte",
      "h1": "Agendamento Online para a Sua Clínica Veterinária de Pequeno Porte",
      "keyword": "agendamento clínica veterinária pequena",
      "meta_description": "Sistema de agendamento online pensado para clínicas veterinárias com 1-3 veterinários. Reduza faltas e organize a agenda sem esforço.",
      "variables": {
        "size": "pequeno porte",
        "num_vets": "1-3",
        "monthly_appointments": "200-500",
        "no_show_rate": "25-35%",
        "estimated_loss": "€2.000-€5.000/mês"
      },
      "faq": [
        {
          "question": "Quanto custa implementar um sistema de agendamento online?",
          "answer": "O makeit.bot oferece planos a partir de X€/mês, com período de teste gratuito."
        },
        {
          "question": "Os meus clientes vão conseguir usar a marcação online?",
          "answer": "Sim. A interface é simples e funciona em qualquer telemóvel. 85% dos tutores preferem marcar online."
        },
        {
          "question": "Integra com o software que já utilizo?",
          "answer": "O makeit.bot integra com os principais sistemas de gestão veterinária em Portugal."
        }
      ],
      "related_spokes": ["anti-no-show", "lembretes-automaticos"],
      "related_posts": ["5-razoes-faltas-consulta", "custo-agenda-vazia"]
    }
  ]
}
```

---

## 6. Internacionalização (i18n)

### 6.1 Abordagem
- PT-PT como idioma principal (default)
- EN como secundário sob `/en/`
- NÃO traduzir literalmente — adaptar para o mercado

### 6.2 Diferenças PT-PT vs EN

| Aspecto | Portugal (PT-PT) | EN (UK/US) |
|---------|-----------------|------------|
| Canal principal | WhatsApp + SMS | Email + SMS + App |
| Termos | "marcação", "tutor", "telemóvel" | "appointment", "pet owner", "mobile" |
| Sensibilidade preço | Alta — mostrar ROI em EUR | Média — eficiência operacional |
| Tom | Próximo, direto, "você" | Professional, data-driven |
| Regulação | RGPD forte, Ordem dos Médicos Vet | GDPR + local regulations |
| Moeda | EUR (€) | USD/GBP |

### 6.3 Vocabulário PT-PT (NÃO usar PT-BR)

| ❌ PT-BR | ✅ PT-PT |
|---------|---------|
| Agendamento | Marcação / Agendamento (ambos aceites) |
| Celular | Telemóvel |
| Cachorro | Cão / Cachorro (cachorro = cria) |
| Prontuário | Ficha clínica / Prontuário |
| Atendimento | Atendimento / Consulta |
| Pet shop | Loja de animais / Pet shop (anglicismo aceite) |
| Desparasitação | Desparasitação ✓ |
| Castração | Castração / Esterilização |

---

## 7. Estratégia de Link Interno

### 7.1 Regras de Linkagem

| De → Para | Regra |
|-----------|-------|
| Homepage → Hubs de nicho | Menu principal, sempre visível |
| Hub nicho → Hubs de cluster | Cards/grid na página |
| Hub cluster → Todos os spokes | Links no corpo + sidebar |
| Spoke → Hub do cluster | Breadcrumb + link contextual |
| Spoke → Outros spokes do cluster | Secção "Relacionados" |
| Blog post → Hub ou spoke | Mínimo 1 link contextual no corpo |
| Blog post → Outros posts | Secção "Leia também" (máx. 3) |
| Ferramenta → Spoke relevante | CTA após resultado |
| PT → EN equivalente | Hreflang + link "Read in English" |

### 7.2 Anchor Text
- Nunca "clique aqui" — usar keyword descritiva
- Variar: não usar sempre o mesmo anchor para o mesmo destino
- Máximo 3-5 links internos por 1.000 palavras

---

## 8. Roadmap de Implementação

### Fase 0: Infraestrutura (Semana 1-2)
- [ ] Configurar Next.js com App Router + TypeScript
- [ ] Configurar i18n (next-intl ou routing manual)
- [ ] Configurar next-sitemap
- [ ] Criar layout base (header, footer, navegação)
- [ ] Implementar componente SEO (meta tags + schema JSON-LD)
- [ ] Configurar Plausible Analytics
- [ ] Submeter site ao Google Search Console
- [ ] Criar robots.txt
- [ ] Configurar domínio/DNS se necessário
- [ ] Criar sistema de templates programáticos

### Fase 1: Cluster 1 — Agendamento + Anti-No-Show (Semana 3-4)
- [ ] Escrever hub `/solucoes/veterinarias/agendamento-inteligente/`
- [ ] Criar template `problem-solution`
- [ ] Criar template `feature-focus`
- [ ] Criar template `solution-by-size`
- [ ] Criar template `comparison`
- [ ] Criar template `data-driven`
- [ ] Gerar 8 spokes do Cluster 1
- [ ] Escrever 3 blog posts de apoio (posts #1, #2, #3)
- [ ] Implementar FAQ schema em todas as páginas
- [ ] Submeter sitemap atualizado

### Fase 2: Cluster 2 — Follow-up Pós-Cirurgia (Semana 5-6)
- [ ] Escrever hub `/solucoes/veterinarias/followup-pos-cirurgia/`
- [ ] Criar template `procedure-specific`
- [ ] Gerar 5 spokes do Cluster 2
- [ ] Escrever 3 blog posts de apoio (posts #4, #5, #6)
- [ ] Criar primeira ferramenta: Calculadora de No-Show
- [ ] Monitorar indexação no GSC

### Fase 3: Cluster 3 — Calendário de Vacinas (Semana 7-8)
- [ ] Escrever hub `/solucoes/veterinarias/calendario-vacinas/`
- [ ] Criar templates `lifecycle-stage` e `preventive-type`
- [ ] Gerar 6 spokes do Cluster 3
- [ ] Escrever 3 blog posts de apoio (posts #7, #8, #9, #10)
- [ ] Criar ferramenta: Calendário de Vacinas Interativo
- [ ] Iniciar versão EN dos hubs

### Fase 4: Clusters 4 & 5 (Semana 9-12)
- [ ] Hubs e spokes dos Clusters 4 e 5
- [ ] Blog posts #11-#16
- [ ] Ferramentas #3 e #4
- [ ] Versões EN dos spokes mais visitados
- [ ] Otimização baseada em dados do GSC

### Fase 5: Escala & Otimização (Mês 4-6)
- [ ] Completar versões EN
- [ ] A/B test de CTAs e templates
- [ ] Eliminar/consolidar thin content
- [ ] Blog posts #17-#20
- [ ] Ferramenta #5 (Benchmark)
- [ ] Análise de canibalização de keywords
- [ ] Backlink outreach (diretórios veterinários PT, associações)

---

## 9. Métricas de Sucesso

### KPIs Primários
| Métrica | Mês 1 | Mês 3 | Mês 6 |
|---------|-------|-------|-------|
| Páginas indexadas | 20+ | 60+ | 120+ |
| Sessões orgânicas/mês | 200 | 1.500 | 5.000 |
| Keywords top 10 | 5 | 15 | 30+ |
| Leads/mês | 5 | 20 | 50 |
| Domain Authority | 5 | 10 | 15+ |

### KPIs Secundários
- Bounce rate < 60% nas páginas de solução
- Tempo médio na página > 2 minutos (blog)
- CTR no GSC > 3% (média)
- Taxa de conversão ferramenta → lead > 15%

---

## 10. Riscos & Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Volume de busca baixo em PT-PT para veterinárias | Alta | Médio | Validar keywords antes; expandir para keywords em EN mais cedo |
| Thin content penalizado pelo Google | Média | Alto | Mínimo 30% conteúdo único por página; revisão editorial |
| Canibalização entre spokes | Média | Médio | Monitorar GSC semanalmente; consolidar se necessário |
| Conteúdo programático parece genérico | Alta | Alto | Curadoria humana obrigatória; dados reais de Portugal |
| Concorrência de softwares veterinários estabelecidos | Média | Médio | Foco em long-tail keywords; conteúdo de nicho mais profundo |
| RGPD compliance em formulários | Baixa | Alto | Consent explícito; Plausible (cookieless); privacy policy |

---

## 11. Notas para o Mercado Português

### 11.1 Contexto do Mercado
- ~1.500-2.000 clínicas veterinárias em Portugal
- Regulação pela Ordem dos Médicos Veterinários (OMV)
- RGPD rigoroso — consentimento explícito obrigatório
- WhatsApp bastante usado mas SMS ainda relevante
- Mercado menos digitalizado que o norte da Europa — oportunidade

### 11.2 Parcerias Potenciais para Backlinks
- Ordem dos Médicos Veterinários (omv.pt)
- Associação Portuguesa de Hospitais Veterinários
- Revista Veterinária Atual
- DGAV (Direção-Geral de Alimentação e Veterinária)
- Blogs de pets portugueses
- Diretórios de empresas portuguesas (racius.com, einforma.pt)

### 11.3 Adaptações Culturais
- Usar "você" (não "tu") para tom profissional
- Referenciar legislação portuguesa (ex: vacina antirrábica obrigatória)
- Preços em EUR sem conversão
- Exemplos de cidades portuguesas (Lisboa, Porto, Coimbra)
- Sazonalidade: verão = época de viagens = mais procura de hotel para animais

---

*Este PRD é um documento vivo. Atualizar à medida que dados reais do Google Search Console informem a estratégia.*
