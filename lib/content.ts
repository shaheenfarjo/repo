// All site copy, in English and Arabic. Both objects share one shape, so the
// page components render either language without branching.
//
// Text wrapped in *asterisks* is the one emphasized phrase of a heading: italic
// in English, weight 600 in Arabic (Arabic has no italic). See <Rich>.

export type Lang = "en" | "ar"

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
}

export const socials = [
  { name: "LinkedIn", url: contact.linkedin },
  { name: "GitHub", url: contact.github },
  { name: "Instagram", url: contact.instagram },
  { name: "X", url: contact.x },
]

export const coordinates = "33.31°N 44.36°E"
export const timeZone = "Asia/Baghdad"

export const sectionIds = ["about", "work", "what", "consulting", "contact"] as const
export type SectionId = (typeof sectionIds)[number]

export function whatsappUrl(greeting: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(greeting)}`
}

export function pagePath(lang: Lang) {
  return lang === "ar" ? "/ar" : "/"
}

type Package = {
  name: string
  length: string
  description: string
  price?: string
  priceNote?: string
  tag?: string
}

export type Project = {
  date: string
  title: string
  arabic?: string
  href?: string
  role: string
  description: string
  tags: string[]
}

export type Content = {
  lang: Lang
  dir: "ltr" | "rtl"
  meta: { title: string; description: string; locale: string }
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
  }
  whatsappGreeting: string
  hero: {
    location: string
    nameFirst: string
    nameRest: string
    role: string
    tagline: string
    cityAside: string
    work: string
    call: string
  }
  about: {
    label: string
    title: string
    lead: string
    body: string[]
    facts: { key: string; value: string }[]
  }
  work: { label: string; title: string; projects: Project[] }
  what: { label: string; title: string; items: { title: string; body: string }[] }
  consulting: {
    label: string
    title: string
    lead: string
    method: { label: string; aside: string; steps: { number: string; name: string; body: string }[] }
    services: {
      label: string
      aside: string
      items: { title: string; summary: string; examples: string[] }[]
    }
    packages: { label: string; aside: string; items: Package[]; feeLater: string; note: string }
    process: { label: string; aside: string; steps: { name: string; body: string }[] }
    principles: { label: string; items: { title: string; body: string }[] }
    faq: { label: string; items: { question: string; answer: string }[] }
  }
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

// Dates, links and tags as they were in the portfolio version (de89438)
const projectFacts = {
  idea: { href: "https://theideaiq.com", tags: ["Venture", "Next.js", "Supabase"] },
  droid: { date: "2026", tags: ["AI", "Gemini", "Telegram"] },
  curator: { date: "2026", href: "https://github.com/theideaiq/theiraqicurator" },
  site: { date: "2026", href: "https://github.com/shaheenfarjo/repo", tags: ["Next.js", "Three.js", "Framer Motion"] },
}

export const en: Content = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "Shaheen K. Farjo — Entrepreneur, Business Developer & Consultant, Baghdad",
    description:
      "Entrepreneur, business developer and consultant in Baghdad. I build my own ventures and help small businesses in Iraq grow with a clear diagnosis, a practical plan and hands-on help.",
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
  },
  whatsappGreeting: "Hello Shaheen, I'd like to book a free 30-minute call about my business.",
  hero: {
    location: "Baghdad, Iraq",
    nameFirst: "Shaheen",
    nameRest: "K. Farjo",
    role: "Entrepreneur — Business developer — Consultant",
    tagline: "Creating the things I wish existed in *Baghdad.*",
    cityAside: "بغداد",
    work: "See my work",
    call: "Book a free call",
  },
  about: {
    label: "About",
    title: "Global standards, *local roots*",
    lead: "I'm Shaheen, an entrepreneur, business developer and consultant in Baghdad. I build the products and platforms I wish my city already had, and I help other founders build theirs.",
    body: [
      "My work sits where business and technology meet. I can negotiate the partnership, shape the business model, and then sit down and write the code that ships it. That lets me take an idea from a conversation to a live product without losing anything in translation.",
      "Before working independently, I was a business developer and lead project consultant at Morshed BDC, where I led projects for Tqnyat al Hayat and Morabaa Software. Today my time goes into The IDEA and into consulting for a small number of businesses at a time.",
    ],
    facts: [
      { key: "Based in", value: "Baghdad, Iraq" },
      { key: "Currently", value: "Building The IDEA · Consulting" },
      { key: "Focus", value: "Ventures · Business development · Product" },
      { key: "Previously", value: "Morshed BDC" },
      { key: "Stack", value: "Next.js · TypeScript · Supabase" },
      { key: "Languages", value: "Arabic · English" },
    ],
  },
  work: {
    label: "Selected work",
    title: "Things I wish *existed*",
    projects: [
      {
        ...projectFacts.idea,
        date: "2022 — Now",
        title: "The IDEA",
        arabic: "ايديا",
        role: "Founder",
        description:
          "The Iraqi Department of Entertainment Affairs: a home for digital products made in and for Iraq, with a shared platform for web, admin, payments and data.",
      },
      {
        ...projectFacts.droid,
        title: "Droid",
        role: "Product & build",
        description:
          "A Telegram assistant powered by Google Gemini, part of The IDEA ecosystem. It meets people where they already are.",
      },
      {
        ...projectFacts.curator,
        title: "The Iraqi Curator",
        role: "Product & build",
        description: "Curating the best of Iraq in one place. Currently in development under The IDEA.",
        tags: ["In progress", "Next.js", "Turborepo"],
      },
      {
        ...projectFacts.site,
        title: "shaheenfarjo.com",
        role: "Design & build",
        description: "This site: Next.js, a WebGL sphere and a lot of opinions. Open source.",
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
        title: "Business development",
        body: "Partnerships, sales and growth plans, for my own ventures and for the businesses I consult for.",
      },
      {
        title: "Product & engineering",
        body: "I ship my own products with Next.js, TypeScript and Supabase, so plans stay grounded in what can actually be built.",
      },
      {
        title: "Community",
        body: "Education, volunteering and writing. Investing in Baghdad's next generation of builders.",
      },
    ],
  },
  consulting: {
    label: "Consulting",
    title: "I help small businesses grow *on purpose.*",
    lead: "For owners of small businesses and Instagram and WhatsApp brands in Iraq: a clear diagnosis, a practical plan, and hands-on help putting it to work.",
    method: {
      label: "The method",
      aside: "Build · Prove · Grow",
      steps: [
        {
          number: "01",
          name: "Build",
          body: "We diagnose your business and design the plan together: what's holding you back, what to fix first, and what it's worth.",
        },
        {
          number: "02",
          name: "Prove",
          body: "We put the plan to work with your team and measure every change against where you started, so results are real, not promised.",
        },
        {
          number: "03",
          name: "*Grow*",
          body: "We keep what works, scale it, and stay on hand month to month so the momentum doesn't fade.",
        },
      ],
    },
    services: {
      label: "Services",
      aside: "Advice and hands-on help",
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
      items: [
        {
          name: "Diagnostic",
          length: "2–3 weeks",
          description:
            "A full review of your business, the problems ranked by impact, quick wins and a 12-month roadmap.",
          price: "1,000,000 IQD",
          priceNote: "Credited in full if you continue within 30 days",
          tag: "Start here",
        },
        {
          name: "Growth Sprint",
          length: "8–10 weeks",
          description: "Diagnostic, strategy, market study, marketing plan and financial model.",
        },
        {
          name: "Launch Ready",
          length: "12–14 weeks",
          description: "The Growth Sprint plus systems, shop setup and a launched campaign.",
        },
        {
          name: "Full Business Plan",
          length: "12–16 weeks",
          description: "Every plan, a complete business plan and an investor-ready pitch deck.",
        },
        {
          name: "Monthly support",
          length: "Ongoing",
          description: "Weekly check-ins, monthly KPI reviews, or part-time hands-on help.",
        },
      ],
      feeLater: "Fee shared after the free call",
      note: "Every engagement has a fixed fee agreed in writing before work starts.",
    },
    process: {
      label: "How it works",
      aside: "Your sign-off at each step",
      steps: [
        { name: "Free call", body: "30 minutes to understand your business and what you want from it." },
        {
          name: "Proposal",
          body: "Within 5 working days: three options with fixed fees, so you choose the scope.",
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
            "The Diagnostic is 1,000,000 IQD. Larger packages have fixed fees that depend on scope; you get three options in writing after the free call.",
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
      ],
    },
  },
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

export const ar: Content = {
  lang: "ar",
  dir: "rtl",
  meta: {
    title: "شاهين ك. فرجو — رائد أعمال ومطوّر أعمال ومستشار، بغداد",
    description:
      "رائد أعمال ومطوّر أعمال ومستشار في بغداد. أبني مشاريعي الخاصة، وأساعد المشاريع الصغيرة في العراق على النمو بتشخيص واضح وخطة عملية ومساعدة فعلية في التنفيذ.",
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
  },
  whatsappGreeting: "مرحبًا شاهين، أود حجز مكالمة مجانية لمدة 30 دقيقة بخصوص عملي.",
  hero: {
    location: "بغداد، العراق",
    nameFirst: "شاهين",
    nameRest: "ك. فرجو",
    role: "رائد أعمال — مطوّر أعمال — مستشار",
    tagline: "أصنع الأشياء التي تمنّيت لو كانت موجودة في *بغداد.*",
    cityAside: "Baghdad",
    work: "شاهد أعمالي",
    call: "احجز مكالمة مجانية",
  },
  about: {
    label: "نبذة",
    title: "معايير عالمية، *وجذور محلية*",
    lead: "أنا شاهين، رائد أعمال ومطوّر أعمال ومستشار في بغداد. أبني المنتجات والمنصات التي تمنّيت أن تكون في مدينتي، وأساعد أصحاب المشاريع على بناء مشاريعهم.",
    body: [
      "يقع عملي حيث تلتقي الأعمال بالتكنولوجيا: أفاوض على الشراكة، وأصمّم نموذج العمل، ثم أكتب الشيفرة التي تطلقه. هذا ما يتيح لي نقل الفكرة من حديث إلى منتج حي من دون أن يضيع شيء في الطريق.",
      "قبل العمل بشكل مستقل، عملت مطوّر أعمال ومستشارًا رئيسيًا للمشاريع في مرشد لتطوير الأعمال، حيث قدت مشاريع لشركتي تقنيات الحياة ومربع للبرمجيات. واليوم أكرّس وقتي لـ The IDEA وللاستشارات مع عدد محدود من المشاريع في الوقت نفسه.",
    ],
    facts: [
      { key: "المقر", value: "بغداد، العراق" },
      { key: "حاليًا", value: "أبني The IDEA · الاستشارات" },
      { key: "التركيز", value: "المشاريع الريادية · تطوير الأعمال · المنتجات" },
      { key: "سابقًا", value: "مرشد لتطوير الأعمال" },
      { key: "الأدوات", value: "Next.js · TypeScript · Supabase" },
      { key: "اللغات", value: "العربية · الإنكليزية" },
    ],
  },
  work: {
    label: "أعمال مختارة",
    title: "أشياء تمنّيت لو كانت *موجودة*",
    projects: [
      {
        ...projectFacts.idea,
        date: "2022 — الآن",
        title: "The IDEA",
        arabic: "ايديا",
        role: "المؤسس",
        description: "بيت للمنتجات الرقمية المصنوعة في العراق ولأجله، مع منصة مشتركة للويب والإدارة والمدفوعات والبيانات.",
      },
      {
        ...projectFacts.droid,
        title: "Droid",
        role: "منتج وتطوير",
        description: "مساعد على تيليغرام يعمل بنموذج Gemini من Google، وهو جزء من منظومة The IDEA. يصل إلى الناس حيث هم أصلًا.",
      },
      {
        ...projectFacts.curator,
        title: "The Iraqi Curator",
        role: "منتج وتطوير",
        description: "يجمع أفضل ما في العراق في مكان واحد. قيد التطوير ضمن The IDEA.",
        tags: ["قيد التطوير", "Next.js", "Turborepo"],
      },
      {
        ...projectFacts.site,
        title: "shaheenfarjo.com",
        role: "تصميم وتطوير",
        description: "هذا الموقع: Next.js وكرة WebGL والكثير من الآراء. مفتوح المصدر.",
      },
    ],
  },
  what: {
    label: "ماذا أفعل",
    title: "من الحديث إلى *المنتج*",
    items: [
      {
        title: "بناء المشاريع الريادية",
        body: "نقل الأفكار من ورقة على الطاولة إلى منتج حي: السوق، والنموذج، والإطلاق، وما بعده.",
      },
      { title: "تطوير الأعمال", body: "الشراكات والمبيعات وخطط النمو، لمشاريعي وللمشاريع التي أقدّم لها الاستشارات." },
      {
        title: "المنتجات والبرمجة",
        body: "أطلق منتجاتي بنفسي باستخدام Next.js وTypeScript وSupabase، فتبقى الخطط واقعية بما يمكن بناؤه فعلًا.",
      },
      { title: "المجتمع", body: "التعليم والتطوع والكتابة. استثمار في الجيل القادم من البنّائين في بغداد." },
    ],
  },
  consulting: {
    label: "الاستشارات",
    title: "أساعد المشاريع الصغيرة على النمو *بخطة واضحة.*",
    lead: "لأصحاب المشاريع الصغيرة والعلامات التي تبيع عبر إنستغرام وواتساب في العراق: تشخيص واضح، وخطة عملية، ومساعدة فعلية في تنفيذها.",
    method: {
      label: "المنهجية",
      aside: "نبني · نُثبت · ننمو",
      steps: [
        {
          number: "01",
          name: "نبني",
          body: "نشخّص عملك ونصمّم الخطة معًا: ما الذي يعيقك، وما الذي يجب إصلاحه أولًا، وما قيمته.",
        },
        {
          number: "02",
          name: "نُثبت",
          body: "ننفّذ الخطة مع فريقك ونقيس كل تغيير مقارنة بنقطة البداية، لتكون النتائج حقيقية لا وعودًا.",
        },
        {
          number: "03",
          name: "*ننمو*",
          body: "نحافظ على ما ينجح ونوسّعه، ونبقى إلى جانبك شهريًا حتى لا يتوقف الزخم.",
        },
      ],
    },
    services: {
      label: "الخدمات",
      aside: "مشورة ومساعدة عملية",
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
          summary: "شخص إلى جانبك كل شهر.",
          examples: ["دعم استشاري شهري", "مدير نمو بدوام جزئي", "ساعات استشارة"],
        },
        {
          title: "ورش العمل",
          summary: "جلسات عملية لنصف يوم لأصحاب المشاريع وفرقهم.",
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
      items: [
        {
          name: "التشخيص",
          length: "2–3 أسابيع",
          description: "مراجعة شاملة لعملك، وترتيب المشكلات حسب أثرها، ومكاسب سريعة، وخارطة طريق لـ 12 شهرًا.",
          price: "1,000,000 دينار عراقي",
          priceNote: "يُخصم بالكامل إذا واصلت معنا خلال 30 يومًا",
          tag: "ابدأ من هنا",
        },
        {
          name: "باقة النمو",
          length: "8–10 أسابيع",
          description: "التشخيص والاستراتيجية ودراسة السوق وخطة التسويق والنموذج المالي.",
        },
        {
          name: "باقة الإطلاق",
          length: "12–14 أسبوعًا",
          description: "باقة النمو مع تجهيز الأنظمة والمتجر وإطلاق حملة.",
        },
        {
          name: "خطة العمل الكاملة",
          length: "12–16 أسبوعًا",
          description: "جميع الخطط، وخطة عمل متكاملة، وعرض جاهز للمستثمرين.",
        },
        {
          name: "الدعم الشهري",
          length: "مستمر",
          description: "متابعة أسبوعية، ومراجعة شهرية للمؤشرات، أو مساعدة عملية بدوام جزئي.",
        },
      ],
      feeLater: "تُحدَّد الأتعاب بعد المكالمة المجانية",
      note: "لكل عمل أتعاب ثابتة يُتفق عليها كتابيًا قبل البدء.",
    },
    process: {
      label: "كيف نعمل",
      aside: "موافقتك عند كل خطوة",
      steps: [
        { name: "مكالمة مجانية", body: "30 دقيقة لفهم عملك وما تريد تحقيقه." },
        { name: "العرض", body: "خلال 5 أيام عمل: ثلاثة خيارات بأتعاب ثابتة، لتختار النطاق المناسب." },
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
            "التشخيص بـ 1,000,000 دينار عراقي. أما الباقات الأكبر فلها أتعاب ثابتة حسب النطاق، وتصلك ثلاثة خيارات مكتوبة بعد المكالمة المجانية.",
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
      ],
    },
  },
  marquee: {
    label: "الأدوات والقيم",
    lines: [
      ["الاستراتيجية", "تطوير الأعمال", "النماذج المالية", "Next.js", "TypeScript", "Supabase"],
      ["نزاهة", "Integrity", "تعاطف", "Empathy", "رؤية", "Vision", "إتقان", "Craft"],
    ],
  },
  contactSection: {
    label: "تواصل",
    title: "لنبنِ *شيئًا.*",
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
