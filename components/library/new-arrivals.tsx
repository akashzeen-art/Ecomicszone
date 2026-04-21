"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Sparkles, Download } from "lucide-react"
import { batmanComics, donaldDuckComics, mickeyMouseComics, COMICS_API_BASE } from "@/lib/library-content"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { prefetchComicsPDFs } from "@/lib/pdf-cache"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineFullDescription } from "@/lib/i18n"

// New arrivals configuration - will be translated
const newArrivalsConfig = [
  {
    id: 1,
    key: "quantumHeroes",
    releaseDate: "2024-01-20",
    genreKey: "superhero",
    isNew: true,
    comic: batmanComics[0],
  },
  {
    id: 2,
    key: "cyberSamurai",
    releaseDate: "2024-01-18",
    genreKey: "cyberpunk",
    isNew: true,
    comic: batmanComics[1],
  },
  {
    id: 3,
    key: "mysteriousWorlds",
    releaseDate: "2024-01-15",
    genreKey: "fantasy",
    isNew: true,
    comic: batmanComics[2],
  },
  {
    id: 4,
    key: "spacePirates",
    releaseDate: "2024-01-12",
    genreKey: "sciFi",
    isNew: false,
    comic: batmanComics[3],
  },
  {
    id: 5,
    key: "shadowDetective",
    releaseDate: "2024-01-10",
    genreKey: "mystery",
    isNew: false,
    comic: batmanComics[4],
  },
  {
    id: 6,
    key: "elementalWarriors",
    releaseDate: "2024-01-08",
    genreKey: "action",
    isNew: false,
    comic: batmanComics[5],
  },
]

export function NewArrivals() {
  const { t, translations, language } = useLanguage()
  
  // Prefetch limited new arrivals PDFs to prevent memory exhaustion
  useEffect(() => {
    const comics = newArrivalsConfig
      .slice(0, 6) // Only prefetch first 6 new arrivals
      .map(arrival => arrival.comic)
      .filter(Boolean)
    prefetchComicsPDFs(comics, 6).catch(() => {
      // Silently fail - prefetch is optional
    })
  }, [])

  return (
    <section className="bg-[#121212] py-20">
      <div className="mx-auto px-0 md:px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 mb-4 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-[#4ECDC4]" />
            <span className="font-medium text-[#4ECDC4]">{translations.home.newArrivals.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.home.newArrivals.title.includes(" ") ? (
              <>
                {translations.home.newArrivals.title.split(" ")[0]} <span className="text-[#4ECDC4]">{translations.home.newArrivals.title.split(" ").slice(1).join(" ")}</span>
              </>
            ) : (
              translations.home.newArrivals.title
            )}
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.home.newArrivals.subtitle}
          </p>
        </motion.div>

        <div className="gap-0 sm:gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newArrivalsConfig.map((arrival, index) => {
            const comic = arrival.comic
            if (!comic) return null

            // Get translated title, description, and genre
            const arrivalData = translations.library.magazines.newArrivals[arrival.key as keyof typeof translations.library.magazines.newArrivals]
            const title = arrivalData?.title || ""
            const description = arrivalData?.description || ""
            const genre = translations.library.magazines.genres[arrival.genreKey as keyof typeof translations.library.magazines.genres] || ""

            // Use different thumbnail images - cycle through 5-10 for variety
            const thumbnailIndex = ((index) % 6) + 5
            const thumbnailUrl = `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/388x256/${thumbnailIndex}.png`
            const pdfUrl = comic.pdfFile || `${COMICS_API_BASE}/content/comics/batman/bmp${index + 1}/bms${index + 1}.pdf`
            
            // Proper redirection URLs - Next.js Link handles encoding automatically
            const readerUrl = pdfUrl 
              ? `/reader/${comic.slug}?file=${encodeURIComponent(pdfUrl)}`
              : undefined
            const detailUrl = `/majalla/maktaba/majalla/${comic.slug}`

            return (
              <motion.div
                key={arrival.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#4ECDC4]/20 hover:border-[#4ECDC4] overflow-hidden transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[388/256] overflow-hidden bg-gradient-to-b from-[#050509] via-[#0a0a0f] to-[#050509]">
                      <OptimizedImage
                        src={thumbnailUrl}
                        alt={title}
                        width={388}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="top-4 left-4 absolute z-10">
                        {arrival.isNew && (
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Badge className="bg-[#4ECDC4] font-bold text-[#121212] shadow-lg">
                              {translations.home.newArrivals.new}
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                      <div className="top-4 right-4 absolute z-10">
                        <Badge className="bg-[#FFD93D] text-[#121212] shadow-lg">
                          {genre}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="right-4 bottom-4 left-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-2">
                        {readerUrl && (
                          <Link href={readerUrl} prefetch={true} className="flex-1">
                            <Button
                              size="sm"
                              className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 w-full text-[#121212] font-semibold shadow-lg"
                            >
                              <Download className="mr-2 w-4 h-4" />
                              {translations.common.readNow}
                            </Button>
                          </Link>
                        )}
                        <Link href={detailUrl} prefetch={true} className="flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 text-white w-full font-semibold"
                          >
                            {translations.common.details}
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <Link href={detailUrl} prefetch={true}>
                        <h3 className="mb-2 font-bold text-white group-hover:text-[#4ECDC4] text-base sm:text-lg transition-colors cursor-pointer line-clamp-2">
                          {title}
                      </h3>
                      </Link>
                      <p className="mb-2 text-[#B0B0B0] text-xs sm:text-sm line-clamp-2">
                        {description}
                      </p>
                      {comic.fullDescription && (
                        <p className="mb-3 text-[#B0B0B0] text-[10px] sm:text-xs line-clamp-2">
                          {comic.series ? getMagazineFullDescription(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1) : comic.fullDescription}
                        </p>
                      )}
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[#4ECDC4] text-xs sm:text-sm">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{arrival.releaseDate}</span>
                        </div>
                        {comic.rating && (
                          <div className="flex items-center gap-1 text-[#FFD93D] text-xs sm:text-sm">
                            <span className="font-semibold">★</span>
                            <span>{comic.rating}</span>
                          </div>
                        )}
                      </div>
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-3 border-t border-white/10">
                        {readerUrl && (
                          <Link href={readerUrl} prefetch={true} className="flex-1">
                            <Button
                              size="sm"
                              className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 w-full text-[#121212] font-semibold shadow-md text-xs sm:text-sm min-h-[44px] sm:min-h-[36px]"
                            >
                            {translations.common.readNow}
                            </Button>
                          </Link>
                        )}
                        <Link href={detailUrl} prefetch={true} className="flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-[#B0B0B0] hover:text-white w-full font-medium text-xs sm:text-sm min-h-[44px] sm:min-h-[36px]"
                          >
                            {translations.common.details}
                          </Button>
                        </Link>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}