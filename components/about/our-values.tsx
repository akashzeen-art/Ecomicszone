"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Shield, Globe, Star } from "lucide-react"

const coreValues = [
  {
    id: 1,
    title: "Passion for Comics",
    description:
      "Every decision we make is driven by our genuine love for comics and storytelling. We're fans first, business second.",
    icon: Heart,
    color: "#FF4C60",
    examples: [
      "Hand-curating every comic in our library",
      "Supporting emerging artists and creators",
      "Celebrating comic culture in everything we do",
    ],
  },
  {
    id: 2,
    title: "Community First",
    description:
      "Our users aren't just customers – they're part of our family. We build features based on community feedback and needs.",
    icon: Users,
    color: "#4ECDC4",
    examples: [
      "Regular community feedback sessions",
      "User-driven feature development",
      "Active engagement on social platforms",
    ],
  },
  {
    id: 3,
    title: "Innovation & Excellence",
    description:
      "We constantly push boundaries to create the best possible comic reading experience through cutting-edge technology.",
    icon: Lightbulb,
    color: "#FFD93D",
    examples: ["AI-powered recommendation engine", "Interactive reading features", "Continuous platform improvements"],
  },
  {
    id: 4,
    title: "Creator Empowerment",
    description:
      "We believe in fair compensation and providing creators with the tools and platform they need to succeed.",
    icon: Star,
    color: "#4CAF50",
    examples: ["Transparent revenue sharing", "Creator analytics and insights", "Marketing support for indie artists"],
  },
  {
    id: 5,
    title: "Accessibility & Inclusion",
    description:
      "Comics should be accessible to everyone, regardless of location, language, or ability. We break down barriers.",
    icon: Globe,
    color: "#9C27B0",
    examples: ["Multi-language support", "Accessibility features for all users", "Affordable pricing worldwide"],
  },
  {
    id: 6,
    title: "Trust & Transparency",
    description:
      "We build trust through honest communication, transparent practices, and protecting our users' privacy.",
    icon: Shield,
    color: "#FF9800",
    examples: ["Clear privacy policies", "Open communication about changes", "Secure payment and data handling"],
  },
]

export function OurValues() {
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
            Our <span className="text-[#FF4C60]">Values</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            The principles that guide every decision we make and shape the culture of ComicVerse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${value.color}20` }}
                    >
                      <value.icon className="w-6 h-6" style={{ color: value.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </div>

                  <p className="text-[#B0B0B0] leading-relaxed mb-6">{value.description}</p>

                  <div>
                    <h4 className="text-white font-medium mb-3">How we live this value:</h4>
                    <ul className="space-y-2">
                      {value.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: value.color }}
                          />
                          <span className="text-[#B0B0B0] text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Values in Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#FF4C60] mb-4">Recent Initiatives</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                      <span className="text-[#B0B0B0] text-sm">Launched Creator Support Fund ($100K)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                      <span className="text-[#B0B0B0] text-sm">Added 15 new languages to platform</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                      <span className="text-[#B0B0B0] text-sm">Implemented advanced accessibility features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                      <span className="text-[#B0B0B0] text-sm">Hosted 50+ community events worldwide</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#4ECDC4] mb-4">Impact Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF4C60] mb-1">95%</div>
                      <div className="text-xs text-[#B0B0B0]">Creator Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#4ECDC4] mb-1">98%</div>
                      <div className="text-xs text-[#B0B0B0]">User Trust Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FFD93D] mb-1">150+</div>
                      <div className="text-xs text-[#B0B0B0]">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#4CAF50] mb-1">$2M+</div>
                      <div className="text-xs text-[#B0B0B0]">Paid to Creators</div>
                    </div>
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
