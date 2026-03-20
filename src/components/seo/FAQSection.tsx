import type { FAQ } from '@/types/cluster'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function FAQSection({ faqs, title = 'Perguntas Frequentes' }: FAQSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <dl className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-0">
              <dt className="font-semibold text-foreground mb-2">{faq.question}</dt>
              <dd className="text-muted-foreground leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
