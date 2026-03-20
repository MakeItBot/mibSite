import type { Spoke, Cluster } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { getRelatedSpokes } from '@/lib/clusters'

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function SolutionByType({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, string>
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
            {vars.type_label}
          </p>
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{vars.type_description}</p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {vars.unique_challenge && (
            <div>
              <h2 className="text-xl font-bold mb-3">O Desafio Único</h2>
              <p className="text-muted-foreground">{vars.unique_challenge}</p>
            </div>
          )}
          {vars.key_benefit && (
            <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-1">Benefício Principal</h3>
              <p className="text-muted-foreground">{vars.key_benefit}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* CTA */}
      <CTASection
        primary={spoke.cta?.primary ?? { text: 'Experimentar Grátis', url: '/contact/' }}
        secondary={{ text: 'Ver mais soluções', url: `/solucoes/veterinarias/${cluster.cluster_id}/` }}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
