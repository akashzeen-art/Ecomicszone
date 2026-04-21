"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Palette } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const artists = [
  {
    id: 1,
    name: "Alex Rodriguez",
    specialty: "Superhero Comics",
    followers: "245K",
    works: 127,
    avatar: "/placeholder.svg",
    featured: "/placeholder.svg",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Manga Style",
    followers: "189K",
    works: 93,
    avatar: "/placeholder.svg",
    featured: "/placeholder.svg",
    verified: true,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    specialty: "Digital Art",
    followers: "156K",
    works: 78,
    avatar: "/placeholder.svg",
    featured: "/placeholder.svg",
    verified: false,
  },
  {
    id: 4,
    name: "Elena Vasquez",
    specialty: "Fantasy Comics",
    followers: "203K",
    works: 112,
    avatar: "/placeholder.svg",
    featured: "/placeholder.svg",
    verified: true,
  },
]

export function TopArtists() {
  const { translations } = useLanguage()
  
  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 px-4 py-2 rounded-full mb-4">
            <Palette className="w-5 h-5 text-[#FF4C60]" />
            <span className="text-[#FF4C60] font-medium">{translations.home.topArtists.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.home.topArtists.title} <span className="text-[#FFD93D]">{translations.home.topArtists.titleHighlight}</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            {translations.home.topArtists.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 overflow-hidden hover:comic-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={artist.featured || "/placeholder.svg"}
                      alt={`${artist.name}'s work`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-[#FFD93D] text-[#121212] mb-2">{artist.specialty}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={artist.avatar || "/placeholder.svg"}
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#FF4C60]"
                        />
                        {artist.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD93D] rounded-full flex items-center justify-center">
                            <Award className="w-3 h-3 text-[#121212]" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FFD93D] transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-[#B0B0B0]">{artist.specialty}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#FF4C60]">{artist.followers}</div>
                        <div className="text-sm text-[#B0B0B0]">{translations.home.topArtists.followers}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#FFD93D]">{artist.works}</div>
                        <div className="text-sm text-[#B0B0B0]">{translations.home.topArtists.works}</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1 bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white">
                        <Users className="w-4 h-4 mr-2" />
                        {translations.home.topArtists.follow}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[#FFD93D] text-[#FFD93D] hover:bg-[#FFD93D] hover:text-[#121212] bg-transparent"
                      >
                        {translations.home.topArtists.viewWorks}
                      </Button>
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
