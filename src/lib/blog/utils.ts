import { format } from 'date-fns'

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return 'Today'
  } else if (diffInDays === 1) {
    return 'Yesterday'
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`
  } else {
    return format(date, 'MMM d, yyyy')
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = stripHtmlTags(content)
  return truncateText(plainText, maxLength)
}

export function getReadingTime(content: string): number {
  const plainText = stripHtmlTags(content)
  const wordsPerMinute = 200
  const wordCount = plainText.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function createPostUrl(slug: string): string {
  return `/blog/${slug}`
}

export function createTagUrl(tagSlug: string): string {
  return `/blog/tag/${tagSlug}`
}

export function getPostCardClass(hasImage: boolean): string {
  return `override grid h-full overflow-hidden rounded-lg border border-black bg-white text-black no-underline transition-all duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#000] ${
    hasImage ? 'grid-rows-[auto_1fr]' : ''
  }`
}

export function getTagColor(color: string): string {
  return color || '#000000'
}

export function isPostPublished(post: { status: string; published_at?: string | null }): boolean {
  if (post.status !== 'published') return false
  if (!post.published_at) return false
  return new Date(post.published_at) <= new Date()
}