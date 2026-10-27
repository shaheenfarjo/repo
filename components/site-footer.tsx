import { pagePath, type Content } from "@/lib/content"
import { container } from "./ui"

export function SiteFooter({ t }: { t: Content }) {
  const otherPath = pagePath(t.header.switchLang)
  return (
    <footer className="bg-brand-navy text-on-navy">
      <div className={`${container} flex flex-col gap-4 border-t border-on-navy/20 py-8 md:flex-row md:items-center md:justify-between`}>
        <div className="t-small flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-semibold">{t.name}</span>
          <span className="text-on-navy/80">{t.descriptor}</span>
          <span className="text-brand-gold">{t.method}</span>
          <span className="tabular text-on-navy/80">© {new Date().getFullYear()}</span>
        </div>
        <a
          href={otherPath}
          hrefLang={t.header.switchLang}
          lang={t.header.switchLang}
          data-lang-switch={otherPath}
          className="t-small inline-flex min-h-11 items-center underline underline-offset-4"
        >
          {t.header.switchLabel}
        </a>
      </div>
    </footer>
  )
}
