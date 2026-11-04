import { contact, remotePeriod, type Content } from "@/lib/content"
import type { ReactNode } from "react"
import { Rich } from "@/lib/rich"

export const container = "mx-auto w-full max-w-[1440px] px-6 md:px-12"

export const external = { target: "_blank", rel: "noopener noreferrer" } as const

export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string
  labelledBy: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-16 py-24 md:py-32 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  )
}

// A section's heading: the title alone, no eyebrow or number
export function Heading({ id, title, as: Tag = "h2" }: { id: string; title: string; as?: "h1" | "h2" }) {
  return (
    <Tag id={id} className="t-h2 mb-16 max-w-[20ch] md:mb-20">
      <Rich text={title} />
    </Tag>
  )
}

// A smaller heading inside a section, over a rule
export function SubHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="t-label border-b border-ink pb-4 text-ink">
      {children}
    </h3>
  )
}

// The plus/minus mark on a <details> summary
export function DisclosureMark() {
  return (
    <span aria-hidden="true" className="relative size-4 shrink-0">
      <span className="absolute inset-x-0 top-1/2 h-px bg-ink" />
      <span className="absolute inset-y-0 start-1/2 w-px bg-ink transition-transform group-open:scale-y-0" />
    </span>
  )
}

// Small north-east arrow; it points north-west in right-to-left text
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 rtl:-scale-x-100 ${className}`}>
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

// The appointment page, beside WhatsApp. Renders nothing if contact.bookingUrl is empty.
export function BookingLink({ t }: { t: Content }) {
  if (!contact.bookingUrl) return null
  return (
    <a href={contact.bookingUrl} {...external} className="btn btn-ghost t-button">
      {t.booking}
    </a>
  )
}

// Baghdad calendar date as YYYY-MM-DD
function baghdadDate(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Baghdad" }).format(date)
}

// The remote-only notice, shown from remotePeriod.showFrom to .until. The build
// date sets the server-rendered state; the inline script re-checks the
// visitor's date, so it appears on time without a redeploy.
export function RemoteNotice({ t, className = "" }: { t: Content; className?: string }) {
  const today = baghdadDate(new Date())
  const visible = today >= remotePeriod.showFrom && today <= remotePeriod.until
  return (
    <p
      data-show-from={remotePeriod.showFrom}
      data-show-until={remotePeriod.until}
      hidden={!visible}
      className={`t-body border-s-2 border-ink ps-4 text-ink ${className}`}
    >
      {t.remote}
    </p>
  )
}
