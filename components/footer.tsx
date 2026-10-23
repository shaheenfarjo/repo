"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site"

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
})

function BaghdadTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setTime(timeFormatter.format(new Date()))
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-xs tracking-widest text-muted-foreground">
      <span className="mr-2">BAGHDAD</span>
      <span className="text-white tabular-nums">{time ?? "--:--:--"}</span>
      <span className="ml-2">GMT+3</span>
    </div>
  )
}

export function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer id="contact" className="relative scroll-mt-20">
      {/* Main CTA */}
      <motion.a
        href={`mailto:${site.email}`}
        data-cursor-hover
        className="group relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#2563eb]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-24 px-6 md:px-12 border-t border-white/10">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] mb-6"
            animate={{ color: isHovered ? "#050505" : "#a1a1a1" }}
            transition={{ duration: 0.3 }}
          >
            05 — CONTACT
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h2
                className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
                animate={{ color: isHovered ? "#050505" : "#fafafa" }}
                transition={{ duration: 0.3 }}
              >
                Let&apos;s build <span className="italic">something</span>.
              </motion.h2>
              <motion.p
                className="mt-6 font-mono text-sm md:text-base tracking-wider break-all"
                animate={{ color: isHovered ? "#050505" : "#a1a1a1" }}
                transition={{ duration: 0.3 }}
              >
                {site.email}
              </motion.p>
            </div>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      {/* Footer Info */}
      <div className="px-6 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <BaghdadTime />

          <ul className="flex gap-8">
            {site.socials.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  data-cursor-hover
                  className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
                >
                  {link.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © 2003 — {new Date().getFullYear()} {site.name.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  )
}
