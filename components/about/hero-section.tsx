"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4C60] rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-[#FFD93D] rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#4ECDC4] rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20 mb-6">
            Est. 2020 • Bringing Comics to Life
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-[#FF4C60]">ComicVerse</span>
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
            We're passionate storytellers and comic enthusiasts on a mission to make the incredible world of comics
            accessible to everyone, everywhere. From classic superhero tales to cutting-edge indie stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-[#B0B0B0] leading-relaxed">
              <p>
                ComicVerse began as a small passion project in 2020 when a group of comic book lovers realized that
                amazing stories were scattered across countless platforms, making discovery difficult for fans.
              </p>
              <p>
                What started as a weekend project in a garage has grown into a thriving platform that serves over 1
                million comic enthusiasts worldwide. We've partnered with independent artists, major publishers, and
                emerging creators to build the most comprehensive comic library on the web.
              </p>
              <p>
                Today, we're not just a platform – we're a community where stories come alive, artists find their
                audience, and readers discover their next favorite adventure.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#1E1E2F] p-4 rounded-lg border border-[#FF4C60]/20">
                <div className="text-2xl font-bold text-[#FF4C60] mb-1">1M+</div>
                <div className="text-sm text-[#B0B0B0]">Active Readers</div>
              </div>
              <div className="bg-[#1E1E2F] p-4 rounded-lg border border-[#FFD93D]/20">
                <div className="text-2xl font-bold text-[#FFD93D] mb-1">50K+</div>
                <div className="text-sm text-[#B0B0B0]">Comics Available</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow overflow-hidden">
              <CardContent className="p-0">
                <img src="/comic-book-office.png" alt="ComicVerse Team" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Our Creative Hub</h3>
                  <p className="text-[#B0B0B0]">
                    Where passion meets innovation. Our team works tirelessly to curate, create, and deliver the best
                    comic experience possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#FF4C60] text-white p-4 rounded-lg comic-shadow"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <div>
                  <div className="font-bold">25+</div>
                  <div className="text-xs">Awards Won</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-[#4ECDC4] text-white p-4 rounded-lg comic-shadow"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <div>
                  <div className="font-bold">150+</div>
                  <div className="text-xs">Countries</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { icon: BookOpen, title: "Curated Content", desc: "Hand-picked comics from the best creators" },
            { icon: Users, title: "Community First", desc: "Built by fans, for fans of all genres" },
            { icon: Award, title: "Quality Focus", desc: "Only the highest quality stories and art" },
            { icon: Globe, title: "Global Reach", desc: "Connecting comic lovers worldwide" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#FF4C60]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#B0B0B0] text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
