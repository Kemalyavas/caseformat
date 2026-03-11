import type { Metadata } from 'next'
import { CaseConverter } from '@/components/case-converter'

export const metadata: Metadata = {
  title: 'URL Slug Generator – Create SEO-Friendly URL Slugs',
  description: 'Generate clean, SEO-friendly URL slugs from any text. Removes special characters, converts spaces to hyphens. Free online tool.',
  alternates: { canonical: '/slug' },
  openGraph: {
    title: 'URL Slug Generator – Create SEO-Friendly URL Slugs',
    description: 'Generate clean, SEO-friendly URL slugs from any text.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            URL Slug Generator
          </h1>
          <p className="text-muted-foreground">
            Generate clean, SEO-friendly URL slugs from any text.
          </p>
        </div>
        <CaseConverter />
      </div>
    </main>
  )
}
