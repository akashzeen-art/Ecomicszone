"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Smartphone, Tablet, Monitor, Check } from "lucide-react"

const features = [
  "Offline reading capability",
  "Sync across all devices",
  "High-quality downloads",
  "Unlimited storage",
  "Fast download speeds",
  "Auto-updates",
]

export function DownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-12 h-12 bg-[#FFD93D] rounded-full animate-float" />
                  <div
                    className="absolute top-16 right-12 w-8 h-8 bg-[#FF4C60] rounded-lg animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-12 left-16 w-10 h-10 bg-[#4ECDC4] rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <div className="relative grid lg:grid-cols-2 gap-12 p-12">
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 px-4 py-2 rounded-full mb-6">
                        <Download className="w-5 h-5 text-[#FF4C60]" />
                        <span className="text-[#FF4C60] font-medium">Download Comics</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Take Your Comics <span className="text-[#FFD93D]">Anywhere</span>
                      </h2>
                      <p className="text-[#B0B0B0] text-lg mb-8 leading-relaxed">
                        Download your favorite comics and read them offline on any device. Never miss a chapter, even
                        without an internet connection.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-[#B0B0B0]">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-8 comic-shadow hover:animate-pulse-glow"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Start Downloading
                      </Button>
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">Available On All Devices</h3>
                      <div className="grid grid-cols-3 gap-8">
                        <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center group cursor-pointer">
                          <div className="w-16 h-16 bg-[#FFD93D]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD93D]/30 transition-colors">
                            <Smartphone className="w-8 h-8 text-[#FFD93D]" />
                          </div>
                          <p className="text-white font-medium">Mobile</p>
                          <p className="text-[#B0B0B0] text-sm">iOS & Android</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center group cursor-pointer">
                          <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4ECDC4]/30 transition-colors">
                            <Tablet className="w-8 h-8 text-[#4ECDC4]" />
                          </div>
                          <p className="text-white font-medium">Tablet</p>
                          <p className="text-[#B0B0B0] text-sm">iPad & Android</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, y: -5 }} className="text-center group cursor-pointer">
                          <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF4C60]/30 transition-colors">
                            <Monitor className="w-8 h-8 text-[#FF4C60]" />
                          </div>
                          <p className="text-white font-medium">Desktop</p>
                          <p className="text-[#B0B0B0] text-sm">Windows & Mac</p>
                        </motion.div>
                      </div>

                      <div className="mt-12 p-6 bg-[#121212] rounded-lg border border-[#FF4C60]/20">
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-2xl font-bold text-[#FF4C60]">10M+</div>
                            <div className="text-sm text-[#B0B0B0]">Downloads</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#FFD93D]">4.8★</div>
                            <div className="text-sm text-[#B0B0B0]">Rating</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#4ECDC4]">50GB</div>
                            <div className="text-sm text-[#B0B0B0]">Free Storage</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
