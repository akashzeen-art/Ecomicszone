"use client"

import { useState, useCallback } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  containerClassName?: string
}

// Tiny blur placeholder - dark gray base64
const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIDBAAFERITITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Aw3T7GoV7cMttIpYUkVpERiVLAHcBiO2cb9/MXU9W1C7qFyxJdnaSaVpGYyNuSxJJ/TjGMZJLDozdj//Z"

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  fill,
  width,
  height,
  sizes,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoaded(true)
  }, [])

  // Fallback for broken images
  const imageSrc = hasError ? "/placeholder.svg" : src

  return (
    <div 
      className={cn(
        "thumbnail-container relative overflow-hidden",
        !isLoaded && "img-loading",
        containerClassName
      )}
      style={fill ? { width: '100%', height: '100%' } : undefined}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className={cn(
          "gpu-accelerate transition-opacity duration-300",
          isLoaded ? "img-loaded opacity-100" : "opacity-0",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        {...props}
      />
    </div>
  )
}

export default OptimizedImage

