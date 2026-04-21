import { notFound } from "next/navigation"
import { getMagazineBySlug, magazines } from "@/lib/content"

// Disable dynamic params - only serve pre-generated pages
export const dynamicParams = false

// Generate static params for all magazines
export async function generateStaticParams() {
  return magazines.map((magazine) => ({
    slug: magazine.slug,
  }))
}

type MagazinePageProps = {
  params: Promise<{ slug: string }>
}

export default async function MagazinePage({ params }: MagazinePageProps) {
  const { slug } = await params
  const magazine = getMagazineBySlug(slug)

  if (!magazine) return notFound()

  return (
    <main className="bg-[#121212] text-white min-h-screen">
      <section className="bg-gradient-to-r from-[#FF4C60]/10 via-[#121212] to-[#FFD93D]/10 py-16">
        <div className="mx-auto px-4 max-w-6xl grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex justify-center">
            <img
              src={magazine.heroImage}
              alt={magazine.title}
              className="comic-shadow rounded-2xl w-full max-w-sm"
            />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl">
              {magazine.title} #{magazine.issueNumber}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-[#FF4C60]/20 text-[#FF4C60] font-semibold">
                {magazine.genre}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD93D]/20 text-[#FFD93D] font-semibold">
                ⭐ {magazine.rating}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                {magazine.readers} القراء
              </span>
            </div>
            <p className="text-[#B0B0B0] leading-relaxed text-lg">{magazine.summary}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              {magazine.pdfFile && (
                <a
                  href={`/reader/${magazine.slug}?file=${encodeURIComponent(magazine.pdfFile)}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white font-semibold"
                >
                  اقرأ الآن
                </a>
              )}
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

      <section className="py-12">
        <div className="mx-auto px-4 max-w-6xl grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <div>
              <h2 className="mb-3 font-semibold text-2xl">قائمة الأعداد</h2>
              <ul className="space-y-3">
                {Array.from({ length: magazine.issuesCount }).map((_, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#1E1E2F] border border-white/5"
                  >
                    <span>الحلقة #{index + 1}</span>
                    <button className="text-sm text-[#FF4C60] hover:underline">قراءة</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {magazine.trailerUrl && (
              <div id="trailer">
                <h2 className="mb-3 font-semibold text-2xl">المقطع الترويجي</h2>
                <div className="relative w-full overflow-hidden rounded-2xl aspect-video">
                  <iframe
                    src={magazine.trailerUrl}
                    title={magazine.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}


