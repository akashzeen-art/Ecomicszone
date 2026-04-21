"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// API Base URL
const COMICS_API_BASE = "https://api.ameora.fun"

export function ComicTimeline() {
  const { translations } = useLanguage()

const timelineEvents = [
  {
    id: 1,
    year: "1938",
    title: "أول ظهور لسوبرمان",
    description: "أكشن كوميكس #1 يقدم أول بطل خارق في العالم",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/1.png`,
    color: "#FF4C60",
  },
  {
    id: 2,
    year: "1939",
    title: "ظهور باتمان",
    description: "فارس الظلام يظهر لأول مرة في ديتكتيف كوميكس #27",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/2.png`,
    color: "#1E1E2F",
  },
  {
    id: 3,
    year: "1961",
    title: "بداية عصر مارفل",
    description: "يبدأ عصر مارفل",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/3.png`,
    color: "#FFD93D",
  },
  {
    id: 4,
    year: "1963",
    title: "اتحاد رجال إكس",
    description: "الأبطال المتحولون يظهرون لأول مرة في رجال إكس #1",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/4.png`,
    color: "#4ECDC4",
  },
  {
    id: 5,
    year: "1986",
    title: "بداية العصر المظلم",
    description: "الحراس وعودة فارس الظلام يعيدان تعريف المجلات",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/5.png`,
    color: "#9B59B6",
  },
  {
    id: 6,
    year: "2024",
    title: "الثورة الرقمية",
    description: "إيكوميكسزون تجلب المجلات إلى العصر الرقمي",
    image: `${COMICS_API_BASE}/content/ecomics/historymagzine/6.png`,
    color: "#FF4C60",
  },
]

  return (
    <section className="bg-[#121212] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center px-4"
        >
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            تاريخ <span className="text-[#FFD93D]">المجلات</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            رحلة عبر أهم اللحظات في تاريخ المجلات المصورة
          </p>
        </motion.div>

        <div className="relative px-4">
          {/* Timeline line */}
          <div className="left-1/2 absolute bg-gradient-to-b from-[#FF4C60] via-[#FFD93D] to-[#FF4C60] w-1 h-full -translate-x-1/2 transform" />

          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex items-center justify-center"
              >
                {index % 2 === 0 ? (
                  // Left side card (even index)
                  <>
                    <div className="w-full max-w-lg pr-8 md:pr-12">
                      <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 overflow-hidden">
                        <CardContent className="p-6 pb-0">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="flex justify-center items-center rounded-full w-12 h-12"
                              style={{ backgroundColor: event.color }}
                            >
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-[#FFD93D] text-2xl">{event.year}</div>
                              <div className="font-bold text-white text-lg">{event.title}</div>
                            </div>
                          </div>
                          <p className="mb-4 text-[#B0B0B0]">{event.description}</p>
                        </CardContent>
                        <div className="w-full">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-48 md:h-56 lg:h-64 object-cover"
                          />
                        </div>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <motion.div
                        className="border-4 border-white rounded-full w-6 h-6"
                        style={{ backgroundColor: event.color }}
                        whileInView={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="w-full max-w-lg pl-8 md:pl-12" />
                  </>
                ) : (
                  // Right side card (odd index)
                  <>
                    <div className="w-full max-w-lg pr-8 md:pr-12" />
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <motion.div
                        className="border-4 border-white rounded-full w-6 h-6"
                        style={{ backgroundColor: event.color }}
                        whileInView={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="w-full max-w-lg pl-8 md:pl-12">
                      <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 overflow-hidden">
                        <CardContent className="p-6 pb-0">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="flex justify-center items-center rounded-full w-12 h-12"
                              style={{ backgroundColor: event.color }}
                            >
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-[#FFD93D] text-2xl">{event.year}</div>
                              <div className="font-bold text-white text-lg">{event.title}</div>
                            </div>
                          </div>
                          <p className="mb-4 text-[#B0B0B0]">{event.description}</p>
                        </CardContent>
                        <div className="w-full">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-48 md:h-56 lg:h-64 object-cover"
                          />
                        </div>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
