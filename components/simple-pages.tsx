import type { Content } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { SectionLabel, container } from "./ui"

// A plain page body: label, title, and a list of short titled entries
function ListPage({
  label,
  title,
  meta,
  items,
}: {
  label: string
  title: string
  meta?: string
  items: { title: string; body: string }[]
}) {
  return (
    <section aria-labelledby="page-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-20 md:pt-28`}>
        <SectionLabel>{label}</SectionLabel>
        <h1 id="page-title" className="t-h2 max-w-[18ch]">
          <Rich text={title} />
        </h1>
        {meta && <p className="t-label mt-6 text-faint">{meta}</p>}
        <ul className="mt-16 max-w-4xl border-t border-ink">
          {items.map((item) => (
            <li key={item.title} className="grid gap-3 border-b border-hairline py-8 md:grid-cols-12 md:gap-8">
              <h2 className="t-h3 md:col-span-4">{item.title}</h2>
              <p className="t-body md:col-span-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// A12
export function NowBody({ t }: { t: Content }) {
  const s = t.nowPage
  return <ListPage label={s.label} title={s.title} meta={s.updated} items={s.items} />
}

// A22
export function PrivacyBody({ t }: { t: Content }) {
  const s = t.privacyPage
  return <ListPage label={s.label} title={s.title} items={s.items} />
}
