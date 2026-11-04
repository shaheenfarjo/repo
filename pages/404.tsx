import Head from "next/head"
import { ar, en } from "@/lib/content"
import { plexMono } from "@/lib/fonts/mono"
import { plexSans } from "@/lib/fonts/sans"
import { plexSerif, plexSerifText } from "@/lib/fonts/serif"
import { Rich } from "@/lib/rich"

// Pure HTML and CSS; see pages/index.tsx
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

// One 404 serves both languages. English shows by default; under /ar the
// inline script shows the Arabic version instead, so neither language appears
// on the other's page.
const pickLanguage = `(() => {
  if (!/^\\/ar(\\/|$)/.test(location.pathname)) return;
  const root = document.documentElement;
  root.lang = "ar";
  root.dir = "rtl";
  document.title = ${JSON.stringify(`404 — ${ar.name}`)};
  for (const section of document.querySelectorAll("[data-lang-version]")) section.hidden = section.dataset.langVersion !== "ar";
})();`

export default function NotFound() {
  return (
    <div className={`${plexSerif.variable} ${plexSerifText.variable} ${plexMono.variable} ${plexSans.variable} font-body`}>
      <Head>
        <title>{`404 — ${en.name}`}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <main className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-12">
        {[en, ar].map((t) => (
          <section key={t.lang} data-lang-version={t.lang} hidden={t.lang === "ar"} lang={t.lang} dir={t.dir}>
            <p className="t-label mb-16">{t.name}</p>
            <p className="t-label t-num mb-6 text-muted">404</p>
            <h1 className="t-h2">
              <Rich text={t.notFound.title} />
            </h1>
            <p className="t-body mt-4">{t.notFound.body}</p>
            <a href={t.lang === "ar" ? "/ar" : "/"} className="btn btn-ghost t-button mt-8">
              {t.notFound.back}
            </a>
          </section>
        ))}
      </main>
      <script dangerouslySetInnerHTML={{ __html: pickLanguage }} />
    </div>
  )
}
