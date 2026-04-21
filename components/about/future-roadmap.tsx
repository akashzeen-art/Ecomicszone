"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Zap, Globe, Users, BookOpen, Brain, Gamepad2, Smartphone } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "completed",
    title: "AI-Powered Recommendations 2.0",
    description: "Enhanced machine learning algorithms for personalized comic discovery",
    features: ["Advanced user profiling", "Cross-genre recommendations", "Mood-based suggestions"],
    icon: Brain,
    color: "#4CAF50",
  },
  {
    quarter: "Q2 2024",
    status: "in-progress",
    title: "Creator Collaboration Tools",
    description: "Platform for creators to collaborate on projects and share resources",
    features: ["Real-time collaboration", "Asset sharing", "Project management"],
    icon: Users,
    color: "#FF4C60",
  },
  {
    quarter: "Q3 2024",
    status: "planned",
    title: "VR Comic Experience",
    description: "Immersive virtual reality comic reading with 3D environments",
    features: ["VR headset support", "3D comic panels", "Interactive storytelling"],
    icon: Gamepad2,
    color: "#4ECDC4",
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    title: "Global Expansion Phase 2",
    description: "Launch in 50 additional countries with localized content",
    features: ["Regional partnerships", "Local payment methods", "Cultural adaptations"],
    icon: Globe,
    color: "#FFD93D",
  },
  {
    quarter: "Q1 2025",
    status: "planned",
    title: "Interactive Comics Platform",
    description: "Tools for creating choose-your-own-adventure style interactive comics",
    features: ["Branching narratives", "Reader choices", "Dynamic storylines"],
    icon: BookOpen,
    color: "#9C27B0",
  },
  {
    quarter: "Q2 2025",
    status: "planned",
    title: "Mobile AR Features",
    description: "Augmented reality features for mobile comic reading",
    features: ["AR character interactions", "3D pop-ups", "Real-world integration"],
    icon: Smartphone,
    color: "#FF9800",
  },
]

const visionGoals = [
  {
    title: "5 Million Users",
    description: "Reach 5 million active monthly users worldwide",
    target: "2025",
    progress: 30,
    icon: Users,
  },
  {
    title: "100 Countries",
    description: "Available in 100+ countries with local support",
    target: "2025",
    progress: 60,
    icon: Globe,
  },
  {
    title: "1 Million Comics",
    description: "Host over 1 million comic titles from global creators",
    target: "2026",
    progress: 5,
    icon: BookOpen,
  },
  {
    title: "VR/AR Leadership",
    description: "Become the leading platform for immersive comic experiences",
    target: "2026",
    progress: 15,
    icon: Zap,
  },
]

export function FutureRoadmap() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Future <span className="text-[#FF4C60]">Roadmap</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Our ambitious plans to revolutionize the comic industry and create the future of digital storytelling
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Development Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#4CAF50] via-[#FF4C60] to-[#4ECDC4] h-full rounded-full opacity-30 hidden lg:block" />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <Card
                      className={`border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 ${
                        item.status === "completed"
                          ? "bg-[#4CAF50]/10"
                          : item.status === "in-progress"
                            ? "bg-[#FF4C60]/10"
                            : "bg-[#1E1E2F]"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge
                            className={`text-white font-medium ${
                              item.status === "completed"
                                ? "bg-[#4CAF50]"
                                : item.status === "in-progress"
                                  ? "bg-[#FF4C60]"
                                  : "bg-[#B0B0B0]"
                            }`}
                          >
                            {item.quarter}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`${
                              item.status === "completed"
                                ? "border-[#4CAF50] text-[#4CAF50]"
                                : item.status === "in-progress"
                                  ? "border-[#FF4C60] text-[#FF4C60]"
                                  : "border-[#B0B0B0] text-[#B0B0B0]"
                            }`}
                          >
                            {item.status === "completed"
                              ? "Completed"
                              : item.status === "in-progress"
                                ? "In Progress"
                                : "Planned"}
                          </Badge>
                          <Calendar className="w-4 h-4 text-[#B0B0B0]" />
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-[#B0B0B0] leading-relaxed mb-4">{item.description}</p>

                        <div>
                          <h5 className="text-white font-medium mb-2">Key Features:</h5>
                          <div className="space-y-1">
                            {item.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-[#B0B0B0] text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Icon */}
                  <div className="relative z-10 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center comic-shadow"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Long-term Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#FF4C60]/20 rounded-full flex items-center justify-center">
                        <goal.icon className="w-6 h-6 text-[#FF4C60]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">{goal.title}</h4>
                        <p className="text-[#4ECDC4] text-sm">Target: {goal.target}</p>
                      </div>
                    </div>

                    <p className="text-[#B0B0B0] mb-4">{goal.description}</p>

                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#B0B0B0] text-sm">Progress</span>
                        <span className="text-[#FF4C60] text-sm font-medium">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-[#121212] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-gradient-to-r from-[#FF4C60] to-[#FFD93D] h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Innovation Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-[#FF4C60]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">AI & Machine Learning</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Advanced algorithms for personalization, content discovery, and creator tools
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="w-8 h-8 text-[#4ECDC4]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Immersive Technologies</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    VR, AR, and interactive storytelling to revolutionize comic experiences
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-[#FFD93D]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Global Accessibility</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Breaking down barriers to make comics accessible to everyone, everywhere
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
