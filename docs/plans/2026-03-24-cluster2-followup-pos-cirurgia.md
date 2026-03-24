# Cluster 2: Follow-up Pós-Cirurgia Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Cluster 2 (Follow-up Pós-Cirurgia) to the programmatic SEO system with 1 hub + 5 spokes, full i18n support (PT-PT + EN), and integration with existing navigation.

**Architecture:** Extend the existing programmatic SEO cluster-spoke system (already working with Cluster 1 agendamento-inteligente). Use the same TypeScript types, accessor functions, and template patterns. Each spoke uses one of 4 templates: `procedure-specific`, `feature-focus`, `animal-type`, or `resource`. Hub page lists all 5 spokes with cards + CTA.

**Tech Stack:** Next.js App Router, React Context (i18n), TypeScript, Tailwind CSS, Framer Motion, lucide-react, shadcn/ui

---

## Task 1: Copy Cluster 2 JSON Data to Project

**Files:**
- Create: `src/data/clusters/followup-pos-cirurgia.json`

**Step 1: Copy the JSON file**

Copy `C:\Users\aryha\Documents\MIB\site\docs\plans\cluster 2\cluster2_followup-pos-cirurgia.json` to `src/data/clusters/followup-pos-cirurgia.json` (exact same content, no modifications).

Verify the file is valid JSON and contains:
- Hub data with `cluster_id: "followup-pos-cirurgia"`, `cluster_name`, `slug`, `url`, `title`, `meta_description`
- 5 spokes with `id` (C2-S01 to C2-S05), `slug`, `url`, `template`, `variables`
- Blog posts metadata (3 posts: pos-operatorio-etapa-critica, automatizar-followup-toque-humano, roi-followup-pos-cirurgia)

**Step 2: Verify JSON structure**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('src/data/clusters/followup-pos-cirurgia.json')))" | head -30`

Expected: Valid JSON output starting with hub data and cluster_id "followup-pos-cirurgia"

**Step 3: Commit**

```bash
git add src/data/clusters/followup-pos-cirurgia.json
git commit -m "data: add cluster 2 followup-pos-cirurgia JSON data"
```

---

## Task 2: Create i18n Translations for Cluster 2

**Files:**
- Modify: `src/i18n/locales/pt.ts` (add cluster 2 translations)
- Modify: `src/i18n/locales/en.ts` (add cluster 2 translations in English)

**Step 1: Add PT-PT translations**

Open `src/i18n/locales/pt.ts` and add this key to the `pt` object (before the closing brace):

```typescript
cluster2: {
  hubTitle: "Follow-up Pós-Cirurgia",
  hubSubtitle: "Acompanhamento automático de cada animal após cirurgia — instruções, check-ins, alertas de complicações e agendamento de consultas.",
  posCastracaoTitle: "Follow-up Pós-Castração Automático",
  posCastracaoDesc: "Protocolo especializado para castração/esterilização com check-ins diários, detecção de complicações e retirada automática de pontos.",
  posOrtopedicaTitle: "Monitorização Pós-Cirurgia Ortopédica",
  posOrtopedicaDesc: "Acompanhamento de 6-12 semanas para cirurgias ortopédicas com múltiplas consultas de controlo, raio-X de seguimento e avaliação de mobilidade.",
  alertasTitle: "Alertas Automáticos de Complicações",
  alertasDesc: "Sistema inteligente que identifica sinais de alarme específicos por tipo de cirurgia e avisa o veterinário e tutor com prioridade.",
  porAnimalTitle: "Follow-up por Tipo de Animal",
  porAnimalDesc: "Protocolos adaptados para cão, gato e animais exóticos — cada espécie tem necessidades de recuperação diferentes.",
  checklistTitle: "Checklist Pós-Operatório para Tutores",
  checklistDesc: "Ferramenta interactiva que guia o tutor nos cuidados diários pós-cirurgia com verificações dia a dia, dia 1-3, dia 3-7, dia 7-14.",
  readMore: "Conhecer mais",
  whyCluster: {
    title: "Por Que o Follow-up Pós-Cirurgia é Crítico",
    subtitle: "Mais de 35% dos tutores não comparecem às consultas de controlo quando não há acompanhamento automático.",
    benefit1Title: "Lealdade do Tutor",
    benefit1Desc: "O tutor que recebe suporte após a cirurgia volta sempre à clínica.",
    benefit2Title: "Menos Complicações",
    benefit2Desc: "Detecção precoce reduz idas de urgência em 40-60% e melhora outcomes.",
    benefit3Title: "Receita Recorrente",
    benefit3Desc: "Cada cirurgia gera 2-4 consultas de controlo automáticas — não perca nenhuma.",
  },
  cta: "Começar Follow-up Automático",
},
```

