// All site copy, in English and Arabic. Both objects share one shape, so the
// page components render either language without branching.

export type Lang = "en" | "ar"

export const siteUrl = "https://shaheenfarjo.com"

export const contact = {
  whatsappNumber: "9647711705222",
  phoneDisplay: "+964 771 170 5222",
  phoneE164: "+9647711705222",
  email: "hello@shaheenfarjo.com",
  linkedin: "https://www.linkedin.com/in/shaheenfarjo",
  linkedinDisplay: "/in/shaheenfarjo",
}

export const sectionIds = ["method", "services", "packages", "how-it-works", "about", "faq", "contact"] as const

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

export type Content = {
  lang: Lang
  dir: "ltr" | "rtl"
  meta: { title: string; description: string; locale: string }
  name: string
  descriptor: string
  method: string
  skipLink: string
  header: {
    nav: { label: string; id: (typeof sectionIds)[number] }[]
    menu: string
    cta: string
    switchLabel: string
    switchLang: Lang
  }
  whatsappGreeting: string
  hero: {
    eyebrow: string
    headline: string
    subline: string
    primary: string
    secondary: string
    blocks: [string, string, string]
  }
  methodSection: {
    eyebrow: string
    title: string
    steps: { number: string; name: string; body: string }[]
  }
  services: {
    eyebrow: string
    title: string
    items: { title: string; summary: string; examples: string[] }[]
  }
  packages: {
    eyebrow: string
    title: string
    items: Package[]
    feeLater: string
    note: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: { name: string; body: string }[]
  }
  principles: {
    title: string
    items: { title: string; body: string }[]
  }
  about: {
    eyebrow: string
    title: string
    body: string
    experienceTitle: string
    experience: string[]
  }
  faq: {
    eyebrow: string
    title: string
    items: { question: string; answer: string }[]
  }
  contactSection: {
    title: string
    line: string
    button: string
    rows: { whatsapp: string; email: string; linkedin: string }
  }
  notFound: { title: string; body: string; back: string }
}

