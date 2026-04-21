"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { SearchBar } from "@/components/library/search-bar"
import { PopularComicsGrid } from "@/components/library/popular-comics-grid"
import { PDFPrefetcher } from "@/components/library/pdf-prefetcher"
import { useLanguage } from "@/contexts/language-context"

// Lazy load heavy components
const RemoteSeriesGrid = dynamic(() => import("@/components/library/remote-series-grid").then(mod => ({ default: mod.RemoteSeriesGrid })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ComicBookShelf = dynamic(() => import("@/components/library/comic-book-shelf").then(mod => ({ default: mod.ComicBookShelf })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const TrendingNow = dynamic(() => import("@/components/library/trending-now").then(mod => ({ default: mod.TrendingNow })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ReaderReviews = dynamic(() => import("@/components/library/reader-reviews").then(mod => ({ default: mod.ReaderReviews })), {
  loading: () => <SectionLoader />,
  ssr: false
})
const BackToTop = dynamic(() => import("@/components/library/back-to-top").then(mod => ({ default: mod.BackToTop })), {
  ssr: false
})

function SectionLoader() {
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="w-8 h-8 border-2 border-[#FF4C60] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function LibraryPage() {
  const { translations } = useLanguage()
  
  return (
    <div className="bg-[#121212] pt-16 min-h-screen">
        {/* Global PDF Prefetcher - loads all PDFs in background for instant access */}
        <PDFPrefetcher />
        <SearchBar />
        <PopularComicsGrid />
      <Suspense fallback={<SectionLoader />}>
        <RemoteSeriesGrid
          series="batman"
          title={translations.library.series.batman.title}
          subtitle={translations.library.series.batman.subtitle}
          badgeLabel={translations.library.series.batman.badge}
          accentColor="#FFD93D"
        />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <RemoteSeriesGrid
          series="donald_duck"
          title={translations.library.series.donaldDuck.title}
          subtitle={translations.library.series.donaldDuck.subtitle}
          badgeLabel={translations.library.series.donaldDuck.badge}
          accentColor="#4ECDC4"
        />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <RemoteSeriesGrid
          series="mickey_mouse"
          title={translations.library.series.mickeyMouse.title}
          subtitle={translations.library.series.mickeyMouse.subtitle}
          badgeLabel={translations.library.series.mickeyMouse.badge}
          accentColor="#FF4C60"
        />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComicBookShelf />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TrendingNow />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ReaderReviews />
      </Suspense>
        <BackToTop />
    </div>
  )
}
