"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, Clock, Zap, Globe, Shield } from "lucide-react"
import { useState } from "react"

const chatFeatures = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Get immediate answers to your questions",
    color: "#FF4C60",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Chat with our knowledgeable team members",
    color: "#4ECDC4",
  },
  {
    icon: Globe,
    title: "24/7 Availability",
    description: "Support available around the clock",
    color: "#FFD93D",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your conversations are encrypted and private",
    color: "#4CAF50",
  },
]

const supportAgents = [
  {
    name: "Sarah Chen",
    role: "Senior Support Specialist",
    avatar: "/placeholder.svg",
    status: "online",
    specialties: ["Technical Issues", "Account Management"],
  },
  {
    name: "Mike Rodriguez",
    role: "Creator Relations",
    avatar: "/placeholder.svg",
    status: "online",
    specialties: ["Partnerships", "Content Guidelines"],
  },
  {
    name: "Emma Thompson",
    role: "Billing Support",
    avatar: "/placeholder.svg",
    status: "busy",
    specialties: ["Payments", "Subscriptions"],
  },
]

export function LiveChatIntegration() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  const handleStartChat = (agentName?: string) => {
    setSelectedAgent(agentName || null)
    setIsChatOpen(true)
    // In a real implementation, this would open the actual chat widget
    setTimeout(() => {
      setIsChatOpen(false)
      setSelectedAgent(null)
    }, 3000)
  }

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Live <span className="text-[#FF4C60]">Chat</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Get instant help from our support team. Start a conversation and get your questions answered in real-time.
          </p>
        </motion.div>

        {/* Chat Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {chatFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 text-center h-full">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#B0B0B0] text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Available Agents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Available Support Agents</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportAgents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={agent.avatar || "/placeholder.svg"}
                          alt={agent.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1E1E2F] ${
                            agent.status === "online"
                              ? "bg-[#4CAF50]"
                              : agent.status === "busy"
                                ? "bg-[#FFD93D]"
                                : "bg-[#B0B0B0]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">{agent.name}</h4>
                        <p className="text-[#B0B0B0] text-sm">{agent.role}</p>
                      </div>
                      <Badge
                        className={`${
                          agent.status === "online"
                            ? "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20"
                            : agent.status === "busy"
                              ? "bg-[#FFD93D]/10 text-[#FFD93D] border-[#FFD93D]/20"
                              : "bg-[#B0B0B0]/10 text-[#B0B0B0] border-[#B0B0B0]/20"
                        }`}
                      >
                        {agent.status}
                      </Badge>
                    </div>
                    <div className="mb-4">
                      <p className="text-[#B0B0B0] text-sm mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty) => (
                          <Badge key={specialty} className="bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      onClick={() => handleStartChat(agent.name)}
                      disabled={agent.status === "offline"}
                      className={`w-full ${
                        agent.status === "online"
                          ? "bg-[#4CAF50] hover:bg-[#4CAF50]/90"
                          : agent.status === "busy"
                            ? "bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-black"
                            : "bg-[#B0B0B0]/20 text-[#B0B0B0] cursor-not-allowed"
                      } comic-shadow`}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {agent.status === "online" ? "Start Chat" : agent.status === "busy" ? "Join Queue" : "Offline"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start Chat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help Right Now?</h3>
              <p className="text-[#B0B0B0] mb-6">
                Start a general chat and we'll connect you with the best available agent for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => handleStartChat()}
                  className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-8 py-3 comic-shadow hover:animate-pulse-glow"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                <div className="flex items-center gap-2 text-[#B0B0B0]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Average wait time: 30 seconds</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Status Modal */}
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1E1E2F] border border-[#FF4C60]/20 rounded-lg p-8 max-w-md mx-4 comic-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Connecting to Chat...</h3>
                {selectedAgent ? (
                  <p className="text-[#B0B0B0] mb-4">Connecting you with {selectedAgent}</p>
                ) : (
                  <p className="text-[#B0B0B0] mb-4">Finding the best available agent for you</p>
                )}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-6 h-6 border-2 border-[#FF4C60] border-t-transparent rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
