"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { HeroSection } from "@/components/home/hero-section"

// Lazy load heavy components for better performance
const TrendingComics = dynamic(() => import("@/components/home/trending-comics").then(mod => ({ default: mod.TrendingComics })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const FeaturedCharacters = dynamic(() => import("@/components/home/featured-characters").then(mod => ({ default: mod.FeaturedCharacters })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ComicCategories = dynamic(() => import("@/components/home/comic-categories").then(mod => ({ default: mod.ComicCategories })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const SpotlightComic = dynamic(() => import("@/components/home/spotlight-comic").then(mod => ({ default: mod.SpotlightComic })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const FanArtShowcase = dynamic(() => import("@/components/home/fan-art-showcase").then(mod => ({ default: mod.FanArtShowcase })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const InteractiveQuotes = dynamic(() => import("@/components/home/interactive-quotes").then(mod => ({ default: mod.InteractiveQuotes })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ComicTimeline = dynamic(() => import("@/components/home/comic-timeline").then(mod => ({ default: mod.ComicTimeline })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const CommunityPoll = dynamic(() => import("@/components/home/community-poll").then(mod => ({ default: mod.CommunityPoll })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const UpcomingCarousel = dynamic(() => import("@/components/home/upcoming-carousel").then(mod => ({ default: mod.UpcomingCarousel })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const SoundtrackPlayer = dynamic(() => import("@/components/home/soundtrack-player").then(mod => ({ default: mod.SoundtrackPlayer })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ComicFooter = dynamic(() => import("@/components/home/comic-footer").then(mod => ({ default: mod.ComicFooter })), {
  loading: () => <SectionLoader />,
  ssr: false
})

// Lightweight loading placeholder
function SectionLoader() {
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="w-8 h-8 border-2 border-[#FF4C60] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="bg-[#121212] pt-16 min-h-screen">
        <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <TrendingComics />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FeaturedCharacters />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComicCategories />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SpotlightComic />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FanArtShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <InteractiveQuotes />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComicTimeline />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CommunityPoll />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <UpcomingCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SoundtrackPlayer />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComicFooter />
      </Suspense>
    </div>
  )
}
