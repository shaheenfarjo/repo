// Pages that were merged into the landing page now point at their section
const merged = [
  ["/consulting", "#consulting"],
  ["/method", "#consulting"],
  ["/workshops", "#services"],
  ["/notes", "#notes"],
  ["/now", "#about"],
  ["/work/:slug", "#:slug"],
  ["/cases/:slug", "#:slug"],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return merged.flatMap(([source, hash]) => [
      { source, destination: `/${hash}`, permanent: true },
      { source: `/ar${source}`, destination: `/ar${hash}`, permanent: true },
    ])
  },
}

export default nextConfig
