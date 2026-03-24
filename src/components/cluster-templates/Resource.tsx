"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, AlertTriangle, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Spoke, Cluster } from "@/types/cluster"

interface Props { spoke: Spoke; cluster: Cluster }

export function Resource({ spoke, cluster }: Props) {
  const v = spoke.variables as Record<string, string>

  const alarmLevels = [
    { color: "red", icon: AlertCircle, label: "Ligar IMEDIATAMENTE 🔴", items: v.alarm_red?.split(" | ") ?? [] },
    { color: "yellow", icon: AlertTriangle, label: "Ligar até amanhã 🟡", items: v.alarm_yellow?.split(" | ") ?? [] },
    { color: "green", icon: CheckCircle, label: "Normal, não precisa de ligar 🟢", items: v.alarm_green?.split(" | ") ?? [] },
  ]

  const checklistDays = [
    { label: "Dia 0 — Dia da cirurgia", items: v.day_0_items?.split(" | ") ?? [] },
    { label: "Dia 1", items: v.day_1_items?.split(" | ") ?? [] },
    { label: "Dias 2-3", items: v.day_2_3_items?.split(" | ") ?? [] },
    { label: "Dias 4-7", items: v.day_4_7_items?.split(" | ") ?? [] },
    { label: "Dias 7-14", items: v.day_7_14_items?.split(" | ") ?? [] },
  ].filter(d => d.items.length > 0 && d.items[0] !== "")

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <FileText className="h-4 w-4" />
              Recurso para Tutores
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{spoke.h1}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{spoke.meta_description}</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="/contact/">Receber Checklist Personalizado <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Checklist by Day */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-3 text-center">Checklist Primeiros 14 Dias</h2>
          <p className="text-muted-foreground text-center mb-12">O que verificar a cada etapa da recuperação.</p>
          <div className="space-y-6">
            {checklistDays.map((day, i) => (
              <motion.div
                key={day.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-4 text-primary">{day.label}</h3>
                <ul className="space-y-2">
                  {day.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alarm Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-3 text-center">Sinais de Alarme</h2>
          <p className="text-muted-foreground text-center mb-12">Quando contactar a clínica</p>
          <div className="space-y-4">
            {alarmLevels.filter(l => l.items.length > 0).map((level, i) => {
              const colorMap: Record<string, string> = {
                red: "border-red-200 bg-red-50/50 dark:bg-red-950/20",
                yellow: "border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20",
                green: "border-green-200 bg-green-50/50 dark:bg-green-950/20",
              }
              return (
                <motion.div
                  key={level.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-5 ${colorMap[level.color]}`}
                >
                  <h3 className="font-semibold mb-3">{level.label}</h3>
                  <ul className="space-y-1">
                    {level.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Dê ao tutor o guia que ele precisa — automaticamente.</h2>
          <p className="text-muted-foreground mb-8">O checklist personalizado é enviado por WhatsApp no momento da alta. 15 dias grátis.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <a href="/contact/">Experimentar Grátis <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Resource
