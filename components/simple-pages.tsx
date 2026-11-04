import { packageGreeting, pagePath, whatsappUrl, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { DataTable } from "./data-table"
import { container, external } from "./ui"

// Privacy: a title and short titled entries
export function PrivacyBody({ t }: { t: Content }) {
  const s = t.privacyPage
  return (
    <section aria-labelledby="page-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-20 md:pt-28`}>
        <h1 id="page-title" className="t-h2 max-w-[18ch]">
          <Rich text={s.title} />
        </h1>
        <ul className="mt-16 max-w-4xl border-t border-ink">
          {s.items.map((item) => (
            <li key={item.title} className="grid gap-3 border-b border-hairline py-8 md:grid-cols-12 md:gap-8">
              <h2 className="t-h3 md:col-span-4">{item.title}</h2>
              <p className="t-body md:col-span-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// One sample report, labeled as a sample at the top
export function SampleBody({ t }: { t: Content }) {
  const s = t.sample
  const diagnostic = t.consulting.packages.items[0]
  return (
    <article aria-labelledby="sample-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-12 md:pt-16`}>
        <p role="note" className="t-body border-s-2 border-ink bg-surface px-5 py-4 text-ink">
          {s.banner}
        </p>
        <h1 id="sample-title" className="t-h2 mt-12">
          {s.title}
        </h1>
        <div className="mt-16 max-w-5xl space-y-16">
          <section aria-labelledby="sample-summary">
            <h2 id="sample-summary" className="t-label border-b border-ink pb-4 text-ink">
              {s.summaryTitle}
            </h2>
            <p className="t-lead mt-6 max-w-[48ch]">{s.summary}</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[s.score, s.next].map((item) => (
                <div key={item.key} className="border-t border-hairline pt-4">
                  <dt className="t-label text-faint">{item.key}</dt>
                  <dd className="t-h3 mt-2">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          {s.tables.map((table) => (
            <section key={table.title} aria-label={table.title}>
              <DataTable table={table} />
            </section>
          ))}
        </div>
        <a
          href={whatsappUrl(packageGreeting(t, diagnostic), pagePath(t.lang, "sample-diagnostic"))}
          {...external}
          className="btn btn-solid t-button mt-16"
        >
          {s.ask}
        </a>
      </div>
    </article>
  )
}
