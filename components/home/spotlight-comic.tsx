"use client"

import { memo, useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Play, BookOpen } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getSeriesName } from "@/lib/i18n"

// API Base URL from Excel
const COMICS_API_BASE = "https://api.ameora.fun"

// Spotlight comics configuration - will use translations
const comicsConfig = [
  {
    id: "batman-spotlight-1",
    slug: "batman-1",
    series: "batman" as const,
    issueNumber: 1,
    heroImage: "/batman.jpg",
    rating: 4.9,
    readers: "2.4M",
    issuesCount: 50,
    summaryKey: "batman" as const,
    pdfFile: `${COMICS_API_BASE}/content/comics/batman/bmp1/bms1.pdf`,
  },
  {
    id: "mickey-spotlight-1",
    slug: "mickey-mouse-1",
    series: "mickey_mouse" as const,
    issueNumber: 1,
    heroImage: "/mickeymouse.jpg",
    rating: 4.8,
    readers: "1.8M",
    issuesCount: 18,
    summaryKey: "mickeyMouse" as const,
    pdfFile: `${COMICS_API_BASE}/content/comics/mickey_mouse/mmp1/mms1.pdf`,
  },
  {
    id: "donald-spotlight-1",
    slug: "donald-duck-1",
    series: "donald_duck" as const,
    issueNumber: 1,
    heroImage: "/donaldduck.jpg",
    rating: 4.7,
    readers: "1.5M",
    issuesCount: 10,
    summaryKey: "donaldDuck" as const,
    pdfFile: `${COMICS_API_BASE}/content/comics/donald_duck/ddp1/dds1.pdf`,
  },
]

export function SpotlightComic() {
  const { t, translations, language } = useLanguage()
  const [index, setIndex] = useState(0)
  const comicConfig = comicsConfig[index]
  
  // Get translated title, genre, and summary
  const title = getMagazineTitle(language, comicConfig.series, comicConfig.issueNumber)
  const seriesName = getSeriesName(language, comicConfig.series)
  const summary = translations.home.spotlight.summaries[comicConfig.summaryKey]

  // Change comic every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % comicsConfig.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge className="bg-[#FFD93D] mb-4 px-4 py-2 text-[#121212] text-lg">
            {translations.home.spotlight.badge}
          </Badge>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            <span className="text-[#FF4C60]">{translations.home.spotlight.spotlightLabel}</span> {title}
          </h2>
        </motion.div>

        <div className="items-center gap-12 grid lg:grid-cols-2">
          {/* Image */}
          <motion.div
            key={comicConfig.heroImage}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-[#FF4C60]/20 to-[#FFD93D]/20 blur-2xl group-hover:blur-3xl rounded-2xl transition-all duration-500" />
            <div className="relative w-full">
              <OptimizedImage
                src={comicConfig.heroImage}
                alt={title}
                width={424}
                height={512}
                className="comic-shadow w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                className="top-4 right-4 absolute bg-[#FFD93D] px-3 py-1 rounded-full font-bold text-[#121212]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {translations.common.new}
              </motion.div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 font-bold text-white text-3xl">
                {title} #{comicConfig.issueNumber}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(comicConfig.rating) ? "text-[#FFD93D] fill-current" : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-bold text-white">{comicConfig.rating}</span>
                </div>
                <Badge className="bg-[#FF4C60]/20 border-[#FF4C60] text-[#FF4C60]">
                  {seriesName}
                </Badge>
              </div>
              <p className="mb-6 text-[#B0B0B0] text-lg leading-relaxed">{summary}</p>
            </div>

            <div className="gap-4 grid grid-cols-3 py-6 border-[#FF4C60]/20 border-y">
              <div className="text-center">
                <div className="font-bold text-[#FF4C60] text-2xl">{comicConfig.readers}</div>
                <div className="text-[#B0B0B0] text-sm">{translations.home.spotlight.stats.readers}</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FFD93D] text-2xl">{comicConfig.issuesCount}</div>
                <div className="text-[#B0B0B0] text-sm">{translations.home.spotlight.stats.issues}</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FF4C60] text-2xl">{comicConfig.rating}</div>
                <div className="text-[#B0B0B0] text-sm">{translations.home.spotlight.stats.rating}</div>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4">
              <Link href={`/reader/${comicConfig.slug}/?file=${encodeURIComponent(comicConfig.pdfFile)}`} className="flex-1">
                <Button className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow text-white">
                  <BookOpen className="mr-2 w-5 h-5" />
                  {translations.common.readNow}
                </Button>
              </Link>
              <Link href={`/majalla/maktaba/majalla/${comicConfig.slug}/`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-[#FFD93D] border-[#FFD93D] text-[#FFD93D] hover:text-[#121212]"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    {translations.common.details}
                  </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
