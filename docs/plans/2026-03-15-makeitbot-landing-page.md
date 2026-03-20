# Make It Bot — Website Overhaul Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild makeit.bot as a bilingual (PT-PT / EN) B2B **multi-page website** targeting Alojamento Local owners in Portugal, with a proper page structure, section components, and two embedded AI agent demos.

**Page structure:**
- `/` — Home: Hero + Problem + Solution overview + How It Works + CTA
- `/funcionalidades` — Full features page: detailed breakdown of the 4 differentials
- `/demo` — Demo page: both embedded agents (sales + concierge)
- `/precos` — Pricing page
- `/faq` — FAQ page
- `/contacto` — Contact page (CTA final + contact info)

**Architecture:** Multi-page React app with react-router-dom, lightweight React Context for i18n (no external library), scoped page components under `src/pages/makeitbot/`, shared section components under `src/components/makeitbot/`, embedded chat agent widgets as isolated components.

**Tech Stack:** Vite + React + TypeScript + TailwindCSS + shadcn/ui + framer-motion + react-router-dom

---

## Context

The codebase has **unresolved git merge conflicts** in all key files (`App.tsx`, `Home.tsx`, `Header.tsx`, `Footer.tsx`). Every file shows `<<<<<<< HEAD` / `=======` / `>>>>>>>` markers. The HEAD version is a Brazilian B2B WhatsApp automation service; the other branch is a personal portfolio. Both are being **replaced** by the new Make It Bot AL concierge product. Fix conflicts by rewriting the files completely — no need to preserve either conflicted version.

The TrustFlow pattern at `src/components/trustflow/` is the architectural model: scoped components per product, own Header/Footer per scope, clean separation from the global layout.

---

## Task 1: Resolve Merge Conflicts — Clean Base Files

**Files:**
- Rewrite: `src/App.tsx`
- Rewrite: `src/components/layout/Header.tsx`
- Rewrite: `src/components/layout/Footer.tsx`
- Rewrite: `src/pages/Home.tsx`

**Context:** All four files are unparseable due to conflict markers. Rewrite them to a minimal clean state before building the new feature on top.

**Step 1: Rewrite `src/App.tsx` — remove conflicts, keep only needed routes**

Replace the entire file with a conflict-free version. Keep `/trustflow`, `/privacy`, `/terms`, and `/` routes. Remove routes that no longer exist (`/servicos`, `/sobre`, `/contato`, `/blog`, `/services/shopify`, etc.).

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { LanguageProvider } from "@/contexts/language";

import HomePage from "./pages/Home";
import FuncionalidadesPage from "./pages/makeitbot/Funcionalidades";
import DemoPage from "./pages/makeitbot/Demo";
import PrecosPage from "./pages/makeitbot/Precos";
import FAQPage from "./pages/makeitbot/FAQ";
import ContactoPage from "./pages/makeitbot/Contacto";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import TrustFlowPage from "./pages/TrustFlow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/funcionalidades" element={<FuncionalidadesPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/precos" element={<PrecosPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/trustflow" element={<TrustFlowPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
```

**Step 2: Rewrite `src/pages/Home.tsx` — empty scaffold**

```tsx
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="Make It Bot — O Seu Assistente para Alojamento Local"
        description="Responde hóspedes em 5 idiomas, 24/7, em menos de 2 minutos. O assistente de IA para proprietários de Alojamento Local em Lisboa e Porto."
        keywords="alojamento local, automação airbnb, resposta hospedes, ia alojamento, booking automação"
      />
      <main>
        {/* sections go here — added in later tasks */}
      </main>
    </Layout>
  );
}
```

**Step 3: Rewrite `src/components/layout/Header.tsx` — clean, no conflicts**

Replace with a minimal clean version that retains the logo, theme toggle, and a placeholder CTA button. Language switcher will be added in Task 4.

```tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

