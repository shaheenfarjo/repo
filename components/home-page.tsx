import { content, type Lang } from "@/lib/content"
import { Hero } from "./hero"
import { EnhancementsScript } from "./enhancements-script"
import { PageHead } from "./page-head"
import { About, Contact, Faq, HowItWorks, Method, Packages, Principles, Services } from "./sections"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

export function HomePage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <div id="top" className={`${fontClassName} font-sans`}>
      <PageHead lang={lang} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 focus:rounded-card focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-on-teal"
      >
        {t.skipLink}
      </a>
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <Method t={t} />
        <Services t={t} />
        <Packages t={t} />
        <HowItWorks t={t} />
        <Principles t={t} />
        {/*
          Results (case studies): hidden until there are client results to show.
          To enable, add a <Results t={t} /> section here with id="results",
          its copy in lib/content.ts, and a "Results" entry in header.nav.
        */}
        <About t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} />
      <EnhancementsScript />
    </div>
  )
}
