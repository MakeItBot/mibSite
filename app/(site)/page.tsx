import type { Metadata } from 'next'
import HomePage from '@/views/Home'

export const metadata: Metadata = {
  title: 'makeit.bot — Soluções de IA para Veterinárias',
  description:
    'Automação inteligente e IA para clínicas veterinárias em Portugal. Agendamento online, anti-no-show, follow-up automático e muito mais.',
  alternates: { canonical: 'https://makeit.bot/' },
}

export default function Page() {
  return <HomePage />
}
