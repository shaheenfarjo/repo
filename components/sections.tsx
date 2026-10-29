import { contact, whatsappUrl, type Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { ArrowUpRight, SectionHeading, container, external } from "./ui"

function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string
  labelledBy: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-16 py-24 md:py-32 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  )
}

export function About({ t }: { t: Content }) {
  const s = t.about
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading index="01" label={s.label} title={s.title} id="about-title" />
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="t-lead">{s.lead}</p>
          <div className="mt-10 space-y-6">
            {s.body.map((paragraph) => (
              <p key={paragraph} className="t-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <dl className="self-end border-b border-hairline md:col-span-4 md:col-start-9">
          {s.facts.map((fact) => (
            <div key={fact.key} className="flex items-baseline justify-between gap-6 border-t border-hairline py-4">
              <dt className="t-label shrink-0 text-faint">{fact.key}</dt>
              <dd className="t-h3 text-end text-[18px]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

export function Work({ t }: { t: Content }) {
  const s = t.work
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading index="02" label={s.label} title={s.title} id="work-title" />
      <ul className="border-b border-hairline">
        {s.projects.map((project) => {
          const title = (
            <>
              <span lang="en" className="t-work">
                {project.title}
              </span>
              {project.arabic && (
                <span lang="ar" className="t-h3 font-body text-faint">
                  {project.arabic}
                </span>
              )}
              {project.href && <ArrowUpRight className="size-6 self-center text-muted transition-transform group-hover:-translate-y-1" />}
            </>
          )
          return (
            <li key={project.title} className="group grid gap-4 border-t border-hairline py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-14">
              <p className="t-num t-label text-faint md:col-span-2">{project.date}</p>
              <div className="md:col-span-5">
                <h3 className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  {project.href ? (
                    <a href={project.href} {...external} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                <p className="t-label mt-3 text-muted">{project.role}</p>
              </div>
              <div className="md:col-span-5">
                <p className="t-body">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="t-chip rounded-pill border border-hairline px-3 py-1 text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export function WhatIDo({ t }: { t: Content }) {
  const s = t.what
  return (
    <Section id="what" labelledBy="what-title">
      <SectionHeading index="03" label={s.label} title={s.title} id="what-title" />
      <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 nav:grid-cols-4">
        {s.items.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-6 bg-bg p-8 sm:min-h-72 md:p-10">
            <span className="t-num t-label text-faint">0{index + 1}</span>
            <h3 className="t-h3">{item.title}</h3>
            <p className="t-body mt-auto">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// A consulting sub-section: mono label row with a 1px ink rule under it
function SubSection({ label, aside, children }: { label: string; aside?: string; children: React.ReactNode }) {
  return (
    <div className="mt-24">
      <h3 className="t-label flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink pb-4 text-ink">
        <span>{label}</span>
        {aside && <span className="text-muted">{aside}</span>}
      </h3>
      {children}
    </div>
  )
}

export function Consulting({ t }: { t: Content }) {
  const s = t.consulting
  return (
    <Section id="consulting" labelledBy="consulting-title" className="bg-surface">
      <SectionHeading index="04" label={s.label} title={s.title} id="consulting-title" />
      <p className="t-lead -mt-8 md:-mt-12">{s.lead}</p>

      <SubSection label={s.method.label} aside={s.method.aside}>
        <ol>
          {s.method.steps.map((step) => (
            <li key={step.number} className="grid gap-4 border-b border-hairline py-10 md:grid-cols-12 md:items-baseline md:gap-8">
              <span className="t-num t-label text-faint md:col-span-2">{step.number}</span>
              <p className="t-big md:col-span-5">
                <Rich text={step.name} />
              </p>
              <p className="t-body md:col-span-5">{step.body}</p>
            </li>
          ))}
        </ol>
      </SubSection>

      <SubSection label={s.services.label} aside={s.services.aside}>
        <ul className="grid gap-12 pt-10 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
          {s.services.items.map((service) => (
            <li key={service.title}>
              <h4 className="t-h3">{service.title}</h4>
              <p className="t-body mt-2">{service.summary}</p>
              <ul className="mt-6 border-t border-hairline">
                {service.examples.map((example) => (
                  <li key={example} className="t-body border-b border-hairline py-2 text-ink">
                    {example}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </SubSection>

      <SubSection label={s.packages.label} aside={s.packages.aside}>
        <ul>
          {s.packages.items.map((item) => (
            <li key={item.name} className="grid gap-4 border-b border-hairline py-8 md:grid-cols-12 md:items-baseline md:gap-8">
              <div className="md:col-span-4">
                {item.tag && <span className="t-chip mb-3 inline-block rounded-pill bg-ink px-3 py-1 text-bg">{item.tag}</span>}
                <h4 className="t-h3">{item.name}</h4>
                <p className="t-label t-num mt-2 text-faint">{item.length}</p>
              </div>
              <p className="t-body md:col-span-5">{item.description}</p>
              <div className="md:col-span-3 md:text-end">
                {item.price ? (
                  <>
                    <p className="t-h3 t-num">{item.price}</p>
                    <p className="t-label mt-2 text-muted">{item.priceNote}</p>
                  </>
                ) : (
                  <p className="t-label text-muted">{s.packages.feeLater}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="t-body mt-6">{s.packages.note}</p>
      </SubSection>

      <SubSection label={s.process.label} aside={s.process.aside}>
        <ol className="grid gap-10 pt-10 sm:grid-cols-2 nav:grid-cols-4 nav:gap-8">
          {s.process.steps.map((step, index) => (
            <li key={step.name} className="border-t border-ink pt-6">
              <span className="t-num t-label text-faint">{index + 1}</span>
              <h4 className="t-h3 mt-3">{step.name}</h4>
              <p className="t-body mt-3">{step.body}</p>
            </li>
          ))}
        </ol>
      </SubSection>

      <SubSection label={s.principles.label}>
        <ul className="grid gap-10 pt-10 md:grid-cols-3 md:gap-8">
          {s.principles.items.map((item) => (
            <li key={item.title}>
              <h4 className="t-h3">
                <Rich text={item.title} />
              </h4>
              <p className="t-body mt-4">{item.body}</p>
            </li>
          ))}
        </ul>
      </SubSection>

      {/*
        Results (case studies): hidden until there are client results to show.
        To enable, add a <SubSection label="Results"> here with its copy in
        lib/content.ts (consulting.results) for both languages.
      */}

      <SubSection label={s.faq.label}>
        <div>
          {s.faq.items.map((item) => (
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
      </SubSection>
    </Section>
  )
}

function MarqueeLine({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  // Two copies, so moving by half the track loops seamlessly
  return (
    <div className="overflow-hidden py-2">
      <div className="marquee-track flex w-max" data-direction={reverse ? "reverse" : undefined}>
        {[0, 1].map((copy) =>
          words.map((word) => (
            <span
              key={`${copy}-${word}`}
              lang={/[؀-ۿ]/.test(word) ? "ar" : "en"}
              className="marquee-item t-big pe-8 whitespace-nowrap md:pe-12"
            >
              {word}
              <span className="ps-8 md:ps-12">•</span>
            </span>
          )),
        )}
      </div>
    </div>
  )
}

export function Marquee({ t }: { t: Content }) {
  return (
    <section aria-labelledby="marquee-title" className="overflow-hidden py-24 md:py-32">
      <div className={container}>
        <h2 id="marquee-title" className="t-label mb-12 text-muted">
          {t.marquee.label}
        </h2>
        <p className="sr-only">{t.marquee.lines.flat().join(", ")}</p>
      </div>
      <div aria-hidden="true">
        <MarqueeLine words={t.marquee.lines[0]} />
        <MarqueeLine words={t.marquee.lines[1]} reverse />
      </div>
    </section>
  )
}

export function Contact({ t }: { t: Content }) {
  const s = t.contactSection
  const whatsapp = whatsappUrl(t.whatsappGreeting)
  const rows = [
    { label: s.rows.email, value: contact.email, href: `mailto:${contact.email}`, isExternal: false },
    { label: s.rows.whatsapp, value: contact.phoneDisplay, href: whatsapp, isExternal: true },
    { label: s.rows.linkedin, value: contact.linkedinDisplay, href: contact.linkedin, isExternal: true },
  ]
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-hairline">
      <p className="t-label mb-6 text-muted">
        <span className="t-num">05</span> — {s.label}
      </p>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <h2 id="contact-title" className="t-name min-w-0 text-[clamp(52px,8vw,128px)]">
          <Rich text={s.title} />
        </h2>
        <a href={whatsapp} {...external} aria-label={s.button} className="text-ink transition-transform hover:-translate-y-1">
          <ArrowUpRight className="size-14 md:size-28" />
        </a>
      </div>
      <p className="t-lead mt-10">{s.line}</p>
      <a href={whatsapp} {...external} className="btn btn-solid t-button mt-10">
        {s.button}
      </a>
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
