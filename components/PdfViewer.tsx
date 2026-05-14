"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronUp, ChevronDown } from "lucide-react"

// Loading placeholder with better UI
function PDFLoader() {
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
			<div className="relative">
				{/* Outer spinning ring */}
				<div className="w-20 h-20 border-4 border-[#FF4C60]/20 rounded-full" />
				{/* Inner spinning ring */}
				<div className="absolute top-0 left-0 w-20 h-20 border-4 border-[#FF4C60] border-t-transparent rounded-full animate-spin" />
				{/* Center icon */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
					<div className="w-8 h-8 bg-[#FF4C60] rounded-lg flex items-center justify-center">
						<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
				</div>
			</div>
			<p className="mt-8 text-white text-xl font-semibold">Loading magazine...</p>
			<p className="mt-2 text-[#B0B0B0] text-sm">Please wait</p>
			{/* Progress dots */}
			<div className="flex gap-2 mt-6">
				<div className="w-2 h-2 bg-[#FF4C60] rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
				<div className="w-2 h-2 bg-[#FF4C60] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
				<div className="w-2 h-2 bg-[#FF4C60] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
			</div>
		</div>
	)
}

export default function PDFViewer({ file }: { file: string }) {
	const [isClient, setIsClient] = useState(false)
	const [pages, setPages] = useState<string[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const decodedFile = decodeURIComponent(file)

	useEffect(() => {
		setIsClient(true)
		
		// Disable print shortcuts (Ctrl+P, Cmd+P)
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
				e.preventDefault()
				return false
			}
		}
		
		window.addEventListener('keydown', handleKeyDown)
		
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	useEffect(() => {
		if (!isClient || !decodedFile) return

		const loadPDF = async () => {
			try {
				setLoading(true) // Ensure loading is true
				setError(null)
				setPages([]) // Clear any previous pages

				// ⚡ INSTANT LOADING: Check centralized cache first
				// All PDFs are prefetched in the background when library page loads
				const { getCachedPDF } = await import('@/lib/pdf-cache')
				const cachedPDF = getCachedPDF(decodedFile)
				
				if (cachedPDF) {
					console.log('⚡ Loading PDF from cache - INSTANT!')
					// Use cached PDF directly - no network request needed!
					const pdfjsLib = await import('pdfjs-dist')
					pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`
					const loadingTask = pdfjsLib.getDocument({ data: cachedPDF })
					const pdf = await loadingTask.promise
					// Keep loading true until pages are rendered
					await renderPDFPages(pdf, pdfjsLib)
					return
				}

				// Check if PDF is from external domain - if so, skip fetch and use embed directly
				// This prevents CORS errors from appearing in console
				try {
					const pdfUrl = new URL(decodedFile)
					const currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
					const isExternalDomain = pdfUrl.origin !== currentOrigin && pdfUrl.origin !== ''
					
					// For external domains, skip fetch attempts and go straight to embed
					// This prevents CORS console errors
					if (isExternalDomain) {
						// Check if it's a known CORS-restricted domain
						const corsRestrictedDomains = ['api.ameora.fun', 'ameora.fun']
						const isCorsRestricted = corsRestrictedDomains.some(domain => 
							pdfUrl.hostname.includes(domain)
						)
						
						if (isCorsRestricted) {
							// Skip all fetch attempts for known CORS-restricted domains
							// Go straight to embed to avoid CORS console errors
							throw new Error('External CORS-restricted domain - using embed fallback')
						}
					}
				} catch (urlParseError: any) {
					// If URL parsing fails or it's a CORS-restricted domain, use embed
					if (urlParseError?.message?.includes('CORS-restricted')) {
						throw urlParseError
					}
					// If URL parsing fails, assume it's external and use embed
					throw new Error('Invalid or external URL - using embed fallback')
				}

				// Dynamically import pdfjs-dist with error handling
				let pdfjsLib
				try {
					pdfjsLib = await import('pdfjs-dist')
				} catch (importError) {
					console.error('Failed to import pdfjs-dist:', importError)
					// If import fails, use fallback immediately
					throw new Error('PDF library import failed')
				}
				
				// Set worker
				pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`

				// Try to fetch PDF as blob first - use multiple strategies
				let pdfData: ArrayBuffer | null = null
				let loadingTask

				// Strategy 1: Try direct fetch with cache (works if CORS allows)
				const controller = new AbortController()
				const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
				
				try {
					const response = await fetch(decodedFile, {
						method: 'GET',
						mode: 'cors',
						credentials: 'omit',
						cache: 'force-cache',
						signal: controller.signal,
						headers: {
							'Accept': 'application/pdf',
						},
					})
					
					clearTimeout(timeoutId)
					
					if (response.ok) {
						pdfData = await response.arrayBuffer()
						// Cache the PDF for future instant loading
						const cache = (window as any).__pdfCache
						if (!cache) {
							(window as any).__pdfCache = new Map()
						}
						(window as any).__pdfCache.set(decodedFile, pdfData)
						loadingTask = pdfjsLib.getDocument({ 
							data: pdfData,
							disableAutoFetch: false,
							disableStream: false, // Enable streaming for faster initial load
						})
					} else {
						throw new Error(`HTTP ${response.status}`)
					}
				} catch (fetchError: any) {
					clearTimeout(timeoutId)
					// Check if it's a CORS error - if so, skip to embed immediately
					const isCorsError = fetchError?.message?.includes('CORS') || 
									   fetchError?.message?.includes('Failed to fetch') ||
									   fetchError?.message?.includes('ERR_FAILED') ||
									   fetchError?.message?.includes('network') ||
									   fetchError?.name === 'TypeError' ||
									   fetchError?.code === 'ERR_FAILED'
					
					if (isCorsError) {
						// CORS error detected - skip pdfjs attempts and go straight to embed
						throw new Error('CORS restricted - using embed fallback')
					}
					
					// Strategy 2: Try URL directly with pdfjs (may work if server allows)
					try {
						loadingTask = pdfjsLib.getDocument({ 
							url: decodedFile,
							httpHeaders: {
								'Accept': 'application/pdf',
							},
							withCredentials: false,
							stopAtErrors: false, // Continue even with errors
							disableAutoFetch: false,
							disableStream: false, // Enable streaming
						})
					} catch (urlError) {
						// All methods failed - use embed fallback (works for CORS-restricted PDFs)
						throw new Error('All PDF loading methods failed - using embed fallback')
					}
				}

				// Render PDF pages - loading will be hidden inside renderPDFPages when first page is ready
				const pdf = await loadingTask.promise
				// Keep loading true - it will be set to false in renderPDFPages when first page is ready
				await renderPDFPages(pdf, pdfjsLib)
			} catch (err: any) {
				// Silently fallback to embed - this is expected for CORS-restricted PDFs
				// Don't log CORS errors as they're expected for external PDFs
				const isCorsError = err?.message?.includes('CORS') || 
								   err?.message?.includes('Failed to fetch') ||
								   err?.message?.includes('ERR_FAILED') ||
								   err?.name === 'TypeError'
				
				if (!isCorsError) {
					console.warn('PDF conversion failed, using embed fallback:', err?.message || err)
				}
				// Immediately fallback to embed display (no error shown to user)
				setError('fallback')
				setLoading(false)
			}
		}

		// Helper function to render PDF pages with progressive loading
		const renderPDFPages = async (pdf: any, pdfjsLib: any) => {
			const numPages = pdf.numPages
			const maxPages = Math.min(numPages, 50)
			const pageImages: string[] = new Array(maxPages).fill('') // Pre-allocate array
			
			// Render first page and wait until it's fully ready before hiding loading
			const renderFirstPage = async () => {
				try {
					const page = await pdf.getPage(1)
					const viewport = page.getViewport({ scale: 1.5 }) // Reduced scale for faster initial load

					const canvas = document.createElement('canvas')
					const context = canvas.getContext('2d')
					if (!context) {
						setLoading(false) // Hide loading even if context fails
						return
					}

					canvas.height = viewport.height
					canvas.width = viewport.width

					await page.render({
						canvasContext: context,
						viewport: viewport,
					}).promise

					const imageDataUrl = canvas.toDataURL('image/jpeg', 0.85) // JPEG is faster than PNG
					pageImages[0] = imageDataUrl
					setPages([...pageImages]) // Show first page
					
					// Wait for image to actually load and be visible in DOM before hiding loading screen
					await new Promise<void>((resolve) => {
						const img = new Image()
						img.onload = () => {
							// Wait for React to render the image in DOM
							setTimeout(() => {
								// Check if the page is actually rendered and visible in the DOM
								let attempts = 0
								const maxAttempts = 20 // Maximum 2 seconds of checking
								const checkDOM = () => {
									attempts++
									// Look for the rendered image in the DOM
									const pageElement = document.querySelector('img[alt*="صفحة 1"]') || 
									                    document.querySelector('img[src*="data:image/jpeg"]') ||
									                    document.querySelector('img[src*="data:image/png"]')
									
									if (pageElement) {
										const imgElement = pageElement as HTMLImageElement
										// Image is in DOM, verify it's loaded and visible
										if (imgElement.complete || imgElement.naturalWidth > 0) {
											const rect = imgElement.getBoundingClientRect()
											if (rect.width > 0 && rect.height > 0) {
												// Image is visible, wait a bit more for smooth transition
												setTimeout(() => {
													setLoading(false)
													resolve()
												}, 600) // Increased delay to ensure PDF is fully ready and visible
												return
											}
										}
									}
									
									// If not found yet and haven't exceeded max attempts, retry
									if (attempts < maxAttempts) {
										setTimeout(checkDOM, 100)
									} else {
										// Max attempts reached, hide loading anyway
										setTimeout(() => {
											setLoading(false)
											resolve()
										}, 500)
									}
								}
								checkDOM()
							}, 300) // Initial delay for React to render
						}
						img.onerror = () => {
							// Even if image fails, wait a bit before hiding loading
							setTimeout(() => {
								setLoading(false)
								resolve()
							}, 1000)
						}
						img.src = imageDataUrl
					})
				} catch (error) {
					console.warn('Error rendering first page:', error)
					setLoading(false) // Hide loading on error
				}
			}
			
			// Render first page and wait for it to be ready
			await renderFirstPage()
			
			// Render remaining pages progressively in background
			const renderRemainingPages = async () => {
				// Use requestIdleCallback for non-blocking rendering
				const renderPage = async (pageNum: number) => {
					if (pageNum > maxPages) return
					
					try {
						const page = await pdf.getPage(pageNum)
						const viewport = page.getViewport({ scale: 1.5 }) // Reduced scale
						
						const canvas = document.createElement('canvas')
						const context = canvas.getContext('2d')
						if (!context) {
							renderPage(pageNum + 1)
							return
						}
						
						canvas.height = viewport.height
						canvas.width = viewport.width
						
						await page.render({
							canvasContext: context,
							viewport: viewport,
						}).promise
						
						const imageDataUrl = canvas.toDataURL('image/jpeg', 0.85)
						pageImages[pageNum - 1] = imageDataUrl
						setPages([...pageImages]) // Update with new page
						
						// Render next page after a small delay to prevent blocking
						setTimeout(() => renderPage(pageNum + 1), 50)
				} catch (pageError) {
					console.warn(`Error rendering page ${pageNum}:`, pageError)
						renderPage(pageNum + 1) // Continue with next page
				}
			}

				// Start rendering from page 2
				if (maxPages > 1) {
					renderPage(2)
				}
			}
			
			// Start rendering remaining pages after first page is shown
			setTimeout(renderRemainingPages, 100)
		}

		loadPDF()
	}, [isClient, decodedFile])

	const scrollToTop = () => {
		containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const scrollToBottom = () => {
		containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
	}

	if (!isClient) {
		return <PDFLoader />
	}

	// Show loading screen until PDF is fully ready and first page is visible
	if (loading || (pages.length === 0 && !error)) {
		return <PDFLoader />
	}
	
	// Additional check: If pages array exists but first page is empty, still show loading
	if (pages.length > 0 && !pages[0]) {
		return <PDFLoader />
	}

	// Fallback to embed/object if PDF loading fails - styled as webpage
	if (error === 'fallback') {
		// Detect Android/mobile - embed doesn't work on Android (triggers download)
		const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)
		const isMobile = typeof navigator !== 'undefined' && /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent)
		const googleDocsUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(decodedFile)}`

		return (
			<div className="flex flex-col h-screen bg-gray-900">
				{/* Header with action buttons */}
				<div className="flex justify-between items-center p-4 bg-[#1E1E2F] border-b border-white/10 z-10 sticky top-0">
					<h2 className="font-bold text-white text-lg">View Magazine</h2>
					<div className="flex gap-2">
						<Button
							onClick={() => window.open(decodedFile, '_blank')}
							variant="outline"
							size="sm"
							className="border-white/20 text-white hover:bg-white/10"
						>
							<ExternalLink className="mr-2 w-4 h-4" />
							Open
						</Button>
					</div>
				</div>
				{/* Use Google Docs Viewer on Android/mobile, embed on desktop */}
				<div className="flex-1 overflow-hidden bg-[#0a0a0a]">
					{isMobile ? (
						<iframe
							src={googleDocsUrl}
							className="w-full h-full border-0"
							allow="autoplay"
							title="PDF Viewer"
						/>
					) : (
						<embed
							src={`${decodedFile}#toolbar=0&navpanes=0&scrollbar=1`}
							type="application/pdf"
							className="w-full h-full"
							style={{ minHeight: 0 }}
						/>
					)}
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col h-screen bg-gray-900">
			{/* Header with action buttons */}
			<div className="flex justify-between items-center p-4 bg-[#1E1E2F] border-b border-white/10 z-10 sticky top-0">
				<h2 className="font-bold text-white text-lg arabic-text">عرض المجلة</h2>
				<div className="flex gap-2 rtl:flex-row-reverse">
					<Button
						onClick={scrollToTop}
						variant="outline"
						size="sm"
						className="border-white/20 text-white hover:bg-white/10"
					>
						<ChevronUp className="w-4 h-4" />
					</Button>
					<Button
						onClick={scrollToBottom}
						variant="outline"
						size="sm"
						className="border-white/20 text-white hover:bg-white/10"
					>
						<ChevronDown className="w-4 h-4" />
					</Button>
					<Button
						onClick={() => window.open(decodedFile, '_blank')}
						variant="outline"
						size="sm"
						className="border-white/20 text-white hover:bg-white/10 arabic-text flex items-center rtl:flex-row-reverse"
					>
						<ExternalLink className="mr-2 rtl:mr-0 rtl:ml-2 w-4 h-4" />
						فتح في نافذة جديدة
					</Button>
				</div>
			</div>
			
			{/* PDF pages displayed as webpage format */}
			<div
				ref={containerRef}
				className="flex-1 overflow-y-auto bg-[#0a0a0a]"
				style={{ scrollBehavior: 'smooth' }}
				onContextMenu={(e) => e.preventDefault()}
				onDragStart={(e) => e.preventDefault()}
			>
				<div className="flex flex-col items-center gap-4 p-4 md:p-8">
					{pages.map((pageImage, index) => (
						<div
							key={index}
							className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden select-none"
							style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
						>
							{pageImage ? (
							<img
								src={pageImage}
								alt={`صفحة ${index + 1}`}
								className="w-full h-auto pointer-events-none"
								loading="lazy"
								draggable={false}
								onContextMenu={(e) => e.preventDefault()}
							/>
							) : (
								<div className="flex flex-col justify-center items-center bg-gray-100 min-h-[600px]">
									<div className="w-8 h-8 border-2 border-[#FF4C60] border-t-transparent rounded-full animate-spin mb-2" />
									<p className="text-gray-600 text-sm arabic-text">جاري تحميل الصفحة...</p>
								</div>
							)}
							{/* Page number indicator */}
							<div className="bg-[#1E1E2F] px-4 py-2 text-center">
								<span className="text-[#B0B0B0] text-sm arabic-text">صفحة {index + 1}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
