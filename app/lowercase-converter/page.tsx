import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'

export const metadata: Metadata = {
  title: 'Lowercase Converter – Convert Text to All Lowercase',
  description: 'Convert any text to lowercase instantly. Free online tool, no sign-up. Paste your text and convert to all lowercase in one click.',
  alternates: { canonical: '/lowercase-converter' },
  openGraph: {
    title: 'Lowercase Converter – Convert Text to All Lowercase',
    description: 'Convert any text to lowercase instantly. Free, fast, private.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lowercase Converter
          </h1>
          <p className="text-muted-foreground">
            Convert any text to all lowercase instantly.
          </p>
        </div>
        <CaseConverter />
      </div>
    </main>
  )
}
