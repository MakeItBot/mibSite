import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { CTASection } from '@/components/seo/CTASection'
import { breadcrumbSchema } from '@/lib/schema'
import { getCluster, getAllClusterSlugs } from '@/lib/clusters'

interface PageProps {
  params: Promise<{ cluster: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllClusterSlugs().map((slug) => ({ cluster: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cluster: clusterSlug } = await params
  const cluster = getCluster(clusterSlug)
  if (!cluster) return {}

  return {
    title: cluster.hub.title,
    description: cluster.hub.meta_description,
    alternates: { canonical: `https://makeit.bot${cluster.hub.url}` },
    keywords: [cluster.hub.keyword_primary, ...cluster.hub.keywords_secondary],
  }
}

export default async function ClusterHubPage({ params }: PageProps) {
  const { cluster: clusterSlug } = await params
  const cluster = getCluster(clusterSlug)
  if (!cluster) notFound()

  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes/' },
    { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
    { name: cluster.cluster_name, url: cluster.hub.url },
  ]

  return (
    <Layout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl font-bold mt-6 mb-4">{cluster.hub.h1}</h1>
        <p className="text-lg text-muted-foreground mb-12">{cluster.hub.meta_description}</p>

        <h2 className="text-2xl font-semibold mb-6">Guias Disponíveis</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {cluster.spokes.map((spoke) => (
            <Link
              key={spoke.slug}
              href={spoke.url}
              className="group block p-5 border border-border rounded-xl hover:border-primary transition-colors bg-background"
            >
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {spoke.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {spoke.meta_description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <CTASection
        primary={{ text: 'Experimentar Grátis', url: '/contact/' }}
        secondary={{ text: 'Ver todas as soluções', url: '/solucoes/veterinarias/' }}
        title="Pronto para automatizar a sua clínica?"
        description="Comece com um período de teste gratuito. Sem cartão de crédito."
      />
    </Layout>
  )
}
