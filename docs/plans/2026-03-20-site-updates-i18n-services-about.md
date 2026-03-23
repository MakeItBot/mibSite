# Site Updates: i18n, Services, About, VetMib Pricing

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add EN/PT-PT language support, replace Shopify service with "IA FIRST" (Agentes de IA), update About page (photo + journey), and add VetMib pricing section with 15-day free trial.

**Architecture:** Next.js App Router with a React Context-based i18n system. Translation files per language (`en`, `pt`). Language selector in Header. All text content moves to translation keys. Service replacement is a content swap across Home, Services, Header, Footer, and route pages.

**Tech Stack:** Next.js App Router, React Context, TypeScript, Tailwind CSS, Framer Motion, lucide-react

---

## Task 1: Create i18n Infrastructure

**Files:**
- Create: `src/i18n/locales/en.ts`
- Create: `src/i18n/locales/pt.ts`
- Create: `src/i18n/types.ts`
- Create: `src/i18n/context.tsx`
- Create: `src/i18n/index.ts`

**Step 1: Create translation types**

Create `src/i18n/types.ts`:

```typescript
export type Locale = "en" | "pt"

export interface Translations {
  nav: {
    home: string
    about: string
    solutions: string
    services: string
    portfolio: string
    blog: string
    contact: string
    getQuote: string
  }
  hero: {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    techLabel: string
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    iaFirst: {
      title: string
      description: string
      features: string[]
    }
    chatbots: {
      title: string
      description: string
      features: string[]
    }
    pwa: {
      title: string
      description: string
      features: string[]
    }
  }
  about: {
    heroTitle: string
    heroSubtitle: string
    storyTitle: string
    storyParagraphs: string[]
    statsNumber: string
    statsLabel: string
    founderLabel: string
    founderTitle: string
    founderParagraphs: string[]
    valuesTitle: string
    valuesSubtitle: string
    values: { title: string; description: string }[]
    journeyTitle: string
    journeySubtitle: string
    milestones: { year: string; title: string; description: string }[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  whyChoose: {
    title: string
    subtitle: string
    cta: string
    features: { title: string; description: string }[]
  }
  featuredWork: {
    title: string
    subtitle: string
    viewAll: string
  }
  testimonials: {
    title: string
    subtitle: string
    items: { quote: string; author: string; role: string }[]
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    description: string
    solucoesTitle: string
    companyTitle: string
    servicesTitle: string
    newsletterTitle: string
    newsletterSubtitle: string
    subscribePlaceholder: string
    subscribeButton: string
    copyright: string
  }
  servicesPage: {
    heroTitle: string
    heroSubtitle: string
    processTitle: string
    processSubtitle: string
    process: { step: string; title: string; description: string }[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  portfolio: {
    heroTitle: string
    heroSubtitle: string
    filterAll: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
    viewDetails: string
  }
}
```

**Step 2: Create English translations**

Create `src/i18n/locales/en.ts` with all current English text from the site. Key sections:

