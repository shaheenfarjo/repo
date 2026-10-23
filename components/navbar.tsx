"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "lenis/react"
import { navLinks, site } from "@/lib/site"

function StatusIndicator() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      <span className="font-mono text-xs tracking-wider text-muted-foreground">OPEN TO PARTNERSHIPS</span>
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock page scroll while the mobile menu is open, and close it on Escape
  useEffect(() => {
    if (!isMenuOpen) return
    if (lenis) lenis.stop()
    else document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    window.addEventListener("keydown", handleKey)
    return () => {
      if (lenis) lenis.start()
      else document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [isMenuOpen, lenis])

  const scrollTo = (target: string | number) => {
    setIsMenuOpen(false)
    if (lenis) {
      lenis.scrollTo(target, { offset: typeof target === "string" ? -80 : 0 })
    } else if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" })
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <nav aria-label="Primary" className="flex items-center justify-between px-6 py-4 my-0 md:px-12 md:py-5">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollTo(0)
            }}
            className="group flex items-center gap-2"
            aria-label={`${site.name}, back to top`}
          >
            <span className="font-mono text-xs tracking-widest text-foreground">{site.name.toUpperCase()}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className="group relative font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-accent mr-1">0{index + 1}</span>
                  {link.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <StatusIndicator />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-px bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className="group text-4xl font-sans tracking-tight text-foreground"
                >
                  <span className="text-accent font-mono text-sm mr-2">0{index + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <StatusIndicator />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
