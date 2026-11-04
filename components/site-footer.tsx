import { pagePath, socialUrls, type Content } from "@/lib/content"
import { container, external } from "./ui"

export function SiteFooter({ t }: { t: Content }) {
  const f = t.footer
  return (
    <footer className="border-t border-hairline">
      <div className={`${container} flex flex-col items-center justify-between gap-6 py-8 md:flex-row`}>
        {/* Baghdad time, filled in by the inline script; hidden until it has a time */}
        <p data-clock-row hidden className="t-label text-faint">
          {f.city}{" "}
          <span data-clock className="t-num text-ink" dir="ltr" />{" "}
          <span className="t-num">{f.timeZone}</span>
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6">
          {(["tools", "privacy"] as const).map((page) => (
            <li key={page}>
              <a href={pagePath(t.lang, page)} className="t-label inline-flex min-h-11 items-center text-faint hover:text-ink">
                {f.links[page]}
              </a>
            </li>
          ))}
          {(Object.keys(socialUrls) as (keyof typeof socialUrls)[]).map((key) => (
            <li key={key}>
              <a
                href={socialUrls[key]}
                {...external}
                rel="noopener noreferrer me"
                className="t-label inline-flex min-h-11 items-center text-faint hover:text-ink"
              >
                {f.socials[key]}
              </a>
            </li>
          ))}
        </ul>
        <p className="t-label text-faint">
          © <span className="t-num">2003 — {new Date().getFullYear()}</span> {f.owner}
        </p>
      </div>
    </footer>
  )
}
