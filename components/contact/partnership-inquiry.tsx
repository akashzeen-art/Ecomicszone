"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Handshake, Building, Users, Zap, Globe, TrendingUp, Upload, CheckCircle } from "lucide-react"
import { useState } from "react"

const partnershipTypes = [
  {
    type: "Creator Partnership",
    description: "Join our creator program and monetize your comics",
    icon: Users,
    color: "#FF4C60",
    benefits: ["Revenue sharing", "Marketing support", "Creator tools"],
  },
  {
    type: "Business Partnership",
    description: "Strategic partnerships for mutual growth",
    icon: Building,
    color: "#4ECDC4",
    benefits: ["Co-marketing", "Integration opportunities", "Shared resources"],
  },
  {
    type: "Technology Integration",
    description: "Integrate your services with ComicVerse platform",
    icon: Zap,
    color: "#FFD93D",
    benefits: ["API access", "Technical support", "Joint development"],
  },
  {
    type: "Distribution Partnership",
    description: "Expand reach through distribution networks",
    icon: Globe,
    color: "#4CAF50",
    benefits: ["Global reach", "Localization support", "Market insights"],
  },
]

const companyTypes = [
  "Startup (1-10 employees)",
  "Small Business (11-50 employees)",
  "Medium Business (51-200 employees)",
  "Enterprise (200+ employees)",
  "Individual Creator",
  "Non-profit Organization",
  "Educational Institution",
  "Other",
]

export function PartnershipInquiry() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    companyType: "",
    partnershipType: "",
    budget: "",
    timeline: "",
    description: "",
    nda: false,
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        companyType: "",
        partnershipType: "",
        budget: "",
        timeline: "",
        description: "",
        nda: false,
        newsletter: false,
      })
    }, 5000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Partnership <span className="text-[#FF4C60]">Opportunities</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Join forces with ComicVerse to create amazing experiences for comic lovers worldwide. Let's build something
            great together.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipTypes.map((partnership, index) => (
            <motion.div
              key={partnership.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${partnership.color}20` }}
                  >
                    <partnership.icon className="w-6 h-6" style={{ color: partnership.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{partnership.type}</h3>
                  <p className="text-[#B0B0B0] text-sm mb-4">{partnership.description}</p>
                  <div className="space-y-2">
                    {partnership.benefits.map((benefit) => (
                      <Badge
                        key={benefit}
                        className="text-xs mr-1 mb-1"
                        style={{ backgroundColor: `${partnership.color}20`, color: partnership.color }}
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership Form */}
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Partnership Inquiry Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-white">
                        Company/Organization Name *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="Your company name"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-white">
                        Contact Person *
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        placeholder="Your full name"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Business Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="business@company.com"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-white">
                        Company Website
                      </Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyType" className="text-white">
                        Company Type *
                      </Label>
                      <Select
                        value={formData.companyType}
                        onValueChange={(value) => handleInputChange("companyType", value)}
                      >
                        <SelectTrigger className="bg-[#121212] border-[#FF4C60]/20 text-white focus:border-[#FF4C60]">
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#121212] border-[#FF4C60]/20">
                          {companyTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="partnershipType" className="text-white">
                        Partnership Type *
                      </Label>
                      <Select
                        value={formData.partnershipType}
                        onValueChange={(value) => handleInputChange("partnershipType", value)}
                      >
                        <SelectTrigger className="bg-[#121212] border-[#FF4C60]/20 text-white focus:border-[#FF4C60]">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#121212] border-[#FF4C60]/20">
                          {partnershipTypes.map((type) => (
                            <SelectItem key={type.type} value={type.type.toLowerCase().replace(/\s+/g, "-")}>
                              {type.type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-white">
                        Expected Timeline
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="bg-[#121212] border-[#FF4C60]/20 text-white focus:border-[#FF4C60]">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#121212] border-[#FF4C60]/20">
                          <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                          <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long-term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      Partnership Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your partnership proposal, goals, and how we can work together..."
                      rows={6}
                      className="bg-[#121212] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60] resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="nda"
                        checked={formData.nda}
                        onCheckedChange={(checked) => handleInputChange("nda", checked as boolean)}
                        className="border-[#FF4C60]/20 data-[state=checked]:bg-[#FF4C60]"
                      />
                      <Label htmlFor="nda" className="text-[#B0B0B0] text-sm">
                        I'm willing to sign an NDA for confidential discussions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="border-[#FF4C60]/20 data-[state=checked]:bg-[#FF4C60]"
                      />
                      <Label htmlFor="newsletter" className="text-[#B0B0B0] text-sm">
                        Subscribe to partnership updates and opportunities
                      </Label>
                    </div>
                  </div>

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
                        <Handshake className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-[#4ECDC4]/20 text-[#4ECDC4] hover:bg-[#4ECDC4]/10 bg-transparent"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Attach Proposal
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
                <h3 className="text-2xl font-bold text-white mb-4">Partnership Inquiry Submitted!</h3>
                <p className="text-[#B0B0B0] mb-6">
                  Thank you for your interest in partnering with ComicVerse. Our business development team will review
                  your proposal and get back to you within 2-3 business days.
                </p>
                <div className="flex items-center justify-center gap-4 text-[#4ECDC4]">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Next steps will be sent to your email</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
