"use client"

import { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"

type CaseType =
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "sentencecase"
  | "camelcase"
  | "pascalcase"
  | "snakecase"
  | "kebabcase"
  | "dotcase"
  | "constantcase"

const caseButtons: { label: string; value: CaseType }[] = [
  { label: "UPPERCASE", value: "uppercase" },
  { label: "lowercase", value: "lowercase" },
  { label: "Title Case", value: "titlecase" },
  { label: "Sentence case", value: "sentencecase" },
  { label: "camelCase", value: "camelcase" },
  { label: "PascalCase", value: "pascalcase" },
  { label: "snake_case", value: "snakecase" },
  { label: "kebab-case", value: "kebabcase" },
  { label: "dot.case", value: "dotcase" },
  { label: "CONSTANT_CASE", value: "constantcase" },
]

function convertCase(text: string, caseType: CaseType): string {
  if (!text.trim()) return ""

  const words = text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_\-\.]+/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  switch (caseType) {
    case "uppercase":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "titlecase":
      return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    case "sentencecase":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    case "camelcase":
      return words
        .map((word, i) =>
          i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("")
    case "pascalcase":
      return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    case "snakecase":
      return words.join("_")
    case "kebabcase":
      return words.join("-")
    case "dotcase":
      return words.join(".")
    case "constantcase":
      return words.join("_").toUpperCase()
    default:
      return text
  }
}

export function CaseConverter() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [activeCase, setActiveCase] = useState<CaseType | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = useCallback(
    (caseType: CaseType) => {
      setActiveCase(caseType)
      setOutputText(convertCase(inputText, caseType))
    },
    [inputText]
  )

  const handleCopy = async () => {
    if (!outputText) return
    await navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const charCount = inputText.length
  const wordCount = inputText.trim()
    ? inputText.trim().split(/\s+/).length
    : 0

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Case Converter
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Transform your text into any case format instantly
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Textarea */}
        <div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="h-40 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
          />
          <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
            <span>{charCount} characters</span>
            <span>{wordCount} words</span>
          </div>
        </div>

        {/* Case Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {caseButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => handleConvert(btn.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeCase === btn.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:border-foreground"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Output Textarea */}
        <div className="relative">
          <textarea
            value={outputText}
            readOnly
            placeholder="Converted text will appear here..."
            className="h-40 w-full resize-none rounded-lg border border-input bg-secondary/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={handleCopy}
            disabled={!outputText}
            className="absolute right-3 top-3 flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-all hover:border-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
