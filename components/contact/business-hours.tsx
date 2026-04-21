"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe, Phone, Mail, AlertCircle } from "lucide-react"

const businessHours = [
  {
    region: "Americas (PST/EST)",
    timezone: "UTC-8 / UTC-5",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", available: true },
      { day: "Saturday", time: "10:00 AM - 4:00 PM", available: true },
      { day: "Sunday", time: "Closed", available: false },
    ],
    phone: "+1 (555) 123-4567",
    email: "americas@comicverse.com",
    color: "#FF4C60",
  },
  {
    region: "Europe (GMT/CET)",
    timezone: "UTC+0 / UTC+1",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 5:00 PM", available: true },
      { day: "Saturday", time: "10:00 AM - 2:00 PM", available: true },
      { day: "Sunday", time: "Closed", available: false },
    ],
    phone: "+44 20 7123 4567",
    email: "europe@comicverse.com",
    color: "#4ECDC4",
  },
  {
    region: "Asia Pacific (JST/AEST)",
    timezone: "UTC+9 / UTC+10",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", available: true },
      { day: "Saturday", time: "9:00 AM - 1:00 PM", available: true },
      { day: "Sunday", time: "Closed", available: false },
    ],
    phone: "+81 3 1234 5678",
    email: "apac@comicverse.com",
    color: "#FFD93D",
  },
]

const responseTimeGuide = [
  {
    type: "Live Chat",
    time: "Immediate",
    description: "Real-time support during business hours",
    availability: "Business Hours Only",
    color: "#4CAF50",
  },
  {
    type: "Email Support",
    time: "2-4 hours",
    description: "Detailed responses to complex issues",
    availability: "24/7 Monitoring",
    color: "#FF4C60",
  },
  {
    type: "Support Tickets",
    time: "4-8 hours",
    description: "Comprehensive technical assistance",
    availability: "Priority Based",
    color: "#4ECDC4",
  },
  {
    type: "Phone Support",
    time: "Immediate",
    description: "Direct voice support for urgent matters",
    availability: "Business Hours Only",
    color: "#FFD93D",
  },
]

export function BusinessHours() {
  const getCurrentTime = (timezone: string) => {
    // This is a simplified example - in a real app, you'd use a proper timezone library
    const now = new Date()
    return now.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const isCurrentlyOpen = (hours: any[]) => {
    // Simplified logic - in a real app, you'd check actual business hours
    const now = new Date()
    const currentDay = now.getDay()
    const currentHour = now.getHours()

    // Assuming Monday-Friday are business days (1-5)
    if (currentDay >= 1 && currentDay <= 5) {
      return currentHour >= 9 && currentHour < 18
    }
    if (currentDay === 6) {
      // Saturday
      return currentHour >= 10 && currentHour < 16
    }
    return false // Sunday
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
            <Clock className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Business <span className="text-[#FF4C60]">Hours</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Our global support team is available across multiple time zones to assist you when you need help.
          </p>
        </motion.div>

        {/* Regional Business Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businessHours.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{region.region}</h3>
                      <p className="text-[#B0B0B0] text-sm">{region.timezone}</p>
                    </div>
                    <Badge
                      className={`${
                        isCurrentlyOpen(region.hours)
                          ? "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20"
                          : "bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20"
                      }`}
                    >
                      {isCurrentlyOpen(region.hours) ? "Open" : "Closed"}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-[#4ECDC4]" />
                      <span className="text-[#4ECDC4] text-sm font-medium">
                        Current Time: {getCurrentTime(region.timezone)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {region.hours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-[#B0B0B0] text-sm">{schedule.day}</span>
                        <span className={`text-sm font-medium ${schedule.available ? "text-white" : "text-[#FF4C60]"}`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#FF4C60]/10">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#FFD93D]" />
                      <span className="text-[#B0B0B0] text-sm">{region.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#4ECDC4]" />
                      <span className="text-[#B0B0B0] text-sm">{region.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Response Time Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Response Time Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimeGuide.map((guide, index) => (
              <motion.div
                key={guide.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${guide.color}20` }}
                    >
                      <Clock className="w-6 h-6" style={{ color: guide.color }} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{guide.type}</h4>
                    <div className="text-2xl font-bold mb-2" style={{ color: guide.color }}>
                      {guide.time}
                    </div>
                    <p className="text-[#B0B0B0] text-sm mb-3">{guide.description}</p>
                    <Badge className="bg-[#FF4C60]/10 text-[#FF4C60] border-[#FF4C60]/20 text-xs">
                      {guide.availability}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-[#FF4C60]" />
                <h3 className="text-2xl font-bold text-white">Emergency Support</h3>
              </div>
              <div className="text-center">
                <p className="text-[#B0B0B0] mb-6">
                  For critical security issues or service outages that affect your ability to access ComicVerse, our
                  emergency support line is available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FF4C60]" />
                    <div>
                      <div className="text-white font-bold">Emergency Hotline</div>
                      <div className="text-[#FF4C60] font-medium">+1 (555) 911-HELP</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#4ECDC4]" />
                    <div>
                      <div className="text-white font-bold">Availability</div>
                      <div className="text-[#4ECDC4] font-medium">24/7/365</div>
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
