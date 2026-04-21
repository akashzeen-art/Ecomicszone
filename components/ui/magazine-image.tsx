"use client"

import { useState } from "react"

interface MagazineImageProps {
  src: string
  alt: string
  className?: string
}

export function MagazineImage({ src, alt, className = "" }: MagazineImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc("/placeholder.jpg")
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  )
}

