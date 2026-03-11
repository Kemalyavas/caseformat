import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'

export const metadata: Metadata = {
  title: 'snake_case Converter – Convert Text to snake_case',
  description: 'Convert any text to snake_case instantly. Ideal for Python variables, database columns, and file names. Free online tool.',
  alternates: { canonical: '/snake-case-converter' },
  openGraph: {
    title: 'snake_case Converter – Convert Text to snake_case',
    description: 'Convert any text to snake_case instantly. Ideal for Python variables and database columns.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            snake_case Converter
          </h1>
          <p className="text-muted-foreground">
            Convert text to snake_case for Python, SQL, and more.
          </p>
        </div>
        <CaseConverter />
      </div>
    </main>
  )
}
