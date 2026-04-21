"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Phone, Clock } from "lucide-react"

export function HeroContactSection() {
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
          <Badge className="bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20 mb-6">We're Here to Help</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-[#FF4C60]">Touch</span>
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or want to collaborate? We'd love to hear from you. Our team is ready to help you
            with anything related to ComicVerse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "Send us a message anytime",
              value: "hello@comicverse.com",
              color: "#FF4C60",
            },
            {
              icon: MessageCircle,
              title: "Live Chat",
              description: "Chat with our support team",
              value: "Available 24/7",
              color: "#4ECDC4",
            },
            {
              icon: Phone,
              title: "Call Us",
              description: "Speak directly with our team",
              value: "+1 (555) 123-4567",
              color: "#FFD93D",
            },
            {
              icon: Clock,
              title: "Response Time",
              description: "We typically respond within",
              value: "24 hours",
              color: "#4CAF50",
            },
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 text-center h-full">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${contact.color}20` }}
                  >
                    <contact.icon className="w-6 h-6" style={{ color: contact.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-[#B0B0B0] text-sm mb-3">{contact.description}</p>
                  <p className="font-medium" style={{ color: contact.color }}>
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-8">What can we help you with?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "General Questions",
              "Technical Support",
              "Creator Partnership",
              "Business Inquiry",
              "Bug Report",
              "Feature Request",
            ].map((topic, index) => (
              <motion.button
                key={topic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1E1E2F] hover:bg-[#FF4C60]/20 text-[#B0B0B0] hover:text-white px-6 py-3 rounded-lg border border-[#FF4C60]/20 hover:border-[#FF4C60]/40 transition-all"
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
