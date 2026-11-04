import { contact, pagePath, whatsappUrl, type Content, type Page, type SectionId } from "@/lib/content"
import { Dot, container, external } from "./ui"

function ThemeButton({ t, className = "" }: { t: Content; className?: string }) {
  // Both labels are rendered; CSS shows the one for the current theme, so the
  // label is right on first paint. The inline script wires up the click.
  return (
    <button
      type="button"
      data-theme-toggle
      aria-pressed="false"
      className={`t-label min-h-11 items-center rounded-pill border border-hairline px-4 whitespace-nowrap text-ink hover:border-ink ${className}`}
    >
      <span className="dark:hidden">{t.header.darkMode}</span>
      <span className="hidden dark:inline">{t.header.lightMode}</span>
    </button>
  )
}

export function SiteHeader({ t, page }: { t: Content; page: Page }) {
  const otherPath = pagePath(t.header.switchLang, page)
  const homePath = pagePath(t.lang)
  // Home sections are anchors on the home page, and links back to it elsewhere.
  // Each page has its own contact section.
  const hrefFor = (id: SectionId) => {
    if (id === "consulting") return pagePath(t.lang, "consulting")
    if (page === "home" || id === "contact") return `#${id}`
    return `${homePath === "/" ? "" : homePath}/#${id}`
  }
  const greeting = page === "consulting" ? t.whatsapp.consulting : t.whatsapp.home
  // C8: booking stays visible at every width. It opens the calendar once one is
  // set (A14), and WhatsApp until then.
  const bookHref = contact.bookingUrl || whatsappUrl(greeting, pagePath(t.lang, page))

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
  const navItems = (linkClass: string, numberClass: string) =>
    t.header.nav.map((item, index) => (
      <li key={item.id} className={linkClass.includes("min-h-12") ? "border-b border-hairline" : undefined}>
        <a
          href={hrefFor(item.id)}
          aria-current={page === "consulting" && item.id === "consulting" ? "page" : undefined}
          className={`${linkClass} aria-[current=page]:text-ink`}
        >
          <span className={numberClass}>0{index + 1}</span>
          {item.label}
        </a>
      </li>
    ))

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg">
      <div className={`${container} flex h-16 items-center justify-between gap-2 max-sm:px-4 sm:gap-3`}>
        <a href={page === "home" ? "#top" : homePath} className="t-label flex min-h-11 items-center gap-2 text-ink whitespace-nowrap">
          {t.name}
          <Dot />
        </a>

        <nav aria-label={t.header.menu} className="hidden nav:block">
          <ul className="flex items-center gap-6">
            {navItems("t-label inline-flex min-h-11 items-center gap-1.5 text-muted hover:text-ink", "t-num text-faint")}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <ThemeButton t={t} className="hidden sm:inline-flex" />
          {switchLink("t-label hidden min-h-11 items-center text-muted hover:text-ink nav:inline-flex")}
          <a href={bookHref} {...external} className="btn btn-solid t-button !min-h-11 !px-3 whitespace-nowrap sm:!px-4">
            <span className="sm:hidden">{t.header.bookShort}</span>
            <span className="hidden sm:inline">{t.header.book}</span>
          </a>

          {/* Below 1280px: a native disclosure menu, so it works without JavaScript */}
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
                <ul>{navItems("t-label flex min-h-12 items-center gap-2 text-ink", "t-num text-faint")}</ul>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  {status}
                  <div className="flex items-center gap-3">
                    <ThemeButton t={t} className="inline-flex sm:hidden" />
                    {switchLink("t-label inline-flex min-h-11 items-center text-ink underline underline-offset-4")}
                  </div>
                </div>
              </nav>
            </div>
          </details>

        </div>
      </div>
    </header>
  )
}
