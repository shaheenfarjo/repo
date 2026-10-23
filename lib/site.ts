// Single source of truth for the site's copy. Edit here, not in components.

export const site = {
  name: "Shaheen K. Farjo",
  shortName: "Shaheen Farjo",
  role: "Entrepreneur & Business Developer",
  tagline: "Creating the things I wish existed in Baghdad.",
  description:
    "Entrepreneur and business developer in Baghdad. Building The IDEA and the things I wish existed in my city.",
  url: "https://shaheenfarjo.com",
  email: "hello@shaheenfarjo.com",
  location: "Baghdad, Iraq",
  coordinates: "33.31°N 44.36°E",
  timeZone: "Asia/Baghdad",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shaheenfarjo" },
    { name: "GitHub", url: "https://github.com/shaheenfarjo" },
    { name: "X", url: "https://x.com/shaheenfarjo" },
  ],
} as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

export const manifesto = [
  "I build the things I wish existed in Baghdad.",
  "Global standards, local roots.",
  "The best solutions feel inevitable.",
  "Business and code are the same craft: turning ideas into something people use.",
  "Build for the city you love.",
]

export const about = {
  intro:
    "I'm Shaheen, an entrepreneur and business developer based in Baghdad. I build the products, platforms and experiences I wish my city already had.",
  body: [
    "My work sits where business and technology meet. I can negotiate the partnership, shape the business model, and then sit down and write the code that ships it. That combination lets me take an idea from a conversation to a live product without losing anything in translation.",
    "Right now that energy goes into The IDEA, an ecosystem of digital products made in and for Iraq. Outside of it, I care about education, volunteering and writing, and about showing that world-class work can come out of Baghdad.",
  ],
  facts: [
    { label: "Based in", value: "Baghdad, Iraq" },
    { label: "Currently", value: "Building The IDEA" },
    { label: "Focus", value: "Ventures · Partnerships · Product" },
    { label: "Stack", value: "Next.js · TypeScript · Supabase" },
  ],
}

export type Project = {
  title: string
  arabic?: string
  role: string
  year: string
  description: string
  tags: string[]
  href?: string
}

export const projects: Project[] = [
  {
    title: "The IDEA",
    arabic: "ايديا",
    role: "Founder",
    year: "2022 — Now",
    description:
      "The Iraqi Department of Entertainment Affairs: a home for digital products made in and for Iraq, with a shared platform for web, admin, payments and data.",
    tags: ["Venture", "Next.js", "Supabase"],
    href: "https://theideaiq.com",
  },
  {
    title: "Droid",
    role: "Product & Build",
    year: "2026",
    description:
      "A Telegram assistant powered by Google Gemini, part of The IDEA ecosystem. It meets people where they already are.",
    tags: ["AI", "Gemini", "Telegram"],
  },
  {
    title: "The Iraqi Curator",
    role: "Product & Build",
    year: "2026",
    description: "Curating the best of Iraq in one place. Currently in development under The IDEA.",
    tags: ["In progress", "Next.js", "Turborepo"],
    href: "https://github.com/theideaiq/theiraqicurator",
  },
  {
    title: "shaheenfarjo.com",
    role: "Design & Build",
    year: "2026",
    description: "This site: Next.js, a WebGL sphere and a lot of opinions. Open source.",
    tags: ["Next.js", "Three.js", "Framer Motion"],
    href: "https://github.com/shaheenfarjo/repo",
  },
]

export const capabilities = [
  {
    title: "Venture building",
    body: "Taking ideas from a napkin to a live product: the market, the model, the launch, and what comes after.",
  },
  {
    title: "Business development",
    body: "Partnerships, sales and the relationships that make deals happen, especially in the Iraqi market.",
  },
  {
    title: "Product & engineering",
    body: "I ship my own products with Next.js, TypeScript and Supabase, so plans stay grounded in what can actually be built.",
  },
  {
    title: "Community",
    body: "Education, volunteering and writing. Investing in Baghdad's next generation of builders.",
  },
]

export const marquee = {
  skills: [
    "ENTREPRENEURSHIP",
    "BUSINESS DEVELOPMENT",
    "PARTNERSHIPS",
    "PROJECT MANAGEMENT",
    "NEXT.JS",
    "TYPESCRIPT",
    "SUPABASE",
    "ZAYTONA",
    "EDUCATION",
    "VOLUNTEERING",
    "WRITING",
    "OPEN SOURCE",
  ],
  values: [
    "COMMUNITY",
    "BAGHDAD",
    "HERITAGE",
    "IMPACT",
    "GLOBAL PERSPECTIVE",
    "ADAPTABILITY",
    "EMPATHY",
    "VISION",
    "LEADERSHIP",
    "CULTURE",
  ],
}
