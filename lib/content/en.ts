// English copy. American spelling; rules in docs/language-standards.md.

import type { Content } from "./types"

export const en: Content = {
  lang: "en",
  dir: "ltr",
  meta: {
    home: {
      title: "Shaheen K. Farjo — Entrepreneur, Business Developer & Consultant, Baghdad",
      description:
        "Entrepreneur, business developer, and consultant in Baghdad. I build my own ventures and help small businesses in Iraq grow with a clear diagnosis, a practical plan, and hands-on help.",
    },
    "sample-diagnostic": {
      title: "Sample only: Diagnostic report format — Shaheen K. Farjo",
      description:
        "Sample only. This is a made-up business with made-up numbers, showing the format of a Diagnostic report.",
    },
    tools: {
      title: "Free Business Health Check and Break-even Calculator (IQD) — Shaheen K. Farjo",
      description:
        "A five-minute health check for small businesses in Iraq, and a break-even calculator in Iraqi dinars. Free, private, and nothing is stored.",
    },
    privacy: {
      title: "Privacy — Shaheen K. Farjo",
      description: "No analytics, no cookies, and tools that store nothing: what shaheenfarjo.com keeps, and what it doesn't.",
    },
    locale: "en_US",
  },
  name: "Shaheen K. Farjo",
  skipLink: "Skip to content",
  header: {
    nav: [
      { label: "About", id: "about" },
      { label: "Work", id: "work" },
      { label: "Consulting", id: "consulting" },
      { label: "Notes", id: "notes" },
      { label: "Contact", id: "contact" },
    ],
    menu: "Menu",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    switchLabel: "العربية",
    switchLang: "ar",
    book: "Book a free call",
    bookShort: "Book a call",
  },
  whatsapp: {
    home: "Hello Shaheen, I'd like to book a free 30-minute call about my business.",
    consulting: "Hello Shaheen, I read about your consulting and I'd like to book a free 30-minute call about my business.",
    package: "Hello Shaheen, I'm interested in {package}. Could we book a free 30-minute call about my business?",
    workshop: "Hello Shaheen, I'm interested in the workshop \"{workshop}\" for my team. Could we book a free 30-minute call about it?",
  },
  booking: "Pick a time on my calendar",
  hero: {
    nameFirst: "Shaheen",
    nameRest: "K. Farjo",
    role: "Entrepreneur — Business developer — Consultant",
    tagline: "Creating the things I wish existed in *Baghdad.*",
    business: "I run a business",
    build: "See what I build",
  },
  about: {
    title: "Global standards, *local roots*",
    lead: "I'm Shaheen, an entrepreneur, business developer, and consultant in Baghdad. I build the products and platforms I wish my city already had, and I help other founders build theirs.",
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
    title: "Things I wish *existed*",
    projects: [
      {
        href: "https://theideaiq.com",
        slug: "the-idea",
        caseSlug: "the-idea",
        date: "2018 — Now",
        title: "The IDEA",
        role: "Founder & CEO",
        description:
          "One Pass to buy, rent, bid, and share games, music, books, films, and gear in Iraq, from The IDEA and from shops, delivered to your door.",
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
        date: "2019",
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
        href: "https://theiraqicurator.org",
        slug: "the-iraqi-curator",
        date: "2026 — Now",
        title: "The Iraqi Curator",
        role: "Technology partner",
        description:
          "A Baghdad-born, bilingual archive of Iraqi art, essays, workshops, and exhibitions, built and hosted by The IDEA as its technology partner.",
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
        href: "https://auibsal.org",
        slug: "sal",
        caseSlug: "sal",
        date: "2026 — Now",
        title: "AUIB Society of Arts and Letters",
        role: "Founder & president",
        description:
          "A student society for the arts and letters at the American University of Iraq – Baghdad. I founded it and lead it as president.",
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
    more: "Details",
  },
  cases: {
    sal: {
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
      unproven: {
        title: "What's still unproven",
        body: "whether it runs well without me. My semester abroad will be the first real test.",
      },
    },
    "the-idea": {
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
            body: "Iraqi Arabic on social media and in the Club, starting with the brand line itself.",
          },
        ],
      },
      unproven: { title: "What's still unproven", body: "whether customers and shops will choose it at scale." },
    },
  },
  sample: {
    banner: "Sample only. This is a made-up business with made-up numbers, showing the format of a Diagnostic report.",
    ask: "Ask about the Diagnostic",
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
  consulting: {
    title: "I help small businesses grow *on purpose.*",
    lead: "For owners of small businesses and Instagram and WhatsApp brands in Iraq: a clear diagnosis, a practical plan, and hands-on help putting it to work.",
    method: {
      title: "The method",
      more: "How this stage works",
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
          name: "Build",
          length: "2–3 weeks from receiving your data",
          goal: "Know exactly what's holding the business back, and what to fix first.",
          look: "Your data, sales channels, operations, and finances, plus interviews with you, your team, 5–10 customers, and 1–3 suppliers.",
          get: "An 8–12 page report with a health scorecard, the top problems, 1–3 quick wins, and a 12-month roadmap, presented in a 60-minute meeting.",
          measured: "We record your starting numbers in each area. Every later change is measured against them.",
          yourPart: "Share the data on time, make people available for interviews, and give feedback on the draft within 7 days.",
        },
        {
          id: "prove",
          name: "Prove",
          length: "Set in your proposal, stage by stage",
          goal: "Put the plan to work with your team, and show with real numbers that it's working.",
          look: "The changes from the roadmap, in the order we agreed.",
          get: "Changes put in place with your team. These can include order, stock, and cash systems, pricing and offers, shop setup, campaign launches, and SOPs, training, and hiring. Each stage ends with your sign-off. At handover, you get a results report against your starting point, plus check-ins at 30 and 90 days.",
          measured: "Every change against your starting point. Every number has a source, and I'm clear about what the work did and didn't cause.",
          yourPart: "One decision-maker, your team's time, access through roles you grant and can withdraw at any time, and combined comments within 7 days. You pay ad budgets, platforms, and suppliers directly.",
        },
        {
          id: "grow",
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
    services: {
      label: "Services",
      items: [
        {
          title: "Advise",
          summary: "Plans you can actually run.",
          examples: [
            "Business diagnostic",
            "Strategy and business model",
            "Market and competitor study",
            "Marketing strategy and 90-day content plan",
            "Financial model, pricing, and break-even",
          ],
        },
        {
          title: "Implement",
          summary: "I do the work with your team.",
          examples: [
            "Order, stock, and cash systems",
            "Pricing and offer rollout",
            "WhatsApp and Instagram shop setup",
            "Campaign launches",
            "SOPs, training, and hiring",
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
      columns: { for: "Who it's for", length: "Length", receive: "What you receive", fee: "Fee" },
      items: [
        {
          name: "Diagnostic",
          inSentence: "the Diagnostic",
          sample: "See a sample report",
          for: "Any owner who wants a clear picture before committing to more.",
          length: "2–3 weeks",
          receive: "A full review of your business, the problems ranked by impact, quick wins, and a 12-month roadmap.",
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
          receive: "Diagnostic, strategy, market study, marketing plan, and financial model.",
          price: "From 4,500,000 IQD",
          amount: 4500000,
          from: true,
        },
        {
          name: "Launch Ready",
          inSentence: "the Launch Ready package",
          for: "Businesses that want the plan, and help setting it up.",
          length: "12–14 weeks",
          receive: "The Growth Sprint plus systems, shop setup, and a launched campaign.",
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
    process: {
      label: "How it works",
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
            "Small and early-stage businesses in Iraq with 1–20 people, especially brands that sell through Instagram, TikTok, and WhatsApp.",
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
          answer: "Yes. Documents, contracts, and meetings can be in Arabic, English or both.",
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
          answer: "Yes. Brands that sell through Instagram, TikTok, and WhatsApp are a main focus.",
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
      variable: { label: "Variable cost per sale", hint: "Product cost, packaging, and delivery for that one sale." },
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
      "Taxes, loan repayments, and your own salary aren't included unless you add them to fixed costs.",
      "This is an estimate, not financial advice. Nothing you enter is stored or sent.",
    ],
    noScript: "With JavaScript off, use the formula above with your own numbers.",
  },
  privacyPage: {
    title: "What this site *keeps.*",
    items: [
      {
        title: "No analytics, cookies, or tracking",
        body: "There are no analytics scripts, no cookies, and no ad trackers on this site.",
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
        body: "WhatsApp, email, LinkedIn, and the other links open those services, which have their own privacy policies.",
      },
      {
        title: "Hosting",
        body: "The site is hosted on Vercel, which keeps standard server logs, such as IP addresses, to run and protect the service.",
      },
      { title: "Fonts", body: "The IBM Plex fonts are served from this site, not from a third party." },
      { title: "Questions", body: "Email hello@shaheenfarjo.com." },
    ],
  },
  workshops: {
    facts: [
      { key: "Length", value: "Half day" },
      { key: "Group", value: "Up to 15 people" },
      { key: "Fee", value: "400,000\u2060–\u2060600,000 IQD" },
    ],
    fee: { min: 400000, max: 600000 },
    includesLabel: "Every workshop includes",
    includes: ["preparation", "delivery", "a bilingual handout", "a follow-up summary"],
    ask: "Ask about this workshop",
  },
  contactSection: {
    title: "Let's build *something.*",
    line: "A free 30-minute call is the easiest way to start, whether it's your business or a partnership.",
    button: "Message me on WhatsApp",
    rows: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn" },
  },
  footer: {
    city: "Baghdad",
    owner: "Shaheen K. Farjo",
    timeZone: "GMT+3",
    links: { tools: "Free tools", privacy: "Privacy" },
    socials: { linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram", x: "X" },
  },
  tools: {
    title: "Free tools for *owners.*",
    lead: "Two quick tools for small businesses in Iraq: a health check and a break-even calculator. They run in your browser, and nothing is stored or sent.",
  },
  notFound: {
    title: "This page doesn't exist *yet.*",
    body: "The link may be old, or the address mistyped.",
    back: "Back home",
  },
}