// navigation array — uses t.nav so it updates on language switch
// hrefs are actual page routes, not anchor links
const navItems = (t: Translations) => [
  { name: t.nav.features, href: "/funcionalidades" },
  { name: t.nav.howItWorks, href: "/#como-funciona" },
  { name: t.nav.pricing, href: "/precos" },
  { name: t.nav.faq, href: "/faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg p-0.5 bg-gradient-to-br from-primary to-cyan-accent shadow-lg group-hover:scale-105 transition-transform">
              <img src="/favicon-96x96.png" alt="Make It Bot Logo" className="w-full h-full rounded-md object-cover" />
            </div>
            <span className="hidden sm:block font-semibold text-lg">makeit.bot</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {/* Language switcher added in Task 4 */}
            <a href="#agente-vendedor" className="hidden sm:block">
              <Button className="gradient-primary text-primary-foreground hover:opacity-90 glow-blue">
                Falar com o Assistente
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 glass rounded-xl animate-fade-in-down">
            <div className="flex flex-col gap-1 px-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <a href="#agente-vendedor">
                  <Button className="w-full gradient-primary text-primary-foreground">Falar com o Assistente</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
```

**Step 4: Rewrite `src/components/layout/Footer.tsx` — clean, no conflicts**

```tsx
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-lg p-0.5 bg-gradient-to-br from-primary to-cyan-accent shadow-lg">
                <img src="/favicon-96x96.png" alt="Make It Bot Logo" className="w-full h-full rounded-md object-cover" />
              </div>
              <span className="font-semibold text-xl">makeit.bot</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              O assistente de IA para proprietários de Alojamento Local. Responde hóspedes em 5 idiomas, 24/7.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#precos" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:olá@makeit.bot" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> olá@makeit.bot
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Lisboa & Porto, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} makeit.bot. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Termos</Link>
            <a href="https://linkedin.com/company/makeit-bot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <Button variant="outline" size="icon" className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl glass" onClick={scrollToTop} aria-label="Voltar ao topo">
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}
```

**Step 5: Run the dev server to verify no parse errors**

```bash
cd C:/Users/aryha/Documents/MIB/site && bun run dev
```

Expected: server starts on port 8080 with no TypeScript errors.

**Step 6: Commit**

```bash
git add src/App.tsx src/pages/Home.tsx src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "fix: resolve all merge conflicts — clean base for makeitbot landing page"
```

---

## Task 2: Create i18n Context

**Files:**
- Create: `src/contexts/language.tsx`
- Create: `src/hooks/use-language.ts`
- Create: `src/i18n/pt.ts`
- Create: `src/i18n/en.ts`
- Create: `src/i18n/index.ts`

**Why a custom context instead of react-i18next:** This is a single landing page with static copy. A full i18n library is overkill. A typed translation object with a context hook is 40 lines and fully type-safe.

**Step 1: Create the Portuguese translations file**

```typescript
// src/i18n/pt.ts
export const pt = {
  lang: "pt" as const,
  nav: {
    howItWorks: "Como Funciona",
    pricing: "Preços",
    faq: "FAQ",
    cta: "Falar com o Assistente",
  },
  hero: {
    badge: "Responde em 5 idiomas · 24/7 · Menos de 2 minutos",
    headline: "Os seus hóspedes respondem. Você descansa.",
    subheadline:
      "O assistente de IA que gere a comunicação do seu Alojamento Local — no Airbnb, Booking e WhatsApp — enquanto você faz o que realmente importa.",
    ctaPrimary: "Quero saber mais",
    ctaSecondary: "Ver o assistente em acção",
    ctaPrimaryAriaLabel: "Abrir chat com o agente vendedor",
    ctaSecondaryAriaLabel: "Experimentar o assistente concierge",
  },
  problem: {
    heading: "Reconhece alguma destas situações?",
    intro: "Gerir Alojamento Local é 80% comunicação. E a comunicação não descansa.",
    items: [
      {
        emoji: "🌙",
        text: "São 23h e tem 4 hóspedes a perguntar a password do Wi-Fi em 3 idiomas diferentes.",
      },
      {
        emoji: "📱",
        text: "Abre o Airbnb de manhã e encontra uma mensagem de um hóspede que ficou à espera 8 horas. A reserva já foi para outro.",
      },
      {
        emoji: "⭐",
        text: "Recebeu uma review de 3 estrelas por \"comunicação lenta\". Não era verdade, mas não respondeu a tempo.",
      },
      {
        emoji: "🌍",
        text: "Um hóspede alemão escreveu em alemão. Usou o Google Translate, mas a resposta ficou estranha e você perdeu a confiança.",
      },
    ],
    bridge:
      "E se toda esta comunicação fosse tratada por si — em segundos, em qualquer idioma, a qualquer hora?",
  },
  solution: {
    heading: "O que o seu assistente faz por si",
    subheading:
      "Quatro funcionalidades que transformam a sua operação — sem contratar mais ninguém.",
    features: [
      {
        icon: "MessageSquare",
        title: "Concierge Invisível",
        description:
          "Responde hóspedes em PT, EN, FR, ES e DE via Airbnb, Booking e WhatsApp em menos de 2 minutos. Os seus hóspedes pensam que é você.",
      },
      {
        icon: "CheckSquare",
        title: "Check-in no Piloto Automático",
        description:
          "Envia instruções de chegada com código, morada e regras 48h, 24h e 2h antes. Zero esquecimentos, zero chamadas de última hora.",
      },
      {
        icon: "Star",
        title: "Máquina de Reviews 5 Estrelas",
        description:
          "Após o checkout, pede review com uma mensagem personalizada e responde automaticamente a reviews negativas com um template aprovado por si.",
      },
      {
        icon: "TrendingUp",
        title: "Detector de Receita Perdida",
        description:
          "Liga-se às suas ferramentas de preços e alerta quando pode subir o preço: evento na cidade, época alta, ocupação baixa.",
      },
    ],
  },
  howItWorks: {
    heading: "Pronto em 3 passos simples",
    subheading: "Da primeira conversa à primeira resposta automática em menos de 48 horas.",
    steps: [
      {
        number: "1",
        title: "Partilha as suas propriedades",
        description:
          "Preenche um formulário com as informações das suas propriedades: morada, regras, código de acesso, contactos de emergência. Leva 20 minutos.",
      },
      {
        number: "2",
        title: "O assistente começa a responder",
        description:
          "Ligamos ao seu Airbnb, Booking e WhatsApp. A partir daí, todas as mensagens dos hóspedes têm resposta — por si.",
      },
      {
        number: "3",
        title: "Acompanha os resultados",
        description:
          "No seu dashboard vê todas as conversas, tempo de resposta, reviews recebidas e alertas de preço. Está sempre no controlo.",
      },
    ],
  },
  trust: {
    heading: "Experimente antes de decidir",
    subheading: "Não pedimos cartão. Não precisamos de muito contexto. Só que experimente.",
    stats: [
      { value: "< 2 min", label: "tempo de resposta médio" },
      { value: "5", label: "idiomas suportados" },
      { value: "24/7", label: "disponibilidade" },
    ],
    guarantee:
      "7 dias gratuitos. Se não melhorar a sua comunicação, não paga nada.",
    demoLabel: "Experimentar o assistente concierge →",
  },
  pricing: {
    heading: "Um investimento que se paga na primeira reserva",
    subheading: "Sem contratos longos. Sem surpresas.",
    from: "A partir de",
    price: "300€/mês",
    note: "Inclui setup inicial e onboarding.",
    ctaLabel: "Pedir proposta personalizada",
    ctaSub: "Fale com o nosso assistente vendedor para uma proposta ao tamanho das suas propriedades.",
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "Funciona com Airbnb e Booking?",
        a: "Sim. Integramos com Airbnb, Booking.com e WhatsApp. O assistente responde nas três plataformas a partir do mesmo lugar.",
      },
      {
        q: "Os meus hóspedes vão perceber que é um assistente de IA?",
        a: "Não. As respostas são personalizadas com o nome da sua propriedade e o seu estilo de comunicação. Os seus hóspedes pensam que é você.",
      },
      {
        q: "Quanto tempo demora a configurar?",
        a: "Menos de 48 horas. Preenche o formulário de onboarding (20 min), nós tratamos do resto. Na manhã seguinte já está a funcionar.",
      },
      {
        q: "E se o hóspede tiver um problema que o assistente não resolve?",
        a: "O assistente sinaliza a conversa e envia-lhe uma notificação imediata. Você responde directamente — o assistente nunca bloqueia o acesso.",
      },
      {
        q: "Posso usar em todas as minhas propriedades?",
        a: "Sim. O plano base cobre até 5 propriedades. Para mais, fale connosco para uma proposta personalizada.",
      },
      {
        q: "Que idiomas suporta?",
        a: "Português, Inglês, Francês, Espanhol e Alemão. Os idiomas mais comuns entre os visitantes de Lisboa e Porto.",
      },
    ],
  },
  ctaFinal: {
    heading: "Os seus hóspedes merecem resposta imediata. Você merece dormir.",
    subheading:
      "Comece hoje com 7 dias gratuitos. Sem cartão, sem compromisso.",
    ctaPrimary: "Falar com o Assistente",
    ctaSecondary: "Experimentar o Concierge",
  },
} as const;

