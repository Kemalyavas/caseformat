import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'
import { ToolsGrid, SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'PascalCase Converter – Convert Text to PascalCase',
  description: 'Convert any text to PascalCase instantly. Ideal for class names in C#, Java, TypeScript. Free online developer tool.',
  alternates: { canonical: '/pascalcase-converter' },
  openGraph: {
    title: 'PascalCase Converter – Convert Text to PascalCase',
    description: 'Convert any text to PascalCase instantly. Ideal for class names in C#, Java, TypeScript.',
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
              PascalCase Converter
            </h1>
            <p className="text-muted-foreground">
              Convert text to PascalCase for class and component names.
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
