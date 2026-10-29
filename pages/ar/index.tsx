import { HomePage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSansPreload } from "@/lib/fonts/sans-preload"

// Pure HTML and CSS: Next.js sends no framework JavaScript for this page.
// `unstable_runtimeJS` is honored by the Next 16 renderer but missing from its
// PageConfig type, which is why `runtime` is listed too.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

// Everything here is set in Plex Sans Arabic (numbers in Plex Mono), so the
// serif isn't loaded
export default function ArabicPage() {
  return <HomePage lang="ar" fontClassName={`${plexMono.variable} ${plexSansPreload.variable}`} />
}
