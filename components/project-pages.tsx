import { findProject, pagePath, type CaseSlug, type Content, type ProjectSlug, type Table } from "@/lib/content"
import { Rich } from "@/lib/rich"
import { ExternalSite, ProjectTitle } from "./sections"
import { SectionLabel, container } from "./ui"

function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="t-label inline-flex min-h-11 items-center gap-2 text-muted hover:text-ink">
      <span aria-hidden="true" className="rtl:-scale-x-100">
        ←
      </span>
      {label}
    </a>
  )
}

// C5: a short project page, with only the fields supplied for that project
export function ProjectBody({ t, slug }: { t: Content; slug: ProjectSlug }) {
  const project = findProject(t, slug)
  const l = t.projectLabels
  const fields = (
    [
      ["roleDates", l.roleDates],
      ["context", l.context],
      ["constraints", l.constraints],
      ["did", l.did],
      ["truth", l.truth],
    ] as const
  ).filter(([key]) => project.detail[key])
  return (
    <article aria-labelledby="project-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-12 md:pt-16`}>
        <BackLink href={`${pagePath(t.lang)}#work`} label={l.back} />
        <p className="t-label mt-12 text-faint">
          <span className="t-num">{project.date}</span>
        </p>
        <h1 id="project-title" className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <ProjectTitle project={project} className="t-h2" />
        </h1>
        <p className="t-lead mt-8">{project.description}</p>
        <dl className="mt-16 max-w-4xl border-t border-ink">
          {fields.map(([key, label]) => (
            <div key={key} className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-12 sm:gap-6">
              <dt className="t-label text-faint sm:col-span-4">{label}</dt>
              <dd className="t-body text-ink sm:col-span-8">{project.detail[key]}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
          {project.caseSlug && (
            <a href={pagePath(t.lang, `cases/${project.caseSlug}`)} className="btn btn-solid t-button">
              {l.readCase}
            </a>
          )}
          {project.href && <ExternalSite href={project.href} label={l.visit} />}
        </div>
      </div>
    </article>
  )
}

// A11: a fuller case page for SAL and The IDEA, built without images
export function CaseBody({ t, slug }: { t: Content; slug: CaseSlug }) {
  const study = t.cases[slug]
  const l = t.projectLabels
  return (
    <article aria-labelledby="case-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-12 md:pt-16`}>
        <BackLink href={pagePath(t.lang, `work/${slug}`)} label={l.backToProject} />
        <h1 id="case-title" className="t-h2 mt-12 max-w-[22ch]">
          <Rich text={study.title} />
        </h1>
        <p className="t-lead mt-8">{study.intro}</p>

        <div className="mt-16 max-w-4xl space-y-16">
          {study.timeline && (
            <section aria-labelledby="case-timeline">
              <h2 id="case-timeline" className="t-label border-b border-ink pb-4 text-ink">
                {study.timeline.title}
              </h2>
              <DataTable
                table={{ title: study.timeline.title, columns: study.timeline.columns, rows: study.timeline.rows }}
                hideTitle
              />
            </section>
          )}

          <section aria-labelledby="case-decisions">
            <h2 id="case-decisions" className="t-label border-b border-ink pb-4 text-ink">
              {study.decisions.title}
            </h2>
            {/* Run-in labels, as written: "No money: the Society holds…" */}
            <ul>
              {study.decisions.items.map((item) => (
                <li key={item.title} className="border-b border-hairline py-6">
                  <p className="t-body max-w-[62ch] text-ink">
                    <strong className="t-h3">{item.title}:</strong> {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-8 border-t border-ink pt-8">
            {[study.built, study.truth, study.unproven].map(
              (block) =>
                block && (
                  <p key={block.title} className="t-lead max-w-[44ch]">
                    <strong className="t-h3">{block.title}:</strong> {block.body}
                  </p>
                ),
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// A table on wide screens, and the same rows stacked as labeled lists on phones,
// so no page scrolls sideways
export function DataTable({ table, hideTitle = false }: { table: Table; hideTitle?: boolean }) {
  return (
    <div className="mt-2">
      {!hideTitle && <h2 className="t-label border-b border-ink pb-4 text-ink">{table.title}</h2>}
      <table className="hidden w-full border-collapse text-start md:table">
        {!hideTitle && <caption className="sr-only">{table.title}</caption>}
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col" className="t-label border-b border-hairline py-4 pe-6 text-start font-normal text-faint">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={index} scope="row" className="t-body border-b border-hairline py-4 pe-6 text-start align-top font-normal text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={index} className="t-body border-b border-hairline py-4 pe-6 align-top">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
        {table.footer && (
          <tfoot>
            <tr>
              {table.footer.map((cell, index) => (
                <td key={index} className="t-h3 border-b border-ink py-4 pe-6 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
      <ul className="md:hidden">
        {[...table.rows, ...(table.footer ? [table.footer] : [])].map((row) => (
          <li key={row[0]} className="border-b border-hairline py-4">
            <p className="t-h3">{row[0]}</p>
            <dl className="mt-2 space-y-1">
              {row.slice(1).map((cell, index) =>
                cell ? (
                  <div key={index} className="flex flex-wrap gap-x-3">
                    <dt className="t-label text-faint">{table.columns[index + 1]}</dt>
                    <dd className="t-body text-ink">{cell}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

// A9: one sample report, labeled as a sample at the top
export function SampleBody({ t }: { t: Content }) {
  const s = t.sample
  return (
    <article aria-labelledby="sample-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-12 md:pt-16`}>
        <p role="note" className="t-body border-s-2 border-ink bg-surface px-5 py-4 text-ink">
          {s.banner}
        </p>
        <div className="mt-12">
          <SectionLabel>{t.consulting.packages.items[0].name}</SectionLabel>
        </div>
        <h1 id="sample-title" className="t-h2">
          {s.title}
        </h1>
        <div className="mt-16 max-w-5xl space-y-16">
          <section aria-labelledby="sample-summary">
            <h2 id="sample-summary" className="t-label border-b border-ink pb-4 text-ink">
              {s.summaryTitle}
            </h2>
            <p className="t-lead mt-6 max-w-[48ch]">{s.summary}</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[s.score, s.next].map((item) => (
                <div key={item.key} className="border-t border-hairline pt-4">
                  <dt className="t-label text-faint">{item.key}</dt>
                  <dd className="t-h3 mt-2">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          {s.tables.map((table) => (
            <section key={table.title} aria-label={table.title}>
              <DataTable table={table} />
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

// A10: three notes on one page, each its own printable article
export function NotesBody({ t }: { t: Content }) {
  const s = t.notes
  return (
    <section aria-labelledby="notes-title" className="pb-24 md:pb-32">
      <div className={`${container} pt-20 md:pt-28`}>
        <SectionLabel>{s.label}</SectionLabel>
        <h1 id="notes-title" className="t-h2 max-w-[18ch]">
          <Rich text={s.title} />
        </h1>
        <p className="t-body mt-6">{s.intro}</p>
        <nav aria-label={s.label} className="mt-10">
          <ol className="border-t border-hairline">
            {s.items.map((note, index) => (
              <li key={note.id} className="border-b border-hairline">
                <a href={`#${note.id}`} className="flex min-h-12 items-baseline gap-4 py-3 text-ink hover:underline">
                  <span className="t-num t-label text-faint">0{index + 1}</span>
                  <span className="t-body text-ink">{note.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-20 space-y-24">
          {s.items.map((note, index) => (
            <article key={note.id} id={note.id} aria-labelledby={`${note.id}-title`} className="note scroll-mt-20">
              <p className="t-num t-label text-faint">0{index + 1}</p>
              <h2 id={`${note.id}-title`} className="t-h2 mt-3 max-w-[24ch]">
                {note.title}
              </h2>
              <div className="mt-8 max-w-[62ch] space-y-5">
                {note.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="t-body text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