**Step 2: Add EN translations**

Open `src/i18n/locales/en.ts` and add this key to the `en` object (same position, before closing brace):

```typescript
cluster2: {
  hubTitle: "Post-Surgery Follow-up",
  hubSubtitle: "Automated post-operative monitoring for every animal — care instructions, check-ins, complication alerts, and automatic appointment scheduling.",
  posCastracaoTitle: "Automated Post-Spay/Neuter Follow-up",
  posCastracaoDesc: "Specialized protocol for spay/neuter procedures with daily check-ins, complication detection, and automatic suture removal scheduling.",
  posOrtopedicaTitle: "Post-Orthopedic Surgery Monitoring",
  posOrtopedicaDesc: "6-12 week follow-up for orthopedic surgeries with multiple control visits, follow-up X-rays, and mobility assessment.",
  alertasTitle: "Automated Complication Alerts",
  alertasDesc: "Intelligent system that identifies surgery-specific alarm signs and alerts veterinarian and owner with priority triage.",
  porAnimalTitle: "Follow-up by Animal Type",
  porAnimalDesc: "Customized protocols for dogs, cats, and exotic animals — each species has unique recovery needs.",
  checklistTitle: "Post-Operative Checklist for Owners",
  checklistDesc: "Interactive tool that guides owners through daily post-surgery care with checkpoints at Day 0, Days 1-3, Days 3-7, and Days 7-14.",
  readMore: "Learn More",
  whyCluster: {
    title: "Why Post-Surgery Follow-up Matters",
    subtitle: "Over 35% of owners miss control appointments when there's no automated follow-up system.",
    benefit1Title: "Owner Loyalty",
    benefit1Desc: "Owners who receive post-surgery support always return to your clinic.",
    benefit2Title: "Fewer Complications",
    benefit2Desc: "Early detection reduces unnecessary emergency visits by 40-60% and improves outcomes.",
    benefit3Title: "Recurring Revenue",
    benefit3Desc: "Each surgery generates 2-4 automatic control appointments — don't miss a single one.",
  },
  cta: "Start Automated Follow-up",
},
```

**Step 3: Update Translations TypeScript type**

Open `src/i18n/types.ts` and add this to the `Translations` interface:

