"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Book } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { href: "/", labelKey: "nav.home", icon: Zap },
  { href: "/library", labelKey: "nav.library", icon: Book },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t, translations } = useLanguage()

  return (
    <nav className="top-0 right-0 left-0 z-50 fixed bg-[#1E1E2F]/95 shadow-md backdrop-blur-sm border-[#FF4C60]/40 border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 rtl:flex-row-reverse">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2 rtl:space-x-reverse rtl:flex-row-reverse">
            <div className="flex justify-center items-center bg-[#FF4C60] shadow-md rounded-lg w-8 h-8 sm:w-10 sm:h-10 transition-all group-hover:animate-pulse-glow">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span 
              className="font-bold text-[#FFD93D] group-hover:text-[#FF4C60] text-lg sm:text-xl md:text-2xl transition-colors arabic-text"
              suppressHydrationWarning
            >
              {translations.nav.logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse rtl:flex-row-reverse">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-2 rtl:space-x-reverse rtl:flex-row-reverse px-4 py-2 rounded-lg transition-all duration-200 arabic-text",
                      "hover:bg-[#FF4C60] hover:text-white shadow-sm",
                      isActive
                        ? "bg-[#FF4C60] text-white shadow-md"
                        : "text-[#B0B0B0] hover:text-white"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{t(item.labelKey)}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-[#FF4C60]/10 text-[#FFD93D] hover:text-[#FF4C60]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-[#FF4C60]/20 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex justify-start items-center space-x-3 rtl:space-x-reverse rtl:flex-row-reverse rtl:justify-end px-4 py-3 rounded-lg w-full transition-all arabic-text",
                        "hover:bg-[#FF4C60] hover:text-white",
                        isActive
                          ? "bg-[#FF4C60] text-white"
                          : "text-[#B0B0B0] hover:text-white"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{t(item.labelKey)}</span>
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
