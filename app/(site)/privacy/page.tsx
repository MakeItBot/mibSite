import type { Metadata } from 'next'
import PrivacyPage from '@/views/Privacy'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e protecção de dados do makeit.bot.',
  alternates: { canonical: 'https://makeit.bot/privacy/' },
  robots: { index: false },
}

export default function Page() {
  return <PrivacyPage />
}
