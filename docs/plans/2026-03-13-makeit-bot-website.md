# makeit.bot Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the current personal portfolio site ("Ary Hauffe Neto" job search, English) into a professional commercial website for makeit.bot — a Brazilian automation services company — in Portuguese, mobile-first, conversion-focused, with WhatsApp as primary CTA.

**Architecture:** Multi-page React SPA (existing stack) with anchor-scroll on Home for single-page feel. Each page is a standalone route. PRD content mapped to pages; pricing, pain-points, and WhatsApp CTA are the conversion pillars.

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS v3 + shadcn/ui + framer-motion + react-router-dom v6. No new dependencies needed.

---

## Context & Key Decisions

**What changes:**
- All text: English → Portuguese (Brazilian)
- Brand voice: job-hunting personal portfolio → commercial automation services company
- CTAs: "Get in Touch" → WhatsApp button (`wa.me/+554796605110`)
- Navigation: update labels to PT, update routes to `/servicos`, `/sobre`, `/portfolio`, `/contato`
- Home: complete rewrite with PRD sections (Problema, Solução, Prova Social, Investimento, CTA)
- Add: global floating WhatsApp button
- Remove: Newsletter form in footer, `Blog` nav link, sub-service pages (shopify/chatbots/pwa) from nav

**What stays the same:**
- Design system (colors, glassmorphism, animations — all already MIB-branded)
- Logo (`/favicon-96x96.png` — already "Make It Bot")
- Component library (shadcn/ui, ScrollReveal, StaggerContainer, etc.)
- Footer brand name "Make It Bot" / "makeit.bot"

**WhatsApp contact:** `wa.me/+554796605110?text=Olá!%20Quero%20saber%20mais%20sobre%20automação%20comercial`

**Pricing tiers (from PRD):**
- Essencial: R$1.500 — 1 fluxo, WhatsApp + 1 CRM, 5 dias, suporte 7 dias
- Profissional: R$2.500 — até 3 fluxos, WhatsApp + CRM + Email, 7 dias, suporte 30 dias
- Premium: R$4.000+ — ilimitado, sob medida, IA, 10-15 dias, suporte 60 dias

---

## Task 1: Update App.tsx Routes

**Files:**
- Modify: `src/App.tsx`

