import { pagePath, type Content } from "@/lib/content"
import { Dot, container } from "./ui"

function ThemeButton({ t }: { t: Content }) {
  // Both labels are rendered; CSS shows the one for the current theme, so the
  // label is right on first paint. The inline script wires up the click.
  return (
    <button
      type="button"
      data-theme-toggle
      aria-pressed="false"
      className="t-label inline-flex min-h-11 items-center rounded-pill border border-hairline px-3 whitespace-nowrap text-ink hover:border-ink sm:px-4"
    >
      <span className="dark:hidden">{t.header.darkMode}</span>
      <span className="hidden dark:inline">{t.header.lightMode}</span>
    </button>
  )
}

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
  const status = (
    <span className="t-label flex items-center gap-3 text-muted">
      <Dot />
      {t.header.status}
    </span>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg">
      <div className={`${container} flex h-16 items-center justify-between gap-3 max-sm:px-4`}>
        <a href="#top" className="t-label flex min-h-11 items-center gap-2 text-ink whitespace-nowrap">
          {t.name}
          <Dot />
        </a>

        <nav aria-label={t.header.menu} className="hidden nav:block">
          <ul className="flex items-center gap-6">
            {t.header.nav.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="t-label inline-flex min-h-11 items-center gap-1.5 text-muted hover:text-ink">
                  <span className="t-num text-faint">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden nav:flex">{status}</span>
          <ThemeButton t={t} />
          {switchLink("t-label hidden min-h-11 items-center text-muted hover:text-ink nav:inline-flex")}

          {/* Below 1000px: a native disclosure menu, so it works without JavaScript */}
          <details data-menu className="group nav:hidden">
            <summary
              aria-label={t.header.menu}
              className="flex size-11 items-center justify-center rounded-pill border border-hairline"
            >
              <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                <span className="h-px w-full bg-ink transition-transform group-open:translate-y-[5px] group-open:rotate-45" />
                <span className="h-px w-full bg-ink group-open:opacity-0" />
                <span className="h-px w-full bg-ink transition-transform group-open:-translate-y-[5px] group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute inset-x-0 top-16 border-b border-hairline bg-bg">
              <nav aria-label={t.header.menu} className={`${container} py-4`}>
                <ul>
                  {t.header.nav.map((item, index) => (
                    <li key={item.id} className="border-b border-hairline">
                      <a href={`#${item.id}`} className="t-label flex min-h-12 items-center gap-2 text-ink">
                        <span className="t-num text-faint">0{index + 1}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex min-h-12 items-center justify-between gap-4 pt-2">
                  {status}
                  {switchLink("t-label inline-flex min-h-11 items-center text-ink underline underline-offset-4")}
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
