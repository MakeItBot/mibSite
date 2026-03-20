import type { Metadata } from 'next'
import ContactPage from '@/views/Contact'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Fale connosco — estamos prontos para ajudar o seu negócio a crescer com automação.',
  alternates: { canonical: 'https://makeit.bot/contact/' },
}

export default function Page() {
  return <ContactPage />
}
