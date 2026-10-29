import { content, type Lang } from "@/lib/content"
import { EnhancementsScript } from "./enhancements-script"
import { Hero } from "./hero"
import { PageHead } from "./page-head"
import { About, Consulting, Contact, Marquee, WhatIDo, Work } from "./sections"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

export function HomePage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <div id="top" className={`${fontClassName} font-body`}>
      <PageHead lang={lang} />
      <a
        href="#main"
        className="t-label sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 focus:rounded-pill focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
      >
        {t.skipLink}
      </a>
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Work t={t} />
        <WhatIDo t={t} />
        <Consulting t={t} />
        <Marquee t={t} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} />
      <EnhancementsScript />
    </div>
  )
}
