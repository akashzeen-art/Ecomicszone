import { notFound } from "next/navigation"
import { getArtworkBySlug, artworks } from "@/lib/content"

// Disable dynamic params - only serve pre-generated pages
export const dynamicParams = false

// Generate static params for all artworks
export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }))
}

type ArtPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ArtPage({ params }: ArtPageProps) {
  const { slug } = await params
  const art = getArtworkBySlug(slug)

  if (!art) return notFound()

  return (
    <main className="bg-[#121212] text-white min-h-screen">
      <section className="py-16">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen md:relative md:left-0 md:right-0 md:ml-0 md:mr-0 md:w-full overflow-hidden bg-[#1E1E2F]">
            <img src={art.image} alt={art.title} className="w-full h-full max-h-[600px] object-cover" />
          </div>
          <div className="space-y-4 px-4 md:px-0">
            <h1 className="font-bold text-3xl md:text-4xl">{art.title}</h1>
            <p className="text-[#B0B0B0] text-lg">بواسطة {art.artist}</p>
            <p className="text-sm text-[#B0B0B0]">{art.description}</p>
            <div className="flex flex-wrap gap-4 pt-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-[#FF4C60]/20 text-[#FF4C60] font-semibold">
                {art.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                ❤️ {art.likes.toLocaleString("en-US")} إعجابات
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#B0B0B0] font-semibold">
                👁️ {art.views.toLocaleString("en-US")} مشاهدة
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


