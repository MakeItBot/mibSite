import type { Metadata } from 'next'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { getAllClusters } from '@/lib/clusters'

export const metadata: Metadata = {
  title: 'Soluções de IA para Clínicas Veterinárias em Portugal',
  description: 'Descubra todas as soluções makeit.bot para veterinárias: agendamento online, anti-no-show, lembretes automáticos e chatbots.',
  alternates: { canonical: 'https://makeit.bot/solucoes/veterinarias/' },
}

export default function VeterinariasHubPage() {
  const clusters = getAllClusters()

  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes/' },
    { name: 'Veterinárias', url: '/solucoes/veterinarias/' },
  ]

  return (
    <Layout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl font-bold mt-6 mb-4">
          Soluções de IA para Clínicas Veterinárias
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Ferramentas práticas para automatizar a gestão da sua clínica, reduzir faltas e melhorar a experiência dos tutores.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {clusters.map((cluster) => (
            <Link
              key={cluster.cluster_id}
              href={`/solucoes/veterinarias/${cluster.cluster_id}/`}
              className="group block p-6 border border-border rounded-xl hover:border-primary transition-colors bg-background"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {cluster.cluster_name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {cluster.hub.meta_description}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                {cluster.spokes.length} guias disponíveis →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
