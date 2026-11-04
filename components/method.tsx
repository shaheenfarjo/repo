import type { Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { Section } from "./sections"
import { SectionLabel, container } from "./ui"

// A7: the method guide. Each stage: goal, what we look at, what you get, how
// it's measured, and the client's part, as in the engagement documents.
export function MethodBody({ t }: { t: Content }) {
  const s = t.methodPage
  const keys = ["goal", "look", "get", "measured", "yourPart"] as const
  return (
    <>
      <section aria-labelledby="method-page-title" className="border-b border-hairline">
        <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28`}>
          <SectionLabel>{s.label}</SectionLabel>
          <h1 id="method-page-title" className="t-h2 max-w-[18ch]">
            <Rich text={s.title} />
          </h1>
          <p className="t-lead mt-10">{s.lead}</p>
          <ol className="mt-10 flex flex-wrap gap-3">
            {s.stages.map((stage) => (
              <li key={stage.id}>
                <a href={`#${stage.id}`} className="btn btn-ghost t-button">
                  <span className="t-num">{stage.number}</span> {stage.name.replace(/\*/g, "")}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {s.stages.map((stage) => (
        <Section key={stage.id} id={stage.id} labelledBy={`${stage.id}-title`}>
          <div className="grid gap-12 nav:grid-cols-12">
            <div className="nav:col-span-4">
              <span className="t-num t-label text-faint">{stage.number}</span>
              <h2 id={`${stage.id}-title`} className="t-big mt-2">
                <Rich text={stage.name} />
              </h2>
              <p className="t-label mt-4 text-muted">{stage.length}</p>
            </div>
            <dl className="border-t border-ink nav:col-span-8">
              {keys.map((key) => (
                <div key={key} className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-12 sm:gap-6">
                  <dt className="t-label text-faint sm:col-span-4">{s.fields[key]}</dt>
                  <dd className="t-body text-ink sm:col-span-8">{stage[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      ))}
    </>
  )
}
