"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Zap, Shield, Sword, Heart, Star } from "lucide-react"
import { useState } from "react"

const characters = [
  {
    id: 1,
    name: "Spider-Man",
    realName: "Peter Parker",
    universe: "Marvel",
    powers: ["Web-slinging", "Spider-sense", "Super strength"],
    image: "/spider-like-hero.png",
    popularity: 95,
    firstAppearance: "Amazing Fantasy #15 (1962)",
    alignment: "Hero",
    powerLevel: 85,
  },
  {
    id: 2,
    name: "Wonder Woman",
    realName: "Diana Prince",
    universe: "DC",
    powers: ["Super strength", "Flight", "Lasso of Truth"],
    image: "/wonder-woman-inspired-heroine.png",
    popularity: 92,
    firstAppearance: "All Star Comics #8 (1941)",
    alignment: "Hero",
    powerLevel: 95,
  },
  {
    id: 3,
    name: "Batman",
    realName: "Bruce Wayne",
    universe: "DC",
    powers: ["Martial arts", "Detective skills", "Technology"],
    image: "/dark-knight.png",
    popularity: 98,
    firstAppearance: "Detective Comics #27 (1939)",
    alignment: "Hero",
    powerLevel: 75,
  },
  {
    id: 4,
    name: "Wolverine",
    realName: "Logan",
    universe: "Marvel",
    powers: ["Healing factor", "Adamantium claws", "Enhanced senses"],
    image: "/fierce-mutant.png",
    popularity: 89,
    firstAppearance: "The Incredible Hulk #180 (1974)",
    alignment: "Hero",
    powerLevel: 88,
  },
  {
    id: 5,
    name: "Joker",
    realName: "Unknown",
    universe: "DC",
    powers: ["Genius intellect", "Chemical expertise", "Unpredictability"],
    image: "/stylized-jester.png",
    popularity: 87,
    firstAppearance: "Batman #1 (1940)",
    alignment: "Villain",
    powerLevel: 70,
  },
  {
    id: 6,
    name: "Captain Marvel",
    realName: "Carol Danvers",
    universe: "Marvel",
    powers: ["Energy projection", "Flight", "Super strength"],
    image: "/captain-marvel.png",
    popularity: 84,
    firstAppearance: "Marvel Super-Heroes #13 (1968)",
    alignment: "Hero",
    powerLevel: 92,
  },
]

const universes = ["All", "Marvel", "DC", "Image", "Dark Horse"]
const alignments = ["All", "Hero", "Villain", "Anti-Hero"]

export function CharactersDatabase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUniverse, setSelectedUniverse] = useState("All")
  const [selectedAlignment, setSelectedAlignment] = useState("All")

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch =
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.realName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesUniverse = selectedUniverse === "All" || character.universe === selectedUniverse
    const matchesAlignment = selectedAlignment === "All" || character.alignment === selectedAlignment

    return matchesSearch && matchesUniverse && matchesAlignment
  })

  const getPowerIcon = (power: string) => {
    if (power.includes("strength") || power.includes("claws")) return Sword
    if (power.includes("sense") || power.includes("detective")) return Search
    if (power.includes("energy") || power.includes("web")) return Zap
    if (power.includes("healing") || power.includes("flight")) return Heart
    return Shield
  }

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
            Characters <span className="text-[#FF4C60]">Database</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto mb-8">
            Explore detailed profiles of your favorite comic book characters
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] w-5 h-5" />
              <Input
                placeholder="Search characters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#1E1E2F] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
              />
            </div>

            <select
              value={selectedUniverse}
              onChange={(e) => setSelectedUniverse(e.target.value)}
              className="px-4 py-2 bg-[#1E1E2F] border border-[#FF4C60]/20 rounded-md text-white focus:border-[#FF4C60] focus:outline-none"
            >
              {universes.map((universe) => (
                <option key={universe} value={universe}>
                  {universe} Universe
                </option>
              ))}
            </select>

            <select
              value={selectedAlignment}
              onChange={(e) => setSelectedAlignment(e.target.value)}
              className="px-4 py-2 bg-[#1E1E2F] border border-[#FF4C60]/20 rounded-md text-white focus:border-[#FF4C60] focus:outline-none"
            >
              {alignments.map((alignment) => (
                <option key={alignment} value={alignment}>
                  {alignment === "All" ? "All Alignments" : alignment}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden">
                <div className="relative flex justify-center items-center h-48 overflow-hidden bg-[#050509]">
                  <img
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    className="max-h-full w-auto object-contain"
                  />

                  {/* Universe Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        character.universe === "Marvel" ? "bg-[#FF4C60]" : "bg-[#4ECDC4]"
                      } text-white font-medium`}
                    >
                      {character.universe}
                    </Badge>
                  </div>

                  {/* Alignment Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`${
                        character.alignment === "Hero"
                          ? "bg-[#4CAF50]/20 border-[#4CAF50] text-[#4CAF50]"
                          : character.alignment === "Villain"
                            ? "bg-[#FF4C60]/20 border-[#FF4C60] text-[#FF4C60]"
                            : "bg-[#FFD93D]/20 border-[#FFD93D] text-[#FFD93D]"
                      }`}
                    >
                      {character.alignment}
                    </Badge>
                  </div>

                  {/* Popularity Stars */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-[#FFD93D] fill-current" />
                    <span className="text-white text-sm">{character.popularity}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
                  <p className="text-[#4ECDC4] font-medium mb-4">{character.realName}</p>

                  {/* Power Level Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#B0B0B0] text-sm">Power Level</span>
                      <span className="text-[#FF4C60] text-sm font-medium">{character.powerLevel}%</span>
                    </div>
                    <div className="w-full bg-[#121212] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${character.powerLevel}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-[#FF4C60] to-[#FFD93D] h-2 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Powers */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Powers & Abilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.powers.slice(0, 3).map((power, powerIndex) => {
                        const PowerIcon = getPowerIcon(power)
                        return (
                          <div
                            key={powerIndex}
                            className="flex items-center gap-1 bg-[#121212] px-2 py-1 rounded text-xs text-[#B0B0B0]"
                          >
                            <PowerIcon className="w-3 h-3" />
                            {power}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* First Appearance */}
                  <div className="text-xs text-[#B0B0B0] mb-4">
                    <strong>First Appearance:</strong> {character.firstAppearance}
                  </div>

                  <button className="w-full bg-[#FF4C60]/10 hover:bg-[#FF4C60]/20 text-[#FF4C60] py-2 rounded-lg font-medium transition-colors border border-[#FF4C60]/20 hover:border-[#FF4C60]/40">
                    View Full Profile
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No Characters Found</h3>
            <p className="text-[#B0B0B0]">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#4ECDC4]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Character Database Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF4C60] mb-2">2,500+</div>
                  <div className="text-[#B0B0B0]">Total Characters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4ECDC4] mb-2">50+</div>
                  <div className="text-[#B0B0B0]">Universes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD93D] mb-2">1,000+</div>
                  <div className="text-[#B0B0B0]">Powers Catalogued</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
