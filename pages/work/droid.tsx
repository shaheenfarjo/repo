import { ProjectPage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSans } from "@/lib/fonts/sans"
import { plexSerif, plexSerifText } from "@/lib/fonts/serif"

// C5. A static route per page (not a dynamic [slug] route), so Next.js
// preloads the fonts here as it does on every other page.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function EnglishDroidProjectPage() {
  return <ProjectPage lang="en" slug="droid" fontClassName={`${plexSerif.variable} ${plexSerifText.variable} ${plexMono.variable} ${plexSans.variable}`} />
}
