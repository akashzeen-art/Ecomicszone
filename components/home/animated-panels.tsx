"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const panels = [
  {
    id: 1,
    image: "/placeholder.svg",
    text: "Our hero soars through the sky...",
    position: "left",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    text: "When suddenly, a villain appears!",
    position: "right",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    text: "An epic battle ensues...",
    position: "center",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    text: "Victory is achieved!",
    position: "left",
  },
]

export function AnimatedPanels() {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, index) => {
        if (!panel) return

        gsap.fromTo(
          panel,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotation: index % 2 === 0 ? -5 : 5,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comic <span className="text-[#FF4C60]">Storyboard</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Experience storytelling like never before with our animated comic panels
          </p>
        </motion.div>

        <div className="space-y-20">
          {panels.map((panel, index) => (
            <div
              key={panel.id}
              ref={(el) => {
                if (el) panelsRef.current[index] = el
              }}
              className={`flex items-center gap-12 ${
                panel.position === "right" ? "flex-row-reverse" : panel.position === "center" ? "justify-center" : ""
              }`}
            >
              <div className="flex-1 max-w-md">
                <div className="relative group overflow-hidden">
                  <div className="absolute -inset-4 bg-[#FF4C60]/20 rounded-lg blur-xl group-hover:bg-[#FF4C60]/30 transition-all duration-300" />
                  <div className="relative bg-[#1E1E2F] comic-border overflow-hidden">
                    <img
                      src={panel.image || "/placeholder.svg"}
                      alt={`Comic panel ${panel.id}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {panel.position !== "center" && (
                <div className="flex-1 max-w-md">
                  <div className="speech-bubble bg-[#FFD93D] text-[#121212] p-6 rounded-lg font-bold text-lg">
                    {panel.text}
                  </div>
                </div>
              )}

              {panel.position === "center" && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="speech-bubble bg-[#FFD93D] text-[#121212] p-4 rounded-lg font-bold text-lg">
                    {panel.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
