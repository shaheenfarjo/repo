"use client"

import { motion } from "framer-motion"
import { capabilities } from "@/lib/site"
import { SectionHeader } from "./section-header"

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="relative py-24 px-6 md:px-12 md:py-32">
      <SectionHeader index="03" label="WHAT I DO" title="From conversation to product" id="capabilities-title" />

      <ul className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability, index) => (
          <motion.li
            key={capability.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-[#050505] p-8 md:p-10 flex flex-col gap-6 sm:min-h-72 overflow-hidden"
          >
            <span className="font-mono text-xs tracking-widest text-accent">0{index + 1}</span>
            <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight">{capability.title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-auto">{capability.body}</p>
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
