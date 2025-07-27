"use client"

import React from 'react'
import { GumroadButton } from '@/components/shared/gumroad-button'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const stats = [
  {
    number: "$1B+",
    label: "paid to creators",
    color: "text-pink"
  },
  {
    number: "10M+", 
    label: "products sold",
    color: "text-purple"
  },
  {
    number: "2M+",
    label: "active creators",
    color: "text-green"
  },
  {
    number: "5%",
    label: "platform fee",
    color: "text-orange"
  }
]

export function Revenue() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            Join the creator economy
          </h2>
          <p className="text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-8">
            Thousands of creators are already making money with Gumroad. 
            Your turn to join them.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center transform transition-all duration-700
                ${isIntersecting 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: isIntersecting ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className={`text-5xl lg:text-7xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-lg lg:text-xl text-black font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Calculator Preview */}
        <div className="bg-gray rounded-3xl border-2 border-black p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              See your potential earnings
            </h3>
            <p className="text-lg lg:text-xl text-black">
              Calculate how much you could make selling with this platform
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-lg font-medium text-black mb-2">
                  Product price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-black">
                    $
                  </span>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full h-14 pl-8 pr-4 text-xl border-2 border-black rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-violet focus:border-violet transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-black mb-2">
                  Sales per month
                </label>
                <input
                  type="number"
                  defaultValue="100"
                  className="w-full h-14 px-4 text-xl border-2 border-black rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-violet focus:border-violet transition-all"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-black p-6 mb-8">
              <div className="flex justify-between items-center text-lg mb-2">
                <span className="text-black">Gross revenue</span>
                <span className="font-bold text-black">$1,000</span>
              </div>
              <div className="flex justify-between items-center text-lg mb-2">
                <span className="text-black">Platform fee (5% + 25¢)</span>
                <span className="font-bold text-black">-$75</span>
              </div>
              <hr className="border-black my-4" />
              <div className="flex justify-between items-center text-xl">
                <span className="font-bold text-black">Your earnings</span>
                <span className="font-bold text-green text-2xl">$925</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <GumroadButton variant="pink" size="lg">
            Start earning today
          </GumroadButton>
        </div>
      </div>
    </section>
  )
}