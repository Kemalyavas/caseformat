import Link from "next/link"

const TOOLS = [
  { href: "/uppercase-converter", title: "UPPERCASE", description: "Convert text to ALL CAPS" },
  { href: "/lowercase-converter", title: "lowercase", description: "Convert text to all lowercase" },
  { href: "/title-case-converter", title: "Title Case", description: "Capitalize Each Word" },
  { href: "/camelcase-converter", title: "camelCase", description: "For JavaScript variables" },
  { href: "/pascalcase-converter", title: "PascalCase", description: "For class names" },
  { href: "/snake-case-converter", title: "snake_case", description: "For Python & SQL" },
  { href: "/kebab-case-converter", title: "kebab-case", description: "For CSS & URLs" },
  { href: "/slug", title: "URL Slug Generator", description: "SEO-friendly URL slugs" },
]

export function ToolsGrid() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="mb-6 text-xl font-semibold text-foreground">All Conversion Tools</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
          >
            <h3 className="text-sm font-semibold text-foreground">{tool.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

const MORE_TOOLS = [
  { href: "https://imgpressr.com", title: "ImgPressr", desc: "Compress & convert images" },
  { href: "https://jsonshift.com", title: "JSONShift", desc: "Convert JSON, CSV, YAML, XML" },
  { href: "https://thepercentcalc.com", title: "PercentCalc", desc: "Percentage calculator" },
  { href: "https://faviconator.com", title: "Faviconator", desc: "Favicon generator" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="mb-5 pb-5 border-b border-border">
          <p className="text-xs font-semibold text-foreground mb-2">More Free Tools</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {MORE_TOOLS.map((t) => (
              <a key={t.href} href={t.href} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t.title} — {t.desc}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CaseFormat
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {tool.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/privacy-policy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <span className="text-xs text-muted-foreground">&middot;</span>
          <p className="text-xs text-muted-foreground">
            100% client-side
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}
