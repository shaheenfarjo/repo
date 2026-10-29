import Head from "next/head"
import { contact, content, en, pagePath, siteUrl, socials, type Lang } from "@/lib/content"

function jsonLd(lang: Lang) {
  const t = content[lang]
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Shaheen K. Farjo",
    alternateName: "Shaheen Farjo",
    jobTitle: "Entrepreneur, Business Developer & Consultant",
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
    sameAs: [...socials.map((social) => social.url), contact.aboutMe],
  }
  const service = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#consulting`,
    name: "Shaheen K. Farjo — Consulting",
    description: t.consulting.lead,
    url: `${siteUrl}${pagePath(lang)}#consulting`,
    telephone: contact.phoneE164,
    email: contact.email,
    areaServed: { "@type": "Country", name: "Iraq" },
    address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
    founder: { "@id": `${siteUrl}/#person` },
  }
  return { "@context": "https://schema.org", "@graph": [person, service] }
}

export function PageHead({ lang }: { lang: Lang }) {
  const t = content[lang]
  const other = content[t.header.switchLang]
  const url = `${siteUrl}${pagePath(lang)}`
  const ogImage = `${siteUrl}/og.png`
  return (
    <Head>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={en.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:locale" content={t.meta.locale} />
      <meta property="og:locale:alternate" content={other.meta.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${en.name} — ${en.hero.role}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@shaheenfarjo" />
      <meta name="twitter:title" content={t.meta.title} />
      <meta name="twitter:description" content={t.meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/icon-32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
    </Head>
  )
}
