import { coordinates, whatsappUrl, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { container, external } from "./ui"

export function Hero({ t }: { t: Content }) {
  const h = t.hero
  const workButton = (
    <a key="work" href="#work" className="btn btn-ghost t-button">
      {h.work}
    </a>
  )
  const callButton = (
    <a key="call" href={whatsappUrl(t.whatsappGreeting)} {...external} className="btn btn-solid t-button">
      {h.call}
    </a>
  )

  return (
    <section aria-labelledby="hero-name" className="relative overflow-hidden">
      {/* The sphere: decorative, filled in by /sphere.js after the page is idle */}
      <div
        aria-hidden="true"
        data-sphere
        className="sphere-stage pointer-events-none absolute start-1/2 top-[58%] aspect-square w-[680px] -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2 md:top-1/2 md:w-[900px]"
      />

      <div className={`${container} relative flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-16 pt-16 pb-16 md:pt-20 md:pb-20`}>
        <div>
          <p className="t-label mb-6 text-muted">
            {h.location} — <span className="t-num" dir="ltr">{coordinates}</span>
          </p>
          <h1 id="hero-name" className="t-name">
            {h.nameFirst}
            <br />
            <em>{h.nameRest}</em>
          </h1>
        </div>

        <div className="max-w-xl md:self-end md:text-end">
          <p className="t-label mb-4 text-muted">{h.role}</p>
          <p className="t-tagline">
            <Rich text={h.tagline} />
          </p>
          <p lang={t.lang === "en" ? "ar" : "en"} className="t-label mt-4 text-faint">
            {h.cityAside}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
            {t.lang === "ar" ? [callButton, workButton] : [workButton, callButton]}
          </div>
        </div>
      </div>
    </section>
  )
}
