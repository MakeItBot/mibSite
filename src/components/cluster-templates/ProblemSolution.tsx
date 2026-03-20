import type { Spoke, Cluster } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { getRelatedSpokes } from '@/lib/clusters'

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function ProblemSolution({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, string | string[]>
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)
  const rootCauses = vars.root_causes as string[] | undefined

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{spoke.meta_description}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">O Problema: {vars.problem as string}</h2>
          <p className="text-muted-foreground mb-6">
            Afecta <strong>{vars.problem_scale as string}</strong> das consultas marcadas.
          </p>
          {rootCauses && (
            <>
              <h3 className="text-lg font-semibold mb-3">Principais causas:</h3>
              <ul className="space-y-2">
                {rootCauses.map((cause, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    {cause}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">A Solução</h2>
          <p className="text-muted-foreground mb-4">{vars.solution_approach as string}</p>
          {vars.expected_result && (
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="font-semibold text-primary">Resultado esperado: {vars.expected_result as string}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* CTA */}
      <CTASection
        primary={{ text: 'Resolver o Problema de No-Show', url: '/contact/' }}
        secondary={{ text: 'Ver como funciona', url: `/solucoes/veterinarias/${cluster.cluster_id}/` }}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