export type Translations = typeof pt;
```

**Step 2: Create the English translations file**

```typescript
// src/i18n/en.ts
import type { Translations } from "./pt";

export const en: Translations = {
  lang: "en" as const,
  nav: {
    howItWorks: "How It Works",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Talk to the Assistant",
  },
  hero: {
    badge: "Replies in 5 languages · 24/7 · Under 2 minutes",
    headline: "Your guests get answered. You get your life back.",
    subheadline:
      "The AI assistant that handles all guest communication for your Short-Term Rental — on Airbnb, Booking, and WhatsApp — while you focus on what matters.",
    ctaPrimary: "Find out more",
    ctaSecondary: "See the assistant in action",
    ctaPrimaryAriaLabel: "Open chat with the sales agent",
    ctaSecondaryAriaLabel: "Try the concierge demo",
  },
  problem: {
    heading: "Sound familiar?",
    intro: "Managing STRs is 80% communication. And communication never sleeps.",
    items: [
      {
        emoji: "🌙",
        text: "It's 11pm and 4 guests are asking for the Wi-Fi password in 3 different languages.",
      },
      {
        emoji: "📱",
        text: "You open Airbnb in the morning and find a message from a guest who waited 8 hours. The booking went to someone else.",
      },
      {
        emoji: "⭐",
        text: "You got a 3-star review for \"slow communication\". It wasn't fair, but you didn't reply in time.",
      },
      {
        emoji: "🌍",
        text: "A German guest wrote in German. You used Google Translate, but the response felt off and you lost their trust.",
      },
    ],
    bridge:
      "What if all this communication was handled for you — in seconds, in any language, at any time?",
  },
  solution: {
    heading: "What your assistant does for you",
    subheading:
      "Four features that transform your operation — without hiring anyone.",
    features: [
      {
        icon: "MessageSquare",
        title: "Invisible Concierge",
        description:
          "Responds to guests in PT, EN, FR, ES, and DE via Airbnb, Booking, and WhatsApp in under 2 minutes. Your guests think it's you.",
      },
      {
        icon: "CheckSquare",
        title: "Automated Check-in",
        description:
          "Sends arrival instructions with entry code, address, and house rules 48h, 24h, and 2h before arrival. Zero forgotten messages, zero last-minute calls.",
      },
      {
        icon: "Star",
        title: "5-Star Review Machine",
        description:
          "After checkout, requests a personalised review and automatically responds to negative ones with a template you approve.",
      },
      {
        icon: "TrendingUp",
        title: "Lost Revenue Detector",
        description:
          "Connects to your pricing tools and alerts you when you can raise your rates: city event, peak season, low occupancy.",
      },
    ],
  },
  howItWorks: {
    heading: "Ready in 3 simple steps",
    subheading: "From first conversation to first automated reply in under 48 hours.",
    steps: [
      {
        number: "1",
        title: "Share your properties",
        description:
          "Fill in a form with your property details: address, house rules, entry code, emergency contacts. Takes 20 minutes.",
      },
      {
        number: "2",
        title: "The assistant starts replying",
        description:
          "We connect to your Airbnb, Booking, and WhatsApp. From that point, every guest message gets a reply — from you.",
      },
      {
        number: "3",
        title: "Track your results",
        description:
          "Your dashboard shows all conversations, response times, reviews received, and pricing alerts. You're always in control.",
      },
    ],
  },
  trust: {
    heading: "Try it before you decide",
    subheading: "No card required. No lengthy setup. Just try it.",
    stats: [
      { value: "< 2 min", label: "average response time" },
      { value: "5", label: "languages supported" },
      { value: "24/7", label: "availability" },
    ],
    guarantee:
      "7-day free trial. If it doesn't improve your communication, you pay nothing.",
    demoLabel: "Try the concierge assistant →",
  },
  pricing: {
    heading: "An investment that pays for itself on the first booking",
    subheading: "No long contracts. No surprises.",
    from: "From",
    price: "€300/month",
    note: "Includes initial setup and onboarding.",
    ctaLabel: "Request a personalised quote",
    ctaSub: "Talk to our sales assistant for a proposal tailored to your portfolio.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Does it work with Airbnb and Booking?",
        a: "Yes. We integrate with Airbnb, Booking.com, and WhatsApp. The assistant replies on all three platforms from one place.",
      },
      {
        q: "Will my guests know it's an AI assistant?",
        a: "No. Replies are personalised with your property name and your communication style. Your guests think it's you.",
      },
      {
        q: "How long does setup take?",
        a: "Under 48 hours. You fill in the onboarding form (20 min), we handle the rest. By the next morning it's live.",
      },
      {
        q: "What if a guest has a problem the assistant can't solve?",
        a: "The assistant flags the conversation and sends you an immediate notification. You reply directly — the assistant never blocks your access.",
      },
      {
        q: "Can I use it across all my properties?",
        a: "Yes. The base plan covers up to 5 properties. For more, talk to us for a custom quote.",
      },
      {
        q: "What languages does it support?",
        a: "Portuguese, English, French, Spanish, and German — the most common languages among visitors to Lisbon and Porto.",
      },
    ],
  },
  ctaFinal: {
    heading: "Your guests deserve an instant reply. You deserve to sleep.",
    subheading: "Start today with a 7-day free trial. No card, no commitment.",
    ctaPrimary: "Talk to the Assistant",
    ctaSecondary: "Try the Concierge",
  },
};
```

**Step 3: Create the i18n index**

```typescript
// src/i18n/index.ts
export { pt } from "./pt";
export { en } from "./en";
export type { Translations } from "./pt";
```

**Step 4: Create the language context**

```tsx
// src/contexts/language.tsx
import { createContext, useContext, useState, type ReactNode } from "react";
import { pt, en, type Translations } from "@/i18n";

