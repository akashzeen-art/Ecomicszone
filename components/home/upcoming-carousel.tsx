"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Bell } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// API Base URL
const COMICS_API_BASE = "https://api.ameora.fun"

// Upcoming comics configuration - will use translations
const upcomingComicsConfig = [
  {
    id: 1,
    key: "quantumHeroes",
    releaseDate: "2024-02-15",
    image: `${COMICS_API_BASE}/content/ecomics/releaseupcoming/1.png`,
    genreKey: "superhero",
    preOrders: 15420,
  },
  {
    id: 2,
    key: "cyberSamurai",
    releaseDate: "2024-02-22",
    image: `${COMICS_API_BASE}/content/ecomics/releaseupcoming/2.png`,
    genreKey: "cyberpunk",
    preOrders: 12890,
  },
  {
    id: 3,
    key: "mysteriousWorlds",
    releaseDate: "2024-03-01",
    image: `${COMICS_API_BASE}/content/ecomics/releaseupcoming/3.png`,
    genreKey: "fantasy",
    preOrders: 18750,
  },
  {
    id: 4,
    key: "spacePirates",
    releaseDate: "2024-03-08",
    image: `${COMICS_API_BASE}/content/ecomics/releaseupcoming/4.png`,
    genreKey: "sciFi",
    preOrders: 9630,
  },
]

export function UpcomingCarousel() {
  const { translations, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % upcomingComicsConfig.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % upcomingComicsConfig.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + upcomingComicsConfig.length) % upcomingComicsConfig.length)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section className="bg-gradient-to-b from-[#121212] to-[#1E1E2F] py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/10 mb-4 px-4 py-2 rounded-full">
            <Calendar className="w-5 h-5 text-[#FFD93D]" />
            <span className="font-medium text-[#FFD93D]">{translations.upcoming.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.upcoming.title} <span className="text-[#FF4C60]">{translations.upcoming.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.upcoming.subtitle}
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                {(() => {
                  const item = upcomingComicsConfig[currentIndex]
                  const arrivalData = translations.library.magazines.newArrivals[item.key as keyof typeof translations.library.magazines.newArrivals]
                  const title = arrivalData?.title || ""
                  const description = arrivalData?.description || ""
                  const genre = translations.library.magazines.genres[item.genreKey as keyof typeof translations.library.magazines.genres] || ""
                  
                  return (
                <Card className="bg-[#1E1E2F] comic-shadow border-[#FF4C60]/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="gap-0 grid md:grid-cols-2">
                          <div className="relative overflow-hidden">
                        <img
                              src={item.image || "/placeholder.svg"}
                              alt={title}
                              className="w-full h-80 md:h-96 object-cover bg-[#050509]"
                        />
                        <div className="top-4 right-4 absolute">
                              <Badge className="bg-[#FFD93D] text-[#121212]">{genre}</Badge>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center p-8">
                        <h3 className="mb-4 font-bold text-white text-2xl md:text-3xl">
                              {title}
                        </h3>
                            <p className="mb-6 text-[#B0B0B0] text-lg">{description}</p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2 text-[#FFD93D]">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">
                                  {translations.upcoming.releaseDate} {formatDate(item.releaseDate)}
                            </span>
                          </div>
                          <div className="text-[#B0B0B0]">
                            <span className="font-bold text-[#FF4C60]">
                                  {item.preOrders.toLocaleString()}
                            </span>{" "}
                                {translations.upcoming.preOrders}
                          </div>
                        </div>
                        <Button size="lg" className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow text-white">
                          <Bell className="mr-2 w-5 h-5" />
                              {translations.upcoming.notifyMe}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="top-1/2 left-4 absolute bg-[#1E1E2F]/80 hover:bg-[#FF4C60] border-[#FF4C60] text-[#FF4C60] hover:text-white -translate-y-1/2 transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="top-1/2 right-4 absolute bg-[#1E1E2F]/80 hover:bg-[#FF4C60] border-[#FF4C60] text-[#FF4C60] hover:text-white -translate-y-1/2 transform"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {upcomingComicsConfig.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#FF4C60] scale-125" : "bg-[#B0B0B0]/30 hover:bg-[#B0B0B0]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
