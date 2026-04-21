"use client"

import Link from "next/link"
import { type LibraryMagazine } from "@/lib/library-content"
import { useLanguage } from "@/contexts/language-context"
import { getMagazineTitle, getMagazineFullDescription } from "@/lib/i18n"

type MagazineDetailContentProps = {
  magazine: LibraryMagazine
}

export function MagazineDetailContent({ magazine }: MagazineDetailContentProps) {
  const { translations, language } = useLanguage()

  const title = magazine.series 
    ? getMagazineTitle(language, magazine.series as "batman" | "donald_duck" | "mickey_mouse", magazine.rank || 1)
    : magazine.title
  const fullDescription = magazine.series
    ? getMagazineFullDescription(language, magazine.series as "batman" | "donald_duck" | "mickey_mouse", magazine.rank || 1)
    : magazine.fullDescription

  return (
    <>
      <section className="border-b border-white/5 bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-8">
        <div className="mx-auto px-4 max-w-6xl">
          <nav className="mb-2 text-sm text-[#B0B0B0] arabic-text">
            {translations.nav.logo} <span className="mx-1">/</span> {translations.nav.home} <span className="mx-1">/</span> {translations.nav.library}{" "}
            <span className="mx-1">/</span> {translations.category.magazines} <span className="mx-1">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-4xl arabic-text">{title}</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rtl:md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="flex justify-center px-4 md:px-0 rtl:order-2">
            <img
              src={magazine.image}
              alt={title}
              className="comic-shadow rounded-2xl w-full max-w-sm object-cover"
            />
          </div>

          <div className="space-y-5 rtl:order-1">
            <div className="flex flex-wrap items-center gap-3 text-sm rtl:flex-row-reverse">
              <span className="px-3 py-1 rounded-full bg-[#FF4C60]/20 text-[#FF4C60] font-semibold arabic-text">
                {magazine.genre}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD93D]/20 text-[#FFD93D] font-semibold">
                ⭐ {magazine.rating}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold arabic-text">
                {magazine.readers} {translations.magazine.readers}
              </span>
              {magazine.subscribers && (
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold arabic-text">
                  {magazine.subscribers} {translations.magazine.subscribers}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold arabic-text">
                {magazine.parts} {translations.magazine.chapters}
              </span>
            </div>

            <p className="text-[#B0B0B0] leading-relaxed text-lg arabic-text">{fullDescription}</p>

            <div className="flex flex-wrap gap-4 pt-4 rtl:flex-row-reverse">
              {magazine.pdfFile && (
                <a
                  href={`/reader/${encodeURIComponent(magazine.slug)}?file=${encodeURIComponent(magazine.pdfFile)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white font-semibold arabic-text"
                >
                  {translations.magazine.readNow}
                </a>
              )}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 font-semibold text-sm arabic-text">
                {translations.magazine.follow}
              </button>
              {magazine.trailerUrl && (
                <a
                  href="#trailer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#FFD93D] text-[#FFD93D] hover:bg-[#FFD93D] hover:text-[#121212] font-semibold arabic-text"
                >
                  {translations.magazine.watchTrailer}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {magazine.trailerUrl && (
        <section id="trailer" className="pb-16">
          <div className="mx-auto px-4 max-w-4xl">
            <h2 className="mb-4 font-semibold text-2xl arabic-text">{translations.magazine.trailer}</h2>
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <iframe
                src={magazine.trailerUrl}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

