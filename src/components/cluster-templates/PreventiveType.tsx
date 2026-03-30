"use client"

import { motion } from "framer-motion"
import { Shield, Settings, TrendingUp, AlertCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function PreventiveType({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const subTypes = v.sub_types?.split(" | ") ?? []
  const configItems = v.config_by_vet?.split(" | ") ?? []
  const protocolFactors = v.protocol_factors?.split(" | ") ?? []

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Medicina Preventiva
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="/contact/">Automatizar Agora <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sub-types */}
      {subTypes.length > 0 && (
        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-sm text-muted-foreground mb-6 font-semibold uppercase tracking-wide">Tipos cobertos</p>
            <div className="flex flex-wrap justify-center gap-3">
              {subTypes.map((type, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {type.trim()}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold mb-3">O Problema</h2>
                <p className="text-muted-foreground leading-relaxed">{v.challenge}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works — vet config */}
      {configItems.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Configurado pelo Veterinário</h2>
                </div>
                <ul className="space-y-3">
                  {configItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              {protocolFactors.length > 0 && (
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Factores do Protocolo</h2>
                  </div>
                  <ul className="space-y-3">
                    {protocolFactors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{factor.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Seasonality (if present) */}
      {v.seasonality && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Sazonalidade</h2>
            <p className="text-muted-foreground mb-4">{v.seasonality}</p>
            {v.seasonal_alert && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-sm font-medium text-primary">{v.seasonal_alert}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Revenue Impact */}
      {(v.revenue_impact_1 || v.revenue_impact_2) && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Impacto para a Clínica</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[v.revenue_impact_1, v.revenue_impact_2].filter(Boolean).map((impact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <p className="text-sm text-muted-foreground">{impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {spoke.faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <dl className="space-y-6">
              {spoke.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
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
        <div className="container mx-auto px-4 max-w-3xl pb-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja os seus pacientes. Automaticamente.</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default PreventiveType