**What to do:**
Update the route paths from English to Portuguese. Keep existing page component files (we'll update them later).

**Step 1: Read the current App.tsx**
```
Read src/App.tsx
```

**Step 2: Update routes**

Change route paths:
- `/services` → `/servicos`
- `/services/shopify` → remove (or redirect to `/servicos`)
- `/services/chatbots` → remove
- `/services/pwa` → remove
- `/about` → `/sobre`
- `/contact` → `/contato`
- Keep: `/`, `/portfolio`, `/privacy`, `/terms`, `/trustflow`, `*`

The existing page component imports stay the same — just update the `path` props.

**Step 3: Verify app still builds**
```bash
npm run build
```
Expected: build succeeds (no import errors)

---

## Task 2: Update Header — Navigation & CTA

**Files:**
- Modify: `src/components/layout/Header.tsx`

**What to do:**
- Change navigation labels to Portuguese, update hrefs
- Replace "Get in Touch" CTA with WhatsApp button (green, with WhatsApp icon)
- Replace brand name text "Ary Hauffe" → "makeit.bot"

**Step 1: Update `navigation` array**
```typescript
const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];
```

**Step 2: Update brand name text**
```tsx
// Line ~57: change "Ary Hauffe" to "makeit.bot"
<span className="hidden sm:block font-semibold text-lg">
  makeit.bot
</span>
```

**Step 3: Replace CTA button**
Add `MessageCircle` to imports from lucide-react, then replace the `<Link to="/contact">` CTA block:
```tsx
<a
  href="https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:block"
>
  <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
    <MessageCircle className="h-4 w-4" />
    WhatsApp
  </Button>
</a>
```

**Step 4: Update mobile menu CTA button** (same change, at bottom of mobile menu section)

**Step 5: Manual test** — open dev server, verify nav links and mobile menu work

---

## Task 3: Update Footer — Simplify & Translate

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**What to do:**
Simplify the footer to 3 columns (Brand+Contact, Navegação, Legal). Remove the newsletter form and the "Resources" / "Company" multi-column structure. Translate to PT.

**Step 1: Replace `footerLinks` object**
```typescript
const footerLinks = {
  navegacao: [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Uso", href: "/terms" },
  ],
};
```

**Step 2: Update `socialLinks`**
```typescript
const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/makeit-bot", icon: Linkedin },
];
```

**Step 3: Rewrite footer JSX**
Replace the 6-column grid with a 3-column grid:
- Col 1 (span-2): Logo + tagline in PT + contact info (email, WhatsApp)
- Col 2: Navegação links
- Col 3: Legal links

Tagline: `"Automação comercial para pequenas empresas que não têm tempo de responder todo mundo."`

**Step 4: Update copyright**
```tsx
© {new Date().getFullYear()} makeit.bot. Todos os direitos reservados.
```

**Step 5: Remove newsletter form** — delete the "Stay Updated" column and its Input/Button imports

---

## Task 4: Add Floating WhatsApp Button

**Files:**
- Create: `src/components/ui/whatsapp-float.tsx`
- Modify: `src/components/layout/Layout.tsx`

**What to do:**
Add a fixed green WhatsApp button in bottom-right corner (replaces the current "scroll to top" button position — move scroll-to-top to Footer).

**Step 1: Create the component**
```tsx
// src/components/ui/whatsapp-float.tsx
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
```

**Step 2: Read Layout.tsx to find the right insertion point**
```
Read src/components/layout/Layout.tsx
```

**Step 3: Add `<WhatsAppFloat />` inside Layout**
Import and add it before the closing tag of the Layout wrapper. Also move the "scroll to top" button out of Footer into Layout if needed to avoid z-index conflicts.

---

## Task 5: Rewrite Home Page

**Files:**
- Modify: `src/pages/Home.tsx`

This is the largest task. The new home page has these sections:
1. `HeroSection` — pain-focused headline, WhatsApp CTA, animated mockup area
2. `ProblemaSection` — 4 pain-point cards
3. `SolucaoSection` — 3-step stepper
4. `ProvasSociaisSection` — social proof (placeholder testimonials + metrics)
5. `InvestimentoSection` — pricing table (3 tiers)
6. `CTAFinalSection` — final WhatsApp CTA with urgency

**Step 1: Write HeroSection**
```tsx
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* animated blobs — keep from current */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8" ...>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-medium">Automação comercial · Brasil</span>
          </motion.div>

          {/* H1 — pain-focused */}
          <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" ...>
            Seus leads estão caindo{" "}
            <span className="gradient-text">no esquecimento.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" ...>
            Eu faço eles virarem clientes — no automático.
            Automação comercial para pequenas empresas que não têm tempo de responder todo mundo.
          </motion.p>

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" ...>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 gap-2">
                <MessageCircle className="h-5 w-5" />
                Quero parar de perder leads
              </Button>
            </a>
            <Link to="/servicos">
              <Button size="lg" variant="outline" className="px-8">
                Ver serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Tech logos — subtle */}
          <motion.div className="mt-16" ...>
            <p className="text-sm text-muted-foreground mb-4">Tecnologia por trás</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground">
              {["n8n", "WhatsApp API", "CRM", "IA", "Automação"].map(...)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Write ProblemaSection**
4 cards with pain points from PRD section 3.2:
```tsx
const problemas = [
  { emoji: "😰", text: 'Lead manda mensagem às 22h, você só vê no dia seguinte — e ele já fechou com o concorrente.' },
  { emoji: "🤦", text: 'Sua equipe esquece de fazer follow-up e você só descobre quando o cliente sumiu.' },
  { emoji: "📊", text: 'Você não sabe quantos leads recebeu essa semana, muito menos quantos viraram clientes.' },
  { emoji: "⏱️", text: 'Gasta horas copiando dados do WhatsApp para planilha e mesmo assim perde informação.' },
];
```
Layout: 2×2 grid (mobile: 1 col). Cards with colored left border, emoji + text. Section title: "Isso parece familiar?"

**Step 3: Write SolucaoSection**
3-step stepper from PRD section 3.3:
```tsx
const passos = [
  { num: "01", titulo: "Captura automática", desc: "Lead chega pelo WhatsApp, formulário ou Instagram e é registrado automaticamente — sem você precisar fazer nada." },
  { num: "02", titulo: "Follow-up inteligente", desc: "O sistema envia mensagens no tempo certo, sem você precisar lembrar. Nenhum lead esquecido." },
  { num: "03", titulo: "Painel de controle", desc: "Você vê tudo num lugar só: quem entrou, quem respondeu, quem está perto de fechar." },
];
```
Desktop: horizontal stepper with connector lines. Mobile: vertical.

**Step 4: Write ProvasSociaisSection**
Metrics row + placeholder testimonial cards:
```tsx
const metricas = [
  { valor: "< 2 min", label: "Tempo médio de resposta automática" },
  { valor: "0", label: "Leads esquecidos com follow-up ativo" },
  { valor: "5 dias", label: "Prazo médio de entrega" },
];
// 2 placeholder testimonial cards (labeled "Demonstração")
```

**Step 5: Write InvestimentoSection**
Pricing table from PRD section 3.5:
```tsx
const planos = [
  {
    nome: "Essencial", preco: "R$ 1.500", popular: false,
    integracoes: "WhatsApp + 1 CRM", fluxos: "1 fluxo principal",
    followup: "Sim (básico)", painel: "Não",
    suporte: "7 dias", prazo: "5 dias", manutencao: "+R$ 200/mês",
    features: ["WhatsApp + 1 CRM", "1 fluxo principal", "Follow-up automático básico", "Suporte 7 dias", "Entrega em 5 dias"],
  },
  {
    nome: "Profissional", preco: "R$ 2.500", popular: true,
    features: ["WhatsApp + CRM + E-mail", "Até 3 fluxos", "Follow-up com lógica condicional", "Painel básico", "Suporte 30 dias", "Entrega em 7 dias"],
  },
  {
    nome: "Premium", preco: "R$ 4.000+", popular: false,
    features: ["Sob medida", "Fluxos ilimitados", "Follow-up com IA", "Painel completo", "Suporte 60 dias", "Entrega em 10-15 dias"],
  },
];
```
3-column card layout. Middle card (Profissional) has `gradient-primary` border + "Mais popular" badge. Each card has feature list with check icons + WhatsApp CTA button.

**Step 6: Write CTAFinalSection**
```tsx
function CTAFinalSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* gradient bg + animated blobs */}
      <div className="max-w-3xl mx-auto text-center">
        <h2>Pronto para parar de perder clientes no escuro?</h2>
        <p>Atendo no máximo 3 projetos por mês para garantir qualidade.</p>
        <a href={WA_LINK}>
          <Button size="lg" className="bg-green-500 ...">
            <MessageCircle /> Falar no WhatsApp
          </Button>
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          Ou envie um e-mail: <a href="mailto:contact@makeit.bot">contact@makeit.bot</a>
        </p>
      </div>
    </section>
  );
}
```

**Step 7: Compose the page**
```tsx
export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="makeit.bot — Automação Comercial para Pequenas Empresas"
        description="Pare de perder leads. Automação comercial com WhatsApp, CRM e follow-up inteligente. Entrega em 5 dias."
        keywords="automação comercial, automação whatsapp, crm automatico, follow-up automatico, n8n brasil"
      />
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <ProvasSociaisSection />
      <InvestimentoSection />
      <CTAFinalSection />
    </Layout>
  );
}
```

**Step 8: Start dev server and visual check**
```bash
npm run dev
```
Open `http://localhost:5173`, verify all sections render, check mobile view.

