# shaheenfarjo.com

The personal site and consulting offer of Shaheen K. Farjo, in English (`/`)
and Arabic (`/ar`).

## Pages

| Path | What it is |
| --- | --- |
| `/`, `/ar` | The landing page: about, work, consulting, notes, contact |
| `/tools`, `/ar/tools` | Business health check and break-even calculator |
| `/sample-diagnostic`, `/ar/sample-diagnostic` | A sample Diagnostic report (made-up business) |
| `/privacy`, `/ar/privacy` | What the site keeps |

## How it's built

- Next.js (Pages Router), React, Tailwind CSS. No other runtime libraries.
- Every page is static HTML with no framework JavaScript
  (`unstable_runtimeJS: false`). The little behavior there is (theme, clock,
  sphere, tools) comes from small inline scripts, and everything works without them.
- All copy is in `lib/content/`: `en.ts` and `ar.ts`, one object per language,
  both following the shape in `types.ts`. Contact details, links and paths are
  in `site.ts`.
- `components/pages.tsx` lays out each page from the sections in
  `components/landing.tsx`, `tools.tsx` and `simple-pages.tsx`.
- No database, accounts, cookies, or analytics. Tools run in the browser and
  send nothing unless the visitor presses the WhatsApp button.

## Commands

```sh
pnpm install
pnpm dev         # local development
pnpm typecheck
pnpm build       # uses webpack so each page preloads only its own fonts
pnpm budget      # checks page weight against docs/performance-budget.md
```

The same checks run on every pull request (`.github/workflows/check.yml`).

## Rules

- Language and formatting: `docs/language-standards.md`
- Performance: `docs/performance-budget.md`
- This repository is public. Never commit client names beyond those already
  public, client data, documents, provider names, costs, margins, or company
  registration details.
- When a page is added: add it to `public/sitemap.xml` and to the structured
  data in `components/page-head.tsx`.
