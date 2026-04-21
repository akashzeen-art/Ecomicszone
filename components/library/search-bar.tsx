"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SearchBar() {
  const { translations } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])
  
  const recentSearches = ["الرجل العنكبوت", "باتمان", "المرأة المعجزة", "العاشر من الرجال"]
  const trendingSearches = ["حراس المجرة", "فرسان السايبر", "العوالم الصوفية", "أساطير الظل"]

  useEffect(() => {
    if (searchQuery.length > 0) {
      // Simulate search results
      const mockResults = [
        "سبايدر مان: في عالم العنكبوت",
        "باتمان: عودة فارس الظلام",
        "المرأة المعجزة: الولادة الجديدة",
        "رجال إكس: أيام المستقبل الماضي",
      ].filter((result) => result.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(mockResults)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  return (
    <section className="bg-gradient-to-b from-[#1E1E2F] to-[#121212] py-12">
      <div className="mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl arabic-text">
            {translations.library.search.title} <span className="text-[#FFD93D]">{translations.library.search.titleHighlight}</span>
          </h1>
          <p className="text-[#B0B0B0] text-lg arabic-text">{translations.library.search.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <Search className="top-1/2 left-4 rtl:left-auto rtl:right-4 absolute w-5 h-5 text-[#B0B0B0] -translate-y-1/2 transform" />
            <Input
              type="text"
              placeholder={translations.library.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="bg-[#1E1E2F] py-4 pr-12 pl-12 rtl:pr-12 rtl:pl-12 border-[#FF4C60]/20 focus:border-[#FF4C60] focus:ring-[#FF4C60]/20 focus:ring-2 text-white placeholder:text-[#B0B0B0] text-lg arabic-text search-input"
              dir="rtl"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="top-1/2 right-2 rtl:right-auto rtl:left-2 absolute text-[#B0B0B0] hover:text-white -translate-y-1/2 transform"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Search suggestions dropdown */}
          <AnimatePresence>
            {isSearchFocused && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="top-full right-0 left-0 z-50 absolute mt-2"
              >
                <Card className="bg-[#1E1E2F] comic-shadow border-[#FF4C60]/20">
                  <CardContent className="p-4">
                    {searchResults.length > 0 ? (
                      <div>
                        <h4 className="mb-3 font-medium text-white arabic-text">{translations.library.search.results}</h4>
                        <div className="space-y-2">
                          {searchResults.map((result, index) => (
                            <motion.div
                              key={result}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center gap-3 rtl:flex-row-reverse hover:bg-[#FF4C60]/10 p-2 rounded-lg transition-colors cursor-pointer"
                              onClick={() => setSearchQuery(result)}
                            >
                              <Search className="w-4 h-4 text-[#FF4C60]" />
                              <span className="text-white arabic-text">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="gap-6 grid md:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 rtl:flex-row-reverse mb-3">
                            <Clock className="w-4 h-4 text-[#FFD93D]" />
                            <h4 className="font-medium text-white arabic-text">{translations.library.search.recentSearches}</h4>
                          </div>
                          <div className="space-y-2">
                            {recentSearches.map((search) => (
                              <div
                                key={search}
                                className="flex items-center gap-3 rtl:flex-row-reverse hover:bg-[#FFD93D]/10 p-2 rounded-lg transition-colors cursor-pointer"
                                onClick={() => setSearchQuery(search)}
                              >
                                <Clock className="w-4 h-4 text-[#FFD93D]" />
                                <span className="text-[#B0B0B0] arabic-text">{search}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 rtl:flex-row-reverse mb-3">
                            <TrendingUp className="w-4 h-4 text-[#FF4C60]" />
                            <h4 className="font-medium text-white arabic-text">{translations.library.search.trending}</h4>
                          </div>
                          <div className="space-y-2">
                            {trendingSearches.map((search) => (
                              <div
                                key={search}
                                className="flex items-center gap-3 rtl:flex-row-reverse hover:bg-[#FF4C60]/10 p-2 rounded-lg transition-colors cursor-pointer"
                                onClick={() => setSearchQuery(search)}
                              >
                                <TrendingUp className="w-4 h-4 text-[#FF4C60]" />
                                <span className="text-[#B0B0B0] arabic-text">{search}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
