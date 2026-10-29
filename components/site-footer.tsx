import { socials, type Content } from "@/lib/content"
import { container, external } from "./ui"

export function SiteFooter({ t }: { t: Content }) {
  return (
    <footer className="border-t border-hairline">
      <div className={`${container} flex flex-col items-center justify-between gap-6 py-8 md:flex-row`}>
        <p className="t-label text-faint">
          {t.footer.city}{" "}
          <span data-clock className="t-num text-ink" dir="ltr">
            --:--:--
          </span>{" "}
          <span className="t-num" dir="ltr">GMT+3</span>
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                {...external}
                rel="noopener noreferrer me"
                lang="en"
                className="t-label inline-flex min-h-11 items-center text-faint hover:text-ink"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="t-label text-faint">
          © <span className="t-num">2023 — {new Date().getFullYear()}</span> {t.footer.owner}
        </p>
      </div>
    </footer>
  )
}
