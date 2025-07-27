export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featured_image_url: string | null
  status: 'draft' | 'published' | 'scheduled'
  published_at: string | null
  created_at: string
  updated_at: string
  author_id: string | null
  view_count: number
  meta_description: string | null
  meta_keywords: string[] | null
}

export interface Tag {
  id: string
  name: string
  slug: string
  color: string
  description: string | null
  created_at: string
  postCount?: number
}

export interface PostTag {
  id: string
  post_id: string
  tag_id: string
}

export interface Comment {
  id: string
  post_id: string
  parent_id: string | null
  author_name: string
  author_email: string
  content: string
  approved: boolean
  created_at: string
}

export interface PostWithTags extends BlogPost {
  tags: Tag[]
}

export interface PostCardProps {
  post: PostWithTags
  titleSizeClass?: string
  usePlaceholder?: boolean
}

export interface TagFilterProps {
  tags: Tag[]
  activeTag: string | null
  onTagChange: (tag: string | null) => void
  allPostsCount: number
}

export interface BlogIndexProps {
  posts: PostWithTags[]
  tags: Tag[]
  initialTag?: string | null
}