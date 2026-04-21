"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { libraryMagazines } from "@/lib/library-content"
import { useLanguage } from "@/contexts/language-context"

// Reviews configuration - comic titles will be translated
const reviewsConfig = [
  {
    id: 1,
    name: "اليكس تشين",
    avatar: "/professional-asian-female-designer.png",
    rating: 5,
    comicKey: "spiderMan",
    review:
      "عمل فني وسرد قصصي مذهلان! طريقة تعاملهم مع مفهوم الأكوان المتعددة كانت مذهلة.",
    date: "منذ يومين",
    verified: true,
  },
  {
    id: 2,
    name: "سارة جونسون",
    avatar: "/professional-female-business-executive.png",
    rating: 5,
    comicKey: "wonderWoman",
    review:
      "تطور شخصية ديانا في هذه السلسلة مذهل. أسلوب الرسم يُجسّد قوتها وجمالها ببراعة.",
    date: "منذ أسبوع واحد",
    verified: true,
  },
  {
    id: 3,
    name: "مايكل رودريجيز",
    avatar: "/korean-male-community-manager.png",
    rating: 4,
    comicKey: "batman",
    review: "باتمان الكلاسيكي في أبهى صوره. عمقه النفسي وأجواءه السوداء تجعلانه كتابًا لا غنى عنه.",
    date: "منذ 3 أيام",
    verified: false,
  },
  {
    id: 4,
    name: "إيما ويلسون",
    avatar: "/professional-female-cto.png",
    rating: 5,
    comicKey: "xMen",
    review: "السفر عبر الزمن مُتقن! الثقل العاطفي للقصة مؤثرٌ للغاية، والفن مُذهل.",
    date: "منذ 5 أيام",
    verified: true,
  },
  {
    id: 5,
    name: "ديفيد كيم",
    avatar: "/asian-ceo-casual.png",
    rating: 4,
    comicKey: "walkingDead",
    review: "قصة بقاء آسرة بشخصياتها المعقدة. ليست لضعاف القلوب، لكنها تستحق المشاهدة.",
    date: "منذ أسبوع واحد",
    verified: true,
  },
  {
    id: 6,
    name: "ليزا تومسون",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comicKey: "msMarvel",
    review:
      "كامالا خان شخصيةٌ مُلهمةٌ ومؤثرة. تُضفي هذه السلسلة حيويةً جديدةً على عالم مارفل.",
    date: "منذ 4 أيام",
    verified: true,
  },
]

const comicTitleToSlug: Record<string, string> = Object.fromEntries(
  libraryMagazines.map((m) => [m.title, m.slug]),
)

export function ReaderReviews() {
  const { translations, language } = useLanguage()
  
  return (
    <section className="bg-gradient-to-b from-[#1E1E2F] to-[#121212] py-20">
      <div className="mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">
            {translations.library.reviews.title} <span className="text-[#FF4C60]">{translations.library.reviews.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#B0B0B0] text-lg">
            {translations.library.reviews.subtitle}
          </p>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviewsConfig.map((review, index) => {
            // Get translated comic title
            const comicTitle = translations.library.magazines.reviewComics[review.comicKey as keyof typeof translations.library.magazines.reviewComics] || ""
            
            return (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-[#1E1E2F] comic-shadow border-[#FF4C60]/20 hover:border-[#FF4C60]/40 h-full transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12 border border-white/10">
                      <AvatarImage
                        src={review.avatar || "/placeholder-user.jpg"}
                        alt={review.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#FF4C60] text-white">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        {review.verified && (
                          <div className="flex justify-center items-center bg-[#4CAF50] rounded-full w-4 h-4">
                            <div className="bg-white rounded-full w-2 h-2" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-[#FFD93D] fill-current" : "text-gray-600"}`}
                          />
                        ))}
                        <span className="ml-2 text-[#B0B0B0] text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    {comicTitleToSlug[comicTitle] ? (
                      <Link
                        href={`/majalla/maktaba/majalla/${encodeURIComponent(
                          comicTitleToSlug[comicTitle],
                        )}`}
                      >
                        <h5 className="mb-2 font-medium text-[#FF4C60] hover:underline">
                          {comicTitle}
                        </h5>
                      </Link>
                    ) : (
                      <h5 className="mb-2 font-medium text-[#FF4C60]">{comicTitle}</h5>
                    )}
                    <div className="relative">
                      <Quote className="-top-2 -left-2 absolute w-6 h-6 text-[#FFD93D]/30" />
                      <p className="pl-4 text-[#B0B0B0] leading-relaxed">{review.review}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4ECDC4]">{translations.library.reviews.helpful}</span>
                    <div className="flex items-center gap-2">
                      <button className="text-[#B0B0B0] hover:text-[#FF4C60] transition-colors">👍 12</button>
                      <button className="text-[#B0B0B0] hover:text-[#FF4C60] transition-colors">💬 {translations.library.reviews.reply}</button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="bg-[#FF4C60]/10 comic-shadow border-[#FF4C60]/20">
            <CardContent className="p-8">
              <h3 className="mb-4 font-bold text-white text-2xl">{translations.library.reviews.shareOpinion}</h3>
              <p className="mb-6 text-[#B0B0B0]">{translations.library.reviews.helpReaders}</p>
              <button className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow px-8 py-3 rounded-lg font-medium text-white transition-all hover:animate-pulse-glow">
                {translations.library.reviews.writeReview}
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
