"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SoundtrackPlayer() {
  const { translations } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [progress, setProgress] = useState(0)

  const tracks = [
    {
      id: 1,
      title: "رحلة البطل",
      artist: "موسيقى ملحمية",
      duration: "3:45",
      cover: "/space-patrol-comic.png",
    },
    {
      id: 2,
      title: "موضوع المعركة",
      artist: "شركة موسيقى الأكشن",
      duration: "4:12",
      cover: "/dark-shadows-comic-cover.png",
    },
    {
      id: 3,
      title: "مغامرة كونية",
      artist: "أصوات الفضاء",
      duration: "5:23",
      cover: "/mystic-realms-comic.png",
    },
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
    setProgress(0)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
    setProgress(0)
  }

  return (
    <section className="bg-gradient-to-b from-[#1E1E2F] to-[#121212] py-20">
      <div className="mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/10 mb-4 px-4 py-2 rounded-full">
            <Music className="w-5 h-5 text-[#FFD93D]" />
            <span className="font-medium text-[#FFD93D]">الموسيقى التصويرية</span>
          </div>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            موسيقى <span className="text-[#FF4C60]">المجلات</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            انغمس في الموسيقى الملحمية التي تجلب المجلات إلى الحياة
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-[#1E1E2F] to-[#121212] comic-shadow border-[#FF4C60]/30">
            <CardContent className="p-8">
              {/* Current track display */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="relative rounded-2xl overflow-hidden w-28 h-28 md:w-32 md:h-32 shadow-lg shadow-black/40">
                  <img
                    src={tracks[currentTrack].cover || "/placeholder.svg"}
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                  {isPlaying && (
                    <motion.div
                      className="absolute inset-0 bg-[#FF4C60]/20"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-1 font-bold text-white text-2xl">{tracks[currentTrack].title}</h3>
                  <p className="text-[#B0B0B0] text-sm md:text-base">{tracks[currentTrack].artist}</p>
                  <p className="mt-1 inline-block rounded-full bg-[#FF4C60]/10 px-3 py-1 text-[#FFD93D] text-xs md:text-sm">
                    {tracks[currentTrack].duration}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="bg-[#121212] mb-2 rounded-full w-full h-2">
                  <motion.div
                    className="bg-[#FF4C60] rounded-full h-2"
                    style={{ width: `${progress}%` }}
                    animate={isPlaying ? { width: ["0%", "100%"] } : {}}
                    transition={isPlaying ? { duration: 30, ease: "linear" } : {}}
                  />
                </div>
                <div className="flex justify-between text-[#B0B0B0] text-sm">
                  <span>0:00</span>
                  <span>{tracks[currentTrack].duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center gap-4 mb-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTrack}
                  className="hover:bg-[#FF4C60]/20 text-[#B0B0B0] hover:text-white"
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow rounded-full w-14 h-14 text-white"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="ml-1 w-6 h-6" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTrack}
                  className="hover:bg-[#FF4C60]/20 text-[#B0B0B0] hover:text-white"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-[#FF4C60]/20 text-[#B0B0B0] hover:text-white">
                  <Volume2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Track list */}
              <div className="mt-4 space-y-2">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    onClick={() => setCurrentTrack(index)}
                    className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                      index === currentTrack ? "bg-[#FF4C60]/20 border border-[#FF4C60]/40" : "hover:bg-[#121212]/50"
                    }`}
                  >
                    <img
                      src={track.cover || "/placeholder.svg"}
                      alt="Track cover"
                        className="rounded-lg w-12 h-12 object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-white">{track.title}</div>
                      <div className="text-[#B0B0B0] text-sm">{track.artist}</div>
                    </div>
                    <div className="text-[#B0B0B0] text-sm">{track.duration}</div>
                    {index === currentTrack && isPlaying && (
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-[#FF4C60] rounded-full w-1"
                            animate={{ height: [4, 16, 4] }}
                            transition={{
                              duration: 0.8,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
