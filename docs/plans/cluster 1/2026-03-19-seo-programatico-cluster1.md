# SEO Programático — Migração + Cluster 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrar o site de Vite SPA para Next.js App Router com SSG, e implementar toda a estrutura de SEO programático do Cluster 1 (Agendamento Inteligente + Anti-No-Show).

**Architecture:** O site atual é um SPA Vite + React que renderiza tudo client-side — incompatível com SEO programático. A migração para Next.js App Router permite SSG (Static Site Generation) para todas as páginas programáticas, com `generateStaticParams` a gerar rotas a partir de JSON datasets. As páginas programáticas usam templates reutilizáveis alimentados por dados do ficheiro `cluster1_agendamento-inteligente.json`. O layout, componentes UI (shadcn/ui) e estilos (Tailwind) são portados diretamente.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui, next-sitemap, JSON datasets, Vercel

**Decisão Crítica — Porquê Migrar para Next.js:**
- O site atual é um SPA puro → o Google vê HTML vazio até o JS carregar → SEO terrível
- `react-helmet-async` injeta meta tags client-side → crawlers não as veem consistentemente
- Não há `sitemap.xml` dinâmico, não há `generateStaticParams`, não há SSG
- Next.js App Router resolve tudo isto nativamente com zero hacks
- O site é pequeno (~1.672 linhas de páginas) → migração gerível
- Vercel hosting já está configurado

---

## Fase A: Migração Vite → Next.js (Tasks 1-8)

### Task 1: Scaffold Next.js e copiar configuração base

**Files:**
- Create: `next.config.ts`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Modify: `package.json`
- Modify: `tsconfig.json`
- Keep: `tailwind.config.ts`, `postcss.config.js`, `components.json` (shadcn)

**Step 1: Inicializar Next.js no projeto existente**

Instalar dependências Next.js e remover Vite:

```bash
npm install next@latest
npm uninstall vite @vitejs/plugin-react-swc
```

**Step 2: Atualizar `package.json` scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**Step 3: Criar `next.config.ts`**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig
```

**Step 4: Atualizar `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Step 5: Criar `app/layout.tsx` (root layout)**

```tsx
import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/use-theme'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'makeit.bot — Soluções de IA para Veterinárias',
    template: '%s | makeit.bot',
  },
  description: 'Soluções de automação e inteligência artificial para clínicas veterinárias em Portugal.',
  metadataBase: new URL('https://makeit.bot'),
  openGraph: {
    siteName: 'makeit.bot',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Step 6: Mover `src/index.css` → `src/styles/globals.css`**

Copiar o conteúdo do CSS existente. Importar no layout.

**Step 7: Build de teste**

```bash
npm run dev
```

Expected: Next.js arranca (pode ter erros de importação — resolvemos nos próximos tasks)

**Step 8: Commit**

```bash
git add next.config.ts app/ tsconfig.json package.json
git commit -m "chore: scaffold Next.js App Router, replace Vite config"
```

---

### Task 2: Adaptar componentes UI para Next.js

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Layout.tsx`
- Modify: `src/components/NavLink.tsx`
- Modify: Todos os ficheiros que usam `react-router-dom`

**Step 1: Substituir imports de react-router-dom por next/link e next/navigation**

Em TODOS os componentes, substituir:
```tsx
// ANTES
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// DEPOIS
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
```

Padrões de substituição:
- `useLocation().pathname` → `usePathname()`
- `useNavigate()` → `useRouter().push()`
- `<Link to="/path">` → `<Link href="/path">`

**Step 2: Marcar componentes client-side com `"use client"`**

Componentes que usam `useState`, `useEffect`, `framer-motion`, ou hooks do browser precisam de `"use client"` no topo:

```tsx
"use client"
// ... resto do componente
```

Ficheiros que precisam de `"use client"`:
- `src/components/layout/Header.tsx` (useState, useEffect)
- `src/components/animations/*.tsx` (framer-motion)
- Qualquer componente com interactividade

**Step 3: Adaptar o Layout para Next.js**

O `Layout.tsx` existente fica como componente wrapper. O `Header` e `Footer` são incluídos no root layout ou em layouts de rota:

```tsx
// app/layout.tsx já importa Header e Footer
// O Layout component pode manter-se como wrapper de conteúdo
```

**Step 4: Remover react-helmet-async**

Eliminar o componente `SEO.tsx` — Next.js usa `metadata` export ou `generateMetadata`.

```bash
npm uninstall react-helmet-async
```

**Step 5: Remover react-router-dom**

```bash
npm uninstall react-router-dom
```

**Step 6: Verificar build**

```bash
npm run build
```

Expected: Build passa sem erros de react-router-dom

**Step 7: Commit**

```bash
git add -A
git commit -m "refactor: replace react-router-dom with Next.js navigation"
```

---

### Task 3: Portar páginas existentes para App Router

**Files:**
- Create: `app/(site)/page.tsx` (Home)
- Create: `app/(site)/about/page.tsx`
- Create: `app/(site)/services/page.tsx`
- Create: `app/(site)/services/shopify/page.tsx`
- Create: `app/(site)/services/chatbots/page.tsx`
- Create: `app/(site)/services/pwa/page.tsx`
- Create: `app/(site)/portfolio/page.tsx`
- Create: `app/(site)/contact/page.tsx`
- Create: `app/(site)/blog/page.tsx`
- Create: `app/(site)/privacy/page.tsx`
- Create: `app/(site)/terms/page.tsx`
- Create: `app/(site)/trustflow/page.tsx`
- Create: `app/(site)/layout.tsx` (layout com Header + Footer)
- Create: `app/not-found.tsx`

