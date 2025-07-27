import React from 'react'
import { PostCard } from './post-card'
import type { PostWithTags } from '@/types/blog'

interface FeaturedPostProps {
  post: PostWithTags
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  if (!post) {
    return (
      <div className="text-gray-600 border-gray-300 flex min-h-[300px] items-center justify-center rounded border-2 border-dashed p-8 text-center">
        No featured post available.
      </div>
    )
  }

  return (
    <PostCard 
      post={post} 
      titleSizeClass="text-2xl md:text-4xl" 
      usePlaceholder={true} 
    />
  )
}