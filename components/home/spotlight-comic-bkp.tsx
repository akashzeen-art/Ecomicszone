"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Play, BookOpen } from "lucide-react"

export function SpotlightComic() {
  return (
    <section className="bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge className="bg-[#FFD93D] mb-4 px-4 py-2 text-[#121212] text-lg">Comic of the Week</Badge>
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
            <span className="text-[#FF4C60]">Spotlight:</span> Galactic Guardians
          </h2>
        </motion.div>

        <div className="items-center gap-12 grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-[#FF4C60]/20 to-[#FFD93D]/20 blur-2xl group-hover:blur-3xl rounded-2xl transition-all duration-500" />
            <div className="relative">
              <img
                src="/dark-knight-comic.png"
                alt="Galactic Guardians Comic Cover"
                className="comic-shadow mx-auto rounded-2xl w-full max-w-md group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                className="top-4 right-4 absolute bg-[#FFD93D] px-3 py-1 rounded-full font-bold text-[#121212]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                NEW
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 font-bold text-white text-3xl">Galactic Guardians #1</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current w-5 h-5 text-[#FFD93D]" />
                  ))}
                  <span className="ml-2 font-bold text-white">4.9</span>
                </div>
                <Badge className="bg-[#FF4C60]/20 border-[#FF4C60] text-[#FF4C60]">Sci-Fi</Badge>
              </div>
              <p className="mb-6 text-[#B0B0B0] text-lg leading-relaxed">
                When Earth's last hope lies in the hands of unlikely heroes, the Galactic Guardians must unite across
                the cosmos to face an ancient evil that threatens all existence. An epic space opera that redefines what
                it means to be a hero.
              </p>
            </div>

            <div className="gap-4 grid grid-cols-3 py-6 border-[#FF4C60]/20 border-y">
              <div className="text-center">
                <div className="font-bold text-[#FF4C60] text-2xl">156K</div>
                <div className="text-[#B0B0B0] text-sm">Readers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FFD93D] text-2xl">24</div>
                <div className="text-[#B0B0B0] text-sm">Issues</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FF4C60] text-2xl">4.9</div>
                <div className="text-[#B0B0B0] text-sm">Rating</div>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4">
              <Button
                size="lg"
                className="flex-1 bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow text-white hover:animate-pulse-glow"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Read Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 bg-transparent hover:bg-[#FFD93D] border-[#FFD93D] text-[#FFD93D] hover:text-[#121212]"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Trailer
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
