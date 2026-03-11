"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { href: "/", label: "Case Converter" },
  { href: "/slug", label: "Slug Generator" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          CaseFormat
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-sm sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog"))
                    ? "text-foreground transition-colors"
                    : "text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </nav>
    </header>
  )
}
