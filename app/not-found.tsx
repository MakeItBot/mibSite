import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">Página não encontrada</p>
        <Link href="/" className="underline hover:text-primary transition-colors">
          Voltar à homepage
        </Link>
      </div>
    </div>
  )
}
