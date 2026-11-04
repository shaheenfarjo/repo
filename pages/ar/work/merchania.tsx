import { ProjectPage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSansPreload } from "@/lib/fonts/sans-preload"

// C5. A static route per page (not a dynamic [slug] route), so Next.js
// preloads the fonts here as it does on every other page.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function ArabicMerchaniaProjectPage() {
  return <ProjectPage lang="ar" slug="merchania" fontClassName={`${plexMono.variable} ${plexSansPreload.variable}`} />
}
