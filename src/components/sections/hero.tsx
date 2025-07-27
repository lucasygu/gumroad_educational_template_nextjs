"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GumroadButton } from '@/components/shared/gumroad-button'
import { ParallaxCoin } from '@/components/shared/parallax-coin'
import { BodyText, Typography } from '@/components/ui/typography'

export function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-b from-gray to-white overflow-hidden"
      data-hero-parallax-container
    >
      {/* Parallax Coins */}
      <ParallaxCoin
        src="/images/coins/coin-1.png"
        alt="Floating coin 1"
        className="top-[10%] left-[5%] w-24 h-24 lg:w-32 lg:h-32"
        parallaxIntensity={0.03}
        scrollIntensity={-0.02}
      />
      <ParallaxCoin
        src="/images/coins/coin-2.png"
        alt="Floating coin 2"
        className="top-[20%] right-[8%] w-16 h-16 lg:w-20 lg:h-20"
        parallaxIntensity={0.05}
        scrollIntensity={-0.03}
      />
      <ParallaxCoin
        src="/images/coins/coin-3.png"
        alt="Floating coin 3"
        className="top-[40%] left-[8%] w-20 h-20 lg:w-24 lg:h-24"
        parallaxIntensity={0.04}
        scrollIntensity={-0.025}
      />
      <ParallaxCoin
        src="/images/coins/coin-4.png"
        alt="Floating coin 4"
        className="top-[60%] right-[10%] w-28 h-28 lg:w-32 lg:h-32"
        parallaxIntensity={0.02}
        scrollIntensity={-0.015}
      />
      <ParallaxCoin
        src="/images/coins/coin-5.png"
        alt="Floating coin 5"
        className="bottom-[20%] left-[12%] w-16 h-16 lg:w-20 lg:h-20"
        parallaxIntensity={0.06}
        scrollIntensity={-0.035}
      />
      <ParallaxCoin
        src="/images/coins/coin-6.png"
        alt="Floating coin 6"
        className="bottom-[40%] right-[5%] w-24 h-24 lg:w-28 lg:h-28"
        parallaxIntensity={0.035}
        scrollIntensity={-0.02}
      />


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <Typography 
            as="h1" 
            className="text-6xl md:text-7xl lg:text-8xl leading-none font-normal font-primary text-black mb-6"
          >
            Sell what you know
          </Typography>
          <BodyText 
            variant="body-lg" 
            className="text-xl lg:text-2xl text-black mb-8 max-w-2xl mx-auto"
          >
            Turn your passion into profit. This educational template showcases a Gumroad-inspired design 
            built with Next.js and Tailwind CSS.
          </BodyText>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full h-14 lg:h-16 px-6 pr-14 text-xl border-2 border-black rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-violet focus:border-violet transition-all font-primary"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-violet transition-colors">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="w-5 h-5 invert"
                />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <GumroadButton variant="pink" size="lg">
              Start selling for free
            </GumroadButton>
            <GumroadButton variant="light" size="lg">
              Explore products
            </GumroadButton>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center justify-center gap-2 text-black">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Typography variant="body" className="text-black">
              Educational template{' '}
              <Link 
                href="https://github.com/antiwork/gumroad" 
                className="underline hover:text-violet transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                inspired by Gumroad
              </Link>
            </Typography>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}