type Lang = "pt" | "en";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = lang === "pt" ? pt : en;
  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
```

**Step 5: Create the hook re-export**

```typescript
// src/hooks/use-language.ts
export { useLanguage } from "@/contexts/language";
```

**Step 6: Verify the app still compiles**

```bash
cd C:/Users/aryha/Documents/MIB/site && bun run build 2>&1 | head -40
```

Expected: no TypeScript errors, build succeeds (may warn about unused vars in other pages — acceptable at this stage).

**Step 7: Commit**

```bash
git add src/contexts/language.tsx src/hooks/use-language.ts src/i18n/ src/App.tsx
git commit -m "feat: add i18n context with PT-PT and EN translations"
```

---

## Task 3: Language Switcher in Header

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Step 1: Add language switcher button to Header**

The switcher is a simple two-state toggle button showing the *other* language (current: PT → shows "EN", current: EN → shows "PT").

Add `useLanguage` import and inject the toggle between the theme button and the CTA button in the desktop and mobile navbars.

```tsx
// Inside Header.tsx, add these imports:
import { useLanguage } from "@/hooks/use-language";

// Inside the Header component body, before the return:
const { lang, setLang, t } = useLanguage();

// Replace navigation items to use t.nav:
const navigation = [
  { name: t.nav.howItWorks, href: "#como-funciona" },
  { name: t.nav.pricing, href: "#precos" },
  { name: t.nav.faq, href: "#faq" },
];

