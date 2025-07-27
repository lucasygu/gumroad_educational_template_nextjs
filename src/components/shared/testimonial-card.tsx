import React from 'react'
import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  avatarPath: string
  name: string
  description: string
}

export function TestimonialCard({ quote, avatarPath, name, description }: TestimonialCardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-dark-gray/50 rounded-3xl px-8 py-4 relative rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-sm">
        <div className="mb-4">
          <Image
            src="/icons/quote-squared.svg"
            alt="Quote squared"
            width={20}
            height={14}
            className="w-5 h-3"
          />
        </div>
        <p className="text-black text-xl leading-8 font-medium">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-4 pl-2">
        <div className="rounded-full p-1">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={avatarPath}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-black text-lg">{name}</h3>
          <p className="text-black text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}