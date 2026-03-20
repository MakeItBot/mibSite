import type { Metadata } from 'next'
import ChatbotsPage from '@/views/services/Chatbots'

export const metadata: Metadata = {
  title: 'AI Chatbots',
  description: 'Custom AI chatbot development for customer support and automation.',
  alternates: { canonical: 'https://makeit.bot/services/chatbots/' },
}

export default function Page() {
  return <ChatbotsPage />
}
