"use client"

import { motion } from "framer-motion"
import { HeroContactSection } from "@/components/contact/hero-contact-section"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInformation } from "@/components/contact/contact-information"
import { FAQSection } from "@/components/contact/faq-section"
import { SupportTicketSystem } from "@/components/contact/support-ticket-system"
import { LiveChatIntegration } from "@/components/contact/live-chat-integration"
import { SocialMediaLinks } from "@/components/contact/social-media-links"
import { BusinessHours } from "@/components/contact/business-hours"
import { PartnershipInquiry } from "@/components/contact/partnership-inquiry"
import { MapIntegration } from "@/components/contact/map-integration"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroContactSection />
        <ContactForm />
        <ContactInformation />
        <FAQSection />
        <SupportTicketSystem />
        <LiveChatIntegration />
        <SocialMediaLinks />
        <BusinessHours />
        <PartnershipInquiry />
        <MapIntegration />
      </motion.div>
    </div>
  )
}
