"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Book, Zap, Scroll } from "lucide-react"
import Link from "next/link"

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: Zap,
      content:
        "By using ComicVerse, you agree to comply with and be bound by these Terms and Conditions. If you don’t agree, please exit the comic universe immediately!"
    },
    {
      title: "Use of Our Platform",
      icon: Book,
      content:
        "ComicVerse is for personal, non-commercial use. Don’t try to hack the system, steal comics, or create chaos in our universe. Heroes play fair!"
    },
    {
      title: "User Accounts",
      icon: Shield,
      content:
        "You are responsible for maintaining the confidentiality of your account and password. Protect your hero identity at all costs!"
    },
    {
      title: "Content Ownership",
      icon: Scroll,
      content:
        "All comics, artwork, and content on ComicVerse belong to their respective creators. Respect copyrights—no unauthorized copying or redistribution."
    },
    {
      title: "Prohibited Conduct",
      icon: Zap,
      content:
        "No spamming, harassment, or illegal activities. ComicVerse reserves the right to suspend or terminate accounts that act like villains."
    },
    {
      title: "Limitation of Liability",
      icon: Shield,
      content:
        "ComicVerse provides content 'as is'. We are not liable for any damages or losses resulting from your adventures in our comic universe."
    },
    {
      title: "Changes to Terms",
      icon: Book,
      content:
        "We may update these Terms occasionally. Continued use of ComicVerse after updates means you accept the new rules."
    },
    {
      title: "Contact Information",
      icon: Zap,
      content:
        "Questions or concerns? Email us at hello@comicverse.com or call +1 (555) 123-4567. Our support heroes are here to help!"
    }
  ]

  return (
    <div className="bg-[#121212] min-h-screen p-5 text-white font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1E1E2F] py-16 text-center relative overflow-hidden"
      >
        <Zap className="w-12 h-12 mx-auto text-[#FF4C60] mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-[#FFD93D] mb-2">Terms & Conditions</h1>
        <p className="text-[#B0B0B0] max-w-2xl mx-auto">
          Understand the rules of our comic universe. Play fair, respect creators, and enjoy your adventure!
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
        <h2 className="text-3xl font-bold mb-4">Ready for Adventure?</h2>
        <p className="mb-6">Subscribe to ComicVerse for epic updates, new comics, and exclusive adventures!</p>
        <Link href="/subscribe" className="bg-[#FFD93D] text-[#121212] px-6 py-3 rounded-lg font-bold hover:bg-[#FFC700] transition-colors">
          Subscribe Now
        </Link>
      </motion.div>
    </div>
  )
}