**Step 1: Criar layout group `(site)` com Header + Footer**

```tsx
// app/(site)/layout.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
```

**Step 2: Converter cada página de SPA para route page**

Para cada página existente (Home, About, Services, etc.), criar o ficheiro `page.tsx` correspondente no App Router. Cada page exporta metadata e o componente:

```tsx
// Exemplo: app/(site)/about/page.tsx
import type { Metadata } from 'next'
import AboutPage from '@/pages/About'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a equipa do makeit.bot...',
}

export default function Page() {
  return <AboutPage />
}
```

Repetir para todas as 12 páginas existentes.

**Step 3: Criar `app/not-found.tsx`**

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg">Página não encontrada</p>
        <Link href="/" className="mt-6 inline-block underline">
          Voltar à homepage
        </Link>
      </div>
    </div>
  )
}
```

**Step 4: Remover `App.tsx` e `main.tsx`**

Estes ficheiros já não são necessários — o Next.js usa file-based routing.

**Step 5: Verificar navegação**

```bash
npm run dev
```

Testar: navegar entre todas as páginas existentes, verificar que Header/Footer aparecem, links funcionam.

**Step 6: Commit**

```bash
git add app/
git commit -m "refactor: port all existing pages to Next.js App Router"
```

---

### Task 4: Configurar SEO base (sitemap, robots.txt, schema)

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `src/lib/schema.ts`

**Step 1: Criar gerador de sitemap dinâmico**

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://makeit.bot'

  // Páginas estáticas
  const staticPages = [
    '', '/about/', '/services/', '/services/shopify/',
    '/services/chatbots/', '/services/pwa/', '/portfolio/',
    '/contact/', '/blog/', '/privacy/', '/terms/',
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
```

**Step 2: Criar robots.txt dinâmico**

```typescript
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://makeit.bot/sitemap.xml',
  }
}
```

**Step 3: Criar utilitário de JSON-LD Schema**

```typescript
// src/lib/schema.ts
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'makeit.bot',
    url: 'https://makeit.bot',
    description: 'Soluções de IA para clínicas veterinárias em Portugal',
    logo: 'https://makeit.bot/favicon-96x96.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
    },
  }
}

export function softwareApplicationSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://makeit.bot${item.url}`,
    })),
  }
}
```

**Step 4: Remover `public/robots.txt` antigo**

O Next.js gera automaticamente a partir de `app/robots.ts`.

**Step 5: Verificar sitemap e robots**

```bash
npm run dev
# Abrir http://localhost:3000/sitemap.xml
# Abrir http://localhost:3000/robots.txt
```

Expected: Ambos retornam XML/texto correcto

**Step 6: Commit**

```bash
git add app/sitemap.ts app/robots.ts src/lib/schema.ts
git commit -m "feat: add dynamic sitemap.xml, robots.txt, and JSON-LD schema utils"
```

---

### Task 5: Atualizar vercel.json e configuração de deploy

**Files:**
- Modify: `vercel.json`
- Delete: `vite.config.ts`
- Delete: `tsconfig.node.json`, `tsconfig.app.json` (Vite-specific)
- Delete: `index.html` (Vite entry point)

**Step 1: Simplificar vercel.json**

```json
{
  "framework": "nextjs"
}
```

O Next.js no Vercel não precisa de rewrites manuais.

**Step 2: Remover ficheiros Vite**

```bash
rm vite.config.ts index.html tsconfig.node.json tsconfig.app.json src/vite-env.d.ts
```

**Step 3: Remover `src/main.tsx` e `src/App.tsx`**

```bash
rm src/main.tsx src/App.tsx src/App.css
```

**Step 4: Verificar build completo**

```bash
npm run build
```

Expected: Build Next.js passa, gera `.next/` directory

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove Vite config, finalize Next.js migration"
```

---

### Task 6: Testar site migrado end-to-end

**Step 1: Correr em dev mode e navegar todas as rotas**

```bash
npm run dev
```

Verificar CADA rota:
- `/` — Homepage carrega, animações funcionam
- `/about/` — Página sobre carrega
- `/services/` — Hub de serviços carrega
- `/services/shopify/`, `/services/chatbots/`, `/services/pwa/` — Sub-serviços
- `/portfolio/` — Portfolio carrega
- `/contact/` — Formulário de contacto funciona
- `/blog/` — Blog index carrega
- `/privacy/`, `/terms/` — Páginas legais
- `/sitemap.xml` — Sitemap XML gerado
- `/robots.txt` — Robots.txt gerado
- Página 404 — qualquer URL inválida mostra NotFound

**Step 2: Verificar View Source**

Abrir "View Page Source" no browser (Ctrl+U) em cada página. Verificar que:
- O HTML contém o conteúdo (NÃO está vazio como no SPA)
- As meta tags estão presentes no `<head>`
- O título está correto

**Step 3: Corrigir problemas encontrados**

Resolver qualquer erro de hidratação, import em falta, ou componente que não funcione.

**Step 4: Commit fixes**

```bash
git add -A
git commit -m "fix: resolve migration issues from end-to-end testing"
```

---

## Fase B: Infraestrutura SEO Programático (Tasks 7-9)

### Task 7: Criar data layer para clusters

**Files:**
- Create: `src/data/clusters/agendamento-inteligente.json` (copiar de docs/plans)
- Create: `src/lib/clusters.ts` (funções de acesso a dados)
- Create: `src/types/cluster.ts` (tipos TypeScript)

