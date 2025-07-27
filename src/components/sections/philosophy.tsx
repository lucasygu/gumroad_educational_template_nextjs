"use client"

import React from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function Philosophy() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div 
            ref={elementRef as React.RefObject<HTMLDivElement>}
            className={`
              transform transition-all duration-700
              ${isIntersecting 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-8 opacity-0'
              }
            `}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              We believe creativity should be rewarded
            </h2>
            <div className="space-y-6 text-lg lg:text-xl text-black leading-8">
              <p>
                This educational template demonstrates how modern platforms can be built to help creators 
                make a living from their work. It showcases a clean, effective design 
                for selling digital products directly to your audience.
              </p>
              <p>
                Whether you&apos;re an artist, writer, musician, or educator, modern platforms give 
                you the tools to turn your passion into profit. No gatekeepers, no 
                complex approval processes – just you and your customers.
              </p>
              <p>
                The platform handles the technical stuff so you can focus on what you do best: 
                creating amazing content that people love.
              </p>
            </div>
          </div>

          {/* Right Column - Animation/Image */}
          <div 
            className={`
              relative transform transition-all duration-700 delay-300
              ${isIntersecting 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
              }
            `}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder for Lottie animation - using image for now */}
              <div className="w-full h-full bg-white rounded-3xl border-2 border-black flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-pink rounded-full border-2 border-black mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/icons/heart.svg"
                      alt="Heart"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Made with love
                  </h3>
                  <p className="text-black">
                    For creators, by creators
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange rounded-full border-2 border-black flex items-center justify-center">
                <Image
                  src="/icons/star.svg"
                  alt="Star"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple rounded-full border-2 border-black flex items-center justify-center">
                <Image
                  src="/icons/sparkle.svg"
                  alt="Sparkle"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}