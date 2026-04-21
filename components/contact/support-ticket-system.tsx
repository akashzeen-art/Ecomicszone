"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Ticket, Clock, AlertCircle, CheckCircle, Upload } from "lucide-react"
import { useState } from "react"

const priorityLevels = [
  { value: "low", label: "Low", color: "#4CAF50", description: "General questions, non-urgent issues" },
  { value: "medium", label: "Medium", color: "#FFD93D", description: "Account issues, feature requests" },
  { value: "high", label: "High", color: "#FF9800", description: "Payment problems, technical bugs" },
  { value: "urgent", label: "Urgent", color: "#FF4C60", description: "Security issues, service outages" },
]

const ticketTypes = [
  "Technical Support",
  "Account Issues",
  "Billing & Payments",
  "Bug Report",
  "Feature Request",
  "Content Issues",
  "Partnership Inquiry",
  "Other",
]

export function SupportTicketSystem() {
  const [ticketData, setTicketData] = useState({
    title: "",
    type: "",
    priority: "",
    description: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ticketSubmitted, setTicketSubmitted] = useState(false)
  const [ticketNumber, setTicketNumber] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate ticket submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newTicketNumber = `CV-${Date.now().toString().slice(-6)}`
    setTicketNumber(newTicketNumber)
    setIsSubmitting(false)
    setTicketSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setTicketSubmitted(false)
      setTicketData({
        title: "",
        type: "",
        priority: "",
        description: "",
        email: "",
      })
    }, 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setTicketData((prev) => ({ ...prev, [field]: value }))
  }

  const selectedPriority = priorityLevels.find((p) => p.value === ticketData.priority)

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Ticket className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Support <span className="text-[#FF4C60]">Tickets</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Create a support ticket for detailed assistance. We'll track your issue and keep you updated on progress.
          </p>
        </motion.div>

        {!ticketSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={ticketData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-white">
                        Ticket Type *
                      </Label>
                      <Select value={ticketData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="bg-[#121212] border-[#FF4C60]/20 text-white focus:border-[#FF4C60]">
                          <SelectValue placeholder="Select ticket type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#121212] border-[#FF4C60]/20">
                          {ticketTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">
                      Issue Title *
                    </Label>
                    <Input
                      id="title"
                      value={ticketData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Brief description of your issue"
                      className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Priority Level *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {priorityLevels.map((priority) => (
                        <motion.button
                          key={priority.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleInputChange("priority", priority.value)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            ticketData.priority === priority.value
                              ? "border-[#FF4C60] bg-[#FF4C60]/10"
                              : "border-[#FF4C60]/20 bg-[#121212] hover:border-[#FF4C60]/40"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: priority.color }} />
                            <span className="font-medium text-white">{priority.label}</span>
                          </div>
                          <p className="text-[#B0B0B0] text-sm">{priority.description}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      Detailed Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={ticketData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Please provide as much detail as possible about your issue..."
                      rows={6}
                      className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60] resize-none"
                      required
                    />
                  </div>

                  {selectedPriority && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#121212] border border-[#FF4C60]/20"
                    >
                      <Clock className="w-5 h-5 text-[#4ECDC4]" />
                      <div>
                        <p className="text-white font-medium">Expected Response Time</p>
                        <p className="text-[#B0B0B0] text-sm">
                          {selectedPriority.value === "urgent"
                            ? "Within 2 hours"
                            : selectedPriority.value === "high"
                              ? "Within 8 hours"
                              : selectedPriority.value === "medium"
                                ? "Within 24 hours"
                                : "Within 48 hours"}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow hover:animate-pulse-glow flex-1"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Ticket className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Creating Ticket..." : "Create Support Ticket"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-[#4ECDC4]/20 text-[#4ECDC4] hover:bg-[#4ECDC4]/10 bg-transparent"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Attach Files
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#1E1E2F] border-[#4CAF50]/20 comic-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ticket Created Successfully!</h3>
                <div className="mb-6">
                  <Badge className="bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20 text-lg px-4 py-2">
                    Ticket #{ticketNumber}
                  </Badge>
                </div>
                <p className="text-[#B0B0B0] mb-6">
                  Your support ticket has been created and assigned to our team. You'll receive email updates on the
                  progress.
                </p>
                <div className="text-[#4CAF50] font-medium">Returning to form...</div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Ticket Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#FFD93D]" />
                Ticket Status Guide
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { status: "Open", color: "#FF4C60", description: "Ticket received and assigned" },
                  { status: "In Progress", color: "#FFD93D", description: "Our team is working on it" },
                  { status: "Pending", color: "#FF9800", description: "Waiting for your response" },
                  { status: "Resolved", color: "#4CAF50", description: "Issue has been resolved" },
                ].map((item) => (
                  <div key={item.status} className="text-center">
                    <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }} />
                    <h4 className="font-medium text-white mb-1">{item.status}</h4>
                    <p className="text-[#B0B0B0] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
