"use client"

import { useEffect } from "react"

export function HtmlAttributes() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.documentElement
      html.setAttribute("lang", "ar")
      html.setAttribute("dir", "rtl")
      html.lang = "ar"
      html.dir = "rtl"
    }
  }, [])

  return null
}

