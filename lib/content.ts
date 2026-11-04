// All site copy, in English and Arabic. Both objects share one shape, so the
// page components render either language without branching.
//
// Text wrapped in *asterisks* is the one emphasized phrase of a heading: italic
// in English, weight 600 in Arabic (Arabic has no italic). See <Rich>.

export type Lang = "en" | "ar"
export type KnownPage =
  | "home"
  | "consulting"
  | "method"
  | "workshops"
  | "tools"
  | "now"
  | "privacy"
  | "sample-diagnostic"
  | "notes"
export type ProjectSlug = "the-idea" | "merchania" | "droid" | "the-iraqi-curator" | "sal"
export type CaseSlug = "the-idea" | "sal"
// Project pages (C5) and case pages (A11) live under /work and /cases
export type Page = KnownPage | `work/${ProjectSlug}` | `cases/${CaseSlug}`

export const siteUrl = "https://shaheenfarjo.com"

export const contact = {
  whatsappNumber: "9647711705222",
  phoneDisplay: "+964 771 170 5222",
  phoneE164: "+9647711705222",
  email: "hello@shaheenfarjo.com",
  linkedin: "https://www.linkedin.com/in/shaheenfarjo",
  linkedinDisplay: "/in/shaheenfarjo",
  github: "https://github.com/shaheenfarjo",
  instagram: "https://www.instagram.com/shaheen.farjo",
  x: "https://x.com/shaheenfarjo",
  aboutMe: "https://about.me/shaheenfarjo",
  // A14: the Google Calendar appointment page. The header's booking button opens
  // it, and it sits beside WhatsApp; setting it to "" falls back to WhatsApp only.
  bookingUrl: "https://calendar.app.google/rLjBtW85Arzydzmg6",
}

export const socials = [
  { name: "LinkedIn", url: contact.linkedin },
  { name: "GitHub", url: contact.github },
  { name: "Instagram", url: contact.instagram },
  { name: "X", url: contact.x },
]

export const coordinates = "33.31°N 44.36°E"
export const timeZone = "Asia/Baghdad"

// Sections the language switch can keep the reader on, across both pages
export const sectionIds = [
  "about",
  "work",
  "what",
  "consulting",
  "method",
  "services",
  "packages",
  "process",
  "faq",
  "chooser",
  "health-check",
  "break-even",
  "topics",
  "build",
  "prove",
  "grow",
  "contact",
] as const
export type SectionId = (typeof sectionIds)[number]

