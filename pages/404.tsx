import Head from "next/head"
import { buttonPrimary } from "@/components/ui"
import { ar, en } from "@/lib/content"
import { plexArabic } from "@/lib/fonts/arabic"
import { plexLatin } from "@/lib/fonts/latin"

// Pure HTML and CSS: Next.js sends no framework JavaScript for this page.
// `unstable_runtimeJS` is honored by the Next 16 renderer but missing from its
// PageConfig type, which is why `runtime` is listed too.
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

// Restyled from the previous site's 404, now in both languages
export default function NotFound() {
  return (
    <div className={`${plexLatin.variable} ${plexArabic.variable} font-sans`}>
      <Head>
        <title>{`404 — ${en.name}`}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center gap-16 px-4 py-16 md:px-8">
        <p className="text-[20px] font-semibold">{en.name}</p>
        {[en, ar].map((t) => (
          <section key={t.lang} lang={t.lang} dir={t.dir} className="border-t border-hairline pt-8">
            <p className="t-eyebrow tabular mb-4 text-brand-teal">404</p>
            <h1 className="t-h2">{t.notFound.title}</h1>
            <p className="mt-4 text-ink-muted">{t.notFound.body}</p>
            <a href={t.lang === "ar" ? "/ar" : "/"} className={`${buttonPrimary} mt-8`}>
              {t.notFound.back}
            </a>
          </section>
        ))}
      </main>
    </div>
  )
}
