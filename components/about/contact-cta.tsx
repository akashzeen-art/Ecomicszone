"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Users, Briefcase, Heart, ArrowRight } from "lucide-react"

const contactOptions = [
  {
    title: "General Inquiries",
    description: "Questions about our platform, features, or services",
    icon: Mail,
    color: "#FF4C60",
    action: "Contact Us",
    href: "/contact",
  },
  {
    title: "Creator Partnership",
    description: "Join our creator program and share your comics with the world",
    icon: Users,
    color: "#4ECDC4",
    action: "Become a Creator",
    href: "/contact?type=creator",
  },
  {
    title: "Business Partnership",
    description: "Explore partnership opportunities and business collaborations",
    icon: Briefcase,
    color: "#FFD93D",
    action: "Partner with Us",
    href: "/contact?type=business",
  },
  {
    title: "Join Our Team",
    description: "Be part of our mission to revolutionize the comic industry",
    icon: Heart,
    color: "#4CAF50",
    action: "View Careers",
    href: "/contact?type=careers",
  },
]

export function ContactCTA() {
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
            Let's <span className="text-[#FF4C60]">Connect</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Ready to be part of the ComicVerse story? We'd love to hear from you, whether you're a creator, partner, or
            fellow comic enthusiast.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${option.color}20` }}
                    >
                      <option.icon className="w-8 h-8" style={{ color: option.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                      <p className="text-[#B0B0B0] leading-relaxed mb-6">{option.description}</p>
                      <Button
                        className="text-white font-medium group-hover:animate-pulse-glow transition-all"
                        style={{ backgroundColor: option.color }}
                      >
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-[#FFD93D] rounded-full animate-float" />
                  <div
                    className="absolute top-16 right-12 w-12 h-12 bg-[#FF4C60] rounded-lg animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-12 left-16 w-14 h-14 bg-[#4ECDC4] rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <div className="relative p-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-20 h-20 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-[#FF4C60]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-[#B0B0B0] text-lg mb-8 max-w-2xl mx-auto">
                      Whether you have questions, ideas, or just want to say hello, we're here to listen. Join thousands
                      of creators and readers who are already part of the ComicVerse family.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-8 comic-shadow hover:animate-pulse-glow"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Get in Touch
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10 px-8 bg-transparent"
                      >
                        <Users className="w-5 h-5 mr-2" />
                        Join Community
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-[#FF4C60] mb-2">24h</div>
            <div className="text-[#B0B0B0]">Average Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4ECDC4] mb-2">98%</div>
            <div className="text-[#B0B0B0]">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFD93D] mb-2">15+</div>
            <div className="text-[#B0B0B0]">Languages Supported</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
