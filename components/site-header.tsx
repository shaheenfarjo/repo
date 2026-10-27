import { pagePath, whatsappUrl, type Content } from "@/lib/content"
import { buttonPrimary, container } from "./ui"

export function SiteHeader({ t }: { t: Content }) {
  const otherPath = pagePath(t.header.switchLang)
  const switchLink = (className: string) => (
    <a
      href={otherPath}
      hrefLang={t.header.switchLang}
      lang={t.header.switchLang}
      data-lang-switch={otherPath}
      className={className}
    >
      {t.header.switchLabel}
    </a>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface-100">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a href="#top" className="inline-flex min-h-11 items-center text-[20px] font-semibold text-ink whitespace-nowrap">
          {t.name}
        </a>

        <nav aria-label={t.header.menu} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {t.header.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="t-small inline-flex min-h-11 items-center text-ink-muted hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {switchLink("t-small hidden min-h-11 items-center text-ink-muted hover:text-ink lg:inline-flex")}
          <a
            href={whatsappUrl(t.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} t-small px-3 md:px-4 whitespace-nowrap`}
          >
            {t.header.cta}
          </a>

          {/* Mobile menu: a native disclosure, so it works without JavaScript */}
          <details data-menu className="group lg:hidden">
            <summary
              aria-label={t.header.menu}
              className="flex size-11 items-center justify-center rounded-card border border-hairline"
            >
              <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 w-full bg-ink transition-transform group-open:translate-y-2 group-open:rotate-45" />
                <span className="h-0.5 w-full bg-ink group-open:opacity-0" />
                <span className="h-0.5 w-full bg-ink transition-transform group-open:-translate-y-2 group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              aria-label={t.header.menu}
              className="absolute inset-x-0 top-16 border-b border-hairline bg-surface-100"
            >
              <ul className={`${container} flex flex-col py-4`}>
                {t.header.nav.map((item) => (
                  <li key={item.id} className="border-b border-hairline">
                    <a href={`#${item.id}`} className="flex min-h-12 items-center text-ink">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>{switchLink("flex min-h-12 items-center text-brand-teal")}</li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
