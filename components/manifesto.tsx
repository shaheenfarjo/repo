"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { manifesto } from "@/lib/site"

export function Manifesto() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-75%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} aria-label="Manifesto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Screen readers get the statements as a plain list */}
      <ul className="sr-only">
        {manifesto.map((statement) => (
          <li key={statement}>{statement}</li>
        ))}
      </ul>

      <div className="relative flex items-center overflow-hidden py-4" aria-hidden="true">
        <motion.div style={{ x: smoothX }} className="flex gap-16 md:gap-24 px-6 md:px-12 whitespace-nowrap">
          {manifesto.map((statement, index) => (
            <p
              key={statement}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight leading-tight text-white/90"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-6 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
