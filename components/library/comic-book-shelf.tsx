"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Star } from "lucide-react"
import { libraryMagazines, batmanComics, COMICS_API_BASE } from "@/lib/library-content"
import { prefetchComicsPDFs } from "@/lib/pdf-cache"
import { useLanguage } from "@/contexts/language-context"

// Map shelf titles to magazine slugs for proper API mapping
const shelfTitleToSlugMap: Record<string, string> = {
  "ملحمة اللانهاية": "ملحمة-اللانهاية",
  "الأساطير الكونية": "الأساطير-الكونية",
  "سجلات عالم الظل": "سجلات-عالم-الظل",
  "محاربي النيون": "محاربي-النيون",
  "حراس الوقت": "حراس-الوقت",
  "أكاديمية ميستيك": "أكاديمية-ميستيك",
}

// Helper to find magazine by title or slug
function findMagazineByTitle(title: string) {
  // First try to find by slug mapping
  const slug = shelfTitleToSlugMap[title]
  if (slug) {
    let magazine = libraryMagazines.find((m) => m.slug === slug)
    if (magazine) return magazine
  }
  
  // Try exact title match
  let magazine = libraryMagazines.find((m) => m.title === title)
  if (magazine) return magazine
  
  // Try partial match for titles
  magazine = libraryMagazines.find((m) => m.title.includes(title) || title.includes(m.title))
  if (magazine) return magazine
  
  // Fallback to Batman comics by index if still not found
  const index = shelfComicsData.findIndex((s) => {
    // This is a fallback, so we'll just use the comicIndex
    return false // We'll handle this differently
  })
  // We'll use comicIndex directly in the component instead
  
  return magazine
}
import { OptimizedImage } from "@/components/ui/optimized-image"

// Shelf comics configuration - titles will be translated
const shelfComicsData = [
  {
    id: 1,
    key: "infinityEpic",
    rating: 4.9,
    spine: "#FF4C60",
    thickness: 8,
    comicIndex: 0,
  },
  {
    id: 2,
    key: "cosmicLegends",
    rating: 4.8,
    spine: "#4ECDC4",
    thickness: 6,
    comicIndex: 1,
  },
  {
    id: 3,
    key: "shadowWorld",
    rating: 4.8,
    spine: "#9B59B6",
    thickness: 10,
    comicIndex: 2,
  },
  {
    id: 4,
    key: "neonWarriors",
    rating: 4.7,
    spine: "#FFD93D",
    thickness: 5,
    comicIndex: 3,
  },
  {
    id: 5,
    key: "timeGuardians",
    rating: 4.7,
    spine: "#FF6B35",
    thickness: 7,
    comicIndex: 4,
  },
  {
    id: 6,
    key: "mysticAcademy",
    rating: 4.6,
    spine: "#E91E63",
    thickness: 9,
    comicIndex: 5,
  },
]

const titleToSlugMap: Record<string, string> = Object.fromEntries(
  libraryMagazines.map((m) => [m.title, m.slug]),
)

