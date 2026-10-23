import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-naskh",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Shaheen Farjo",
    "Shaheen K. Farjo",
    "The IDEA",
    "entrepreneur",
    "business developer",
    "Baghdad",
    "Iraq",
    "startups",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shaheenfarjo",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
  worksFor: { "@type": "Organization", name: "The IDEA", url: "https://theideaiq.com" },
  sameAs: site.socials.map((social) => social.url),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable} ${naskh.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-white focus:text-black font-mono text-xs tracking-widest"
        >
          SKIP TO CONTENT
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  )
}
