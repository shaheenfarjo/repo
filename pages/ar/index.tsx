import { HomePage } from "@/components/home-page"
import { plexArabic } from "@/lib/fonts/arabic"
import { plexLatin } from "@/lib/fonts/latin"

// Pure HTML and CSS: Next.js sends no framework JavaScript for this page.
// `unstable_runtimeJS` is honored by the Next 16 renderer but missing from its
// PageConfig type, which is why `runtime` is listed too.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function ArabicPage() {
  return <HomePage lang="ar" fontClassName={`${plexLatin.variable} ${plexArabic.variable}`} />
}
