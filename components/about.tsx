"use client"

import { motion } from "framer-motion"
import { about } from "@/lib/site"
import { SectionHeader } from "./section-header"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-6 md:px-12 py-24 md:py-32 scroll-mt-20">
      <SectionHeader index="01" label="ABOUT" title="Global standards, local roots" id="about-title" />

      <div className="grid gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <p className="font-sans text-2xl md:text-4xl font-light leading-snug tracking-tight text-balance">{about.intro}</p>
          <div className="mt-10 space-y-6 max-w-2xl">
            {about.body.map((paragraph) => (
              <p key={paragraph} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-4 md:col-start-9 self-end"
        >
          {about.facts.map((fact) => (
            <div key={fact.label} className="flex items-baseline justify-between gap-6 border-t border-white/10 py-5">
              <dt className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase shrink-0">
                {fact.label}
              </dt>
              <dd className="font-sans text-lg text-right">{fact.value}</dd>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </motion.dl>
      </div>
    </section>
  )
}
