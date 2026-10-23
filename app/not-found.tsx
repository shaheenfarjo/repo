import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center bg-[#050505]">
      <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">404 — NOT FOUND</p>
      <h1 className="font-sans text-4xl md:text-6xl font-light tracking-tight">
        This doesn&apos;t exist <span className="italic">yet</span>.
      </h1>
      <Link
        href="/"
        className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500"
      >
        Back home
      </Link>
    </main>
  )
}
