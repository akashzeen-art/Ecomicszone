"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Medal, Crown, Zap } from "lucide-react"

const awards = [
  {
    id: 1,
    title: "Best Digital Comic Platform 2023",
    organization: "Digital Media Awards",
    year: "2023",
    icon: Trophy,
    color: "#FFD93D",
    description: "Recognized for innovation in digital comic distribution and user experience",
    category: "Industry Recognition",
  },
  {
    id: 2,
    title: "Startup of the Year",
    organization: "Tech Innovation Summit",
    year: "2022",
    icon: Crown,
    color: "#FF4C60",
    description: "Awarded for rapid growth and impact in the entertainment technology sector",
    category: "Business Excellence",
  },
  {
    id: 3,
    title: "People's Choice Award",
    organization: "Comic-Con International",
    year: "2023",
    icon: Star,
    color: "#4ECDC4",
    description: "Voted by comic fans as their favorite digital reading platform",
    category: "Community Choice",
  },
  {
    id: 4,
    title: "Innovation in UX Design",
    organization: "Design Excellence Awards",
    year: "2023",
    icon: Zap,
    color: "#4CAF50",
    description: "Honored for creating intuitive and engaging user interfaces",
    category: "Design Innovation",
  },
  {
    id: 5,
    title: "Best Mobile App",
    organization: "App Store Awards",
    year: "2022",
    icon: Medal,
    color: "#FF9800",
    description: "Featured as Editor's Choice for exceptional mobile comic reading experience",
    category: "Mobile Excellence",
  },
  {
    id: 6,
    title: "Creator Support Champion",
    organization: "Independent Comics Alliance",
    year: "2023",
    icon: Award,
    color: "#9C27B0",
    description: "Recognized for outstanding support and fair compensation to comic creators",
    category: "Creator Relations",
  },
]

const achievements = [
  { metric: "25+", label: "Awards Won", icon: Trophy },
  { metric: "98%", label: "User Satisfaction", icon: Star },
  { metric: "15+", label: "Industry Recognitions", icon: Award },
  { metric: "5★", label: "App Store Rating", icon: Medal },
]

export function AwardsRecognition() {
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
            Awards & <span className="text-[#FF4C60]">Recognition</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and our amazing community
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-[#FF4C60]" />
                  </div>
                  <div className="text-2xl font-bold text-[#FF4C60] mb-2">{achievement.metric}</div>
                  <div className="text-[#B0B0B0] text-sm">{achievement.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${award.color}20` }}
                    >
                      <award.icon className="w-6 h-6" style={{ color: award.color }} />
                    </div>
                    <div className="flex-1">
                      <Badge className="text-white text-xs mb-2" style={{ backgroundColor: award.color }}>
                        {award.year}
                      </Badge>
                      <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                      <p className="text-[#4ECDC4] text-sm font-medium">{award.organization}</p>
                    </div>
                  </div>

                  <p className="text-[#B0B0B0] text-sm leading-relaxed mb-4">{award.description}</p>

                  <Badge variant="outline" className="bg-[#121212] text-[#B0B0B0] border-[#B0B0B0]/20">
                    {award.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Recognition Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF4C60] mb-2">2022</div>
                  <div className="text-[#B0B0B0] mb-2">First Major Award</div>
                  <div className="text-sm text-[#B0B0B0]">Startup of the Year recognition launched our journey</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4ECDC4] mb-2">2023</div>
                  <div className="text-[#B0B0B0] mb-2">Industry Leadership</div>
                  <div className="text-sm text-[#B0B0B0]">Multiple awards across different categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD93D] mb-2">2024</div>
                  <div className="text-[#B0B0B0] mb-2">Global Recognition</div>
                  <div className="text-sm text-[#B0B0B0]">International awards and community acclaim</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
