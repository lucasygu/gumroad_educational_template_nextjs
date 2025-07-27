'use client'

import useSWR from 'swr'
import { BlogAPI } from '@/lib/supabase/blog'
import type { PostWithTags, Tag } from '@/types/blog'

export const useBlogPosts = (tagSlug?: string | null) => {
  return useSWR<PostWithTags[]>(
    ['posts', tagSlug], 
    () => {
      if (tagSlug) {
        return BlogAPI.getPostsByTag(tagSlug)
      }
      return BlogAPI.getPosts()
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
    }
  )
}

export const useBlogPost = (slug: string) => {
  return useSWR<PostWithTags | null>(
    ['post', slug], 
    () => BlogAPI.getPost(slug),
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  )
}

export const useBlogTags = () => {
  return useSWR<Tag[]>(
    'tags', 
    BlogAPI.getTags,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  )
}

export const useFeaturedPosts = (limit: number = 3) => {
  return useSWR<PostWithTags[]>(
    ['featured-posts', limit], 
    () => BlogAPI.getFeaturedPosts(limit),
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  )
}

export const useRecentPosts = (excludeIds: string[] = [], limit: number = 10) => {
  return useSWR<PostWithTags[]>(
    ['recent-posts', excludeIds, limit], 
    () => BlogAPI.getRecentPosts(excludeIds, limit),
    {
      revalidateOnFocus: false,
      dedupingInterval: 180000, // 3 minutes
    }
  )
}