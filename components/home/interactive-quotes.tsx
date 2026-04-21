"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function InteractiveQuotes() {
  const { translations } = useLanguage()
  const [activeQuote, setActiveQuote] = useState(0)
  const quoteRefs = useRef<HTMLDivElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const quotes = [
    {
      id: 1,
      text: translations.quotes.quotes.spiderman.text,
      character: translations.quotes.quotes.spiderman.character,
      color: "#FF4C60",
    },
    {
      id: 2,
      text: translations.quotes.quotes.batman.text,
      character: translations.quotes.quotes.batman.character,
      color: "#1E1E2F",
    },
    {
      id: 3,
      text: translations.quotes.quotes.superman.text,
      character: translations.quotes.quotes.superman.character,
      color: "#4ECDC4",
    },
    {
      id: 4,
      text: translations.quotes.quotes.hulk.text,
      character: translations.quotes.quotes.hulk.character,
      color: "#4CAF50",
    },
    {
      id: 5,
      text: translations.quotes.quotes.captainAmerica.text,
      character: translations.quotes.quotes.captainAmerica.character,
      color: "#2196F3",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-rotate quotes
      const interval = setInterval(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length)
      }, 4000)

      return () => clearInterval(interval)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Animate quote change
    quoteRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === activeQuote) {
          gsap.fromTo(
            ref,
            { scale: 0.8, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
          )
        } else {
          gsap.to(ref, { scale: 0.8, opacity: 0, duration: 0.3 })
        }
      }
    })
  }, [activeQuote])

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-[#1E1E2F] to-[#121212] py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.quotes.title} <span className="text-[#FF4C60]">{translations.quotes.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">{translations.quotes.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative flex justify-center items-center h-64">
            {quotes.map((quote, index) => (
              <div
                key={quote.id}
                ref={(el) => {
                  if (el) quoteRefs.current[index] = el
                }}
                className={`absolute inset-0 flex items-center justify-center ${
                  index === activeQuote ? "z-10" : "z-0"
                }`}
              >
                <div className="text-center">
                  <div className="relative bg-[#FFD93D] mx-auto mb-6 p-8 rounded-2xl max-w-2xl text-[#121212] speech-bubble">
                    <Quote className="top-4 left-4 absolute opacity-0 w-8 h-8" />
                    <p className="pl-8 font-bold text-xl md:text-2xl italic">{quote.text}</p>
                  </div>
                  <p className="text-[#B0B0B0] text-lg">
                    — <span className="font-bold text-white">{quote.character}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeQuote ? "bg-[#FF4C60] scale-125" : "bg-[#B0B0B0]/30 hover:bg-[#B0B0B0]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
