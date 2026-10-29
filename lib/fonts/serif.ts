import { IBM_Plex_Serif } from "next/font/google"

// Display type on the English page: the name, headings, leads and big words.
// Preloaded, because the name is the page's largest paint.
export const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
})

// Weight 400 for card and row titles (.t-h3). A separate family so the name's
// files are the only serif ones preloaded; .t-h3 names it first in its stack.
export const plexSerifText = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-serif-text",
})
