import type { Spoke, Cluster, DataPoint } from '@/types/cluster'
import { DataPointsGrid } from '@/components/seo/DataPointsGrid'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { getRelatedSpokes } from '@/lib/clusters'

interface CalcExample {
  clinic_size: string
  avg_ticket: string
  no_show_rate_before: string
  no_show_rate_after: string
  monthly_recovery: string
  annual_recovery: string
}

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function DataDriven({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, string | DataPoint[] | CalcExample>
  const dataPoints = vars.data_points as DataPoint[] | undefined
  const calcExample = vars.calculation_example as CalcExample | undefined
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{spoke.meta_description}</p>
        </div>
      </section>

      {/* Data Points */}
      {dataPoints && <DataPointsGrid dataPoints={dataPoints} title={vars.data_theme as string} />}

      {/* Calculation Example */}
      {calcExample && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Exemplo de Cálculo</h2>
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-4">{calcExample.clinic_size}</p>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Ticket médio por consulta</span>
                  <span className="font-medium">{calcExample.avg_ticket}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Taxa de no-show antes</span>
                  <span className="font-medium text-red-500">{calcExample.no_show_rate_before}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Taxa de no-show depois</span>
                  <span className="font-medium text-green-600">{calcExample.no_show_rate_after}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Recuperação mensal</span>
                  <span className="font-bold text-primary">{calcExample.monthly_recovery}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm font-semibold">Recuperação anual</span>
                  <span className="font-bold text-xl text-primary">{calcExample.annual_recovery}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* Tool CTA or default CTA */}
      <CTASection
        primary={spoke.tool_cta ?? { text: 'Calcular o Custo do No-Show', url: '/contact/' }}
        secondary={{ text: 'Ver soluções anti-no-show', url: `/solucoes/veterinarias/${cluster.cluster_id}/` }}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