```typescript
cluster2: {
  hubTitle: string
  hubSubtitle: string
  posCastracaoTitle: string
  posCastracaoDesc: string
  posOrtopedicaTitle: string
  posOrtopedicaDesc: string
  alertasTitle: string
  alertasDesc: string
  porAnimalTitle: string
  porAnimalDesc: string
  checklistTitle: string
  checklistDesc: string
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

**Step 4: Run TypeScript compiler**

Run: `npx tsc --noEmit` (in project root)

Expected: No errors about cluster2 types

**Step 5: Commit**

```bash
git add src/i18n/locales/pt.ts src/i18n/locales/en.ts src/i18n/types.ts
git commit -m "i18n: add cluster 2 translations for pt-pt and en"
```

---

## Task 3: Update Cluster Accessor Functions

**Files:**
- Modify: `src/lib/clusters.ts`

**Step 1: Update imports in clusters.ts**

Open `src/lib/clusters.ts` and check the imports at the top:

```typescript
import agendamentoInteligente from "@/data/clusters/agendamento-inteligente.json"
```

Add a new import after this line:

```typescript
import followupPosCirurgia from "@/data/clusters/followup-pos-cirurgia.json"
```

**Step 2: Update getAllClusters function**

Find the `getAllClusters()` function (currently returns just agendamento-inteligente). Update it to return both:

```typescript
export function getAllClusters() {
  return [agendamentoInteligente, followupPosCirurgia]
}
```

**Step 3: Test the accessor functions**

Run in Node.js REPL (from project root):

```bash
node
> const { getAllClusters, getCluster } = require('./src/lib/clusters.ts')
> const clusters = getAllClusters()
> console.log(clusters.map(c => c.cluster_id))
```

Expected output:
```
[ 'agendamento-inteligente', 'followup-pos-cirurgia' ]
```

Exit with `.exit`

**Step 4: Commit**

```bash
git add src/lib/clusters.ts
git commit -m "refactor: add followup-pos-cirurgia to getAllClusters"
```

---

## Task 4: Create Cluster 2 Hub Page Template & Route

**Files:**
- Create: `src/views/clusters/Cluster2Hub.tsx` (hub page view component)
- Create: `app/(site)/solucoes/veterinarias/followup-pos-cirurgia/page.tsx` (route + metadata)

**Step 1: Create Cluster2Hub.tsx view**

Create file `src/views/clusters/Cluster2Hub.tsx` with `"use client"` and the following structure:

- Import: `useI18n`, `ScrollReveal`, `Button`, Framer Motion, lucide icons (Heart, AlertTriangle, CheckCircle, MessageCircle, FileText)
- Main component: `export default function Cluster2HubPage()`
- Sections:
  1. **HeroSection** — title + subtitle using `t.cluster2.hubTitle` / `t.cluster2.hubSubtitle`
  2. **SpokesGridSection** — display all 5 spokes as cards linking to their URLs (use `spoke.url` directly from cluster data)
  3. **WhyThisClusterSection** — 3 benefits using `t.cluster2.whyCluster.*`
  4. **CTASection** — "Get Started" button using `t.cluster2.cta`
- Add `JSON-LD` breadcrumb schema and FAQ schema (use `JsonLd` component from `@/components/seo`)
- Style with `ScrollReveal` animations on cards and sections

Reference existing hub template: `app/(site)/solucoes/veterinarias/page.tsx` for structure. Keep it concise.

**Step 2: Create the route file**

Create `app/(site)/solucoes/veterinarias/followup-pos-cirurgia/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { getCluster } from '@/lib/clusters'
import { Layout } from '@/components/layout/Layout'
import Cluster2HubPage from '@/views/clusters/Cluster2Hub'

export const metadata: Metadata = {
  title: 'Follow-up Pós-Cirurgia | makeit.bot',
  description: 'Sistema automatizado de acompanhamento pós-operatório para clínicas veterinárias. Check-ins, alertas de complicações, agendamento automático.',
  alternates: {
    canonical: 'https://makeit.bot/solucoes/veterinarias/followup-pos-cirurgia/',
  },
}

export default function Page() {
  const cluster = getCluster('followup-pos-cirurgia')
  if (!cluster) return <div>Cluster not found</div>

  return (
    <Layout>
      <Cluster2HubPage cluster={cluster} />
    </Layout>
  )
}
```

**Step 3: Test the component**

Run: `npm run dev` and navigate to `/solucoes/veterinarias/followup-pos-cirurgia/`

Expected: Hub page loads with title "Follow-up Pós-Cirurgia Automático", 5 spoke cards visible, JSON-LD breadcrumb/FAQ in page source

**Step 4: Commit**

```bash
git add src/views/clusters/Cluster2Hub.tsx app/\(site\)/solucoes/veterinarias/followup-pos-cirurgia/page.tsx
git commit -m "feat: add cluster 2 hub page (followup-pos-cirurgia)"
```

---

## Task 5: Create Cluster 2 Spoke Pages (5 spokes)

**Files:**
- Create: `app/(site)/solucoes/veterinarias/followup-pos-cirurgia/[spoke]/page.tsx` (dynamic spoke route)
- Create or extend: `src/components/cluster-templates/ProcedureSpecific.tsx`, `FeatureFocus.tsx`, `AnimalType.tsx`, `Resource.tsx`

**Step 1: Create dynamic spoke route**

Create `app/(site)/solucoes/veterinarias/followup-pos-cirurgia/[spoke]/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { getCluster, getSpoke } from '@/lib/clusters'
import { Layout } from '@/components/layout/Layout'
import { templateMap } from '@/components/cluster-templates'

export const dynamicParams = false

