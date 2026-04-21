"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/about/hero-section"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamShowcase } from "@/components/about/team-showcase"
import { CompanyTimeline } from "@/components/about/company-timeline"
import { AwardsRecognition } from "@/components/about/awards-recognition"
import { OurValues } from "@/components/about/our-values"
import { BehindTheScenes } from "@/components/about/behind-the-scenes"
import { CommunityImpact } from "@/components/about/community-impact"
import { FutureRoadmap } from "@/components/about/future-roadmap"
import { ContactCTA } from "@/components/about/contact-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <MissionVision />
        <TeamShowcase />
        <CompanyTimeline />
        <AwardsRecognition />
        <OurValues />
        <BehindTheScenes />
        <CommunityImpact />
        <FutureRoadmap />
        <ContactCTA />
      </motion.div>
    </div>
  )
}
