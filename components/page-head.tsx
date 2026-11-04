import Head from "next/head"
import { caseSlugs, contact, content, en, findProject, metaFor, pagePath, siteUrl, socials, type CaseSlug, type Lang, type Page, type ProjectSlug } from "@/lib/content"

const personId = `${siteUrl}/#person`
const serviceId = `${siteUrl}/#consulting`

function jsonLd(lang: Lang, page: Page) {
  const t = content[lang]
  const person = {
    "@type": "Person",
    "@id": personId,
    name: "Shaheen K. Farjo",
    alternateName: "Shaheen Farjo",
    jobTitle: "Entrepreneur, Business Developer & Consultant",
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
    sameAs: [...socials.map((social) => social.url), contact.aboutMe],
  }
  const service: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: "Shaheen K. Farjo — Consulting",
    description: t.consulting.lead,
    url: `${siteUrl}${pagePath(lang, "consulting")}`,
    telephone: contact.phoneE164,
    email: contact.email,
    areaServed: { "@type": "Country", name: "Iraq" },
    address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
    founder: { "@id": personId },
  }
  if (page === "consulting") {
    // A20: each package as a Service offer, with its published fee
    service.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: t.consulting.packages.label,
      itemListElement: t.consulting.packages.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.receive,
          provider: { "@id": serviceId },
          areaServed: { "@type": "Country", name: "Iraq" },
        },
        ...(item.amount
          ? {
              priceSpecification: {
                "@type": item.monthly ? "UnitPriceSpecification" : "PriceSpecification",
                priceCurrency: "IQD",
                // "From" prices are starting points, not the fee itself
                ...(item.from ? { minPrice: item.amount } : { price: item.amount }),
                ...(item.monthly ? { unitCode: "MON" } : {}),
              },
            }
          : {}),
      })),
    }
  }
  const graph: Record<string, unknown>[] = [person, service]
  if (page === "workshops") {
    const w = t.workshopsPage
    graph.push({
      "@type": "Service",
      name: `${en.name} — ${w.label}`,
      description: w.lead,
      url: `${siteUrl}${pagePath(lang, page)}`,
      provider: { "@id": serviceId },
      areaServed: { "@type": "Country", name: "Iraq" },
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "IQD", minPrice: w.fee.min, maxPrice: w.fee.max },
      },
    })
  }
  // C5: a project page is about the project, as a creative work by the person
  if (page.startsWith("work/")) {
    const project = findProject(t, page.slice(5) as ProjectSlug)
    graph.push({
      "@type": "WebPage",
      name: metaFor(t, page).title,
      url: `${siteUrl}${pagePath(lang, page)}`,
      inLanguage: lang,
      about: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        creator: { "@id": personId },
        ...(project.href ? { url: project.href } : {}),
      },
    })
  }
  // A11: case studies as articles by the person
  if (page.startsWith("cases/") && caseSlugs.includes(page.slice(6) as CaseSlug)) {
    const study = t.cases[page.slice(6) as CaseSlug]
    graph.push({
      "@type": "Article",
      headline: study.title.replace(/\*/g, ""),
      description: study.intro,
      url: `${siteUrl}${pagePath(lang, page)}`,
      inLanguage: lang,
      author: { "@id": personId },
    })
  }
  // A10: the notes as a blog with three posts (no dates were supplied, so none are given)
  if (page === "notes") {
    graph.push({
      "@type": "Blog",
      name: t.meta.notes.title,
      description: t.meta.notes.description,
      url: `${siteUrl}${pagePath(lang, page)}`,
      inLanguage: lang,
      author: { "@id": personId },
      blogPost: t.notes.items.map((note) => ({
        "@type": "BlogPosting",
        headline: note.title,
        url: `${siteUrl}${pagePath(lang, page)}#${note.id}`,
        inLanguage: lang,
        author: { "@id": personId },
      })),
    })
  }
  // A9: the sample is labeled as a sample in its structured data too
  if (page === "sample-diagnostic") {
    graph.push({
      "@type": "WebPage",
      name: t.meta[page].title,
      description: t.meta[page].description,
      url: `${siteUrl}${pagePath(lang, page)}`,
      inLanguage: lang,
      author: { "@id": personId },
      about: { "@id": serviceId },
    })
  }
  if (page === "method" || page === "tools" || page === "now" || page === "privacy") {
    graph.push({
      "@type": "WebPage",
      name: t.meta[page].title,
      description: t.meta[page].description,
      url: `${siteUrl}${pagePath(lang, page)}`,
      inLanguage: lang,
      author: { "@id": personId },
      ...(page === "tools" || page === "method" ? { about: { "@id": serviceId } } : {}),
    })
  }
  return { "@context": "https://schema.org", "@graph": graph }
}

// One share image per page and language
function ogImage(lang: Lang, page: Page) {
  return `${siteUrl}/og${page === "consulting" ? "-consulting" : ""}${lang === "ar" ? "-ar" : ""}.png`
}

export function PageHead({ lang, page }: { lang: Lang; page: Page }) {
  const t = content[lang]
  const other = content[t.header.switchLang]
  const meta = metaFor(t, page)
  const url = `${siteUrl}${pagePath(lang, page)}`
  const image = ogImage(lang, page)
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${pagePath("en", page)}`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}${pagePath("ar", page)}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pagePath("en", page)}`} />

      <meta property="og:type" content={page === "home" ? "profile" : "website"} />
      <meta property="og:site_name" content={en.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:locale" content={t.meta.locale} />
      <meta property="og:locale:alternate" content={other.meta.locale} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@shaheenfarjo" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/icon-32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang, page)) }} />
    </Head>
  )
}
