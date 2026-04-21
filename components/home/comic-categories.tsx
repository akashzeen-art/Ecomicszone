"use client"

import { memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Rocket, Sword, Heart, Skull, Crown, Shield, Sparkles } from "lucide-react"
import { categories as baseCategories } from "@/lib/content"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { THUMBNAIL_CONFIG } from "@/lib/thumbnail-config"
import { useLanguage } from "@/contexts/language-context"

const iconMap: Record<string, any> = {
  خارقة: Zap,
  "خيال علمي": Rocket,
  خيالي: Sword,
  الرومانسية: Heart,
  رعب: Skull,
  تاريخية: Crown,
  فعل: Shield,
  أُحجِيَّة: Sparkles,
  // New Excel-based categories
  باتمان: Shield,
  بطوط: Sparkles,
  "ميكي ماوس": Heart,
}

// Filter to only show Batman, Donald Duck, and Mickey Mouse categories
const comicSeriesCategories = baseCategories.filter(
  (category) => category.id === 100 || category.id === 101 || category.id === 102
)

export function ComicCategories() {
  const { translations, language } = useLanguage()
  
  // Get translated series names and descriptions
  const getSeriesName = (slug: string) => {
    if (slug === "batman") return translations.library.magazines.batman.name
    if (slug === "donald-duck") return translations.library.magazines.donaldDuck.name
    if (slug === "mickey-mouse") return translations.library.magazines.mickeyMouse.name
    return ""
  }
  
  const getSeriesDescription = (slug: string) => {
    if (slug === "batman") return translations.library.magazines.batman.fullDescription(1).replace(" - الحلقة 1", "").replace(" - Episode 1", "")
    if (slug === "donald-duck") return translations.library.magazines.donaldDuck.fullDescription(1).replace(" - الحلقة 1", "").replace(" - Episode 1", "")
    if (slug === "mickey-mouse") return translations.library.magazines.mickeyMouse.fullDescription(1).replace(" - الحلقة 1", "").replace(" - Episode 1", "")
    return ""
  }
  
  return (
    <section className="bg-[#1E1E2F] py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.categories.title} <span className="text-[#FFD93D]">{translations.categories.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.categories.subtitle}
          </p>
        </motion.div>

        <div className="gap-4 sm:gap-5 md:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {comicSeriesCategories.map((category, index) => {
            const Icon = iconMap[category.name] ?? Zap
            const translatedName = getSeriesName(category.slug)
            const translatedDescription = getSeriesDescription(category.slug)
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                whileHover={{ y: -3 }}
                className="group cursor-pointer"
              >
                <Link href={`/category/${category.slug}`} className="block">
                  <Card className="bg-[#121212] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <OptimizedImage
                          src={category.image || "/placeholder.svg"}
                          alt={translatedName || category.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover bg-black group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                        <div className="top-4 right-4 absolute">
                          <div
                            className="flex justify-center items-center rounded-full w-10 h-10 animate-float"
                            style={{ backgroundColor: category.color }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-white group-hover:text-[#FFD93D] text-lg transition-colors">
                            {translatedName || category.name}
                          </h3>
                          <span
                            className="px-2 py-1 rounded-full font-bold text-sm"
                            style={{
                              backgroundColor: `${category.color}20`,
                              color: category.color,
                            }}
                          >
                            {category.count}
                          </span>
                        </div>
                        <p className="text-[#B0B0B0] text-sm">{translatedDescription || category.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
