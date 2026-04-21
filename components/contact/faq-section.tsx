"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Search, HelpCircle, BookOpen, Users, CreditCard } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const faqCategories = [
  { id: "all", name: "All", icon: HelpCircle, color: "#FF4C60" },
  { id: "account", name: "Account", icon: Users, color: "#4ECDC4" },
  { id: "reading", name: "Reading", icon: BookOpen, color: "#FFD93D" },
  { id: "billing", name: "Billing", icon: CreditCard, color: "#4CAF50" },
]

const faqs = [
  {
    id: 1,
    category: "account",
    question: "How do I create a ComicVerse account?",
    answer:
      "Creating an account is simple! Click the 'Sign Up' button in the top right corner, enter your email and create a password. You can also sign up using your Google or Facebook account for faster registration.",
  },
  {
    id: 2,
    category: "account",
    question: "Can I change my username after creating an account?",
    answer:
      "Yes, you can change your username once every 30 days. Go to your Profile Settings, click on 'Edit Profile', and update your username. Keep in mind that your old username will become available for others to use.",
  },
  {
    id: 3,
    category: "reading",
    question: "How do I download comics for offline reading?",
    answer:
      "Premium subscribers can download up to 50 comics for offline reading. Simply open any comic, tap the download icon, and it will be saved to your device. Downloaded comics are available in the 'Downloads' section of your library.",
  },
  {
    id: 4,
    category: "reading",
    question: "What devices are supported for reading comics?",
    answer:
      "ComicVerse works on all modern devices including smartphones, tablets, laptops, and desktops. We have dedicated apps for iOS and Android, plus a responsive web version that works great on any browser.",
  },
  {
    id: 5,
    category: "billing",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and various local payment methods depending on your region. All payments are processed securely.",
  },
  {
    id: 6,
    category: "billing",
    question: "Can I cancel my subscription anytime?",
    answer:
      "You can cancel your subscription at any time from your Account Settings. Your subscription will remain active until the end of your current billing period, and you won't be charged again.",
  },
  {
    id: 7,
    category: "reading",
    question: "How do I report inappropriate content?",
    answer:
      "If you encounter content that violates our community guidelines, click the 'Report' button on the comic page or contact our support team. We review all reports within 24 hours and take appropriate action.",
  },
  {
    id: 8,
    category: "account",
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. The link expires after 24 hours for security.",
  },
]

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#FF4C60]">Questions</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Find quick answers to common questions about ComicVerse
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] w-5 h-5" />
          <Input
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#1E1E2F] border-[#FF4C60]/20 text-white placeholder-[#B0B0B0] focus:border-[#FF4C60]"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? "text-white comic-shadow"
                  : "bg-[#1E1E2F] text-[#B0B0B0] hover:bg-[#FF4C60]/20 hover:text-white border border-[#FF4C60]/20"
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? category.color : undefined,
              }}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow hover:border-[#FF4C60]/40 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#FF4C60]/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <motion.div animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-[#FF4C60] flex-shrink-0" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFAQ === faq.id ? "auto" : 0,
                      opacity: expandedFAQ === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-[#FF4C60]/10 pt-4">
                        <p className="text-[#B0B0B0] leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No FAQs Found</h3>
            <p className="text-[#B0B0B0]">Try adjusting your search or category filter</p>
          </motion.div>
        )}

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#FF4C60]/10 to-[#4ECDC4]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
              <p className="text-[#B0B0B0] mb-6">
                Can't find what you're looking for? Our support team is here to help you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-6 py-3 rounded-lg font-medium comic-shadow hover:animate-pulse-glow transition-all">
                  Contact Support
                </button>
                <button className="bg-[#1E1E2F] hover:bg-[#1E1E2F]/80 text-white px-6 py-3 rounded-lg font-medium border border-[#FF4C60]/20 hover:border-[#FF4C60]/40 transition-all">
                  Live Chat
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
