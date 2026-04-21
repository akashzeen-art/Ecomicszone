"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// API Base URL
const COMICS_API_BASE = "https://api.ameora.fun"

const comicPanels = [
  "/space-patrol-comic.png",
  "/ancient-mythology-comic-cover.png",
  "/cyber-knights-comic-cover.png",
  "/comic-book-office.png",
  "/fierce-mutant.png",
  `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/3.png`,
  "/placeholder.svg",
  "/placeholder.svg",
]
//kjbinonm ovmwkijjnffiooimonjfjnjrnondmknwjr vioijwojfgmnwoijef
export function ParallaxStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const strip1Ref = useRef<HTMLDivElement>(null)
  const strip2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First strip - moves left
      gsap.to(strip1Ref.current, {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Second strip - moves right
      gsap.to(strip2Ref.current, {
        x: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-[#121212] overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Comic <span className="text-[#FFD93D]">Universe</span>
        </h2>
        <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
          Explore the endless world of comics with our vast collection
        </p>
      </div>

      <div className="space-y-8">
        {/* First strip */}
        <div className="relative">
          <div ref={strip1Ref} className="flex gap-6 w-[200%]" style={{ transform: "translateX(-25%)" }}>
            {[...comicPanels, ...comicPanels].map((panel, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-48 bg-[#1E1E2F] rounded-lg overflow-hidden comic-border group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={panel || "/placeholder.svg"}
                  alt={`Comic panel ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second strip */}
        <div className="relative">
          <div ref={strip2Ref} className="flex gap-6 w-[200%]" style={{ transform: "translateX(-75%)" }}>
            {[...comicPanels, ...comicPanels].map((panel, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-48 bg-[#1E1E2F] rounded-lg overflow-hidden comic-border group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={panel || "/placeholder.svg"}
                  alt={`Comic panel ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none" />
    </section>
  )
}
