"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Star, TrendingUp, Clock, BookOpen, Zap } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "The Sandman",
    author: "Neil Gaiman",
    image: "/sandman-comic-cover.png",
    rating: 4.8,
    genre: "Fantasy",
    reason: "Based on your love for dark fantasy",
    confidence: 95,
    readTime: "8 hours",
    popularity: "Trending",
    aiInsight: "Your reading pattern suggests you enjoy complex mythology and character development",
  },
  {
    id: 2,
    title: "Saga",
    author: "Brian K. Vaughan",
    image: "/saga-comic-cover.png",
    rating: 4.9,
    genre: "Sci-Fi",
    reason: "Matches your sci-fi preferences",
    confidence: 92,
    readTime: "12 hours",
    popularity: "Hot",
    aiInsight: "Similar narrative complexity to your recently read titles",
  },
  {
    id: 3,
    title: "Watchmen",
    author: "Alan Moore",
    image: "/watchmen-comic-cover.png",
    rating: 4.7,
    genre: "Superhero",
    reason: "Classic superhero deconstruction",
    confidence: 88,
    readTime: "6 hours",
    popularity: "Classic",
    aiInsight: "Your interest in psychological depth aligns with this masterpiece",
  },
  {
    id: 4,
    title: "Y: The Last Man",
    author: "Brian K. Vaughan",
    image: "/y-the-last-man-comic-cover.png",
    rating: 4.6,
    genre: "Post-Apocalyptic",
    reason: "Dystopian themes you enjoy",
    confidence: 90,
    readTime: "15 hours",
    popularity: "Rising",
    aiInsight: "Your preference for character-driven narratives makes this a perfect match",
  },
]

export function RecommendedForYou() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FF4C60]/20 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#FF4C60]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Recommended <span className="text-[#FF4C60]">For You</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto mb-6">
            AI-powered recommendations based on your reading history and preferences
          </p>
          <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-[#4ECDC4]" />
            <span className="text-[#4ECDC4] text-sm font-medium">Powered by Advanced AI</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((comic, index) => (
            <motion.div
              key={comic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                <div className="relative flex justify-center items-center h-64 overflow-hidden bg-[#050509]">
                  <img
                    src={comic.image || "/placeholder.svg"}
                    alt={comic.title}
                      className="w-full h-full object-cover"
                  />

                  {/* Confidence Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4CAF50] text-white font-medium">{comic.confidence}% Match</Badge>
                  </div>

                  {/* Popularity Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`${
                        comic.popularity === "Trending"
                          ? "bg-[#FF4C60]/20 border-[#FF4C60] text-[#FF4C60]"
                          : comic.popularity === "Hot"
                            ? "bg-[#FFD93D]/20 border-[#FFD93D] text-[#FFD93D]"
                            : comic.popularity === "Rising"
                              ? "bg-[#4ECDC4]/20 border-[#4ECDC4] text-[#4ECDC4]"
                              : "bg-[#B0B0B0]/20 border-[#B0B0B0] text-[#B0B0B0]"
                      }`}
                    >
                      {comic.popularity === "Trending" && <TrendingUp className="w-3 h-3 mr-1" />}
                      {comic.popularity}
                    </Badge>
                  </div>

                  {/* AI Insight Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-[#4ECDC4]" />
                        <span className="text-[#4ECDC4] font-medium">AI Insight</span>
                      </div>
                      <p>{comic.aiInsight}</p>
                    </div>
                  </div>
                </div>

                  <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{comic.title}</h3>
                    <p className="text-[#4ECDC4] font-medium mb-3">by {comic.author}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFD93D] fill-current" />
                        <span className="text-white">{comic.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#B0B0B0]">
                        <Clock className="w-4 h-4" />
                        <span>{comic.readTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge variant="outline" className="bg-[#121212] text-[#B0B0B0] border-[#B0B0B0]/20">
                        {comic.genre}
                      </Badge>
                    </div>

                    <div className="bg-[#121212] p-3 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                        <span className="text-[#4ECDC4] text-sm font-medium">Why recommended</span>
                      </div>
                      <p className="text-[#B0B0B0] text-sm">{comic.reason}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#FF4C60]/20 text-[#FF4C60] hover:bg-[#FF4C60]/10 bg-transparent"
                    >
                      Add to Wishlist
                    </Button>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Recommendation Engine Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#FF4C60]/10 border-[#4ECDC4]/20 comic-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">How Our AI Works</h3>
                <p className="text-[#B0B0B0] max-w-2xl mx-auto">
                  Our recommendation engine analyzes your reading patterns, preferences, and behavior to suggest comics
                  you'll love
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-[#FF4C60]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Reading History</h4>
                  <p className="text-[#B0B0B0] text-sm">Analyzes your past reads and ratings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-[#4ECDC4]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Pattern Recognition</h4>
                  <p className="text-[#B0B0B0] text-sm">Identifies themes and genres you enjoy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#FFD93D]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-[#B0B0B0] text-sm">Improves recommendations over time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