export const en: Content = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "Shaheen Farjo — Business Development Consultant, Baghdad",
    description:
      "I help small businesses and social-commerce brands in Iraq grow with a clear diagnosis, a practical plan and hands-on help putting it to work.",
    locale: "en_US",
  },
  name: "Shaheen Farjo",
  descriptor: "Business Development Consultant",
  method: "Build · Prove · Grow",
  skipLink: "Skip to content",
  header: {
    nav: [
      { label: "Method", id: "method" },
      { label: "Services", id: "services" },
      { label: "How it works", id: "how-it-works" },
      { label: "About", id: "about" },
      { label: "Contact", id: "contact" },
    ],
    menu: "Menu",
    cta: "Book a free call",
    switchLabel: "العربية",
    switchLang: "ar",
  },
  whatsappGreeting: "Hello Shaheen, I'd like to book a free 30-minute call about my business.",
  hero: {
    eyebrow: "Business Development Consultant · Baghdad",
    headline: "Grow your business on purpose.",
    subline:
      "I help small businesses and Instagram and WhatsApp brands in Iraq turn a busy shop into a structured, profitable business — with a clear diagnosis, a practical plan, and hands-on help putting it to work.",
    primary: "Book a free 30-minute call",
    secondary: "See how I work",
    blocks: ["Build", "Prove", "Grow"],
  },
  methodSection: {
    eyebrow: "The method",
    title: "Build · Prove · Grow",
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
        name: "Grow",
        body: "We keep what works, scale it, and stay on hand month to month so the momentum doesn't fade.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Advice when you need clarity. Hands-on help when you need results.",
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
    eyebrow: "Ways to start",
    title: "Start small. Grow from there.",
    items: [
      {
        name: "Diagnostic",
        length: "2–3 weeks",
        description:
          "A full review of your business, the problems ranked by impact, quick wins and a 12-month roadmap.",
        price: "1,000,000 IQD",
        priceNote: "credited in full if you continue within 30 days.",
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
  howItWorks: {
    eyebrow: "How it works",
    title: "Clear steps, your sign-off at each one.",
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
    title: "How I work with every client",
    items: [
      {
        title: "Your information stays confidential.",
        body: "It's used only for your work, during the engagement and for two years after.",
      },
      {
        title: "Your money and accounts stay yours.",
        body: "I work through access you grant and can remove, and I never hold your money or passwords.",
      },
      {
        title: "Results are reported honestly.",
        body: "Every number has a source, and I'm clear about what the work did and didn't cause.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Shaheen.",
    body: "I'm a business development consultant based in Baghdad. Before working independently, I was a business developer and lead project consultant at Morshed BDC, where I led business development projects for Tqnyat al Hayat and Morabaa Software. Today I work with a small number of founders at a time, so every client gets my full attention.",
    experienceTitle: "Experience",
    experience: [
      "Business developer and lead project consultant, Morshed BDC",
      "BBA in Entrepreneurship (in progress), American University of Iraq – Baghdad",
      "Founder and lead, AUIB Society of Arts and Letters",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
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
  contactSection: {
    title: "Let's talk about your business.",
    line: "A free 30-minute call is the easiest way to start.",
    button: "Message me on WhatsApp",
    rows: { whatsapp: "WhatsApp", email: "Email", linkedin: "LinkedIn" },
  },
  notFound: {
    title: "This page doesn't exist.",
    body: "The link may be old, or the address mistyped.",
    back: "Back to the home page",
  },
}

export const ar: Content = {
  lang: "ar",
  dir: "rtl",
  meta: {
    title: "شاهين فرجو — مستشار تطوير أعمال، بغداد",
    description:
      "أساعد المشاريع الصغيرة والعلامات التجارية التي تبيع عبر الإنترنت في العراق على النمو بتشخيص واضح وخطة عملية ومساعدة فعلية في التنفيذ.",
    locale: "ar_IQ",
  },
  name: "شاهين فرجو",
  descriptor: "مستشار تطوير أعمال",
  method: "نبني · نُثبت · ننمو",
  skipLink: "انتقل إلى المحتوى",
  header: {
    nav: [
      { label: "المنهجية", id: "method" },
      { label: "الخدمات", id: "services" },
      { label: "كيف نعمل", id: "how-it-works" },
      { label: "نبذة", id: "about" },
      { label: "التواصل", id: "contact" },
    ],
    menu: "القائمة",
    cta: "احجز مكالمة مجانية",
    switchLabel: "English",
    switchLang: "en",
  },
  whatsappGreeting: "مرحباً شاهين، أود حجز مكالمة مجانية لمدة 30 دقيقة بخصوص عملي.",
  hero: {
    eyebrow: "مستشار تطوير أعمال · بغداد",
    headline: "نمِّ عملك بخطة واضحة.",
    subline:
      "أساعد المشاريع الصغيرة والعلامات التي تبيع عبر إنستغرام وواتساب في العراق على تحويل المتجر المزدحم إلى عمل منظّم ومربح — بتشخيص واضح، وخطة عملية، ومساعدة فعلية في تنفيذها.",
    primary: "احجز مكالمة مجانية لمدة 30 دقيقة",
    secondary: "تعرّف على طريقة عملي",
    blocks: ["نبني", "نُثبت", "ننمو"],
  },
  methodSection: {
    eyebrow: "المنهجية",
    title: "نبني · نُثبت · ننمو",
    steps: [
      {
        number: "01",
        name: "نبني",
        body: "نشخّص عملك ونصمم الخطة معاً: ما الذي يعيقك، وما الذي يجب إصلاحه أولاً، وما قيمته.",
      },
      {
        number: "02",
        name: "نُثبت",
        body: "ننفّذ الخطة مع فريقك ونقيس كل تغيير مقارنة بنقطة البداية، لتكون النتائج حقيقية لا وعوداً.",
      },
      {
        number: "03",
        name: "ننمو",
        body: "نحافظ على ما ينجح ونوسّعه، ونبقى إلى جانبك شهرياً حتى لا يتوقف الزخم.",
      },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "مشورة حين تحتاج الوضوح، ومساعدة عملية حين تحتاج النتائج.",
    items: [
      {
        title: "الاستشارة",
        summary: "خطط يمكنك تنفيذها فعلاً.",
        examples: [
          "تشخيص العمل",
          "الاستراتيجية ونموذج العمل",
          "دراسة السوق والمنافسين",
          "استراتيجية التسويق وخطة محتوى لـ 90 يوماً",
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
    eyebrow: "طرق البدء",
    title: "ابدأ بخطوة صغيرة، ثم انمُ.",
    items: [
      {
        name: "التشخيص",
        length: "2–3 أسابيع",
        description: "مراجعة شاملة لعملك، وترتيب المشكلات حسب أثرها، ومكاسب سريعة، وخارطة طريق لـ 12 شهراً.",
        price: "1,000,000 دينار عراقي",
        priceNote: "يُخصم بالكامل إذا واصلت معنا خلال 30 يوماً.",
        tag: "ابدأ من هنا",
      },
      {
        name: "باقة النمو",
        length: "8–10 أسابيع",
        description: "التشخيص والاستراتيجية ودراسة السوق وخطة التسويق والنموذج المالي.",
      },
      {
        name: "باقة الإطلاق",
        length: "12–14 أسبوعاً",
        description: "باقة النمو مع تجهيز الأنظمة والمتجر وإطلاق حملة.",
      },
      {
        name: "خطة العمل الكاملة",
        length: "12–16 أسبوعاً",
        description: "جميع الخطط، وخطة عمل متكاملة، وعرض جاهز للمستثمرين.",
      },
      {
        name: "الدعم الشهري",
        length: "مستمر",
        description: "متابعة أسبوعية، ومراجعة شهرية للمؤشرات، أو مساعدة عملية بدوام جزئي.",
      },
    ],
    feeLater: "تُحدَّد الأتعاب بعد المكالمة المجانية",
    note: "لكل عمل أتعاب ثابتة يُتفق عليها كتابياً قبل البدء.",
  },
  howItWorks: {
    eyebrow: "كيف نعمل",
    title: "خطوات واضحة، وموافقتك عند كل خطوة.",
    steps: [
      { name: "مكالمة مجانية", body: "30 دقيقة لفهم عملك وما تريد تحقيقه." },
      { name: "العرض", body: "خلال 5 أيام عمل: ثلاثة خيارات بأتعاب ثابتة، لتختار النطاق المناسب." },
      { name: "العمل على مراحل", body: "تنتهي كل مرحلة بموافقتك قبل بدء التالية. لا مفاجآت." },
      { name: "التسليم والنتائج", body: "تقرير نتائج مقارنة بنقطة البداية، ومتابعة بعد 30 و90 يوماً." },
    ],
  },
  principles: {
    title: "كيف أعمل مع كل عميل",
    items: [
      { title: "معلوماتك سرية.", body: "تُستخدم لعملك فقط، أثناء العمل ولمدة سنتين بعده." },
      {
        title: "أموالك وحساباتك ملكك.",
        body: "أعمل عبر صلاحيات تمنحها وتستطيع سحبها، ولا أحتفظ بأموالك أو كلمات المرور.",
      },
      { title: "نتائج تُعرض بصدق.", body: "لكل رقم مصدر، وأوضح ما الذي حققه العمل وما لم يحققه." },
    ],
  },
  about: {
    eyebrow: "نبذة",
    title: "أهلاً، أنا شاهين.",
    body: "مستشار تطوير أعمال مقيم في بغداد. قبل العمل بشكل مستقل، عملت مطوّر أعمال ومستشاراً رئيسياً للمشاريع في مرشد لتطوير الأعمال، حيث قدت مشاريع تطوير أعمال لشركتي تقنيات الحياة ومربع للبرمجيات. أعمل اليوم مع عدد محدود من أصحاب المشاريع في الوقت نفسه، ليحصل كل عميل على اهتمامي الكامل.",
    experienceTitle: "الخبرة",
    experience: [
      "مطوّر أعمال ومستشار رئيسي للمشاريع، مرشد لتطوير الأعمال",
      "بكالوريوس إدارة أعمال، تخصص ريادة الأعمال (قيد الدراسة)، الجامعة الأمريكية في العراق – بغداد",
      "مؤسس ورئيس جمعية الفنون والآداب في الجامعة",
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة شائعة",
    items: [
      {
        question: "مع من تعمل؟",
        answer:
          "مع المشاريع الصغيرة والناشئة في العراق التي يعمل فيها من 1 إلى 20 شخصاً، وخاصة العلامات التي تبيع عبر إنستغرام وتيك توك وواتساب.",
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
  contactSection: {
    title: "لنتحدث عن عملك.",
    line: "المكالمة المجانية لمدة 30 دقيقة هي أسهل طريقة للبدء.",
    button: "راسلني على واتساب",
    rows: { whatsapp: "واتساب", email: "البريد الإلكتروني", linkedin: "لينكدإن" },
  },
  notFound: {
    title: "هذه الصفحة غير موجودة.",
    body: "ربما يكون الرابط قديماً أو العنوان مكتوباً بشكل خاطئ.",
    back: "العودة إلى الصفحة الرئيسية",
  },
}

export const content: Record<Lang, Content> = { en, ar }
