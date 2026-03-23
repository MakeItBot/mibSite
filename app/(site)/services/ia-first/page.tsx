import type { Metadata } from 'next'
import IAFirstPage from '@/views/services/IAFirst'

export const metadata: Metadata = {
  title: 'IA FIRST — Custom AI Agents & Intelligent Systems',
  description: 'Tailor-made AI agents and intelligent systems designed specifically for your business. Workflow automation, decision support, and multi-agent orchestration.',
  alternates: { canonical: 'https://makeit.bot/services/ia-first/' },
}

export default function Page() {
  return <IAFirstPage />
}
