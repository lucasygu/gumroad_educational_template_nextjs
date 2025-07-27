'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatPostDate } from '@/lib/blog/utils'
import { BLOG_ROUTES } from '@/lib/blog/constants'
import { BlogAPI } from '@/lib/supabase/blog'
import { PostContent } from './post-content'
import type { PostWithTags } from '@/types/blog'

interface BackToBlogProps {
  className?: string
}

function BackToBlog({ className = '' }: BackToBlogProps) {
  return (
    <div className={`${className}`}>
      <Link 
        href={BLOG_ROUTES.INDEX} 
        className="text-pink-600 hover:text-pink-800 mt-4 flex items-center font-medium no-underline"
      >
        <svg 
          className="mr-1.5" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Blog
      </Link>
    </div>
  )
}

interface BlogPostPageProps {
  post: PostWithTags
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  // Increment view count when post is viewed
  useEffect(() => {
    const incrementView = async () => {
      try {
        await BlogAPI.incrementViewCount(post.id)
      } catch (error) {
        console.error('Error incrementing view count:', error)
      }
    }
    
    incrementView()
  }, [post.id])

  return (
    <div className="bg-gray min-h-screen">
      <div className="container mx-auto px-8 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <BackToBlog className="mb-6" />
          
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="mb-4 text-6xl leading-tight">
              {post.title}
            </h1>
            <time className="text-gray-600 text-lg">
              {formatPostDate(post.published_at || post.created_at)}
            </time>
          </header>

          {/* Featured Image */}
          {post.featured_image_url && (
            <figure className="mb-8 rounded-lg overflow-hidden border border-black">
              <Image
                src={post.featured_image_url}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </figure>
          )}

          {/* Post Content */}
          <div className="mx-auto grid max-w-3xl gap-6 border-b border-gray-300 py-12 text-xl">
            <PostContent content={post.content} />
          </div>

          <BackToBlog />
        </div>
      </div>
    </div>
  )
}