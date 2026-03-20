import type { Metadata } from 'next'
import TermsPage from '@/views/Terms'

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description: 'Termos e condições de utilização do makeit.bot.',
  alternates: { canonical: 'https://makeit.bot/terms/' },
  robots: { index: false },
}

export default function Page() {
  return <TermsPage />
}
