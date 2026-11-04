import { pagePath, whatsappUrl, workshopGreeting, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { Section } from "./sections"
import { RemoteNotice, SectionLabel, container, external } from "./ui"

// A17: the four workshop topics from the Workshops service, with the terms
// Shaheen set: half day, up to 15 people, 400,000–600,000 IQD
export function WorkshopsBody({ t }: { t: Content }) {
  const s = t.workshopsPage
  const topics = t.consulting.services.items.find((item) => item.more === "workshops")?.examples ?? []
  return (
    <>
      <section aria-labelledby="workshops-title" className="border-b border-hairline">
        <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28`}>
          <SectionLabel>{s.label}</SectionLabel>
          <h1 id="workshops-title" className="t-h2 max-w-[18ch]">
            <Rich text={s.title} />
          </h1>
          <p className="t-lead mt-10">{s.lead}</p>
          <RemoteNotice t={t} className="mt-8 max-w-[62ch]" />
          <dl className="mt-12 grid max-w-3xl gap-6 border-t border-ink pt-6 sm:grid-cols-3">
            {s.facts.map((fact) => (
              <div key={fact.key}>
                <dt className="t-label text-faint">{fact.key}</dt>
                <dd className="t-h3 t-num mt-2 text-balance">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section id="topics" labelledBy="topics-title">
        <div className="grid gap-16 nav:grid-cols-12">
          <div className="nav:col-span-8">
            <h2 id="topics-title" className="t-label border-b border-ink pb-4 text-ink">
              {s.topicsLabel}
            </h2>
            <ol>
              {topics.map((topic, index) => (
                <li key={topic} className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline py-8">
                  <div className="flex items-baseline gap-6">
                    <span className="t-num t-label text-faint">0{index + 1}</span>
                    <h3 className="t-work">{topic}</h3>
                  </div>
                  <a
                    href={whatsappUrl(workshopGreeting(t, topic), `${pagePath(t.lang, "workshops")}#topics`)}
                    {...external}
                    className="btn btn-ghost t-button"
                  >
                    {s.ask}
                    <span className="sr-only">: {topic}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <aside aria-labelledby="includes-title" className="nav:col-span-4">
            <h2 id="includes-title" className="t-label border-b border-ink pb-4 text-ink">
              {s.includesLabel}
            </h2>
            <ul>
              {s.includes.map((item) => (
                <li key={item} className="t-h3 border-b border-hairline py-5">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  )
}
