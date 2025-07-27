import React from 'react'
import Link from 'next/link'
import { formatPostDate, createPostUrl } from '@/lib/blog/utils'
import type { PostWithTags } from '@/types/blog'

interface CompactPostItemProps {
  post: PostWithTags
}

function CompactPostItem({ post }: CompactPostItemProps) {
  return (
    <li className="border-gray-300 py-4 first:pt-0">
      <Link 
        href={createPostUrl(post.slug)} 
        className="hover:text-pink-600 group flex items-end justify-between text-black no-underline"
      >
        <div className="override grid grid-cols-1 gap-1">
          <h4 className="mb-0.5 text-2xl font-normal">{post.title}</h4>
          <p className="text-gray-500 pb-0.5 text-base">
            {formatPostDate(post.published_at || post.created_at)}
          </p>
        </div>
        <div className="border-gray-400 ml-3 mr-1 flex h-10 w-10 flex-shrink-0 items-center justify-center self-end rounded-md border p-2 transition-all duration-200 ease-in-out group-hover:-translate-x-px group-hover:-translate-y-px group-hover:shadow-[2px_2px_0_0_#000]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </li>
  )
}

interface CompactPostListProps {
  posts: PostWithTags[]
  className?: string
}

export function CompactPostList({ posts, className = '' }: CompactPostListProps) {
  return (
    <div className={`flex h-full flex-col ${className}`}>
      {posts.length > 0 ? (
        <ul className="flex-grow divide-y overflow-y-auto">
          {posts.map((post) => (
            <CompactPostItem key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No recent posts.</p>
      )}
    </div>
  )
}