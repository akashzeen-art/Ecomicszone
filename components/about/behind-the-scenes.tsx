"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Coffee, Code, Palette, Users, Zap } from "lucide-react"
import { useState } from "react"

const studioSpaces = [
  {
    id: 1,
    name: "Creative Hub",
    description: "Where our design and content teams collaborate on user experiences and comic curation",
    image: "/creative-workspace.png",
    features: ["Design Thinking Walls", "Comic Art Gallery", "Collaboration Spaces"],
    team: "Design & Content",
  },
  {
    id: 2,
    name: "Development Lab",
    description: "Our engineering team builds the future of comic reading with cutting-edge technology",
    image: "/development-office.png",
    features: ["Multiple Monitor Setups", "VR Testing Area", "Server Room"],
    team: "Engineering",
  },
  {
    id: 3,
    name: "Community Lounge",
    description: "Casual space for team meetings, community calls, and comic reading sessions",
    image: "/modern-office-lounge.png",
    features: ["Comic Library", "Video Call Booths", "Relaxation Area"],
    team: "All Teams",
  },
  {
    id: 4,
    name: "Innovation Studio",
    description: "Experimental space where we prototype new features and test emerging technologies",
    image: "/innovation-lab.png",
    features: ["VR/AR Equipment", "Prototype Stations", "Testing Devices"],
    team: "R&D",
  },
]

const dailyLife = [
  {
    time: "9:00 AM",
    activity: "Team Stand-ups",
    description: "Daily sync across all teams to align on priorities and blockers",
    icon: Users,
    color: "#FF4C60",
  },
  {
    time: "10:30 AM",
    activity: "Deep Work Time",
    description: "Focused development, design, and content creation sessions",
    icon: Code,
    color: "#4ECDC4",
  },
  {
    time: "12:00 PM",
    activity: "Comic Lunch & Learn",
    description: "Team members share interesting comics and discuss industry trends",
    icon: Coffee,
    color: "#FFD93D",
  },
  {
    time: "2:00 PM",
    activity: "Collaboration Hours",
    description: "Cross-team projects, brainstorming, and creative sessions",
    icon: Palette,
    color: "#4CAF50",
  },
  {
    time: "4:00 PM",
    activity: "Innovation Time",
    description: "20% time for personal projects and experimental features",
    icon: Zap,
    color: "#9C27B0",
  },
]

export function BehindTheScenes() {
  const [selectedSpace, setSelectedSpace] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Behind the <span className="text-[#FF4C60]">Scenes</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Take a peek inside our creative workspace where the magic of ComicVerse comes to life
          </p>
        </motion.div>

        {/* Virtual Office Tour */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Virtual Office Tour</h3>

          {/* Space Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {studioSpaces.map((space, index) => (
              <motion.button
                key={space.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSpace(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedSpace === index
                    ? "bg-[#FF4C60] text-white comic-shadow"
                    : "bg-[#1E1E2F] text-[#B0B0B0] hover:bg-[#FF4C60]/20 hover:text-white border border-[#FF4C60]/20"
                }`}
              >
                {space.name}
              </motion.button>
            ))}
          </div>

          {/* Selected Space Display */}
          <motion.div
            key={selectedSpace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={studioSpaces[selectedSpace].image || "/placeholder.svg"}
                    alt={studioSpaces[selectedSpace].name}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FF4C60] text-white">
                      <Play className="w-3 h-3 mr-1" />
                      Virtual Tour
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-white mb-4">{studioSpaces[selectedSpace].name}</h4>
                  <p className="text-[#B0B0B0] leading-relaxed mb-6">{studioSpaces[selectedSpace].description}</p>

                  <div className="mb-6">
                    <h5 className="text-white font-medium mb-3">Key Features:</h5>
                    <div className="space-y-2">
                      {studioSpaces[selectedSpace].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#4ECDC4] rounded-full" />
                          <span className="text-[#B0B0B0] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Badge variant="outline" className="bg-[#121212] text-[#4ECDC4] border-[#4ECDC4]/20 w-fit">
                    {studioSpaces[selectedSpace].team}
                  </Badge>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Daily Life Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">A Day in the Life</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {dailyLife.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div className="text-lg font-bold mb-2" style={{ color: item.color }}>
                      {item.time}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.activity}</h4>
                    <p className="text-[#B0B0B0] text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture & Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Our Culture & Perks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="text-white font-semibold mb-2">Comic Library</h4>
                  <p className="text-[#B0B0B0] text-sm">Unlimited access to our entire comic collection</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="text-white font-semibold mb-2">Remote Friendly</h4>
                  <p className="text-[#B0B0B0] text-sm">Flexible work arrangements for all team members</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-white font-semibold mb-2">Creative Time</h4>
                  <p className="text-[#B0B0B0] text-sm">20% time for personal projects and innovation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <h4 className="text-white font-semibold mb-2">Game Room</h4>
                  <p className="text-[#B0B0B0] text-sm">Arcade games, consoles, and board games</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h4 className="text-white font-semibold mb-2">Premium Coffee</h4>
                  <p className="text-[#B0B0B0] text-sm">Barista-quality coffee and snacks all day</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h4 className="text-white font-semibold mb-2">Comic-Con Trips</h4>
                  <p className="text-[#B0B0B0] text-sm">Annual team trips to major comic conventions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
