import type { Table } from "@/lib/content"

// A table on wide screens, and the same rows stacked as labeled lists on
// phones, so no page scrolls sideways
export function DataTable({ table, hideTitle = false }: { table: Table; hideTitle?: boolean }) {
  return (
    <div className="mt-2">
      {!hideTitle && <h2 className="t-label border-b border-ink pb-4 text-ink">{table.title}</h2>}
      <table className="hidden w-full border-collapse text-start md:table">
        <caption className="sr-only">{table.title}</caption>
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
