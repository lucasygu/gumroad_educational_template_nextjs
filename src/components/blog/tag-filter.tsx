import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { BLOG_ROUTES } from '@/lib/blog/constants'
import type { TagFilterProps } from '@/types/blog'

interface TabButtonProps {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
  count?: number
  showCount?: boolean
}

function TabButton({ children, isActive, onClick, count, showCount = false }: TabButtonProps) {
  const baseClasses = 'block no-underline px-4 py-2 rounded-full border border-black transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer'
  const activeClasses = isActive
    ? 'bg-black text-white'
    : 'bg-white text-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#000]'

  return (
    <button 
      role="tab" 
      aria-selected={isActive} 
      className={`${baseClasses} ${activeClasses}`} 
      onClick={onClick}
    >
      {children}
      {showCount && count !== undefined && (
        <span className="ml-1.5 text-base opacity-85">({count})</span>
      )}
    </button>
  )
}

export function TagFilter({ tags, activeTag, onTagChange, allPostsCount }: TagFilterProps) {
  const router = useRouter()

  const selectTag = useCallback((tagSlug: string) => {
    onTagChange(tagSlug)
    router.push(BLOG_ROUTES.TAG(tagSlug))
  }, [onTagChange, router])

  const selectAll = useCallback(() => {
    onTagChange(null)
    router.push(BLOG_ROUTES.INDEX)
  }, [onTagChange, router])

  if (!tags || tags.length === 0) {
    return null
  }

  const isAllPostsActive = activeTag === null

  return (
    <div className="mb-12" role="tablist">
      <ul className="flex flex-wrap gap-x-3 gap-y-3 text-lg">
        <li>
          <TabButton 
            isActive={isAllPostsActive} 
            onClick={selectAll} 
            count={allPostsCount} 
            showCount={isAllPostsActive}
          >
            All Posts
          </TabButton>
        </li>
        {tags.map((tag) => {
          const isActive = activeTag === tag.slug
          const count = tag.postCount || 0

          return (
            <li key={tag.id}>
              <TabButton 
                isActive={isActive} 
                onClick={() => selectTag(tag.slug)} 
                count={count} 
                showCount={isActive}
              >
                {tag.name}
              </TabButton>
            </li>
          )
        })}
      </ul>
    </div>
  )
}