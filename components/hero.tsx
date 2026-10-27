import { whatsappUrl, type Content } from "@/lib/content"
import { Arrow, buttonPrimary, container } from "./ui"

// The brand's only graphic: three blocks rising Build → Prove → Grow.
// Flex order follows the document direction, so it mirrors in RTL on its own.
function RisingBlocks({ labels, label }: { labels: Content["hero"]["blocks"]; label: string }) {
  const blocks = [
    { color: "bg-brand-navy", height: "h-24 md:h-32", delay: "0ms" },
    { color: "bg-brand-teal", height: "h-36 md:h-52", delay: "120ms" },
    { color: "bg-brand-gold", height: "h-48 md:h-72", delay: "240ms" },
  ]
  return (
    <div role="img" aria-label={label} className="flex w-full max-w-sm items-end gap-4 md:gap-6">
      {blocks.map((block, index) => (
        <div key={labels[index]} aria-hidden="true" className="flex flex-1 flex-col gap-2">
          <div className={`block-rise rounded-card ${block.color} ${block.height}`} style={{ animationDelay: block.delay }} />
          <span className="t-small text-ink-muted">{labels[index]}</span>
        </div>
      ))}
    </div>
  )
}

export function Hero({ t }: { t: Content }) {
  return (
    <section aria-labelledby="hero-title" className="py-16 md:py-24">
      <div className={`${container} grid items-end gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16`}>
        <div>
          <p className="t-eyebrow mb-6 text-brand-teal">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="t-display">
            {t.hero.headline}
          </h1>
          <p className="measure mt-6 text-ink-muted">{t.hero.subline}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a href={whatsappUrl(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
              {t.hero.primary}
            </a>
            <a
              href="#method"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-teal underline-offset-4 hover:underline"
            >
              {t.hero.secondary}
              <Arrow />
            </a>
          </div>
        </div>
        <div className="flex md:justify-end">
          <RisingBlocks labels={t.hero.blocks} label={t.method} />
        </div>
      </div>
    </section>
  )
}
