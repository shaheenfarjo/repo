"use client"

import { motion } from "framer-motion"
import { marquee } from "@/lib/site"

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  // Two copies so the -50% translate loops seamlessly
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4" aria-hidden="true">
      <div
        className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} hover:[animation-play-state:paused]`}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="marquee-item font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default"
          >
            {item}
            <span className="mx-8 text-white/20">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section aria-labelledby="toolkit-title" className="relative py-24 overflow-hidden md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 mb-16"
      >
        <h2 id="toolkit-title" className="font-mono text-xs tracking-[0.3em] text-muted-foreground font-normal">
          04 — TOOLKIT &amp; VALUES
        </h2>
        <p className="sr-only">
          Skills: {marquee.skills.join(", ")}. Values: {marquee.values.join(", ")}.
        </p>
      </motion.div>

      <div className="space-y-4">
        <MarqueeRow items={marquee.skills} direction="left" />
        <MarqueeRow items={marquee.values} direction="right" />
      </div>
    </section>
  )
}
