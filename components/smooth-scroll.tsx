"use client"

import { ReactLenis } from "lenis/react"
import { MotionConfig, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      {prefersReducedMotion ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, anchors: { offset: -80 } }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  )
}
