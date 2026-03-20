import Link from 'next/link'
import type { Spoke } from '@/types/cluster'

interface RelatedLinksProps {
  spokes: Spoke[]
  title?: string
}

export function RelatedLinks({ spokes, title = 'Artigos Relacionados' }: RelatedLinksProps) {
  if (spokes.length === 0) return null

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <ul className="space-y-2">
          {spokes.map((spoke) => (
            <li key={spoke.slug}>
              <Link
                href={spoke.url}
                className="text-primary hover:underline"
              >
                {spoke.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
