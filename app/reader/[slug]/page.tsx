import { allLibraryMagazines, libraryMagazines, batmanComics, donaldDuckComics, mickeyMouseComics } from "@/lib/library-content"
import { ReaderClient } from "@/components/reader/reader-client"

// Disable dynamic params - only serve pre-generated pages
export const dynamicParams = false

// Generate static params for ALL reader pages
export function generateStaticParams() {
  const slugs: { slug: string }[] = []
  const slugSet = new Set<string>()
  
  // Helper to add slug (avoid duplicates) - includes both raw and encoded versions
  const addSlug = (slug: string) => {
    if (!slug) return
    
    // Add raw slug
    if (!slugSet.has(slug)) {
      slugs.push({ slug })
      slugSet.add(slug)
    }
    
    // Add URL-encoded version (Next.js may receive encoded slugs in some cases)
    const encodedSlug = encodeURIComponent(slug)
    if (encodedSlug !== slug && !slugSet.has(encodedSlug)) {
      slugs.push({ slug: encodedSlug })
      slugSet.add(encodedSlug)
    }
    
    // Also add decoded version if it's different (for safety)
    try {
      const decodedSlug = decodeURIComponent(slug)
      if (decodedSlug !== slug && !slugSet.has(decodedSlug)) {
        slugs.push({ slug: decodedSlug })
        slugSet.add(decodedSlug)
      }
    } catch {
      // Ignore decode errors
    }
  }
  
  // Include ALL magazine slugs from allLibraryMagazines (this includes libraryMagazines, batmanComics, donaldDuckComics, mickeyMouseComics)
  allLibraryMagazines.forEach((mag) => {
    addSlug(mag.slug)
  })
  
  // Also explicitly include from each source to ensure nothing is missed (redundant but safe)
  libraryMagazines.forEach((mag) => {
    addSlug(mag.slug)
  })
  
  batmanComics.forEach((mag) => {
    addSlug(mag.slug)
  })
  
  donaldDuckComics.forEach((mag) => {
    addSlug(mag.slug)
  })
  
  mickeyMouseComics.forEach((mag) => {
    addSlug(mag.slug)
  })
  
  // Add common slugs used in trending/featured sections
  const commonSlugs = ['123', '456', '789', '321', '654', 'thunder-strike', 'iron-guardian', 'phoenix-flame', 'wind-walker']
  commonSlugs.forEach((slug) => {
    addSlug(slug)
  })
  
  return slugs
}

export default function ReaderPage() {
  return <ReaderClient />
}
