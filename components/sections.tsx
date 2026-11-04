import { contact, packageGreeting, pagePath, whatsappUrl, type Content, type Project } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { ArrowUpRight, BookingLink, RemoteNotice, SectionHeading, SectionLabel, container, external } from "./ui"

export function Section({
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

export function Work({ t }: { t: Content }) {
  const s = t.work
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading index="02" label={s.label} title={s.title} id="work-title" />
      <ul className="border-b border-hairline">
        {s.projects.map((project) => (
          <li key={project.title} className="group grid gap-4 border-t border-hairline py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-14">
            <p className="t-num t-label text-faint md:col-span-2">{project.date}</p>
            <div className="md:col-span-5">
              {/* C5: each title opens its project page */}
              <h3>
                <a href={pagePath(t.lang, `work/${project.slug}`)} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <ProjectTitle project={project} />
                  <ArrowUpRight className="size-6 self-center rotate-45 text-muted transition-transform group-hover:translate-x-1 rtl:-rotate-45 rtl:group-hover:-translate-x-1" />
                </a>
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
              {project.href && <ExternalSite href={project.href} label={t.projectLabels.visit} />}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// A project's name, with its Arabic name beside it when it has one
export function ProjectTitle({ project, className = "t-work" }: { project: Project; className?: string }) {
  return (
    <>
      <span lang={/[\u0600-\u06FF]/.test(project.title) ? "ar" : "en"} className={className}>
        {project.title}
      </span>
      {project.arabic && (
        <span lang="ar" className="t-h3 font-body text-faint">
          {project.arabic}
        </span>
      )}
    </>
  )
}

// A link out to a project's own site, shown by its address
export function ExternalSite({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} {...external} className="t-label mt-4 inline-flex min-h-11 items-center gap-2 text-ink underline underline-offset-4">
      <span className="sr-only">{label}: </span>
      <span dir="ltr">{href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      <ArrowUpRight className="size-4" />
    </a>
  )
}

export function WhatIDo({ t }: { t: Content }) {
  const s = t.what
  return (
    <Section id="what" labelledBy="what-title">
      <SectionHeading index="03" label={s.label} title={s.title} id="what-title" />
      <ul className="grid gap-px border border-hairline bg-hairline md:grid-cols-3">
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

export function ConsultingSummary({ t }: { t: Content }) {
  const s = t.consultingSummary
  return (
    <Section id="consulting" labelledBy="consulting-title" className="bg-surface">
      <SectionHeading index="04" label={s.label} title={s.title} id="consulting-title" />
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="t-lead">{s.lead}</p>
          <p className="t-body mt-8 text-ink">{s.diagnostic}</p>
          <RemoteNotice t={t} className="mt-6" />
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={pagePath(t.lang, "consulting")} className="btn btn-solid t-button">
              {s.fullOffer}
            </a>
            <a href={whatsappUrl(packageGreeting(t, t.consulting.packages.items[0]), `${pagePath(t.lang)}#consulting`)} {...external} className="btn btn-ghost t-button">
              {s.ask}
            </a>
            <BookingLink t={t} />
          </div>
        </div>
        <ol aria-label={t.consulting.method.label} className="self-end border-b border-hairline md:col-span-4 md:col-start-9">
          {t.consulting.method.steps.map((step) => (
            <li key={step.number} className="flex items-baseline gap-6 border-t border-hairline py-4">
              <span className="t-num t-label text-faint">{step.number}</span>
              <span className="t-work">
                <Rich text={step.name} />
              </span>
            </li>
          ))}
        </ol>
      </div>
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

export function Contact({
  t,
  greeting,
  source,
  index,
}: {
  t: Content
  greeting: string
  source: string
  // Section number in the page's sequence; pages without numbered sections omit it
  index?: string
}) {
  const s = t.contactSection
  const whatsapp = whatsappUrl(greeting, `${source}#contact`)
  const rows = [
    { label: s.rows.email, value: contact.email, href: `mailto:${contact.email}`, isExternal: false },
    { label: s.rows.whatsapp, value: contact.phoneDisplay, href: whatsapp, isExternal: true },
    { label: s.rows.linkedin, value: contact.linkedinDisplay, href: contact.linkedin, isExternal: true },
  ]
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-hairline">
      <SectionLabel index={index}>{s.label}</SectionLabel>
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
