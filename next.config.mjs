// Security headers for every response. The pages run only small inline
// scripts, so scripts are limited to this site (plus Vercel's preview toolbar,
// which only appears on preview deployments).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://vercel.live https://vercel.com",
  "font-src 'self' https://vercel.live",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
]

// Files in /public keep their names between deploys, so they are cached for a
// day and refreshed in the background rather than kept forever
const publicAssetCache = { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:file(sphere\\.js|sphere-mask\\.webp|og\\.png|og-ar\\.png|icon\\.svg|icon-32\\.png|apple-touch-icon\\.png)",
        headers: [publicAssetCache],
      },
    ]
  },
}

export default nextConfig
