"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, BookOpen, Award, Globe, Zap } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    quarter: "Q1",
    title: "The Beginning",
    description: "ComicVerse started as a weekend project in Alex's garage with just 100 comics and a simple website.",
    icon: BookOpen,
    color: "#FF4C60",
    stats: { comics: "100", users: "50", team: "2" },
  },
  {
    year: "2020",
    quarter: "Q3",
    title: "First Milestone",
    description: "Reached 1,000 registered users and partnered with our first independent comic creators.",
    icon: Users,
    color: "#4ECDC4",
    stats: { comics: "500", users: "1K", team: "3" },
  },
  {
    year: "2021",
    quarter: "Q1",
    title: "Seed Funding",
    description: "Secured $500K in seed funding to expand our team and improve the platform infrastructure.",
    icon: Zap,
    color: "#FFD93D",
    stats: { comics: "2K", users: "10K", team: "8" },
  },
  {
    year: "2021",
    quarter: "Q4",
    title: "Major Publishers",
    description: "Signed partnerships with major comic publishers, expanding our library to 10,000+ titles.",
    icon: Globe,
    color: "#4CAF50",
    stats: { comics: "10K", users: "50K", team: "12" },
  },
  {
    year: "2022",
    quarter: "Q2",
    title: "Mobile Launch",
    description: "Launched mobile apps for iOS and Android, making comics accessible on-the-go.",
    icon: BookOpen,
    color: "#FF4C60",
    stats: { comics: "25K", users: "200K", team: "18" },
  },
  {
    year: "2023",
    quarter: "Q1",
    title: "Global Expansion",
    description: "Expanded to 50+ countries with localized content and multi-language support.",
    icon: Globe,
    color: "#4ECDC4",
    stats: { comics: "40K", users: "500K", team: "22" },
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Industry Recognition",
    description: "Won 'Best Digital Comic Platform' award and reached 1 million active users.",
    icon: Award,
    color: "#FFD93D",
    stats: { comics: "50K", users: "1M", team: "25" },
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "AI Integration",
    description: "Launched AI-powered recommendation engine and interactive reading features.",
    icon: Zap,
    color: "#FF4C60",
    stats: { comics: "60K", users: "1.5M", team: "30" },
  },
]

export function CompanyTimeline() {
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
            Our <span className="text-[#FF4C60]">Journey</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            From a small garage project to a global platform - here's how ComicVerse evolved over the years
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF4C60] via-[#4ECDC4] to-[#FFD93D] h-full rounded-full opacity-30" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.quarter}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="text-white font-medium" style={{ backgroundColor: event.color }}>
                          {event.year} {event.quarter}
                        </Badge>
                        <Calendar className="w-4 h-4 text-[#B0B0B0]" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-[#B0B0B0] leading-relaxed mb-4">{event.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold" style={{ color: event.color }}>
                            {event.stats.comics}
                          </div>
                          <div className="text-xs text-[#B0B0B0]">Comics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold" style={{ color: event.color }}>
                            {event.stats.users}
                          </div>
                          <div className="text-xs text-[#B0B0B0]">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold" style={{ color: event.color }}>
                            {event.stats.team}
                          </div>
                          <div className="text-xs text-[#B0B0B0]">Team</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center comic-shadow"
                    style={{ backgroundColor: event.color }}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goals Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
              <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
                We're just getting started! Our roadmap includes VR comic experiences, creator collaboration tools, and
                expanding to 100+ countries by 2025.
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF4C60] mb-1">2025</div>
                  <div className="text-sm text-[#B0B0B0]">VR Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4ECDC4] mb-1">100+</div>
                  <div className="text-sm text-[#B0B0B0]">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFD93D] mb-1">5M</div>
                  <div className="text-sm text-[#B0B0B0]">Target Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
