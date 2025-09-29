"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function RevealSm({ children }: { children: React.ReactNode }) {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSmall(e.matches)
    }

    handleChange(mediaQuery)

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Si es sm se aplica RevealSm
  if (!isSmall) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}