import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/contexts/language-context"
import { HtmlAttributes } from "@/components/html-attributes"

export const metadata: Metadata = {
  title: "موسوعة القصص المصورة - وجهتك النهائية للمجلات",
  description: "اكتشف مجلات مذهلة وشخصيات وقصص في عالمنا التفاعلي للمجلات",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, 'Cairo', 'Noto Sans Arabic', 'Amiri', sans-serif;
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="bg-[#121212] text-white antialiased">
        <LanguageProvider>
          <HtmlAttributes />
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
