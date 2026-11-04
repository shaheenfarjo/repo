import { pagePath, whatsappUrl, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { Section } from "./sections"
import { SectionLabel, container, external } from "./ui"

export function ToolsIntro({ t }: { t: Content }) {
  const s = t.toolsPage
  return (
    <section aria-labelledby="tools-title" className="border-b border-hairline">
      <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28`}>
        <SectionLabel>{s.label}</SectionLabel>
        <h1 id="tools-title" className="t-h2 max-w-[18ch]">
          <Rich text={s.title} />
        </h1>
        <p className="t-lead mt-10">{s.lead}</p>
        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <a href="#health-check" className="btn btn-ghost t-button">
              {t.healthCheck.label}
            </a>
          </li>
          <li>
            <a href="#break-even" className="btn btn-ghost t-button">
              {t.breakEven.label}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function ToolHeading({ index, label, title, id }: { index: string; label: string; title: string; id: string }) {
  return (
    <div className="mb-12 border-b border-ink pb-6 md:mb-16">
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 id={id} className="t-h2">
        <Rich text={title} />
      </h2>
    </div>
  )
}

// A1: twelve statements in six areas. The tools script adds up the answers and
// writes the result; nothing is stored, and nothing is sent unless the visitor
// presses the WhatsApp button.
export function HealthCheck({ t }: { t: Content }) {
  const s = t.healthCheck
  const answerKeys = ["yes", "partly", "no"] as const
  const points = { yes: 2, partly: 1, no: 0 }
  let number = 0
  return (
    <Section id="health-check" labelledBy="health-check-title">
      <ToolHeading index="01" label={s.label} title={s.title} id="health-check-title" />
      <div className="grid gap-12 nav:grid-cols-12">
        <div className="nav:col-span-4">
          <p className="t-lead">{s.intro}</p>
          <p className="t-body mt-6">{s.assumptions}</p>
        </div>
        <form data-health-check className="nav:col-span-8">
          {s.areas.map((area, areaIndex) => (
            <fieldset key={area.name} data-area={area.name} className="mb-10">
              <legend className="t-label mb-2 text-ink">{area.name}</legend>
              {area.statements.map((statement) => {
                number += 1
                const name = `q${number}`
                return (
                  <fieldset key={statement} className="border-t border-hairline py-4">
                    <legend className="t-body float-start mb-3 w-full text-ink">
                      <span className="t-num text-faint">{String(number).padStart(2, "0")}</span> {statement}
                    </legend>
                    <div className="clear-both flex flex-wrap gap-2">
                      {answerKeys.map((key) => (
                        <label
                          key={key}
                          className="t-button inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill border border-hairline px-4 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-bg"
                        >
                          <input
                            type="radio"
                            name={name}
                            value={points[key]}
                            data-area-index={areaIndex}
                            className="sr-only"
                          />
                          {s.answers[key]}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )
              })}
            </fieldset>
          ))}

          <div aria-live="polite" className="border-t border-ink pt-6">
            <h3 className="t-label text-ink">{s.resultTitle}</h3>
            <p data-hc-incomplete className="t-body mt-3">
              {s.incomplete}
            </p>
            <div data-hc-result hidden>
              <p data-hc-score className="t-h3 t-num mt-3" />
              <p data-hc-summary className="t-body mt-2 text-ink" />
              <ul data-hc-areas className="mt-4 border-t border-hairline" />
              <a data-hc-send href={whatsappUrl(s.message, `${pagePath(t.lang, "tools")}#health-check`)} {...external} className="btn btn-solid t-button mt-6">
                {s.send}
              </a>
            </div>
            <noscript>
              <p className="t-body mt-3">{s.noScript}</p>
              <a href={whatsappUrl(t.whatsapp.home, `${pagePath(t.lang, "tools")}#health-check`)} {...external} className="btn btn-ghost t-button mt-4">
                {t.contactSection.button}
              </a>
            </noscript>
          </div>
        </form>
      </div>
    </Section>
  )
}

// A3: break-even in Iraqi dinars, with its assumptions stated beside it
export function BreakEven({ t }: { t: Content }) {
  const s = t.breakEven
  const fields = ["fixed", "price", "variable"] as const
  return (
    <Section id="break-even" labelledBy="break-even-title" className="bg-surface">
      <ToolHeading index="02" label={s.label} title={s.title} id="break-even-title" />
      <div className="grid gap-12 nav:grid-cols-12">
        <form data-break-even className="nav:col-span-7">
          <p className="t-lead mb-10">{s.intro}</p>
          {fields.map((field) => (
            <div key={field} className="border-t border-hairline py-5">
              <label htmlFor={`be-${field}`} className="t-label block text-ink">
                {s.fields[field].label}
              </label>
              <p id={`be-${field}-hint`} className="t-body mt-1">
                {s.fields[field].hint}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <input
                  id={`be-${field}`}
                  name={field}
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  dir="ltr"
                  aria-describedby={`be-${field}-hint`}
                  className="t-h3 t-num min-h-12 w-full max-w-xs rounded-pill border border-hairline bg-bg px-5 text-ink focus:border-ink"
                />
                <span className="t-label text-faint">{s.currency}</span>
              </div>
            </div>
          ))}
          <div aria-live="polite" className="border-t border-ink pt-6">
            <p data-be-empty className="t-body">
              {s.empty}
            </p>
            <p data-be-loss hidden className="t-body text-ink">
              {s.loss}
            </p>
            <dl data-be-result hidden className="grid gap-6 sm:grid-cols-3">
              {(["units", "revenue", "margin"] as const).map((key) => (
                <div key={key}>
                  <dt className="t-label text-faint">{s.results[key]}</dt>
                  <dd data-be={key} className="t-h3 t-num mt-2" dir="ltr" />
                </div>
              ))}
            </dl>
          </div>
        </form>
        <aside aria-labelledby="be-assumptions" className="nav:col-span-5">
          <p className="t-h3 border-b border-ink pb-4" dir="auto">
            {s.formula}
          </p>
          <h3 id="be-assumptions" className="t-label mt-8 text-ink">
            {s.assumptionsLabel}
          </h3>
          <ul className="mt-2">
            {s.assumptions.map((line) => (
              <li key={line} className="t-body border-b border-hairline py-3">
                {line}
              </li>
            ))}
          </ul>
          <noscript>
            <p className="t-body mt-6 text-ink">{s.noScript}</p>
          </noscript>
        </aside>
      </div>
    </Section>
  )
}
