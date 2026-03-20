import type { Spoke } from '@/types/cluster'
import { DataPointsGrid } from '@/components/seo/DataPointsGrid'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { SocialProof } from '@/components/seo/SocialProof'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import type { Cluster } from '@/types/cluster'
import { getRelatedSpokes } from '@/lib/clusters'

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function SolutionBySize({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, string>
  const content = spoke.content
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
            {vars.size_label} · {vars.size_description}
          </p>
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{vars.ideal_for}</p>
        </div>
      </section>

      {/* Intro */}
      {content?.intro && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground">{content.intro}</p>
          </div>
        </section>
      )}

      {/* Problem */}
      {content?.problem_section && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{content.problem_section.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{content.problem_section.content}</p>
          </div>
          {content.problem_section.data_points && (
            <DataPointsGrid dataPoints={content.problem_section.data_points} />
          )}
        </section>
      )}

      {/* Solution */}
      {content?.solution_section && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{content.solution_section.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{content.solution_section.content}</p>
            {content.solution_section.features && (
              <div className="grid gap-4 md:grid-cols-2">
                {content.solution_section.features.map((feat, i) => (
                  <div key={i} className="p-4 border border-border rounded-lg bg-background">
                    <h3 className="font-semibold mb-1">{feat.name}</h3>
                    <p className="text-sm text-muted-foreground">{feat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Social Proof */}
      {content?.social_proof && <SocialProof data={content.social_proof} />}

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* CTA */}
      <CTASection
        primary={spoke.cta?.primary ?? { text: 'Experimentar Grátis', url: '/contact/' }}
        secondary={spoke.cta?.secondary}
        title="Pronto para transformar a sua clínica?"
        description={vars.key_benefit}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
