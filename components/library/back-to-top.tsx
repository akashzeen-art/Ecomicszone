"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="w-14 h-14 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow animate-pulse-glow group"
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <Rocket className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
