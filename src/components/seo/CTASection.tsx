import Link from 'next/link'

interface CTASectionProps {
  primary: { text: string; url: string }
  secondary?: { text: string; url: string }
  title?: string
  description?: string
}

export function CTASection({ primary, secondary, title, description }: CTASectionProps) {
  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}
        {description && <p className="text-muted-foreground mb-8">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primary.url}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            {primary.text}
          </Link>
          {secondary && (
            <Link
              href={secondary.url}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background font-medium hover:bg-muted transition-colors"
            >
              {secondary.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
