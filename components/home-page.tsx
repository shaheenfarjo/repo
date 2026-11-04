import { contact, content, pagePath, type Lang, type Page } from "@/lib/content"
import { EnhancementsScript } from "./enhancements-script"
import { About, Consulting, Contact, Hero, Notes, Work } from "./landing"
import { PageHead } from "./page-head"
import { PrivacyBody, SampleBody } from "./simple-pages"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"
import { BreakEven, HealthCheck, ToolsIntro } from "./tools"
import { ToolsScript } from "./tools-script"

// Shared shell for every page, in both languages
function PageShell({ lang, page, fontClassName, children }: { lang: Lang; page: Page; fontClassName: string; children: React.ReactNode }) {
  const t = content[lang]
  const path = pagePath(lang, page)
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
      {/* Only in print, so a printed page carries the contact details */}
      <p className="print-only t-label px-6 pt-6">
        {t.name} · {contact.email} · <span dir="ltr">{contact.phoneDisplay}</span> ·{" "}
        <span dir="ltr">shaheenfarjo.com{path === "/" ? "" : path}</span>
      </p>
      <main id="main">{children}</main>
      <SiteFooter t={t} />
      <EnhancementsScript />
    </div>
  )
}

// The landing page holds everything
export function HomePage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="home" fontClassName={fontClassName}>
      <Hero t={t} />
      <About t={t} />
      <Work t={t} />
      <Consulting t={t} />
      <Notes t={t} />
      <Contact t={t} />
    </PageShell>
  )
}

// Interactive tools get their own page, so their script loads only there
export function ToolsPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="tools" fontClassName={fontClassName}>
      <ToolsIntro t={t} />
      <HealthCheck t={t} />
      <BreakEven t={t} />
      <ToolsScript t={t} />
    </PageShell>
  )
}

export function PrivacyPage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="privacy" fontClassName={fontClassName}>
      <PrivacyBody t={t} />
    </PageShell>
  )
}

// A sample report, kept apart so it is never mistaken for client work
export function SamplePage({ lang, fontClassName }: { lang: Lang; fontClassName: string }) {
  const t = content[lang]
  return (
    <PageShell lang={lang} page="sample-diagnostic" fontClassName={fontClassName}>
      <SampleBody t={t} />
    </PageShell>
  )
}
