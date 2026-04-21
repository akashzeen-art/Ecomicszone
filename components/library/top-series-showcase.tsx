"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, BookOpen, Trophy } from "lucide-react"
import { libraryMagazines } from "@/lib/library-content"
import { useLanguage } from "@/contexts/language-context"

const topSeries = [
  {
    id: 1,
    title: "ملحمة اللانهاية",
    issues: 47,
    subscribers: "2.4M",
    rating: 4.9,
    image: "/saga-comic-cover.png",
    genre: "خارقة",
    status: "مستمر",
    description: "وتستمر المعركة النهائية عبر الحقائق اللانهائية...",
    pdf: "/pdfs/pdf10.pdf" // ✅ added pdf
  },
  {
    id: 2,
    title: "الأساطير الكونية",
    issues: 32,
    subscribers: "1.8M",
    rating: 4.8,
    image: "/comic-book-office.png",
    genre: "خيال علمي",
    status: "مستمر",
    description: "مغامرات فضائية ملحمية تمتد عبر المجرات...",
    pdf: "/pdfs/pdf11.pdf"
  },
  {
    id: 3,
    title: "سجلات عالم الظل",
    issues: 28,
    subscribers: "1.5M",
    rating: 4.8,
    image: "/spider-man-comic-cover.png",
    genre: "خيالي",
    status: "مستمر",
    description: "تتكشف السحر الأسود والأسرار القديمة...",
    pdf: "/pdfs/pdf12.pdf"
  },
]

const seriesTitleToSlug: Record<string, string> = Object.fromEntries(
  libraryMagazines.map((m) => [m.title, m.slug]),
)

export function TopSeriesShowcase() {
  const { translations } = useLanguage()
  
  return (
    <section className="bg-gradient-to-r from-[#1E1E2F] to-[#121212] py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/10 mb-4 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-[#FFD93D]" />
            <span className="font-medium text-[#FFD93D]">{translations.home.topSeries.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.home.topSeries.title} <span className="text-[#FF4C60]">{translations.home.topSeries.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.home.topSeries.subtitle}
          </p>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {topSeries.map((series, index) => {
            const slug = seriesTitleToSlug[series.title]
            const href = slug ? `/majalla/maktaba/majalla/${encodeURIComponent(slug)}` : undefined
            const magazine = slug ? libraryMagazines.find((m) => m.slug === slug) : undefined
            const displayImage = magazine?.image || series.image
            return (
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative flex justify-center items-center h-64 overflow-hidden bg-[#050509]">
                    <img
                      src={displayImage || "/placeholder.svg"}
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="top-4 left-4 absolute">
                      <Badge className="bg-[#FFD93D] font-bold text-[#121212]">#{index + 1}</Badge>
                    </div>
                    <div className="top-4 right-4 absolute">
                      <Badge className="bg-[#FF4C60] text-white">{series.genre}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent" />
                  </div>
                    <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-white group-hover:text-[#FFD93D] text-xl transition-colors">
                        {series.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`${
                          series.status === "مستمر" || series.status === "Ongoing"
                            ? "border-[#4CAF50] text-[#4CAF50]"
                            : "border-[#FF6B35] text-[#FF6B35]"
                        }`}
                      >
                        {series.status === "مستمر" ? translations.home.topSeries.ongoing : 
                         series.status === "Ongoing" ? translations.home.topSeries.ongoing :
                         series.status === "مكتمل" ? translations.home.topSeries.completed :
                         series.status === "Completed" ? translations.home.topSeries.completed :
                         series.status}
                      </Badge>
                    </div>
                    <p className="mb-4 text-[#B0B0B0] text-sm line-clamp-2">{series.description}</p>

                    <div className="gap-4 grid grid-cols-3 mb-6 text-center">
                      <div>
                        <div className="font-bold text-[#FF4C60] text-lg">{series.issues}</div>
                        <div className="text-[#B0B0B0] text-xs">{translations.home.topSeries.issues}</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#FFD93D] text-lg">{series.subscribers}</div>
                        <div className="text-[#B0B0B0] text-xs">{translations.home.topSeries.subscribers}</div>
                      </div>
                      <div>
                        <div className="flex justify-center items-center gap-1">
                          <Star className="fill-current w-4 h-4 text-[#FFD93D]" />
                          <span className="font-bold text-white text-lg">{series.rating}</span>
                        </div>
                        <div className="text-[#B0B0B0] text-xs">{translations.home.topSeries.rating}</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {href ? (
                        <Link href={href} className="flex-1">
                          <Button
                            size="sm"
                            className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white"
                          >
                            <BookOpen className="mr-2 w-4 h-4" />
                            {translations.home.topSeries.read}
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white"
                        >
                          <BookOpen className="mr-2 w-4 h-4" />
                          {translations.home.topSeries.read}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent hover:bg-[#FFD93D] border-[#FFD93D] text-[#FFD93D] hover:text-[#121212]"
                      >
                        <Users className="mr-2 w-4 h-4" />
                        {translations.home.topSeries.follow}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
