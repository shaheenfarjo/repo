# Performance budget

shaheenfarjo.com ships no framework JavaScript. Pages are static HTML and CSS
with small inline scripts that only enhance them (theme, clock, sphere loader,
tools). Everything works, or has a plain fallback, without JavaScript.

`pnpm budget` checks the built site against these limits (run it after `pnpm build`):

| What | Limit |
| --- | --- |
| External scripts per page | 0 |
| HTML per page (uncompressed) | 160 KB |
| Inline script per page (JSON-LD excluded) | 12 KB |
| All CSS | 60 KB |
| Font preloads per page | 9 |

Also kept by hand:

- Lighthouse mobile 95+ in all four categories on every page.
- The WebGL sphere loads only on the home page, after the page is idle, and
  falls back to a static image for reduced motion, Save-Data and low-end phones.
- No analytics, cookies or third-party requests (fonts are self-hosted).
- No new libraries.
