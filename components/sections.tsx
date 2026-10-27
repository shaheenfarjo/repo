import { contact, whatsappUrl, type Content } from "@/lib/content"
import { Eyebrow, Section, buttonPrimary } from "./ui"

export function Method({ t }: { t: Content }) {
  const s = t.methodSection
  return (
    <Section id="method" labelledBy="method-title" className="bg-brand-navy text-on-navy">
      <Eyebrow onNavy>{s.eyebrow}</Eyebrow>
      <h2 id="method-title" className="t-h2">
        {s.title}
      </h2>
      <ol className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
        {s.steps.map((step) => (
          <li key={step.number} className="border-t-2 border-brand-gold pt-6">
            <p className="tabular font-semibold text-brand-gold">{step.number}</p>
            <h3 className="t-h3 mt-2">{step.name}</h3>
            <p className="mt-4">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Services({ t }: { t: Content }) {
  const s = t.services
  return (
    <Section id="services" labelledBy="services-title">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 id="services-title" className="t-h2 measure">
        {s.title}
      </h2>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {s.items.map((service) => (
          <li key={service.title} className="rounded-card border border-hairline p-6 md:p-8">
            <h3 className="t-h3">{service.title}</h3>
            <p className="mt-2 text-ink-muted">{service.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-hairline pt-6">
              {service.examples.map((example) => (
                <li key={example} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-2 shrink-0 bg-brand-teal" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Packages({ t }: { t: Content }) {
  const s = t.packages
  return (
    <Section id="packages" labelledBy="packages-title">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 id="packages-title" className="t-h2">
        {s.title}
      </h2>
      <ul className="mt-12">
        {s.items.map((item) => {
          const featured = Boolean(item.price)
          return (
            <li
              key={item.name}
              className={`grid gap-4 p-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-x-8 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,15rem)] ${
                featured ? "mb-4 rounded-card border-2 border-brand-teal" : "border-b border-hairline"
              }`}
            >
              <div>
                {item.tag && (
                  <span className="t-small mb-2 inline-block rounded-tag bg-brand-teal px-2 py-0.5 font-semibold text-on-teal">
                    {item.tag}
                  </span>
                )}
                <h3 className="t-h3">{item.name}</h3>
                <p className="t-small tabular mt-1 text-ink-muted">{item.length}</p>
              </div>
              <p className="measure">{item.description}</p>
              <div className="md:col-start-2 lg:col-start-auto lg:text-end">
                {item.price ? (
                  <>
                    <p className="tabular font-semibold">{item.price}</p>
                    <p className="t-small mt-1 text-ink-muted">{item.priceNote}</p>
                  </>
                ) : (
                  <p className="t-small text-ink-muted">{s.feeLater}</p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <p className="t-small mt-6 text-ink-muted">{s.note}</p>
    </Section>
  )
}

export function HowItWorks({ t }: { t: Content }) {
  const s = t.howItWorks
  return (
    <Section id="how-it-works" labelledBy="how-title" className="border-t border-hairline">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 id="how-title" className="t-h2">
        {s.title}
      </h2>
      <ol className="mt-12 grid md:grid-cols-4 md:gap-8">
        {s.steps.map((step, index) => (
          <li key={step.name} className="border-s-2 border-hairline ps-6 pb-8 md:border-s-0 md:border-t-2 md:ps-0 md:pt-6 md:pb-0">
            <p className="tabular font-semibold text-brand-teal">{index + 1}</p>
            <h3 className="t-h3 mt-2">{step.name}</h3>
            <p className="mt-4 text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Principles({ t }: { t: Content }) {
  const s = t.principles
  return (
    <Section labelledBy="principles-title" className="bg-surface-200">
      <h2 id="principles-title" className="t-h2">
        {s.title}
      </h2>
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {s.items.map((item) => (
          <li key={item.title} className="border-t border-hairline pt-6">
            <h3 className="t-h3">{item.title}</h3>
            <p className="mt-4 text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function About({ t }: { t: Content }) {
  const s = t.about
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
        <div>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 id="about-title" className="t-h2">
            {s.title}
          </h2>
          <p className="measure mt-6">{s.body}</p>
        </div>
        <div className="md:pt-12">
          <h3 className="t-h3">{s.experienceTitle}</h3>
          <ul className="mt-4">
            {s.experience.map((line) => (
              <li key={line} className="border-t border-hairline py-4 text-ink-muted last:border-b">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Faq({ t }: { t: Content }) {
  const s = t.faq
  return (
    <Section id="faq" labelledBy="faq-title" className="border-t border-hairline">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 id="faq-title" className="t-h2">
        {s.title}
      </h2>
      <div className="mt-12 border-t border-hairline">
        {s.items.map((item) => (
          <details key={item.question} className="group border-b border-hairline">
            <summary className="flex min-h-11 items-center justify-between gap-6 py-6">
              <h3 className="t-h3">{item.question}</h3>
              <span aria-hidden="true" className="relative size-4 shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-brand-teal" />
                <span className="absolute inset-y-0 start-1/2 w-0.5 -translate-x-1/2 bg-brand-teal transition-transform group-open:scale-y-0 rtl:translate-x-1/2" />
              </span>
            </summary>
            <p className="measure pb-6 text-ink-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export function Contact({ t }: { t: Content }) {
  const s = t.contactSection
  const rows = [
    { label: s.rows.whatsapp, value: contact.phoneDisplay, href: whatsappUrl(t.whatsappGreeting), external: true },
    { label: s.rows.email, value: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: s.rows.linkedin, value: contact.linkedinDisplay, href: contact.linkedin, external: true },
  ]
  return (
    <Section id="contact" labelledBy="contact-title" className="bg-brand-navy text-on-navy">
      <h2 id="contact-title" className="t-h2">
        {s.title}
      </h2>
      <p className="measure mt-4">{s.line}</p>
      <a href={whatsappUrl(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={`${buttonPrimary} mt-8`}>
        {s.button}
      </a>
      <dl className="mt-12 grid gap-6 border-t border-on-navy/20 pt-8 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="t-small text-on-navy/80">{row.label}</dt>
            <dd className="mt-1">
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                dir="ltr"
                className="tabular inline-flex min-h-11 items-center font-semibold break-all underline underline-offset-4 select-text"
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
