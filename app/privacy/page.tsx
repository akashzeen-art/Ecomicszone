"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Eye, Database, Zap } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      icon: Zap,
      content: "Welcome to ComicVerse! Your privacy is our top priority. This page explains how we collect, use, and protect your information while you enjoy the comic universe."
    },
    {
      title: "Information We Collect",
      icon: Database,
      content: "We may collect your name, email address, and usage data to provide a personalized comic experience. Don’t worry, we won’t sell your secrets to villains!"
    },
    {
      title: "How We Use Your Info",
      icon: Shield,
      content: "Your info helps us send you updates, improve our library, and create awesome features. All data is safely stored in our secure comic vault."
    },
    {
      title: "Cookies & Tracking",
      icon: Eye,
      content: "We use cookies to enhance your browsing, track preferences, and understand which comics you love most."
    },
    {
      title: "Third-Party Services",
      icon: Shield,
      content: "We may use trusted services to deliver emails or analytics, but rest assured, your data is never shared without permission."
    },
    {
      title: "Your Rights",
      icon: Zap,
      content: "You can request your data, unsubscribe from newsletters, or ask us to delete your info anytime. Heroes always have choices!"
    },
    {
      title: "Contact Us",
      icon: Zap,
      content: "Have questions? Reach out at hello@comicverse.com or +1 (555) 123-4567. We love hearing from our comic fans!"
    }
  ]

  return (
    <div className="bg-[#121212] min-h-screen pt-5 text-white font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1E1E2F] py-16 text-center relative overflow-hidden"
      >
        <Zap className="w-12 h-12 mx-auto text-[#FF4C60] mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-[#FFD93D] mb-2">Privacy Policy</h1>
        <p className="text-[#B0B0B0] max-w-2xl mx-auto">
          Your safety is our priority! Here’s how ComicVerse protects your data in our epic comic adventure.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-12">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1E1E2F] p-8 rounded-xl shadow-lg border border-[#FF4C60]/30 relative overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FF4C60] rounded-full flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#FFD93D]">{section.title}</h2>
              </div>
              <p className="text-[#B0B0B0] leading-relaxed">{section.content}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#FF4C60] text-[#121212] py-12 text-center relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-4">Join the ComicVerse Family</h2>
        <p className="mb-6">Subscribe for updates, new releases, and exclusive comic adventures!</p>
        <Link href="/subscribe" className="bg-[#FFD93D] text-[#121212] px-6 py-3 rounded-lg font-bold hover:bg-[#FFC700] transition-colors">
          Subscribe Now
        </Link>
      </motion.div>
    </div>
  )
}
