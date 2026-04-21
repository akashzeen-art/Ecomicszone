"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Flame, Eye, Star, BookOpen } from "lucide-react"
import { batmanComics, donaldDuckComics, mickeyMouseComics, COMICS_API_BASE } from "@/lib/library-content"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getSeriesName } from "@/lib/i18n"

export function TrendingNow() {
  const { t, translations, language } = useLanguage()
  
  // Map trending comics to actual comics from library
  const trendingComics = [
    {
      id: 1,
      comic: batmanComics[0], // Batman Episode 1
      rank: 1,
      change: "up",
      trend: "+15%",
      rating: 4.9,
      views: "156K",
    },
    {
      id: 2,
      comic: mickeyMouseComics[0], // Mickey Mouse Episode 1
      rank: 2,
      change: "up",
      trend: "+12%",
      rating: 4.8,
      views: "134K",
    },
    {
      id: 3,
      comic: donaldDuckComics[0], // Donald Duck Episode 1
      rank: 3,
      change: "up",
      trend: "+18%",
      rating: 4.7,
      views: "128K",
    },
    {
      id: 4,
      comic: batmanComics[1], // Batman Episode 2
      rank: 4,
      change: "up",
      trend: "+9%",
      rating: 4.6,
      views: "119K",
    },
    {
      id: 5,
      comic: mickeyMouseComics[1], // Mickey Mouse Episode 2
      rank: 5,
      change: "up",
      trend: "+14%",
      rating: 4.8,
      views: "98K",
    },
  ]

  return (
    <section className="bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-20 overflow-x-hidden">
      <div className="mx-auto px-0 md:px-4 max-w-7xl overflow-x-hidden">
        <div className="mb-16 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 mb-4 px-4 py-2 rounded-full">
            <Flame className="w-5 h-5 text-[#FF4C60]" />
            <span className="font-medium text-[#FF4C60]">{translations.home.trending.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.home.trending.title.includes(" ") ? (
              <>
                {translations.home.trending.title.split(" ")[0]} <span className="text-[#FF4C60]">{translations.home.trending.title.split(" ").slice(1).join(" ")}</span>
              </>
            ) : (
              translations.home.trending.title
            )}
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-[#B0B0B0] text-lg">
            {translations.home.trending.subtitle}
          </p>
        </div>

        <div className="gap-0 sm:gap-5 md:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden w-full">
          {trendingComics.map((item, index) => {
            const comic = item.comic
            if (!comic || !comic.series) return null

            // Get translated title and series name
            const episodeNumber = comic.rank || 1
            const title = getMagazineTitle(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", episodeNumber)
            const seriesName = getSeriesName(language, comic.series as "batman" | "donald_duck" | "mickey_mouse")

            // Use local images for all main characters
            let thumbnailUrl
            if (comic.series === "batman") {
              thumbnailUrl = "/batman.jpg"
            } else if (comic.series === "donald_duck") {
              thumbnailUrl = "/donaldduck.jpg"
            } else if (comic.series === "mickey_mouse") {
              thumbnailUrl = "/mickeymouse.jpg"
            } else {
              thumbnailUrl = `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/_225x208/1.png`
            }
            const pdfUrl = comic.pdfFile
            const readerUrl = pdfUrl ? `/reader/${comic.slug}?file=${encodeURIComponent(pdfUrl)}` : undefined
            const detailUrl = `/majalla/maktaba/majalla/${comic.slug}`

            return (
              <div
                key={item.id}
                className="group relative"
              >
                {/* Rank badge */}
                <div className="-top-2 -left-2 z-20 absolute flex justify-center items-center bg-gradient-to-br from-[#FF4C60] to-[#FF6B7A] shadow-lg rounded-lg w-8 h-8 font-bold text-white text-sm">
                  {item.rank}
                </div>

                {/* Trend indicator */}
                <div className="-top-2 -right-2 z-20 absolute">
                  <div className="bg-[#4CAF50] rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                </div>

                <Card className="bg-gradient-to-b from-[#1E1E2F] to-[#151520] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60]/40 overflow-hidden transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-[200/280] overflow-hidden bg-gradient-to-b from-[#050509] via-[#0a0a0f] to-[#050509] group-hover:from-[#0a0a0f] group-hover:via-[#0f0f15] group-hover:to-[#0a0a0f] transition-all duration-500">
                      <OptimizedImage
                        src={thumbnailUrl || "/placeholder.svg"}
                        alt={title || `${seriesName} Episode ${episodeNumber}`}
                        width={200}
                        height={280}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F]/90 via-transparent to-transparent" />
                      
                      {/* Trend badge */}
                      <div className="top-3 right-3 absolute z-10">
                        <Badge className="bg-[#FF4C60] font-bold text-white text-xs px-2 py-1 shadow-lg">
                          {seriesName} {item.trend}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <Link href={detailUrl} prefetch={true}>
                        <h3 className="mb-2 font-bold text-white group-hover:text-[#FF4C60] text-base sm:text-lg line-clamp-2 transition-colors leading-tight">
                          {title}
                        </h3>
                      </Link>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#FFD93D] fill-current" />
                          <span className="font-semibold text-white text-sm">{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#B0B0B0] text-xs">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{item.views}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      {readerUrl && (
                        <Link href={readerUrl} className="mt-auto" prefetch={true}>
                          <Button className="w-full bg-gradient-to-r from-[#FF4C60] to-[#FF6B7A] hover:from-[#FF6B7A] hover:to-[#FF4C60] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FF4C60]/30 rounded-lg min-h-[44px] sm:min-h-[36px]">
                            <BookOpen className="mr-2 w-4 h-4" />
                            {translations.common.readNow}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
