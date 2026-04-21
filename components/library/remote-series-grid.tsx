"use client"

import { useMemo, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, BookOpen, Eye } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { batmanComics, donaldDuckComics, mickeyMouseComics, type LibraryMagazine } from "@/lib/library-content"
import { prefetchPDF, getCachedPDF, prefetchComicsPDFs } from "@/lib/pdf-cache"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getMagazineShortDescription } from "@/lib/i18n"

type SeriesKey = "batman" | "donald_duck" | "mickey_mouse"

type Props = {
  series: SeriesKey
  title: string
  subtitle: string
  badgeLabel: string
  accentColor: string
}

export function RemoteSeriesGrid({ series, title, subtitle, badgeLabel, accentColor }: Props) {
  const { translations, language } = useLanguage()
  const router = useRouter()
  
  // Show comics based on series - use direct arrays for proper numbering
  const items = useMemo(() => {
    if (series === "batman") {
      // Return all Batman comics sorted by their rank (which is 1-50)
      return batmanComics.sort((a, b) => a.rank - b.rank)
    }
    if (series === "donald_duck") {
      // Return all Donald Duck comics sorted by their rank (which is 1-10)
      return donaldDuckComics.sort((a, b) => a.rank - b.rank)
    }
    if (series === "mickey_mouse") {
      // Return all Mickey Mouse comics sorted by their rank (which is 1-18)
      return mickeyMouseComics.sort((a, b) => a.rank - b.rank)
    }
    return []
  }, [series])

  // Prefetch limited PDFs for this series to prevent memory exhaustion
  useEffect(() => {
    // Only prefetch first 10 PDFs from each series to prevent memory issues
    const limitedItems = items.slice(0, 10)
    prefetchComicsPDFs(limitedItems, 10).catch(() => {
      // Silently fail - prefetch is optional
    })
  }, [items])

  // Prefetch PDF on card hover (in case it wasn't prefetched yet)
  const handleCardHover = (pdfUrl: string) => {
    if (pdfUrl && !getCachedPDF(pdfUrl)) {
      prefetchPDF(pdfUrl).catch(() => {
        // Silently fail
      })
      }
    }

  // Prefetch route on hover for instant navigation
  const handleLinkHover = (href: string) => {
    router.prefetch(href)
  }

  if (items.length === 0) {
    return null
  }

  return (
    <section className="bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212] py-20">
      <div className="mx-auto px-0 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full backdrop-blur-sm"
            style={{ 
              backgroundColor: `${accentColor}15`,
              border: `1px solid ${accentColor}30`
            }}
          >
            <span className="font-semibold text-sm tracking-wide" style={{ color: accentColor }}>
              {series === "batman" ? translations.library.series.batman.badge : 
               series === "donald_duck" ? translations.library.series.donaldDuck.badge :
               translations.library.series.mickeyMouse.badge}
            </span>
          </motion.div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Magazine Grid - Perfectly Aligned */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0 sm:gap-4 md:gap-5 lg:gap-6">
          {items.map((comic, index) => {
            // Use rank for correct numbering (1, 2, 3...)
            const displayNumber = comic.rank
            // Don't encode slug in path - Next.js Link handles it automatically
            const pdfUrl = comic.pdfFile ? `/reader/${comic.slug}?file=${encodeURIComponent(comic.pdfFile)}` : null
            
            return (
              <motion.div
                key={comic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  duration: 0.3, 
                  delay: Math.min(index * 0.02, 0.2),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="relative bg-[#1A1A2E] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 h-full flex flex-col rounded-lg shadow-md hover:shadow-xl">
                  {/* Number Badge - Clean Design */}
                  <div className="absolute top-2 left-2 z-20">
                    <Badge 
                      className="bg-gradient-to-br from-[#FFD93D] to-[#FFB800] text-[#121212] font-bold text-xs px-2 py-0.5 rounded-md shadow-md"
                      style={{ 
                        boxShadow: `0 2px 8px ${accentColor}40`
                      }}
                    >
                      #{displayNumber}
                    </Badge>
                  </div>

                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Thumbnail Container - Clean & Centered */}
                    <Link 
                      href={pdfUrl || `/majalla/maktaba/majalla/${comic.slug}`}
                      className="block"
                      onMouseEnter={() => pdfUrl && handleCardHover(comic.pdfFile!)}
                    >
                      <div className="relative flex justify-center items-center aspect-[212/256] overflow-hidden bg-[#0A0A0F] group-hover:bg-[#0F0F15] transition-colors duration-300">
                        {/* Thumbnail Image */}
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                          className="relative w-full h-full flex items-center justify-center"
                        >
                          <OptimizedImage
                        src={comic.image || "/placeholder.svg"}
                        alt={comic.title}
                            width={212}
                            height={256}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
                            priority={index < 8}
                          />
                        </motion.div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            className="bg-[#FF4C60] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
                          >
                            {translations.common.readNow}
                          </motion.div>
                      </div>
                    </div>
                    </Link>

                    {/* Content Section */}
                    <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-1 bg-[#1A1A2E]">
                      {/* Title */}
                      <Link href={`/majalla/maktaba/majalla/${comic.slug}`}>
                        <h3 className="mb-1 sm:mb-1.5 font-bold text-white text-xs sm:text-sm line-clamp-2 group-hover:text-[#FFD93D] transition-colors duration-200 leading-tight">
                        {comic.series ? getMagazineTitle(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1) : comic.title}
                      </h3>
                      </Link>
                      
                      {/* Description */}
                      <p className="mb-2 sm:mb-3 text-[#B0B0B0] text-[10px] sm:text-xs line-clamp-2 leading-relaxed min-h-[2rem] sm:min-h-[2.5rem]">
                      {comic.series ? getMagazineShortDescription(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1) : comic.shortDescription}
                      </p>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3 text-[10px] sm:text-xs">
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFD93D] fill-current" />
                          <span className="font-semibold text-white">{comic.rating}</span>
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1 text-[#B0B0B0]">
                          <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="truncate max-w-[60px] sm:max-w-none">{comic.readers || comic.views}</span>
                        </div>
                      </div>

                      {/* Action Buttons - Clean Design */}
                      <div className="mt-auto flex gap-1.5 sm:gap-2 pt-2 border-t border-white/10">
                        {pdfUrl && (
                          <Link 
                            href={pdfUrl} 
                            className="flex-1"
                            prefetch={true}
                            onMouseEnter={() => {
                              handleLinkHover(pdfUrl)
                              handleCardHover(comic.pdfFile!)
                            }}
                          >
                            <Button 
                              size="sm"
                              className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white text-[10px] sm:text-xs font-semibold h-7 sm:h-8 shadow-md hover:shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[32px]"
                            >
                              {translations.common.readNow}
                            </Button>
                          </Link>
                        )}
                        <Link
                          href={`/majalla/maktaba/majalla/${comic.slug}`}
                          className="flex-1"
                          prefetch={true}
                          onMouseEnter={() => handleLinkHover(`/majalla/maktaba/majalla/${comic.slug}`)}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-[#B0B0B0] hover:text-white text-[10px] sm:text-xs font-medium h-7 sm:h-8 transition-all duration-200 min-h-[44px] sm:min-h-[32px]"
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


