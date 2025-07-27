import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

// Typography variants following Gumroad's exact system
const typographyVariants = cva("", {
  variants: {
    variant: {
      // Headings (Gumroad's h1-h5 system)
      "h1": "font-primary text-2xl leading-xl font-normal", // Size 5 (40px)
      "h2": "font-primary text-xl leading-lg font-normal",  // Size 4 (24px)
      "h3": "font-primary text-lg leading-base font-normal", // Size 3 (20px)
      "h4": "font-primary text-base leading-base font-normal", // Size 2 (16px)
      "h5": "font-primary text-xs leading-xs font-normal",   // Size 1 (14px)
      
      // Display text for heroes (responsive)
      "display-xl": "font-primary text-6xl lg:text-8xl xl:text-10xl leading-none font-medium tracking-tight",
      "display-lg": "font-primary text-5xl lg:text-7xl xl:text-9xl leading-none font-medium tracking-tight",
      "display-md": "font-primary text-4xl lg:text-6xl xl:text-8xl leading-none font-medium tracking-tight",
      "display-sm": "font-primary text-3xl lg:text-5xl xl:text-7xl leading-none font-medium tracking-tight",
      
      // Body text variants
      "body-lg": "font-primary text-lg leading-base font-normal",
      "body": "font-primary text-base leading-base font-normal",
      "body-sm": "font-primary text-xs leading-xs font-normal",
      
      // Specialized variants
      "card-title": "font-primary text-xl leading-lg font-medium",
      "card-description": "font-primary text-base leading-base font-normal text-secondary",
      "nav": "font-primary text-lg leading-tight font-normal",
      "button": "font-primary text-lg leading-tight font-normal",
      "button-sm": "font-primary text-xs leading-tight font-medium",
      "button-lg": "font-primary text-lg leading-tight font-medium",
      "form-label": "font-primary text-xs leading-xs font-medium",
      "form-helper": "font-primary text-xs leading-xs font-normal text-secondary",
      "caption": "font-primary text-xs leading-xs font-normal text-muted",
    },
    color: {
      "primary": "text-black",
      "secondary": "text-gray-600",
      "muted": "text-gray-400",
      "white": "text-white",
      "pink": "text-pink",
      "purple": "text-purple",
      "green": "text-green",
      "orange": "text-orange",
      "red": "text-red",
      "yellow": "text-yellow",
    },
    weight: {
      "normal": "font-normal",
      "medium": "font-medium",
      "bold": "font-bold",
    },
    align: {
      "left": "text-left",
      "center": "text-center",
      "right": "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "primary",
    weight: "normal",
    align: "left",
  },
})

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  balance?: boolean
  singleline?: boolean
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, weight, align, as, balance, singleline, ...props }, ref) => {
    // Determine the default element based on variant
    const getDefaultElement = (variant: string | null | undefined) => {
      if (!variant) return "p"
      if (variant.startsWith("h")) return variant
      if (variant.startsWith("display")) return "h1"
      return "p"
    }

    const Comp = as || getDefaultElement(variant)

    return (
      <Comp
        className={cn(
          typographyVariants({ variant, color, weight, align }),
          balance && "text-balance",
          singleline && "text-singleline",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

// Convenience components for common headings
const H1 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="h1" variant="h1" ref={ref} {...props} />
)
H1.displayName = "H1"

const H2 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="h2" variant="h2" ref={ref} {...props} />
)
H2.displayName = "H2"

const H3 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="h3" variant="h3" ref={ref} {...props} />
)
H3.displayName = "H3"

const H4 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="h4" variant="h4" ref={ref} {...props} />
)
H4.displayName = "H4"

const H5 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="h5" variant="h5" ref={ref} {...props} />
)
H5.displayName = "H5"

// Display text components for hero sections
const DisplayText = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, "as">>(
  ({ variant = "display-lg", ...props }, ref) => (
    <Typography as="h1" variant={variant} ref={ref} {...props} />
  )
)
DisplayText.displayName = "DisplayText"

// Body text component
const BodyText = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, "as">>(
  ({ variant = "body", ...props }, ref) => (
    <Typography as="p" variant={variant} ref={ref} {...props} />
  )
)
BodyText.displayName = "BodyText"

// Caption component for small text
const Caption = React.forwardRef<HTMLSpanElement, Omit<TypographyProps, "as" | "variant">>(
  (props, ref) => <Typography as="span" variant="caption" ref={ref} {...props} />
)
Caption.displayName = "Caption"

// Rich text container for formatted content
interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const RichText = React.forwardRef<HTMLDivElement, RichTextProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn("rich-text font-primary", className)}
      ref={ref}
      {...props}
    />
  )
)
RichText.displayName = "RichText"

export {
  Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  DisplayText,
  BodyText,
  Caption,
  RichText,
  typographyVariants,
}