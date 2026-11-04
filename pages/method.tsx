import { MethodPage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSans } from "@/lib/fonts/sans"
import { plexSerif, plexSerifText } from "@/lib/fonts/serif"

// Pure HTML and CSS; see pages/index.tsx
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function EnglishMethodPage() {
  return <MethodPage lang="en" fontClassName={`${plexSerif.variable} ${plexSerifText.variable} ${plexMono.variable} ${plexSans.variable}`} />
}
