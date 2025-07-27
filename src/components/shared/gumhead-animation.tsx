'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface GumheadAnimationProps {
  className?: string
}

export function GumheadAnimation({ className }: GumheadAnimationProps) {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Load the animation data from the public folder
    fetch('/images/about/gumhead.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error))
  }, [])

  if (!animationData) {
    return <div className={className} /> // Placeholder while loading
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className={className}
    />
  )
}