"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SortAsc, SortDesc } from "lucide-react"

const creators = [
  {
    id: 1,
    name: "Stan Lee",
    type: "Writer",
    works: 347,
    avatar: "/placeholder.svg",
    featured: "Spider-Man, X-Men, Fantastic Four",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Jack Kirby",
    type: "Artist",
    works: 289,
    avatar: "/placeholder.svg",
    featured: "Thor, Captain America, New Gods",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Alan Moore",
    type: "Writer",
    works: 156,
    avatar: "/placeholder.svg",
    featured: "Watchmen, V for Vendetta",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Frank Miller",
    type: "Artist/Writer",
    works: 134,
    avatar: "/placeholder.svg",
    featured: "The Dark Knight Returns, Sin City",
    rating: 4.7,
  },
]

export function AuthorArtistSort() {
  const [sortBy, setSortBy] = useState<"name" | "works" | "rating">("works")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [filterType, setFilterType] = useState<"all" | "writer" | "artist">("all")

  const filteredAndSorted = creators
    .filter((creator) => {
      if (filterType === "all") return true
      return creator.type.toLowerCase().includes(filterType)
    })
    .sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name)
          break
        case "works":
          comparison = a.works - b.works
          break
        case "rating":
          comparison = a.rating - b.rating
          break
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Browse by <span className="text-[#FFD93D]">Creator</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg">Discover comics by your favorite authors and artists</p>
        </motion.div>

        {/* Sort and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#B0B0B0] text-sm">Filter:</span>
            {["all", "writer", "artist"].map((type) => (
              <Button
                key={type}
                variant={filterType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType(type as any)}
                className={
                  filterType === type
                    ? "bg-[#FF4C60] text-white"
                    : "border-[#FF4C60]/20 text-[#B0B0B0] hover:text-white hover:border-[#FF4C60] bg-transparent"
                }
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#B0B0B0] text-sm">Sort by:</span>
            {[
              { key: "works", label: "Works" },
              { key: "name", label: "Name" },
              { key: "rating", label: "Rating" },
            ].map((option) => (
              <Button
                key={option.key}
                variant={sortBy === option.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy(option.key as any)}
                className={
                  sortBy === option.key
                    ? "bg-[#FFD93D] text-[#121212]"
                    : "border-[#FFD93D]/20 text-[#B0B0B0] hover:text-white hover:border-[#FFD93D] bg-transparent"
                }
              >
                {option.label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="border-[#4ECDC4]/20 text-[#4ECDC4] hover:text-white hover:border-[#4ECDC4] bg-transparent"
            >
              {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
            </Button>
          </div>
        </motion.div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSorted.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 hover:comic-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={creator.avatar || "/placeholder.svg"}
                    alt={creator.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#FF4C60]"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{creator.name}</h3>
                  <Badge className="mb-3 bg-[#FFD93D] text-[#121212]">{creator.type}</Badge>
                  <p className="text-[#B0B0B0] text-sm mb-4 line-clamp-2">{creator.featured}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#FF4C60]">{creator.works}</div>
                      <div className="text-xs text-[#B0B0B0]">Works</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FFD93D]">{creator.rating}</div>
                      <div className="text-xs text-[#B0B0B0]">Rating</div>
                    </div>
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
