import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'
import { ToolsGrid, SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'UPPERCASE Converter – Convert Text to All Caps Online',
  description: 'Convert any text to UPPERCASE instantly. Free online tool, no sign-up needed. Paste your text and get ALL CAPS in one click.',
  alternates: { canonical: '/uppercase-converter' },
  openGraph: {
    title: 'UPPERCASE Converter – Convert Text to All Caps',
    description: 'Convert any text to UPPERCASE instantly. Free, fast, private.',
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
              UPPERCASE Converter
            </h1>
            <p className="text-muted-foreground">
              Convert any text to ALL CAPS instantly. Paste, click, done.
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
