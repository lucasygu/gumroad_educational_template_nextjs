"use client"

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "relative inline-flex rounded no-underline items-center justify-center border border-black transition-all duration-150 group-hover:-translate-x-2 group-hover:-translate-y-2 z-30 w-full lg:w-auto",
  {
    variants: {
      variant: {
        light: "bg-black text-white",
        dark: "bg-white text-black", 
        pink: "bg-pink text-black",
      },
      size: {
        sm: "h-12 px-3 text-base lg:h-12 lg:px-6 lg:text-base",
        lg: "h-14 px-8 text-xl lg:h-16 lg:px-10 lg:text-xl",
        default: "h-14 px-8 text-xl lg:h-16 lg:px-10 lg:text-xl",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
)

export interface GumroadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  children: React.ReactNode
}

const GumroadButton = React.forwardRef<HTMLButtonElement, GumroadButtonProps>(
  ({ className, variant, size, href, children, type, ...props }, ref) => {
    const ButtonWrapper = ({ children }: { children: React.ReactNode }) => (
      <div className="relative inline-block group">
        <div className="absolute inset-0 rounded bg-yellow border border-black transition-transform duration-150 z-20"></div>
        <div className="absolute inset-0 rounded bg-red border border-black transition-transform duration-150 group-hover:translate-x-2 group-hover:translate-y-2 z-10"></div>
        {children}
      </div>
    )

    if (href) {
      return (
        <ButtonWrapper>
          <Link
            href={href}
            className={cn(buttonVariants({ variant, size, className }))}
          >
            {children}
          </Link>
        </ButtonWrapper>
      )
    }

    return (
      <ButtonWrapper>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          type={type}
          {...props}
        >
          {children}
        </button>
      </ButtonWrapper>
    )
  }
)
GumroadButton.displayName = "GumroadButton"

export { GumroadButton, buttonVariants }