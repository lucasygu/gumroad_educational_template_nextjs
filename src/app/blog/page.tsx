import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { BlogIndexPage } from '@/components/blog/blog-index-page'
import { SEO_DEFAULTS } from '@/lib/blog/constants'

export const metadata: Metadata = {
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
  keywords: [...SEO_DEFAULTS.keywords],
  openGraph: {
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    type: 'website',
    images: [SEO_DEFAULTS.image],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.image],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogIndexPage />
      </main>
    </div>
  )
}