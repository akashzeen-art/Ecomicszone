"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Award } from "lucide-react"
import { useState } from "react"

const coverArts = [
  {
    id: 1,
    title: "Spider-Man: Into the Spider-Verse",
    artist: "Miles Morales",
    image: "/spider-man-comic-cover.png",
    likes: 1250,
    views: 15600,
    award: "Best Cover 2024",
    category: "Superhero",
  },
  {
    id: 2,
    title: "Wonder Woman: Rebirth",
    artist: "Diana Prince",
    image: "/wonder-woman-comic-cover.png",
    likes: 980,
    views: 12400,
    award: null,
    category: "Superhero",
  },
  {
    id: 3,
    title: "The Walking Dead",
    artist: "Robert Kirkman",
    image: "/walking-dead-comic-cover.png",
    likes: 2100,
    views: 28900,
    award: "Fan Favorite",
    category: "Horror",
  },
  {
    id: 4,
    title: "Saga Volume 1",
    artist: "Fiona Staples",
    image: "/saga-comic-cover.png",
    likes: 1800,
    views: 22100,
    award: "Artistic Excellence",
    category: "Sci-Fi",
  },
  {
    id: 5,
    title: "Batman: The Dark Knight",
    artist: "Frank Miller",
    image: "/dark-knight-comic.png",
    likes: 3200,
    views: 45600,
    award: "Classic Cover",
    category: "Superhero",
  },
  {
    id: 6,
    title: "Attack on Titan",
    artist: "Hajime Isayama",
    image: "/attack-on-titan-manga-cover.png",
    likes: 2800,
    views: 38200,
    award: "Most Popular",
    category: "Manga",
  },
]

const categories = ["All", "Superhero", "Horror", "Sci-Fi", "Manga", "Fantasy"]

export function CoverArtsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedCovers, setLikedCovers] = useState<number[]>([])

  const filteredCovers =
    selectedCategory === "All" ? coverArts : coverArts.filter((cover) => cover.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLikedCovers((prev) => (prev.includes(id) ? prev.filter((coverId) => coverId !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best <span className="text-[#FF4C60]">Cover Arts</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto mb-8">
            Discover the most stunning and award-winning comic cover artworks
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#FF4C60] text-white comic-shadow"
                    : "bg-[#1E1E2F] text-[#B0B0B0] hover:bg-[#FF4C60]/20 hover:text-white border border-[#FF4C60]/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCovers.map((cover, index) => (
            <motion.div
              key={cover.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden group">
                <div className="relative flex justify-center items-center h-80 overflow-hidden bg-[#050509]">
                  <img
                    src={cover.image || "/placeholder.svg"}
                    alt={cover.title}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Award Badge */}
                  {cover.award && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#FFD93D] text-[#121212] font-medium">
                        <Award className="w-3 h-3 mr-1" />
                        {cover.award}
                      </Badge>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-[#121212]/80 text-white border-[#FF4C60]/40">
                      {cover.category}
                    </Badge>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(cover.id)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          likedCovers.includes(cover.id)
                            ? "bg-[#FF4C60] text-white"
                            : "bg-white/20 text-white hover:bg-[#FF4C60]"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedCovers.includes(cover.id) ? "fill-current" : ""}`} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#4ECDC4] transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cover.title}</h3>
                  <p className="text-[#4ECDC4] font-medium mb-4">by {cover.artist}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-[#FF4C60]">
                        <Heart className="w-4 h-4" />
                        <span>{cover.likes + (likedCovers.includes(cover.id) ? 1 : 0)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#B0B0B0]">
                        <Eye className="w-4 h-4" />
                        <span>{cover.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="text-[#4ECDC4] hover:text-[#4ECDC4]/80 font-medium">View Full Size</button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Submit Your Cover Art</h3>
              <p className="text-[#B0B0B0] mb-6">Are you an artist? Share your amazing cover art with our community</p>
              <button className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-8 py-3 rounded-lg font-medium comic-shadow hover:animate-pulse-glow transition-all">
                Submit Artwork
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
