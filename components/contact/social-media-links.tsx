"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, MessageSquare, Heart, Share2 } from "lucide-react"

const socialPlatforms = [
  {
    name: "Twitter",
    handle: "@ComicVerse",
    followers: "125K",
    description: "Latest updates, comic news, and community highlights",
    color: "#1DA1F2",
    icon: "🐦",
    url: "https://twitter.com/comicverse",
    posts: "Daily updates and comic discussions",
  },
  {
    name: "Instagram",
    handle: "@ComicVerse_Official",
    followers: "89K",
    description: "Behind-the-scenes content and visual comic highlights",
    color: "#E4405F",
    icon: "📸",
    url: "https://instagram.com/comicverse_official",
    posts: "Visual content and artist spotlights",
  },
  {
    name: "Discord",
    handle: "ComicVerse Community",
    followers: "45K",
    description: "Join our active community for real-time discussions",
    color: "#5865F2",
    icon: "💬",
    url: "https://discord.gg/comicverse",
    posts: "Live chat and community events",
  },
  {
    name: "YouTube",
    handle: "ComicVerse Channel",
    followers: "67K",
    description: "Comic reviews, creator interviews, and tutorials",
    color: "#FF0000",
    icon: "🎥",
    url: "https://youtube.com/comicverse",
    posts: "Weekly videos and live streams",
  },
  {
    name: "Reddit",
    handle: "r/ComicVerse",
    followers: "32K",
    description: "Community discussions and user-generated content",
    color: "#FF4500",
    icon: "🤖",
    url: "https://reddit.com/r/comicverse",
    posts: "Community discussions and AMAs",
  },
  {
    name: "TikTok",
    handle: "@ComicVerse",
    followers: "156K",
    description: "Quick comic reviews and trending content",
    color: "#000000",
    icon: "🎵",
    url: "https://tiktok.com/@comicverse",
    posts: "Short-form comic content",
  },
]

const communityStats = [
  { label: "Total Followers", value: "514K+", icon: Users, color: "#FF4C60" },
  { label: "Monthly Engagement", value: "2.3M", icon: Heart, color: "#4ECDC4" },
  { label: "Community Posts", value: "15K+", icon: MessageSquare, color: "#FFD93D" },
  { label: "Shares & Reposts", value: "89K", icon: Share2, color: "#4CAF50" },
]

export function SocialMediaLinks() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow Us on <span className="text-[#FF4C60]">Social Media</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Stay connected with the ComicVerse community across all platforms. Get updates, join discussions, and be
            part of our growing community.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[#B0B0B0] text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      {platform.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{platform.name}</h3>
                      <p className="text-[#B0B0B0] text-sm">{platform.handle}</p>
                    </div>
                    <Badge className="text-white border-0" style={{ backgroundColor: platform.color }}>
                      {platform.followers}
                    </Badge>
                  </div>

                  <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed">{platform.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-[#4ECDC4]" />
                      <span className="text-[#4ECDC4] text-sm font-medium">Content Type:</span>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">{platform.posts}</p>
                  </div>

                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-medium transition-all text-white hover:opacity-90"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span>Follow on {platform.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Community Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Be Respectful</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Treat all community members with kindness and respect, regardless of their comic preferences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Share Quality Content</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Post relevant, high-quality content that adds value to our comic-loving community.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-[#FFD93D]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Support Creators</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Celebrate and support comic creators by sharing their work and giving constructive feedback.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
