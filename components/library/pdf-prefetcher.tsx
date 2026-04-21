"use client"

import { useEffect } from "react"
import { batmanComics, donaldDuckComics, mickeyMouseComics, libraryMagazines } from "@/lib/library-content"
import { prefetchComicsPDFs } from "@/lib/pdf-cache"

/**
 * Global PDF Prefetcher Component
 * Prefetches ALL PDFs in the background when the library page loads
 * This ensures instant loading when users click on any magazine
 */
export function PDFPrefetcher() {
  useEffect(() => {
    // Prefetch limited PDFs in the background to prevent memory exhaustion
    // Only prefetch the most popular/first few PDFs from each series
    const prefetchAllPDFs = async () => {
      try {
        console.log('🚀 Starting limited PDF prefetching (memory-optimized)...')
        
        // Prefetch only first 10 Batman comics (instead of all 50)
        await prefetchComicsPDFs(batmanComics.slice(0, 10), 10)
        console.log('✅ Batman PDFs prefetched (limited)')
        
        // Small delay between series
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Prefetch only first 5 Donald Duck comics (instead of all 10)
        await prefetchComicsPDFs(donaldDuckComics.slice(0, 5), 5)
        console.log('✅ Donald Duck PDFs prefetched (limited)')
        
        // Small delay between series
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Prefetch only first 5 Mickey Mouse comics (instead of all 18)
        await prefetchComicsPDFs(mickeyMouseComics.slice(0, 5), 5)
        console.log('✅ Mickey Mouse PDFs prefetched (limited)')
        
        // Small delay between series
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Prefetch only first 5 library magazines
        await prefetchComicsPDFs(libraryMagazines.slice(0, 5), 5)
        console.log('✅ Library magazines PDFs prefetched (limited)')
        
        console.log('🎉 Limited PDF prefetching complete! (Memory optimized)')
      } catch (error: any) {
        // Handle memory errors gracefully
        if (error?.message?.includes('Array buffer') || error?.message?.includes('allocation')) {
          console.warn('Memory limit reached during prefetching. Continuing with cached PDFs only.')
        } else {
          console.warn('PDF prefetching had some errors:', error)
        }
        // Continue anyway - prefetching is optional
      }
    }

    // Start prefetching after a longer delay to not block initial render
    const timeoutId = setTimeout(() => {
      prefetchAllPDFs().catch((error) => {
        console.warn('PDF prefetching failed:', error)
      })
    }, 2000) // Increased delay to 2 seconds

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // This component doesn't render anything
  return null
}

