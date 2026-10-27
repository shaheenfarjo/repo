import type { ReactNode } from "react"

// Shared building blocks. Colors come only from the brand tokens in globals.css.

export const buttonPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-card bg-brand-teal px-6 py-3 text-center font-semibold text-on-teal underline-offset-4 hover:underline"

export const container = "mx-auto w-full max-w-6xl px-4 md:px-8"

export function Section({
  id,
  className = "",
  labelledBy,
  children,
}: {
  id?: string
  className?: string
  labelledBy: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-16 py-16 md:py-24 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children, onNavy = false }: { children: ReactNode; onNavy?: boolean }) {
  return <p className={`t-eyebrow mb-4 ${onNavy ? "text-on-navy" : "text-brand-teal"}`}>{children}</p>
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`size-4 shrink-0 rtl:-scale-x-100 ${className}`}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