// A16: pre-filled messages end with the page they came from, so it's clear
// which part of the site a conversation started on
export function whatsappUrl(greeting: string, source?: string) {
  const text = source ? `${greeting}\n\n(shaheenfarjo.com${source})` : greeting
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function pagePath(lang: Lang, page: Page = "home") {
  const prefix = lang === "ar" ? "/ar" : ""
  if (page === "home") return prefix || "/"
  return `${prefix}/${page}`
}

// D6 / F8: remote-only period, announced from December 1 (dates in Baghdad time)
export const remotePeriod = { showFrom: "2026-12-01", until: "2027-05-15" }

type Package = {
  name: string
  // The package's name inside a sentence ("the Diagnostic"), for WhatsApp messages
  inSentence: string
  // Links to the sample report (A9)
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
  // Left out until confirmed, rather than guessed
  date?: string
  title: string
  arabic?: string
  href?: string
  role: string
  description: string
  tags: string[]
  // C5: only the fields Shaheen supplied for this project
  detail: { roleDates: string; context?: string; constraints?: string; did?: string; truth?: string }
  caseSlug?: CaseSlug
}

// A simple table: rendered as a table on wide screens and stacked rows on phones
export type Table = { title: string; columns: string[]; rows: string[][]; footer?: string[] }

export type CaseStudy = {
  title: string
  intro: string
  timeline?: { title: string; columns: [string, string]; rows: [string, string][] }
  decisions: { title: string; items: { title: string; body: string }[] }
  built?: { title: string; body: string }
  truth: { title: string; body: string }
  unproven: { title: string; body: string }
}

export type Content = {
  lang: Lang
  dir: "ltr" | "rtl"
  meta: Record<KnownPage, { title: string; description: string }> & { locale: string }
  name: string
  skipLink: string
  header: {
    nav: { label: string; id: SectionId }[]
    menu: string
    status: string
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
    location: string
    nameFirst: string
    nameRest: string
    role: string
    tagline: string
    cityAside: string
    business: string
    build: string
  }
  about: {
    label: string
    title: string
    lead: string
    body: string[]
    facts: { key: string; value: string }[]
  }
  work: { label: string; title: string; projects: Project[] }
  projectLabels: {
    roleDates: string
    context: string
    constraints: string
    did: string
    truth: string
    visit: string
    readCase: string
    back: string
    backToProject: string
  }
  cases: Record<CaseSlug, CaseStudy>
  sample: {
    banner: string
    title: string
    summaryTitle: string
    summary: string
    score: { key: string; value: string }
    next: { key: string; value: string }
    tables: Table[]
  }
  notes: { label: string; title: string; intro: string; items: { id: string; title: string; paragraphs: string[] }[] }
  what: { label: string; title: string; items: { title: string; body: string }[] }
  consultingSummary: {
    label: string
    title: string
    lead: string
    diagnostic: string
    fullOffer: string
    ask: string
  }
  consulting: {
    label: string
    title: string
    lead: string
    shortOnTime: string
    toPackages: string
    method: {
      label: string
      aside: string
      columns: { does: string; receive: string; length: string }
      steps: { number: string; name: string; does: string; receive: string; length: string }[]
    }
    services: {
      label: string
      aside: string
      items: { title: string; summary: string; examples: string[]; more?: Page }[]
      more: string
    }
    packages: {
      label: string
      aside: string
      columns: { for: string; length: string; receive: string; fee: string }
      items: Package[]
      feeLater: string
      optionsNote: string
      note: string
      ask: string
    }
    process: { label: string; aside: string; steps: { name: string; body: string }[] }
    // Link from the method section to the full guide
    methodGuide: string
    principles: { label: string; items: { title: string; body: string }[] }
    faq: { label: string; items: { question: string; answer: string }[] }
  }
  remote: string
  chooser: {
    label: string
    title: string
    question: string
    // Each answer points at a package by its position in consulting.packages
    options: { answer: string; pkg: number }[]
    result: string
    unsure: string
  }
  toolsPage: { label: string; title: string; lead: string }
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
  nowPage: { label: string; title: string; updated: string; items: { title: string; body: string }[] }
  privacyPage: { label: string; title: string; items: { title: string; body: string }[] }
  methodPage: {
    label: string
    title: string
    lead: string
    fields: Record<"goal" | "look" | "get" | "measured" | "yourPart", string>
    stages: {
      id: "build" | "prove" | "grow"
      number: string
      name: string
      length: string
      goal: string
      look: string
      get: string
      measured: string
      yourPart: string
    }[]
  }
  workshopsPage: {
    label: string
    title: string
    lead: string
    // Length, group size and fee
    facts: { key: string; value: string }[]
    // The fee range for structured data, in IQD
    fee: { min: number; max: number }
    includesLabel: string
    includes: string[]
    topicsLabel: string
    ask: string
  }
  footerLinks: Record<"workshops" | "notes" | "now" | "tools" | "privacy", string>
  marquee: { label: string; lines: [string[], string[]] }
  contactSection: {
    label: string
    title: string
    line: string
    button: string
    rows: { email: string; whatsapp: string; linkedin: string }
  }
  footer: { city: string; owner: string }
  notFound: { title: string; body: string; back: string }
}

// Links and tags shared by both languages
const projectFacts = {
  idea: { href: "https://theideaiq.com", tags: ["Venture", "Next.js", "Supabase"] },
  droid: { tags: ["AI", "Gemini", "Telegram"] },
  curator: { href: "https://theiraqicurator.org", tags: ["Next.js", "Supabase", "Turborepo"] },
  sal: { href: "https://auibsal.org" },
  // Start year only: whether Merchania is current is still to be confirmed
  merchania: { date: "2019", tags: ["E-commerce"] },
}

export const en: Content = {
  lang: "en",
  dir: "ltr",
  meta: {
    home: {
      title: "Shaheen K. Farjo — Entrepreneur, Business Developer & Consultant, Baghdad",
      description:
        "Entrepreneur, business developer and consultant in Baghdad. I build my own ventures and help small businesses in Iraq grow with a clear diagnosis, a practical plan and hands-on help.",
    },
    method: {
      title: "The Build · Prove · Grow Method — Shaheen K. Farjo",
      description:
        "How the consulting works at each stage: what we look at, what you get, how it's measured, and what's needed from you.",
    },
    "sample-diagnostic": {
      title: "Sample only: Diagnostic report format — Shaheen K. Farjo",
      description:
        "Sample only. This is a made-up business with made-up numbers, showing the format of a Diagnostic report.",
    },
    notes: {
      title: "Notes for owners — Shaheen K. Farjo",
      description:
        "Short, practical notes for small business owners: what one order earns before you pay for an ad, getting orders out of the chat, and keeping business money separate.",
    },
    workshops: {
      title: "Half-day Business Workshops for Owners and Teams in Iraq — Shaheen K. Farjo",
      description:
        "Half-day workshops on pricing for profit, selling on Instagram and WhatsApp, bookkeeping and cash flow, and SOPs. Up to 15 people, 400,000–600,000 IQD.",
    },
    tools: {
      title: "Free Business Health Check and Break-even Calculator (IQD) — Shaheen K. Farjo",
      description:
        "A five-minute health check for small businesses in Iraq, and a break-even calculator in Iraqi dinars. Free, private, and nothing is stored.",
    },
    now: {
      title: "Now — Shaheen K. Farjo",
      description: "What Shaheen K. Farjo is working on now: The IDEA, consulting, AUIB and SAL.",
    },
    privacy: {
      title: "Privacy — Shaheen K. Farjo",
      description: "No analytics, no cookies, and tools that store nothing: what shaheenfarjo.com keeps, and what it doesn't.",
    },
    consulting: {
      title: "Business Development Consulting for Small Businesses in Iraq — Shaheen K. Farjo",
      description:
        "A clear diagnosis, a practical plan and hands-on help for small businesses and Instagram and WhatsApp brands in Iraq. Start with the Diagnostic: 2–3 weeks, 1,000,000 IQD.",
    },
    locale: "en_US",
  },
  name: "Shaheen K. Farjo",
  skipLink: "Skip to content",
  header: {
    nav: [
      { label: "About", id: "about" },
      { label: "Work", id: "work" },
      { label: "What I do", id: "what" },
      { label: "Consulting", id: "consulting" },
      { label: "Contact", id: "contact" },
    ],
    menu: "Menu",
    status: "Open to new clients",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    switchLabel: "العربية",
    switchLang: "ar",
    book: "Book a free call",
    bookShort: "Book a call",
  },
  whatsapp: {
    home: "Hello Shaheen, I'd like to book a free 30-minute call about my business.",
    consulting: "Hello Shaheen, I read your consulting page and I'd like to book a free 30-minute call about my business.",
    package: "Hello Shaheen, I'm interested in {package}. Could we book a free 30-minute call about my business?",
    workshop: "Hello Shaheen, I'm interested in the workshop \"{workshop}\" for my team. Could we book a free 30-minute call about it?",
  },
  booking: "Pick a time on my calendar",
  hero: {
    location: "Baghdad, Iraq",
    nameFirst: "Shaheen",
    nameRest: "K. Farjo",
    role: "Entrepreneur — Business developer — Consultant",
    tagline: "Creating the things I wish existed in *Baghdad.*",
    cityAside: "بغداد",
    business: "I run a business",
    build: "See what I build",
  },
  about: {
    label: "About",
    title: "Global standards, *local roots*",
    lead: "I'm Shaheen, an entrepreneur, business developer and consultant in Baghdad. I build the products and platforms I wish my city already had, and I help other founders build theirs.",
    body: [
      "My work sits where business and technology meet. I can negotiate the partnership, shape the business model, and then sit down and write the code that ships it. That lets me take an idea from a conversation to a live product without losing anything in translation.",
      "Before working independently, I was a business developer and lead project consultant at Morshed BDC, where I led projects for Tqnyat al Hayat and Morabaa Software. Today I'm the founder and CEO of The IDEA, and I consult for a small number of businesses at a time.",
      "I'm also a BBA student in Entrepreneurship at the American University of Iraq – Baghdad (AUIB), where I founded the Society of Arts and Letters and lead it as president.",
    ],
    facts: [
      { key: "Based in", value: "Baghdad, Iraq" },
      { key: "Currently", value: "Building The IDEA · Consulting" },
      { key: "Focus", value: "Ventures · Business development · Product" },
      { key: "Previously", value: "Morshed BDC, May – November 2024" },
      { key: "Studying", value: "BBA in Entrepreneurship, AUIB" },
      { key: "Languages", value: "Arabic · English · French" },
    ],
  },
  work: {
    label: "Selected work",
    title: "Things I wish *existed*",
    projects: [
      {
        ...projectFacts.idea,
        slug: "the-idea",
        caseSlug: "the-idea",
        date: "2018 — Now",
        title: "The IDEA",
        arabic: "ايديا",
        role: "Founder & CEO",
        description:
          "One Pass to buy, rent, bid and share games, music, books, films and gear in Iraq, from The IDEA and from shops, delivered to your door.",
        detail: {
          roleDates: "Founder & CEO, 2018 to now.",
          context:
            "Young Iraqis want the world's best games, music, books, films, and gear, without the hassle. Buying them often means uncertain prices, dates, and condition.",
          constraints:
            "Every seller has to keep the same promises, and shops shouldn't need their own payment and delivery setup. It has to work in Arabic first and on phones.",
          did: "I shaped the business model and brand, and built the platform: the website, Store, Plus, Club, Pass, Partners for shops, Staff for the team, and Droid on Telegram.",
          truth: "theideaiq.com is live. Plus is not open yet.",
        },
      },
      {
        ...projectFacts.merchania,
        slug: "merchania",
        title: "Merchania",
        role: "Cofounder & CEO",
        description:
          "An e-commerce startup that grew to about $2,000 in monthly revenue and 20,000 monthly visitors, working with more than 80 Instagram influencers and more than 50 manufacturers.",
        detail: {
          roleDates: "Cofounder & CEO, 2019.",
          context: "An e-commerce startup that worked with product and accessory manufacturers around the world.",
          did: "I signed partnerships with more than 50 product and accessory manufacturers, and brought more than 80 Instagram influencers into the project.",
          truth: "It reached up to about $2,000 in monthly revenue and about 20,000 monthly visitors. It ran in 2019.",
        },
      },
      {
        ...projectFacts.droid,
        slug: "droid",
        date: "2022 — Now",
        title: "Droid",
        role: "Product & build",
        description:
          "A Telegram assistant powered by Google Gemini, part of The IDEA ecosystem. It meets people where they already are.",
        detail: {
          roleDates: "Product and build, 2022 to now.",
          context: "The IDEA's Club lives on Telegram, so help should be there too.",
          constraints:
            "It speaks Iraqi Arabic first. It helps and never sells, and it stays out of checkout, payments, invoices, legal pages, and serious messages.",
          did: "I built a Telegram bot for order updates, Bulbs, common questions, and help.",
          truth: "It runs as @theideaiq_bot.",
        },
      },
      {
        ...projectFacts.curator,
        slug: "the-iraqi-curator",
        date: "2026 — Now",
        title: "The Iraqi Curator",
        role: "Technology partner",
        description:
          "A Baghdad-born, bilingual archive of Iraqi art, essays, workshops and exhibitions, built and hosted by The IDEA as its technology partner.",
        detail: {
          roleDates: "Technology partner through The IDEA, 2026 to now.",
          context:
            "\u201cThe art class we didn't take at school\u201d: a Baghdad-born, bilingual archive of Iraqi art, essays, workshops, and exhibitions.",
          constraints: "Everything has to work in two languages.",
          did: "Through The IDEA as technology partner, I built and host the public site and the Teachers' Lounge, its staff area.",
          truth: "It's live at theiraqicurator.org, with a 3D museum room, audio guides, and calendar export.",
        },
      },
      {
        ...projectFacts.sal,
        slug: "sal",
        caseSlug: "sal",
        date: "2026 — Now",
        title: "AUIB Society of Arts and Letters",
        role: "Founder & president",
        description:
          "A student society for the arts and letters at the American University of Iraq – Baghdad. I founded it and lead it as president.",
        tags: ["Student society", "AUIB"],
        detail: {
          roleDates: "Founder and president, 2026 to now.",
          context: "A society to cultivate a culture of literature and creative expression across AUIB.",
          constraints: "Student time, no money of its own, and it must outlast its founder.",
          did: "I founded it, led its governance documents, and led the build of its platform at auibsal.org.",
          truth:
            "Its Constitution was ratified on October 13, 2026. It has six programs, a theater company, and a paper, Qirtas, launched on October 14, 2026.",
        },
      },
    ],
  },
  projectLabels: {
    roleDates: "Role and dates",
    context: "Context",
    constraints: "Constraints",
    did: "What I did",
    truth: "What's true so far",
    visit: "Visit",
    readCase: "Read the case study",
    back: "All work",
    backToProject: "Project summary",
  },
  cases: {
    sal: {
      title: "AUIB Society of Arts and Letters: from a handful of students to an *institution*",
      intro: "SAL began as a handful of students who wanted the campus to read, write, and make things together.",
      timeline: {
        title: "The timeline",
        columns: ["When", "What happened"],
        rows: [
          ["February 2026", "First brief, guidelines, and rubric for a campus literary journal"],
          ["Spring 2026", "The Typewriter Tour takes a typewriter around campus, collecting six-word stories"],
          ["September 2026", "Program proposals"],
          ["October 13, 2026", "Charter Day: the Constitution is ratified"],
          ["October 14, 2026", "Qirtas launches"],
        ],
      },
      decisions: {
        title: "The decisions that shaped it",
        items: [
          {
            title: "No money",
            body: "the Society holds no budget or account. Programs keep needs lists, and the Office of Student Life provides what it can.",
          },
          {
            title: "One platform",
            body: "the public site, members' area, and officers' administration are one app in English and Arabic.",
          },
          {
            title: "Editorial independence",
            body: "members' work is read blind, and I don't select work as Publisher.",
          },
          {
            title: "Built to outlast me",
            body: "every Council seat exists, procedures are written down, and I decide the handover before I leave for a semester abroad.",
          },
        ],
      },
      truth: {
        title: "What's true so far",
        body: "six programs, a theater company, and a paper. Edition 1's call closes December 3, 2026, and the first Qirtas Awards are planned for April 20, 2027.",
      },
      unproven: {
        title: "What's still unproven",
        body: "whether it runs well without me. My semester abroad will be the first real test.",
      },
    },
    "the-idea": {
      title: "The IDEA: one Pass, the same promises from *every seller*",
      intro:
        "The IDEA is built for young Iraqis who want games, music, books, films, and gear without the hassle. The hard part isn't listing products. It's making people trust the price, the date, and the condition.",
      decisions: {
        title: "The decisions that shaped it",
        items: [
          {
            title: "Five promises",
            body: "the price you see is the price you pay; we tell you when; the condition we describe, or your money back; leave any time; and a human answers.",
          },
          {
            title: "Honest prices",
            body: "a struck-through \u201cwas\u201d price appears only when that offer really sold at that price.",
          },
          { title: "Plain conditions", body: "four labels: New, Open box, Refurbished, and Used." },
          {
            title: "Shops in their own name",
            body: "they sell under their own names, while The IDEA collects as their agent and pays out weekly.",
          },
          { title: "One Pass", body: "one identity across Store, Plus, Club, and Partners." },
          {
            title: "Arabic first",
            body: "Iraqi Arabic on social and in the Club, starting with the brand line, اعلگها.",
          },
        ],
      },
      built: {
        title: "What I built",
        body: "the customer website, Partners for shops, Staff for the team, an API, and Droid on Telegram.",
      },
      truth: { title: "What's true so far", body: "theideaiq.com is live, and Plus is not open yet." },
      unproven: { title: "What's still unproven", body: "whether customers and shops will choose it at scale." },
    },
  },
  sample: {
    banner: "Sample only. This is a made-up business with made-up numbers, showing the format of a Diagnostic report.",
    title: "Diagnostic report (sample)",
    summaryTitle: "Executive summary",
    summary:
      "Dijla Coffee, a made-up Baghdad seller, has loyal customers and steady Instagram demand. Its growth is held back by unclear margins and orders lost at the door. Fixing the first two priorities within 3 months could add about 200,000 IQD a month in gross profit.",
    score: { key: "Overall health score", value: "2.25/5" },
    next: { key: "Recommended next step", value: "Growth Sprint, or M7 and I1 on their own." },
    tables: [
      {
        title: "Baseline",
        columns: ["Item", "Today", "Source"],
        rows: [
          ["Orders per month", "180", "Order chats, 6-month average"],
          ["Average order value", "28,000 IQD", "Sample of orders"],
          ["Monthly revenue", "About 5,040,000 IQD", "Orders × average value"],
          ["Gross margin per order", "9,000 IQD", "Supplier invoices (estimate)"],
          ["Repeat purchase rate", "18%", "Customer list (estimate)"],
          ["Refused deliveries", "9%", "Delivery receipts"],
        ],
      },
      {
        title: "Health scorecard",
        columns: ["Area", "Score", "Evidence"],
        rows: [
          ["Strategy and direction", "3", "Clear customer, no written targets"],
          ["Product and pricing", "2", "Two best sellers earn the lowest margin"],
          ["Brand and marketing", "3", "Consistent content, no sales tracking"],
          ["Sales and customer experience", "3", "Quick replies, no follow-up after purchase"],
          ["Operations and supply", "2", "Stock is counted by hand, with frequent stock-outs"],
          ["Finance and records", "1", "Business and personal money are mixed"],
          ["Team and management", "2", "Everything depends on the owner"],
          ["Legal and compliance (flag only)", "2", "Questions for a licensed professional"],
        ],
        footer: ["Average", "2.25", ""],
      },
      {
        title: "Top priorities and quick wins",
        columns: ["Priority", "Quick win", "Owner", "Cost", "Start", "Expected effect"],
        rows: [
          [
            "Cut refused deliveries",
            "Confirm each order on WhatsApp before dispatch",
            "Sales staff",
            "None",
            "Week 1",
            "From about 16 refused orders a month to 7: about 81,000 IQD",
          ],
          [
            "Fix best-seller pricing",
            "Raise two products by 2,000 IQD each, and watch demand",
            "Owner",
            "None",
            "Week 2",
            "About 120,000 IQD a month on 60 orders, if demand holds",
          ],
          ["Separate the money", "Open a separate cash book", "Owner", "None", "Week 1", "Monthly profit becomes visible"],
        ],
      },
      {
        title: "Roadmap",
        columns: ["Horizon", "Focus", "Modules"],
        rows: [
          ["0–3 months", "Margins and records", "M7 Financial model and pricing, I1 Systems setup"],
          ["3–6 months", "Reliable demand", "M4 Marketing strategy, I3 Social commerce setup"],
          ["6–12 months", "Repeat customers", "M5 Sales and customer experience, I4 Campaign launch"],
        ],
      },
    ],
  },
  notes: {
    label: "Notes",
    title: "Notes for *owners*",
    intro: "The numbers in these notes are examples, not client data.",
    items: [
      {
        id: "know-what-one-order-earns",
        title: "Before you pay for an ad, know what one order earns",
        paragraphs: [
          "Many small sellers set an ad budget before they know their profit per order. Do it the other way around.",
          "Say you sell something for 25,000 IQD. The product costs 15,000, and packaging and delivery cost 3,000. Each order leaves 7,000. A 350,000 IQD campaign then needs 50 extra orders just to break even.",
          "Now ask whether that's realistic. If you normally sell 40 orders a month, 50 extra is a big claim for one campaign. You may need a better price, a higher order value, or a smaller test.",
          "This takes five minutes, and it can save you a whole campaign budget.",
        ],
      },
      {
        id: "get-orders-out-of-the-chat",
        title: "Get your orders out of the chat",
        paragraphs: [
          "If your orders live only in WhatsApp and Instagram chats, you can't easily answer simple questions: How many orders came last month? Which product sold most? Who hasn't paid?",
          "You don't need software to start. Open one sheet with these columns: date, customer, phone, product, price, area, status, and notes.",
          "Add every order, the same day. Within a month, you'll start to see your best sellers and the areas that refuse delivery most. That's your first real business data.",
        ],
      },
      {
        id: "business-money-isnt-your-pocket",
        title: "Your business's money isn't your pocket",
        paragraphs: [
          "When you take cash from the till for lunch or pay a supplier from your own card, you lose the ability to know whether the business makes money.",
          "You can fix most of this with three steps. Keep a separate place for business money. Write down every amount in and out. Pay yourself a set amount, on a set day, instead of taking cash when you need it.",
          "It won't feel exciting. But at the end of the month, you'll have an honest answer to the most important question in your business: did we make a profit?",
        ],
      },
    ],
  },
  what: {
    label: "What I do",
    title: "From conversation to *product*",
    items: [
      {
        title: "Venture building",
        body: "Taking ideas from a napkin to a live product: the market, the model, the launch, and what comes after.",
      },
      {
        title: "Product & engineering",
        body: "I ship my own products with Next.js, TypeScript and Supabase, so plans stay grounded in what can actually be built.",
      },
      {
        title: "Arts and letters",
        body: "I founded the AUIB Society of Arts and Letters at the American University of Iraq – Baghdad, and lead it as president.",
      },
    ],
  },
  consultingSummary: {
    label: "Consulting",
    title: "A clear plan, and help *putting it to work.*",
    lead: "Partnerships, sales and growth plans: I do this for my own ventures, and for small businesses and Instagram and WhatsApp brands in Iraq through a fixed-fee consulting offer.",
    diagnostic:
      "Start with the Diagnostic: 2–3 weeks, 1,000,000 IQD. Credited in full toward any package signed within 30 days of the Diagnostic's acceptance.",
    fullOffer: "See the full offer",
    ask: "Ask about the Diagnostic",
  },
  consulting: {
    label: "Consulting",
    title: "I help small businesses grow *on purpose.*",
    lead: "For owners of small businesses and Instagram and WhatsApp brands in Iraq: a clear diagnosis, a practical plan, and hands-on help putting it to work.",
    shortOnTime: "Short on time?",
    toPackages: "Jump to the packages",
    method: {
      label: "The method",
      aside: "Build · Prove · Grow",
      columns: { does: "What I do", receive: "What you receive", length: "How long" },
      steps: [
        {
          number: "01",
          name: "Build",
          does: "We diagnose your business and design the plan together: what's holding you back, what to fix first, and what it's worth.",
          receive: "A written diagnosis, the problems ranked by impact, quick wins and a 12-month roadmap.",
          length: "2–3 weeks (the Diagnostic)",
        },
        {
          number: "02",
          name: "Prove",
          does: "We put the plan to work with your team and measure every change against where you started, so results are real, not promised.",
          receive: "Changes put in place with your team, each one measured against your starting point.",
          length: "Set in your proposal, stage by stage",
        },
        {
          number: "03",
          name: "*Grow*",
          does: "We keep what works, scale it, and stay on hand month to month so the momentum doesn't fade.",
          receive: "Weekly check-ins, monthly KPI reviews, or part-time hands-on help.",
          length: "Month to month",
        },
      ],
    },
    services: {
      label: "Services",
      aside: "Advice and hands-on help",
      more: "Workshop details",
      items: [
        {
          title: "Advise",
          summary: "Plans you can actually run.",
          examples: [
            "Business diagnostic",
            "Strategy and business model",
            "Market and competitor study",
            "Marketing strategy and 90-day content plan",
            "Financial model, pricing and break-even",
          ],
        },
        {
          title: "Implement",
          summary: "I do the work with your team.",
          examples: [
            "Order, stock and cash systems",
            "Pricing and offer rollout",
            "WhatsApp and Instagram shop setup",
            "Campaign launches",
            "SOPs, training and hiring",
          ],
        },
        {
          title: "Ongoing support",
          summary: "Someone in your corner every month.",
          examples: ["Monthly advisory retainer", "Part-time growth lead", "Office hours"],
        },
        {
          title: "Workshops",
          summary: "Practical half-day sessions for owners and teams.",
          more: "workshops",
          examples: [
            "Pricing for profit",
            "Selling on Instagram and WhatsApp",
            "Simple bookkeeping and cash flow",
            "Writing SOPs your team will follow",
          ],
        },
      ],
    },
    packages: {
      label: "Ways to start",
      aside: "Fixed fees, agreed in writing",
      columns: { for: "Who it's for", length: "Length", receive: "What you receive", fee: "Fee" },
      items: [
        {
          name: "Diagnostic",
          inSentence: "the Diagnostic",
          sample: "See a sample report",
          for: "Any owner who wants a clear picture before committing to more.",
          length: "2–3 weeks",
          receive: "A full review of your business, the problems ranked by impact, quick wins and a 12-month roadmap.",
          price: "1,000,000 IQD",
          amount: 1000000,
          priceNote: "Credited in full toward any package signed within 30 days of the Diagnostic's acceptance.",
          tag: "Start here",
        },
        {
          name: "Growth Sprint",
          inSentence: "the Growth Sprint",
          for: "Businesses ready to plan their next stage properly.",
          length: "8–10 weeks",
          receive: "Diagnostic, strategy, market study, marketing plan and financial model.",
          price: "From 4,500,000 IQD",
          amount: 4500000,
          from: true,
        },
        {
          name: "Launch Ready",
          inSentence: "the Launch Ready package",
          for: "Businesses that want the plan, and help setting it up.",
          length: "12–14 weeks",
          receive: "The Growth Sprint plus systems, shop setup and a launched campaign.",
          price: "From 7,500,000 IQD",
          amount: 7500000,
          from: true,
        },
        {
          name: "Full Business Plan",
          inSentence: "the Full Business Plan",
          for: "Founders preparing to present their business to investors or funders.",
          length: "12–16 weeks",
          receive: "Every plan, a complete business plan and an investor-ready pitch deck.",
          price: "From 8,250,000 IQD",
          amount: 8250000,
          from: true,
        },
        {
          name: "Monthly support",
          inSentence: "monthly support",
          for: "Owners who want someone in their corner every month.",
          length: "Monthly, 3-month minimum",
          receive: "Weekly check-ins, monthly KPI reviews, or part-time hands-on help.",
          price: "From 500,000 IQD a month",
          amount: 500000,
          from: true,
          monthly: true,
        },
      ],
      feeLater: "Fee shared after the free call",
      optionsNote:
        "After the free call, you get three written options. Each one is built from these packages and sized to your business, with a fixed fee, so you choose how far to go.",
      note: "Every engagement has a fixed fee agreed in writing before work starts.",
      ask: "Ask about this package",
    },
    methodGuide: "Read the full method guide",
    process: {
      label: "How it works",
      aside: "Your sign-off at each step",
      steps: [
        { name: "Free call", body: "30 minutes to understand your business and what you want from it." },
        {
          name: "Proposal",
          body: "Within 5 working days: three options built from these packages, each with a fixed fee, so you choose the scope.",
        },
        {
          name: "Work in stages",
          body: "Each stage ends with your sign-off before the next begins. No surprises.",
        },
        {
          name: "Handover and results",
          body: "A results report against your starting point, plus check-ins at 30 and 90 days.",
        },
      ],
    },
    principles: {
      label: "How I work with every client",
      items: [
        {
          title: "Your information stays *confidential.*",
          body: "It's used only for your work, during the engagement and for two years after.",
        },
        {
          title: "Your money and accounts *stay yours.*",
          body: "I work through access you grant and can remove, and I never hold your money or passwords.",
        },
        {
          title: "Results are reported *honestly.*",
          body: "Every number has a source, and I'm clear about what the work did and didn't cause.",
        },
      ],
    },
    faq: {
      label: "Common questions",
      items: [
        {
          question: "Who do you work with?",
          answer:
            "Small and early-stage businesses in Iraq with 1–20 people, especially brands that sell through Instagram, TikTok and WhatsApp.",
        },
        {
          question: "How much does it cost?",
          answer:
            "The Diagnostic is 1,000,000 IQD. Credited in full toward any package signed within 30 days of the Diagnostic's acceptance. Larger packages have fixed fees that depend on scope; you get three options in writing after the free call.",
        },
        {
          question: "Do you only give advice, or do you help implement?",
          answer: "Both. Many clients start with a plan and then ask me to help put it in place with their team.",
        },
        {
          question: "Do you work in Arabic?",
          answer: "Yes. Documents, contracts and meetings can be in Arabic, English or both.",
        },
        {
          question: "What do you need from me?",
          answer: "One decision-maker, access to your numbers (rough is fine), and a weekly 45-minute check-in.",
        },
        {
          question: "Can we work together remotely?",
          answer:
            "Yes. Advice and the Diagnostic can be done fully remotely. From January 24 to May 15, 2027, I'm taking remote work only.",
        },
        {
          question: "How soon can we start?",
          answer:
            "Book the free call; you'll get three written options within 5 working days, and work starts once you choose one and the fee is agreed in writing.",
        },
        {
          question: "I only sell on Instagram or WhatsApp. Is that a fit?",
          answer: "Yes. Brands that sell through Instagram, TikTok and WhatsApp are a main focus.",
        },
        {
          question: "How do payments work?",
          answer:
            "Fees are in IQD. The Diagnostic is paid in full on signing. The Growth Sprint is paid 40% on signing, 30% at the first review, and 30% on final acceptance. Launch Ready and the Full Business Plan are paid 30%, 25%, 25%, and 20% across their stages. Monthly support is paid monthly in advance, with a 3-month minimum. Paying in full up front takes 10% off. You pay ad budgets, platforms, and suppliers directly.",
        },
        {
          question: "Will you sign an NDA?",
          answer:
            "Yes. I use a short mutual NDA in Arabic and English that can be signed the same day. Under my engagement terms, your information stays confidential during the work and for 2 years after.",
        },
      ],
    },
  },
  remote:
    "From January 24 to May 15, 2027, I'm working remotely: advice and Diagnostics only, with no on-site work.",
  chooser: {
    label: "Package chooser",
    title: "Not sure where to *start?*",
    question: "What do you need most right now?",
    options: [
      { answer: "To understand what's holding my business back", pkg: 0 },
      { answer: "A full plan for my next stage", pkg: 1 },
      { answer: "The plan, and help setting it up", pkg: 2 },
      { answer: "A business plan and pitch deck for investors", pkg: 3 },
      { answer: "Someone to check in with every month", pkg: 4 },
    ],
    result: "Start with",
    unsure: "Still unsure? Start with the Diagnostic. Credited in full toward any package signed within 30 days of the Diagnostic's acceptance.",
  },
  toolsPage: {
    label: "Tools",
    title: "Free tools for *owners.*",
    lead: "Two quick tools for small business owners. They run in your browser and store nothing.",
  },
  healthCheck: {
    label: "Health check",
    title: "A five-minute *health check.*",
    intro:
      "Twelve plain statements about how your business runs. Answer each one honestly. At the end you get a short written result you can send me on WhatsApp if you'd like to talk it through.",
    assumptions:
      "A quick self-check, not a financial assessment or advice. It runs in your browser: nothing you choose is stored or sent unless you press the WhatsApp button.",
    answers: { yes: "Yes", partly: "Partly", no: "No" },
    areas: [
      {
        name: "Sales",
        statements: ["I know how many orders I got last month.", "I know which products or services bring in most of my sales."],
      },
      {
        name: "Pricing",
        statements: ["I know the profit on each product after all costs.", "I've reviewed my prices in the last six months."],
      },
      {
        name: "Cash",
        statements: [
          "I keep business money separate from personal money.",
          "I know how much cash the business needs to cover next month.",
        ],
      },
      {
        name: "Orders and stock",
        statements: ["Orders are recorded in one place, not only in chats.", "I know what's in stock without counting by hand."],
      },
      {
        name: "Team and processes",
        statements: ["Someone other than me could run the business for a week.", "The main tasks are written down."],
      },
      {
        name: "Marketing",
        statements: ["I post or advertise on a regular schedule.", "I know where most new customers find me."],
      },
    ],
    resultTitle: "Your result",
    score: "{score} out of {total}",
    weakest: "Start with: {areas}.",
    allGood: "No weak area stands out. A Diagnostic can still show what's worth improving next.",
    incomplete: "Answer all twelve statements to see your result.",
    send: "Send my result on WhatsApp",
    message: "Hello Shaheen, I did the health check on your site. Here's my result:",
    noScript:
      "With JavaScript off, the result can't be added up here. Count your answers (Yes = 2, Partly = 1, No = 0; 24 is the top score) and send me the areas that scored lowest.",
  },
  breakEven: {
    label: "Break-even calculator",
    title: "When does your business *cover its costs?*",
    intro: "Enter three numbers in Iraqi dinars to see how much you need to sell each month to cover your costs.",
    currency: "IQD",
    fields: {
      fixed: {
        label: "Fixed costs per month",
        hint: "Rent, salaries, subscriptions: costs that stay the same however much you sell.",
      },
      price: { label: "Average selling price per sale", hint: "What a customer pays for one order or product." },
      variable: { label: "Variable cost per sale", hint: "Product cost, packaging and delivery for that one sale." },
    },
    results: {
      units: "Sales needed each month",
      revenue: "Revenue needed each month",
      margin: "Each sale contributes",
    },
    empty: "Fill in all three numbers to see the result.",
    loss: "Each sale costs more than it brings in, so no number of sales covers your fixed costs. Look at the price and the variable cost first.",
    formula: "Break-even sales = fixed costs ÷ (price − variable cost)",
    assumptionsLabel: "Assumptions",
    assumptions: [
      "One average sale stands in for all your products.",
      "Costs stay the same from month to month.",
      "Taxes, loan repayments and your own salary aren't included unless you add them to fixed costs.",
      "This is an estimate, not financial advice. Nothing you enter is stored or sent.",
    ],
    noScript: "With JavaScript off, use the formula above with your own numbers.",
  },
  nowPage: {
    label: "Now",
    title: "What I'm doing *now*",
    updated: "Updated November 2026",
    items: [
      {
        title: "Building The IDEA",
        body: "One Pass to buy, rent, bid and share games, music, books, films and gear in Iraq, from The IDEA and from shops, delivered to your door.",
      },
      {
        title: "Developing The Iraqi Curator",
        body: "A Baghdad-born, bilingual archive of Iraqi art, essays, workshops and exhibitions, built and hosted by The IDEA as its technology partner.",
      },
      {
        title: "Consulting",
        body: "Working with a small number of businesses at a time. From January 24 to May 15, 2027: remote advice and Diagnostics only.",
      },
      { title: "Studying", body: "A BBA in Entrepreneurship at the American University of Iraq – Baghdad." },
      { title: "Leading SAL", body: "Founder and president of the AUIB Society of Arts and Letters." },
    ],
  },
  privacyPage: {
    label: "Privacy",
    title: "What this site *keeps.*",
    items: [
      {
        title: "No analytics, cookies or tracking",
        body: "There are no analytics scripts, no cookies and no ad trackers on this site.",
      },
      {
        title: "Your theme choice",
        body: "If you switch between light and dark mode, the choice is saved in your own browser (localStorage) so the site remembers it. It never leaves your device.",
      },
      {
        title: "The tools",
        body: "The health check and the break-even calculator run entirely in your browser. Nothing you choose or type is stored or sent. A result reaches me only if you press the WhatsApp button and send the message yourself.",
      },
      {
        title: "Links to other services",
        body: "WhatsApp, email, LinkedIn and the other links open those services, which have their own privacy policies.",
      },
      {
        title: "Hosting",
        body: "The site is hosted on Vercel, which keeps standard server logs, such as IP addresses, to run and protect the service.",
      },
      { title: "Fonts", body: "The IBM Plex fonts are served from this site, not from a third party." },
      { title: "Questions", body: "Email hello@shaheenfarjo.com." },
    ],
  },
  methodPage: {
    label: "The method",
    title: "Build · Prove · Grow, *step by step.*",
    lead: "What happens at each stage, what you get, and what I need from you.",
    fields: {
      goal: "Goal",
      look: "What we look at",
      get: "What you get",
      measured: "How it's measured",
      yourPart: "Your part",
    },
    stages: [
      {
        id: "build",
        number: "01",
        name: "Build",
        length: "2–3 weeks from receiving your data",
        goal: "Know exactly what's holding the business back, and what to fix first.",
        look: "Your data, sales channels, operations and finances, plus interviews with you, your team, 5–10 customers and 1–3 suppliers.",
        get: "An 8–12 page report with a health scorecard, the top problems, 1–3 quick wins and a 12-month roadmap, presented in a 60-minute meeting.",
        measured: "We record your starting numbers in each area. Every later change is measured against them.",
        yourPart: "Share the data on time, make people available for interviews, and give feedback on the draft within 7 days.",
      },
      {
        id: "prove",
        number: "02",
        name: "Prove",
        length: "Set in your proposal, stage by stage",
        goal: "Put the plan to work with your team, and show with real numbers that it's working.",
        look: "The changes from the roadmap, in the order we agreed.",
        get: "Changes put in place with your team. These can include order, stock and cash systems, pricing and offers, shop setup, campaign launches, and SOPs, training and hiring. Each stage ends with your sign-off. At handover, you get a results report against your starting point, plus check-ins at 30 and 90 days.",
        measured: "Every change against your starting point. Every number has a source, and I'm clear about what the work did and didn't cause.",
        yourPart: "One decision-maker, your team's time, access through roles you grant and can withdraw at any time, and combined comments within 7 days. You pay ad budgets, platforms and suppliers directly.",
      },
      {
        id: "grow",
        number: "03",
        name: "*Grow*",
        length: "Month after month",
        goal: "Keep what works, scale it, and keep the momentum.",
        look: "Your key numbers each month.",
        get: "A weekly 45-minute check-in and a monthly KPI review, with 6 hands-on days a month if you choose the part-time growth lead.",
        measured: "Monthly KPI reviews against your starting point.",
        yourPart: "Payment monthly in advance, with a 3-month minimum.",
      },
    ],
  },
  workshopsPage: {
    label: "Workshops",
    title: "Half-day workshops for *owners and teams.*",
    lead: "Practical half-day sessions for owners and teams, each with a bilingual handout and a follow-up summary.",
    facts: [
      { key: "Length", value: "Half day" },
      { key: "Group", value: "Up to 15 people" },
      { key: "Fee", value: "400,000\u2060–\u2060600,000 IQD" },
    ],
    fee: { min: 400000, max: 600000 },
    includesLabel: "Every workshop includes",
    includes: ["Preparation", "Delivery", "A bilingual handout", "A follow-up summary"],
    topicsLabel: "Topics",
    ask: "Ask about this workshop",
  },
  footerLinks: { workshops: "Workshops", notes: "Notes", now: "Now", tools: "Tools", privacy: "Privacy" },
  marquee: {
    label: "Toolkit & values",
    lines: [
      ["Strategy", "Business development", "Financial models", "Next.js", "TypeScript", "Supabase"],
      ["Integrity", "نزاهة", "Empathy", "تعاطف", "Vision", "رؤية", "Craft", "إتقان"],
    ],
  },
  contactSection: {
    label: "Contact",
    title: "Let's build *something.*",
    line: "A free 30-minute call is the easiest way to start, whether it's your business or a partnership.",
    button: "Message me on WhatsApp",
    rows: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn" },
  },
  footer: { city: "Baghdad", owner: "Shaheen K. Farjo" },
  notFound: {
    title: "This page doesn't exist *yet.*",
    body: "The link may be old, or the address mistyped.",
    back: "Back home",
  },
}

// Arabic: Modern Standard Arabic for headings, fees, promises and answers;
// Iraqi Arabic for the visitor's own WhatsApp messages and short conversational buttons.
export const ar: Content = {
  lang: "ar",
  dir: "rtl",
  meta: {
    home: {
      title: "شاهين ك. فرجو — رائد أعمال ومطوّر أعمال ومستشار، بغداد",
      description:
        "رائد أعمال ومطوّر أعمال ومستشار في بغداد. أبني مشاريعي الخاصة، وأساعد المشاريع الصغيرة في العراق على النمو بتشخيص واضح وخطة عملية ومساعدة فعلية في التنفيذ.",
    },
    method: {
      title: "منهجية نبني · نُثبت · ننمو — شاهين ك. فرجو",
      description: "كيف تسير الاستشارات في كل مرحلة: ما ننظر فيه، وما تحصل عليه، وكيف نقيس، وما المطلوب منك.",
    },
    "sample-diagnostic": {
      title: "عينة فقط: شكل تقرير التشخيص — شاهين ك. فرجو",
      description: "عينة فقط. هذا مشروع وهمي بأرقام وهمية، يوضح شكل تقرير التشخيص.",
    },
    notes: {
      title: "ملاحظات لأصحاب المشاريع — شاهين ك. فرجو",
      description:
        "ملاحظات عملية قصيرة لأصحاب المشاريع الصغيرة: كم يربحك الطلب الواحد قبل أن تدفع على إعلان، وإخراج الطلبات من المحادثات، وفصل أموال المشروع.",
    },
    workshops: {
      title: "ورش عمل لأصحاب المشاريع وفرقهم في العراق — شاهين ك. فرجو",
      description:
        "ورش عمل لنصف يوم عن التسعير من أجل الربح، والبيع عبر إنستغرام وواتساب، ومسك الدفاتر والتدفق النقدي، وكتابة إجراءات العمل. حتى 15 شخصًا، 400,000–600,000 دينار عراقي.",
    },
    tools: {
      title: "فحص صحة المشروع وحاسبة نقطة التعادل بالدينار العراقي — شاهين ك. فرجو",
      description:
        "فحص سريع لمشروعك في خمس دقائق، وحاسبة نقطة التعادل بالدينار العراقي للمشاريع الصغيرة في العراق. مجانية وخاصة، ولا يُحفظ أي شيء.",
    },
    now: {
      title: "الآن — شاهين ك. فرجو",
      description: "ما يعمل عليه شاهين ك. فرجو الآن: ايديا والاستشارات والدراسة وجمعية الفنون والآداب.",
    },
    privacy: {
      title: "الخصوصية — شاهين ك. فرجو",
      description: "لا إحصاءات ولا كوكيز، وأدوات لا تحفظ شيئًا: ما يحتفظ به موقع shaheenfarjo.com وما لا يحتفظ به.",
    },
    consulting: {
      title: "استشارات تطوير الأعمال للمشاريع الصغيرة في بغداد والعراق — شاهين ك. فرجو",
      description:
        "تشخيص واضح وخطة عملية ومساعدة فعلية في التنفيذ للمشاريع الصغيرة والعلامات التي تبيع عبر إنستغرام وواتساب في العراق. ابدأ بالتشخيص: 2–3 أسابيع، 1,000,000 دينار عراقي.",
    },
    locale: "ar_IQ",
  },
  name: "شاهين ك. فرجو",
  skipLink: "انتقل إلى المحتوى",
  header: {
    nav: [
      { label: "نبذة", id: "about" },
      { label: "أعمالي", id: "work" },
      { label: "ماذا أفعل", id: "what" },
      { label: "الاستشارات", id: "consulting" },
      { label: "تواصل", id: "contact" },
    ],
    menu: "القائمة",
    status: "متاح لعملاء جدد",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    switchLabel: "English",
    switchLang: "en",
    book: "احجز مكالمة مجانية",
    bookShort: "احجز مكالمة",
  },
  whatsapp: {
    home: "هلو شاهين، أريد أحجز مكالمة مجانية نص ساعة نحجي بيها عن شغلي.",
    consulting: "هلو شاهين، قريت صفحة الاستشارات وأريد أحجز مكالمة مجانية نص ساعة نحجي بيها عن شغلي.",
    package: "هلو شاهين، أريد أسأل عن {package} وأحجز مكالمة مجانية نص ساعة نحجي بيها عن شغلي.",
    workshop: "هلو شاهين، أريد أسأل عن ورشة «{workshop}» لفريقي وأحجز مكالمة مجانية نص ساعة نحجي بيها عنها.",
  },
  booking: "اختر موعدًا في تقويمي",
  hero: {
    location: "بغداد، العراق",
    nameFirst: "شاهين",
    nameRest: "ك. فرجو",
    role: "رائد أعمال — مطوّر أعمال — مستشار",
    tagline: "أصنع الأشياء التي تمنّيت لو كانت موجودة في *بغداد.*",
    cityAside: "Baghdad",
    business: "عندي مشروع",
    build: "شوف شغلي",
  },
  about: {
    label: "نبذة",
    title: "بمعايير عالمية *وجذور عراقية*",
    lead: "أنا شاهين، رائد أعمال ومطوّر أعمال ومستشار في بغداد. أبني المنتجات والمنصات التي تمنّيت أن تكون في مدينتي، وأساعد أصحاب المشاريع على بناء مشاريعهم.",
    body: [
      "عملي يجمع بين الأعمال والتكنولوجيا: أفاوض على الشراكة، وأصمّم نموذج العمل، ثم أكتب الشيفرة التي تطلقه. هذا ما يتيح لي نقل الفكرة من حديث إلى منتج حي من دون أن يضيع منها شيء.",
      "قبل العمل بشكل مستقل، عملت مطوّر أعمال ومستشارًا رئيسيًا للمشاريع في مرشد لتطوير الأعمال، حيث قدت مشاريع لشركتي تقنيات الحياة ومربع للبرمجيات. واليوم أنا المؤسس والرئيس التنفيذي لايديا، وأقدّم الاستشارات لعدد محدود من المشاريع في الوقت نفسه.",
      "وأدرس أيضًا بكالوريوس إدارة الأعمال، تخصص ريادة الأعمال، في الجامعة الأمريكية في العراق – بغداد، حيث أسّست جمعية الفنون والآداب وأرأسها.",
    ],
    facts: [
      { key: "المقر", value: "بغداد، العراق" },
      { key: "حاليًا", value: "أبني ايديا · الاستشارات" },
      { key: "التركيز", value: "المشاريع الريادية · تطوير الأعمال · المنتجات" },
      { key: "سابقًا", value: "مرشد لتطوير الأعمال، أيار – تشرين الثاني 2024" },
      { key: "الدراسة", value: "بكالوريوس إدارة الأعمال (ريادة الأعمال)، الجامعة الأمريكية في العراق – بغداد" },
      { key: "اللغات", value: "العربية · الإنكليزية · الفرنسية" },
    ],
  },
  work: {
    label: "أعمال مختارة",
    title: "أشياء تمنّيت لو كانت *موجودة*",
    projects: [
      {
        ...projectFacts.idea,
        slug: "the-idea",
        caseSlug: "the-idea",
        date: "2018 — الآن",
        title: "The IDEA",
        arabic: "ايديا",
        role: "المؤسس والرئيس التنفيذي",
        description: "پاس واحد لتشتري وتستأجر وتزايد وتشارك الألعاب والموسيقى والكتب والأفلام والأجهزة في العراق، من ايديا ومن المتاجر، مع التوصيل إلى بابك.",
        detail: {
          roleDates: "المؤسس والرئيس التنفيذي، منذ 2018 حتى الآن.",
          context:
            "يريد الشباب العراقيون أفضل ما في العالم من ألعاب وموسيقى وكتب وأفلام وأجهزة، من دون عناء. وشراؤها غالبًا يعني أسعارًا ومواعيد وحالة غير مؤكدة.",
          constraints:
            "على كل بائع أن يلتزم بالوعود نفسها، ولا ينبغي أن تحتاج المتاجر إلى نظام دفع وتوصيل خاص بها. ويجب أن تعمل بالعربية أولًا وعلى الهواتف.",
          did: "صمّمت نموذج العمل والعلامة التجارية، وبنيت المنصة: الموقع، وStore، وPlus، وClub، وپاس، وPartners للمتاجر، وStaff للفريق، والدرويد على تيليغرام.",
          truth: "theideaiq.com يعمل الآن. وPlus لم يُفتح بعد.",
        },
      },
      {
        ...projectFacts.merchania,
        slug: "merchania",
        title: "Merchania",
        role: "شريك مؤسس ورئيس تنفيذي",
        description:
          "شركة ناشئة في التجارة الإلكترونية نمت إلى نحو 2,000 دولار من الإيرادات و20,000 زائر شهريًا، بالتعاون مع أكثر من 80 مؤثرًا على إنستغرام وأكثر من 50 مصنّعًا.",
        detail: {
          roleDates: "شريك مؤسس ورئيس تنفيذي، 2019.",
          context: "شركة ناشئة في التجارة الإلكترونية عملت مع مصنّعي منتجات وإكسسوارات حول العالم.",
          did: "وقّعت شراكات مع أكثر من 50 مصنّعًا للمنتجات والإكسسوارات، وضممت أكثر من 80 مؤثرًا على إنستغرام إلى المشروع.",
          truth: "بلغت إيراداتها الشهرية نحو 2,000 دولار في أعلى مستوياتها، ونحو 20,000 زائر شهريًا. وعملت خلال عام 2019.",
        },
      },
      {
        ...projectFacts.droid,
        slug: "droid",
        date: "2022 — الآن",
        title: "Droid",
        arabic: "الدرويد",
        role: "منتج وتطوير",
        description: "مساعد على تيليغرام يعمل بنموذج Gemini من Google، وهو جزء من منظومة ايديا. يصل إلى الناس في التطبيق الذي يستخدمونه أصلًا.",
        detail: {
          roleDates: "منتج وتطوير، منذ 2022 حتى الآن.",
          context: "يعيش Club الخاص بايديا على تيليغرام، لذلك يجب أن تكون المساعدة هناك أيضًا.",
          constraints:
            "يتحدث بالعربية العراقية أولًا. يساعد ولا يبيع أبدًا، ويبتعد عن إتمام الشراء والمدفوعات والفواتير والصفحات القانونية والرسائل الجادة.",
          did: "بنيت بوتًا على تيليغرام لتحديثات الطلبات وBulbs والأسئلة الشائعة والمساعدة.",
          truth: "يعمل باسم @theideaiq_bot.",
        },
      },
      {
        ...projectFacts.curator,
        slug: "the-iraqi-curator",
        date: "2026 — الآن",
        title: "The Iraqi Curator",
        role: "شريك تقني",
        description:
          "أرشيف ثنائي اللغة وُلد في بغداد للفن العراقي والمقالات والورش والمعارض، تبنيه ايديا وتستضيفه بصفتها شريكه التقني.",
        detail: {
          roleDates: "شريك تقني من خلال ايديا، منذ 2026 حتى الآن.",
          context: "«حصة الفن التي لم نأخذها في المدرسة»: أرشيف ثنائي اللغة وُلد في بغداد للفن العراقي والمقالات والورش والمعارض.",
          constraints: "يجب أن يعمل كل شيء بلغتين.",
          did: "من خلال ايديا بصفتها الشريك التقني، بنيت الموقع العام وTeachers' Lounge، مساحة الفريق فيه، وأستضيفهما.",
          truth: "يعمل الآن على theiraqicurator.org، مع غرفة متحف ثلاثية الأبعاد، وأدلة صوتية، وتصدير إلى التقويم.",
        },
      },
      {
        ...projectFacts.sal,
        slug: "sal",
        caseSlug: "sal",
        date: "2026 — الآن",
        title: "جمعية الفنون والآداب",
        role: "المؤسس والرئيس",
        description: "جمعية طلابية للفنون والآداب في الجامعة الأمريكية في العراق – بغداد. أسّستها وأرأسها.",
        tags: ["جمعية طلابية", "AUIB"],
        detail: {
          roleDates: "المؤسس والرئيس، منذ 2026 حتى الآن.",
          context: "جمعية لتنمية ثقافة الأدب والتعبير الإبداعي في أرجاء الجامعة الأمريكية في العراق – بغداد.",
          constraints: "وقت الطلاب محدود، ولا تملك أموالًا خاصة بها، ويجب أن تستمر بعد مؤسسها.",
          did: "أسّستها، وقدت إعداد وثائق حوكمتها، وقدت بناء منصتها على auibsal.org.",
          truth:
            "صُدّق دستورها في 13 تشرين الأول 2026. ولديها ستة برامج، وفرقة مسرحية، وصحيفة اسمها «قرطاس» انطلقت في 14 تشرين الأول 2026.",
        },
      },
    ],
  },
  projectLabels: {
    roleDates: "الدور والتاريخ",
    context: "السياق",
    constraints: "القيود",
    did: "ما قمت به",
    truth: "ما تحقق حتى الآن",
    visit: "زيارة",
    readCase: "اقرأ دراسة الحالة",
    back: "كل الأعمال",
    backToProject: "ملخص المشروع",
  },
  cases: {
    sal: {
      title: "جمعية الفنون والآداب: من حفنة طلاب إلى *مؤسسة*",
      intro: "بدأت الجمعية بحفنة من الطلاب أرادوا أن يقرأ الحرم الجامعي ويكتب ويصنع الأشياء معًا.",
      timeline: {
        title: "المسار الزمني",
        columns: ["متى", "ما حدث"],
        rows: [
          ["شباط 2026", "أول موجز وإرشادات ومعايير تقييم لمجلة أدبية جامعية"],
          ["ربيع 2026", "جولة الآلة الكاتبة تحمل آلة كاتبة في أرجاء الحرم الجامعي لجمع قصص من ست كلمات"],
          ["أيلول 2026", "مقترحات البرامج"],
          ["13 تشرين الأول 2026", "يوم الميثاق: التصديق على الدستور"],
          ["14 تشرين الأول 2026", "انطلاق قرطاس"],
        ],
      },
      decisions: {
        title: "القرارات التي شكّلتها",
        items: [
          {
            title: "لا أموال",
            body: "لا تملك الجمعية ميزانية ولا حسابًا. تحتفظ البرامج بقوائم احتياجات، ويوفّر مكتب الحياة الطلابية ما يستطيع.",
          },
          {
            title: "منصة واحدة",
            body: "الموقع العام ومساحة الأعضاء وإدارة المسؤولين تطبيق واحد بالإنكليزية والعربية.",
          },
          {
            title: "استقلال تحريري",
            body: "تُقرأ أعمال الأعضاء من دون معرفة أصحابها، ولا أختار الأعمال بصفتي ناشرًا.",
          },
          {
            title: "مبنية لتستمر بعدي",
            body: "كل مقعد في المجلس موجود، والإجراءات مكتوبة، وأحدد خطة التسليم قبل أن أغادر لفصل دراسي في الخارج.",
          },
        ],
      },
      truth: {
        title: "ما تحقق حتى الآن",
        body: "ستة برامج، وفرقة مسرحية، وصحيفة. تُغلق دعوة العدد الأول في 3 كانون الأول 2026، ومن المقرر تنظيم أولى جوائز قرطاس في 20 نيسان 2027.",
      },
      unproven: {
        title: "ما لم يثبت بعد",
        body: "هل تعمل جيدًا من دوني. سيكون فصلي الدراسي في الخارج أول اختبار حقيقي.",
      },
    },
    "the-idea": {
      title: "ايديا: پاس واحد، والوعود نفسها من *كل بائع*",
      intro:
        "بُنيت ايديا للشباب العراقيين الذين يريدون الألعاب والموسيقى والكتب والأفلام والأجهزة من دون عناء. الجزء الصعب ليس عرض المنتجات، بل أن يثق الناس بالسعر والموعد والحالة.",
      decisions: {
        title: "القرارات التي شكّلتها",
        items: [
          {
            title: "خمسة وعود",
            body: "السعر الذي تراه هو السعر الذي تدفعه؛ ونخبرك متى؛ والحالة التي نصفها أو تسترد أموالك؛ ويمكنك المغادرة متى شئت؛ ويرد عليك إنسان.",
          },
          {
            title: "أسعار صادقة",
            body: "لا يظهر سعر «قبل» مشطوب إلا إذا بيع ذلك العرض فعلًا بذلك السعر.",
          },
          { title: "حالات واضحة", body: "أربع تسميات: جديد، ومفتوح العلبة، ومجدَّد، ومستعمل." },
          {
            title: "المتاجر بأسمائها",
            body: "تبيع المتاجر بأسمائها، بينما تحصّل ايديا المبالغ بصفتها وكيلًا عنها وتدفع لها أسبوعيًا.",
          },
          { title: "پاس واحد", body: "هوية واحدة عبر Store وPlus وClub وPartners." },
          {
            title: "العربية أولًا",
            body: "العربية العراقية على وسائل التواصل وفي Club، بدءًا من شعار العلامة: اعلگها.",
          },
        ],
      },
      built: {
        title: "ما بنيته",
        body: "موقع الزبائن، وPartners للمتاجر، وStaff للفريق، وواجهة برمجة تطبيقات (API)، والدرويد على تيليغرام.",
      },
      truth: { title: "ما تحقق حتى الآن", body: "theideaiq.com يعمل الآن، وPlus لم يُفتح بعد." },
      unproven: { title: "ما لم يثبت بعد", body: "هل سيختارها الزبائن والمتاجر على نطاق واسع." },
    },
  },
  sample: {
    banner: "عينة فقط. هذا مشروع وهمي بأرقام وهمية، يوضح شكل تقرير التشخيص.",
    title: "تقرير التشخيص (عينة)",
    summaryTitle: "الملخص التنفيذي",
    summary:
      "دجلة كوفي، بائع وهمي في بغداد، لديه زبائن أوفياء وطلب ثابت عبر إنستغرام. لكن نموه يتعطل بسبب هوامش غير واضحة وطلبات تضيع عند الباب. وقد يضيف إصلاح أول أولويتين خلال 3 أشهر نحو 200,000 دينار شهريًا إلى إجمالي الربح.",
    score: { key: "نتيجة الصحة الإجمالية", value: "2.25/5" },
    next: { key: "الخطوة التالية الموصى بها", value: "باقة النمو، أو M7 وI1 وحدهما." },
    tables: [
      {
        title: "نقطة البداية",
        columns: ["البند", "اليوم", "المصدر"],
        rows: [
          ["الطلبات شهريًا", "180", "محادثات الطلبات، متوسط 6 أشهر"],
          ["متوسط قيمة الطلب", "28,000 دينار", "عينة من الطلبات"],
          ["الإيرادات الشهرية", "نحو 5,040,000 دينار", "الطلبات × متوسط القيمة"],
          ["إجمالي هامش الطلب", "9,000 دينار", "فواتير الموردين (تقدير)"],
          ["نسبة الشراء المتكرر", "18%", "قائمة الزبائن (تقدير)"],
          ["التوصيلات المرفوضة", "9%", "إيصالات التوصيل"],
        ],
      },
      {
        title: "بطاقة التقييم",
        columns: ["المجال", "الدرجة", "الدليل"],
        rows: [
          ["الاستراتيجية والتوجه", "3", "زبون واضح، ولا أهداف مكتوبة"],
          ["المنتج والتسعير", "2", "المنتجان الأكثر مبيعًا يحققان أقل هامش"],
          ["العلامة والتسويق", "3", "محتوى منتظم، ولا تتبّع للمبيعات"],
          ["المبيعات وتجربة الزبون", "3", "ردود سريعة، ولا متابعة بعد الشراء"],
          ["العمليات والتوريد", "2", "يُعدّ المخزون يدويًا، مع نفاد متكرر"],
          ["المالية والسجلات", "1", "أموال المشروع مختلطة بالأموال الشخصية"],
          ["الفريق والإدارة", "2", "كل شيء يعتمد على صاحب المشروع"],
          ["القانون والامتثال (تنبيه فقط)", "2", "أسئلة لمختص مرخّص"],
        ],
        footer: ["المتوسط", "2.25", ""],
      },
      {
        title: "أهم الأولويات والمكاسب السريعة",
        columns: ["الأولوية", "المكسب السريع", "المسؤول", "الكلفة", "البدء", "الأثر المتوقع"],
        rows: [
          [
            "تقليل التوصيلات المرفوضة",
            "تأكيد كل طلب على واتساب قبل إرساله",
            "فريق المبيعات",
            "لا شيء",
            "الأسبوع 1",
            "من نحو 16 طلبًا مرفوضًا شهريًا إلى 7: نحو 81,000 دينار",
          ],
          [
            "تصحيح تسعير الأكثر مبيعًا",
            "رفع سعر منتجين بـ 2,000 دينار لكل منهما، ومراقبة الطلب",
            "صاحب المشروع",
            "لا شيء",
            "الأسبوع 2",
            "نحو 120,000 دينار شهريًا على 60 طلبًا، إذا بقي الطلب كما هو",
          ],
          ["فصل الأموال", "فتح دفتر نقد منفصل", "صاحب المشروع", "لا شيء", "الأسبوع 1", "يصبح الربح الشهري واضحًا"],
        ],
      },
      {
        title: "خارطة الطريق",
        columns: ["المدى", "التركيز", "الوحدات"],
        rows: [
          ["0–3 أشهر", "الهوامش والسجلات", "M7 النموذج المالي والتسعير، I1 تجهيز الأنظمة"],
          ["3–6 أشهر", "طلب موثوق", "M4 استراتيجية التسويق، I3 تجهيز التجارة عبر وسائل التواصل"],
          ["6–12 شهرًا", "زبائن متكررون", "M5 المبيعات وتجربة الزبون، I4 إطلاق حملة"],
        ],
      },
    ],
  },
  notes: {
    label: "ملاحظات",
    title: "ملاحظات *لأصحاب المشاريع*",
    intro: "الأرقام في هذه الملاحظات أمثلة، وليست بيانات عملاء.",
    items: [
      {
        id: "know-what-one-order-earns",
        title: "قبل أن تدفع على إعلان، اعرف كم يربحك الطلب الواحد",
        paragraphs: [
          "يحدد كثير من أصحاب المشاريع الصغيرة ميزانية الإعلان قبل أن يعرفوا ربح الطلب الواحد. افعلها بالعكس.",
          "لنفترض أنك تبيع منتجًا بـ 25,000 دينار. كلفة المنتج 15,000، وكلفة التغليف والتوصيل 3,000. يبقى لك من كل طلب 7,000. عندها تحتاج حملة بـ 350,000 دينار إلى 50 طلبًا إضافيًا لتغطي كلفتها فقط.",
          "اسأل نفسك الآن: هل هذا واقعي؟ إذا كنت تبيع عادةً 40 طلبًا في الشهر، فخمسون طلبًا إضافيًا رقم كبير على حملة واحدة. قد تحتاج إلى سعر أفضل، أو قيمة طلب أعلى، أو تجربة أصغر.",
          "هذه الحسبة تأخذ خمس دقائق، وقد توفر عليك ميزانية حملة كاملة.",
        ],
      },
      {
        id: "get-orders-out-of-the-chat",
        title: "أخرج طلباتك من المحادثات",
        paragraphs: [
          "إذا كانت طلباتك موجودة فقط في محادثات واتساب وإنستغرام، فلن تجيب بسهولة عن أسئلة بسيطة: كم طلبًا وصل الشهر الماضي؟ أي منتج بيع أكثر؟ من لم يدفع بعد؟",
          "لا تحتاج إلى برنامج لتبدأ. افتح جدولًا واحدًا بهذه الأعمدة: التاريخ، والزبون، والهاتف، والمنتج، والسعر، والمنطقة، والحالة، والملاحظات.",
          "أضف كل طلب في اليوم نفسه. وخلال شهر ستبدأ برؤية أكثر منتجاتك مبيعًا والمناطق التي ترفض التوصيل أكثر من غيرها. هذه أول بيانات حقيقية عن عملك.",
        ],
      },
      {
        id: "business-money-isnt-your-pocket",
        title: "أموال مشروعك ليست جيبك",
        paragraphs: [
          "عندما تأخذ من صندوق المشروع ثمن الغداء، أو تدفع لمورّد من بطاقتك الشخصية، تفقد القدرة على معرفة هل يربح مشروعك فعلًا.",
          "يمكنك إصلاح معظم ذلك بثلاث خطوات: خصص مكانًا منفصلًا لأموال المشروع، واكتب كل مبلغ يدخل ويخرج، وادفع لنفسك مبلغًا محددًا في يوم محدد بدلًا من الأخذ كلما احتجت.",
          "لن يبدو الأمر مثيرًا، لكنك ستحصل في نهاية الشهر على جواب صادق عن أهم سؤال في مشروعك: هل ربحنا؟",
        ],
      },
    ],
  },
  what: {
    label: "ماذا أفعل",
    title: "من الحديث إلى *المنتج*",
    items: [
      {
        title: "بناء المشاريع الريادية",
        body: "تحويل الفكرة من مسودة إلى منتج يعمل فعلًا: السوق، والنموذج، والإطلاق، وما بعده.",
      },
      {
        title: "المنتجات والبرمجة",
        body: "أطلق منتجاتي بنفسي باستخدام Next.js وTypeScript وSupabase، فتبقى الخطط واقعية بما يمكن بناؤه فعلًا.",
      },
      {
        title: "الفنون والآداب",
        body: "أسّست جمعية الفنون والآداب في الجامعة الأمريكية في العراق – بغداد، وأرأسها اليوم.",
      },
    ],
  },
  consultingSummary: {
    label: "الاستشارات",
    title: "خطة واضحة، ومساعدة *في تنفيذها.*",
    lead: "الشراكات والمبيعات وخطط النمو: أعمل عليها في مشاريعي، وأقدّمها للمشاريع الصغيرة والعلامات التي تبيع عبر إنستغرام وواتساب في العراق، باستشارات بأتعاب ثابتة.",
    diagnostic: "ابدأ بالتشخيص: 2–3 أسابيع، 1,000,000 دينار عراقي. يُخصم المبلغ بالكامل من أي باقة تُوقَّع خلال 30 يومًا من قبول التشخيص.",
    fullOffer: "اطّلع على العرض كاملًا",
    ask: "استفسر عن التشخيص",
  },
  consulting: {
    label: "الاستشارات",
    title: "أساعد المشاريع الصغيرة على النمو *بخطة واضحة.*",
    lead: "لأصحاب المشاريع الصغيرة والعلامات التي تبيع عبر إنستغرام وواتساب في العراق: تشخيص واضح، وخطة عملية، ومساعدة فعلية في تنفيذها.",
    shortOnTime: "ما عندك وقت؟",
    toPackages: "شوف الباقات مباشرة",
    method: {
      label: "المنهجية",
      aside: "نبني · نُثبت · ننمو",
      columns: { does: "ما أقوم به", receive: "ما تحصل عليه", length: "المدة" },
      steps: [
        {
          number: "01",
          name: "نبني",
          does: "نشخّص عملك ونصمّم الخطة معًا: ما الذي يعيقك، وما الذي يجب إصلاحه أولًا، وما قيمته.",
          receive: "تشخيص مكتوب، وترتيب المشكلات حسب أثرها، ومكاسب سريعة، وخارطة طريق لمدة 12 شهرًا.",
          length: "2–3 أسابيع (التشخيص)",
        },
        {
          number: "02",
          name: "نُثبت",
          does: "ننفّذ الخطة مع فريقك ونقيس كل تغيير مقارنة بنقطة البداية، لتكون النتائج حقيقية لا وعودًا.",
          receive: "تغييرات تُنفَّذ مع فريقك، ويُقاس كل منها بالمقارنة مع نقطة البداية.",
          length: "تُحدَّد في العرض، مرحلة بمرحلة",
        },
        {
          number: "03",
          name: "*ننمو*",
          does: "نحافظ على ما ينجح ونوسّعه، ونبقى إلى جانبك شهريًا حتى لا يتوقف الزخم.",
          receive: "متابعة أسبوعية، ومراجعة شهرية للمؤشرات، أو مساعدة عملية بدوام جزئي.",
          length: "شهرًا بعد شهر",
        },
      ],
    },
    services: {
      label: "الخدمات",
      aside: "مشورة ومساعدة عملية",
      more: "تفاصيل الورش",
      items: [
        {
          title: "الاستشارة",
          summary: "خطط يمكنك تنفيذها فعلًا.",
          examples: [
            "تشخيص العمل",
            "الاستراتيجية ونموذج العمل",
            "دراسة السوق والمنافسين",
            "استراتيجية التسويق وخطة محتوى لـ 90 يومًا",
            "النموذج المالي والتسعير ونقطة التعادل",
          ],
        },
        {
          title: "التنفيذ",
          summary: "أعمل مع فريقك على أرض الواقع.",
          examples: [
            "أنظمة الطلبات والمخزون والنقد",
            "تطبيق الأسعار والعروض الجديدة",
            "تجهيز متجر واتساب وإنستغرام",
            "إطلاق الحملات",
            "إجراءات العمل والتدريب والتوظيف",
          ],
        },
        {
          title: "الدعم المستمر",
          summary: "شخص يتابع معك كل شهر.",
          examples: ["دعم استشاري شهري", "مدير نمو بدوام جزئي", "ساعات استشارة"],
        },
        {
          title: "ورش العمل",
          summary: "جلسات عملية لنصف يوم لأصحاب المشاريع وفرقهم.",
          more: "workshops",
          examples: [
            "التسعير من أجل الربح",
            "البيع عبر إنستغرام وواتساب",
            "مسك الدفاتر والتدفق النقدي ببساطة",
            "كتابة إجراءات عمل يلتزم بها فريقك",
          ],
        },
      ],
    },
    packages: {
      label: "طرق البدء",
      aside: "أتعاب ثابتة يُتفق عليها كتابيًا",
      columns: { for: "لمن", length: "المدة", receive: "ما تحصل عليه", fee: "الأتعاب" },
      items: [
        {
          name: "التشخيص",
          inSentence: "التشخيص",
          sample: "شاهد عينة من التقرير",
          for: "لأي صاحب مشروع يريد صورة واضحة قبل أن يلتزم بالمزيد.",
          length: "2–3 أسابيع",
          receive: "مراجعة شاملة لعملك، وترتيب المشكلات حسب أثرها، ومكاسب سريعة، وخارطة طريق لمدة 12 شهرًا.",
          price: "1,000,000 دينار عراقي",
          amount: 1000000,
          priceNote: "يُخصم المبلغ بالكامل من أي باقة تُوقَّع خلال 30 يومًا من قبول التشخيص.",
          tag: "ابدأ من هنا",
        },
        {
          name: "باقة النمو",
          inSentence: "باقة النمو",
          for: "للمشاريع المستعدة لتخطيط مرحلتها التالية بشكل صحيح.",
          length: "8–10 أسابيع",
          receive: "التشخيص والاستراتيجية ودراسة السوق وخطة التسويق والنموذج المالي.",
          price: "ابتداءً من 4,500,000 دينار عراقي",
          amount: 4500000,
          from: true,
        },
        {
          name: "باقة الإطلاق",
          inSentence: "باقة الإطلاق",
          for: "للمشاريع التي تريد الخطة، ومن يساعدها في تجهيزها.",
          length: "12–14 أسبوعًا",
          receive: "باقة النمو مع تجهيز الأنظمة والمتجر وإطلاق حملة.",
          price: "ابتداءً من 7,500,000 دينار عراقي",
          amount: 7500000,
          from: true,
        },
        {
          name: "خطة العمل الكاملة",
          inSentence: "خطة العمل الكاملة",
          for: "لأصحاب المشاريع الذين يستعدون لعرض مشروعهم على مستثمرين أو جهات تمويل.",
          length: "12–16 أسبوعًا",
          receive: "جميع الخطط، وخطة عمل متكاملة، وعرض جاهز للمستثمرين.",
          price: "ابتداءً من 8,250,000 دينار عراقي",
          amount: 8250000,
          from: true,
        },
        {
          name: "الدعم الشهري",
          inSentence: "الدعم الشهري",
          for: "لأصحاب المشاريع الذين يريدون من يقف إلى جانبهم كل شهر.",
          length: "شهريًا، بحد أدنى 3 أشهر",
          receive: "متابعة أسبوعية، ومراجعة شهرية للمؤشرات، أو مساعدة عملية بدوام جزئي.",
          price: "ابتداءً من 500,000 دينار عراقي شهريًا",
          amount: 500000,
          from: true,
          monthly: true,
        },
      ],
      feeLater: "تُحدَّد الأتعاب بعد المكالمة المجانية",
      optionsNote:
        "بعد المكالمة المجانية تصلك ثلاثة خيارات مكتوبة، كل منها مبني على هذه الباقات ومناسب لحجم عملك، بأتعاب ثابتة، لتختار ما يناسبك.",
      note: "لكل عمل أتعاب ثابتة يُتفق عليها كتابيًا قبل البدء.",
      ask: "استفسر عن هذه الباقة",
    },
    methodGuide: "اقرأ دليل المنهجية كاملًا",
    process: {
      label: "كيف نعمل",
      aside: "موافقتك عند كل خطوة",
      steps: [
        { name: "مكالمة مجانية", body: "30 دقيقة لفهم عملك وما تريد تحقيقه." },
        {
          name: "العرض",
          body: "خلال 5 أيام عمل: ثلاثة خيارات مبنية على هذه الباقات، لكل منها أتعاب ثابتة، لتختار النطاق المناسب.",
        },
        { name: "العمل على مراحل", body: "تنتهي كل مرحلة بموافقتك قبل بدء التالية. لا مفاجآت." },
        { name: "التسليم والنتائج", body: "تقرير نتائج مقارنة بنقطة البداية، ومتابعة بعد 30 و90 يومًا." },
      ],
    },
    principles: {
      label: "كيف أعمل مع كل عميل",
      items: [
        { title: "معلوماتك *سرية.*", body: "تُستخدم لعملك فقط، أثناء العمل ولمدة سنتين بعده." },
        {
          title: "أموالك وحساباتك *ملكك.*",
          body: "أعمل عبر صلاحيات تمنحها وتستطيع سحبها، ولا أحتفظ بأموالك أو كلمات المرور.",
        },
        { title: "نتائج تُعرض *بصدق.*", body: "لكل رقم مصدر، وأوضح ما الذي حققه العمل وما لم يحققه." },
      ],
    },
    faq: {
      label: "أسئلة شائعة",
      items: [
        {
          question: "مع من تعمل؟",
          answer:
            "مع المشاريع الصغيرة والناشئة في العراق التي يعمل فيها من 1 إلى 20 شخصًا، وخاصة العلامات التي تبيع عبر إنستغرام وتيك توك وواتساب.",
        },
        {
          question: "كم التكلفة؟",
          answer:
            "التشخيص بـ 1,000,000 دينار عراقي. يُخصم المبلغ بالكامل من أي باقة تُوقَّع خلال 30 يومًا من قبول التشخيص. أما الباقات الأكبر فلها أتعاب ثابتة حسب النطاق، وتصلك ثلاثة خيارات مكتوبة بعد المكالمة المجانية.",
        },
        {
          question: "هل تقدّم المشورة فقط أم تساعد في التنفيذ؟",
          answer: "كلاهما. يبدأ كثير من العملاء بالخطة ثم يطلبون مساعدتي في تطبيقها مع فريقهم.",
        },
        {
          question: "هل تعمل باللغة العربية؟",
          answer: "نعم. يمكن أن تكون الوثائق والعقود والاجتماعات بالعربية أو الإنكليزية أو كلتيهما.",
        },
        {
          question: "ماذا تحتاج مني؟",
          answer: "صاحب قرار واحد، والاطلاع على أرقامك (ولو تقريبية)، واجتماع متابعة أسبوعي لمدة 45 دقيقة.",
        },
        {
          question: "هل يمكن أن نعمل عن بُعد؟",
          answer: "نعم. يمكن تقديم الاستشارات والتشخيص عن بُعد بالكامل. ومن 24 كانون الثاني إلى 15 أيار 2027 أعمل عن بُعد فقط.",
        },
        {
          question: "متى يمكن أن نبدأ؟",
          answer:
            "احجز المكالمة المجانية، وتصلك ثلاثة خيارات مكتوبة خلال 5 أيام عمل، ويبدأ العمل بعد أن تختار أحدها ونتفق على الأتعاب كتابيًا.",
        },
        {
          question: "أبيع عبر إنستغرام أو واتساب فقط. هل يناسبني هذا؟",
          answer: "نعم. العلامات التي تبيع عبر إنستغرام وتيك توك وواتساب من أهم من أعمل معهم.",
        },
        {
          question: "كيف يتم الدفع؟",
          answer:
            "الأتعاب بالدينار العراقي. يُدفع التشخيص كاملًا عند التوقيع. وتُدفع باقة النمو 40% عند التوقيع، و30% عند المراجعة الأولى، و30% عند القبول النهائي. أما باقة الإطلاق وخطة العمل الكاملة فتُدفعان 30% و25% و25% و20% على مراحلهما. ويُدفع الدعم الشهري مقدمًا كل شهر، بحد أدنى 3 أشهر. والدفع الكامل مقدمًا يمنحك خصم 10%. وتدفع أنت ميزانيات الإعلانات والمنصات والموردين مباشرةً.",
        },
        {
          question: "هل توقّع اتفاقية عدم إفصاح؟",
          answer:
            "نعم. أستخدم اتفاقية قصيرة متبادلة بالعربية والإنكليزية يمكن توقيعها في اليوم نفسه. وبموجب شروط التعاقد، تبقى معلوماتك سرية أثناء العمل ولمدة سنتين بعده.",
        },
      ],
    },
  },
  remote: "من 24 كانون الثاني إلى 15 أيار 2027 أعمل عن بُعد: استشارات وتشخيص فقط، من دون حضور ميداني.",
  chooser: {
    label: "اختيار الباقة",
    title: "ما تعرف من وين *تبدي؟*",
    question: "ما أكثر ما تحتاجه الآن؟",
    options: [
      { answer: "أن أفهم ما الذي يعيق عملي", pkg: 0 },
      { answer: "خطة كاملة لمرحلتي القادمة", pkg: 1 },
      { answer: "الخطة، ومن يساعدني في تجهيزها", pkg: 2 },
      { answer: "خطة عمل وعرض للمستثمرين", pkg: 3 },
      { answer: "من يتابع معي كل شهر", pkg: 4 },
    ],
    result: "ابدأ بـ",
    unsure: "ما زلت محتارًا؟ ابدأ بالتشخيص. يُخصم المبلغ بالكامل من أي باقة تُوقَّع خلال 30 يومًا من قبول التشخيص.",
  },
  toolsPage: {
    label: "الأدوات",
    title: "أدوات مجانية *لأصحاب المشاريع.*",
    lead: "أداتان سريعتان لأصحاب المشاريع الصغيرة. تعملان داخل متصفحك ولا تحفظان أي شيء.",
  },
  healthCheck: {
    label: "فحص صحة المشروع",
    title: "فحص سريع لمشروعك في *خمس دقائق.*",
    intro:
      "اثنتا عشرة عبارة بسيطة عن طريقة سير عملك. أجب عن كل منها بصدق، وفي النهاية تحصل على نتيجة مكتوبة قصيرة يمكنك إرسالها لي على واتساب إذا أردت أن نناقشها.",
    assumptions: "فحص ذاتي سريع، وليس تقييمًا ماليًا أو نصيحة. يعمل داخل متصفحك: لا يُحفظ أي شيء تختاره ولا يُرسل إلا إذا ضغطت زر واتساب.",
    answers: { yes: "نعم", partly: "جزئيًا", no: "لا" },
    areas: [
      { name: "المبيعات", statements: ["أعرف عدد الطلبات التي وصلتني الشهر الماضي.", "أعرف أي المنتجات أو الخدمات تجلب معظم مبيعاتي."] },
      { name: "التسعير", statements: ["أعرف الربح من كل منتج بعد احتساب جميع التكاليف.", "راجعت أسعاري خلال الأشهر الستة الماضية."] },
      { name: "السيولة", statements: ["أفصل أموال المشروع عن أموالي الشخصية.", "أعرف كم يحتاج المشروع من سيولة لتغطية الشهر القادم."] },
      { name: "الطلبات والمخزون", statements: ["تُسجَّل الطلبات في مكان واحد، لا في المحادثات فقط.", "أعرف ما في المخزون من دون عدّه يدويًا."] },
      { name: "الفريق والإجراءات", statements: ["يستطيع شخص غيري إدارة المشروع لمدة أسبوع.", "المهام الأساسية مكتوبة."] },
      { name: "التسويق", statements: ["أنشر أو أعلن وفق جدول منتظم.", "أعرف من أين يأتي معظم زبائني الجدد."] },
    ],
    resultTitle: "نتيجتك",
    score: "{score} من {total}",
    weakest: "ابدأ من: {areas}.",
    allGood: "لا تظهر نقطة ضعف واضحة. ومع ذلك يمكن للتشخيص أن يحدد ما يستحق التحسين بعد ذلك.",
    incomplete: "أجب عن العبارات الاثنتي عشرة لترى نتيجتك.",
    send: "أرسل نتيجتي على واتساب",
    message: "هلو شاهين، سويت فحص صحة المشروع بموقعك، وهاي نتيجتي:",
    noScript:
      "مع تعطيل JavaScript لا يمكن حساب النتيجة هنا. احسب إجاباتك (نعم = 2، جزئيًا = 1، لا = 0؛ وأعلى نتيجة 24) وأرسل لي المجالات الأقل نتيجة.",
  },
  breakEven: {
    label: "حاسبة نقطة التعادل",
    title: "كم تبيع حتى *تغطي تكاليفك؟*",
    intro: "أدخل ثلاثة أرقام بالدينار العراقي لترى كم تحتاج أن تبيع كل شهر لتغطية تكاليفك.",
    currency: "دينار",
    fields: {
      fixed: { label: "التكاليف الثابتة شهريًا", hint: "الإيجار والرواتب والاشتراكات: تكاليف لا تتغير مهما بعت." },
      price: { label: "متوسط سعر البيع للطلب الواحد", hint: "ما يدفعه الزبون مقابل طلب أو منتج واحد." },
      variable: { label: "التكلفة المتغيرة للطلب الواحد", hint: "تكلفة المنتج والتغليف والتوصيل لذلك الطلب." },
    },
    results: {
      units: "عدد المبيعات المطلوبة شهريًا",
      revenue: "الإيرادات المطلوبة شهريًا",
      margin: "يساهم كل طلب بـ",
    },
    empty: "املأ الأرقام الثلاثة لترى النتيجة.",
    loss: "كل عملية بيع تكلّف أكثر مما تجلبه، لذلك لن يغطي أي عدد من المبيعات تكاليفك الثابتة. ابدأ بمراجعة السعر والتكلفة المتغيرة.",
    formula: "مبيعات التعادل = التكاليف الثابتة ÷ (السعر − التكلفة المتغيرة)",
    assumptionsLabel: "الافتراضات",
    assumptions: [
      "يمثّل متوسط الطلب الواحد جميع منتجاتك.",
      "تبقى التكاليف ثابتة من شهر لآخر.",
      "لا تشمل الحسبة الضرائب وأقساط القروض وراتبك الشخصي إلا إذا أضفتها إلى التكاليف الثابتة.",
      "هذا تقدير وليس نصيحة مالية. لا يُحفظ أي شيء تدخله ولا يُرسل.",
    ],
    noScript: "مع تعطيل JavaScript استخدم المعادلة أعلاه بأرقامك.",
  },
  nowPage: {
    label: "الآن",
    title: "ما أعمل عليه *الآن*",
    updated: "آخر تحديث: تشرين الثاني 2026",
    items: [
      {
        title: "أبني ايديا",
        body: "پاس واحد لتشتري وتستأجر وتزايد وتشارك الألعاب والموسيقى والكتب والأفلام والأجهزة في العراق، من ايديا ومن المتاجر، مع التوصيل إلى بابك.",
      },
      {
        title: "أطوّر The Iraqi Curator",
        body: "أرشيف ثنائي اللغة وُلد في بغداد للفن العراقي والمقالات والورش والمعارض، تبنيه ايديا وتستضيفه بصفتها شريكه التقني.",
      },
      {
        title: "الاستشارات",
        body: "أعمل مع عدد محدود من المشاريع في الوقت نفسه. من 24 كانون الثاني إلى 15 أيار 2027: استشارات وتشخيص عن بُعد فقط.",
      },
      { title: "الدراسة", body: "بكالوريوس إدارة الأعمال، تخصص ريادة الأعمال، في الجامعة الأمريكية في العراق – بغداد." },
      { title: "جمعية الفنون والآداب", body: "مؤسس جمعية الفنون والآداب في الجامعة الأمريكية في العراق – بغداد ورئيسها." },
    ],
  },
  privacyPage: {
    label: "الخصوصية",
    title: "ما يحتفظ به هذا *الموقع.*",
    items: [
      {
        title: "لا إحصاءات ولا كوكيز ولا تتبّع",
        body: "لا توجد في هذا الموقع أدوات إحصاء ولا ملفات تعريف الارتباط (كوكيز) ولا أدوات تتبّع إعلانية.",
      },
      {
        title: "اختيارك للمظهر",
        body: "إذا بدّلت بين الوضع الفاتح والداكن، يُحفظ اختيارك في متصفحك (localStorage) ليتذكره الموقع، ولا يغادر جهازك أبدًا.",
      },
      {
        title: "الأدوات",
        body: "يعمل فحص صحة المشروع وحاسبة نقطة التعادل بالكامل داخل متصفحك. لا يُحفظ أي شيء تختاره أو تكتبه ولا يُرسل. لا تصلني النتيجة إلا إذا ضغطت زر واتساب وأرسلت الرسالة بنفسك.",
      },
      {
        title: "روابط لخدمات أخرى",
        body: "تفتح روابط واتساب والبريد الإلكتروني ولينكدإن وغيرها تلك الخدمات، ولكل منها سياسة خصوصية خاصة بها.",
      },
      {
        title: "الاستضافة",
        body: "الموقع مستضاف على Vercel، التي تحتفظ بسجلات خادم اعتيادية، مثل عناوين IP، لتشغيل الخدمة وحمايتها.",
      },
      { title: "الخطوط", body: "تُحمَّل خطوط IBM Plex من هذا الموقع نفسه، لا من طرف ثالث." },
      { title: "أسئلة", body: "راسلني على hello@shaheenfarjo.com." },
    ],
  },
  methodPage: {
    label: "المنهجية",
    title: "نبني · نُثبت · ننمو، *خطوة بخطوة.*",
    lead: "ما يحدث في كل مرحلة، وما تحصل عليه، وما أحتاجه منك.",
    fields: {
      goal: "الهدف",
      look: "ما ننظر فيه",
      get: "ما تحصل عليه",
      measured: "كيف نقيس",
      yourPart: "دورك",
    },
    stages: [
      {
        id: "build",
        number: "01",
        name: "نبني",
        length: "2–3 أسابيع من استلام بياناتك",
        goal: "أن تعرف بدقة ما الذي يعيق عملك، وما الذي يجب إصلاحه أولًا.",
        look: "بياناتك وقنوات المبيعات والعمليات والمالية، إضافة إلى مقابلات معك ومع فريقك و5–10 عملاء و1–3 موردين.",
        get: "تقرير من 8–12 صفحة يتضمن بطاقة تقييم، وأهم المشكلات، و1–3 مكاسب سريعة، وخارطة طريق لمدة 12 شهرًا، يُعرض في اجتماع مدته 60 دقيقة.",
        measured: "نسجّل أرقامك في كل مجال عند البداية، ونقيس كل تغيير لاحق بالمقارنة معها.",
        yourPart: "تقديم البيانات في وقتها، وإتاحة الأشخاص للمقابلات، وإرسال ملاحظاتك على المسودة خلال 7 أيام.",
      },
      {
        id: "prove",
        number: "02",
        name: "نُثبت",
        length: "تُحدَّد في العرض، مرحلة بمرحلة",
        goal: "تنفيذ الخطة مع فريقك، وإثبات نجاحها بأرقام حقيقية.",
        look: "التغييرات الواردة في خارطة الطريق، بالترتيب الذي اتفقنا عليه.",
        get: "تغييرات تُنفَّذ مع فريقك، قد تشمل أنظمة الطلبات والمخزون والنقد، والأسعار والعروض، وتجهيز المتجر، وإطلاق الحملات، وإجراءات العمل والتدريب والتوظيف. وتنتهي كل مرحلة بموافقتك. وعند التسليم، تقرير نتائج مقارنة بنقطة البداية، ومتابعة بعد 30 و90 يومًا.",
        measured: "كل تغيير بالمقارنة مع نقطة البداية. لكل رقم مصدر، وأوضح ما الذي حققه العمل وما لم يحققه.",
        yourPart: "صاحب قرار واحد، ووقت فريقك، وصلاحيات تمنحها ويمكنك سحبها في أي وقت، وملاحظات موحّدة خلال 7 أيام. وتدفع أنت ميزانيات الإعلانات والمنصات والموردين مباشرةً.",
      },
      {
        id: "grow",
        number: "03",
        name: "*ننمو*",
        length: "شهرًا بعد شهر",
        goal: "الحفاظ على ما ينجح وتوسيعه، وإبقاء الزخم.",
        look: "أرقامك الأساسية كل شهر.",
        get: "متابعة أسبوعية لمدة 45 دقيقة ومراجعة شهرية للمؤشرات، مع 6 أيام عمل ميداني شهريًا إذا اخترت مدير النمو بدوام جزئي.",
        measured: "مراجعة شهرية للمؤشرات بالمقارنة مع نقطة البداية.",
        yourPart: "الدفع مقدمًا كل شهر، بحد أدنى 3 أشهر.",
      },
    ],
  },
  workshopsPage: {
    label: "ورش العمل",
    title: "ورش عمل لنصف يوم *لأصحاب المشاريع وفرقهم.*",
    lead: "جلسات عملية لنصف يوم لأصحاب المشاريع وفرقهم، مع مطبوعة بالعربية والإنكليزية وملخص للمتابعة.",
    facts: [
      { key: "المدة", value: "نصف يوم" },
      { key: "المجموعة", value: "حتى 15 شخصًا" },
      { key: "الأتعاب", value: "\u2066400,000\u2060–\u2060600,000\u2069 دينار عراقي" },
    ],
    fee: { min: 400000, max: 600000 },
    includesLabel: "تشمل كل ورشة",
    includes: ["التحضير", "التقديم", "مطبوعة بالعربية والإنكليزية", "ملخصًا للمتابعة بعد الورشة"],
    topicsLabel: "المواضيع",
    ask: "استفسر عن هذه الورشة",
  },
  footerLinks: { workshops: "ورش العمل", notes: "ملاحظات", now: "الآن", tools: "الأدوات", privacy: "الخصوصية" },
  marquee: {
    label: "الأدوات والقيم",
    lines: [
      ["الاستراتيجية", "تطوير الأعمال", "النماذج المالية", "Next.js", "TypeScript", "Supabase"],
      ["نزاهة", "Integrity", "تعاطف", "Empathy", "رؤية", "Vision", "إتقان", "Craft"],
    ],
  },
  contactSection: {
    label: "تواصل",
    title: "لنبنِ *شيئًا معًا.*",
    line: "المكالمة المجانية لمدة 30 دقيقة هي أسهل طريقة للبدء، سواء كان الأمر عن عملك أو عن شراكة.",
    button: "راسلني على واتساب",
    rows: { email: "البريد الإلكتروني", whatsapp: "واتساب", linkedin: "لينكدإن" },
  },
  footer: { city: "بغداد", owner: "شاهين ك. فرجو" },
  notFound: {
    title: "هذه الصفحة غير موجودة *بعد.*",
    body: "ربما يكون الرابط قديمًا أو العنوان مكتوبًا بشكل خاطئ.",
    back: "العودة إلى الصفحة الرئيسية",
  },
}

export const content: Record<Lang, Content> = { en, ar }

export const projectSlugs: ProjectSlug[] = ["the-idea", "merchania", "droid", "the-iraqi-curator", "sal"]
export const caseSlugs: CaseSlug[] = ["the-idea", "sal"]

export function findProject(t: Content, slug: ProjectSlug) {
  const project = t.work.projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Unknown project: ${slug}`)
  return project
}

// Title and description for any page, including project and case pages
export function metaFor(t: Content, page: Page): { title: string; description: string } {
  if (page.startsWith("work/")) {
    const project = findProject(t, page.slice(5) as ProjectSlug)
    return { title: `${project.title} — ${t.name}`, description: project.description }
  }
  if (page.startsWith("cases/")) {
    const study = t.cases[page.slice(6) as CaseSlug]
    return { title: `${study.title.replace(/\*/g, "")} — ${t.name}`, description: study.intro }
  }
  return t.meta[page as KnownPage]
}

export function workshopGreeting(t: Content, topic: string) {
  return t.whatsapp.workshop.replace("{workshop}", topic)
}

export function packageGreeting(t: Content, pkg: Package) {
  return t.whatsapp.package.replace("{package}", pkg.inSentence)
}
