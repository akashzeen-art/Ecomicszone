"use client"

import { memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Eye, Download, Crown } from "lucide-react"
import { batmanComics } from "@/lib/library-content"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getMagazineShortDescription, getSeriesName } from "@/lib/i18n"

// API Base URL
const COMICS_API_BASE = "https://api.ameora.fun"

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "#FFD93D"
    case 2:
      return "#C0C0C0"
    case 3:
      return "#CD7F32"
    default:
      return "#FF4C60"
  }
}

export function PopularComicsGrid() {
  const { t, translations, language } = useLanguage()
  
  return (
    <section className="bg-gradient-to-b from-[#121212] to-[#1E1E2F] py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/10 mb-4 px-4 py-2 rounded-full">
            <Crown className="w-5 h-5 text-[#FFD93D]" />
            <span className="font-medium text-[#FFD93D]">{translations.library.popularComics.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.library.popularComics.title} <span className="text-[#FF4C60]">{translations.library.popularComics.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.library.popularComics.subtitle}
          </p>
        </motion.div>

        {/* Grid - Popular Magazines - Edge-to-edge on mobile */}
        <div className="gap-0 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 md:px-4">
          {batmanComics.slice(0, 9).map((comic, index) => {
            // Use popularmagazine images (1-9)
            const popularImage = `${COMICS_API_BASE}/content/ecomics/popularmagazine/${index + 1}.png`
            
            return (
            <motion.div
              key={comic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.15) }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Rank Badge */}
              <div
                className="top-2 left-2 md:-top-3 md:-left-3 z-20 absolute flex justify-center items-center shadow-lg rounded-full w-10 h-10 font-bold text-white"
                style={{ backgroundColor: getRankColor(comic.rank) }}
              >
                #{comic.rank}
              </div>

              {/* Card */}
              <Link href={`/majalla/maktaba/majalla/${encodeURIComponent(comic.slug)}`}>
                <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300 rounded-none md:rounded-xl">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[360/276] overflow-hidden bg-[#050509]">
                      <OptimizedImage
                        src={popularImage}
                        alt={comic.title}
                        width={360}
                        height={276}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Genre Badge */}
                      <div className="top-4 right-4 absolute">
                        <Badge className="bg-[#FFD93D] text-[#121212]">
                          {comic.series ? getSeriesName(language, comic.series as "batman" | "donald_duck" | "mickey_mouse") : comic.genre}
                        </Badge>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="right-4 bottom-4 left-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 w-full">
                          <Download className="mr-2 w-4 h-4" />
                          {translations.common.readNow}
                        </Button>
                      </div>
                    </div>

                    {/* Comic Info */}
                    <div className="p-6">
                      <h3 className="mb-2 font-bold text-white group-hover:text-[#FFD93D] text-xl transition-colors">
                        {comic.series ? getMagazineTitle(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1) : comic.title}
                      </h3>
                      <p className="mb-4 text-[#B0B0B0] text-sm line-clamp-2">
                        {comic.series ? getMagazineShortDescription(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1) : comic.shortDescription}
                      </p>

                      {/* Rating */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(comic.rating) ? "text-[#FFD93D] fill-current" : "text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="ml-1 font-bold text-white">{comic.rating}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="gap-4 grid grid-cols-2 text-[#B0B0B0] text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{comic.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{comic.downloads}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-[#FFD93D] px-8 border-[#FFD93D] text-[#FFD93D] hover:text-[#121212]"
          >
            {translations.library.popularComics.viewAll}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