---

## Task 6: Rewrite Services Page

**Files:**
- Modify: `src/pages/Services.tsx`
- Note: Route will be `/servicos` (updated in Task 1)

**What to do:**
Replace the 3 technical services (Process Automation, System Integration, AI Workflows) with business-language descriptions of what makeit.bot delivers. Keep the same visual structure (3 cards + process steps) but rewrite all content in PT.

**Step 1: Rewrite `services` array**
```typescript
const servicos = [
  {
    icon: MessageCircle,
    titulo: "Automação de WhatsApp",
    subtitulo: "Nunca mais perca um lead por demora na resposta",
    descricao: "Seu WhatsApp Business responde automaticamente, qualifica o lead e avisa sua equipe — tudo em menos de 2 minutos, 24 horas por dia.",
    color: "text-green-400", bgColor: "bg-green-500/10",
    features: ["Resposta automática 24/7", "Qualificação de leads", "Notificação da equipe em tempo real", "Histórico centralizado", "Integração com CRM"],
    exemplos: ["Clínicas de estética", "Imobiliárias", "Academias", "Escritórios de contabilidade"],
  },
  {
    icon: Zap,
    titulo: "Follow-up Automático",
    subtitulo: "Seu sistema lembra — mesmo quando você esquece",
    descricao: "Fluxos de follow-up que enviam a mensagem certa, para o lead certo, no momento certo. Sem planilhas, sem lembretes manuais.",
    color: "text-primary", bgColor: "bg-primary/10",
    features: ["Sequências de follow-up personalizadas", "Lógica condicional (respondeu? não respondeu?)", "Integração com calendário", "Relatório de conversão", "Pausa automática quando cliente responde"],
    exemplos: ["Agendamento de consultas", "Renovação de contratos", "Recuperação de leads frios", "Pós-venda automático"],
  },
  {
    icon: Bot,
    titulo: "Integração de Sistemas",
    subtitulo: "Seus dados em um lugar só, atualizados em tempo real",
    descricao: "Conectamos WhatsApp, CRM, planilhas e qualquer ferramenta que você já usa. Um lead entra pelo WhatsApp e aparece no seu CRM automaticamente.",
    color: "text-accent", bgColor: "bg-accent/10",
    features: ["WhatsApp Business API", "Integração com qualquer CRM", "Sincronização de planilhas", "Notificações no Slack/Teams", "Painel de métricas"],
    exemplos: ["Pipedrive, HubSpot, Bitrix24", "Google Sheets / Excel", "RD Station, ActiveCampaign", "Qualquer sistema com API"],
  },
];
```

