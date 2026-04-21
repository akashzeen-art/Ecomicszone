// Comic data generated from comic_path_sheet.xlsx
// Base URL for the comics API
export const COMICS_BASE_URL = "https://api.ameora.fun"

export interface Comic {
  id: number
  slug: string
  title: string
  titleAr: string
  series: string
  seriesAr: string
  episode: number
  rating: number
  views: string
  downloads: string
  readers: string
  subscribers: string
  parts: number
  image: string // Thumbnail URL
  pdfFile: string // PDF URL
  genre: string
  genreAr: string
  rank: number
  shortDescription: string
  fullDescription: string
}

// Batman Comics (50 comics)
export const batmanComics: Comic[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  slug: `batman-${i + 1}`,
  title: `Batman Episode ${i + 1}`,
  titleAr: `باتمان الحلقة ${i + 1}`,
  series: "batman",
  seriesAr: "باتمان",
  episode: i + 1,
  rating: 4.5 + Math.random() * 0.4,
  views: `${Math.floor(300 + Math.random() * 400)}K`,
  downloads: `${Math.floor(100 + Math.random() * 200)}K`,
  readers: `${Math.floor(300 + Math.random() * 400)}K`,
  subscribers: `${Math.floor(200 + Math.random() * 200)}K`,
  parts: Math.floor(8 + Math.random() * 8),
  image: `${COMICS_BASE_URL}/content/comics/batman/bmp${i + 1}/bmth${i + 1}.png`,
  pdfFile: `${COMICS_BASE_URL}/content/comics/batman/bmp${i + 1}/bms${i + 1}.pdf`,
  genre: "superhero",
  genreAr: "الأبطال الخارقين",
  rank: i + 1,
  shortDescription: `مغامرات باتمان المثيرة - الحلقة ${i + 1}`,
  fullDescription: `استمتع بمغامرات الفارس المظلم في هذه الحلقة المليئة بالإثارة والتشويق. باتمان يواجه أعداءه في مدينة جوثام.`,
}))

// Donald Duck Comics (10 comics)
export const donaldDuckComics: Comic[] = Array.from({ length: 10 }, (_, i) => ({
  id: 51 + i,
  slug: `donald-duck-${i + 1}`,
  title: `Donald Duck Episode ${i + 1}`,
  titleAr: `بطوط الحلقة ${i + 1}`,
  series: "donald_duck",
  seriesAr: "بطوط",
  episode: i + 1,
  rating: 4.3 + Math.random() * 0.5,
  views: `${Math.floor(200 + Math.random() * 300)}K`,
  downloads: `${Math.floor(80 + Math.random() * 150)}K`,
  readers: `${Math.floor(200 + Math.random() * 300)}K`,
  subscribers: `${Math.floor(150 + Math.random() * 150)}K`,
  parts: Math.floor(6 + Math.random() * 6),
  image: `${COMICS_BASE_URL}/content/comics/donald_duck/ddp${i + 1}/ddth${i + 1}.png`,
  pdfFile: `${COMICS_BASE_URL}/content/comics/donald_duck/ddp${i + 1}/dds${i + 1}.pdf`,
  genre: "comedy",
  genreAr: "كوميديا",
  rank: 51 + i,
  shortDescription: `مغامرات بطوط الكوميدية - الحلقة ${i + 1}`,
  fullDescription: `انضم إلى بطوط في مغامراته الكوميدية المضحكة مع أبناء أخيه حظوظ وفظوظ ولظوظ.`,
}))

// Mickey Mouse Comics (18 comics)
export const mickeyMouseComics: Comic[] = Array.from({ length: 18 }, (_, i) => ({
  id: 61 + i,
  slug: `mickey-mouse-${i + 1}`,
  title: `Mickey Mouse Episode ${i + 1}`,
  titleAr: `ميكي ماوس الحلقة ${i + 1}`,
  series: "mickey_mouse",
  seriesAr: "ميكي ماوس",
  episode: i + 1,
  rating: 4.4 + Math.random() * 0.4,
  views: `${Math.floor(250 + Math.random() * 350)}K`,
  downloads: `${Math.floor(90 + Math.random() * 180)}K`,
  readers: `${Math.floor(250 + Math.random() * 350)}K`,
  subscribers: `${Math.floor(180 + Math.random() * 180)}K`,
  parts: Math.floor(7 + Math.random() * 7),
  image: `${COMICS_BASE_URL}/content/comics/mickey_mouse/mmp${i + 1}/mmth${i + 1}.png`,
  pdfFile: `${COMICS_BASE_URL}/content/comics/mickey_mouse/mmp${i + 1}/mms${i + 1}.pdf`,
  genre: "adventure",
  genreAr: "مغامرات",
  rank: 61 + i,
  shortDescription: `مغامرات ميكي ماوس - الحلقة ${i + 1}`,
  fullDescription: `انطلق مع ميكي ماوس في مغامرة جديدة مليئة بالمرح والإثارة مع أصدقائه.`,
}))

// All comics combined
export const allComics: Comic[] = [...batmanComics, ...donaldDuckComics, ...mickeyMouseComics]

// Get comic by slug
export function getComicBySlug(slug: string): Comic | undefined {
  return allComics.find((comic) => comic.slug === slug)
}

// Get comics by series
export function getComicsBySeries(series: string): Comic[] {
  return allComics.filter((comic) => comic.series === series)
}

// Get comics by genre
export function getComicsByGenre(genre: string): Comic[] {
  return allComics.filter((comic) => comic.genre === genre)
}

// Series metadata
export const comicSeries = [
  {
    id: "batman",
    name: "Batman",
    nameAr: "باتمان",
    description: "مغامرات الفارس المظلم",
    count: batmanComics.length,
    image: `${COMICS_BASE_URL}/content/comics/batman/bmp1/bmth1.png`,
  },
  {
    id: "donald_duck",
    name: "Donald Duck",
    nameAr: "بطوط",
    description: "مغامرات بطوط الكوميدية",
    count: donaldDuckComics.length,
    image: `${COMICS_BASE_URL}/content/comics/donald_duck/ddp1/ddth1.png`,
  },
  {
    id: "mickey_mouse",
    name: "Mickey Mouse",
    nameAr: "ميكي ماوس",
    description: "مغامرات ميكي ماوس",
    count: mickeyMouseComics.length,
    image: `${COMICS_BASE_URL}/content/comics/mickey_mouse/mmp1/mmth1.png`,
  },
]

