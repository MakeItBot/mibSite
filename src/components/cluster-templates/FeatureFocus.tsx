import type { Spoke, Cluster } from '@/types/cluster'
import { FAQSection } from '@/components/seo/FAQSection'
import { CTASection } from '@/components/seo/CTASection'
import { RelatedLinks } from '@/components/seo/RelatedLinks'
import { getRelatedSpokes } from '@/lib/clusters'

interface Props {
  spoke: Spoke
  cluster: Cluster
}

export function FeatureFocus({ spoke, cluster }: Props) {
  const vars = spoke.variables as Record<string, string | string[]>
  const relatedSpokes = getRelatedSpokes(cluster, spoke.slug)
  const channels = vars.channels as string[] | undefined

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{spoke.h1}</h1>
          <p className="text-lg text-muted-foreground">{spoke.meta_description}</p>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">{vars.feature_name as string}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{vars.how_it_works as string}</p>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {vars.key_metric && (
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Métrica chave</p>
                <p className="font-semibold text-foreground">{vars.key_metric as string}</p>
              </div>
            )}
            {vars.setup_time && (
              <div className="p-4 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Tempo de configuração</p>
                <p className="font-semibold text-foreground">{vars.setup_time as string}</p>
              </div>
            )}
            {vars.differentiator && (
              <div className="p-4 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Diferencial</p>
                <p className="font-semibold text-foreground">{vars.differentiator as string}</p>
              </div>
            )}
          </div>

          {channels && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Canais suportados:</h3>
              <div className="flex flex-wrap gap-2">
                {channels.map((ch, i) => (
                  <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {spoke.faq.length > 0 && <FAQSection faqs={spoke.faq} />}

      {/* CTA */}
      <CTASection
        primary={{ text: 'Ativar Esta Funcionalidade', url: '/contact/' }}
        secondary={{ text: `Ver todas as funcionalidades de ${cluster.cluster_name}`, url: `/solucoes/veterinarias/${cluster.cluster_id}/` }}
      />

      {/* Related */}
      <RelatedLinks spokes={relatedSpokes} />
    </>
  )
}