// Add language switcher button in the actions <div>, between theme toggle and CTA:
<Button
  variant="ghost"
  size="sm"
  onClick={() => setLang(lang === "pt" ? "en" : "pt")}
  className="rounded-lg font-mono text-xs font-semibold tracking-widest"
  aria-label="Switch language"
>
  {lang === "pt" ? "EN" : "PT"}
</Button>
```

**Step 2: Update the CTA button text**

```tsx
// Replace "Falar com o Assistente" with t.nav.cta
<Button className="gradient-primary text-primary-foreground hover:opacity-90 glow-blue">
  {t.nav.cta}
</Button>
```

**Step 3: Verify in browser — toggle PT/EN switches nav text**

```bash
bun run dev
```

Open http://localhost:8080, click "EN" — nav items change to English.

**Step 4: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: add PT/EN language switcher to header"
```

---

## Task 4: Hero Section

**Files:**
- Create: `src/components/makeitbot/HeroSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create HeroSection component**

```tsx
// src/components/makeitbot/HeroSection.tsx
import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{t.hero.headline.split(".")[0]}.</span>
            <br />
            {t.hero.headline.split(".").slice(1).join(".")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#agente-vendedor" aria-label={t.hero.ctaPrimaryAriaLabel}>
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue px-8 gap-2">
                <Bot className="h-5 w-5" />
                {t.hero.ctaPrimary}
              </Button>
            </a>
            <a href="#concierge-demo" aria-label={t.hero.ctaSecondaryAriaLabel}>
              <Button size="lg" variant="outline" className="px-8">
                {t.hero.ctaSecondary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { delay: 1.5, duration: 1.5, repeat: Infinity } }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Add HeroSection to Home.tsx**

```tsx
// src/pages/Home.tsx — update imports and main
import { HeroSection } from "@/components/makeitbot/HeroSection";

// In <main>:
<HeroSection />
```

**Step 3: Verify hero renders, badge pulses, gradient text displays**

```bash
bun run dev
```

**Step 4: Commit**

```bash
git add src/components/makeitbot/HeroSection.tsx src/pages/Home.tsx
git commit -m "feat: add hero section with bilingual support"
```

---

## Task 5: Problem Section

**Files:**
- Create: `src/components/makeitbot/ProblemSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create ProblemSection**

```tsx
// src/components/makeitbot/ProblemSection.tsx
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.problem.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.problem.intro}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {t.problem.items.map((item) => (
            <StaggerItem key={item.emoji}>
              <div className="p-6 rounded-2xl glass h-full flex gap-4 items-start">
                <span className="text-3xl shrink-0">{item.emoji}</span>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-lg font-medium">{t.problem.bridge}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx**

```tsx
import { ProblemSection } from "@/components/makeitbot/ProblemSection";
// In <main>:
<ProblemSection />
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/ProblemSection.tsx src/pages/Home.tsx
git commit -m "feat: add problem section"
```

---

## Task 6: Solution Section

**Files:**
- Create: `src/components/makeitbot/SolutionSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create SolutionSection**

The icons are referenced by string in translations ("MessageSquare", "CheckSquare", etc.) to keep translations serialisable. Map strings to components in the component itself.

```tsx
// src/components/makeitbot/SolutionSection.tsx
import { MessageSquare, CheckSquare, Star, TrendingUp, type LucideIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  CheckSquare,
  Star,
  TrendingUp,
};

const colors = ["text-primary", "text-accent", "text-emerald-400", "text-yellow-400"];

export function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section id="solucao" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.solution.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.solution.subheading}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.solution.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? MessageSquare;
            return (
              <StaggerItem key={feature.title}>
                <div className="group p-8 rounded-2xl glass hover-lift h-full">
                  <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colors[i]}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx**

```tsx
import { SolutionSection } from "@/components/makeitbot/SolutionSection";
// In <main>:
<SolutionSection />
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/SolutionSection.tsx src/pages/Home.tsx
git commit -m "feat: add solution section with 4 differentials"
```

---

## Task 7: How It Works Section

**Files:**
- Create: `src/components/makeitbot/HowItWorksSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create HowItWorksSection**

```tsx
// src/components/makeitbot/HowItWorksSection.tsx
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.howItWorks.subheading}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border z-0" />

          {t.howItWorks.steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-6 shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx**

```tsx
import { HowItWorksSection } from "@/components/makeitbot/HowItWorksSection";
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/HowItWorksSection.tsx src/pages/Home.tsx
git commit -m "feat: add how it works section (3 steps)"
```

---

## Task 8: Trust / Proof Section + Concierge Demo Embed

**Files:**
- Create: `src/components/makeitbot/TrustSection.tsx`
- Create: `src/components/makeitbot/AgentEmbed.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create AgentEmbed component**

This component is a placeholder for the actual chat widget embed. It accepts a `type` prop ("vendedor" or "concierge") and renders a styled container with an iframe or script embed. The actual embed URL/script is injected via an environment variable or prop so it can be changed without touching the component.

```tsx
// src/components/makeitbot/AgentEmbed.tsx
interface AgentEmbedProps {
  type: "vendedor" | "concierge";
  title: string;
  embedUrl?: string; // iframe src — provide once the agent platform is set up
  height?: number;
}

export function AgentEmbed({ type, title, embedUrl, height = 600 }: AgentEmbedProps) {
  return (
    <div
      id={`agente-${type}`}
      className="w-full rounded-2xl overflow-hidden border border-border shadow-xl bg-card"
      style={{ minHeight: height }}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height={height}
          frameBorder="0"
          allow="microphone"
          className="block w-full"
        />
      ) : (
        // Placeholder shown until embed URL is configured
        <div className="flex flex-col items-center justify-center h-full min-h-[600px] gap-4 text-muted-foreground p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>
          <p className="font-medium">
            {type === "vendedor" ? "Agente Vendedor" : "Agente Concierge"} — em configuração
          </p>
          <p className="text-sm max-w-xs">
            O demo estará disponível em breve. Entretanto, contacte-nos directamente.
          </p>
        </div>
      )}
    </div>
  );
}
```

**Note:** Set the actual embed URLs in the component props when the agent platform (e.g., Typebot, Voiceflow, ElevenLabs, or a custom n8n webhook) is ready. No `.env` needed for a static site — pass the URLs directly as props in `TrustSection.tsx` and `CTAFinalSection.tsx`.

**Step 2: Create TrustSection**

```tsx
// src/components/makeitbot/TrustSection.tsx
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";
import { AgentEmbed } from "./AgentEmbed";

