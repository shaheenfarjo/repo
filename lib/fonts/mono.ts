import { IBM_Plex_Mono } from "next/font/google"

// Labels, nav, numbers, dates and buttons. Only weight 400 is used anywhere,
// so 500 isn't loaded.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
})
