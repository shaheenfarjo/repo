import { CasePage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSansPreload } from "@/lib/fonts/sans-preload"

// A11. A static route per page (not a dynamic [slug] route), so Next.js
// preloads the fonts here as it does on every other page.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function ArabicTheIdeaCasePage() {
  return <CasePage lang="ar" slug="the-idea" fontClassName={`${plexMono.variable} ${plexSansPreload.variable}`} />
}
