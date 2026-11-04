// All site copy, in English and Arabic, plus the facts and helpers both use.
// Import from "@/lib/content"; the files here split it up for easier review:
// types.ts (the shared shape), site.ts (contact, links, paths), en.ts, ar.ts.

import { ar } from "./ar"
import { en } from "./en"
import type { Content, Lang, Package } from "./types"

export * from "./site"
export type * from "./types"
export { ar, en }

export const content: Record<Lang, Content> = { en, ar }

export function workshopGreeting(t: Content, topic: string) {
  return t.whatsapp.workshop.replace("{workshop}", topic)
}

export function packageGreeting(t: Content, pkg: Package) {
  return t.whatsapp.package.replace("{package}", pkg.inSentence)
}
