import { contact, packageGreeting, pagePath, whatsappUrl, workshopGreeting, type Content, type Project } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { DataTable } from "./data-table"
import { ArrowUpRight, BookingLink, DisclosureMark, Heading, RemoteNotice, Section, SubHeading, container, external } from "./ui"

// Everything lives on one page: hero, about, work, consulting, notes, contact.
// Longer detail sits in native <details>, so it works without JavaScript and
// the page stays short to scan.

export function Hero({ t }: { t: Content }) {
  const h = t.hero
  return (
    <section aria-labelledby="hero-name" className="relative overflow-hidden">
      {/* The sphere: decorative, filled in by /sphere.js after the page is idle */}
      <div
        aria-hidden="true"
        data-sphere
        className="sphere-stage pointer-events-none absolute start-1/2 top-[58%] aspect-square w-[680px] -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2 md:top-1/2 md:w-[900px]"
      />
      <div className={`${container} relative flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-16 pt-16 pb-16 md:pt-20 md:pb-20`}>
        <h1 id="hero-name" className="t-name">
          {h.nameFirst}
          <br />
          <em>{h.nameRest}</em>
        </h1>
        <div className="max-w-xl md:self-end md:text-end">
          <p className="t-label mb-4 text-muted">{h.role}</p>
          <p className="t-tagline">
            <Rich text={h.tagline} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
            <a href="#consulting" className="btn btn-solid t-button">
              {h.business}
            </a>
            <a href="#work" className="btn btn-ghost t-button">
              {h.build}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About({ t }: { t: Content }) {
  const s = t.about
  return (
    <Section id="about" labelledBy="about-title">
      <Heading id="about-title" title={s.title} />
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-7">
          <p className="t-lead">{s.lead}</p>
          <div className="mt-10 space-y-6">
            {s.body.map((paragraph) => (
              <p key={paragraph} className="t-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <dl className="self-end border-b border-hairline md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
          {s.facts.map((fact) => (
            <div key={fact.key} className="flex items-baseline justify-between gap-6 border-t border-hairline py-4">
              <dt className="t-label shrink-0 text-faint">{fact.key}</dt>
              <dd className="t-h3 min-w-0 text-end text-[18px]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

// A link out to a project's own site, shown by its address
function ExternalSite({ href }: { href: string }) {
  return (
    <a href={href} {...external} className="t-label mt-4 inline-flex min-h-11 items-center gap-2 text-ink underline underline-offset-4">
      <span dir="ltr">{href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      <ArrowUpRight className="size-4" />
    </a>
  )
}

// The supplied project fields, and for The IDEA and SAL their case study
function ProjectDetails({ t, project }: { t: Content; project: Project }) {
  const l = t.projectLabels
  const fields = (["roleDates", "context", "constraints", "did", "truth"] as const).filter((key) => project.detail[key])
  const study = project.caseSlug ? t.cases[project.caseSlug] : undefined
  return (
    <details className="group mt-6 border-t border-hairline">
      <summary className="t-label flex min-h-12 items-center justify-between gap-6 text-ink">
        {l.more}
        <span className="sr-only">: {project.title}</span>
        <DisclosureMark />
      </summary>
      <dl className="border-t border-ink">
        {fields.map((key) => (
          <div key={key} className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-12 sm:gap-6">
            <dt className="t-label text-faint sm:col-span-4">{l[key]}</dt>
            <dd className="t-body text-ink sm:col-span-8">{project.detail[key]}</dd>
          </div>
        ))}
      </dl>
      {study && (
        <div className="mt-10 space-y-10">
          {study.timeline && (
            <div>
              <SubHeading>{study.timeline.title}</SubHeading>
              <DataTable table={{ title: study.timeline.title, columns: study.timeline.columns, rows: study.timeline.rows }} hideTitle />
            </div>
          )}
          <div>
            <SubHeading>{study.decisions.title}</SubHeading>
            {/* Run-in labels, as written: "No money: the Society holds…" */}
            <ul>
              {study.decisions.items.map((item) => (
                <li key={item.title} className="t-body border-b border-hairline py-5 text-ink">
                  <strong className="font-semibold">{item.title}:</strong> {item.body}
                </li>
              ))}
            </ul>
          </div>
          <p className="t-body text-ink">
            <strong className="font-semibold">{study.unproven.title}:</strong> {study.unproven.body}
          </p>
        </div>
      )}
    </details>
  )
}

export function Work({ t }: { t: Content }) {
  const s = t.work
  return (
    <Section id="work" labelledBy="work-title">
      <Heading id="work-title" title={s.title} />
      <ul className="border-b border-hairline">
        {s.projects.map((project) => (
          <li key={project.slug} id={project.slug} className="grid scroll-mt-20 gap-4 border-t border-hairline py-10 md:grid-cols-12 md:gap-8 md:py-14">
            <p className="t-num t-label text-faint md:col-span-2 md:pt-3">{project.date}</p>
            <div className="md:col-span-4">
              <h3 className="t-work">{project.title}</h3>
              <p className="t-label mt-3 text-muted">{project.role}</p>
            </div>
            <div className="min-w-0 md:col-span-6">
              <p className="t-body">{project.description}</p>
              {project.href && <ExternalSite href={project.href} />}
              <ProjectDetails t={t} project={project} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Method({ t }: { t: Content }) {
  const s = t.consulting.method
  const more = ["look", "get", "measured", "yourPart"] as const
  return (
    <div>
      <SubHeading id="method-title">{s.title}</SubHeading>
      <ol aria-labelledby="method-title">
        {s.stages.map((stage) => (
          <li key={stage.id} className="grid gap-4 border-b border-hairline py-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h4 className="t-big">
                <Rich text={stage.name} />
              </h4>
              <p className="t-label mt-3 text-muted">{stage.length}</p>
            </div>
            <div className="min-w-0 md:col-span-8">
              <p className="t-lead max-w-[40ch]">{stage.goal}</p>
              <details className="group mt-6 border-t border-hairline">
                <summary className="t-label flex min-h-12 items-center justify-between gap-6 text-ink">
                  {s.more}
                  <DisclosureMark />
                </summary>
                <dl className="border-t border-ink">
                  {more.map((key) => (
                    <div key={key} className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-12 sm:gap-6">
                      <dt className="t-label text-faint sm:col-span-4">{s.fields[key]}</dt>
                      <dd className="t-body text-ink sm:col-span-8">{stage[key]}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Services({ t }: { t: Content }) {
  const s = t.consulting.services
  const w = t.workshops
  const source = `${pagePath(t.lang)}#services`
  return (
    <div id="services" className="scroll-mt-20">
      <SubHeading>{s.label}</SubHeading>
      <ul className="grid gap-12 pt-10 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
        {s.items.map((service, index) => {
          // The last service is Workshops: each topic opens its own WhatsApp message
          const isWorkshops = index === s.items.length - 1
          return (
            <li key={service.title}>
              <h4 className="t-h3">{service.title}</h4>
              <p className="t-body mt-2">{service.summary}</p>
              <ul className="mt-6 border-t border-hairline">
                {service.examples.map((example) => (
                  <li key={example} className="t-body border-b border-hairline py-2 text-ink">
                    {isWorkshops ? (
                      <a
                        href={whatsappUrl(workshopGreeting(t, example), source)}
                        {...external}
                        className="flex min-h-11 items-center justify-between gap-3 hover:underline"
                      >
                        {example}
                        <ArrowUpRight className="size-4" />
                        <span className="sr-only">{w.ask}</span>
                      </a>
                    ) : (
                      example
                    )}
                  </li>
                ))}
              </ul>
              {isWorkshops && (
                <>
                  <dl className="mt-6 space-y-2">
                    {w.facts.map((fact) => (
                      <div key={fact.key} className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <dt className="t-label text-faint">{fact.key}</dt>
                        <dd className="t-body t-num text-ink">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="t-body mt-4">
                    {w.includesLabel} {new Intl.ListFormat(t.lang, { type: "conjunction" }).format(w.includes)}.
                  </p>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Packages({ t }: { t: Content }) {
  const s = t.consulting.packages
  const promises = t.consulting.principles
  const source = `${pagePath(t.lang)}#packages`
  return (
    <div id="packages" className="grid scroll-mt-20 gap-16 nav:grid-cols-12 nav:gap-12">
      <div className="nav:col-span-8">
        <SubHeading>{s.label}</SubHeading>
        <ul>
          {s.items.map((item) => (
            <li key={item.name} className="border-b border-hairline py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                <div>
                  {item.tag && <span className="t-chip mb-3 inline-block rounded-pill bg-ink px-3 py-1 text-bg">{item.tag}</span>}
                  <h4 className="t-h3">{item.name}</h4>
                </div>
                <div className="text-end">
                  <p className="t-label text-faint">{s.columns.fee}</p>
                  {item.price ? <p className="t-h3 t-num mt-1">{item.price}</p> : <p className="t-label mt-2 text-muted">{s.feeLater}</p>}
                </div>
              </div>
              {item.priceNote && <p className="t-body mt-3 text-ink">{item.priceNote}</p>}
              {item.sample && (
                <a href={pagePath(t.lang, "sample-diagnostic")} className="t-label mt-3 inline-flex min-h-11 items-center text-ink underline underline-offset-4">
                  {item.sample}
                </a>
              )}
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
              {/* The message names the package the visitor asked about */}
              <a href={whatsappUrl(packageGreeting(t, item), source)} {...external} className="btn btn-ghost t-button mt-6">
                {s.ask}
                <span className="sr-only">: {item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="t-body mt-8 text-ink">{s.optionsNote}</p>
        <p className="t-body mt-4">{s.note}</p>
      </div>
      <aside aria-labelledby="promises-title" className="nav:col-span-4">
        <div className="nav:sticky nav:top-24">
          <SubHeading id="promises-title">{promises.label}</SubHeading>
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
  )
}

function Process({ t }: { t: Content }) {
  const s = t.consulting.process
  return (
    <div>
      <SubHeading id="process-title">{s.label}</SubHeading>
      <ol aria-labelledby="process-title" className="grid gap-10 pt-10 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
        {s.steps.map((step) => (
          <li key={step.name}>
            <h4 className="t-h3">{step.name}</h4>
            <p className="t-body mt-3">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Faq({ t }: { t: Content }) {
  const s = t.consulting.faq
  return (
    <div id="faq" className="scroll-mt-20">
      <SubHeading>{s.label}</SubHeading>
      {s.items.map((item) => (
        <details key={item.question} className="group border-b border-hairline">
          <summary className="flex min-h-11 items-center justify-between gap-6 py-6">
            <span className="t-h3">{item.question}</span>
            <DisclosureMark />
          </summary>
          <p className="t-body pb-6">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function Consulting({ t }: { t: Content }) {
  const s = t.consulting
  return (
    <Section id="consulting" labelledBy="consulting-title" className="bg-surface">
      <Heading id="consulting-title" title={s.title} />
      <p className="t-lead">{s.lead}</p>
      <RemoteNotice t={t} className="mt-8 max-w-[62ch]" />
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={whatsappUrl(t.whatsapp.consulting, `${pagePath(t.lang)}#consulting`)} {...external} className="btn btn-solid t-button">
          {t.header.book}
        </a>
        <BookingLink t={t} />
      </div>
      <div className="mt-24 space-y-24">
        <Method t={t} />
        <Services t={t} />
        <Packages t={t} />
        <Process t={t} />
        <Faq t={t} />
      </div>
    </Section>
  )
}

export function Notes({ t }: { t: Content }) {
  const s = t.notes
  return (
    <Section id="notes" labelledBy="notes-title">
      <Heading id="notes-title" title={s.title} />
      <p className="t-body -mt-8 mb-10">{s.intro}</p>
      <div className="max-w-4xl border-t border-hairline">
        {s.items.map((note) => (
          <details key={note.id} id={note.id} className="note group scroll-mt-20 border-b border-hairline">
            <summary className="flex min-h-11 items-center justify-between gap-6 py-6">
              <h3 className="t-h3">{note.title}</h3>
              <DisclosureMark />
            </summary>
            <div className="max-w-[62ch] space-y-5 pb-8">
              {note.paragraphs.map((paragraph) => (
                <p key={paragraph} className="t-body text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  )
}

export function Contact({ t }: { t: Content }) {
  const s = t.contactSection
  const whatsapp = whatsappUrl(t.whatsapp.home, `${pagePath(t.lang)}#contact`)
  const rows = [
    { label: s.rows.email, value: contact.email, href: `mailto:${contact.email}`, isExternal: false },
    { label: s.rows.whatsapp, value: contact.phoneDisplay, href: whatsapp, isExternal: true },
    { label: s.rows.linkedin, value: contact.linkedinDisplay, href: contact.linkedin, isExternal: true },
  ]
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-hairline">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <h2 id="contact-title" className="t-name min-w-0 text-[clamp(52px,8vw,128px)]">
          <Rich text={s.title} />
        </h2>
        <a href={whatsapp} {...external} aria-label={s.button} className="text-ink transition-transform hover:-translate-y-1">
          <ArrowUpRight className="size-14 md:size-28" />
        </a>
      </div>
      <p className="t-lead mt-10">{s.line}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={whatsapp} {...external} className="btn btn-solid t-button">
          {s.button}
        </a>
        <BookingLink t={t} />
      </div>
      <dl className="mt-16 grid gap-8 border-t border-hairline pt-10 md:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="t-label text-faint">{row.label}</dt>
            <dd className="mt-2">
              <a
                href={row.href}
                {...(row.isExternal ? external : {})}
                dir="ltr"
                className="t-h3 t-num inline-flex min-h-11 items-center break-all underline decoration-hairline underline-offset-8 hover:decoration-ink"
              >
                {row.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
