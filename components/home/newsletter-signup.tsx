"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function NewsletterSignup() {
  const { translations } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-[#FFD93D] rounded-full animate-float" />
                  <div
                    className="absolute top-12 right-8 w-6 h-6 bg-[#FF4C60] rounded-lg animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-8 left-12 w-10 h-10 bg-[#4ECDC4] rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <div className="relative p-12 text-center">
                  {!isSubscribed ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="mb-6"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4C60] rounded-full comic-shadow animate-pulse-glow">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>

                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {translations.home.newsletter.title} <span className="text-[#FFD93D]">{translations.home.newsletter.titleHighlight}</span>
                      </h2>
                      <p className="text-[#B0B0B0] text-lg mb-8 max-w-2xl mx-auto">
                        {translations.home.newsletter.subtitle}
                      </p>

                      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex gap-3">
                          <Input
                            type="email"
                            placeholder={translations.home.newsletter.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-[#121212] border-[#FF4C60]/20 text-white placeholder:text-[#B0B0B0] focus:border-[#FF4C60]"
                            required
                          />
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white px-6 comic-shadow"
                          >
                            {isLoading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                            ) : (
                              <Send className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </form>

                      <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#FF4C60]/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#FF4C60]">50K+</div>
                          <div className="text-sm text-[#B0B0B0]">{translations.home.newsletter.subscribers}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#FFD93D]">{translations.home.newsletter.weekly}</div>
                          <div className="text-sm text-[#B0B0B0]">{translations.home.newsletter.updates}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#FF4C60]">{translations.home.newsletter.exclusive}</div>
                          <div className="text-sm text-[#B0B0B0]">{translations.home.newsletter.content}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="mb-6"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4CAF50] rounded-full comic-shadow">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {translations.home.newsletter.welcome} <span className="text-[#FFD93D]">{translations.home.newsletter.welcomeHighlight}</span>
                      </h2>
                      <p className="text-[#B0B0B0] text-lg">
                        {translations.home.newsletter.thankYou}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
