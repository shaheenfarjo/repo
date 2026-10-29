import { HomePage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSans } from "@/lib/fonts/sans"
import { plexSerif, plexSerifText } from "@/lib/fonts/serif"

// Pure HTML and CSS: Next.js sends no framework JavaScript for this page.
// `unstable_runtimeJS` is honored by the Next 16 renderer but missing from its
// PageConfig type, which is why `runtime` is listed too.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function EnglishPage() {
  return <HomePage lang="en" fontClassName={`${plexSerif.variable} ${plexSerifText.variable} ${plexMono.variable} ${plexSans.variable}`} />
}
