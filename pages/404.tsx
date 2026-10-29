import Head from "next/head"
import { ar, en } from "@/lib/content"
import { plexMono } from "@/lib/fonts/mono"
import { plexSans } from "@/lib/fonts/sans"
import { plexSerif, plexSerifText } from "@/lib/fonts/serif"
import { Rich } from "@/lib/rich"

// Pure HTML and CSS; see pages/index.tsx
export const config = { runtime: "nodejs", unstable_runtimeJS: false }

export default function NotFound() {
  return (
    <div className={`${plexSerif.variable} ${plexSerifText.variable} ${plexMono.variable} ${plexSans.variable} font-body`}>
      <Head>
        <title>{`404 — ${en.name}`}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <main className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center gap-16 px-6 py-16 md:px-12">
        <p className="t-label">{en.name}</p>
        {[en, ar].map((t) => (
          <section key={t.lang} lang={t.lang} dir={t.dir} className="border-t border-hairline pt-8">
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
    </div>
  )
}
