"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Palette, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "50,000+",
    label: "Total Comics",
    color: "#FF4C60",
    description: "Across all genres",
  },
  {
    icon: Palette,
    value: "2,500+",
    label: "Artists",
    color: "#FFD93D",
    description: "From around the world",
  },
  {
    icon: Users,
    value: "1M+",
    label: "Active Readers",
    color: "#4ECDC4",
    description: "Monthly users",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Satisfaction Rate",
    color: "#4CAF50",
    description: "User reviews",
  },
]

export function LibraryStats() {
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
            Library <span className="text-[#FF4C60]">Statistics</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Discover the incredible scale of our comic universe and join millions of readers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    <div className="text-3xl font-bold text-white mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-[#B0B0B0] text-sm">{stat.description}</div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Growing Every Day</h3>
              <p className="text-[#B0B0B0] mb-6">
                Our library expands daily with new comics, artists, and readers joining our community
              </p>
              <div className="flex justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#4CAF50]">+500</div>
                  <div className="text-sm text-[#B0B0B0]">Comics/week</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#2196F3]">+50</div>
                  <div className="text-sm text-[#B0B0B0]">Artists/month</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FF9800]">+10K</div>
                  <div className="text-sm text-[#B0B0B0]">Readers/day</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
