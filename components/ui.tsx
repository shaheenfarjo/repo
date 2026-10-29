import type { ReactNode } from "react"
import { Rich } from "@/lib/rich"

export const container = "mx-auto w-full max-w-[1440px] px-6 md:px-12"

export const external = { target: "_blank", rel: "noopener noreferrer" } as const

// Mono label like "01 — About". Numbers stay in Plex Mono on the Arabic page.
export function SectionLabel({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="t-label mb-6 text-muted">
      {index && (
        <>
          <span className="t-num">{index}</span> —{" "}
        </>
      )}
      {children}
    </p>
  )
}

export function SectionHeading({
  index,
  label,
  title,
  id,
}: {
  index: string
  label: string
  title: string
  id: string
}) {
  return (
    <div className="mb-16 md:mb-24">
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 id={id} className="t-h2">
        <Rich text={title} />
      </h2>
    </div>
  )
}

export function Dot({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`inline-block size-1.5 shrink-0 rounded-pill bg-ink ${className}`} />
}

// Small north-east arrow; it points north-west in right-to-left text
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 rtl:-scale-x-100 ${className}`}>
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}
