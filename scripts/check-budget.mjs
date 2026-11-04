// A22: performance budget. Run after `pnpm build`: fails if any page ships
// framework JavaScript or grows past the limits in docs/performance-budget.md.
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const BUDGET = {
  htmlBytes: 160_000, // one page's HTML, before compression
  inlineScriptBytes: 12_000, // all inline <script> on one page, JSON-LD excluded
  cssBytes: 60_000, // all CSS files together
  fontPreloads: 9, // <link rel="preload" as="font"> per page
}

const root = ".next/server/pages"
const pages = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (name.endsWith(".html") && !name.startsWith("_") && name !== "500.html") pages.push(path)
  }
}
walk(root)

const failures = []
for (const path of pages) {
  const html = readFileSync(path, "utf8")
  const external = html.match(/<script[^>]+src=/g) ?? []
  const inline = [...html.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)].reduce((n, m) => n + m[1].length, 0)
  const preloads = (html.match(/rel="preload"[^>]*as="font"/g) ?? []).length
  const page = path.slice(root.length)
  if (external.length) failures.push(`${page}: ships ${external.length} external script(s)`)
  if (html.length > BUDGET.htmlBytes) failures.push(`${page}: HTML ${html.length} B > ${BUDGET.htmlBytes}`)
  if (inline > BUDGET.inlineScriptBytes) failures.push(`${page}: inline script ${inline} B > ${BUDGET.inlineScriptBytes}`)
  if (preloads > BUDGET.fontPreloads) failures.push(`${page}: ${preloads} font preloads > ${BUDGET.fontPreloads}`)
  console.log(`${page.padEnd(22)} html ${String(html.length).padStart(6)} B  inline js ${String(inline).padStart(5)} B  font preloads ${preloads}`)
}

const cssDir = ".next/static/css"
let css = 0
try {
  for (const name of readdirSync(cssDir)) css += statSync(join(cssDir, name)).size
} catch {}
console.log(`css total ${css} B`)
if (css > BUDGET.cssBytes) failures.push(`CSS ${css} B > ${BUDGET.cssBytes}`)

if (failures.length) {
  console.error(`\nOver budget:\n- ${failures.join("\n- ")}`)
  process.exit(1)
}
console.log("\nWithin budget.")
