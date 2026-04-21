"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getSeriesName } from "@/lib/i18n"
import { batmanComics, mickeyMouseComics, donaldDuckComics } from "@/lib/library-content"

// API Base URL from Excel
const COMICS_API_BASE = "https://api.ameora.fun"

// Trending comics configuration - will use translations
// Updated with specific episodes: Batman 11, Donald Duck 4, Mickey Mouse 9
const trendingComicsConfig = [
	{
		id: 1,
		comic: batmanComics[10], // Episode 11 (index 10)
		rating: 4.9,
		trend: "+15%",
		image: "/batman.jpg",
		slug: 'batman-11'
	},
	{
		id: 2,
		comic: mickeyMouseComics[8], // Episode 9 (index 8)
		rating: 4.8,
		trend: "+12%",
		image: "/mickeymouse.jpg",
		slug: 'mickey-mouse-9'
	},
	{
		id: 3,
		comic: donaldDuckComics[3], // Episode 4 (index 3)
		rating: 4.7,
		trend: "+18%",
		image: "/donaldduck.jpg",
		slug: 'donald-duck-4'
	},
	{
		id: 4,
		comic: batmanComics[10], // Episode 11 (index 10) - repeat for variety
		rating: 4.6,
		trend: "+9%",
		image: "/batman.jpg",
		slug: 'batman-11'
	},
	{
		id: 5,
		comic: mickeyMouseComics[8], // Episode 9 (index 8) - repeat for variety
		rating: 4.8,
		trend: "+14%",
		image: "/mickeymouse.jpg",
		slug: 'mickey-mouse-9'
	},
	{
		id: 6,
		comic: donaldDuckComics[3], // Episode 4 (index 3) - repeat for variety
		rating: 4.5,
		trend: "+11%",
		image: "/donaldduck.jpg",
		slug: 'donald-duck-4'
	},
	{
		id: 7,
		comic: batmanComics[10], // Episode 11 (index 10) - repeat for variety
		rating: 4.7,
		trend: "+13%",
		image: "/batman.jpg",
		slug: 'batman-11'
	}
]

