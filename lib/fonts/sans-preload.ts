import { IBM_Plex_Sans_Arabic } from "next/font/google"

// The same family as ./sans, preloaded: on the Arabic page it sets the name and
// tagline, which are the largest paint. Only the Arabic page imports it.
export const plexSansPreload = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
})
