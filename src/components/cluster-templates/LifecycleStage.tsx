"use client"

import { motion } from "framer-motion"
import { Baby, Calendar, Bell, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function LifecycleStage({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const steps = [
    { key: "step_1", icon: Calendar },
    { key: "step_2", icon: Bell },
    { key: "step_3", icon: CheckCircle },
    { key: "step_4", icon: CheckCircle },
    { key: "step_5", icon: CheckCircle },
  ].filter(s => v[s.key])

  const isFilhote = spoke.slug.includes("filhote")

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              {isFilhote ? <Baby className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
              {v.stage_description}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {spoke.cta?.primary && (
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.primary.url}>{spoke.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              )}
              {spoke.cta?.secondary && (
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href={spoke.cta.secondary.url}>{spoke.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge + Key Message */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-destructive">O Problema</h2>
              <p className="text-muted-foreground leading-relaxed">{v.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-primary">O Que Importa Saber</h2>
              <p className="text-muted-foreground leading-relaxed">{v.key_message}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works — steps */}
      {steps.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">Como o makeit.bot Gere o Processo</h2>
              <p className="text-muted-foreground">Automático desde a primeira visita até ao fim do protocolo.</p>
            </motion.div>
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-card border border-border rounded-xl"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary mb-1">Passo {i + 1}</div>
                      <p className="text-sm text-muted-foreground">{v[step.key]}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Added value (if present) */}
      {v.added_value && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Valor Além da Vacina</h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-2">
                {v.added_value.split("|").map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <dl className="space-y-6">
              {spoke.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <dt className="font-semibold mb-2">{item.question}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      {v.disclaimer && (
        <div className="container mx-auto px-4 max-w-3xl py-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{v.cta_headline ?? "Nunca mais perca uma vacina."}</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LifecycleStage
