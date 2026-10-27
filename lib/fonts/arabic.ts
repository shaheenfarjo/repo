import { IBM_Plex_Sans_Arabic } from "next/font/google"

// Arabic glyphs. Not preloaded: the English page only needs them for the
// "العربية" switch, and a second preloading copy of this font would make the
// Arabic page download the same files twice. The metric-matched fallback in
// styles/globals.css keeps the swap from shifting layout.
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-plex-arabic",
})
