"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, AlertTriangle, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function ProcedureSpecific({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" />
              Recuperação: {v.recovery_time}
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

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {v.key_stat_1 && (
              <div>
                <div className="text-3xl font-bold text-primary">{v.key_stat_1}</div>
                <div className="text-sm text-muted-foreground mt-1">{v.key_stat_1_label}</div>
              </div>
            )}
            {v.key_stat_2 && (
              <div>
                <div className="text-3xl font-bold text-primary">{v.key_stat_2}</div>
                <div className="text-sm text-muted-foreground mt-1">{v.key_stat_2_label}</div>
              </div>
            )}
            {v.key_stat_3 && (
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-primary">{v.key_stat_3}</div>
                <div className="text-sm text-muted-foreground mt-1">{v.key_stat_3_label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Protocol Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-3 text-center">O Protocolo Automático</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Cada cirurgia activa automaticamente uma sequência de acompanhamento. Configura-se uma vez.
            </p>
          </motion.div>
          <div className="space-y-4">
            {[
              { key: "protocol_day_0", label: "Alta" },
              { key: "protocol_day_1", label: "Dia 1" },
              { key: "protocol_day_3", label: "Dia 3" },
              { key: "protocol_day_7", label: "Dia 7" },
              { key: "protocol_day_14", label: "Dia 14" },
              { key: "protocol_week_0", label: "Alta" },
              { key: "protocol_week_1", label: "Semana 1" },
              { key: "protocol_week_2", label: "Semana 2" },
              { key: "protocol_week_3_4", label: "Semana 3-4" },
              { key: "protocol_week_4_6", label: "Semana 4-6" },
              { key: "protocol_week_6_8", label: "Semana 6-8" },
              { key: "protocol_week_8_12", label: "Semana 8-12" },
            ].filter(item => v[item.key]).map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary pt-0.5">{item.label}</div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{v[item.key]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para automatizar o follow-up?</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ProcedureSpecific