**Step 1: Definir tipos TypeScript para clusters**

```typescript
// src/types/cluster.ts
export interface FAQ {
  question: string
  answer: string
}

export interface DataPoint {
  metric: string
  label?: string
  context?: string
}

export interface SpokeContent {
  intro?: string
  problem_section?: {
    title: string
    content: string
    data_points: DataPoint[]
  }
  solution_section?: {
    title: string
    content: string
    features?: {
      name: string
      description: string
    }[]
  }
  social_proof?: {
    quote: string
    author: string
    role: string
    note?: string
  }
}

export interface Spoke {
  id: string
  slug: string
  url: string
  template: string
  title: string
  h1: string
  meta_description: string
  keyword_primary: string
  keywords_secondary: string[]
  variables: Record<string, unknown>
  content?: SpokeContent
  faq: FAQ[]
  cta?: {
    primary: { text: string; url: string }
    secondary?: { text: string; url: string }
  }
  tool_cta?: { text: string; url: string }
  related_spokes: string[]
  related_posts: string[]
}

export interface ClusterHub {
  slug: string
  url: string
  title: string
  h1: string
  meta_description: string
  keyword_primary: string
  keywords_secondary: string[]
}

export interface ClusterData {
  cluster_id: string
  cluster_name: string
  hub: ClusterHub
  spokes: Spoke[]
  blog_posts_support: {
    slug: string
    title: string
    category: string
    target_keywords: string[]
    internal_links_to: string[]
  }[]
}
```

**Step 2: Copiar JSON de dados do cluster 1**

```bash
cp "docs/plans/cluster 1/cluster1_agendamento-inteligente.json" src/data/clusters/agendamento-inteligente.json
```

**Step 3: Criar funções de acesso a dados**

```typescript
// src/lib/clusters.ts
import type { ClusterData, Spoke } from '@/types/cluster'

// Import estático — permite tree-shaking e SSG
import agendamentoData from '@/data/clusters/agendamento-inteligente.json'

const clusters: Record<string, ClusterData> = {
  'agendamento-inteligente': agendamentoData as ClusterData,
}

export function getAllClusters(): ClusterData[] {
  return Object.values(clusters)
}

export function getCluster(slug: string): ClusterData | undefined {
  return clusters[slug]
}

export function getSpoke(clusterSlug: string, spokeSlug: string): Spoke | undefined {
  const cluster = clusters[clusterSlug]
  return cluster?.spokes.find((s) => s.slug === spokeSlug)
}

export function getAllClusterSlugs(): string[] {
  return Object.keys(clusters)
}

export function getAllSpokePaths(): { cluster: string; spoke: string }[] {
  return Object.entries(clusters).flatMap(([clusterSlug, data]) =>
    data.spokes.map((spoke) => ({
      cluster: clusterSlug,
      spoke: spoke.slug,
    }))
  )
}
```

**Step 4: Verificar que os tipos batem com o JSON**

```bash
npm run build
```

Expected: Sem erros TypeScript

**Step 5: Commit**

```bash
git add src/types/cluster.ts src/lib/clusters.ts src/data/clusters/
git commit -m "feat: add cluster data layer with types and accessor functions"
```

---

### Task 8: Criar componentes reutilizáveis para SEO programático

**Files:**
- Create: `src/components/seo/Breadcrumb.tsx`
- Create: `src/components/seo/JsonLd.tsx`
- Create: `src/components/seo/FAQSection.tsx`
- Create: `src/components/seo/DataPointsGrid.tsx`
- Create: `src/components/seo/CTASection.tsx`
- Create: `src/components/seo/RelatedLinks.tsx`
- Create: `src/components/seo/SocialProof.tsx`

**Step 1: Componente JsonLd**

