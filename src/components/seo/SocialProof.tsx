import type { SocialProof as SocialProofType } from '@/types/cluster'

interface SocialProofProps {
  data: SocialProofType
}

export function SocialProof({ data }: SocialProofProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <blockquote className="border-l-4 border-primary pl-6">
          <p className="text-lg italic text-foreground mb-4">"{data.quote}"</p>
          <footer className="text-sm text-muted-foreground">
            <strong className="text-foreground">{data.author}</strong>
            {data.role && <span>, {data.role}</span>}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
