import type { Metadata } from 'next'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Soluções para Clínicas Veterinárias',
  description: 'Soluções de IA e automação para clínicas veterinárias em Portugal. Agendamento inteligente, chatbots e mais.',
  alternates: { canonical: 'https://makeit.bot/solucoes/' },
}

export default function SolucoesPage() {
  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: 'Soluções', url: '/solucoes/' },
  ]

  return (
    <Layout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl font-bold mt-6 mb-4">Soluções para o Setor Veterinário</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Ferramentas de automação e inteligência artificial desenhadas especificamente para clínicas veterinárias em Portugal.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/solucoes/veterinarias/"
            className="group block p-6 border border-border rounded-xl hover:border-primary transition-colors bg-background"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Soluções para Veterinárias
            </h2>
            <p className="text-muted-foreground text-sm">
              Agendamento inteligente, redução de no-show, lembretes automáticos e muito mais.
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
