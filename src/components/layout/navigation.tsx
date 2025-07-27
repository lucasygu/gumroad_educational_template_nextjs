"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'

interface NavLinkProps {
  text: string
  href: string
  isActive?: boolean
  category?: 'button' | 'link'
  context?: 'primary' | 'secondary'
}

function NavLink({ text, href, isActive = false, category = 'link', context }: NavLinkProps) {
  if (category === 'button') {
    const buttonClasses = cn(
      "flex w-full items-center justify-center h-full border-black bg-black p-4 text-white no-underline transition-colors duration-200 hover:bg-pink hover:text-black lg:w-auto lg:border-l lg:py-2 lg:px-6",
      // Dashboard button when logged in
      text === 'Dashboard' && "lg:bg-black lg:text-white lg:hover:bg-pink dark:lg:bg-pink dark:lg:text-black dark:lg:hover:bg-white",
      // Secondary button styling (Log in) - BLACK background with white text, hover to pink
      context !== 'primary' && text !== 'Dashboard' && "lg:border-l-white/[.35] lg:bg-black lg:text-white lg:hover:bg-pink lg:hover:text-black",
      // Primary button styling (Start selling) - PINK background on dark nav for contrast
      context === 'primary' && text !== 'Dashboard' && "lg:bg-pink lg:text-black lg:hover:bg-white lg:hover:text-black"
    )

    return (
      <Link href={href} className={buttonClasses}>
        <Typography variant="button" className="text-inherit">
          {text}
        </Typography>
      </Link>
    )
  }

  // Regular navigation link - Always white text on black nav, active becomes white bg with black text
  const linkClasses = cn(
    "flex w-full items-center justify-center border bg-black p-4 text-white no-underline transition-all duration-200 hover:border-white/[.35] lg:w-auto lg:rounded-full lg:py-2 lg:px-4",
    isActive 
      ? "border-white/[.35] lg:bg-white lg:text-black" 
      : "border-transparent lg:bg-transparent lg:text-white"
  )

  return (
    <Link href={href} className={linkClasses}>
      <Typography variant="nav" className="text-inherit">
        {text}
      </Typography>
    </Link>
  )
}

function GitHubStarsLink() {
  const [starCount, setStarCount] = useState<number | null>(null)

  useEffect(() => {
    // Fetch GitHub stars count
    fetch('https://api.github.com/repos/lucasygu/gumroad_educational_template_nextjs')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        if (data && typeof data.stargazers_count === 'number') {
          setStarCount(data.stargazers_count)
        } else {
          setStarCount(null)
        }
      })
      .catch(() => setStarCount(null))
  }, [])

  return (
    <Link
      href="https://github.com/lucasygu/gumroad_educational_template_nextjs"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-3 flex items-center gap-1.5 rounded-full p-1.5 border border-white/[.35] no-underline hover:bg-gray-700 text-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.35)] transition-all duration-100"
      aria-label="Visit Template Repository on GitHub"
    >
      {/* GitHub Icon */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 98 96" 
        xmlns="http://www.w3.org/2000/svg" 
        className="fill-current"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" 
          fill="currentColor"
        />
      </svg>

      {/* Stars Count */}
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <Typography variant="body" weight="medium" className="text-inherit leading-none">
          {starCount !== null && starCount !== undefined ? starCount.toLocaleString() : ''}
        </Typography>
        <Image
          src="/icons/solid-star.svg"
          alt=""
          width={18}
          height={18}
          className="invert"
        />
      </div>

      {/* GitHub Label with Arrow */}
      <div className="flex items-center gap-1.5">
        <Typography variant="body" weight="medium" className="text-inherit leading-none">
          GitHub
        </Typography>
        <Image
          src="/icons/arrow-diagonal-up-right.svg"
          alt=""
          width={14}
          height={14}
          className="invert"
        />
      </div>
    </Link>
  )
}

function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center lg:hidden">
      <button
        className="relative flex h-8 w-8 flex-col items-center justify-center focus:outline-none"
        onClick={onClick}
        aria-label="Toggle mobile menu"
      >
        <div 
          className={cn(
            "mb-1 h-0.5 w-8 origin-center bg-white transition-transform duration-200",
            isOpen && "rotate-45 translate-y-0.5"
          )}
        />
        <div 
          className={cn(
            "mt-1 h-0.5 w-8 origin-center bg-white transition-transform duration-200",
            isOpen && "-rotate-45 -translate-y-0.5"
          )}
        />
      </button>
    </div>
  )
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // This would come from auth context
  const pathname = usePathname()

  const navLinks = [
    { text: 'Discover', href: '/discover' },
    { text: 'Blog', href: '/blog' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Features', href: '/features' },
    { text: 'About', href: '/about' },
  ]

  // Add active state based on current pathname
  const navLinksWithActive = navLinks.map(link => ({
    ...link,
    isActive: pathname === link.href || (link.href === '/discover' && pathname === '/') || (link.href === '/blog' && pathname.startsWith('/blog'))
  }))

  const authLinks = isLoggedIn 
    ? [{ text: 'Dashboard', href: '/dashboard', category: 'button' as const, context: 'primary' as const }]
    : [
        { text: 'Log in', href: '/login', category: 'button' as const },
        { text: 'Start selling', href: '/register', category: 'button' as const, context: 'primary' as const }
      ]

  return (
    <>
      {/* Main Navigation Bar - Always Dark Like Gumroad */}
      <div className="justify-between bg-black border-b border-white/[.35] top-0 left-0 right-0 z-50 pr-4 pl-4 h-20 sticky flex lg:pl-8 lg:pr-0">
        {/* Left Side - Logo and GitHub */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/discover" className="flex items-center">
            <Image
              src="/logo.svg"
              alt=""
              width={280}
              height={22}
              className="h-8 invert"
              priority
            />
          </Link>

          {/* GitHub Stars Link */}
          <GitHubStarsLink />
        </div>

        {/* Desktop Navigation Links */}
        <div className="override hidden lg:flex lg:items-center">
          {/* Main Nav Links */}
          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-1 lg:px-6">
            {navLinksWithActive.map((link) => (
              <NavLink
                key={link.text}
                text={link.text}
                href={link.href}
                isActive={link.isActive}
              />
            ))}
          </div>

          {/* Auth Links */}
          <div className="flex flex-col lg:flex-row lg:h-full">
            {authLinks.map((link) => (
              <NavLink
                key={link.text}
                text={link.text}
                href={link.href}
                category={link.category}
                context={link.context}
              />
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "override justify-between border-b border-white/[.35] flex-col top-20 left-0 right-0 z-50 sticky bg-black",
          mobileMenuOpen ? "flex" : "hidden"
        )}
      >
        {/* Mobile Nav Links */}
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-1 lg:px-6">
          {navLinksWithActive.map((link) => (
            <NavLink
              key={link.text}
              text={link.text}
              href={link.href}
              isActive={link.isActive}
            />
          ))}
        </div>

        {/* Mobile Auth Links */}
        <div className="flex flex-col lg:flex-row lg:h-full">
          {authLinks.map((link) => (
            <NavLink
              key={link.text}
              text={link.text}
              href={link.href}
              category={link.category}
              context={link.context}
            />
          ))}
        </div>
      </div>
    </>
  )
}