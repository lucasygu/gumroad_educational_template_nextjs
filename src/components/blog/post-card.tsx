import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, createPostUrl } from '@/lib/blog/utils'
import { Tag } from './tag'
import type { PostCardProps } from '@/types/blog'

const placeholderImage = '/images/blog/post-placeholder.jpg'

export function PostCard({ 
  post, 
  titleSizeClass = "text-2xl", 
  usePlaceholder = false 
}: PostCardProps) {
  const featureImageUrl = post.featured_image_url || (usePlaceholder ? placeholderImage : null)
  const showExcerpt = !featureImageUrl && post.excerpt

  return (
    <article className="h-full">
      <Link
        href={createPostUrl(post.slug)}
        className="override grid h-full overflow-hidden rounded-lg border border-black bg-white text-black no-underline transition-all duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#000] grid-rows-[auto_1fr]"
      >
        {/* Featured Image */}
        {featureImageUrl && (
          <figure className="aspect-[1800/1080] overflow-hidden border-b border-black">
            <Image
              src={featureImageUrl}
              alt={post.title}
              width={1800}
              height={1080}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        )}

        {/* Content */}
        <div className="flex h-full flex-grow flex-col space-y-2 p-6">
          <h3 className={`flex-none leading-tight ${titleSizeClass}`}>
            {post.title}
          </h3>
          
          {showExcerpt && (
            <div className="relative flex-1">
              <p className="text-base inset-0 flex-1 overflow-hidden text-ellipsis text-gray-600 opacity-90 line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          )}
          
          {!showExcerpt && <div className="flex-1" />}
          
          <p className="text-base flex-none text-gray-600">
            {formatPostDate(post.published_at || post.created_at)}
          </p>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-none flex-row flex-wrap">
              {post.tags.map((tag) => (
                <Tag key={tag.id} name={tag.name} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}