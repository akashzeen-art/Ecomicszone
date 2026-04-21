"use client"

import { useState } from "react"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "ar" as const, label: "العربية", flag: "🇸🇦" },
    { code: "en" as const, label: "English", flag: "🇬🇧" },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (langCode: "ar" | "en") => {
    if (langCode !== language) {
      setLanguage(langCode)
      setOpen(false) // Close dropdown after selection
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
            "hover:bg-[#FF4C60] hover:text-white shadow-sm",
            "text-[#B0B0B0] hover:text-white"
          )}
        >
          <Languages className="w-4 h-4" />
          <span className="font-medium hidden sm:inline-block">
            {currentLang?.flag} {currentLang?.label}
          </span>
          <span className="font-medium sm:hidden">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[#1E1E2F] border-[#FF4C60]/20 min-w-[150px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={(e) => {
              e.preventDefault()
              handleLanguageChange(lang.code)
            }}
            onClick={(e) => {
              e.preventDefault()
              handleLanguageChange(lang.code)
            }}
            className={cn(
              "cursor-pointer flex items-center gap-2 px-3 py-2",
              "hover:bg-[#FF4C60] hover:text-white focus:bg-[#FF4C60] focus:text-white",
              language === lang.code && "bg-[#FF4C60]/20 text-[#FF4C60]"
            )}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium flex-1">{lang.label}</span>
            {language === lang.code && (
              <span className="text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

