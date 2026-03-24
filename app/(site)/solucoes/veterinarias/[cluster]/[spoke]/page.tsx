import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/layout/Layout'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { getCluster, getSpoke, getAllSpokeSlugs } from '@/lib/clusters'
import { SolutionBySize } from '@/components/cluster-templates/SolutionBySize'
import { ProblemSolution } from '@/components/cluster-templates/ProblemSolution'
import { FeatureFocus } from '@/components/cluster-templates/FeatureFocus'
import { Comparison } from '@/components/cluster-templates/Comparison'
import { DataDriven } from '@/components/cluster-templates/DataDriven'
import { SolutionByType } from '@/components/cluster-templates/SolutionByType'
import { ProcedureSpecific } from '@/components/cluster-templates/ProcedureSpecific'
import { AnimalType } from '@/components/cluster-templates/AnimalType'
import { Resource } from '@/components/cluster-templates/Resource'

interface PageProps {
  params: Promise<{ cluster: string; spoke: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSpokeSlugs().map(({ cluster, spoke }) => ({ cluster, spoke }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cluster: clusterSlug, spoke: spokeSlug } = await params
  const spoke = getSpoke(clusterSlug, spokeSlug)
  if (!spoke) return {}

  return {
    title: spoke.title,
    description: spoke.meta_description,
    alternates: { canonical: `https://makeit.bot${spoke.url}` },
    keywords: [spoke.keyword_primary, ...spoke.keywords_secondary],
  }
}

export default async function SpokePage({ params }: PageProps) {
  const { cluster: clusterSlug, spoke: spokeSlug } = await params
  const cluster = getCluster(clusterSlug)
  const spoke = cluster ? cluster.spokes.find((s) => s.slug === spokeSlug) : null

  if (!cluster || !spoke) notFound()

  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes/' },
    { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
    { name: cluster.cluster_name, url: cluster.hub.url },
    { name: spoke.title, url: spoke.url },
  ]

  const templateProps = { spoke, cluster }

  const templateMap = {
    'solution-by-size': <SolutionBySize {...templateProps} />,
    'solution-by-type': <SolutionByType {...templateProps} />,
    'problem-solution': <ProblemSolution {...templateProps} />,
    'feature-focus': <FeatureFocus {...templateProps} />,
    comparison: <Comparison {...templateProps} />,
    'data-driven': <DataDriven {...templateProps} />,
    'procedure-specific': <ProcedureSpecific {...templateProps} />,
    'animal-type': <AnimalType {...templateProps} />,
    'resource': <Resource {...templateProps} />,
  }

  const templateContent = templateMap[spoke.template] ?? templateMap['solution-by-size']

  return (
    <Layout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      {spoke.faq.length > 0 && <JsonLd data={faqSchema(spoke.faq)} />}

      <div className="container mx-auto px-4 pt-8 max-w-4xl">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {templateContent}
    </Layout>
  )
}
