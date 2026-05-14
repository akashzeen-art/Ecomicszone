import { notFound } from "next/navigation"
import { getLibraryMagazineBySlug, allLibraryMagazines } from "@/lib/library-content"

// Disable dynamic params - only serve pre-generated pages
export const dynamicParams = false

// Generate static params for ALL library magazines (including comics from Excel)
export async function generateStaticParams() {
  return allLibraryMagazines.map((magazine) => ({
    slug: magazine.slug,
  }))
}

type LibraryMagazinePageProps = {
  params: Promise<{ slug: string }>
}

export default async function LibraryMagazinePage({ params }: LibraryMagazinePageProps) {
  const { slug } = await params
  const magazine = getLibraryMagazineBySlug(slug)

  if (!magazine) return notFound()

  return (
    <main className="bg-[#121212] text-white min-h-screen pt-16">
      <section className="border-b border-white/5 bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-8">
        <div className="mx-auto px-4 max-w-6xl">
          <nav className="mb-2 text-sm text-[#B0B0B0]">
            موسوعة القصص المصورة <span className="mx-1">/</span> بيت <span className="mx-1">/</span> مكتبة{" "}
            <span className="mx-1">/</span> مجلة <span className="mx-1">/</span>
            <span className="text-white">{magazine.title}</span>
          </nav>
          <h1 className="font-bold text-3xl md:text-4xl">{magazine.title}</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto px-4 max-w-6xl grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex justify-center">
            <img
              src={magazine.image}
              alt={magazine.title}
              className="comic-shadow rounded-2xl w-full max-w-sm object-cover"
            />
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-[#FF4C60]/20 text-[#FF4C60] font-semibold">
                {magazine.genre}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD93D]/20 text-[#FFD93D] font-semibold">
                ⭐ {magazine.rating}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                {magazine.readers} القرّاء
              </span>
              {magazine.subscribers && (
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                  {magazine.subscribers} المشتركين
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                {magazine.parts} الفصول
              </span>
            </div>

            <p className="text-[#B0B0B0] leading-relaxed text-lg">{magazine.fullDescription}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {magazine.pdfFile && (
                <a
                  href={`/reader/${encodeURIComponent(magazine.slug)}?file=${encodeURIComponent(magazine.pdfFile)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white font-semibold"
                >
                  اقرأ الآن
                </a>
              )}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 font-semibold text-sm">
                متابعة
              </button>
              {magazine.trailerUrl && (
                <a
                  href="#trailer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#FFD93D] text-[#FFD93D] hover:bg-[#FFD93D] hover:text-[#121212] font-semibold"
                >
                  شاهد المقطع الترويجي
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {magazine.trailerUrl && (
        <section id="trailer" className="pb-16">
          <div className="mx-auto px-4 max-w-4xl">
            <h2 className="mb-4 font-semibold text-2xl">المقطع الترويجي</h2>
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <iframe
                src={magazine.trailerUrl}
                title={magazine.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
