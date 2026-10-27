import Head from "next/head"
import { contact, content, pagePath, siteUrl, type Lang } from "@/lib/content"

function jsonLd(lang: Lang) {
  const t = content[lang]
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t.name,
    description: t.meta.description,
    url: `${siteUrl}${pagePath(lang)}`,
    inLanguage: lang,
    telephone: contact.phoneE164,
    email: contact.email,
    areaServed: { "@type": "Country", name: "Iraq" },
    address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
    founder: { "@type": "Person", name: content.en.name, jobTitle: content.en.descriptor },
    sameAs: [contact.linkedin],
  }
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
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F5F0" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#141B2B" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:locale" content={t.meta.locale} />
      <meta property="og:locale:alternate" content={other.meta.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${t.name} — ${t.method}`} />
      <meta name="twitter:card" content="summary_large_image" />
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
