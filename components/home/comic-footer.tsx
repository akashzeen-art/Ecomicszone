"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ComicFooter() {
  const { translations } = useLanguage()
  
  const companyLinks = [
    { name: "الشروط والأحكام", href: "/terms" },
    { name: "سياسة الخصوصية", href: "/privacy" },
  ]

  return (
    <footer className="relative bg-[#1E1E2F] border-[#FF4C60] border-t-2">
      <div className="mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* Top Section: Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex md:flex-row flex-col justify-between gap-10 md:gap-16 rtl:flex-row-reverse"
        >
          {/* Logo & Description */}
          <div className="flex-[1.2] min-w-[250px]">
            <Link href="/" className="group flex items-center gap-3 rtl:flex-row-reverse mb-6">
              <div className="flex justify-center items-center bg-[#FF4C60] comic-shadow rounded-lg w-12 h-12 transition-all group-hover:animate-pulse-glow">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-[#FFD93D] group-hover:text-[#FF4C60] text-3xl transition-colors arabic-text">
                إيكوميكسزون
              </span>
            </Link>
            <p className="text-[#B0B0B0] leading-relaxed arabic-text">
              وجهتك النهائية للمجلات، تربط القراء بقصص مذهلة ومبدعين موهوبين.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mt-6 text-[#B0B0B0] text-sm">
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <Mail className="w-4 h-4 text-[#FF4C60]" />
                <span className="arabic-text">hello@e-magazine.com</span>
              </div>
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <Phone className="w-4 h-4 text-[#FF4C60]" />
                <span className="arabic-text">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <MapPin className="w-4 h-4 text-[#FF4C60]" />
                <span className="arabic-text">سان فرانسيسكو، كاليفورنيا</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 max-w-md">
            <h3 className="mb-3 font-bold text-white text-xl arabic-text">ابق على اطلاع</h3>
            <p className="mb-5 text-[#B0B0B0] text-sm md:text-base arabic-text">
              احصل على أحدث المجلات والتحديثات مباشرة إلى بريدك الإلكتروني.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 rtl:flex-row-reverse">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-[#121212] border-[#FF4C60]/30 focus-visible:ring-[#FF4C60] text-white placeholder:text-[#777777] arabic-text"
                dir="rtl"
              />
              <Button className="w-full sm:w-auto bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow text-white arabic-text">
                اشترك
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Copyright + Terms/Privacy */}
      <div className="bg-[#121212] border-[#FF4C60]/20 border-t">
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 mx-auto px-4 py-6 max-w-7xl rtl:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#B0B0B0] text-sm arabic-text"
          >
            © 2024 إيكوميكسزون. جميع الحقوق محفوظة. مصمم بشغف لعشاق القصص المصورة.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 text-sm rtl:flex-row-reverse"
          >
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#B0B0B0] hover:text-[#FFD93D] transition-colors arabic-text"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