// Update these URLs when the agent platform is configured:
const CONCIERGE_EMBED_URL = ""; // e.g. "https://typebot.io/embed/your-concierge-bot"

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.trust.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.trust.subheading}</p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16">
          {t.trust.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Guarantee banner */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 mb-16">
            <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">
              ✓ {t.trust.guarantee}
            </p>
          </div>
        </ScrollReveal>

        {/* Concierge demo embed */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto" id="concierge-demo">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              {t.trust.demoLabel}
            </p>
            <AgentEmbed
              type="concierge"
              title="Agente Concierge Demo"
              embedUrl={CONCIERGE_EMBED_URL || undefined}
              height={500}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

**Step 3: Add to Home.tsx**

```tsx
import { TrustSection } from "@/components/makeitbot/TrustSection";
```

**Step 4: Commit**

```bash
git add src/components/makeitbot/TrustSection.tsx src/components/makeitbot/AgentEmbed.tsx src/pages/Home.tsx
git commit -m "feat: add trust section with stats, guarantee, and concierge demo embed"
```

---

## Task 9: Pricing Section

**Files:**
- Create: `src/components/makeitbot/PricingSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create PricingSection**

```tsx
// src/components/makeitbot/PricingSection.tsx
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="precos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.pricing.subheading}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-lg mx-auto text-center p-10 rounded-2xl glass border border-primary glow-blue">
            <p className="text-sm text-muted-foreground mb-2">{t.pricing.from}</p>
            <p className="text-5xl font-bold gradient-text mb-4">{t.pricing.price}</p>
            <p className="text-sm text-muted-foreground mb-8">{t.pricing.note}</p>
            <a href="#agente-vendedor">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue px-8 gap-2 w-full sm:w-auto">
                <Bot className="h-5 w-5" />
                {t.pricing.ctaLabel}
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs mx-auto">{t.pricing.ctaSub}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx**

```tsx
import { PricingSection } from "@/components/makeitbot/PricingSection";
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/PricingSection.tsx src/pages/Home.tsx
git commit -m "feat: add pricing section"
```

---

## Task 10: FAQ Section

**Files:**
- Create: `src/components/makeitbot/FAQSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create FAQSection using shadcn Accordion**

```tsx
// src/components/makeitbot/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";

export function FAQSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.heading}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="px-6 rounded-xl glass border border-border"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx**

```tsx
import { FAQSection } from "@/components/makeitbot/FAQSection";
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/FAQSection.tsx src/pages/Home.tsx
git commit -m "feat: add FAQ section"
```

---

## Task 11: CTA Final Section + Sales Agent Embed

**Files:**
- Create: `src/components/makeitbot/CTAFinalSection.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create CTAFinalSection**

```tsx
// src/components/makeitbot/CTAFinalSection.tsx
import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations";
import { useLanguage } from "@/hooks/use-language";
import { AgentEmbed } from "./AgentEmbed";

// Update when sales agent platform is configured:
const SALES_AGENT_EMBED_URL = ""; // e.g. "https://typebot.io/embed/your-sales-agent"

export function CTAFinalSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal animation="scale">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t.ctaFinal.heading.split(".")[0]}.</span>
              <br />
              {t.ctaFinal.heading.split(".").slice(1).join(".")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">{t.ctaFinal.subheading}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#agente-vendedor">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue px-8 gap-2">
                  <Bot className="h-5 w-5" />
                  {t.ctaFinal.ctaPrimary}
                </Button>
              </a>
              <a href="#concierge-demo">
                <Button size="lg" variant="outline" className="px-8">
                  {t.ctaFinal.ctaSecondary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Sales agent embed */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto" id="agente-vendedor">
            <AgentEmbed
              type="vendedor"
              title="Agente Vendedor Make It Bot"
              embedUrl={SALES_AGENT_EMBED_URL || undefined}
              height={600}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

**Step 2: Add to Home.tsx — final Home.tsx composition**

```tsx
// src/pages/Home.tsx — complete final version
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/use-language";
import { HeroSection } from "@/components/makeitbot/HeroSection";
import { ProblemSection } from "@/components/makeitbot/ProblemSection";
import { SolutionSection } from "@/components/makeitbot/SolutionSection";
import { HowItWorksSection } from "@/components/makeitbot/HowItWorksSection";
import { TrustSection } from "@/components/makeitbot/TrustSection";
import { PricingSection } from "@/components/makeitbot/PricingSection";
import { FAQSection } from "@/components/makeitbot/FAQSection";
import { CTAFinalSection } from "@/components/makeitbot/CTAFinalSection";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <Layout>
      <SEO
        title={
          lang === "pt"
            ? "Make It Bot — O Seu Assistente para Alojamento Local"
            : "Make It Bot — Your AI Assistant for Short-Term Rentals"
        }
        description={
          lang === "pt"
            ? "Responde hóspedes em 5 idiomas, 24/7, em menos de 2 minutos. O assistente de IA para proprietários de Alojamento Local em Lisboa e Porto."
            : "Replies to guests in 5 languages, 24/7, in under 2 minutes. The AI assistant for Short-Term Rental owners in Lisbon and Porto."
        }
        keywords="alojamento local, automação airbnb, resposta hospedes, ia alojamento, booking automação, short term rental ai"
      />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TrustSection />
        <PricingSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
    </Layout>
  );
}
```

**Step 3: Commit**

```bash
git add src/components/makeitbot/CTAFinalSection.tsx src/pages/Home.tsx
git commit -m "feat: add CTA final section with sales agent embed — landing page complete"
```

---

## Task 12: Visual QA & Final Polish

**Files:**
- Modify: `src/components/layout/Header.tsx` — update anchor hrefs to match section IDs
- Modify: `src/i18n/pt.ts` / `src/i18n/en.ts` — fix any copy issues found in review

**Step 1: Verify all anchor links resolve to correct section IDs**

Check these mappings are consistent across Header navigation and section component `id` attributes:

| Header link href | Section `id` |
|---|---|
| `#como-funciona` | `HowItWorksSection` → `id="como-funciona"` |
| `#precos` | `PricingSection` → `id="precos"` |
| `#faq` | `FAQSection` → `id="faq"` |
| `#agente-vendedor` | `CTAFinalSection` inner div → `id="agente-vendedor"` |
| `#concierge-demo` | `TrustSection` inner div → `id="concierge-demo"` |

**Step 2: Test language toggle on every section**

Toggle PT ↔ EN and verify all text updates. Check no hardcoded Portuguese strings remain in component files (all text must come from `t.*`).

**Step 3: Test on mobile (375px)**

```bash
bun run dev
```

Open browser dev tools → responsive mode → 375px wide. Verify:
- Hero text doesn't overflow
- Problem cards stack to single column
- Solution cards stack to 1-2 cols
- FAQ accordion is usable

**Step 4: Build for production**

```bash
cd C:/Users/aryha/Documents/MIB/site && bun run build
```

Expected: clean build with no TypeScript errors.

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: visual QA — fix section IDs and copy consistency"
```

---

## How to Add the Agent Embed URLs Later

When the agent platform is ready (e.g., Typebot, Voiceflow, n8n + custom chat UI):

1. Open `src/components/makeitbot/TrustSection.tsx` — update `CONCIERGE_EMBED_URL`
2. Open `src/components/makeitbot/CTAFinalSection.tsx` — update `SALES_AGENT_EMBED_URL`
3. If the platform uses a `<script>` tag instead of an iframe, update `AgentEmbed.tsx` to use a `useEffect` that appends the script to `document.body` when `type === "vendedor"` / `"concierge"`.

---

## Deliverables Checklist

- [ ] Merge conflicts resolved in all 4 base files
- [ ] i18n context with full PT-PT and EN copy
- [ ] Language switcher in Header (PT ↔ EN)
- [ ] 8 landing page sections: Hero, Problem, Solution, How It Works, Trust, Pricing, FAQ, CTA Final
- [ ] AgentEmbed component (placeholder-ready for iframe or script embed)
- [ ] All section anchor IDs consistent with Header navigation
- [ ] Production build passes with no TypeScript errors
- [ ] Mobile-responsive at 375px
