"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, RefreshCw } from "lucide-react"
import { libraryMagazines } from "@/lib/library-content"
import { useLanguage } from "@/contexts/language-context"

// API Base URL
const COMICS_API_BASE = "https://api.ameora.fun"

const recentlyUpdated = [
  {
    id: 1,
    title: "سجلات سبايدر-فيرس #47",
    lastUpdate: "2 hours ago",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/1.png`,
    chapter: "الفصل 47: تصادم الأكوان المتعددة",
    status: "تم التحديث",
  },
  {
    id: 2,
    title: "المحاربون الكونيون #23",
    lastUpdate: "منذ 5 ساعات",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/2.png`,
    chapter: "الفصل 23: العاصفة المجرية",
    status: "فصل جديد",
  },
  {
    id: 3,
    title: "أساطير الظل #15",
    lastUpdate: "منذ 8 ساعات",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/3.png`,
    chapter: "الفصل 15: الصحوة المظلمة",
    status: "تم التحديث",
  },
  {
    id: 4,
    title: "مدينة النيون #31",
    lastUpdate: "منذ 12 ساعة",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/1.png`,
    chapter: "الفصل 31: الأحلام الرقمية",
    status: "فصل جديد",
  },
  {
    id: 5,
    title: "الأوصياء القدماء #89",
    lastUpdate: "منذ يوم واحد",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/2.png`,
    chapter: "الفصل 89: القوى الأسطورية",
    status: "تم التحديث",
  },
  {
    id: 6,
    title: "دورية الوقت #12",
    lastUpdate: "منذ يوم واحد",
    image: `${COMICS_API_BASE}/content/ecomics/extra_thumbnails/254x192/3.png`,
    chapter: "الفصل 12: الصدع الزمني",
    status: "فصل جديد",
  },
]

// ربط العنوان الأساسي بالـ slug من بيانات المكتبة
const baseTitleToSlug: Record<string, string> = Object.fromEntries(
  libraryMagazines.map((m) => [m.title, m.slug]),
)

export function RecentlyUpdatedSlider() {
  const { translations } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-[#1E1E2F] py-20 overflow-hidden">
      <div className="mx-auto px-0 md:px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 mb-4 px-4 py-2 rounded-full">
            <RefreshCw className="w-5 h-5 text-[#4ECDC4]" />
            <span className="font-medium text-[#4ECDC4]">{translations.library.recentlyUpdated.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.library.recentlyUpdated.title} <span className="text-[#4ECDC4]">{translations.library.recentlyUpdated.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.library.recentlyUpdated.subtitle}
          </p>
        </motion.div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 pb-4 overflow-x-auto scroll-smooth scrollbar-hide px-4 md:px-0"
        >
          {[...recentlyUpdated, ...recentlyUpdated].map((comic, index) => {
            const baseTitle = comic.title.split("#")[0].trim()
            const slug = baseTitleToSlug[baseTitle]
            const href = slug
              ? `/majalla/maktaba/majalla/${encodeURIComponent(slug)}`
              : undefined
            const magazine = slug ? libraryMagazines.find((m) => m.slug === slug) : undefined
            const displayImage = magazine?.image || comic.image

            return (
              <motion.div
                key={`${comic.id}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (index % recentlyUpdated.length) * 0.1,
                }}
                className="flex-shrink-0"
              >
                <Card className="group bg-[#121212] hover:comic-shadow border-[#4ECDC4]/20 hover:border-[#4ECDC4] w-64 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative flex justify-center items-center h-48 overflow-hidden bg-[#050509]">
                      <img
                        src={displayImage || "/placeholder.svg"}
                        alt={comic.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="top-4 right-4 absolute">
                        <Badge
                          className={
                            comic.status === translations.library.recentlyUpdated.newChapter
                              ? "bg-[#FFD93D] text-[#121212]"
                              : "bg-[#4ECDC4] text-[#121212]"
                          }
                        >
                          {comic.status === "فصل جديد" ? translations.library.recentlyUpdated.newChapter : translations.library.recentlyUpdated.updated}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      {href ? (
                        <Link href={href}>
                          <h3 className="mb-2 font-bold text-white group-hover:text-[#4ECDC4] text-lg line-clamp-2 transition-colors">
                            {comic.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="mb-2 font-bold text-white text-lg line-clamp-2 transition-colors">
                          {comic.title}
                        </h3>
                      )}
                      <p className="mb-3 text-[#B0B0B0] text-sm line-clamp-1">
                        {comic.chapter}
                      </p>
                      <div className="flex items-center gap-2 text-[#4ECDC4] text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{comic.lastUpdate}</span>
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