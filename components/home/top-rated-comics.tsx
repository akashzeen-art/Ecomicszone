"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Crown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const topComics = [
  {
    id: 1,
    title: "The Infinity Saga",
    rating: 4.9,
    reviews: 2847,
    image: "/placeholder.svg",
    genre: "Superhero",
    rank: 1,
  },
  {
    id: 2,
    title: "Cosmic Legends",
    rating: 4.8,
    reviews: 1923,
    image: "/placeholder.svg",
    genre: "Sci-Fi",
    rank: 2,
  },
  {
    id: 3,
    title: "Shadow Realm",
    rating: 4.8,
    reviews: 1654,
    image: "/placeholder.svg",
    genre: "Fantasy",
    rank: 3,
  },
  {
    id: 4,
    title: "Neon Warriors",
    rating: 4.7,
    reviews: 1432,
    image: "/placeholder.svg",
    genre: "Cyberpunk",
    rank: 4,
  },
  {
    id: 5,
    title: "Time Guardians",
    rating: 4.7,
    reviews: 1289,
    image: "/placeholder.svg",
    genre: "Sci-Fi",
    rank: 5,
  },
]

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

export function TopRatedComics() {
  const { translations } = useLanguage()
  
  return (
    <section className="py-20 bg-gradient-to-r from-[#1E1E2F] to-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/10 px-4 py-2 rounded-full mb-4">
            <Crown className="w-5 h-5 text-[#FFD93D]" />
            <span className="text-[#FFD93D] font-medium">{translations.home.topRated.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.home.topRated.title} <span className="text-[#FF4C60]">{translations.home.topRated.titleHighlight}</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            {translations.home.topRated.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {topComics.map((comic, index) => (
            <motion.div
              key={comic.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Rank badge */}
              <div
                className="absolute -top-3 -left-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: getRankColor(comic.rank) }}
              >
                {comic.rank}
              </div>

              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 overflow-hidden hover:comic-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={comic.image || "/placeholder.svg"}
                      alt={comic.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#FFD93D] text-[#121212]">{comic.genre}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD93D] transition-colors line-clamp-2">
                      {comic.title}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(comic.rating) ? "text-[#FFD93D] fill-current" : "text-gray-600"
                            }`}
                          />
                        ))}
                        <span className="text-white font-bold ml-1">{comic.rating}</span>
                      </div>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">{comic.reviews.toLocaleString()} {translations.home.topRated.reviews}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