```typescript
import type { Translations } from "../types"

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    solutions: "Solutions",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    getQuote: "Get a Quote",
  },
  hero: {
    badge: "Fullstack Software Development",
    titleStart: "Transforming Ideas into ",
    titleHighlight: "Intelligent Solutions",
    subtitle: "We craft custom software solutions that drive innovation. From AI agents to intelligent chatbots and Progressive Web Apps – we build what matters.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Services",
    techLabel: "Powered by modern technologies",
  },
  services: {
    sectionTitle: "What We Build",
    sectionSubtitle: "Specialized solutions that combine cutting-edge technology with practical business value.",
    iaFirst: {
      title: "AI Agents & Custom Systems",
      description: "Tailor-made AI agents and intelligent systems designed specifically for your business. From workflow automation to decision support — we build AI that works for you.",
      features: [
        "Custom AI agent development",
        "Business process automation",
        "Intelligent decision systems",
        "LLM integration & fine-tuning",
        "Multi-agent orchestration",
        "AI-powered analytics",
      ],
    },
    chatbots: {
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational AI that understands your business and serves your customers 24/7.",
      features: [
        "RAG technology",
        "Custom knowledge bases",
        "Multi-language support",
        "CRM integrations",
        "Analytics & insights",
        "Continuous learning",
      ],
    },
    pwa: {
      title: "Progressive Web Apps",
      description: "Native-like web experiences that work offline and can be installed on any device.",
      features: [
        "Offline functionality",
        "Push notifications",
        "App-like experience",
        "Cross-platform",
        "Fast loading",
        "SEO friendly",
      ],
    },
  },
  about: {
    heroTitle: "About ",
    heroSubtitle: "We're a team of passionate developers and designers building software that makes a difference for businesses worldwide.",
    storyTitle: "Our Story",
    storyParagraphs: [
      "Make It Bot was born from a simple observation: small and medium-sized businesses often struggle to access the same quality software solutions that large enterprises enjoy.",
      "We set out to change that. By combining deep technical expertise with a genuine understanding of business challenges, we create solutions that are not just technically excellent but truly transformative.",
      "Today, we specialize in three key areas: custom AI agents, AI-powered chatbots, and progressive web applications. Each of these services represents our commitment to helping businesses thrive in the digital age.",
    ],
    statsNumber: "50+",
    statsLabel: "Projects Delivered",
    founderLabel: "Meet the Founder",
    founderTitle: "Driven by Innovation",
    founderParagraphs: [
      "With over 10 years of experience in software development and a passion for helping businesses succeed, our founder started Make It Bot with a clear mission: make powerful technology accessible to everyone.",
      "Having worked with startups and Fortune 500 companies alike, the vision was to bring enterprise-level expertise to businesses of all sizes, without the enterprise-level price tag.",
    ],
    valuesTitle: "Our Values",
    valuesSubtitle: "The principles that guide everything we do",
    values: [
      { title: "Results-Driven", description: "We focus on delivering measurable outcomes that impact your bottom line." },
      { title: "Client-Centric", description: "Your success is our success. We build lasting partnerships, not just projects." },
      { title: "Collaborative", description: "We work alongside your team, ensuring knowledge transfer and empowerment." },
      { title: "Innovative", description: "We stay ahead of technology trends to bring you cutting-edge solutions." },
    ],
    journeyTitle: "Our Journey",
    journeySubtitle: "Key milestones that shaped who we are today",
    milestones: [
      { year: "2024", title: "Founded", description: "Make It Bot was created with the mission to make AI and custom software accessible to businesses of all sizes." },
      { year: "2024", title: "First AI Projects", description: "Delivered our first AI chatbot and automation solutions for SMBs across Europe." },
      { year: "2025", title: "Growing Fast", description: "Passed 50+ successfully delivered projects and expanded our service offering." },
      { year: "2025", title: "VetMib Launch", description: "Launched VetMib, our AI assistant specialized for veterinary clinics." },
    ],
    ctaTitle: "Ready to Work Together?",
    ctaSubtitle: "Let's discuss how we can help your business grow with custom software solutions.",
    ctaButton: "Get in Touch",
  },
  whyChoose: {
    title: "Why Choose ",
    subtitle: "We're not just developers – we're partners in your success. Our approach combines technical excellence with a deep understanding of business needs.",
    cta: "Learn About Our Approach",
    features: [
      { title: "Fullstack Expertise", description: "End-to-end development from concept to deployment. One team, one vision, complete solutions." },
      { title: "Tailored Solutions", description: "No cookie-cutter templates. Every project is crafted to match your unique requirements." },
      { title: "Cutting-Edge Tech", description: "We leverage the latest technologies and best practices to build future-proof solutions." },
      { title: "Dedicated Support", description: "Ongoing maintenance and support to ensure your software continues to deliver value." },
    ],
  },
  featuredWork: {
    title: "Featured Work",
    subtitle: "A glimpse into some of our recent projects and the impact we've made.",
    viewAll: "View All Projects",
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Don't just take our word for it – hear from businesses we've helped succeed.",
    items: [
      { quote: "Make It Bot transformed our customer service with their AI chatbot. Response times dropped by 80% and customer satisfaction soared.", author: "Sarah Johnson", role: "CEO, TechStart Inc" },
      { quote: "The custom AI agent they built for us has become an essential tool for our operations. Incredible attention to detail and user experience.", author: "Michael Chen", role: "Product Lead, StyleFlow" },
      { quote: "Their PWA solution allowed us to reach users across all platforms without the complexity of native apps. Best decision we made.", author: "Emily Roberts", role: "Founder, FitLife App" },
    ],
  },
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's discuss your next project and build something extraordinary together.",
    button: "Start Your Project",
  },
  footer: {
    description: "Transforming ideas into intelligent solutions. We build cutting-edge software that empowers businesses to thrive in the digital age.",
    solucoesTitle: "Solutions",
    companyTitle: "Company",
    servicesTitle: "Services",
    newsletterTitle: "Stay Updated",
    newsletterSubtitle: "Subscribe to our newsletter for the latest updates and insights.",
    subscribePlaceholder: "Enter your email",
    subscribeButton: "Subscribe",
    copyright: "Make It Bot. All rights reserved.",
  },
  servicesPage: {
    heroTitle: "Our ",
    heroSubtitle: "Specialized software solutions designed to solve real business challenges and drive measurable results.",
    processTitle: "How We Work",
    processSubtitle: "Our proven process ensures successful delivery every time.",
    process: [
      { step: "01", title: "Discovery", description: "We dive deep into your business needs, goals, and challenges to understand the full picture." },
      { step: "02", title: "Planning", description: "We create a detailed roadmap with clear milestones, timelines, and deliverables." },
      { step: "03", title: "Development", description: "Our team builds your solution using agile methodologies with regular updates and feedback loops." },
      { step: "04", title: "Testing", description: "Rigorous testing ensures your solution works flawlessly across all scenarios and devices." },
      { step: "05", title: "Launch", description: "We deploy your solution and ensure a smooth transition with zero downtime." },
      { step: "06", title: "Support", description: "Ongoing maintenance and support to keep your solution running at peak performance." },
    ],
    ctaTitle: "Not Sure Which Service You Need?",
    ctaSubtitle: "Let's have a conversation about your goals. We'll help you identify the best solution for your specific needs.",
    ctaButton: "Schedule a Free Consultation",
  },
  portfolio: {
    heroTitle: "Our ",
    heroSubtitle: "Explore our recent work and see how we've helped businesses achieve their goals through innovative software solutions.",
    filterAll: "All",
    ctaTitle: "Ready to Be Our Next Success Story?",
    ctaSubtitle: "Let's discuss your project and create something amazing together.",
    ctaButton: "Start Your Project",
    viewDetails: "View Details",
  },
}
```

