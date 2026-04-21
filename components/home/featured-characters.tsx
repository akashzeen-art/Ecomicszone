"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Flame, Wind } from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useLanguage } from "@/contexts/language-context"

// API Base URL from Excel
const COMICS_API_BASE = "https://api.ameora.fun"

export function FeaturedCharacters() {
	const { translations } = useLanguage()

const characters = [
	{
		id: 1,
			name: translations.featuredCharacters.characters.batman.name,
		slug: "batman-3",
			power: translations.featuredCharacters.characters.batman.power,
		image: "/batman.jpg",
		icon: Zap,
		color: "#FFD93D",
			description: translations.featuredCharacters.characters.batman.description,
		pdfUrl: `${COMICS_API_BASE}/content/comics/batman/bmp3/bms3.pdf`,
	},
	{
		id: 2,
			name: translations.featuredCharacters.characters.donaldDuck.name,
		slug: "donald-duck-2",
			power: translations.featuredCharacters.characters.donaldDuck.power,
		image: "/donaldduck.jpg",
		icon: Shield,
		color: "#FF4C60",
			description: translations.featuredCharacters.characters.donaldDuck.description,
		pdfUrl: `${COMICS_API_BASE}/content/comics/donald_duck/ddp2/dds2.pdf`,
	},
	{
		id: 3,
			name: translations.featuredCharacters.characters.mickeyMouse.name,
		slug: "mickey-mouse-3",
			power: translations.featuredCharacters.characters.mickeyMouse.power,
		image: "/mickeymouse.jpg",
		icon: Flame,
		color: "#FF6B35",
			description: translations.featuredCharacters.characters.mickeyMouse.description,
		pdfUrl: `${COMICS_API_BASE}/content/comics/mickey_mouse/mmp3/mms3.pdf`,
	},
	{
		id: 4,
			name: translations.featuredCharacters.characters.batmanVengeance.name,
		slug: "batman-4",
			power: translations.featuredCharacters.characters.batmanVengeance.power,
		image: "/batman.jpg",
		icon: Wind,
		color: "#4ECDC4",
			description: translations.featuredCharacters.characters.batmanVengeance.description,
		pdfUrl: `${COMICS_API_BASE}/content/comics/batman/bmp4/bms4.pdf`,
	},
]

	return (
		<section className="bg-[#121212] py-20">
			<div className="mx-auto px-4 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-16 text-center"
				>
					<h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
						{translations.featuredCharacters.title}{" "}
						<span className="text-[#FF4C60]">{translations.featuredCharacters.titleHighlight}</span>
					</h2>
					<p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
						{translations.featuredCharacters.subtitle}
					</p>
				</motion.div>

				<div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{characters.map((character, index) => {
						const Icon = character.icon
						const readerUrl = `/reader/${character.slug}?file=${encodeURIComponent(character.pdfUrl)}`
						
						return (
							<Link key={character.id} href={readerUrl} className="block h-full">
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									whileHover={{ scale: 1.02 }}
									className="group cursor-pointer h-full"
								>
									<Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300 h-full flex flex-col">
										<CardContent className="p-0 flex flex-col h-full">
											{/* Character art */}
											<div className="relative flex justify-center items-center h-64 overflow-hidden bg-[#050509]">
												<OptimizedImage
													src={character.image || "/placeholder.svg"}
													alt={character.name}
													width={212}
													height={256}
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
													sizes="(max-width: 768px) 100vw, 25vw"
												/>
												<div className="bottom-0 left-0 right-0 absolute h-20 bg-gradient-to-t from-[#1E1E2F] via-[#1E1E2F]/60 to-transparent" />
												<div className="top-3 right-3 absolute">
													<div
														className="flex justify-center items-center rounded-full w-9 h-9"
														style={{ backgroundColor: character.color }}
													>
														<Icon className="w-4 h-4 text-white" />
													</div>
												</div>
											</div>
											{/* Text content */}
											<div className="p-4 md:p-5 text-center flex flex-col justify-between">
												<h3 className="mb-2 font-bold text-white group-hover:text-[#FFD93D] text-lg md:text-xl transition-colors">
													{character.name}
												</h3>
												<Badge
													className="mb-2 mx-auto text-xs"
													style={{
														backgroundColor: `${character.color}20`,
														color: character.color,
														border: `1px solid ${character.color}40`,
													}}
												>
													{character.power}
												</Badge>
												<p className="text-[#B0B0B0] text-xs md:text-sm">
													{character.description}
												</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}