export function ComicBookShelf() {
  const { translations, language } = useLanguage()
  
  // Prefetch limited shelf PDFs to prevent memory exhaustion
  useEffect(() => {
    const comics = shelfComicsData
      .slice(0, 10) // Only prefetch first 10 shelf comics
      .map(shelfComic => {
        // Get translated title to find magazine
        const comicData = translations.library.bookShelf.comics[shelfComic.key as keyof typeof translations.library.bookShelf.comics]
        const title = comicData?.title || ""
        let magazine = findMagazineByTitle(title)
        if (!magazine) {
          magazine = batmanComics[shelfComic.comicIndex]
        }
        return magazine
      })
      .filter(Boolean)
    
    prefetchComicsPDFs(comics, 10).catch(() => {
      // Silently fail - prefetch is optional
    })
  }, [])

  return (
    <section className="bg-[#121212] py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 mb-4 px-4 py-2 rounded-full">
            <BookOpen className="w-5 h-5 text-[#FF4C60]" />
            <span className="font-medium text-[#FF4C60]">{translations.library.bookShelf.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.library.bookShelf.title} <span className="text-[#FFD93D]">{translations.library.bookShelf.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.library.bookShelf.subtitle}
          </p>
        </motion.div>

        {/* Shelf background */}
        <div className="relative">
          <div className="bottom-0 absolute inset-x-0 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] shadow-lg rounded-lg h-8" />
          <div className="bottom-2 absolute inset-x-0 bg-gradient-to-r from-[#654321] via-[#8B4513] to-[#654321] rounded-lg h-4" />

          <div className="flex justify-center items-end gap-1 pb-8 perspective-1000">
            {shelfComicsData.map((shelfComic, index) => {
              // Get translated title and volume
              const comicData = translations.library.bookShelf.comics[shelfComic.key as keyof typeof translations.library.bookShelf.comics]
              const title = comicData?.title || ""
              const volume = comicData?.volume || ""
              
              // Try to find magazine from libraryMagazines first (better title matching)
              let magazine = findMagazineByTitle(title)
              
              // Fallback to Batman comic if not found in libraryMagazines
              if (!magazine) {
                magazine = batmanComics[shelfComic.comicIndex]
              }
              
              if (!magazine) return null

              // Use API URLs for thumbnail and PDF - ensure they're properly set
              const thumbnailUrl = magazine.image || `${COMICS_API_BASE}/content/comics/batman/bmp${shelfComic.comicIndex + 1}/bmth${shelfComic.comicIndex + 1}.png`
              const pdfUrl = magazine.pdfFile || `${COMICS_API_BASE}/content/comics/batman/bmp${shelfComic.comicIndex + 1}/bms${shelfComic.comicIndex + 1}.pdf`
              
              // Proper redirection URLs - Next.js Link handles encoding automatically
              const readerUrl = pdfUrl 
                ? `/reader/${magazine.slug}?file=${encodeURIComponent(pdfUrl)}`
                : undefined
              const detailUrl = `/majalla/maktaba/majalla/${magazine.slug}`
              
              // Use magazine rating if available, otherwise use shelf data
              const rating = magazine.rating || shelfComic.rating

              return (
                <motion.div
                  key={shelfComic.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  className="group cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    width: `${shelfComic.thickness * 8}px`,
                  }}
                >
                  {readerUrl ? (
                    <Link href={readerUrl} prefetch={true} className="block h-full">
                      <Card
                        className="hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] h-80 overflow-hidden transition-all duration-200"
                        style={{
                          background: `linear-gradient(90deg, ${shelfComic.spine}40 0%, ${shelfComic.spine} 15%, ${shelfComic.spine} 85%, ${shelfComic.spine}40 100%)`,
                        }}
                      >
                        <CardContent className="flex flex-col p-0 h-full">
                          {/* Book spine with mini thumbnail */}
                          <div className="flex flex-col flex-1 justify-between p-1">
                            {/* Mini cover at top */}
                            <div className="mx-auto mb-1 rounded overflow-hidden" style={{ width: `${Math.max(shelfComic.thickness * 6, 36)}px`, height: '50px' }}>
                              <OptimizedImage
                                src={thumbnailUrl}
                                alt={title}
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                                sizes="50px"
                              />
                            </div>
                            <div className="rotate-90 origin-center transform flex-1 flex items-center justify-center">
                              <h3 className="font-bold text-white text-xs whitespace-nowrap drop-shadow-md">
                                {title}
                              </h3>
                            </div>
                            <div className="rotate-90 origin-center transform">
                              <p className="text-white/90 text-xs whitespace-nowrap drop-shadow-sm">
                                {volume}
                              </p>
                            </div>
                            <div className="flex justify-center items-center mt-1">
                              <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                                <Star className="fill-current w-3 h-3 text-[#FFD93D]" />
                                <span className="font-bold text-white text-xs">
                                  {rating}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card
                      className="hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] h-80 overflow-hidden transition-all duration-200"
                      style={{
                        background: `linear-gradient(90deg, ${shelfComic.spine}40 0%, ${shelfComic.spine} 15%, ${shelfComic.spine} 85%, ${shelfComic.spine}40 100%)`,
                      }}
                    >
                      <CardContent className="flex flex-col p-0 h-full">
                        <div className="flex flex-col flex-1 justify-between p-1">
                          {/* Mini cover at top */}
                          <div className="mx-auto mb-1 rounded overflow-hidden" style={{ width: `${Math.max(shelfComic.thickness * 6, 36)}px`, height: '50px' }}>
                            <OptimizedImage
                              src={thumbnailUrl}
                              alt={title}
                              width={50}
                              height={50}
                              className="w-full h-full object-cover"
                              sizes="50px"
                            />
                          </div>
                          <div className="rotate-90 origin-center transform flex-1 flex items-center justify-center">
                            <h3 className="font-bold text-white text-xs whitespace-nowrap drop-shadow-md">
                              {title}
                            </h3>
                          </div>
                          <div className="rotate-90 origin-center transform">
                            <p className="text-white/90 text-xs whitespace-nowrap drop-shadow-sm">
                              {volume}
                            </p>
                          </div>
                          <div className="flex justify-center items-center mt-1">
                            <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                              <Star className="fill-current w-3 h-3 text-[#FFD93D]" />
                              <span className="font-bold text-white text-xs">
                                {rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Hover preview */}
                  <div className="top-0 left-full z-10 absolute opacity-0 group-hover:opacity-100 ml-4 transition-opacity duration-200 pointer-events-none">
                    <Card className="bg-[#1E1E2F] comic-shadow border-[#FF4C60]/20 w-48">
                      <CardContent className="p-0">
                        <div className="relative flex justify-center items-center h-32 overflow-hidden bg-[#050509] rounded-t-lg">
                          <OptimizedImage
                            src={thumbnailUrl}
                            alt={title}
                            width={180}
                            height={120}
                            className="w-full h-full object-cover"
                            sizes="180px"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="mb-1 font-bold text-white text-sm">
                            {title}
                          </h4>
                          <p className="mb-2 text-[#B0B0B0] text-xs">
                            {volume}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star className="fill-current w-3 h-3 text-[#FFD93D]" />
                            <span className="text-white text-xs">
                              {rating}
                            </span>
                          </div>
                          {readerUrl && (
                            <Link href={readerUrl} className="mt-2 block" prefetch={true}>
                              <button className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white text-xs py-1.5 rounded transition-colors font-semibold">
                                {translations.common.readNow}
                              </button>
                            </Link>
                          )}
                          {detailUrl && (
                            <Link href={detailUrl} className="mt-2 block" prefetch={true}>
                              <button className="w-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-[#B0B0B0] hover:text-white text-xs py-1.5 rounded transition-colors">
                                {translations.common.details}
                              </button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}