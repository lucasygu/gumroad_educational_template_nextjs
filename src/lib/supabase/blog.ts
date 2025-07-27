/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase, isSupabaseConfigured } from './client'
import { mockPosts, mockTags } from '@/lib/blog/mock-data'
import type { Tag, PostWithTags } from '@/types/blog'

export class BlogAPI {
  // Get all published posts with tags
  static async getPosts(): Promise<PostWithTags[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockPosts
    }

    try {
      // Simple direct query
      const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false })

      if (error) {
        console.error('Error fetching posts:', error)
        return mockPosts // Fallback to mock data
      }

      // For now, return posts without tags to get something working
      return (posts || []).map(post => ({
        ...post,
        tags: []
      }))

    } catch (error) {
      console.error('BlogAPI.getPosts error:', error)
      return mockPosts // Fallback to mock data
    }
  }

  // Get single post by slug with tags
  static async getPost(slug: string): Promise<PostWithTags | null> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockPosts.find(post => post.slug === slug) || null
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          post_tags (
            tags (*)
          )
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - check mock data as fallback
          return mockPosts.find(post => post.slug === slug) || null
        }
        console.error('Error fetching post:', error)
        return mockPosts.find(post => post.slug === slug) || null
      }

      return {
        ...data,
        tags: data.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
      }
    } catch (error) {
      console.error('BlogAPI.getPost error:', error)
      return mockPosts.find(post => post.slug === slug) || null
    }
  }

  // Get all tags with post counts
  static async getTags(): Promise<Tag[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockTags.map(tag => ({
        ...tag,
        postCount: mockPosts.filter(post => 
          post.tags.some(postTag => postTag.id === tag.id)
        ).length
      }))
    }

    try {
      // Simple tags query for now
      const { data: tags, error } = await supabase
        .from('tags')
        .select('*')
        .order('name')

      if (error) {
        console.error('Error fetching tags:', error)
        return mockTags // Fallback to mock data
      }

      // Return tags with zero counts for now to get something working
      return (tags || []).map(tag => ({
        ...tag,
        postCount: 0
      }))

    } catch (error) {
      console.error('BlogAPI.getTags error:', error)
      return mockTags // Fallback to mock data
    }
  }

  // Get featured posts (for sidebar)
  static async getFeaturedPosts(limit: number = 3): Promise<PostWithTags[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockPosts
        .sort((a, b) => (b.view_count || 0) - (a.view_count || 0))
        .slice(0, limit)
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          post_tags (
            tags (*)
          )
        `)
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .order('view_count', { ascending: false })
        .order('published_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Error fetching featured posts:', error)
        return mockPosts.slice(0, limit) // Fallback to mock data
      }

      return (data || []).map(post => ({
        ...post,
        tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
      }))
    } catch (error) {
      console.error('BlogAPI.getFeaturedPosts error:', error)
      return mockPosts.slice(0, limit) // Fallback to mock data
    }
  }

  // Increment post view count
  static async incrementViewCount(postId: string): Promise<void> {
    // Skip if Supabase is not configured (demo mode)
    if (!isSupabaseConfigured) {
      return
    }

    try {
      // First get current count, then increment
      const { data: currentPost } = await supabase
        .from('posts')
        .select('view_count')
        .eq('id', postId)
        .single()

      if (currentPost) {
        const { error } = await supabase
          .from('posts')
          .update({ 
            view_count: (currentPost.view_count || 0) + 1
          })
          .eq('id', postId)

        if (error) {
          console.error('Error incrementing view count:', error)
          // Don't throw error for view counting - it's not critical
        }
      }
    } catch (error) {
      console.error('BlogAPI.incrementViewCount error:', error)
      // Don't throw error for view counting - it's not critical
    }
  }

  // Search posts
  static async searchPosts(query: string): Promise<PostWithTags[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      const lowercaseQuery = query.toLowerCase()
      return mockPosts.filter(post => 
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(lowercaseQuery))
      )
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          post_tags (
            tags (*)
          )
        `)
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`)
        .order('published_at', { ascending: false })

      if (error) {
        console.error('Error searching posts:', error)
        return [] // Return empty for search errors
      }

      return (data || []).map(post => ({
        ...post,
        tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
      }))
    } catch (error) {
      console.error('BlogAPI.searchPosts error:', error)
      return [] // Return empty for search errors
    }
  }

  // Get posts by tag
  static async getPostsByTag(tagSlug: string): Promise<PostWithTags[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockPosts.filter(post => 
        post.tags.some(tag => tag.slug === tagSlug)
      )
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          post_tags!inner (
            tags!inner (
              id,
              name,
              slug,
              color,
              description
            )
          )
        `)
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .eq('post_tags.tags.slug', tagSlug)
        .order('published_at', { ascending: false })

      if (error) {
        console.error('Error fetching posts by tag:', error)
        return mockPosts.filter(post => 
          post.tags.some(tag => tag.slug === tagSlug)
        )
      }

      return (data || []).map(post => ({
        ...post,
        tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
      }))
    } catch (error) {
      console.error('BlogAPI.getPostsByTag error:', error)
      return mockPosts.filter(post => 
        post.tags.some(tag => tag.slug === tagSlug)
      )
    }
  }

  // Get recent posts (excluding featured)
  static async getRecentPosts(excludeIds: string[] = [], limit: number = 10): Promise<PostWithTags[]> {
    // Use mock data if Supabase is not configured
    if (!isSupabaseConfigured) {
      return mockPosts
        .filter(post => !excludeIds.includes(post.id))
        .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
        .slice(0, limit)
    }

    try {
      let query = supabase
        .from('posts')
        .select(`
          *,
          post_tags (
            tags (*)
          )
        `)
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false })
        .limit(limit)

      if (excludeIds.length > 0) {
        query = query.not('id', 'in', `(${excludeIds.join(',')})`)
      }

      const { data, error } = await query

      if (error) {
        console.error('Error fetching recent posts:', error)
        return mockPosts.slice(0, limit) // Fallback to mock data
      }

      return (data || []).map(post => ({
        ...post,
        tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
      }))
    } catch (error) {
      console.error('BlogAPI.getRecentPosts error:', error)
      return mockPosts.slice(0, limit) // Fallback to mock data
    }
  }
}