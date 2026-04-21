"use client"

import Link from "next/link"
import { Star, BookOpen, ArrowLeft } from "lucide-react"
import { MagazineImage } from "@/components/ui/magazine-image"
import { type LibraryMagazine } from "@/lib/library-content"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getMagazineShortDescription } from "@/lib/i18n"

type CategoryContentProps = {
  categoryName: string
  categoryCount: number
  categoryColor: string
  categoryDescription: string
  categoryMagazines: LibraryMagazine[]
}

export function CategoryContent({
  categoryName,
  categoryCount,
  categoryColor,
  categoryDescription,
  categoryMagazines,
}: CategoryContentProps) {
  const { translations, language } = useLanguage()

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-white/5 bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-6 sm:py-8">
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          <nav className="mb-3 sm:mb-4 text-xs sm:text-sm text-[#B0B0B0] flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#FF4C60] transition-colors">
              {translations.nav.logo}
            </Link>
            <span className="mx-0.5 sm:mx-1">/</span>
            <Link href="/" className="hover:text-[#FF4C60] transition-colors">
              {translations.nav.home}
            </Link>
            <span className="mx-0.5 sm:mx-1">/</span>
            <Link href="/library" className="hover:text-[#FF4C60] transition-colors">
              {translations.nav.library}
            </Link>
            <span className="mx-0.5 sm:mx-1">/</span>
            <span className="text-white">{categoryName}</span>
          </nav>
          <h1 className="mb-3 sm:mb-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{categoryName}</h1>
          <p className="mb-4 sm:mb-6 text-[#B0B0B0] text-sm sm:text-base md:text-lg">{categoryDescription}</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <span
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
            >
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              {categoryCount} {translations.category.magazines}
            </span>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12">
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="mb-6 sm:mb-8 font-semibold text-xl sm:text-2xl">{translations.category.magazinesInCategory}</h2>
          {categoryMagazines.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#B0B0B0] text-lg">{translations.category.noMagazines}</p>
              <Link 
                href="/library" 
                className="inline-flex items-center gap-2 mt-4 text-[#FF4C60] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                {translations.category.backToLibrary}
              </Link>
            </div>
          ) : (
            <div className="gap-4 sm:gap-5 md:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categoryMagazines.map((magazine) => {
                const title = magazine.series 
                  ? getMagazineTitle(language, magazine.series as "batman" | "donald_duck" | "mickey_mouse", magazine.rank || 1)
                  : magazine.title
                const shortDescription = magazine.series
                  ? getMagazineShortDescription(language, magazine.series as "batman" | "donald_duck" | "mickey_mouse", magazine.rank || 1)
                  : magazine.shortDescription

                return (
                  <div
                    key={magazine.id}
                    className="group flex flex-col bg-[#1E1E2F] hover:comic-shadow overflow-hidden border border-[#FF4C60]/20 hover:border-[#FF4C60] transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image Container - Links to Details */}
                    <Link href={`/majalla/maktaba/majalla/${magazine.slug}/`}>
                      <div className="relative aspect-[212/256] overflow-hidden bg-[#050509] cursor-pointer">
                        <MagazineImage
                          src={magazine.image}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent opacity-60" />
                        {/* Rating Badge */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 bg-black/70 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFD93D] fill-current" />
                          <span className="text-white text-[10px] sm:text-xs font-semibold">{magazine.rating}</span>
                        </div>
                      </div>
                    </Link>
                    
                    {/* Content */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <Link href={`/majalla/maktaba/majalla/${magazine.slug}/`}>
                        <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-[#FFD93D] transition-colors line-clamp-1 cursor-pointer">
                          {title}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-[#B0B0B0] line-clamp-2 mb-2 sm:mb-3 flex-1">
                        {shortDescription}
                      </p>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#B0B0B0] pt-2 sm:pt-3 border-t border-white/5">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {magazine.parts} {translations.category.chapters}
                        </span>
                        <span className="truncate ml-2">{magazine.readers} {translations.category.readers}</span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/5 flex gap-1.5 sm:gap-2">
                        {magazine.pdfFile && (
                          <Link 
                            href={`/reader/${magazine.slug}/?file=${encodeURIComponent(magazine.pdfFile)}`}
                            className="flex-1"
                          >
                            <span className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white text-xs sm:text-sm font-semibold transition-colors min-h-[44px] sm:min-h-[36px]">
                              {translations.magazine.readNow}
                            </span>
                          </Link>
                        )}
                        <Link 
                          href={`/majalla/maktaba/majalla/${magazine.slug}/`}
                          className="flex-1"
                        >
                          <span className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors min-h-[44px] sm:min-h-[36px]">
                            {translations.magazine.details}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

