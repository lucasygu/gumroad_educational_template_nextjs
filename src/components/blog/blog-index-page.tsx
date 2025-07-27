'use client'

import React, { useState, useMemo } from 'react'
import { useBlogPosts, useBlogTags } from '@/hooks/use-blog-posts'
import { PostCard } from './post-card'
import { FeaturedPost } from './featured-post'
import { CompactPostList } from './compact-post-list'
import { TagFilter } from './tag-filter'
import { BlogHeader } from './blog-header'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface BlogIndexPageProps {
  initialTag?: string | null
}

export function BlogIndexPage({ initialTag = null }: BlogIndexPageProps) {
  const [activeTag, setActiveTag] = useState<string | null>(initialTag)
  
  const { data: posts, isLoading: postsLoading, error: postsError } = useBlogPosts(activeTag)
  const { data: tags, isLoading: tagsLoading } = useBlogTags()

  const { featuredPost, recentPosts, gridPosts } = useMemo(() => {
    if (!posts || posts.length === 0) {
      return { featuredPost: null, recentPosts: [], gridPosts: [] }
    }

    // When filtering by tag, don't separate featured vs grid
    if (activeTag) {
      return {
        featuredPost: null,
        recentPosts: [],
        gridPosts: posts
      }
    }

    // For main blog page, separate featured post
    return {
      featuredPost: posts[0] || null,
      recentPosts: posts.slice(1, 4),
      gridPosts: posts.slice(1)
    }
  }, [posts, activeTag])

  if (postsError) {
    return (
      <div className="container mx-auto px-8 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h1>
          <p className="text-gray-600">Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray min-h-screen">
      <div className="container mx-auto px-8 py-24 sm:px-6 lg:px-8">
        <BlogHeader />
        
        {/* Tag Filter */}
        {tags && (
          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
            allPostsCount={posts?.length || 0}
          />
        )}

        {postsLoading || tagsLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {/* Featured Post + Sidebar Layout (only when not filtering by tag) */}
            {!activeTag && featuredPost && (
              <div className="mb-8 flex flex-row items-start lg:gap-[1.875rem]">
                <section className="mb-0 w-full lg:mb-0 lg:w-[calc(67%-0.9375rem)]">
                  <FeaturedPost post={featuredPost} />
                </section>
                <CompactPostList 
                  posts={recentPosts} 
                  className="hidden w-full lg:mb-0 lg:block lg:w-[calc(33%-0.9375rem)]"
                />
              </div>
            )}

            {/* Posts Grid */}
            <section className="mt-8">
              {gridPosts && gridPosts.length > 0 ? (
                <div className="override grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {gridPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-lg">
                    {activeTag ? 'No posts found for this tag.' : 'No posts found.'}
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  )
}