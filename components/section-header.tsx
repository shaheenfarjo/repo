"use client"

import { motion } from "framer-motion"

export function SectionHeader({ index, label, title, id }: { index: string; label: string; title: string; id?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 md:mb-24"
    >
      <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
        {index} — {label}
      </p>
      <h2 id={id} className="font-sans text-3xl md:text-5xl font-light italic">
        {title}
      </h2>
    </motion.div>
  )
}
