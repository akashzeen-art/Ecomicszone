"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, X } from "lucide-react"

const comicPages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
]

export function FlipbookPreview() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % comicPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + comicPages.length) % comicPages.length)
  }

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive <span className="text-[#FF4C60]">Preview</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg">Experience comics with our realistic flipbook reader</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Comic Preview"
                  className="w-64 h-80 object-contain rounded-lg mb-6 bg-[#050509]"
                />
                <Button
                  onClick={() => setIsOpen(true)}
                  size="lg"
                  className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Open Flipbook
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Flipbook Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-[#FF4C60]"
                >
                  <X className="w-6 h-6" />
                </Button>

                <div className="relative bg-[#1E1E2F] rounded-lg p-8 comic-shadow">
                  <div className="flex items-center justify-center gap-8">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevPage}
                      className="text-white hover:text-[#FF4C60] hover:bg-[#FF4C60]/10"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <div className="relative">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentPage}
                          src={comicPages[currentPage] || "/placeholder.svg"}
                          alt={`Page ${currentPage + 1}`}
                          className="w-80 h-96 object-contain rounded-lg comic-shadow bg-black"
                          initial={{ rotateY: -90, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          exit={{ rotateY: 90, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextPage}
                      className="text-white hover:text-[#FF4C60] hover:bg-[#FF4C60]/10"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-[#B0B0B0]">
                      Page {currentPage + 1} of {comicPages.length}
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      {comicPages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentPage ? "bg-[#FF4C60] scale-125" : "bg-[#B0B0B0]/30 hover:bg-[#B0B0B0]/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