**Step 2: Rewrite `process` array** — translate the 6 steps to PT
Keep same structure, translate content.

**Step 3: Update page JSX**
- Title: "Nossos Serviços" / "Como Automatizamos Seu Negócio"
- Translate all static text (hero, process section heading, CTA)
- CTA button → WhatsApp link

---

## Task 7: Rewrite About Page

**Files:**
- Modify: `src/pages/About.tsx`
- Note: Route will be `/sobre` (updated in Task 1)

**What to do:**
Transform from personal CV into company about page. Keep the founder section but reframe as "quem está por trás da makeit.bot".

**Step 1: Rewrite page sections**

**Hero:**
- H1: `Sobre a <span>makeit.bot</span>`
- Tagline: "Somos especialistas em automação comercial para pequenas empresas brasileiras."

**Missão section (replaces "My Story"):**
- "Nossa missão é simples: fazer com que nenhum lead seja esquecido."
- Keep the founder info (Ary) but as "fundador", reframe as company story
- Keep: Italian + Portuguese dual nationality (relevant for "empresa europeia com raízes brasileiras" angle)
- Keep: email aryhauffe@gmail.com (or update to contact@makeit.bot)
- Keep: LinkedIn link

**Skills section → "Nossa Stack":**
- Reframe from personal skills to "as ferramentas que usamos"
- Same categories but rewritten

**Timeline → "Nossa História":**
- Keep Ummix Ads and IdeorAI entries but reframe as proof of experience

**CTA → WhatsApp**

**Step 2: Update all labels/text to PT**

---

## Task 8: Rewrite Portfolio Page

**Files:**
- Modify: `src/pages/Portfolio.tsx`

**What to do:**
Transform from "projects I'm building to get a job" into "demo cases of what we can build for you". The 3 projects become demonstration cases with business framing.