**Step 3: Create Portuguese translations**

Create `src/i18n/locales/pt.ts` — same structure, all values in Portuguese (PT-PT):

```typescript
import type { Translations } from "../types"

export const pt: Translations = {
  nav: {
    home: "Início",
    about: "Sobre",
    solutions: "Soluções",
    services: "Serviços",
    portfolio: "Portfólio",
    blog: "Blog",
    contact: "Contacto",
    getQuote: "Pedir Orçamento",
  },
  hero: {
    badge: "Desenvolvimento de Software Fullstack",
    titleStart: "Transformar Ideias em ",
    titleHighlight: "Soluções Inteligentes",
    subtitle: "Criamos soluções de software à medida que impulsionam a inovação. Dos agentes de IA a chatbots inteligentes e Progressive Web Apps — construímos o que importa.",
    ctaPrimary: "Iniciar Projeto",
    ctaSecondary: "Ver Serviços",
    techLabel: "Alimentado por tecnologias modernas",
  },
  services: {
    sectionTitle: "O Que Construímos",
    sectionSubtitle: "Soluções especializadas que combinam tecnologia de ponta com valor prático para o negócio.",
    iaFirst: {
      title: "Agentes de IA & Sistemas Personalizados",
      description: "Agentes de IA e sistemas inteligentes feitos à medida para o seu negócio. Da automação de processos ao apoio à decisão — criamos IA que trabalha por si.",
      features: [
        "Desenvolvimento de agentes de IA personalizados",
        "Automação de processos de negócio",
        "Sistemas de decisão inteligente",
        "Integração e ajuste de LLMs",
        "Orquestração multi-agente",
        "Análise de dados com IA",
      ],
    },
    chatbots: {
      title: "Chatbots com IA",
      description: "IA conversacional inteligente que compreende o seu negócio e atende os seus clientes 24/7.",
      features: [
        "Tecnologia RAG",
        "Bases de conhecimento personalizadas",
        "Suporte multilingue",
        "Integrações com CRM",
        "Análise e relatórios",
        "Aprendizagem contínua",
      ],
    },
    pwa: {
      title: "Progressive Web Apps",
      description: "Experiências web nativas que funcionam offline e podem ser instaladas em qualquer dispositivo.",
      features: [
        "Funcionalidade offline",
        "Notificações push",
        "Experiência tipo app",
        "Multiplataforma",
        "Carregamento rápido",
        "Otimizado para SEO",
      ],
    },
  },
  about: {
    heroTitle: "Sobre a ",
    heroSubtitle: "Somos uma equipa apaixonada de programadores e designers que constroem software que faz a diferença para empresas em todo o mundo.",
    storyTitle: "A Nossa História",
    storyParagraphs: [
      "A Make It Bot nasceu de uma observação simples: as pequenas e médias empresas muitas vezes não conseguem aceder às mesmas soluções de software de qualidade que as grandes empresas.",
      "Decidimos mudar isso. Combinando profundo conhecimento técnico com uma compreensão genuína dos desafios empresariais, criamos soluções que não são apenas tecnicamente excelentes, mas verdadeiramente transformadoras.",
      "Hoje, especializamo-nos em três áreas-chave: agentes de IA personalizados, chatbots inteligentes e progressive web applications. Cada um destes serviços representa o nosso compromisso em ajudar empresas a prosperar na era digital.",
    ],
    statsNumber: "50+",
    statsLabel: "Projetos Entregues",
    founderLabel: "Conheça o Fundador",
    founderTitle: "Movido pela Inovação",
    founderParagraphs: [
      "Com mais de 10 anos de experiência em desenvolvimento de software e uma paixão por ajudar empresas a ter sucesso, o nosso fundador criou a Make It Bot com uma missão clara: tornar a tecnologia poderosa acessível a todos.",
      "Tendo trabalhado com startups e empresas Fortune 500, a visão foi trazer experiência de nível empresarial para negócios de todos os tamanhos, sem o preço de nível empresarial.",
    ],
    valuesTitle: "Os Nossos Valores",
    valuesSubtitle: "Os princípios que guiam tudo o que fazemos",
    values: [
      { title: "Orientados a Resultados", description: "Focamo-nos em entregar resultados mensuráveis que impactam o seu negócio." },
      { title: "Centrados no Cliente", description: "O seu sucesso é o nosso sucesso. Construímos parcerias duradouras, não apenas projetos." },
      { title: "Colaborativos", description: "Trabalhamos ao lado da sua equipa, garantindo transferência de conhecimento e autonomia." },
      { title: "Inovadores", description: "Mantemo-nos à frente das tendências tecnológicas para trazer soluções de vanguarda." },
    ],
    journeyTitle: "O Nosso Percurso",
    journeySubtitle: "Marcos importantes que moldaram quem somos hoje",
    milestones: [
      { year: "2024", title: "Fundação", description: "A Make It Bot foi criada com a missão de tornar a IA e o software personalizado acessível a empresas de todos os tamanhos." },
      { year: "2024", title: "Primeiros Projetos IA", description: "Entregámos os nossos primeiros chatbots de IA e soluções de automação para PMEs na Europa." },
      { year: "2025", title: "Crescimento Rápido", description: "Ultrapassámos os 50+ projetos entregues com sucesso e expandimos a oferta de serviços." },
      { year: "2025", title: "Lançamento VetMib", description: "Lançámos o VetMib, o nosso assistente de IA especializado para clínicas veterinárias." },
    ],
    ctaTitle: "Prontos para Trabalhar Juntos?",
    ctaSubtitle: "Vamos discutir como podemos ajudar o seu negócio a crescer com soluções de software personalizadas.",
    ctaButton: "Entrar em Contacto",
  },
  whyChoose: {
    title: "Porquê Escolher a ",
    subtitle: "Não somos apenas programadores — somos parceiros no seu sucesso. A nossa abordagem combina excelência técnica com uma profunda compreensão das necessidades do negócio.",
    cta: "Saiba Mais Sobre a Nossa Abordagem",
    features: [
      { title: "Experiência Fullstack", description: "Desenvolvimento de ponta a ponta, do conceito à implementação. Uma equipa, uma visão, soluções completas." },
      { title: "Soluções à Medida", description: "Sem templates genéricos. Cada projeto é criado para corresponder às suas necessidades únicas." },
      { title: "Tecnologia de Ponta", description: "Usamos as tecnologias mais recentes e melhores práticas para construir soluções preparadas para o futuro." },
      { title: "Suporte Dedicado", description: "Manutenção e suporte contínuos para garantir que o seu software continua a entregar valor." },
    ],
  },
  featuredWork: {
    title: "Trabalhos em Destaque",
    subtitle: "Um vislumbre de alguns dos nossos projetos recentes e o impacto que tivemos.",
    viewAll: "Ver Todos os Projetos",
  },
  testimonials: {
    title: "O Que Dizem os Nossos Clientes",
    subtitle: "Não é só a nossa palavra — ouça empresas que ajudámos a ter sucesso.",
    items: [
      { quote: "A Make It Bot transformou o nosso atendimento ao cliente com o chatbot de IA. Os tempos de resposta caíram 80% e a satisfação dos clientes disparou.", author: "Sarah Johnson", role: "CEO, TechStart Inc" },
      { quote: "O agente de IA personalizado que construíram para nós tornou-se uma ferramenta essencial para as nossas operações. Atenção incrível ao detalhe.", author: "Michael Chen", role: "Product Lead, StyleFlow" },
      { quote: "A solução PWA permitiu-nos alcançar utilizadores em todas as plataformas sem a complexidade de apps nativos. A melhor decisão que tomámos.", author: "Emily Roberts", role: "Founder, FitLife App" },
    ],
  },
  cta: {
    title: "Pronto para Transformar o Seu Negócio?",
    subtitle: "Vamos discutir o seu próximo projeto e construir algo extraordinário juntos.",
    button: "Iniciar Projeto",
  },
  footer: {
    description: "Transformar ideias em soluções inteligentes. Construímos software de vanguarda que capacita empresas a prosperar na era digital.",
    solucoesTitle: "Soluções",
    companyTitle: "Empresa",
    servicesTitle: "Serviços",
    newsletterTitle: "Fique Atualizado",
    newsletterSubtitle: "Subscreva a nossa newsletter para as últimas novidades.",
    subscribePlaceholder: "O seu email",
    subscribeButton: "Subscrever",
    copyright: "Make It Bot. Todos os direitos reservados.",
  },
  servicesPage: {
    heroTitle: "Os Nossos ",
    heroSubtitle: "Soluções de software especializadas para resolver desafios reais de negócio e gerar resultados mensuráveis.",
    processTitle: "Como Trabalhamos",
    processSubtitle: "O nosso processo comprovado garante entregas de sucesso.",
    process: [
      { step: "01", title: "Descoberta", description: "Aprofundamos as necessidades, objetivos e desafios do seu negócio para compreender o panorama completo." },
      { step: "02", title: "Planeamento", description: "Criamos um roteiro detalhado com marcos claros, prazos e entregáveis." },
      { step: "03", title: "Desenvolvimento", description: "A nossa equipa constrói a sua solução com metodologias ágeis, atualizações regulares e ciclos de feedback." },
      { step: "04", title: "Testes", description: "Testes rigorosos garantem que a sua solução funciona perfeitamente em todos os cenários e dispositivos." },
      { step: "05", title: "Lançamento", description: "Implementamos a sua solução garantindo uma transição suave sem tempo de inatividade." },
      { step: "06", title: "Suporte", description: "Manutenção e suporte contínuos para manter a sua solução a funcionar no melhor desempenho." },
    ],
    ctaTitle: "Não Sabe Qual Serviço Precisa?",
    ctaSubtitle: "Vamos conversar sobre os seus objetivos. Ajudamos a identificar a melhor solução para as suas necessidades específicas.",
    ctaButton: "Agendar Consulta Gratuita",
  },
  portfolio: {
    heroTitle: "O Nosso ",
    heroSubtitle: "Explore os nossos trabalhos recentes e veja como ajudámos empresas a atingir os seus objetivos com soluções inovadoras.",
    filterAll: "Todos",
    ctaTitle: "Pronto para Ser o Nosso Próximo Caso de Sucesso?",
    ctaSubtitle: "Vamos discutir o seu projeto e criar algo incrível juntos.",
    ctaButton: "Iniciar Projeto",
    viewDetails: "Ver Detalhes",
  },
}
```

