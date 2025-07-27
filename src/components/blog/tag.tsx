import React from 'react'
import Link from 'next/link'
import { createTagUrl } from '@/lib/blog/utils'

interface TagProps {
  name: string
  slug?: string
  count?: number
  showCount?: boolean
  active?: boolean
  size?: 'sm' | 'base'
  clickable?: boolean
}

export function Tag({ 
  name, 
  slug,
  count, 
  showCount = false, 
  active = false, 
  size = 'sm',
  clickable = false
}: TagProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
  }

  const commonClasses = `inline-block rounded px-2 py-2 leading-none mr-2 mb-2`
  const activeStateClass = active ? 'bg-black text-white' : 'bg-white text-black border border-black'

  const content = (
    <span className={`${commonClasses} ${sizeClasses[size]} ${activeStateClass}`}>
      {showCount && count ? `${name} (${count})` : name}
    </span>
  )

  if (clickable && slug) {
    return (
      <Link href={createTagUrl(slug)} className="no-underline">
        {content}
      </Link>
    )
  }

  return content
}