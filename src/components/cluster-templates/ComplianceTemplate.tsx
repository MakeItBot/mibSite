"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, ExternalLink, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function ComplianceTemplate({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const certainFacts = v.certain_facts?.split(" | ") ?? []
  const officialSources = v.official_sources?.split(" | ") ?? []
  const passportItems = v.passport_requirements?.split(" + ") ?? []

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-amber-500/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Obrigação Legal
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

      {/* Certain Facts */}
      {certainFacts.length > 0 && (
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">O Que Sabemos Com Certeza</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certainFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{fact.trim()}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinic Problem */}
      {v.clinic_risk && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold mb-3">O Problema Para a Clínica</h2>
                  <p className="text-muted-foreground">{v.clinic_risk}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Compliance Panel */}
      {v.compliance_panel && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-3 text-center">Painel de Compliance</h2>
            <p className="text-muted-foreground text-center mb-12">
              Vista em tempo real do estado vacinal de todos os pacientes registados.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { color: "green", label: "Em dia", icon: "🟢" },
                { color: "yellow", label: "A vencer em breve", icon: "🟡" },
                { color: "red", label: "Em atraso", icon: "🔴" },
              ].map((status, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{status.icon}</div>
                  <p className="font-semibold">{status.label}</p>
                </motion.div>
              ))}
            </div>
            {v.seasonal_opportunity && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center"
              >
                <p className="text-sm font-medium text-primary">
                  🌞 {v.seasonal_opportunity}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Passport Requirements */}
      {passportItems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Passaporte Europeu para Animais</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Para viajar com cão, gato ou furão na União Europeia, são necessários:
            </p>
            <ol className="space-y-3">
              {passportItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.trim()}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Official Sources */}
      {officialSources.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Fontes Oficiais</h2>
            <div className="grid gap-3">
              {officialSources.map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{source.trim()}</span>
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

      {/* Legal Disclaimer */}
      {v.disclaimer && (
        <div className="container mx-auto px-4 max-w-3xl pb-6">
          <p className="text-xs text-muted-foreground/70 border border-border rounded-lg p-4">
            ⚠️ {v.disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-amber-500/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Garanta que nenhum paciente fica em incumprimento.</h2>
          <p className="text-muted-foreground mb-8">Painel de compliance em tempo real. Alertas automáticos. 15 dias grátis.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Garantir Compliance Automático <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ComplianceTemplate
