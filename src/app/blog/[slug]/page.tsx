import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/layout/navigation'
import { BlogPostPage } from '@/components/blog/blog-post-page'
import { BlogAPI } from '@/lib/supabase/blog'
import { SEO_DEFAULTS } from '@/lib/blog/constants'
import { generateExcerpt } from '@/lib/blog/utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await BlogAPI.getPost(slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    const description = post.meta_description || post.excerpt || generateExcerpt(post.content, 155)
    const keywords = post.meta_keywords || [...SEO_DEFAULTS.keywords]

    return {
      title: `${post.title} - Blog`,
      description,
      keywords,
      openGraph: {
        title: post.title,
        description,
        type: 'article',
        publishedTime: post.published_at || undefined,
        images: post.featured_image_url ? [post.featured_image_url] : [SEO_DEFAULTS.image],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: post.featured_image_url ? [post.featured_image_url] : [SEO_DEFAULTS.image],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog Post',
      description: SEO_DEFAULTS.description,
    }
  }
}

export default async function BlogPostPageRoute({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params
    const post = await BlogAPI.getPost(slug)
    
    if (!post) {
      notFound()
    }

    return (
      <div className="min-h-screen">
        <Navigation />
        <main>
          <BlogPostPage post={post} />
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}