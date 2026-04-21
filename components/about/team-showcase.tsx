"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    image: "/asian-ceo-casual.png",
    bio: "Comic enthusiast since childhood, Alex brings 10+ years of tech leadership experience. Previously led product teams at major tech companies.",
    expertise: ["Product Strategy", "Team Leadership", "Comic Curation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@comicverse.com",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    image: "/professional-female-cto.png",
    bio: "Full-stack developer and comic artist. Sarah combines technical expertise with creative vision to build innovative reading experiences.",
    expertise: ["Full-Stack Development", "UI/UX Design", "Digital Art"],
    social: {
      github: "#",
      linkedin: "#",
      email: "sarah@comicverse.com",
    },
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Head of Content",
    image: "/hispanic-content-director.png",
    bio: "Former comic book editor with 15 years in the industry. Marcus has worked with Marvel, DC, and numerous indie publishers.",
    expertise: ["Content Curation", "Publisher Relations", "Editorial"],
    social: {
      twitter: "#",
      linkedin: "#",
      email: "marcus@comicverse.com",
    },
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Head of Design",
    image: "/professional-asian-female-designer.png",
    bio: "Award-winning designer specializing in digital experiences. Emily ensures every pixel serves the story and enhances user engagement.",
    expertise: ["UI/UX Design", "Brand Design", "User Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@comicverse.com",
    },
  },
  {
    id: 5,
    name: "David Kim",
    role: "Community Manager",
    image: "/korean-male-community-manager.png",
    bio: "Passionate about building communities around shared interests. David manages our global community of 1M+ comic fans.",
    expertise: ["Community Building", "Social Media", "Event Planning"],
    social: {
      twitter: "#",
      linkedin: "#",
      email: "david@comicverse.com",
    },
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Head of Partnerships",
    image: "/professional-female-business-executive.png",
    bio: "Business development expert with deep connections in the comic industry. Lisa forges partnerships that benefit creators and readers alike.",
    expertise: ["Business Development", "Partnership Strategy", "Negotiations"],
    social: {
      linkedin: "#",
      email: "lisa@comicverse.com",
    },
  },
]

export function TeamShowcase() {
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
            Meet Our <span className="text-[#FF4C60]">Team</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            The passionate individuals behind ComicVerse, each bringing unique expertise and shared love for comics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <Badge className="bg-[#FF4C60] text-white">{member.role}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-[#B0B0B0] text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="bg-[#121212] text-[#4ECDC4] border-[#4ECDC4]/20 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-[#FF4C60] hover:bg-[#FF4C60]/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-[#4ECDC4] hover:bg-[#4ECDC4]/10 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD93D] hover:bg-[#FFD93D]/10 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-[#FF4C60] hover:bg-[#FF4C60]/10 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Our Team by the Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF4C60] mb-2">25+</div>
                  <div className="text-[#B0B0B0]">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4ECDC4] mb-2">8</div>
                  <div className="text-[#B0B0B0]">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD93D] mb-2">50+</div>
                  <div className="text-[#B0B0B0]">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4CAF50] mb-2">100%</div>
                  <div className="text-[#B0B0B0]">Comic Enthusiasts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
