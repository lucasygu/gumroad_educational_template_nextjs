"use client"

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { GumroadButton } from '@/components/shared/gumroad-button'
import { Typography } from '@/components/ui/typography'

const features = [
  {
    title: "Easy to use",
    description: "Upload your files, set a price, and start selling in minutes. No coding required.",
    icon: "/icons/features/upload.svg",
    color: "bg-pink"
  },
  {
    title: "Global reach",
    description: "Sell to customers worldwide with built-in payment processing and tax handling.",
    icon: "/icons/features/globe.svg", 
    color: "bg-purple"
  },
  {
    title: "Keep more money",
    description: "Only 5% + 25¢ per transaction. No monthly fees, no hidden costs.",
    icon: "/icons/features/money.svg",
    color: "bg-green"
  },
  {
    title: "Analytics & insights",
    description: "Track your sales, understand your customers, and grow your business.",
    icon: "/icons/features/analytics.svg",
    color: "bg-orange"
  }
]

export function FeatureCards() {

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Typography 
            as="h2" 
            variant="display-sm" 
            weight="bold" 
            color="primary" 
            className="mb-6"
          >
            Why creators choose this platform
          </Typography>
          <Typography 
            variant="body-lg" 
            color="primary" 
            className="max-w-3xl mx-auto"
          >
            Everything you need to turn your passion into profit, 
            with the tools and support to help you succeed.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`
                p-8 lg:p-12 border-2 border-black rounded-3xl bg-white
                transform transition-all duration-150 motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]
              `}
            >
              <div className="flex flex-col items-start">
                <div className={`
                  w-16 h-16 rounded-2xl ${feature.color} 
                  flex items-center justify-center mb-6
                  border-2 border-black
                `}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <Typography 
                  as="h3" 
                  variant="card-title" 
                  weight="bold" 
                  color="primary" 
                  className="mb-4"
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body-lg" 
                  color="primary"
                >
                  {feature.description}
                </Typography>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <GumroadButton variant="pink" size="lg">
            Get started for free
          </GumroadButton>
        </div>
      </div>
    </section>
  )
}