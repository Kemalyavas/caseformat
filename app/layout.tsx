import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://caseformat.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'CaseFormat — Free Text Case Converter',
  description: 'Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more. Free, fast, and private — runs entirely in your browser.',
  keywords: ['case converter', 'text case converter', 'uppercase converter', 'lowercase converter', 'camelcase converter', 'snake case converter', 'title case converter', 'text transformer'],
  openGraph: {
    title: 'CaseFormat — Free Text Case Converter',
    description: 'Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'CaseFormat — Free Text Case Converter',
    description: 'Convert text between different cases. Free, fast, private.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
