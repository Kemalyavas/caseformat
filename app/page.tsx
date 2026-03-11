import Link from "next/link"
import { CaseConverter } from "@/components/case-converter"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

const FAQ_ITEMS = [
  {
    question: "What is a text case converter?",
    answer:
      "A text case converter is a tool that transforms text between different capitalization styles like UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more. It's useful for developers, writers, and anyone who needs to quickly reformat text.",
  },
  {
    question: "What is camelCase used for?",
    answer:
      "camelCase is a naming convention commonly used in JavaScript, TypeScript, and Java for variable and function names. The first word is lowercase and each subsequent word starts with a capital letter, like myVariableName.",
  },
  {
    question: "What is the difference between camelCase and PascalCase?",
    answer:
      "In camelCase, the first letter is lowercase (myVariable), while in PascalCase, the first letter is uppercase (MyVariable). PascalCase is typically used for class names and component names.",
  },
  {
    question: "What is snake_case?",
    answer:
      "snake_case uses underscores to separate words, with all letters in lowercase. It's the standard naming convention in Python, Ruby, and for database column names. Example: my_variable_name.",
  },
  {
    question: "Is my text stored or sent to a server?",
    answer:
      "No. CaseFormat processes everything 100% in your browser using JavaScript. Your text never leaves your device — no data is uploaded, stored, or shared.",
  },
  {
    question: "What is a URL slug?",
    answer:
      "A URL slug is the part of a web address that identifies a page in a human-readable format. For example, in caseformat.com/blog/what-is-camelcase, the slug is 'what-is-camelcase'. Slugs use lowercase letters and hyphens.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CaseConverter />

        {/* Tools Grid */}
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

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
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
      </footer>
    </div>
  )
}
