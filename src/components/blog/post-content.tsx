'use client'

import React from 'react'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div 
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}