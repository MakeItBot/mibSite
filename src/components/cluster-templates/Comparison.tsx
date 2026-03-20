import type { Spoke, Cluster } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { getRelatedSpokes } from '@/lib/clusters'

interface ScenarioVars {
  name: string
  description: string
  pros: string[]
  cons: string[]
  monthly_cost: string
}

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function Comparison({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, ScenarioVars | string>
  const scenarioA = vars.scenario_a as ScenarioVars
  const scenarioB = vars.scenario_b as ScenarioVars
  const verdict = vars.verdict as string
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{spoke.meta_description}</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Scenario A */}
            <div className="p-6 border border-border rounded-xl">
              <h2 className="text-xl font-bold mb-1">{scenarioA?.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{scenarioA?.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-green-600 mb-2">✓ Vantagens</h3>
                <ul className="space-y-1">
                  {scenarioA?.pros?.map((pro, i) => (
                    <li key={i} className="text-sm text-muted-foreground">+ {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-red-600 mb-2">✗ Desvantagens</h3>
                <ul className="space-y-1">
                  {scenarioA?.cons?.map((con, i) => (
                    <li key={i} className="text-sm text-muted-foreground">- {con}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-3">
                {scenarioA?.monthly_cost}
              </p>
            </div>

            {/* Scenario B */}
            <div className="p-6 border-2 border-primary rounded-xl relative">
              <span className="absolute -top-3 left-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded">
                Recomendado
              </span>
              <h2 className="text-xl font-bold mb-1">{scenarioB?.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{scenarioB?.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-green-600 mb-2">✓ Vantagens</h3>
                <ul className="space-y-1">
                  {scenarioB?.pros?.map((pro, i) => (
                    <li key={i} className="text-sm text-muted-foreground">+ {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-red-600 mb-2">✗ Desvantagens</h3>
                <ul className="space-y-1">
                  {scenarioB?.cons?.map((con, i) => (
                    <li key={i} className="text-sm text-muted-foreground">- {con}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-3">
                {scenarioB?.monthly_cost}
              </p>
            </div>
          </div>

          {/* Verdict */}
          {verdict && (
            <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-1">Veredicto</h3>
              <p className="text-muted-foreground">{verdict}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* CTA */}
      <CTASection
        primary={{ text: 'Experimentar o Sistema Automático', url: '/contact/' }}
        secondary={{ text: 'Ver mais detalhes', url: `/solucoes/veterinarias/${cluster.cluster_id}/` }}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
