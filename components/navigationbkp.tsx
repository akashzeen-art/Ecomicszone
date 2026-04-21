"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Book } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Zap },
  { href: "/library", label: "Library", icon: Book },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // ✅ Inject Google Translate script
  useEffect(() => {
    if (document.querySelector("#google-translate-script")) return

    const script = document.createElement("script")
    script.id = "google-translate-script"
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    document.body.appendChild(script)

    ;(window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,ar", // ✅ English, French, Arabic only
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      )
    }
  }, [])

  // ✅ Inject CSS to force-hide Google bar completely
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      /* 🚫 Hide Google Toolbar permanently */
      .goog-te-banner-frame.skiptranslate,
      .goog-te-gadget span,
      .goog-te-balloon-frame,
      .goog-logo-link,
      .goog-te-banner {
        display: none !important;
      }
      iframe.goog-te-banner-frame {
        display: none !important;
        height: 0 !important;
        visibility: hidden !important;
      }
      body {
        top: 0px !important;
      }

      /* ✅ Clean dropdown styling */
      #google_translate_element select {
        background-color: #3A3A55;
        color: #fff;
        border: none;
        padding: 6px 10px;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
      }
      #google_translate_element select:focus {
        outline: none;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <nav className="top-0 right-0 left-0 z-50 fixed bg-[#1E1E2F]/95 shadow-md backdrop-blur-sm border-[#FF4C60]/40 border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex justify-center items-center bg-[#FF4C60] shadow-md rounded-lg w-10 h-10 transition-all group-hover:animate-pulse-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-[#FFD93D] group-hover:text-[#FF4C60] text-2xl transition-colors">
              ComicVerse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
                      "hover:bg-[#FF4C60] hover:text-white shadow-sm",
                      isActive
                        ? "bg-[#FF4C60] text-white shadow-md"
                        : "text-[#B0B0B0] hover:text-white"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              )
            })}

            {/* ✅ Google Translate Dropdown */}
            <div id="google_translate_element" className="ml-3"></div>
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
                        "flex justify-start items-center space-x-3 px-4 py-3 rounded-lg w-full transition-all",
                        "hover:bg-[#FF4C60] hover:text-white",
                        isActive
                          ? "bg-[#FF4C60] text-white"
                          : "text-[#B0B0B0] hover:text-white"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </Link>
                )
              })}

              {/* ✅ Mobile Translate Dropdown */}
              <div id="google_translate_element_mobile" className="mt-3"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
