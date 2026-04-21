"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const releases = [
	{
		id: 1,
		title: "Quantum Heroes #47",
		date: "2024-01-15",
		views: "12.5K",
		image: "/stylized-jester.png",
		status: "New",
		description: "The multiverse collides as our heroes face their greatest challenge yet.",
		pdfUrl: "/pdfs/pdf5.pdf",
	},
	{
		id: 2,
		title: "Dark Shadows #23",
		date: "2024-01-12",
		views: "8.9K",
		image: "/dark-shadows-comic-cover.png",
		status: "Hot",
		description: "Ancient evils awaken in the depths of the shadow realm.",
		pdfUrl: "/pdfs/pdf6.pdf",
	},
	{
		id: 3,
		title: "Cyber Knights #15",
		date: "2024-01-10",
		views: "15.2K",
		image: "/cyber-knights-comic-cover.png",
		status: "Trending",
		description: "High-tech warriors battle in the neon-lit streets of Neo Tokyo.",
		pdfUrl: "/pdfs/pdf7.pdf",
	},
	{
		id: 4,
		title: "Mystic Realms #31",
		date: "2024-01-08",
		views: "6.7K",
		image: "/mystic-realms-comic.png",
		status: "New",
		description: "Magic and mystery unfold in the enchanted kingdoms.",
		pdfUrl: "/pdfs/pdf8.pdf",
	},
	{
		id: 5,
		title: "Space Patrol #89",
		date: "2024-01-05",
		views: "11.3K",
		image: "/space-patrol-comic.png",
		status: "Popular",
		description: "Intergalactic adventures across the cosmic frontier.",
		pdfUrl: "/pdfs/pdf9.pdf",
	},
	{
		id: 6,
		title: "Urban Legends #12",
		date: "2024-01-03",
		views: "9.8K",
		image: "/urban-legends-comic-cover.png",
		status: "Hot",
		description: "Street-level heroes protect the city from supernatural threats.",
		pdfUrl: "/pdfs/pdf10.pdf",
	},
]

const statusColors = {
	New: "#FFD93D",
	Hot: "#FF4C60",
	Trending: "#4ECDC4",
	Popular: "#9B59B6",
}

export function LatestReleases() {
	const { translations } = useLanguage()
	
	return (
		<section className="bg-gradient-to-b from-[#121212] to-[#1E1E2F] py-20">
			<div className="mx-auto px-4 max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-16 text-center"
				>
					<h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">
						{translations.home.latestReleases.title}{" "}
						<span className="text-[#FFD93D]">
							{translations.home.latestReleases.titleHighlight}
						</span>
					</h2>
					<p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
						{translations.home.latestReleases.subtitle}
					</p>
				</motion.div>

				<div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{releases?.map((comic, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								type: "spring",
								stiffness: 100,
							}}
							whileHover={{ y: -10 }}
							className="group"
						>
							<Card className="bg-[#1E1E2F] hover:comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60] overflow-hidden transition-all duration-300">
								<CardContent className="p-0">
									<div className="relative overflow-hidden">
										<img
											src={comic.image || "/placeholder.svg"}
											alt={comic.title}
											className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="top-4 left-4 absolute">
											<Badge
												style={{
													backgroundColor:
														statusColors[
															comic.status as keyof typeof statusColors
														],
													color: "#121212",
												}}
												className="font-bold"
											>
												{translations.home.latestReleases.status[comic.status.toLowerCase() as keyof typeof translations.home.latestReleases.status] || comic.status}
											</Badge>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<div className="right-4 bottom-4 left-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											{comic.pdfUrl && (
												<a
													href={comic.pdfUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="block w-full"
												>
													<Button size="sm" className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 w-full">
														<Download className="mr-2 w-4 h-4" />
														{translations.common.readNow}
													</Button>
												</a>
											)}
										</div>
									</div>
									<div className="p-6">
										<h3 className="mb-2 font-bold text-white group-hover:text-[#FFD93D] text-lg transition-colors">
											{comic.title}
										</h3>
										<p className="mb-4 text-[#B0B0B0] text-sm line-clamp-2">
											{comic.description}
										</p>
										<div className="flex justify-between items-center text-[#B0B0B0] text-sm">
											<div className="flex items-center gap-1">
												<Calendar className="w-4 h-4" />
												<span>
													{new Date(comic.date).toLocaleDateString()}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<Eye className="w-4 h-4" />
												<span>{comic.views}</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mt-12 text-center"
				>
					<Button
						size="lg"
						variant="outline"
						className="bg-transparent hover:bg-[#FFD93D] px-8 border-[#FFD93D] text-[#FFD93D] hover:text-[#121212]"
					>
						{translations.home.latestReleases.viewAll}
					</Button>
				</motion.div>
			</div>
		</section>
	)
}
