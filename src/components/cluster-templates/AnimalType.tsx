"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

const ANIMAL_ICONS = { dog: "🐕", cat: "🐈", exotic: "🐰" }

export function AnimalType({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const animals = [
    {
      emoji: "🐕",
      name: "Cão",
      challenge: v.dog_challenge,
      tip: v.dog_tip,
      surgeries: v.dog_surgeries,
      color: "border-amber-200 bg-amber-50/50 dark:bg-amber-950/20",
    },
    {
      emoji: "🐈",
      name: "Gato",
      challenge: v.cat_challenge,
      tip: v.cat_tip,
      surgeries: v.cat_surgeries,
      alarm: v.cat_alarm,
      color: "border-violet-200 bg-violet-50/50 dark:bg-violet-950/20",
    },
    {
      emoji: "🐰",
      name: "Animais Exóticos",
      challenge: v.exotic_challenge,
      tip: v.rabbit_tip,
      color: "border-green-200 bg-green-50/50 dark:bg-green-950/20",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="/contact/">Protocolos por Espécie <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {animals.map((animal, i) => (
              <motion.div
                key={animal.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-2xl border p-6 ${animal.color}`}
              >
                <div className="text-4xl mb-3">{animal.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{animal.name}</h3>
                {animal.surgeries && (
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-semibold">Cirurgias comuns:</span> {animal.surgeries}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-3">{animal.challenge}</p>
                {animal.alarm && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-700 dark:text-red-400"><span className="font-semibold">Alerta:</span> {animal.alarm}</p>
                  </div>
                )}
                <div className="bg-background/80 rounded-lg p-3 border border-border/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Dica para o tutor:</span> {animal.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How System Adapts */}
      {v.system_selection && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Como o Sistema se Adapta</h2>
            <p className="text-muted-foreground mb-8">{v.system_selection}</p>
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
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6">
                  <dt className="font-semibold mb-2">{item.question}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Cada espécie merece um follow-up à medida.</h2>
          <p className="text-muted-foreground mb-8">Comece com 15 dias grátis. Sem cartão de crédito.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AnimalType
