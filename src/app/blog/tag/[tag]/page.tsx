import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/layout/navigation'
import { BlogIndexPage } from '@/components/blog/blog-index-page'
import { BlogAPI } from '@/lib/supabase/blog'
import { SEO_DEFAULTS } from '@/lib/blog/constants'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  try {
    const { tag: tagSlug } = await params
    const tags = await BlogAPI.getTags()
    const tag = tags.find(t => t.slug === tagSlug)
    
    if (!tag) {
      return {
        title: 'Tag Not Found',
        description: 'The requested tag could not be found.',
      }
    }

    const title = `${tag.name} - Blog`
    const description = tag.description || `Browse all posts tagged with ${tag.name}`

    return {
      title,
      description,
      keywords: [...SEO_DEFAULTS.keywords, tag.name.toLowerCase()],
      openGraph: {
        title,
        description,
        type: 'website',
        images: [SEO_DEFAULTS.image],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [SEO_DEFAULTS.image],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog Tag',
      description: SEO_DEFAULTS.description,
    }
  }
}

export default async function TagPage({ params }: TagPageProps) {
  try {
    const { tag: tagSlug } = await params
    // Verify the tag exists
    const tags = await BlogAPI.getTags()
    const tag = tags.find(t => t.slug === tagSlug)
    
    if (!tag) {
      notFound()
    }

    return (
      <div className="min-h-screen">
        <Navigation />
        <main>
          <BlogIndexPage initialTag={tagSlug} />
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error fetching tag:', error)
    notFound()
  }
}