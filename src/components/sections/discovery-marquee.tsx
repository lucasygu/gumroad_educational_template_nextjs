"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DISCOVERY_TAGS } from '@/lib/constants'
import { GumroadButton } from '@/components/shared/gumroad-button'

interface MarqueeRowProps {
  tags: Array<{name: string; path: string; icon: string}>
  direction: 'left' | 'right'
  speed?: number
}

function MarqueeRow({ tags, direction }: MarqueeRowProps) {
  const animationClass = direction === 'left' 
    ? 'animate-marquee-left' 
    : 'animate-marquee-right'

  return (
    <div className="relative overflow-hidden whitespace-nowrap py-4">
      <div className={`inline-flex ${animationClass}`}>
        {/* Duplicate tags for seamless loop */}
        {[...tags, ...tags, ...tags].map((tag, index) => (
          <Link
            key={`${tag.name}-${index}`}
            href={`/discover/${tag.path}`}
            className="inline-flex items-center gap-3 mx-4 px-6 py-3 bg-white border-2 border-black rounded-full hover:bg-pink motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-150 whitespace-nowrap"
          >
            <Image
              src={tag.icon}
              alt={tag.name}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-lg font-medium text-black">
              {tag.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function DiscoveryMarquee() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="text-center mb-16 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
          Discover amazing content
        </h2>
        <p className="text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-8">
          Explore thousands of digital products from creators around the world. 
          Find your next favorite resource, course, or creative tool.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow 
          tags={DISCOVERY_TAGS[0]} 
          direction="left" 
          speed={25}
        />
        <MarqueeRow 
          tags={DISCOVERY_TAGS[1]} 
          direction="right" 
          speed={30}
        />
        <MarqueeRow 
          tags={DISCOVERY_TAGS[2]} 
          direction="left" 
          speed={35}
        />
      </div>

      <div className="text-center mt-16 px-6 lg:px-12">
        <GumroadButton variant="light" size="lg">
          Explore all categories
        </GumroadButton>
      </div>
    </section>
  )
}