```tsx
// src/components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

**Step 2: Componente Breadcrumb**

```tsx
// src/components/seo/Breadcrumb.tsx
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {i < items.length - 1 ? (
                <Link href={item.url} className="hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
```

**Step 3: Componente FAQSection**

```tsx
// src/components/seo/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { JsonLd } from './JsonLd'
import { faqSchema } from '@/lib/schema'

interface FAQ {
  question: string
  answer: string
}

export function FAQSection({ faqs, title = 'Perguntas Frequentes' }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-12">
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
```

**Step 4: Componente DataPointsGrid**

```tsx
// src/components/seo/DataPointsGrid.tsx
interface DataPoint {
  metric: string
  label?: string
  context?: string
}

export function DataPointsGrid({ points, columns = 4 }: { points: DataPoint[]; columns?: number }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-6 py-8`}>
      {points.map((point, i) => (
        <div key={i} className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">{point.metric}</div>
          <div className="text-sm text-muted-foreground">{point.label || point.context}</div>
        </div>
      ))}
    </div>
  )
}
```

**Step 5: Componente CTASection**

```tsx
// src/components/seo/CTASection.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  primary: { text: string; url: string }
  secondary?: { text: string; url: string }
  title?: string
}

export function CTASection({ primary, secondary, title = 'Pronto para começar?' }: CTAProps) {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href={primary.url}>
            {primary.text} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {secondary && (
          <Button asChild variant="outline" size="lg">
            <Link href={secondary.url}>{secondary.text}</Link>
          </Button>
        )}
      </div>
    </section>
  )
}
```

**Step 6: Componente RelatedLinks**

```tsx
// src/components/seo/RelatedLinks.tsx
import Link from 'next/link'
import type { Spoke } from '@/types/cluster'

export function RelatedLinks({
  spokes,
  clusterSlug,
  title = 'Soluções Relacionadas',
}: {
  spokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
  title?: string
}) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {spokes.map((spoke) => (
          <Link
            key={spoke.slug}
            href={`/solucoes/veterinarias/${clusterSlug}/${spoke.slug}/`}
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">{spoke.title}</h3>
            <p className="text-sm text-muted-foreground">{spoke.meta_description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

**Step 7: Componente SocialProof**

```tsx
// src/components/seo/SocialProof.tsx
import { Quote } from 'lucide-react'

interface SocialProofProps {
  quote: string
  author: string
  role: string
}

export function SocialProof({ quote, author, role }: SocialProofProps) {
  return (
    <section className="py-12">
      <blockquote className="max-w-2xl mx-auto text-center">
        <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
        <p className="text-lg italic mb-4">"{quote}"</p>
        <footer className="text-sm text-muted-foreground">
          <strong>{author}</strong> — {role}
        </footer>
      </blockquote>
    </section>
  )
}
```

**Step 8: Commit**

```bash
git add src/components/seo/
git commit -m "feat: add reusable SEO components (Breadcrumb, FAQ, CTA, DataPoints, etc.)"
```

---

### Task 9: Criar rotas hub de soluções

**Files:**
- Create: `app/(site)/solucoes/page.tsx`
- Create: `app/(site)/solucoes/veterinarias/page.tsx`

**Step 1: Página Hub de Soluções**

```tsx
// app/(site)/solucoes/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soluções',
  description: 'Soluções de automação e inteligência artificial por indústria. Comece pelas veterinárias.',
}

export default function SolucoesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">Soluções makeit.bot</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Automação inteligente desenhada para o seu sector. Cada solução é adaptada
        às necessidades específicas da sua indústria.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="/solucoes/veterinarias/"
          className="group block p-8 rounded-xl border hover:border-primary transition-all"
        >
          <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            Clínicas Veterinárias
          </h2>
          <p className="text-muted-foreground mb-4">
            Agendamento inteligente, anti-no-show, follow-up pós-cirurgia,
            calendário de vacinas e muito mais.
          </p>
          <span className="inline-flex items-center text-primary font-medium">
            Ver soluções <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}
```

**Step 2: Página Hub Veterinárias**

```tsx
// app/(site)/solucoes/veterinarias/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllClusters } from '@/lib/clusters'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Soluções para Veterinárias',
  description: 'Soluções de automação e IA para clínicas veterinárias em Portugal. Agendamento, anti-no-show, follow-up, vacinas e mais.',
}

export default function VeterinariasPage() {
  const clusters = getAllClusters()

  return (
    <div className="container mx-auto px-4 py-24">
      <JsonLd data={organizationSchema()} />
      <Breadcrumb
        items={[
          { name: 'Home', url: '/' },
          { name: 'Soluções', url: '/solucoes/' },
          { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
        ]}
      />
      <h1 className="text-4xl font-bold mb-6">
        Soluções de IA para Clínicas Veterinárias
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Cada ferramenta foi pensada para resolver um problema concreto do dia-a-dia
        da sua clínica. Desde a marcação de consultas até ao marketing de retenção.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clusters.map((cluster) => (
          <Link
            key={cluster.cluster_id}
            href={cluster.hub.url}
            className="group block p-6 rounded-xl border hover:border-primary transition-all"
          >
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {cluster.hub.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {cluster.hub.meta_description}
            </p>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              Explorar <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
```

**Step 3: Verificar rotas**

```bash
npm run dev
# Navegar para /solucoes/ e /solucoes/veterinarias/
```

**Step 4: Commit**

```bash
git add app/\(site\)/solucoes/
git commit -m "feat: add solution hub pages (/solucoes/ and /solucoes/veterinarias/)"
```

---

## Fase C: Cluster 1 — Páginas Programáticas (Tasks 10-14)

### Task 10: Criar rota dinâmica para hubs de cluster

**Files:**
- Create: `app/(site)/solucoes/veterinarias/[cluster]/page.tsx`

**Step 1: Criar página dinâmica do hub do cluster**

```tsx
// app/(site)/solucoes/veterinarias/[cluster]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCluster, getAllClusterSlugs } from '@/lib/clusters'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/schema'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'

interface Props {
  params: Promise<{ cluster: string }>
}

export async function generateStaticParams() {
  return getAllClusterSlugs().map((slug) => ({ cluster: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cluster: slug } = await params
  const cluster = getCluster(slug)
  if (!cluster) return {}

  return {
    title: cluster.hub.title,
    description: cluster.hub.meta_description,
    keywords: [cluster.hub.keyword_primary, ...cluster.hub.keywords_secondary].join(', '),
    alternates: {
      canonical: cluster.hub.url,
    },
  }
}

export default async function ClusterHubPage({ params }: Props) {
  const { cluster: slug } = await params
  const cluster = getCluster(slug)
  if (!cluster) notFound()

  return (
    <div className="container mx-auto px-4 py-24">
      <JsonLd data={softwareApplicationSchema(cluster.hub.title, cluster.hub.meta_description)} />
      <Breadcrumb
        items={[
          { name: 'Home', url: '/' },
          { name: 'Soluções', url: '/solucoes/' },
          { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
          { name: cluster.hub.title, url: cluster.hub.url },
        ]}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{cluster.hub.h1}</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        {cluster.hub.meta_description}
      </p>

      {/* Grid de spokes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Explore as nossas soluções</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cluster.spokes.map((spoke) => (
            <Link
              key={spoke.slug}
              href={spoke.url}
              className="group block p-6 rounded-xl border hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {spoke.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {spoke.meta_description}
              </p>
              <span className="inline-flex items-center text-sm text-primary font-medium">
                Saber mais <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
        secondary={{ text: 'Falar com a equipa', url: '/contact/' }}
      />
    </div>
  )
}
```

**Step 2: Verificar a rota**

```bash
npm run dev
# Navegar para /solucoes/veterinarias/agendamento-inteligente/
```

Expected: Página do hub com grid de 8 spokes

**Step 3: Commit**

```bash
git add "app/(site)/solucoes/veterinarias/[cluster]/"
git commit -m "feat: add dynamic cluster hub page with generateStaticParams"
```

---

### Task 11: Criar templates de spoke programático

**Files:**
- Create: `src/components/templates/SolutionBySizeTemplate.tsx`
- Create: `src/components/templates/ProblemSolutionTemplate.tsx`
- Create: `src/components/templates/FeatureFocusTemplate.tsx`
- Create: `src/components/templates/ComparisonTemplate.tsx`
- Create: `src/components/templates/DataDrivenTemplate.tsx`
- Create: `src/components/templates/SolutionByTypeTemplate.tsx`
- Create: `src/components/templates/index.ts`

**Step 1: Criar template `SolutionBySizeTemplate`**

Este template é usado para spokes como "clinica-pequeno-porte" e "hospital-veterinario".

```tsx
// src/components/templates/SolutionBySizeTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { DataPointsGrid } from '@/components/seo/DataPointsGrid'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { SocialProof } from '@/components/seo/SocialProof'
import { RelatedLinks } from '@/components/seo/RelatedLinks'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function SolutionBySizeTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, string>
  const content = spoke.content

  return (
    <article>
      {/* Intro */}
      {content?.intro && (
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed">{content.intro}</p>
        </section>
      )}

      {/* Ideal para */}
      {vars.ideal_for && (
        <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-12">
          <p className="font-medium">
            <strong>Ideal para:</strong> {vars.ideal_for}
          </p>
        </div>
      )}

      {/* Problema */}
      {content?.problem_section && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{content.problem_section.title}</h2>
          <p className="text-muted-foreground mb-6">{content.problem_section.content}</p>
          {content.problem_section.data_points && (
            <DataPointsGrid points={content.problem_section.data_points} />
          )}
        </section>
      )}

      {/* Solução */}
      {content?.solution_section && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{content.solution_section.title}</h2>
          <p className="text-muted-foreground mb-6">{content.solution_section.content}</p>
          {content.solution_section.features && (
            <div className="grid md:grid-cols-2 gap-6">
              {content.solution_section.features.map((feature) => (
                <div key={feature.name} className="p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Social Proof */}
      {content?.social_proof && (
        <SocialProof
          quote={content.social_proof.quote}
          author={content.social_proof.author}
          role={content.social_proof.role}
        />
      )}

      {/* FAQ */}
      <FAQSection faqs={spoke.faq} />

      {/* CTA */}
      {spoke.cta && (
        <CTASection
          primary={spoke.cta.primary}
          secondary={spoke.cta.secondary}
        />
      )}

      {/* Relacionados */}
      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 2: Criar template `ProblemSolutionTemplate`**

```tsx
// src/components/templates/ProblemSolutionTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { CheckCircle } from 'lucide-react'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function ProblemSolutionTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, unknown>

  return (
    <article>
      {/* Escala do problema */}
      {vars.problem_scale && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">A dimensão do problema</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {vars.problem as string}: <strong>{vars.problem_scale as string}</strong>
          </p>

          {/* Causas raiz */}
          {Array.isArray(vars.root_causes) && (
            <div className="space-y-3">
              <h3 className="font-semibold mb-3">Principais causas:</h3>
              {(vars.root_causes as string[]).map((cause, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <span className="text-primary font-bold">{i + 1}.</span>
                  <span>{cause}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Abordagem de solução */}
      {vars.solution_approach && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">A solução</h2>
          <p className="text-lg text-muted-foreground mb-4">{vars.solution_approach as string}</p>
          {vars.expected_result && (
            <div className="p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <p className="font-medium text-green-800 dark:text-green-300">
                  Resultado esperado: {vars.expected_result as string}
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      <FAQSection faqs={spoke.faq} />

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
        secondary={{ text: 'Ver como funciona', url: `/solucoes/veterinarias/${clusterSlug}/` }}
      />

      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 3: Criar template `FeatureFocusTemplate`**

```tsx
// src/components/templates/FeatureFocusTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { Zap } from 'lucide-react'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function FeatureFocusTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, unknown>

  return (
    <article>
      {/* Funcionalidade principal */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">{vars.feature_name as string}</h2>
        </div>
        {vars.how_it_works && (
          <p className="text-lg text-muted-foreground mb-6">{vars.how_it_works as string}</p>
        )}
        {vars.key_metric && (
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{vars.key_metric as string}</div>
            {vars.differentiator && (
              <p className="text-sm text-muted-foreground">{vars.differentiator as string}</p>
            )}
          </div>
        )}
      </section>

      {/* Canais (se existirem) */}
      {Array.isArray(vars.channels) && (
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Canais disponíveis</h3>
          <div className="flex flex-wrap gap-3">
            {(vars.channels as string[]).map((channel) => (
              <span key={channel} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">
                {channel}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Setup time */}
      {vars.setup_time && (
        <div className="p-4 rounded-lg bg-muted/50 mb-12">
          <p className="text-sm"><strong>Tempo de configuração:</strong> {vars.setup_time as string}</p>
        </div>
      )}

      <FAQSection faqs={spoke.faq} />

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
      />

      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 4: Criar template `ComparisonTemplate`**

```tsx
// src/components/templates/ComparisonTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { Check, X } from 'lucide-react'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function ComparisonTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, Record<string, unknown>>
  const scenarioA = vars.scenario_a
  const scenarioB = vars.scenario_b

  return (
    <article>
      {/* Tabela de comparação */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Opção A */}
          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-bold mb-2">{scenarioA?.name as string}</h2>
            <p className="text-sm text-muted-foreground mb-4">{scenarioA?.description as string}</p>

            <h3 className="font-semibold text-green-600 mb-2">Vantagens</h3>
            <ul className="space-y-2 mb-4">
              {(scenarioA?.pros as string[])?.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-red-600 mb-2">Desvantagens</h3>
            <ul className="space-y-2 mb-4">
              {(scenarioA?.cons as string[])?.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  {con}
                </li>
              ))}
            </ul>

            <div className="p-3 rounded bg-muted/50 text-sm">
              <strong>Custo real:</strong> {scenarioA?.monthly_cost as string}
            </div>
          </div>

          {/* Opção B */}
          <div className="p-6 rounded-xl border-2 border-primary relative">
            <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              Recomendado
            </div>
            <h2 className="text-xl font-bold mb-2">{scenarioB?.name as string}</h2>
            <p className="text-sm text-muted-foreground mb-4">{scenarioB?.description as string}</p>

            <h3 className="font-semibold text-green-600 mb-2">Vantagens</h3>
            <ul className="space-y-2 mb-4">
              {(scenarioB?.pros as string[])?.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-red-600 mb-2">Desvantagens</h3>
            <ul className="space-y-2 mb-4">
              {(scenarioB?.cons as string[])?.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  {con}
                </li>
              ))}
            </ul>

            <div className="p-3 rounded bg-primary/10 text-sm">
              <strong>Custo real:</strong> {scenarioB?.monthly_cost as string}
            </div>
          </div>
        </div>

        {/* Veredicto */}
        {(spoke.variables as Record<string, string>).verdict && (
          <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <p className="text-lg font-medium">{(spoke.variables as Record<string, string>).verdict}</p>
          </div>
        )}
      </section>

      <FAQSection faqs={spoke.faq} />

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
        secondary={{ text: 'Falar com a equipa', url: '/contact/' }}
      />

      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 5: Criar template `DataDrivenTemplate`**

```tsx
// src/components/templates/DataDrivenTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { DataPointsGrid } from '@/components/seo/DataPointsGrid'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { TrendingUp, Calculator } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function DataDrivenTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, unknown>

  return (
    <article>
      {/* Dados principais */}
      {Array.isArray(vars.data_points) && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{vars.data_theme as string}</h2>
          </div>
          <DataPointsGrid
            points={(vars.data_points as { metric: string; context: string }[]).map((dp) => ({
              metric: dp.metric,
              label: dp.context,
            }))}
          />
        </section>
      )}

      {/* Exemplo de cálculo */}
      {vars.calculation_example && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Exemplo prático</h2>
          <div className="p-6 rounded-xl bg-muted/50 border">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">
                {(vars.calculation_example as Record<string, string>).clinic_size}
              </h3>
            </div>
            <div className="space-y-3 text-sm">
              {Object.entries(vars.calculation_example as Record<string, string>)
                .filter(([key]) => key !== 'clinic_size')
                .map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      {key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Tool CTA */}
      {spoke.tool_cta && (
        <section className="mb-12 text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
          <Calculator className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-3">Calcule o impacto na sua clínica</h2>
          <Button asChild size="lg">
            <Link href={spoke.tool_cta.url}>{spoke.tool_cta.text}</Link>
          </Button>
        </section>
      )}

      <FAQSection faqs={spoke.faq} />

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
      />

      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 6: Criar template `SolutionByTypeTemplate`**

```tsx
// src/components/templates/SolutionByTypeTemplate.tsx
import type { Spoke } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'

interface Props {
  spoke: Spoke
  relatedSpokes: Pick<Spoke, 'slug' | 'title' | 'meta_description'>[]
  clusterSlug: string
}

export function SolutionByTypeTemplate({ spoke, relatedSpokes, clusterSlug }: Props) {
  const vars = spoke.variables as Record<string, string>

  return (
    <article>
      {/* Tipo de estabelecimento */}
      <section className="mb-12">
        <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-6">
          <h2 className="text-xl font-bold mb-1">{vars.type_label}</h2>
          <p className="text-muted-foreground">{vars.type_description}</p>
        </div>

        {vars.unique_challenge && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">O desafio específico</h3>
            <p className="text-muted-foreground">{vars.unique_challenge}</p>
          </div>
        )}

        {vars.key_benefit && (
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <p className="font-medium text-green-800 dark:text-green-300">{vars.key_benefit}</p>
          </div>
        )}
      </section>

      <FAQSection faqs={spoke.faq} />

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/demo/' }}
      />

      {relatedSpokes.length > 0 && (
        <RelatedLinks spokes={relatedSpokes} clusterSlug={clusterSlug} />
      )}
    </article>
  )
}
```

**Step 7: Criar barrel export**

```typescript
// src/components/templates/index.ts
export { SolutionBySizeTemplate } from './SolutionBySizeTemplate'
export { ProblemSolutionTemplate } from './ProblemSolutionTemplate'
export { FeatureFocusTemplate } from './FeatureFocusTemplate'
export { ComparisonTemplate } from './ComparisonTemplate'
export { DataDrivenTemplate } from './DataDrivenTemplate'
export { SolutionByTypeTemplate } from './SolutionByTypeTemplate'
```

**Step 8: Commit**

```bash
git add src/components/templates/
git commit -m "feat: add 6 programmatic SEO page templates"
```

---

### Task 12: Criar rota dinâmica para spokes

**Files:**
- Create: `app/(site)/solucoes/veterinarias/[cluster]/[spoke]/page.tsx`

**Step 1: Criar a página dinâmica de spoke**

```tsx
// app/(site)/solucoes/veterinarias/[cluster]/[spoke]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCluster, getSpoke, getAllSpokePaths } from '@/lib/clusters'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { softwareApplicationSchema, faqSchema } from '@/lib/schema'
import {
  SolutionBySizeTemplate,
  ProblemSolutionTemplate,
  FeatureFocusTemplate,
  ComparisonTemplate,
  DataDrivenTemplate,
  SolutionByTypeTemplate,
} from '@/components/templates'

interface Props {
  params: Promise<{ cluster: string; spoke: string }>
}

export async function generateStaticParams() {
  return getAllSpokePaths()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cluster: clusterSlug, spoke: spokeSlug } = await params
  const spoke = getSpoke(clusterSlug, spokeSlug)
  if (!spoke) return {}

  return {
    title: spoke.title,
    description: spoke.meta_description,
    keywords: [spoke.keyword_primary, ...spoke.keywords_secondary].join(', '),
    alternates: {
      canonical: spoke.url,
    },
  }
}

const templateMap: Record<string, React.ComponentType<{
  spoke: any
  relatedSpokes: any[]
  clusterSlug: string
}>> = {
  'solution-by-size': SolutionBySizeTemplate,
  'solution-by-type': SolutionByTypeTemplate,
  'problem-solution': ProblemSolutionTemplate,
  'feature-focus': FeatureFocusTemplate,
  'comparison': ComparisonTemplate,
  'data-driven': DataDrivenTemplate,
}

export default async function SpokePage({ params }: Props) {
  const { cluster: clusterSlug, spoke: spokeSlug } = await params
  const cluster = getCluster(clusterSlug)
  const spoke = getSpoke(clusterSlug, spokeSlug)

  if (!cluster || !spoke) notFound()

  // Resolver spokes relacionados
  const relatedSpokes = spoke.related_spokes
    .map((slug) => cluster.spokes.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((s) => ({ slug: s!.slug, title: s!.title, meta_description: s!.meta_description }))

  // Selecionar template
  const Template = templateMap[spoke.template]
  if (!Template) {
    console.error(`Template "${spoke.template}" not found for spoke "${spoke.slug}"`)
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <JsonLd data={softwareApplicationSchema(spoke.title, spoke.meta_description)} />
      <JsonLd data={faqSchema(spoke.faq)} />
      <Breadcrumb
        items={[
          { name: 'Home', url: '/' },
          { name: 'Soluções', url: '/solucoes/' },
          { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
          { name: cluster.hub.title, url: cluster.hub.url },
          { name: spoke.title, url: spoke.url },
        ]}
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{spoke.h1}</h1>

      <Template
        spoke={spoke}
        relatedSpokes={relatedSpokes}
        clusterSlug={clusterSlug}
      />
    </div>
  )
}
```

**Step 2: Verificar TODAS as 8 rotas de spoke**

```bash
npm run dev
```

Navegar para cada uma:
- `/solucoes/veterinarias/agendamento-inteligente/clinica-pequeno-porte/`
- `/solucoes/veterinarias/agendamento-inteligente/hospital-veterinario/`
- `/solucoes/veterinarias/agendamento-inteligente/pet-shop-veterinario/`
- `/solucoes/veterinarias/agendamento-inteligente/anti-no-show/`
- `/solucoes/veterinarias/agendamento-inteligente/lembretes-automaticos/`
- `/solucoes/veterinarias/agendamento-inteligente/lista-espera-inteligente/`
- `/solucoes/veterinarias/agendamento-inteligente/custo-no-show/`
- `/solucoes/veterinarias/agendamento-inteligente/manual-vs-automatico/`

Expected: Cada página renderiza com o template correto e conteúdo do JSON

**Step 3: Commit**

```bash
git add "app/(site)/solucoes/veterinarias/[cluster]/[spoke]/"
git commit -m "feat: add dynamic spoke pages with template selection for Cluster 1"
```

---

### Task 13: Atualizar sitemap com rotas programáticas

**Files:**
- Modify: `app/sitemap.ts`

**Step 1: Adicionar rotas de clusters ao sitemap**

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getAllClusters } from '@/lib/clusters'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://makeit.bot'

  // Páginas estáticas
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/shopify/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/chatbots/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/pwa/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/portfolio/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/solucoes/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solucoes/veterinarias/', priority: 0.9, changeFrequency: 'weekly' as const },
  ]

  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // Páginas programáticas dos clusters
  const clusters = getAllClusters()
  const clusterEntries = clusters.flatMap((cluster) => {
    const hubEntry = {
      url: `${baseUrl}${cluster.hub.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }

    const spokeEntries = cluster.spokes.map((spoke) => ({
      url: `${baseUrl}${spoke.url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [hubEntry, ...spokeEntries]
  })

  return [...staticEntries, ...clusterEntries]
}
```

**Step 2: Verificar sitemap**

```bash
npm run dev
# Abrir http://localhost:3000/sitemap.xml
```

Expected: Sitemap com todas as páginas estáticas + 1 hub + 8 spokes = ~22 URLs

**Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add programmatic cluster pages to dynamic sitemap"
```

---

### Task 14: Atualizar Header com navegação para soluções

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Step 1: Adicionar "Soluções" ao menu de navegação**

Atualizar o array `navigation` no Header para incluir as novas rotas:

```typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Soluções",
    href: "/solucoes/",
    submenu: [
      { name: "Veterinárias", href: "/solucoes/veterinarias/" },
      { name: "Agendamento Inteligente", href: "/solucoes/veterinarias/agendamento-inteligente/" },
    ]
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Shopify Apps", href: "/services/shopify" },
      { name: "AI Chatbots", href: "/services/chatbots" },
      { name: "PWA Development", href: "/services/pwa" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
```

**Step 2: Verificar navegação**

```bash
npm run dev
# Testar menu desktop e mobile — links para soluções funcionam
```

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: add Soluções navigation to header menu"
```

---

## Fase D: Verificação Final (Tasks 15-16)

### Task 15: Build de produção e verificação SSG

**Step 1: Executar build de produção**

```bash
npm run build
```

Expected: Build passa. Verificar no output que as páginas programáticas são geradas como HTML estático:
```
├ ○ /solucoes/veterinarias/agendamento-inteligente
├ ○ /solucoes/veterinarias/agendamento-inteligente/anti-no-show
├ ○ /solucoes/veterinarias/agendamento-inteligente/clinica-pequeno-porte
... (8 spokes)
```

**Step 2: Testar produção localmente**

```bash
npm run start
```

Verificar:
- View Source em cada página programática mostra HTML completo (NÃO vazio)
- Meta tags presentes no HTML (title, description, og:*, canonical)
- Schema JSON-LD presente no HTML
- Sitemap.xml inclui todas as rotas
- Robots.txt está correto
- Links internos funcionam (breadcrumbs, related, nav)

**Step 3: Commit se houver fixes**

```bash
git add -A
git commit -m "fix: production build verification fixes"
```

---

### Task 16: Atualizar Footer com novas rotas

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Adicionar links de soluções ao footer**

Atualizar `footerLinks` para incluir a secção de soluções veterinárias:

```typescript
const footerLinks = {
  solucoes: [
    { name: "Todas as Soluções", href: "/solucoes/" },
    { name: "Veterinárias", href: "/solucoes/veterinarias/" },
    { name: "Agendamento Inteligente", href: "/solucoes/veterinarias/agendamento-inteligente/" },
    { name: "Anti-No-Show", href: "/solucoes/veterinarias/agendamento-inteligente/anti-no-show/" },
  ],
  company: [
    { name: "Sobre Nós", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  services: [
    { name: "Shopify Apps", href: "/services/shopify" },
    { name: "AI Chatbots", href: "/services/chatbots" },
    { name: "PWA Development", href: "/services/pwa" },
    { name: "All Services", href: "/services" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Serviço", href: "/terms" },
  ],
};
```

**Step 2: Verificar footer**

```bash
npm run dev
# Scroll ao fundo de qualquer página — verificar links do footer
```

**Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: update footer with solution links for internal linking"
```

---

## Resumo de Ficheiros Criados/Modificados

### Criados (novos):
- `next.config.ts`
- `app/layout.tsx` (root layout)
- `app/not-found.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/(site)/layout.tsx`
- `app/(site)/page.tsx` + 11 sub-pages (port das existentes)
- `app/(site)/solucoes/page.tsx`
- `app/(site)/solucoes/veterinarias/page.tsx`
- `app/(site)/solucoes/veterinarias/[cluster]/page.tsx`
- `app/(site)/solucoes/veterinarias/[cluster]/[spoke]/page.tsx`
- `src/types/cluster.ts`
- `src/lib/clusters.ts`
- `src/lib/schema.ts`
- `src/data/clusters/agendamento-inteligente.json`
- `src/components/seo/` (7 componentes)
- `src/components/templates/` (6 templates + index)

### Modificados:
- `package.json` (scripts + deps)
- `tsconfig.json`
- `vercel.json`
- `src/components/layout/Header.tsx` (nav + Next.js Link)
- `src/components/layout/Footer.tsx` (links + Next.js Link)
- Todos os componentes com react-router-dom → next/link

### Removidos:
- `vite.config.ts`, `index.html`, `tsconfig.node.json`, `tsconfig.app.json`
- `src/main.tsx`, `src/App.tsx`, `src/App.css`, `src/vite-env.d.ts`
- `src/components/SEO.tsx` (substituído por Next.js metadata)
- `public/robots.txt` (substituído por app/robots.ts)

---

## Resultado Final

Após execução completa deste plano:
- **10 páginas novas** (2 hubs + 8 spokes) geradas estaticamente
- **22+ URLs** no sitemap.xml
- **SEO completo**: meta tags SSR, JSON-LD, breadcrumbs, canonical, robots.txt
- **Templates reutilizáveis** prontos para Clusters 2-5
- **Site existente** intacto e funcional no novo framework
- Para adicionar Cluster 2, basta: criar JSON → adicionar import em `clusters.ts` → done
