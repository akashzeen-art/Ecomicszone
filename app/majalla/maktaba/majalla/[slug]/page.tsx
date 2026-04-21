import { notFound } from "next/navigation"
import { getLibraryMagazineBySlug, allLibraryMagazines } from "@/lib/library-content"
import { MagazineDetailContent } from "@/components/magazine/magazine-detail-content"

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
      <MagazineDetailContent magazine={magazine} />
    </main>
  )
}
