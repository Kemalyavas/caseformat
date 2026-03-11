import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'

export const metadata: Metadata = {
  title: 'camelCase Converter – Convert Text to camelCase Online',
  description: 'Convert any text to camelCase instantly. Perfect for JavaScript variable names. Free online developer tool.',
  alternates: { canonical: '/camelcase-converter' },
  openGraph: {
    title: 'camelCase Converter – Convert Text to camelCase Online',
    description: 'Convert any text to camelCase instantly. Perfect for JavaScript variable names.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            camelCase Converter
          </h1>
          <p className="text-muted-foreground">
            Convert text to camelCase for JavaScript, TypeScript, and more.
          </p>
        </div>
        <CaseConverter />
      </div>
    </main>
  )
}
