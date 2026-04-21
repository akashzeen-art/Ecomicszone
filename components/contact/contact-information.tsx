"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Clock, Globe, Users } from "lucide-react"

const offices = [
  {
    id: 1,
    name: "San Francisco HQ",
    address: "123 Comic Street, San Francisco, CA 94102",
    phone: "+1 (555) 123-4567",
    email: "sf@comicverse.com",
    hours: "Mon-Fri: 9AM-6PM PST",
    type: "Headquarters",
    color: "#FF4C60",
    image: "/san-francisco-office.png",
  },
  {
    id: 2,
    name: "New York Studio",
    address: "456 Marvel Avenue, New York, NY 10001",
    phone: "+1 (555) 234-5678",
    email: "ny@comicverse.com",
    hours: "Mon-Fri: 9AM-6PM EST",
    type: "Creative Studio",
    color: "#4ECDC4",
    image: "/new-york-office.png",
  },
  {
    id: 3,
    name: "London Office",
    address: "789 Superhero Lane, London, UK SW1A 1AA",
    phone: "+44 20 7123 4567",
    email: "london@comicverse.com",
    hours: "Mon-Fri: 9AM-5PM GMT",
    type: "European Hub",
    color: "#FFD93D",
    image: "/london-office.png",
  },
]

const departments = [
  {
    name: "General Support",
    email: "support@comicverse.com",
    description: "Technical issues, account help, and general questions",
    icon: Users,
    color: "#FF4C60",
  },
  {
    name: "Creator Relations",
    email: "creators@comicverse.com",
    description: "Partnership opportunities and creator support",
    icon: Users,
    color: "#4ECDC4",
  },
  {
    name: "Business Development",
    email: "business@comicverse.com",
    description: "Enterprise partnerships and business inquiries",
    icon: Globe,
    color: "#FFD93D",
  },
  {
    name: "Press & Media",
    email: "press@comicverse.com",
    description: "Media inquiries and press releases",
    icon: Mail,
    color: "#4CAF50",
  },
]

export function ContactInformation() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1E1E2F] to-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#FF4C60]">Locations</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Find us around the world. We have offices in major cities to better serve our global community.
          </p>
        </motion.div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={office.image || "/placeholder.svg"}
                    alt={office.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="text-white" style={{ backgroundColor: office.color }}>
                      {office.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{office.name}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF4C60] mt-0.5 flex-shrink-0" />
                      <span className="text-[#B0B0B0] text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#4ECDC4] flex-shrink-0" />
                      <span className="text-[#B0B0B0] text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#FFD93D] flex-shrink-0" />
                      <span className="text-[#B0B0B0] text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                      <span className="text-[#B0B0B0] text-sm">{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Department Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Department Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${dept.color}20` }}
                      >
                        <dept.icon className="w-6 h-6" style={{ color: dept.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{dept.name}</h4>
                        <p className="text-[#B0B0B0] text-sm mb-3">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="font-medium hover:underline"
                          style={{ color: dept.color }}
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
              <p className="text-[#B0B0B0] mb-6">
                For urgent technical issues or security concerns, contact our emergency support line
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF4C60]" />
                  <span className="text-white font-medium">Emergency: +1 (555) 911-HELP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#4ECDC4]" />
                  <span className="text-[#B0B0B0]">Available 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