export async function generateStaticParams() {
  const cluster = getCluster('followup-pos-cirurgia')
  if (!cluster) return []

  return cluster.spokes.map((spoke) => ({
    spoke: spoke.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const spoke = getSpoke('followup-pos-cirurgia', params.spoke)
  if (!spoke) return {}

  return {
    title: `${spoke.variables.procedure || spoke.slug} | makeit.bot`,
    description: spoke.variables.summary || 'Solução veterinária de follow-up pós-cirurgia',
    alternates: {
      canonical: `https://makeit.bot${spoke.url}`,
    },
  }
}

export default function Page({ params }) {
  const cluster = getCluster('followup-pos-cirurgia')
  const spoke = getSpoke('followup-pos-cirurgia', params.spoke)

  if (!cluster || !spoke) return <div>Page not found</div>

  const Template = templateMap[spoke.template] || null
  if (!Template) return <div>Template not found: {spoke.template}</div>

  return (
    <Layout>
      <Template spoke={spoke} cluster={cluster} />
    </Layout>
  )
}
```

**Step 2: Check/Create spoke templates**

Verify that `src/components/cluster-templates/` contains these templates (already exists from Cluster 1):
- `ProcedureSpecific.tsx` (for procedure-specific spokes like pos-castracao)
- `FeatureFocus.tsx` (for feature-focus like alertas-complicacoes)
- `AnimalType.tsx` (for animal-type like por-tipo-animal)
- `Resource.tsx` (for resource like checklist-pos-operatorio)

If templates don't exist, create them. Each should:
- Accept `{ spoke, cluster }` props
- Use Framer Motion + ScrollReveal for animations
- Include breadcrumb navigation
- Include FAQ section (from spoke data if available)
- Include CTA buttons with links

**Step 3: Test the spoke routes**

Run: `npm run dev`

Navigate to:
- `/solucoes/veterinarias/followup-pos-cirurgia/pos-castracao/`
- `/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/`

Expected: Each spoke page loads with appropriate template, uses cluster/spoke data correctly

**Step 4: Commit**

```bash
git add app/\(site\)/solucoes/veterinarias/followup-pos-cirurgia/\[spoke\]/page.tsx
git commit -m "feat: add cluster 2 dynamic spoke pages"
```

---

## Task 6: Update Navigation & Header Links

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update Header navigation**

Open `src/components/layout/Header.tsx` and find the "Soluções" submenu. Add a new item for Cluster 2:

```typescript
{
  name: "Follow-up Pós-Cirurgia",
  href: "/solucoes/veterinarias/followup-pos-cirurgia/",
  submenu: [
    { name: "Pós-Castração", href: "/solucoes/veterinarias/followup-pos-cirurgia/pos-castracao/" },
    { name: "Pós-Ortopédica", href: "/solucoes/veterinarias/followup-pos-cirurgia/pos-cirurgia-ortopedica/" },
    { name: "Alertas de Complicações", href: "/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/" },
  ]
}
```

**Step 2: Update Footer links**

Open `src/components/layout/Footer.tsx` and find the solutions/soluções section. Add links:

```typescript
{ text: "Follow-up Pós-Cirurgia", href: "/solucoes/veterinarias/followup-pos-cirurgia/" },
{ text: "Alertas de Complicações", href: "/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/" },
```

**Step 3: Test navigation**

Run: `npm run dev`

Expected: Header and footer links visible and functional to new Cluster 2 pages

**Step 4: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "nav: add cluster 2 links to header and footer"
```

---

## Task 7: Update Sitemap

**Files:**
- Modify: `app/sitemap.ts`

**Step 1: Update sitemap.ts**

Open `app/sitemap.ts` and ensure the dynamic cluster/spoke generation includes Cluster 2.

The function should:
1. Call `getAllClusters()` which now returns both Cluster 1 + Cluster 2
2. For each cluster, add the hub entry and all spoke entries

Verify these URLs are generated:
- `/solucoes/veterinarias/followup-pos-cirurgia/` (hub)
- `/solucoes/veterinarias/followup-pos-cirurgia/pos-castracao/`
- `/solucoes/veterinarias/followup-pos-cirurgia/pos-cirurgia-ortopedica/`
- `/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/`
- `/solucoes/veterinarias/followup-pos-cirurgia/por-tipo-animal/`
- `/solucoes/veterinarias/followup-pos-cirurgia/checklist-pos-operatorio/`

**Step 2: Test sitemap generation**

Run: `npm run build`

Check: `.next/server/chunks/sitemap.ts` or run the sitemap function locally to verify URLs

Expected output should include all 6 Cluster 2 URLs

**Step 3: Commit**

If changes were needed:

```bash
git add app/sitemap.ts
git commit -m "build: update sitemap for cluster 2"
```

If no changes needed:

```bash
git commit --allow-empty -m "build: sitemap already includes cluster 2 (no changes)"
```

---

## Task 8: Update Veterinarias Hub Page

**Files:**
- Modify: `app/(site)/solucoes/veterinarias/page.tsx` or `src/views/clusters/VeterinariasHub.tsx`

**Step 1: Find veterinarias hub page**

Locate the page that shows all veterinary solution clusters (both Cluster 1 and any others).

Add a card/section for Cluster 2 "Follow-up Pós-Cirurgia" that:
- Links to `/solucoes/veterinarias/followup-pos-cirurgia/`
- Shows icon + title + description from `t.cluster2.hubTitle` and description
- Uses same styling as Cluster 1 card

**Step 2: Test the page**

Run: `npm run dev` and navigate to `/solucoes/veterinarias/`

Expected: See cards for both "Agendamento Inteligente" (Cluster 1) and "Follow-up Pós-Cirurgia" (Cluster 2)

**Step 3: Commit**

```bash
git add [veterinarias-hub-file]
git commit -m "feat: add cluster 2 card to veterinarias hub"
```

---

## Task 9: Build & Integration Testing

**Files:** All modified files should build successfully

**Step 1: Run TypeScript compiler**

Run: `npx tsc --noEmit`

Expected: No errors

**Step 2: Run Next.js build**

Run: `npm run build`

Expected output:
```
✓ Compiled successfully
✓ Running TypeScript
✓ Collecting page data using X workers
✓ Generating static pages using X workers (28+6 = 34 pages total)
```

- **28 pages**: existing pages (home, about, services, portfolio, blog, cluster 1 pages, etc.)
- **+6 pages**: new Cluster 2 pages (1 hub + 5 spokes)

All pages should prerender with no errors.

**Step 3: Verify dynamic routes**

Check build output for:
```
● /solucoes/veterinarias/[cluster]
  └ /solucoes/veterinarias/followup-pos-cirurgia
● /solucoes/veterinarias/[cluster]/[spoke]
  ├ /solucoes/veterinarias/followup-pos-cirurgia/pos-castracao
  ├ /solucoes/veterinarias/followup-pos-cirurgia/pos-cirurgia-ortopedica
  ├ /solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes
  ├ /solucoes/veterinarias/followup-pos-cirurgia/por-tipo-animal
  └ /solucoes/veterinarias/followup-pos-cirurgia/checklist-pos-operatorio
```

**Step 4: Local preview (optional)**

Run: `npm run build && npm run start`

Navigate to URLs:
- `/solucoes/veterinarias/followup-pos-cirurgia/` → hub page loads
- `/solucoes/veterinarias/followup-pos-cirurgia/pos-castracao/` → spoke page loads
- Header/footer links work
- Breadcrumbs appear

**Step 5: Commit**

```bash
git add .
git commit -m "build: cluster 2 implementation complete and verified"
```

---

## Summary

After completing all 9 tasks:

✅ Cluster 2 JSON data integrated
✅ i18n translations added (PT-PT + EN)
✅ Cluster accessor functions updated
✅ Hub page created + routed
✅ 5 spoke pages created with dynamic routing
✅ Navigation links added (header + footer)
✅ Sitemap updated
✅ Veterinarias hub updated
✅ Build passes with 34 total static pages

**URLs generated:**
- Hub: `/solucoes/veterinarias/followup-pos-cirurgia/`
- Spokes: `/solucoes/veterinarias/followup-pos-cirurgia/{pos-castracao|pos-cirurgia-ortopedica|alertas-complicacoes|por-tipo-animal|checklist-pos-operatorio}/`

---

## Execution Options

Plan saved to `docs/plans/2026-03-24-cluster2-followup-pos-cirurgia.md`. Two execution options:

**1. Subagent-Driven (this session)** — I dispatch fresh subagent per task, review between tasks, fast iteration with inline feedback

**2. Parallel Session (separate)** — Open new session in a git worktree, use `executing-plans` skill, execute with full checkpoint control

**Which approach?**