"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Award, BookOpen } from "lucide-react"

const weeklyPicks = [
  {
    id: 1,
    title: "Galactic Guardians: The Final Stand",
    editor: "Sarah Chen",
    reason: "Incredible character development and stunning artwork",
    rating: 4.9,
    image: "/ancient-mythology-comic-cover.png",
    genre: "Sci-Fi",
    featured: true,
  },
  {
    id: 2,
    title: "Urban Legends: Night Patrol",
    editor: "Mike Rodriguez",
    reason: "Perfect blend of mystery and action",
    rating: 4.7,
    image: "/cyberpunk-comic-cover.png",
    genre: "Mystery",
    featured: false,
  },
  {
    id: 3,
    title: "Mystic Academy: First Year",
    editor: "Emma Thompson",
    reason: "Engaging story that appeals to all ages",
    rating: 4.8,
    image: "/dark-knight-comic.png",
    genre: "Fantasy",
    featured: false,
  },
]

export function WeeklyPicks() {
  const featuredPick = weeklyPicks.find((pick) => pick.featured)
  const regularPicks = weeklyPicks.filter((pick) => !pick.featured)

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#9B59B6]/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-[#9B59B6]" />
            <span className="text-[#9B59B6] font-medium">Editor's Choice</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Weekly <span className="text-[#9B59B6]">Picks</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Hand-selected by our editorial team for exceptional storytelling and artistry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Pick */}
          {featuredPick && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="bg-[#1E1E2F] border-[#9B59B6]/20 hover:border-[#9B59B6] transition-all duration-300 overflow-hidden hover:comic-shadow group">
                <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative flex justify-center items-center h-80 md:h-96 overflow-hidden bg-[#050509]">
                      <img
                        src={featuredPick.image || "/placeholder.svg"}
                        alt={featuredPick.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#9B59B6] text-white font-bold">Featured Pick</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#FFD93D] text-[#121212]">{featuredPick.genre}</Badge>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9B59B6] transition-colors">
                        {featuredPick.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(featuredPick.rating) ? "text-[#FFD93D] fill-current" : "text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-white font-bold ml-1">{featuredPick.rating}</span>
                        </div>
                      </div>
                      <blockquote className="text-[#B0B0B0] italic mb-4 border-l-4 border-[#9B59B6] pl-4">
                        "{featuredPick.reason}"
                      </blockquote>
                      <p className="text-[#9B59B6] text-sm mb-6">— {featuredPick.editor}, Senior Editor</p>
                      <Button className="bg-[#9B59B6] hover:bg-[#9B59B6]/90 text-white comic-shadow">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Featured Pick
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Regular Picks */}
          <div className="space-y-6">
            {regularPicks.map((pick, index) => (
              <motion.div
                key={pick.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-[#1E1E2F] border-[#9B59B6]/20 hover:border-[#9B59B6] transition-all duration-300 overflow-hidden hover:comic-shadow">
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-6">
                      <img
                        src={pick.image || "/placeholder.svg"}
                        alt={pick.title}
                        className="w-20 h-28 object-cover rounded-lg flex-shrink-0 bg-[#050509] group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-2 bg-[#FFD93D] text-[#121212] text-xs">{pick.genre}</Badge>
                        <h4 className="text-white font-bold mb-2 line-clamp-2 group-hover:text-[#9B59B6] transition-colors">
                          {pick.title}
                        </h4>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(pick.rating) ? "text-[#FFD93D] fill-current" : "text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-white text-sm ml-1">{pick.rating}</span>
                        </div>
                        <p className="text-[#B0B0B0] text-xs mb-2 line-clamp-2">"{pick.reason}"</p>
                        <p className="text-[#9B59B6] text-xs">— {pick.editor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
