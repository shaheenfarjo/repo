// Facts and helpers shared by both languages: contact details, links and paths

import type { Lang, Page } from "./types"

export const siteUrl = "https://shaheenfarjo.com"

export const contact = {
  whatsappNumber: "9647711705222",
  phoneDisplay: "+964 771 170 5222",
  phoneE164: "+9647711705222",
  email: "hello@shaheenfarjo.com",
  linkedin: "https://www.linkedin.com/in/shaheenfarjo",
  linkedinDisplay: "/in/shaheenfarjo",
  github: "https://github.com/shaheenfarjo",
  instagram: "https://www.instagram.com/shaheen.farjo",
  x: "https://x.com/shaheenfarjo",
  aboutMe: "https://about.me/shaheenfarjo",
  // The Google Calendar appointment page. The header's booking button opens it,
  // and it sits beside WhatsApp; setting it to "" falls back to WhatsApp only.
  bookingUrl: "https://calendar.app.google/rLjBtW85Arzydzmg6",
}

export const socialUrls = {
  linkedin: contact.linkedin,
  github: contact.github,
  instagram: contact.instagram,
  x: contact.x,
}

export const timeZone = "Asia/Baghdad"

// Sections the language switch can keep the reader on
export const sectionIds = ["about", "work", "consulting", "notes", "contact", "health-check", "break-even"] as const
export type SectionId = (typeof sectionIds)[number]

// Pre-filled messages end with the page they came from, so it's clear which
// part of the site a conversation started on
export function whatsappUrl(greeting: string, source?: string) {
  const text = source ? `${greeting}\n\n(shaheenfarjo.com${source})` : greeting
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function pagePath(lang: Lang, page: Page = "home") {
  const prefix = lang === "ar" ? "/ar" : ""
  if (page === "home") return prefix || "/"
  return `${prefix}/${page}`
}

// Remote-only period, announced from December 1 (dates in Baghdad time)
export const remotePeriod = { showFrom: "2026-12-01", until: "2027-05-15" }
