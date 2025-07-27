/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from './client'
import type { Tag, PostWithTags } from '@/types/blog'

export class BlogAPI {
  // Get all published posts with tags
  static async getPosts(): Promise<PostWithTags[]> {
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
        return []
      }

      // For now, return posts without tags to get something working
      return (posts || []).map(post => ({
        ...post,
        tags: []
      }))

    } catch (error) {
      console.error('BlogAPI.getPosts error:', error)
      return []
    }
  }

  // Get single post by slug with tags
  static async getPost(slug: string): Promise<PostWithTags | null> {
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
        // No rows returned
        return null
      }
      console.error('Error fetching post:', error)
      throw error
    }

    return {
      ...data,
      tags: data.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
    }
  }

  // Get all tags with post counts
  static async getTags(): Promise<Tag[]> {
    try {

      // Simple tags query for now
      const { data: tags, error } = await supabase
        .from('tags')
        .select('*')
        .order('name')

      if (error) {
        console.error('Error fetching tags:', error)
        return []
      }

      // Return tags with zero counts for now to get something working
      return (tags || []).map(tag => ({
        ...tag,
        postCount: 0
      }))

    } catch (error) {
      console.error('BlogAPI.getTags error:', error)
      return []
    }
  }

  // Get featured posts (for sidebar)
  static async getFeaturedPosts(limit: number = 3): Promise<PostWithTags[]> {
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
      throw error
    }

    return (data || []).map(post => ({
      ...post,
      tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
    }))
  }

  // Increment post view count
  static async incrementViewCount(postId: string): Promise<void> {
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
  }

  // Search posts
  static async searchPosts(query: string): Promise<PostWithTags[]> {
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
      throw error
    }

    return (data || []).map(post => ({
      ...post,
      tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
    }))
  }

  // Get posts by tag
  static async getPostsByTag(tagSlug: string): Promise<PostWithTags[]> {
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
      throw error
    }

    return (data || []).map(post => ({
      ...post,
      tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
    }))
  }

  // Get recent posts (excluding featured)
  static async getRecentPosts(excludeIds: string[] = [], limit: number = 10): Promise<PostWithTags[]> {
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
      throw error
    }

    return (data || []).map(post => ({
      ...post,
      tags: post.post_tags?.map((pt: { tags: any }) => pt.tags).filter(Boolean) || []
    }))
  }
}