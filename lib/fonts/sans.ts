import { IBM_Plex_Sans_Arabic } from "next/font/google"

// Body text, and everything on the Arabic page. Not preloaded: eight files would
// crowd out the ones the first paint needs, and the size-adjusted fallback keeps
// the swap from shifting layout.
export const plexSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
  variable: "--font-sans",
})
