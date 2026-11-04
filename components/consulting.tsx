import { packageGreeting, pagePath, whatsappUrl, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { Section } from "./sections"
import { BookingLink, RemoteNotice, SectionLabel, container, external } from "./ui"

function Heading({ index, label, title, id }: { index: string; label: string; title: string; id: string }) {
  return (
    <div className="mb-12 border-b border-ink pb-6 md:mb-16">
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 id={id} className="t-h2">
        <Rich text={title} />
      </h2>
    </div>
  )
}

export function ConsultingIntro({ t }: { t: Content }) {
  const s = t.consulting
  return (
    <section aria-labelledby="consulting-title" className="border-b border-hairline">
      <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28`}>
        <SectionLabel>{s.label}</SectionLabel>
        <h1 id="consulting-title" className="t-h2 max-w-[18ch]">
          <Rich text={s.title} />
        </h1>
        <p className="t-lead mt-10">{s.lead}</p>
        <RemoteNotice t={t} className="mt-8 max-w-[62ch]" />
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={whatsappUrl(t.whatsapp.consulting, pagePath(t.lang, "consulting"))} {...external} className="btn btn-solid t-button">
            {t.header.book}
          </a>
          <BookingLink t={t} />
        </div>
        {/* A19: a shortcut for visitors who only want the prices */}
        <p className="t-label mt-10 text-muted">
          {s.shortOnTime}{" "}
          <a href="#packages" className="text-ink underline underline-offset-4">
            {s.toPackages}
          </a>
        </p>
      </div>
    </section>
  )
}

export function Method({ t }: { t: Content }) {
  const s = t.consulting.method
  return (
    <Section id="method" labelledBy="method-title">
      <Heading index="01" label={s.label} title={s.aside} id="method-title" />
      <ol>
        {s.steps.map((step) => (
          <li key={step.number} className="grid gap-6 border-b border-hairline py-10 md:grid-cols-12 md:gap-8">
            <div className="flex items-baseline gap-6 md:col-span-4 md:flex-col md:gap-2">
              <span className="t-num t-label text-faint">{step.number}</span>
              <h3 className="t-big">
                <Rich text={step.name} />
              </h3>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3 md:col-span-8">
              {(
                [
                  [s.columns.does, step.does],
                  [s.columns.receive, step.receive],
                  [s.columns.length, step.length],
                ] as const
              ).map(([key, value]) => (
                <div key={key}>
                  <dt className="t-label text-faint">{key}</dt>
                  <dd className="t-body mt-2">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
      <a href={pagePath(t.lang, "method")} className="btn btn-ghost t-button mt-10">
        {t.consulting.methodGuide}
      </a>
    </Section>
  )
}

export function Services({ t }: { t: Content }) {
  const s = t.consulting.services
  return (
    <Section id="services" labelledBy="services-title">
      <Heading index="02" label={s.label} title={s.aside} id="services-title" />
      <ul className="grid gap-12 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
        {s.items.map((service) => (
          <li key={service.title}>
            <h3 className="t-h3">{service.title}</h3>
            <p className="t-body mt-2">{service.summary}</p>
            <ul className="mt-6 border-t border-hairline">
              {service.examples.map((example) => (
                <li key={example} className="t-body border-b border-hairline py-2 text-ink">
                  {example}
                </li>
              ))}
            </ul>
            {service.more && (
              <a href={pagePath(t.lang, service.more)} className="t-label mt-4 inline-flex min-h-11 items-center text-ink underline underline-offset-4">
                {s.more}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

// C4 + C7: the package comparison, with the client promises beside it
export function Packages({ t }: { t: Content }) {
  const s = t.consulting.packages
  const promises = t.consulting.principles
  return (
    <Section id="packages" labelledBy="packages-title" className="bg-surface">
      <Heading index="03" label={s.label} title={s.aside} id="packages-title" />
      <div className="grid gap-16 nav:grid-cols-12 nav:gap-12">
        <div className="nav:col-span-8">
          <ul className="border-t border-ink">
            {s.items.map((item) => (
              <li key={item.name} className="border-b border-hairline py-8">
                <article aria-labelledby={`package-${item.inSentence.replace(/\s+/g, "-")}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                    <div>
                      {item.tag && (
                        <span className="t-chip mb-3 inline-block rounded-pill bg-ink px-3 py-1 text-bg">{item.tag}</span>
                      )}
                      <h3 id={`package-${item.inSentence.replace(/\s+/g, "-")}`} className="t-h3">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-end">
                      <p className="t-label text-faint">{s.columns.fee}</p>
                      {item.price ? (
                        <p className="t-h3 t-num mt-1">{item.price}</p>
                      ) : (
                        <p className="t-label mt-2 text-muted">{s.feeLater}</p>
                      )}
                    </div>
                  </div>
                  {item.priceNote && <p className="t-body mt-3 text-ink">{item.priceNote}</p>}
                  <dl className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,3fr)]">
                    {(
                      [
                        [s.columns.for, item.for],
                        [s.columns.length, item.length],
                        [s.columns.receive, item.receive],
                      ] as const
                    ).map(([key, value]) => (
                      <div key={key}>
                        <dt className="t-label text-faint">{key}</dt>
                        <dd className="t-body mt-2">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {/* A15: the message names the package the visitor asked about */}
                  <a href={whatsappUrl(packageGreeting(t, item), `${pagePath(t.lang, "consulting")}#packages`)} {...external} className="btn btn-ghost t-button mt-6">
                    {s.ask}
                    <span className="sr-only">: {item.name}</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>
          {/* F5: how the three proposed options relate to these packages */}
          <p className="t-body mt-8 text-ink">{s.optionsNote}</p>
          <p className="t-body mt-4">{s.note}</p>
        </div>

        <aside aria-labelledby="promises-title" className="nav:col-span-4">
          <div className="nav:sticky nav:top-24">
            <h3 id="promises-title" className="t-label border-b border-ink pb-4 text-ink">
              {promises.label}
            </h3>
            <ul>
              {promises.items.map((item) => (
                <li key={item.title} className="border-b border-hairline py-6">
                  <p className="t-h3">
                    <Rich text={item.title} />
                  </p>
                  <p className="t-body mt-3">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/*
        Results (case studies): hidden until there are client results to show.
        To enable, add a section here with its copy in lib/content.ts
        (consulting.results) for both languages.
      */}
    </Section>
  )
}

export function Process({ t }: { t: Content }) {
  const s = t.consulting.process
  return (
    <Section id="process" labelledBy="process-title">
      <Heading index="04" label={s.label} title={s.aside} id="process-title" />
      <ol className="grid gap-10 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
        {s.steps.map((step, index) => (
          <li key={step.name} className="border-t border-ink pt-6">
            <span className="t-num t-label text-faint">{index + 1}</span>
            <h3 className="t-h3 mt-3">{step.name}</h3>
            <p className="t-body mt-3">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Faq({ t }: { t: Content }) {
  const s = t.consulting.faq
  return (
    <Section id="faq" labelledBy="faq-title">
      <Heading index="05" label={s.label} title={s.label} id="faq-title" />
      <div>
        {s.items.map((item) => (
          <details key={item.question} className="group border-b border-hairline">
            <summary className="flex min-h-11 items-center justify-between gap-6 py-6">
              <span className="t-h3">{item.question}</span>
              <span aria-hidden="true" className="relative size-4 shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-px bg-ink" />
                <span className="absolute inset-y-0 start-1/2 w-px bg-ink transition-transform group-open:scale-y-0" />
              </span>
            </summary>
            <p className="t-body pb-6">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

// A2: package chooser. Pure HTML and CSS: picking an answer reveals its package
// through :has() (see .chooser in globals.css), so it needs no JavaScript.
// Browsers without :has() show every answer's match, which still reads well.
export function Chooser({ t }: { t: Content }) {
  const s = t.chooser
  const packages = t.consulting.packages
  return (
    <Section id="chooser" labelledBy="chooser-title">
      <div className="chooser grid gap-12 nav:grid-cols-12">
        <div className="nav:col-span-5">
          <SectionLabel>{s.label}</SectionLabel>
          <h2 id="chooser-title" className="t-h2">
            <Rich text={s.title} />
          </h2>
        </div>
        <div className="nav:col-span-7">
          <fieldset>
            <legend className="t-label mb-4 text-ink">{s.question}</legend>
            <div className="border-t border-hairline">
              {s.options.map((option, index) => (
                <label
                  key={option.answer}
                  className="flex min-h-12 cursor-pointer items-center gap-4 border-b border-hairline py-3 has-[:checked]:text-ink"
                >
                  <input type="radio" name="need" value={index} className="size-4 shrink-0 accent-current" />
                  <span className="t-body text-inherit">{option.answer}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div aria-live="polite">
            {s.options.map((option, index) => {
              const item = packages.items[option.pkg]
              return (
                <div key={option.answer} data-choice={index} className="chooser-result mt-8 border-s-2 border-ink ps-6">
                  <p className="t-label text-faint">{s.result}</p>
                  <p className="t-h3 mt-2">{item.name}</p>
                  <p className="t-body mt-2">
                    {item.length} · {item.price ?? packages.feeLater}
                  </p>
                  <a
                    href={whatsappUrl(packageGreeting(t, item), `${pagePath(t.lang, "consulting")}#chooser`)}
                    {...external}
                    className="btn btn-solid t-button mt-4"
                  >
                    {packages.ask}
                    <span className="sr-only">: {item.name}</span>
                  </a>
                </div>
              )
            })}
          </div>
          <p className="t-body mt-8">{s.unsure}</p>
        </div>
      </div>
    </Section>
  )
}
