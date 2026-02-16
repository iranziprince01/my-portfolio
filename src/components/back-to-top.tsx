"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const SCROLL_THRESHOLD = 400
const FOOTER_OFFSET = 220

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [overFooter, setOverFooter] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const nearBottom =
        scrollY + window.innerHeight >
        document.documentElement.scrollHeight - FOOTER_OFFSET
      setVisible(scrollY > SCROLL_THRESHOLD)
      setOverFooter(nearBottom)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={
        overFooter
          ? "fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          : "fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      }
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}
