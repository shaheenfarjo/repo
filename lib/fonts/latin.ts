import { IBM_Plex_Sans_Arabic } from "next/font/google"

// IBM Plex Sans Arabic is the brand's only typeface. It is split by script so
// each page preloads only the files it needs; the metric-matched fallback lives
// in styles/globals.css because it has to cover both scripts.
export const plexLatin = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-plex-latin",
})
