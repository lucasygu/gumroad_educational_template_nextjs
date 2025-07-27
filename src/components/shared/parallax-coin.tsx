"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { useParallax } from '@/hooks/use-parallax'

interface ParallaxCoinProps {
  src: string
  alt: string
  className: string
  parallaxIntensity: number
  scrollIntensity: number
}

export function ParallaxCoin({
  src,
  alt,
  className,
  parallaxIntensity,
  scrollIntensity
}: ParallaxCoinProps) {
  const coinRef = useRef<HTMLDivElement>(null)
  
  useParallax({
    elementRef: coinRef,
    mouseIntensity: parallaxIntensity,
    scrollIntensity: scrollIntensity
  })

  return (
    <div
      ref={coinRef}
      className={`hero-coin absolute z-[1] ${className}`}
      data-parallax-intensity={parallaxIntensity}
      data-scroll-intensity={scrollIntensity}
    >
      <Image
        src={src}
        alt={alt}
        width={192}
        height={192}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  )
}