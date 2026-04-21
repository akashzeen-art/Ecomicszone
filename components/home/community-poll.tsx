"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Vote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CommunityPoll() {
  const { translations } = useLanguage()
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const pollOptions = [
    {
      id: 1,
      name: translations.poll.heroes.spiderman,
      votes: 2847,
      color: "#FF4C60",
      image: "/spider-man-comic-cover.png",
    },
    {
      id: 2,
      name: translations.poll.heroes.batman,
      votes: 2156,
      color: "#1E1E2F",
      image: "/dark-knight-comic.png",
    },
    {
      id: 3,
      name: translations.poll.heroes.wonderWoman,
      votes: 1923,
      color: "#FFD93D",
      image: "/wonder-woman-comic-cover.png",
    },
    {
      id: 4,
      name: translations.poll.heroes.ironMan,
      votes: 1654,
      color: "#FF6B35",
      image: "/armored-superhero.png",
    },
    {
      id: 5,
      name: translations.poll.heroes.captainAmerica,
      votes: 1432,
      color: "#4ECDC4",
      image: "/captain-marvel.png",
    },
  ]

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = () => {
    if (selectedOption !== null) {
      setHasVoted(true)
      // In a real app, you'd send this to your backend
    }
  }

  return (
    <section className="bg-[#121212] py-20">
      <div className="mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 mb-4 px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-[#FF4C60]" />
            <span className="font-medium text-[#FF4C60]">{translations.poll.badge}</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            {translations.poll.title} <span className="text-[#FFD93D]">{translations.poll.titleHighlight}</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg">{translations.poll.subtitle}</p>
        </motion.div>

        <Card className="bg-[#1E1E2F] comic-shadow border-[#FF4C60]/20">
          <CardContent className="p-8">
            <div className="space-y-4 mb-8">
              {pollOptions.map((option, index) => {
                const percentage = hasVoted ? (option.votes / totalVotes) * 100 : 0
                const isSelected = selectedOption === option.id

                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                      isSelected ? "border-[#FF4C60] bg-[#FF4C60]/10" : "border-[#FF4C60]/20 hover:border-[#FF4C60]/50"
                    }`}
                    onClick={() => !hasVoted && setSelectedOption(option.id)}
                  >
                    <div className="flex items-center p-4">
                      <img
                        src={option.image || "/placeholder.svg"}
                        alt={option.name}
                        className="mr-4 rounded-full w-14 h-14 md:w-16 md:h-16 object-cover ring-2 ring-[#FF4C60]/40 bg-black"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-white text-lg">{option.name}</span>
                          {hasVoted && <span className="font-bold text-[#FFD93D]">{percentage.toFixed(1)}%</span>}
                        </div>
                        {hasVoted && (
                          <div className="bg-[#121212] rounded-full w-full h-2">
                            <motion.div
                              className="rounded-full h-2"
                              style={{ backgroundColor: option.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        )}
                      </div>
                      {isSelected && !hasVoted && (
                        <div className="flex justify-center items-center bg-[#FF4C60] rounded-full w-6 h-6">
                          <div className="bg-white rounded-full w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {!hasVoted ? (
              <div className="text-center">
                <Button
                  onClick={handleVote}
                  disabled={selectedOption === null}
                  size="lg"
                  className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 disabled:opacity-50 comic-shadow px-8 text-white disabled:cursor-not-allowed"
                >
                  <Vote className="mr-2 w-5 h-5" />
                  {translations.poll.voteButton}
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-2 font-bold text-[#FFD93D] text-lg">{translations.poll.thankYou}</p>
                <p className="text-[#B0B0B0]">
                  {translations.poll.totalVotes} <span className="font-bold text-white">{totalVotes.toLocaleString()}</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