**Step 4: Create i18n Context provider**

Create `src/i18n/context.tsx`:

```typescript
"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Locale, Translations } from "./types"
import { en } from "./locales/en"
import { pt } from "./locales/pt"

const translations: Record<Locale, Translations> = { en, pt }

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || "en"
    }
    return "en"
  })

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
```

**Step 5: Create barrel export**

Create `src/i18n/index.ts`:

```typescript
export { I18nProvider, useI18n } from "./context"
export type { Locale, Translations } from "./types"
```

**Step 6: Wrap app with I18nProvider**

Modify: `src/components/layout/Layout.tsx` — wrap the `<Layout>` children with `<I18nProvider>`:

```typescript
import { I18nProvider } from "@/i18n"

// Wrap the outer-most element:
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      {/* existing layout content */}
    </I18nProvider>
  )
}
```

**Step 7: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n infrastructure with EN/PT-PT translations"
```

---

## Task 2: Add Language Selector to Header

**Files:**
- Create: `src/components/layout/LanguageSelector.tsx`
- Modify: `src/components/layout/Header.tsx`

**Step 1: Create LanguageSelector component**

Create `src/components/layout/LanguageSelector.tsx`:

```typescript
"use client"

import { useI18n, type Locale } from "@/i18n"

const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
}

