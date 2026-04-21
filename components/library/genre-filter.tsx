"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Rocket, Sword, Heart, Skull, Crown, Shield, Sparkles, Filter } from "lucide-react"

const genres = [
  { id: "all", name: "All Comics", icon: Filter, count: 12847, color: "#FF4C60" },
  { id: "superhero", name: "Superhero", icon: Zap, count: 2847, color: "#FF4C60" },
  { id: "sci-fi", name: "Sci-Fi", icon: Rocket, count: 1923, color: "#4ECDC4" },
  { id: "fantasy", name: "Fantasy", icon: Sword, count: 1654, color: "#9B59B6" },
  { id: "romance", name: "Romance", icon: Heart, count: 892, color: "#E91E63" },
  { id: "horror", name: "Horror", icon: Skull, count: 743, color: "#FF6B35" },
  { id: "historical", name: "Historical", icon: Crown, count: 567, color: "#FFD93D" },
  { id: "action", name: "Action", icon: Shield, count: 2134, color: "#FF4C60" },
  { id: "mystery", name: "Mystery", icon: Sparkles, count: 1089, color: "#6C5CE7" },
]

export function GenreFilter() {
  const [activeGenre, setActiveGenre] = useState("all")

  return (
    <section className="py-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Filter by <span className="text-[#FFD93D]">Genre</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg">Find exactly what you're looking for</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {genres.map((genre, index) => {
            const Icon = genre.icon
            const isActive = activeGenre === genre.id

            return (
              <motion.div
                key={genre.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveGenre(genre.id)}
                  className={`flex items-center gap-3 px-6 py-3 h-auto transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF4C60] text-white comic-shadow animate-pulse-glow"
                      : "border-[#FF4C60]/20 text-[#B0B0B0] hover:text-white hover:border-[#FF4C60] hover:bg-[#FF4C60]/10 bg-transparent"
                  }`}
                >
                  <Icon className="w-5 h-5" style={{ color: isActive ? "white" : genre.color }} />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{genre.name}</span>
                    <Badge
                      variant="secondary"
                      className={`text-xs mt-1 ${isActive ? "bg-white/20 text-white" : "bg-[#1E1E2F] text-[#B0B0B0]"}`}
                    >
                      {genre.count.toLocaleString()}
                    </Badge>
                  </div>
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Active filter indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-[#B0B0B0]">
            Showing{" "}
            <span className="text-[#FF4C60] font-bold">
              {genres.find((g) => g.id === activeGenre)?.count.toLocaleString()}
            </span>{" "}
            comics in <span className="text-[#FFD93D] font-bold">{genres.find((g) => g.id === activeGenre)?.name}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
