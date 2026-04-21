/**
 * Global PDF Cache System for Instant Loading
 * 
 * This system prefetches ALL PDFs in the background when the library page loads,
 * storing them in memory for instant access when users click on any magazine.
 * 
 * Features:
 * - Prefetches all Batman, Donald Duck, and Mickey Mouse PDFs
 * - Stores PDFs in global window cache for persistence
 * - Prevents duplicate fetches with promise caching
 * - Batch prefetching with concurrency control
 * - Instant loading from cache (no network delay)
 * 
 * Usage:
 * - PDFPrefetcher component automatically prefetches all PDFs on library page load
 * - PdfViewer checks cache first for instant loading
 * - Components can manually prefetch PDFs using prefetchPDF() or prefetchComicsPDFs()
 */

// Global cache stored on window object for persistence across components
declare global {
  interface Window {
    __pdfCache?: Map<string, ArrayBuffer>
    __pdfCachePromises?: Map<string, Promise<ArrayBuffer | null>>
    __pdfRenderedCache?: Map<string, any> // Store rendered PDF documents
  }
}

// Initialize global cache if it doesn't exist
function getGlobalCache(): Map<string, ArrayBuffer> {
  if (!window.__pdfCache) {
    window.__pdfCache = new Map()
  }
  return window.__pdfCache
}

// Initialize promise cache to prevent duplicate fetches
function getPromiseCache(): Map<string, Promise<ArrayBuffer | null>> {
  if (!window.__pdfCachePromises) {
    window.__pdfCachePromises = new Map()
  }
  return window.__pdfCachePromises
}

// Initialize rendered PDF cache
function getRenderedCache(): Map<string, any> {
  if (!window.__pdfRenderedCache) {
    window.__pdfRenderedCache = new Map()
  }
  return window.__pdfRenderedCache
}

/**
 * Prefetch a PDF and store it in the global cache
 * Returns the cached ArrayBuffer if already cached, or fetches and caches it
 */
