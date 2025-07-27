"use client"

import { useEffect, useRef } from 'react'

interface UseParallaxProps {
  elementRef: React.RefObject<HTMLElement | null>
  mouseIntensity?: number
  scrollIntensity?: number
}

export function useParallax({
  elementRef,
  mouseIntensity = 0.05,
  scrollIntensity = -0.05
}: UseParallaxProps) {
  const animationFrameRef = useRef<number | undefined>(undefined)
  const targetPositionRef = useRef({ x: 0, y: 0 })
  const currentPositionRef = useRef({ x: 0, y: 0 })
  const scrollOffsetRef = useRef(0)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    if (mediaQuery.matches) return

    // Linear interpolation function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    // Animation loop
    const animate = () => {
      currentPositionRef.current.x = lerp(
        currentPositionRef.current.x,
        targetPositionRef.current.x,
        0.1
      )
      currentPositionRef.current.y = lerp(
        currentPositionRef.current.y,
        targetPositionRef.current.y,
        0.1
      )

      const combinedY = currentPositionRef.current.y + scrollOffsetRef.current

      element.style.transform = `translate3d(${currentPositionRef.current.x}px, ${combinedY}px, 0)`
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const container = element.closest('[data-hero-parallax-container]')
      if (!container) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = event.clientX - centerX
      const deltaY = event.clientY - centerY

      targetPositionRef.current.x = deltaX * mouseIntensity
      targetPositionRef.current.y = deltaY * mouseIntensity
    }

    // Scroll handler
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * scrollIntensity
    }

    // Throttle function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const throttle = (func: (...args: any[]) => void, limit: number) => {
      let lastFunc: NodeJS.Timeout
      let lastRan: number
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return function(...args: any[]) {
        if (!lastRan) {
          func(...args)
          lastRan = Date.now()
        } else {
          clearTimeout(lastFunc)
          lastFunc = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
              func(...args)
              lastRan = Date.now()
            }
          }, limit - (Date.now() - lastRan))
        }
      }
    }

    const throttledMouseMove = throttle(handleMouseMove, 16)
    const throttledScroll = throttle(handleScroll, 16)

    // Event listeners
    const container = element.closest('[data-hero-parallax-container]')
    const isTouchDeviceOrSmallScreen = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024

    if (container && !isTouchDeviceOrSmallScreen) {
      container.addEventListener('mousemove', throttledMouseMove)
    }

    window.addEventListener('scroll', throttledScroll)
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate)
    handleScroll() // Initial scroll position

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (container) {
        container.removeEventListener('mousemove', throttledMouseMove)
      }
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [elementRef, mouseIntensity, scrollIntensity])
}