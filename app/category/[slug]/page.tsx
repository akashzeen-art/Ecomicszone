import { notFound } from "next/navigation"
import { getCategoryBySlug, categories } from "@/lib/content"
import { libraryMagazines, batmanComics, donaldDuckComics, mickeyMouseComics } from "@/lib/library-content"
import { CategoryContent } from "@/components/category/category-content"

// Disable dynamic params - only serve pre-generated pages
export const dynamicParams = false

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

type CategoryPageProps = {
  params: Promise<{ slug: string }>
}

// Map category slugs to comic series
function getComicsForCategory(slug: string, categoryName: string): LibraryMagazine[] {
  switch (slug) {
    case "batman":
      // Only return Batman comics, exclude any other magazines
      return batmanComics.filter((comic) => comic.series === "batman" || comic.slug.startsWith("batman-"))
    case "donald-duck":
      // Only return Donald Duck comics
      return donaldDuckComics.filter((comic) => comic.series === "donald_duck" || comic.slug.startsWith("donald-duck-"))
    case "mickey-mouse":
      // Only return Mickey Mouse comics
      return mickeyMouseComics.filter((comic) => comic.series === "mickey_mouse" || comic.slug.startsWith("mickey-mouse-"))
    default:
      // For other categories, filter by genre name
      return libraryMagazines.filter((m) => m.genre === categoryName)
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) return notFound()

  // Get comics for this category (either from series or genre)
  const categoryMagazines = getComicsForCategory(slug, category.name)

  return (
    <main className="bg-[#121212] text-white min-h-screen pt-16">
      <CategoryContent
        categoryName={category.name}
        categoryCount={category.count}
        categoryColor={category.color}
        categoryDescription={category.description}
        categoryMagazines={categoryMagazines}
      />
    </main>
  )
}