export async function prefetchPDF(pdfUrl: string): Promise<ArrayBuffer | null> {
  const cache = getGlobalCache()
  const promiseCache = getPromiseCache()

  // Return immediately if already cached
  if (cache.has(pdfUrl)) {
    return cache.get(pdfUrl)!
  }

  // Return existing promise if already fetching
  if (promiseCache.has(pdfUrl)) {
    return promiseCache.get(pdfUrl)!
  }

  // Create new fetch promise
  const fetchPromise = (async () => {
    try {
      // Strategy 1: Direct fetch with CORS
      let response = await fetch(pdfUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        cache: 'force-cache',
        headers: {
          'Accept': 'application/pdf',
        },
      })

      if (!response.ok) {
        // Strategy 2: Try CORS proxy
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(pdfUrl)}`
        try {
          response = await fetch(proxyUrl, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit',
            cache: 'force-cache',
          })
        } catch (proxyError) {
          // Proxy failed, return null - PDF will load via embed fallback
          console.warn(`PDF prefetch failed for ${pdfUrl}:`, proxyError)
          return null
        }
      }

      if (response.ok) {
        // Check cache size before adding new PDF
        enforceCacheLimit()
        
        try {
          const arrayBuffer = await response.arrayBuffer()
          
          // Check if adding this PDF would exceed memory limits
          const currentSizeMB = estimateCacheSizeMB()
          const newPdfSizeMB = arrayBuffer.byteLength / (1024 * 1024)
          
          if (currentSizeMB + newPdfSizeMB > MAX_CACHE_SIZE_MB || cache.size >= MAX_CACHE_ENTRIES) {
            enforceCacheLimit()
            // If still too large, don't cache this PDF
            if (estimateCacheSizeMB() + newPdfSizeMB > MAX_CACHE_SIZE_MB) {
              console.warn(`Skipping cache for ${pdfUrl} - would exceed memory limit`)
              return arrayBuffer // Return but don't cache
            }
          }
          
          cache.set(pdfUrl, arrayBuffer)
          return arrayBuffer
        } catch (error: any) {
          // Handle memory allocation errors
          if (error?.message?.includes('Array buffer') || error?.message?.includes('allocation')) {
            console.warn(`Memory allocation failed for ${pdfUrl}, clearing cache...`)
            enforceCacheLimit()
            return null
          }
          throw error
        }
      }
    } catch (error: any) {
      // Silently fail - prefetching is optional, PDF will load via embed
      console.warn(`PDF prefetch failed for ${pdfUrl}:`, error?.message || error)
    }
    return null
  })()

  // Store promise to prevent duplicate fetches
  promiseCache.set(pdfUrl, fetchPromise)

  // Clean up promise after completion
  fetchPromise.finally(() => {
    promiseCache.delete(pdfUrl)
  })

  return fetchPromise
}

/**
 * Get cached PDF if available
 */
export function getCachedPDF(pdfUrl: string): ArrayBuffer | null {
  const cache = getGlobalCache()
  return cache.get(pdfUrl) || null
}

// Maximum cache size to prevent memory exhaustion (in MB)
const MAX_CACHE_SIZE_MB = 200 // Limit to 200MB
const MAX_CACHE_ENTRIES = 20 // Limit to 20 PDFs max

/**
 * Estimate cache size in MB
 */
function estimateCacheSizeMB(): number {
  const cache = getGlobalCache()
  let totalSize = 0
  cache.forEach((buffer) => {
    totalSize += buffer.byteLength
  })
  return totalSize / (1024 * 1024) // Convert to MB
}

/**
 * Clear oldest entries if cache is too large
 */
function enforceCacheLimit(): void {
  const cache = getGlobalCache()
  const sizeMB = estimateCacheSizeMB()
  
  // If cache exceeds size or entry limit, clear oldest entries
  if (sizeMB > MAX_CACHE_SIZE_MB || cache.size > MAX_CACHE_ENTRIES) {
    // Clear half of the cache (oldest entries)
    const entriesToKeep = Math.floor(cache.size / 2)
    const entries = Array.from(cache.entries())
    const toKeep = entries.slice(-entriesToKeep)
    cache.clear()
    toKeep.forEach(([key, value]) => {
      cache.set(key, value)
    })
    console.warn(`Cache limit reached. Cleared old entries. Current size: ${estimateCacheSizeMB().toFixed(2)}MB`)
  }
}

/**
 * Prefetch multiple PDFs in parallel with concurrency control
 */
export async function prefetchPDFsBatch(
  pdfUrls: string[],
  concurrency: number = 2, // Reduced from 5 to 2 to prevent memory issues
  maxPrefetch: number = 20 // Limit total prefetch count
): Promise<void> {
  const cache = getGlobalCache()
  const validUrls = pdfUrls
    .filter(url => url && !cache.has(url))
    .slice(0, maxPrefetch) // Limit total number of PDFs to prefetch
  
  if (validUrls.length === 0) {
    return
  }

  // Process in batches to avoid overwhelming the browser
  for (let i = 0; i < validUrls.length; i += concurrency) {
    // Check cache size before each batch
    enforceCacheLimit()
    
    const batch = validUrls.slice(i, i + concurrency)
    await Promise.allSettled(
      batch.map(url => {
        return prefetchPDF(url).catch((error) => {
          // Handle memory errors gracefully
          if (error?.message?.includes('Array buffer') || error?.message?.includes('allocation')) {
            console.warn(`Memory error prefetching ${url}, skipping...`)
            enforceCacheLimit() // Clear cache on memory error
            return null
          }
          throw error
        })
      })
    )
    
    // Longer delay between batches to prevent memory buildup
    if (i + concurrency < validUrls.length) {
      await new Promise(resolve => setTimeout(resolve, 500)) // Increased from 100ms to 500ms
    }
  }
}

/**
 * Prefetch all PDFs from a list of comics
 * Limited to prevent memory exhaustion
 */
export async function prefetchComicsPDFs(
  comics: Array<{ pdfFile?: string }>,
  maxCount: number = 20 // Limit to first 20 PDFs
): Promise<void> {
  const pdfUrls = comics
    .slice(0, maxCount) // Limit total comics processed
    .map(comic => comic.pdfFile)
    .filter((url): url is string => Boolean(url))
  
  if (pdfUrls.length > 0) {
    await prefetchPDFsBatch(pdfUrls, 2, maxCount) // Reduced concurrency to 2
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
  const cache = getGlobalCache()
  return {
    size: cache.size,
    urls: Array.from(cache.keys()),
  }
}

/**
 * Clear the cache (useful for memory management)
 */
export function clearCache(): void {
  if (window.__pdfCache) {
    window.__pdfCache.clear()
  }
  if (window.__pdfCachePromises) {
    window.__pdfCachePromises.clear()
  }
  if (window.__pdfRenderedCache) {
    window.__pdfRenderedCache.clear()
  }
}

