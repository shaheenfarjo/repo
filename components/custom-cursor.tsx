"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Motion values update the DOM directly, so mouse moves don't re-render React
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const dotX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 })
  const dotY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 })
  const ringX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.8 })
  const ringY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.8 })

  useEffect(() => {
    // Only for precise pointers (mouse/trackpad), never on touch screens
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(Boolean(target.closest("a, button, [data-cursor-hover]")))
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div aria-hidden="true">
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0 : 5, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Hover ring */}
      <motion.div
        className="fixed top-0 left-0 -ml-6 -mt-6 w-12 h-12 border border-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovering ? 1 : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
      />
    </div>
  )
}
