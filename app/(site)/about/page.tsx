import type { Metadata } from 'next'
import AboutPage from '@/views/About'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a equipa do makeit.bot — especialistas em automação e IA para negócios.',
  alternates: { canonical: 'https://makeit.bot/about/' },
}

export default function Page() {
  return <AboutPage />
}
