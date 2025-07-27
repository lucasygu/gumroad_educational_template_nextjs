export const BLOG_CONFIG = {
  title: 'Blog',
  description: 'Insights on digital commerce, creator economy, and product updates',
  postsPerPage: 12,
  featuredPostsCount: 3,
  recentPostsCount: 6,
  excerptLength: 160,
  metaDescriptionLength: 155,
} as const

export const POST_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published', 
  SCHEDULED: 'scheduled',
} as const

export const TAG_COLORS = [
  '#ff90e8', // Pink
  '#90a8ed', // Purple
  '#23a094', // Green
  '#ffc900', // Orange/Yellow
  '#dc341e', // Red
  '#f1f333', // Yellow
  '#b23386', // Violet
  '#000000', // Black
] as const

export const PLACEHOLDER_IMAGE = '/images/blog/post-placeholder.jpg'

export const BLOG_ROUTES = {
  INDEX: '/blog',
  POST: (slug: string) => `/blog/${slug}`,
  TAG: (tagSlug: string) => `/blog/tag/${tagSlug}`,
  SEARCH: (query: string) => `/blog/search?q=${encodeURIComponent(query)}`,
} as const

export const SEO_DEFAULTS = {
  title: 'Gumroad-Style Template Blog - Digital Commerce Insights',
  description: 'Explore insights on digital commerce, creator economy trends, product updates, and tutorials for digital entrepreneurs using this educational template.',
  keywords: ['gumroad-style', 'template', 'digital commerce', 'creator economy', 'product updates', 'tutorials', 'business'],
  image: '/images/blog/og-default.jpg',
  type: 'website',
} as const