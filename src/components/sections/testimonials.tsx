"use client"

import React from 'react'
import { TestimonialCard } from '@/components/shared/testimonial-card'
import { TESTIMONIALS } from '@/lib/constants'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function Testimonials() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            Success stories from creators
          </h2>
          <p className="text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-8">
            Real creators sharing their journey to financial independence 
            through Gumroad.
          </p>
        </div>

        <div 
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`
                transform transition-all duration-700
                ${isIntersecting 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: isIntersecting ? `${index * 200}ms` : '0ms'
              }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                avatarPath={testimonial.avatarPath}
                name={testimonial.name}
                description={testimonial.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}