"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

const comicPages = [
  {
    id: 1,
    title: "Spider-Man: Into the Spider-Verse",
    page: 1,
    image: "/placeholder-1s5vd.png",
    content: "The origin story begins...",
  },
  {
    id: 2,
    title: "Spider-Man: Into the Spider-Verse",
    page: 2,
    image: "/placeholder.svg",
    content: "Miles discovers his powers...",
  },
  {
    id: 3,
    title: "Spider-Man: Into the Spider-Verse",
    page: 3,
    image: "/placeholder.svg",
    content: "The multiverse opens...",
  },
  {
    id: 4,
    title: "Spider-Man: Into the Spider-Verse",
    page: 4,
    image: "/placeholder.svg",
    content: "Heroes unite across dimensions...",
  },
]

export function PageFlipTransition() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextPage = () => {
    if (currentPage < comicPages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Interactive <span className="text-[#FF4C60]">Comic Reader</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Experience comics with smooth page-flip animations and immersive reading
          </p>
        </motion.div>

        <div className="relative">
          {/* Comic Book Container */}
          <div className="relative mx-auto max-w-2xl">
            <div
              className="relative bg-[#1E1E2F] rounded-lg comic-shadow overflow-hidden"
              style={{ aspectRatio: "2/3" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{
                    rotateY: isFlipping ? -90 : 0,
                    opacity: isFlipping ? 0 : 1,
                  }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotateY: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={comicPages[currentPage].image || "/placeholder.svg"}
                    alt={`${comicPages[currentPage].title} - Page ${comicPages[currentPage].page}`}
                    className="w-full h-full object-contain bg-black"
                  />

                  {/* Page Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{comicPages[currentPage].title}</h3>
                      <p className="text-[#B0B0B0] mb-2">Page {comicPages[currentPage].page}</p>
                      <p className="text-sm">{comicPages[currentPage].content}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === comicPages.length - 1 || isFlipping}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {comicPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFlipping) {
                      setIsFlipping(true)
                      setTimeout(() => {
                        setCurrentPage(index)
                        setIsFlipping(false)
                      }, 300)
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPage ? "bg-[#FF4C60] scale-125" : "bg-[#B0B0B0]/30 hover:bg-[#B0B0B0]/50"
                  }`}
                />
              ))}
            </div>

            {/* Reading Progress */}
            <div className="mt-4 bg-[#1E1E2F] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#B0B0B0] text-sm">Reading Progress</span>
                <span className="text-[#FF4C60] text-sm font-medium">
                  {Math.round(((currentPage + 1) / comicPages.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-[#121212] rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentPage + 1) / comicPages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-[#FF4C60] to-[#FFD93D] h-2 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Reading Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-6 py-3 rounded-lg font-medium comic-shadow transition-all">
              Full Screen Mode
            </button>
            <button className="bg-[#1E1E2F] hover:bg-[#1E1E2F]/80 text-white px-6 py-3 rounded-lg font-medium border border-[#FF4C60]/20 hover:border-[#FF4C60]/40 transition-all">
              Reading Settings
            </button>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                📖
              </motion.div>
            </div>
            <h3 className="text-white font-semibold mb-2">Smooth Page Flips</h3>
            <p className="text-[#B0B0B0] text-sm">Realistic page-turning animations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🎯
              </motion.div>
            </div>
            <h3 className="text-white font-semibold mb-2">Reading Progress</h3>
            <p className="text-[#B0B0B0] text-sm">Track your progress through each comic</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                ⚙️
              </motion.div>
            </div>
            <h3 className="text-white font-semibold mb-2">Customizable Experience</h3>
            <p className="text-[#B0B0B0] text-sm">Adjust reading settings to your preference</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