export function TrendingComics() {
	const { translations, language } = useLanguage()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const startX = useRef(0)
	const currentX = useRef(0)

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % trendingComicsConfig.length)
	}, [])

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + trendingComicsConfig.length) % trendingComicsConfig.length)
	}, [])

	// Auto-rotate carousel
	useEffect(() => {
		if (isDragging) return
		const interval = setInterval(nextSlide, 4000)
		return () => clearInterval(interval)
	}, [nextSlide, isDragging])

	// Touch/Mouse handlers for swipe
	const handleStart = useCallback((clientX: number) => {
		setIsDragging(true)
		startX.current = clientX
		currentX.current = clientX
	}, [])

	const handleMove = useCallback((clientX: number) => {
		if (!isDragging) return
		currentX.current = clientX
	}, [isDragging])

	const handleEnd = useCallback(() => {
		if (!isDragging) return
		const diff = startX.current - currentX.current
		if (Math.abs(diff) > 50) {
			if (diff > 0) nextSlide()
			else prevSlide()
		}
		setIsDragging(false)
	}, [isDragging, nextSlide, prevSlide])

	return (
		<section className="bg-gradient-to-r from-[#1E1E2F] to-[#121212] py-24 md:py-32 lg:py-40 overflow-hidden">
			<div className="mx-auto px-4 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 md:mb-16 text-center"
				>
					<div className="inline-flex items-center gap-2 bg-[#FF4C60]/10 mb-4 px-4 py-2 rounded-full">
						<TrendingUp className="w-5 h-5 text-[#FF4C60]" />
						<span className="font-medium text-[#FF4C60]">{translations.home.trendingComics.badge}</span>
					</div>
					<h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">{translations.home.trendingComics.title}</h2>
					<p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
						{translations.home.trendingComics.subtitle}
					</p>
				</motion.div>

				{/* Normal Horizontal Slider Container */}
				<div className="relative w-full">
					{/* Navigation Buttons */}
					<Button
						variant="ghost"
						size="lg"
						onClick={prevSlide}
						className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-[#FF4C60]/20 hover:bg-[#FF4C60] text-white border-[#FF4C60] rounded-full w-10 h-10 md:w-12 md:h-12 p-0 transition-all duration-300 hover:scale-110 shadow-lg"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
					</Button>

					<Button
						variant="ghost"
						size="lg"
						onClick={nextSlide}
						className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-[#FF4C60]/20 hover:bg-[#FF4C60] text-white border-[#FF4C60] rounded-full w-10 h-10 md:w-12 md:h-12 p-0 transition-all duration-300 hover:scale-110 shadow-lg"
						aria-label="Next slide"
					>
						<ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
					</Button>

					{/* Slider Container */}
					<div
						ref={containerRef}
						className="relative overflow-hidden mx-auto max-w-4xl"
						onMouseDown={(e) => handleStart(e.clientX)}
						onMouseMove={(e) => handleMove(e.clientX)}
						onMouseUp={handleEnd}
						onMouseLeave={handleEnd}
						onTouchStart={(e) => handleStart(e.touches[0].clientX)}
						onTouchMove={(e) => handleMove(e.touches[0].clientX)}
						onTouchEnd={handleEnd}
					>
						<AnimatePresence mode="wait" initial={false}>
								<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 300 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -300 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="flex justify-center"
								>
								{(() => {
									const item = trendingComicsConfig[currentIndex]
									const comic = item.comic
									if (!comic || !comic.series) return null
									
									const title = getMagazineTitle(language, comic.series as "batman" | "donald_duck" | "mickey_mouse", comic.rank || 1)
									const seriesName = getSeriesName(language, comic.series as "batman" | "donald_duck" | "mickey_mouse")
									
									// Use the pdfFile from the comic object, or construct it properly based on series
									let pdfUrl = comic.pdfFile
									if (!pdfUrl && comic.series && comic.rank) {
										const rank = comic.rank
										if (comic.series === "batman") {
											pdfUrl = `${COMICS_API_BASE}/content/comics/batman/bmp${rank}/bms${rank}.pdf`
										} else if (comic.series === "donald_duck") {
											pdfUrl = `${COMICS_API_BASE}/content/comics/donald_duck/ddp${rank}/dds${rank}.pdf`
										} else if (comic.series === "mickey_mouse") {
											pdfUrl = `${COMICS_API_BASE}/content/comics/mickey_mouse/mmp${rank}/mms${rank}.pdf`
										}
									}
									
									return (
									<Card className={`group bg-[#1E1E2F] border-[#FF4C60] comic-shadow w-64 md:w-72 transition-all duration-500`}>
										<CardContent className="p-0">
										<div className="relative flex justify-center items-center h-72 overflow-hidden bg-[#050509]">
												<OptimizedImage
												src={item.image || "/placeholder.svg"}
												alt={title}
												width={218}
												height={288}
													className="w-full h-full object-cover transition-transform duration-300"
												sizes="(max-width: 768px) 256px, 288px"
												/>
												<div className="top-2 right-2 absolute">
												<Badge className="bg-[#FFD93D] text-[#121212] text-xs px-2 py-1">
													{seriesName}
													</Badge>
												</div>
											<div className="top-2 left-2 absolute bg-[#FF4C60] px-2 py-1 rounded-full font-bold text-white text-xs">
												{item.trend}
											</div>
										</div>
										<div className="p-4 md:p-5">
											<h3 className="mb-3 font-bold text-lg md:text-xl transition-colors text-[#FFD93D]">
												{title}
												</h3>
											<div className="flex justify-between items-center mb-4">
												<div className="flex items-center gap-1">
													<Star className="fill-current w-5 h-5 text-[#FFD93D]" />
													<span className="font-medium text-white text-base">{item.rating}</span>
												</div>
												<TrendingUp className="w-5 h-5 text-[#FF4C60]" />
											</div>
											{pdfUrl && (
													<a
													href={`/reader/${item.slug}?file=${encodeURIComponent(pdfUrl)}`}
													className="inline-block bg-[#FF4C60] hover:bg-[#FF4C60]/90 px-4 py-2.5 rounded text-white text-sm md:text-base font-medium transition w-full text-center"
													>
														{translations.common.readNow}
													</a>
												)}
											</div>
										</CardContent>
									</Card>
									)
								})()}
								</motion.div>
						</AnimatePresence>
					</div>

					{/* Indicators */}
					<div className="flex justify-center gap-2 mt-8 z-30">
						{trendingComicsConfig.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 ${
									index === currentIndex 
										? 'bg-[#FF4C60] w-8' 
										: 'bg-[#FF4C60]/30 hover:bg-[#FF4C60]/60 w-2'
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
