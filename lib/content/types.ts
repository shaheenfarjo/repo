// The shape every language's copy follows. English and Arabic share it, so
// pages render either language without branching.
//
// Text wrapped in *asterisks* is the one emphasized phrase of a heading: italic
// in English, weight 600 in Arabic (Arabic has no italic). See <Rich>.

export type Lang = "en" | "ar"
// The landing page holds everything; only these pages stand on their own
export type Page = "home" | "tools" | "sample-diagnostic" | "privacy"
export type ProjectSlug = "the-idea" | "merchania" | "droid" | "the-iraqi-curator" | "sal"
export type CaseSlug = "the-idea" | "sal"

import type { SectionId, socialUrls } from "./site"

export type Package = {
  name: string
  // The package's name inside a sentence ("the Diagnostic"), for WhatsApp messages
  inSentence: string
  // Links to the sample report
  sample?: string
  for: string
  length: string
  receive: string
  // The fee as shown on the page; without one, the package shows
  // packages.feeLater ("Fee shared after the free call")
  price?: string
  // The same fee for structured data: amount in IQD, whether it is a starting
  // price, and whether it is charged monthly
  amount?: number
  from?: boolean
  monthly?: boolean
  priceNote?: string
  tag?: string
}

export type Project = {
  slug: ProjectSlug
  date?: string
  title: string
  href?: string
  role: string
  description: string
  // Only the fields Shaheen supplied for this project
  detail: { roleDates: string; context?: string; constraints?: string; did?: string; truth?: string }
  caseSlug?: CaseSlug
}

// A simple table: rendered as a table on wide screens and stacked rows on phones
export type Table = { title: string; columns: string[]; rows: string[][]; footer?: string[] }

// The parts of a case study that the project fields don't already cover
export type CaseStudy = {
  timeline?: { title: string; columns: [string, string]; rows: [string, string][] }
  decisions: { title: string; items: { title: string; body: string }[] }
  unproven: { title: string; body: string }
}

export type Content = {
  lang: Lang
  dir: "ltr" | "rtl"
  meta: Record<Page, { title: string; description: string }> & { locale: string }
  name: string
  skipLink: string
  header: {
    nav: { label: string; id: SectionId }[]
    menu: string
    darkMode: string
    lightMode: string
    switchLabel: string
    switchLang: Lang
    book: string
    bookShort: string
  }
  whatsapp: {
    home: string
    consulting: string
    // {package} is replaced with a package's inSentence
    package: string
    // {workshop} is replaced with a workshop topic
    workshop: string
  }
  booking: string
  hero: {
    nameFirst: string
    nameRest: string
    role: string
    tagline: string
    business: string
    build: string
  }
  about: { title: string; lead: string; body: string[]; facts: { key: string; value: string }[] }
  work: { title: string; projects: Project[] }
  projectLabels: { roleDates: string; context: string; constraints: string; did: string; truth: string; more: string }
  cases: Record<CaseSlug, CaseStudy>
  consulting: {
    title: string
    lead: string
    method: {
      title: string
      fields: Record<"goal" | "look" | "get" | "measured" | "yourPart", string>
      more: string
      stages: {
        id: "build" | "prove" | "grow"
        name: string
        length: string
        goal: string
        look: string
        get: string
        measured: string
        yourPart: string
      }[]
    }
    services: { label: string; items: { title: string; summary: string; examples: string[] }[] }
    packages: {
      label: string
      columns: { for: string; length: string; receive: string; fee: string }
      items: Package[]
      feeLater: string
      optionsNote: string
      note: string
      ask: string
    }
    process: { label: string; steps: { name: string; body: string }[] }
    principles: { label: string; items: { title: string; body: string }[] }
    faq: { label: string; items: { question: string; answer: string }[] }
  }
  workshops: {
    facts: { key: string; value: string }[]
    fee: { min: number; max: number }
    includesLabel: string
    includes: string[]
    ask: string
  }
  remote: string
  notes: { title: string; intro: string; items: { id: string; title: string; paragraphs: string[] }[] }
  contactSection: {
    title: string
    line: string
    button: string
    rows: { email: string; whatsapp: string; linkedin: string }
  }
  footer: {
    city: string
    owner: string
    timeZone: string
    links: Record<"tools" | "privacy", string>
    socials: Record<keyof typeof socialUrls, string>
  }
  tools: { title: string; lead: string }
  healthCheck: {
    label: string
    title: string
    intro: string
    assumptions: string
    answers: { yes: string; partly: string; no: string }
    areas: { name: string; statements: [string, string] }[]
    resultTitle: string
    score: string
    weakest: string
    allGood: string
    incomplete: string
    send: string
    message: string
    noScript: string
  }
  breakEven: {
    label: string
    title: string
    intro: string
    currency: string
    fields: Record<"fixed" | "price" | "variable", { label: string; hint: string }>
    results: { units: string; revenue: string; margin: string }
    empty: string
    loss: string
    formula: string
    assumptionsLabel: string
    assumptions: string[]
    noScript: string
  }
  sample: {
    banner: string
    title: string
    summaryTitle: string
    summary: string
    score: { key: string; value: string }
    next: { key: string; value: string }
    tables: Table[]
    ask: string
  }
  privacyPage: { title: string; items: { title: string; body: string }[] }
  notFound: { title: string; body: string; back: string }
}
