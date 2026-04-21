"use client"

import { memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye } from "lucide-react"
import { artworks as fanArt } from "@/lib/content"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"

export function FanArtShowcase() {
  const { translations, language } = useLanguage()
  
  // Helper function to get translated title
  const getArtworkTitle = (slug: string) => {
    if (slug === "spiderverse-1247") {
      return translations.fanArt.artworks.spiderverse.title
    }
    if (slug === "dark-knight-returns-892") {
      return translations.fanArt.artworks.darkKnight.title
    }
    return ""
  }
  
  // Helper function to get translated category
  const getCategoryTranslation = (category: string) => {
    if (category === "الفن الرقمي" || category === "Digital Art") {
      return translations.fanArt.categories.digital
    }
    if (category === "تقليدي" || category === "Traditional") {
      return translations.fanArt.categories.traditional
    }
    return category
  }
  
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
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.fanArt.title} <span className="text-[#FFD93D]">{translations.fanArt.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.fanArt.subtitle}
          </p>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fanArt.map((art, index) => {
            const translatedTitle = getArtworkTitle(art.slug) || art.title
            const translatedCategory = getCategoryTranslation(art.category)
            
            return (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.15) }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Link href={`/art/${art.slug}`}>
                <Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-64 md:h-72 bg-[#050509]">
                      <OptimizedImage
                        src={art.image || "/placeholder.svg"}
                        alt={translatedTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="top-4 right-4 absolute">
                        <Badge className="bg-[#FFD93D] text-[#121212]">{translatedCategory}</Badge>
                      </div>
                      <div className="right-4 bottom-4 left-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-between items-center text-white">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{art.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span className="text-sm">{art.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-bold text-white group-hover:text-[#FFD93D] text-lg transition-colors">
                        {translatedTitle}
                      </h3>
                      <p className="text-[#B0B0B0] text-sm">{translations.fanArt.by} {art.artist}</p>
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