**Step 1: Rewrite `projects` array with business framing**
```typescript
const casos = [
  {
    id: 1,
    titulo: "Pipeline de Qualificação de Leads",
    categorias: ["WhatsApp", "CRM", "Automação"],
    status: "building" as const,
    expected: "29 de março",
    descricao: "Lead chega pelo WhatsApp → qualificação automática com IA → roteamento para o vendedor certo no Slack → registro completo no CRM com histórico de conversa.",
    tags: ["n8n", "WhatsApp API", "CRM", "IA", "PostgreSQL"],
    github: "https://github.com/arynelson/lead-qualification-system",
    link: null,
  },
  {
    id: 2,
    titulo: "Onboarding Automático de Clientes",
    categorias: ["Integração", "Automação"],
    status: "planned" as const,
    expected: "19 de abril",
    descricao: "Assim que o cliente assina, o sistema cria conta em todos os sistemas automaticamente, envia boas-vindas personalizadas e acompanha cada etapa do onboarding.",
    tags: ["n8n", "Slack API", "Notion", "PostgreSQL"],
    github: "https://github.com/arynelson/smart-onboarding-platform",
    link: null,
  },
  {
    id: 3,
    titulo: "Processamento Inteligente de Notas Fiscais",
    categorias: ["IA", "Automação"],
    status: "planned" as const,
    expected: "30 de abril",
    descricao: "NF-e chega por e-mail → IA extrai todos os dados → validação automática → aprovação ou fila de revisão humana com botões de aprovar/rejeitar.",
    tags: ["n8n", "IA", "Python", "PostgreSQL"],
    github: "https://github.com/arynelson/ai-invoice-processing",
    link: null,
  },
];
```

**Step 2: Update categories filter to PT**
```typescript
const categorias = ["Todos", "WhatsApp", "CRM", "IA", "Automação", "Integração"];
```

**Step 3: Translate all static text in the page**
- Hero: "Demonstrações" / "Veja na prática o que construímos"
- CTA section: WhatsApp CTA, PT text

---

## Task 9: Update Contact Page

**Files:**
- Read then modify: `src/pages/Contact.tsx`
- Note: Route will be `/contato` (updated in Task 1)

**What to do:**
Make WhatsApp the primary contact method. Keep email form as fallback. Translate all text to PT.

**Step 1: Read Contact.tsx first**
```
Read src/pages/Contact.tsx
```

**Step 2: Changes**
- Hero: "Vamos conversar?"
- Primary CTA card: Large WhatsApp button with pre-filled message, description: "Respondo em menos de 2 horas nos dias úteis"
- Form: Keep but as secondary option, title "Prefere e-mail?"
- Remove phone number field if it exists; focus on name, email, message, "qual é sua principal dor?"
- Translate labels, placeholder text, submit button
- Success message in PT

---

## Task 10: Privacy & Terms Pages

**Files:**
- Read then modify: `src/pages/Privacy.tsx`
- Read then modify: `src/pages/Terms.tsx`

**What to do:**
Translate to Portuguese and update brand name references from "Ary Hauffe" to "makeit.bot".

**Step 1: Read both files**

**Step 2: Update brand references + translate headers**
- Replace "Ary Hauffe Neto" / "aryhauffe.com" with "makeit.bot" / "makeit.bot"
- Translate section headings and key content
- Keep the legal structure; full translation is nice-to-have if the files are short

---

## Task 11: Final Checks

**Step 1: Run build**
```bash
npm run build
```
Expected: 0 TypeScript errors, build succeeds.

**Step 2: Test all routes manually**
Visit: `/`, `/servicos`, `/portfolio`, `/sobre`, `/contato`, `/privacy`, `/terms`
Verify: no broken links, all WhatsApp CTAs point to correct URL, floating button visible.

**Step 3: Mobile check**
Open Chrome DevTools → toggle device toolbar → test at 375px width.
Verify: hero CTA visible without scroll, floating WhatsApp button not blocking content, pricing table readable.

**Step 4: Update SEO tags**
Each page should have PT title/description. Check every `<SEO>` component call:
- Home: "makeit.bot — Automação Comercial | Pare de perder leads"
- Serviços: "Serviços de Automação | makeit.bot"
- Portfólio: "Demonstrações | makeit.bot"
- Sobre: "Sobre a makeit.bot | Automação Comercial"
- Contato: "Contato | makeit.bot"

---

## Implementation Order

Execute tasks in this order (each is independent once routes are set up):

1. **Task 1** (routes) — enables all navigation to work
2. **Task 2** (header) — global change, visible immediately
3. **Task 3** (footer) — global change
4. **Task 4** (WhatsApp float) — global feature
5. **Task 5** (Home) — highest priority, most complex
6. **Task 6** (Services)
7. **Task 7** (About)
8. **Task 8** (Portfolio)
9. **Task 9** (Contact)
10. **Task 10** (Privacy/Terms)
11. **Task 11** (Final checks)

Tasks 2-4 can be done in parallel. Tasks 5-10 can be done in parallel once Task 1 is done.
