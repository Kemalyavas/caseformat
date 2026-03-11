import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'
import { ToolsGrid, SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'kebab-case Converter – Convert Text to kebab-case',
  description: 'Convert any text to kebab-case instantly. Perfect for CSS classes, URLs, and file names. Free online tool.',
  alternates: { canonical: '/kebab-case-converter' },
  openGraph: {
    title: 'kebab-case Converter – Convert Text to kebab-case',
    description: 'Convert any text to kebab-case instantly. Perfect for CSS classes, URLs, and file names.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
          <div className="mb-6 space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              kebab-case Converter
            </h1>
            <p className="text-muted-foreground">
              Convert text to kebab-case for CSS, URLs, and file names.
            </p>
          </div>
          <CaseConverter />
        </div>
        <ToolsGrid />
      </main>
      <SiteFooter />
    </>
  )
}
