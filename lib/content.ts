export type Category = {
  id: number
  slug: string
  name: string
  count: string
  color: string
  image: string
  description: string
}

export type Magazine = {
  id: string
  slug: string
  title: string
  issueNumber: number
  heroImage: string
  genre: string
  rating: number
  readers: string
  issuesCount: number
  summary: string
  trailerUrl?: string
  pdfFile?: string
}

export type Artwork = {
  id: string
  slug: string
  title: string
  artist: string
  likes: number
  views: number
  image: string
  category: string
  description?: string
}

// Base URL for remote comics API
const COMICS_API_BASE = "https://api.ameora.fun"

export const categories: Category[] = [
  // Comic Series from Excel Sheet
  {
    id: 100,
    slug: "batman",
    name: "باتمان",
    count: "50 مجلة",
    color: "#1A1A2E",
    image: "/landscapebatman.jpg",
    description: "مغامرات فارس الظلام في مدينة جوثام",
  },
  {
    id: 101,
    slug: "donald-duck",
    name: "دونالد داك",
    count: "10 مجلات",
    color: "#0066CC",
    image: "/landscapedonaldduck.jpg",
    description: "مغامرات دونالد داك الكوميدية المضحكة",
  },
  {
    id: 102,
    slug: "mickey-mouse",
    name: "ميكي ماوس",
    count: "18 مجلة",
    color: "#E31937",
    image: "/mickeymouselandscape.jpg",
    description: "مغامرات ميكي ماوس الممتعة والمثيرة",
  },
  // Original categories
  {
    id: 1,
    slug: "superhero",
    name: "Superhero",
    count: "2,847",
    color: "#FF4C60",
    image: "/ancient-mythology-comic-cover.png",
    description: "Epic tales of heroes who saved the world",
  },
  {
    id: 2,
    slug: "sci-fi",
    name: "Sci-Fi",
    count: "1,923",
    color: "#4ECDC4",
    image: "/cyber-knights-comic-cover.png",
    description: "Future adventures across the galaxy",
  },
  {
    id: 3,
    slug: "fantasy",
    name: "Fantasy",
    count: "1,654",
    color: "#9B59B6",
    image: "/cyber-knights-comic-cover.png",
    description: "Magical worlds and legendary creatures",
  },
  {
    id: 4,
    slug: "romance",
    name: "Romance",
    count: "892",
    color: "#E91E63",
    image: "/comic-book-office.png",
    description: "Love stories that touch the heart",
  },
  {
    id: 5,
    slug: "horror",
    name: "Horror",
    count: "743",
    color: "#FF6B35",
    image: "/fierce-mutant.png",
    description: "Terrifying horror tales",
  },
  {
    id: 6,
    slug: "historical",
    name: "Historical",
    count: "567",
    color: "#FFD93D",
    image: `${COMICS_API_BASE}/content/ecomics/ebook212pxx256px/6.png`,
    description: "Stories from the past come to life",
  },
  {
    id: 7,
    slug: "action",
    name: "Action",
    count: "2,134",
    color: "#FF4C60",
    image: "/stylized-jester.png",
    description: "Thrilling adventures and battles",
  },
  {
    id: 8,
    slug: "mystery",
    name: "Mystery",
    count: "1,089",
    color: "#6C5CE7",
    image: "/hispanic-content-director.png",
    description: "Puzzles and secrets waiting to be solved",
  },
]

export const magazines: Magazine[] = [
  {
    id: "guardians-of-the-galaxy-1",
    slug: "guardians-of-the-galaxy-1",
    title: "حراس المجرة",
    issueNumber: 1,
    heroImage: "/dark-knight-comic.png",
    genre: "خيال علمي",
    rating: 4.9,
    readers: "156K",
    issuesCount: 24,
    summary:
      "عندما يقع الأمل الأخير للأرض في أيدي أبطال غير متوقعين، يجب على حراس المجرة أن يتحدوا عبر الكون لمواجهة شر قديم يهدد الوجود بأكمله.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdfFile: "/pdfs/pdf4.pdf",
  },
]

export const artworks: Artwork[] = [
  {
    id: "spiderverse-1247",
    slug: "spiderverse-1247",
    title: "عالم العنكبوت إعادة تصور",
    artist: "Spider Verse",
    likes: 1247,
    views: 5632,
    image: `${COMICS_API_BASE}/content/ecomics/artfan/1.png`,
    category: "الفن الرقمي",
    description: "إعادة تصور ديناميكية لعالم العنكبوت بتفاصيل لونية مدهشة.",
  },
  {
    id: "dark-knight-returns-892",
    slug: "dark-knight-returns-892",
    title: "عودة فارس الظلام",
    artist: "Mickey Mouse",
    likes: 892,
    views: 3421,
    image: `${COMICS_API_BASE}/content/ecomics/artfan/2.png`,
    category: "تقليدي",
    description: "تصوير فني رائع للفارس المظلم يعيد إحياء الأسطورة.",
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getMagazineBySlug(slug: string) {
  return magazines.find((m) => m.slug === slug)
}

export function getArtworkBySlug(slug: string) {
  return artworks.find((a) => a.slug === slug)
}


