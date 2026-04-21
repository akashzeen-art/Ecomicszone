"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Zap } from "lucide-react"

export function MissionVision() {
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
            Our <span className="text-[#FF4C60]">Mission & Vision</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Driven by passion, guided by purpose, and committed to bringing the magic of comics to every corner of the
            world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#FF4C60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>

                <p className="text-[#B0B0B0] text-lg leading-relaxed mb-6">
                  To democratize access to incredible comic stories by creating the world's most comprehensive,
                  user-friendly, and community-driven comic platform that celebrates both established and emerging
                  creators.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Make comics accessible to readers worldwide, regardless of location or background
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Support independent artists and creators with fair compensation and global exposure
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF4C60] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Foster a vibrant community where comic lovers can discover, discuss, and celebrate stories
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#4ECDC4]/20 comic-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-[#4ECDC4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>

                <p className="text-[#B0B0B0] text-lg leading-relaxed mb-6">
                  To become the global epicenter of comic culture, where every story finds its audience, every creator
                  finds their voice, and every reader discovers their next great adventure.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Be the first choice platform for comic discovery and reading worldwide
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Pioneer innovative technologies that enhance the comic reading experience
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#B0B0B0]">
                      Shape the future of digital storytelling and interactive comic experiences
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">What Drives Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[#FF4C60]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Passion</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Every decision is driven by our love for comics and storytelling
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Innovation</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    We constantly push boundaries to improve the comic experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-[#FFD93D]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Excellence</h4>
                  <p className="text-[#B0B0B0] text-sm">We strive for the highest quality in everything we do</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
