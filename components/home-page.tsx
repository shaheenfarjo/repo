import { content, type Lang, type Page } from "@/lib/content"
import { Chooser, ConsultingIntro, Faq, Method, Packages, Process, Services } from "./consulting"
import { EnhancementsScript } from "./enhancements-script"
import { Hero } from "./hero"
import { PageHead } from "./page-head"
import { About, ConsultingSummary, Contact, Marquee, WhatIDo, Work } from "./sections"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"
import { NowBody, PrivacyBody } from "./simple-pages"
import { WorkshopsBody } from "./workshops"
import { BreakEven, HealthCheck, ToolsIntro } from "./tools"
import { ToolsScript } from "./tools-script"
import { contact, pagePath } from "@/lib/content"

// Shared shell for both pages, in both languages
function PageShell({ lang, page, fontClassName, children }: { lang: Lang; page: Page; fontClassName: string; children: React.ReactNode }) {
  const t = content[lang]
  return (
    <div id="top" className={`${fontClassName} font-body`}>
      <PageHead lang={lang} page={page} />
      <a
        href="#main"
        className="t-label sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 focus:rounded-pill focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
      >
        {t.skipLink}
      </a>
      <SiteHeader t={t} page={page} />
      {/* A21: only in print, so a printed page carries the contact details */}
      <p className="print-only t-label px-6 pt-6">
        {t.name} · {contact.email} · <span dir="ltr">{contact.phoneDisplay}</span> · shaheenfarjo.com{pagePath(lang, page) === "/" ? "" : pagePath(lang, page)}
      </p>
      <main id="main">{children}</main>
      <SiteFooter t={t} />
      <EnhancementsScript />
    </div>
  )
}

export function HomePage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="home" fontClassName={fontClassName}>
      <Hero t={t} />
      <About t={t} />
      <Work t={t} />
      <WhatIDo t={t} />
      <ConsultingSummary t={t} />
      <Marquee t={t} />
      <Contact t={t} greeting={t.whatsapp.home} source={pagePath(lang)} index="05" />
    </PageShell>
  )
}

// C1: the full consulting offer. No sphere and no keyword strip here (R2, R3).
export function ConsultingPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="consulting" fontClassName={fontClassName}>
      <ConsultingIntro t={t} />
      <Method t={t} />
      <Services t={t} />
      <Chooser t={t} />
      <Packages t={t} />
      <Process t={t} />
      <Faq t={t} />
      <Contact t={t} greeting={t.whatsapp.consulting} source={pagePath(lang, "consulting")} index="06" />
    </PageShell>
  )
}

// A1 + A3
export function ToolsPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="tools" fontClassName={fontClassName}>
      <ToolsIntro t={t} />
      <HealthCheck t={t} />
      <BreakEven t={t} />
      <Contact t={t} greeting={t.whatsapp.home} source={pagePath(lang, "tools")} index="03" />
      <ToolsScript t={t} />
    </PageShell>
  )
}

export function NowPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="now" fontClassName={fontClassName}>
      <NowBody t={t} />
      <Contact t={t} greeting={t.whatsapp.home} source={pagePath(lang, "now")} />
    </PageShell>
  )
}

export function PrivacyPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="privacy" fontClassName={fontClassName}>
      <PrivacyBody t={t} />
      <Contact t={t} greeting={t.whatsapp.home} source={pagePath(lang, "privacy")} />
    </PageShell>
  )
}

// A17
export function WorkshopsPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="workshops" fontClassName={fontClassName}>
      <WorkshopsBody t={t} />
      <Contact t={t} greeting={t.whatsapp.home} source={pagePath(lang, "workshops")} />
    </PageShell>
  )
}
