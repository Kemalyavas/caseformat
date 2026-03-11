import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'

export const metadata: Metadata = {
  title: 'Title Case Converter – Capitalize Your Text Online',
  description: 'Convert text to Title Case instantly. Capitalize the first letter of each word. Free online tool, no sign-up needed.',
  alternates: { canonical: '/title-case-converter' },
  openGraph: {
    title: 'Title Case Converter – Capitalize Your Text Online',
    description: 'Convert text to Title Case instantly. Capitalize the first letter of each word.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Title Case Converter
          </h1>
          <p className="text-muted-foreground">
            Capitalize the first letter of every word instantly.
          </p>
        </div>
        <CaseConverter />
      </div>
    </main>
  )
}
