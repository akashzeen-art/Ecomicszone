"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Globe, Award, DollarSign } from "lucide-react"

const impactStats = [
  {
    metric: "$2.5M+",
    label: "Paid to Creators",
    description: "Direct revenue sharing with comic artists and writers",
    icon: DollarSign,
    color: "#4CAF50",
  },
  {
    metric: "10,000+",
    label: "Creators Supported",
    description: "Independent artists given global platform",
    icon: Users,
    color: "#FF4C60",
  },
  {
    metric: "50M+",
    label: "Comics Read",
    description: "Stories shared and enjoyed worldwide",
    icon: BookOpen,
    color: "#4ECDC4",
  },
  {
    metric: "150+",
    label: "Countries Reached",
    description: "Making comics accessible globally",
    icon: Globe,
    color: "#FFD93D",
  },
]

const initiatives = [
  {
    id: 1,
    title: "Creator Support Fund",
    description:
      "Financial assistance program for emerging comic creators to develop their craft and reach new audiences.",
    impact: "$100K distributed to 200+ creators",
    image: "/creator-support-program.png",
    category: "Creator Support",
    color: "#FF4C60",
  },
  {
    id: 2,
    title: "Comics in Schools",
    description: "Educational program bringing comics to classrooms to improve literacy and creative expression.",
    impact: "500+ schools, 50K+ students reached",
    image: "/comics-in-schools.png",
    category: "Education",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Accessibility Initiative",
    description:
      "Making comics accessible to readers with visual impairments through audio descriptions and screen reader support.",
    impact: "10K+ users with improved access",
    image: "/accessibility-features.png",
    category: "Accessibility",
    color: "#FFD93D",
  },
  {
    id: 4,
    title: "Global Translation Project",
    description: "Volunteer-driven initiative to translate comics into underrepresented languages.",
    impact: "25+ languages, 1000+ comics translated",
    image: "/translation-project.png",
    category: "Localization",
    color: "#9C27B0",
  },
]

const testimonials = [
  {
    name: "Maria Santos",
    role: "Independent Comic Creator",
    quote:
      "ComicVerse gave me the platform to share my stories with readers worldwide. The creator support program helped me quit my day job and focus on comics full-time.",
    avatar: "/creator-testimonial-1.png",
  },
  {
    name: "James Wilson",
    role: "High School Teacher",
    quote:
      "The Comics in Schools program transformed my classroom. Students who struggled with traditional reading are now engaged and excited about storytelling.",
    avatar: "/teacher-testimonial.png",
  },
  {
    name: "Yuki Tanaka",
    role: "Community Volunteer",
    quote:
      "Being part of the translation project allows me to bridge cultures and bring amazing stories to Japanese readers who wouldn't otherwise access them.",
    avatar: "/volunteer-testimonial.png",
  },
]

export function CommunityImpact() {
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
            Community <span className="text-[#FF4C60]">Impact</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Beyond business metrics, we measure success by the positive impact we create in the comic community and
            beyond
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow text-center h-full">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.metric}
                  </div>
                  <div className="text-white font-medium mb-2">{stat.label}</div>
                  <p className="text-[#B0B0B0] text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Initiatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="text-white" style={{ backgroundColor: initiative.color }}>
                        {initiative.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">{initiative.title}</h4>
                    <p className="text-[#B0B0B0] leading-relaxed mb-4">{initiative.description}</p>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#4CAF50]" />
                      <span className="text-[#4CAF50] font-medium text-sm">{initiative.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Community Voices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-[#4ECDC4] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-[#B0B0B0] leading-relaxed italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get Involved CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Impact</h3>
              <p className="text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
                Whether you're a creator, educator, volunteer, or comic lover, there are many ways to be part of our
                community impact initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-6 py-3 rounded-lg font-medium comic-shadow hover:animate-pulse-glow transition-all">
                  Become a Creator
                </button>
                <button className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white px-6 py-3 rounded-lg font-medium comic-shadow hover:animate-pulse-glow transition-all">
                  Volunteer with Us
                </button>
                <button className="bg-[#1E1E2F] hover:bg-[#1E1E2F]/80 text-white px-6 py-3 rounded-lg font-medium border border-[#FF4C60]/20 hover:border-[#FF4C60]/40 transition-all">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
