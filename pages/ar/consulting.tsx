import { ConsultingPage } from "@/components/home-page"
import { plexMono } from "@/lib/fonts/mono"
import { plexSansPreload } from "@/lib/fonts/sans-preload"

// Pure HTML and CSS; see pages/index.tsx
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function ArabicConsultingPage() {
  return <ConsultingPage lang="ar" fontClassName={`${plexMono.variable} ${plexSansPreload.variable}`} />
}
