"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Users, TrendingUp } from "lucide-react"

const mangaStats = [
  { icon: BookOpen, label: "15,000+ Titles", value: "15K+" },
  { icon: Globe, label: "Japanese Origin", value: "🇯🇵" },
  { icon: Users, label: "500K Readers", value: "500K" },
  { icon: TrendingUp, label: "Growing 25%", value: "+25%" },
]

const comicsStats = [
  { icon: BookOpen, label: "35,000+ Titles", value: "35K+" },
  { icon: Globe, label: "Global Origin", value: "🌍" },
  { icon: Users, label: "750K Readers", value: "750K" },
  { icon: TrendingUp, label: "Growing 15%", value: "+15%" },
]

export function MangaVsComics() {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Manga <span className="text-[#FF4C60]">vs</span> Comics
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Explore both worlds of sequential art - from Japanese manga to global comics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Manga Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow h-full">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Manga</h3>
                  <p className="text-[#B0B0B0]">Japanese sequential art with unique storytelling</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {mangaStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 bg-[#1E1E2F] rounded-lg border border-[#FF4C60]/10"
                    >
                      <div className="text-2xl font-bold text-[#FF4C60] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#B0B0B0]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full" />
                    <span className="text-[#B0B0B0]">Right-to-left reading format</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full" />
                    <span className="text-[#B0B0B0]">Black & white artwork</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full" />
                    <span className="text-[#B0B0B0]">Serialized storytelling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full" />
                    <span className="text-[#B0B0B0]">Diverse genres & demographics</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow">
                  Explore Manga Collection
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Comics Section */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#4ECDC4]/20 comic-shadow h-full">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🦸</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Comics</h3>
                  <p className="text-[#B0B0B0]">Global sequential art with vibrant storytelling</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {comicsStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 bg-[#1E1E2F] rounded-lg border border-[#4ECDC4]/10"
                    >
                      <div className="text-2xl font-bold text-[#4ECDC4] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#B0B0B0]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                    <span className="text-[#B0B0B0]">Left-to-right reading format</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                    <span className="text-[#B0B0B0]">Full-color artwork</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                    <span className="text-[#B0B0B0]">Issue-based releases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                    <span className="text-[#B0B0B0]">Superhero & indie focus</span>
                  </div>
                </div>

                <Button className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white comic-shadow">
                  Explore Comics Collection
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Popular Genres Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#FF4C60] mb-4">Top Manga Genres</h4>
                  <div className="space-y-3">
                    {["Shonen", "Romance", "Isekai", "Slice of Life", "Horror"].map((genre, index) => (
                      <div key={genre} className="flex items-center justify-between">
                        <span className="text-[#B0B0B0]">{genre}</span>
                        <div className="flex-1 mx-4 bg-[#121212] rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${85 - index * 10}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-[#FF4C60] h-2 rounded-full"
                          />
                        </div>
                        <span className="text-[#FF4C60] text-sm">{85 - index * 10}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#4ECDC4] mb-4">Top Comics Genres</h4>
                  <div className="space-y-3">
                    {["Superhero", "Sci-Fi", "Fantasy", "Crime", "Adventure"].map((genre, index) => (
                      <div key={genre} className="flex items-center justify-between">
                        <span className="text-[#B0B0B0]">{genre}</span>
                        <div className="flex-1 mx-4 bg-[#121212] rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${90 - index * 12}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-[#4ECDC4] h-2 rounded-full"
                          />
                        </div>
                        <span className="text-[#4ECDC4] text-sm">{90 - index * 12}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
