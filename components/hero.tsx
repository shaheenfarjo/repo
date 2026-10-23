"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLenis } from "lenis/react"
import { site } from "@/lib/site"

// WebGL is client-only and heavy; keep it out of the initial bundle
const SentientSphere = dynamic(() => import("./sentient-sphere").then((mod) => mod.SentientSphere), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full border border-white/10 animate-pulse" />
    </div>
  ),
})

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const lenis = useLenis()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const explore = () => {
    if (lenis) lenis.scrollTo("#about", { offset: -80 })
    else document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="relative h-svh min-h-[600px] w-full overflow-hidden bg-[#050505]">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <SentientSphere />
      </div>

      {/* Typography Overlay */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex flex-col justify-between px-6 pt-28 pb-24 md:px-12 md:pt-32 md:pb-20"
      >
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            {site.location.toUpperCase()} — {site.coordinates}
          </p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[0.95]">
            Shaheen
            <br />
            <span className="italic">K. Farjo</span>
          </h1>
        </motion.div>

        {/* Center Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block"
        >
          <motion.button
            onClick={explore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            Explore
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#2563eb] rounded-full animate-pulse" />
          </motion.button>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="self-end text-right max-w-xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">ENTREPRENEUR — BUSINESS DEVELOPER</p>
          <p className="font-sans text-3xl md:text-5xl font-light tracking-tight text-balance">
            Creating the things I wish existed in <span className="italic">Baghdad</span>.
          </p>
          <p lang="ar" dir="rtl" className="font-arabic text-lg md:text-xl text-white/40 mt-4">
            بغداد
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