export function LanguageSelector() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 rounded-full glass px-1 py-0.5">
      {(Object.keys(localeLabels) as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${loc === "en" ? "English" : "Português"}`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  )
}
```

**Step 2: Update Header to use i18n and LanguageSelector**

Modify `src/components/layout/Header.tsx`:
- Import `useI18n` and `LanguageSelector`
- Replace hardcoded `navigation` array with one built from `t.nav`
- Add `<LanguageSelector />` next to the theme toggle
- Replace "Shopify Apps" submenu item with "IA FIRST" (or "Agentes de IA" in PT)
- Update Services submenu items

The navigation array becomes dynamic based on locale:

```typescript
const { t } = useI18n()

const navigation = [
  { name: t.nav.home, href: "/" },
  { name: t.nav.about, href: "/about/" },
  {
    name: t.nav.solutions,
    href: "/solucoes/",
    submenu: [
      { name: "Veterinárias", href: "/solucoes/veterinarias/" },
      { name: "Agendamento Inteligente", href: "/solucoes/veterinarias/agendamento-inteligente/" },
    ],
  },
  {
    name: t.nav.services,
    href: "/services/",
    submenu: [
      { name: t.services.iaFirst.title, href: "/services/ia-first/" },
      { name: t.services.chatbots.title, href: "/services/chatbots/" },
      { name: t.services.pwa.title, href: "/services/pwa/" },
    ],
  },
  { name: t.nav.portfolio, href: "/portfolio/" },
  { name: t.nav.blog, href: "/blog/" },
  { name: t.nav.contact, href: "/contact/" },
]
```

Place `<LanguageSelector />` before the theme toggle button in the actions div.

**Step 3: Commit**

```bash
git add src/components/layout/LanguageSelector.tsx src/components/layout/Header.tsx
git commit -m "feat: add language selector to header with EN/PT toggle"
```

---

## Task 3: Replace Shopify with IA FIRST in Services Page

**Files:**
- Modify: `src/views/Services.tsx`
- Create: `src/views/services/IAFirst.tsx`
- Create: `app/(site)/services/ia-first/page.tsx`
- Modify or delete: `app/(site)/services/shopify/page.tsx`
- Modify or delete: `src/views/services/Shopify.tsx` (if it exists)

**Step 1: Update Services.tsx**

Modify `src/views/Services.tsx`:

- Import `useI18n` from `@/i18n`
- Import `Brain` icon from lucide-react (to replace `Code2`)
- Replace the `services` const array so the first item uses `t.services.iaFirst` instead of Shopify:

```typescript
const { t } = useI18n()

const services = [
  {
    icon: Brain,
    title: t.services.iaFirst.title,
    description: t.services.iaFirst.description,
    href: "/services/ia-first/",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    features: t.services.iaFirst.features,
  },
  {
    icon: Bot,
    title: t.services.chatbots.title,
    description: t.services.chatbots.description,
    href: "/services/chatbots/",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: t.services.chatbots.features,
  },
  {
    icon: Smartphone,
    title: t.services.pwa.title,
    description: t.services.pwa.description,
    href: "/services/pwa/",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: t.services.pwa.features,
  },
]
```

Also use `t.servicesPage.*` for the hero, process, and CTA sections.

**Step 2: Create IA FIRST landing page view**

Create `src/views/services/IAFirst.tsx` — a compelling landing page for the "IA FIRST" service. Structure similar to the existing Shopify page but with AI agent-focused content. Include sections for:
- Hero with strong value proposition
- Use cases (workflow automation, decision support, data analysis, customer interaction)
- Technology stack (LLMs, RAG, multi-agent, integrations)
- Process (how we build custom AI systems)
- CTA

Use `useI18n()` for all text content — add additional keys to translations if needed or hardcode initially and extract later.

**Step 3: Create route page**

Create `app/(site)/services/ia-first/page.tsx`:

```typescript
import type { Metadata } from 'next'
import IAFirstPage from '@/views/services/IAFirst'

export const metadata: Metadata = {
  title: 'IA FIRST — Custom AI Agents & Intelligent Systems',
  description: 'Tailor-made AI agents and intelligent systems designed specifically for your business. Workflow automation, decision support, and multi-agent orchestration.',
  alternates: { canonical: 'https://makeit.bot/services/ia-first/' },
}

export default function Page() {
  return <IAFirstPage />
}
```

**Step 4: Handle old Shopify route**

Either delete `app/(site)/services/shopify/page.tsx` and `src/views/services/Shopify.tsx`, or redirect `/services/shopify/` → `/services/ia-first/` for SEO. Recommended: keep the Shopify page for now but remove it from navigation. Decision with user.

**Step 5: Commit**

```bash
git add src/views/Services.tsx src/views/services/IAFirst.tsx app/\(site\)/services/ia-first/
git commit -m "feat: replace Shopify service with IA FIRST (AI Agents)"
```

---

## Task 4: Replace Shopify with IA FIRST in Home Page

**Files:**
- Modify: `src/views/Home.tsx`

**Step 1: Update Home.tsx services array and hero**

Modify `src/views/Home.tsx`:

- Import `useI18n` and `Brain` from lucide-react
- Replace `Code2` import with `Brain`
- Update hero subtitle (line 65): replace "From Shopify apps" → use `t.hero.subtitle`
- Update services array (line 133): replace Shopify entry with IA FIRST:

```typescript
const { t } = useI18n()

const services = [
  {
    icon: Brain,
    title: t.services.iaFirst.title,
    description: t.services.iaFirst.description,
    href: "/services/ia-first/",
    color: "text-violet-500",
  },
  {
    icon: Bot,
    title: t.services.chatbots.title,
    description: t.services.chatbots.description,
    href: "/services/chatbots/",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: t.services.pwa.title,
    description: t.services.pwa.description,
    href: "/services/pwa/",
    color: "text-accent",
  },
]
```

- Update testimonials[1].quote (line 349): replace Shopify mention with AI agent text using `t.testimonials.items`
- Use all other translation keys throughout (`t.hero.*`, `t.whyChoose.*`, `t.featuredWork.*`, `t.cta.*`)

**Step 2: Commit**

```bash
git add src/views/Home.tsx
git commit -m "feat: replace Shopify with IA FIRST on home page, add i18n"
```

---

## Task 5: Update Footer Services Links

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update Footer.tsx**

- Import `useI18n`
- Replace the services footerLinks to point to `/services/ia-first/` instead of `/services/shopify/`
- Use `t.footer.*` for section titles and text:

```typescript
const { t } = useI18n()

const footerLinks = {
  // ... keep solucoes as-is
  services: [
    { name: t.services.iaFirst.title, href: "/services/ia-first/" },
    { name: t.services.chatbots.title, href: "/services/chatbots/" },
    { name: t.services.pwa.title, href: "/services/pwa/" },
    { name: locale === "pt" ? "Todos os Serviços" : "All Services", href: "/services/" },
  ],
  // ...
}
```

**Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: update footer services links and add i18n"
```

---

## Task 6: Update About Page — Founder Photo + Journey

**Files:**
- Modify: `src/views/About.tsx`

**Step 1: Update founder photo**

Modify `src/views/About.tsx` line 117:
```typescript
// OLD:
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
// NEW:
src="/pics/Ary_perfil.png"
```

**Step 2: Update milestones array**

Replace milestones (lines 30-37) with realistic timeline:

```typescript
const milestones = [
  { year: "2024", title: t.about.milestones[0].title, description: t.about.milestones[0].description },
  { year: "2024", title: t.about.milestones[1].title, description: t.about.milestones[1].description },
  { year: "2025", title: t.about.milestones[2].title, description: t.about.milestones[2].description },
  { year: "2025", title: t.about.milestones[3].title, description: t.about.milestones[3].description },
]
```

**Step 3: Update stats badge**

Line 100: change `100+` → `t.about.statsNumber` (which is `"50+"`)

**Step 4: Update "Our Story" text**

Line 81: replace Shopify mention with AI agents text using `t.about.storyParagraphs`

**Step 5: Use all `t.about.*` keys throughout the component**

Add `import { useI18n } from "@/i18n"` and use `const { t } = useI18n()` inside the component, then replace all hardcoded text with translation keys.

**Step 6: Commit**

```bash
git add src/views/About.tsx
git commit -m "feat: update About page — founder photo, journey timeline, i18n"
```

---

## Task 7: Add VetMib Pricing Section

**Files:**
- Modify: `src/views/VetMib.tsx`
- Modify: `src/components/vetmib/translations.ts`

**Step 1: Add pricing translations**

Add to `src/components/vetmib/translations.ts` under `pt`:

```typescript
pricing: {
  title: "Planos & Preços",
  subtitle: "Escolha o plano ideal para a sua clínica. Preços sob consulta.",
  trialBadge: "🎉 15 dias grátis para experimentar!",
  whatsappCta: "Pedir Orçamento pelo WhatsApp",
  whatsappUrl: "https://wa.me/+393514006183?text=Olá! Gostaria de saber os preços do VetMib.",
  plans: [
    {
      name: "Starter",
      price: "Sob consulta",
      description: "Ideal para clínicas pequenas",
      features: [
        "Até 100 mensagens/mês",
        "Agendamento automático",
        "Lembretes por WhatsApp",
        "1 veterinário",
        "Suporte por email",
      ],
      cta: "Pedir Orçamento",
      popular: false,
    },
    {
      name: "Profissional",
      price: "Sob consulta",
      description: "Para clínicas em crescimento",
      features: [
        "Até 500 mensagens/mês",
        "Agendamento automático",
        "Lembretes e follow-ups",
        "Até 5 veterinários",
        "Integração com software clínico",
        "Relatórios e análises",
        "Suporte prioritário",
      ],
      cta: "Pedir Orçamento",
      popular: true,
    },
    {
      name: "Clínica Plus",
      price: "Sob consulta",
      description: "Para grandes clínicas e hospitais",
      features: [
        "Mensagens ilimitadas",
        "Todas as funcionalidades Pro",
        "Veterinários ilimitados",
        "API personalizada",
        "Gestor de conta dedicado",
        "Onboarding personalizado",
        "SLA garantido",
      ],
      cta: "Falar Connosco",
      popular: false,
    },
  ],
},
```

**Step 2: Create PricingSection component in VetMib.tsx**

Add new section before `CtaFinalSection` in `VetMib.tsx`:

```typescript
function PricingSection() {
  const p = t.pricing;
  return (
    <section id="precos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4 text-green-500" />
            <span className="text-sm font-semibold text-green-600">{p.trialBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{p.title}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{p.subtitle}</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {p.plans.map((plan, i) => (
            <ScrollReveal key={i}>
              <div className={`relative bg-card rounded-3xl border p-8 h-full flex flex-col ${
                plan.popular ? "border-primary shadow-xl scale-105" : "border-border"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">{plan.price}</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full ${
                    plan.popular ? "gradient-primary text-primary-foreground" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={p.whatsappUrl} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Add PricingSection to VetMibPage**

In the `VetMibPage` component, add `<PricingSection />` between `<FaqSection />` and `<CtaFinalSection />`.

**Step 4: Commit**

```bash
git add src/views/VetMib.tsx src/components/vetmib/translations.ts
git commit -m "feat: add VetMib pricing section with 15-day free trial"
```

---

## Task 8: Update Sitemap

**Files:**
- Modify: `app/sitemap.ts`

**Step 1: Add IA FIRST route to sitemap**

Add to `staticPages` array:
```typescript
{ path: '/services/ia-first/', priority: 0.7, changeFrequency: 'monthly' as const },
```

Optionally remove `/services/shopify/` if that page is deleted.

**Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add IA FIRST service page to sitemap"
```

---

## Task 9: Integration Testing

**Step 1: Build the project**

```bash
npm run build
```

Verify no TypeScript errors or missing imports.

**Step 2: Manual testing checklist**

- [ ] Language selector toggles between EN and PT-PT
- [ ] All pages reflect the selected language
- [ ] IA FIRST service card appears on Home and Services pages
- [ ] IA FIRST service sub-page loads at `/services/ia-first/`
- [ ] About page shows `/pics/Ary_perfil.png` as founder photo
- [ ] About page shows 4 milestones starting from 2024
- [ ] About page shows "50+" instead of "100+"
- [ ] VetMib page shows pricing section with 3 plans
- [ ] VetMib pricing shows "15 dias grátis" badge
- [ ] Header and Footer links point to correct pages
- [ ] No Shopify references remain in nav/footer

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final integration fixes after i18n + services update"
```

---

## Summary of Files Changed

| Action | File |
|--------|------|
| Create | `src/i18n/types.ts` |
| Create | `src/i18n/locales/en.ts` |
| Create | `src/i18n/locales/pt.ts` |
| Create | `src/i18n/context.tsx` |
| Create | `src/i18n/index.ts` |
| Create | `src/components/layout/LanguageSelector.tsx` |
| Create | `src/views/services/IAFirst.tsx` |
| Create | `app/(site)/services/ia-first/page.tsx` |
| Modify | `src/components/layout/Layout.tsx` (add I18nProvider) |
| Modify | `src/components/layout/Header.tsx` (i18n + lang selector + remove Shopify) |
| Modify | `src/components/layout/Footer.tsx` (i18n + remove Shopify link) |
| Modify | `src/views/Home.tsx` (i18n + replace Shopify with IA FIRST) |
| Modify | `src/views/Services.tsx` (i18n + replace Shopify with IA FIRST) |
| Modify | `src/views/About.tsx` (founder photo + journey + i18n) |
| Modify | `src/views/VetMib.tsx` (add PricingSection) |
| Modify | `src/components/vetmib/translations.ts` (add pricing data) |
| Modify | `app/sitemap.ts` (add ia-first route) |
| Delete/Keep | `app/(site)/services/shopify/page.tsx` (decide with user) |
