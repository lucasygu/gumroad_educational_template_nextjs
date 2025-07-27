# Gumroad Educational Template

A pixel-perfect recreation of Gumroad's landing page and blog system built with modern web technologies. This template serves as an educational resource for learning Next.js, Supabase, and modern web development patterns.

![Template Preview](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop)

## ✨ Features

- **🎨 Pixel-Perfect Design**: Exact recreation of Gumroad's landing page and blog
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ High Performance**: Built with Next.js 15 and optimized for speed
- **📝 Blog System**: Complete blog with tags, search, and rich content
- **🎭 Smooth Animations**: Parallax effects and smooth transitions
- **🔍 SEO Optimized**: Meta tags, structured data, and semantic HTML
- **🛡️ Type Safe**: Full TypeScript support throughout
- **🎯 Modern Stack**: Next.js, Supabase, Tailwind CSS, and ShadCN UI

## 🚀 Quick Start

### Option 1: Deploy Immediately (Demo Mode)

The template works out of the box without any setup. The blog system uses mock data for demonstration purposes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lucasygu/gumroad_educational_template_nextjs)

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/lucasygu/gumroad_educational_template_nextjs.git
cd gumroad_educational_template_nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template in action.

## 📊 Adding Real Blog Data (Optional)

The template includes a complete blog system that works with mock data by default. To connect to a real database:

### 1. Set Up Supabase

1. Create a [Supabase](https://supabase.com) account
2. Create a new project
3. Copy your project URL and API keys

### 2. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.local.example .env.local
```

Add your Supabase credentials to `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set Up Database Schema

Run the SQL scripts in your Supabase SQL editor:

1. **Schema**: Run `supabase/schema.sql` to create tables and functions
2. **Sample Data**: Run `supabase/seed.sql` to add sample blog posts

```sql
-- Example: Create the main tables
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  -- ... more fields
);

-- See supabase/schema.sql for complete schema
```

### 4. Deploy with Database

Once configured, redeploy your application. The blog will automatically switch from mock data to your Supabase database.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── features/          # Features page
│   └── ...                # Other pages
├── components/
│   ├── blog/              # Blog-specific components
│   ├── layout/            # Layout components (nav, footer)
│   ├── sections/          # Page sections (hero, testimonials)
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives (buttons, cards)
├── lib/
│   ├── blog/              # Blog utilities and mock data
│   ├── supabase/          # Database client and API
│   └── utils.ts           # Utility functions
├── styles/                # Global styles and typography
└── types/                 # TypeScript type definitions

supabase/
├── schema.sql             # Database schema
├── seed.sql               # Sample data
└── config.toml            # Supabase configuration
```

## 🎨 Customization

### Styling

The template uses Tailwind CSS with custom design tokens matching Gumroad's design:

```css
/* Custom colors */
--pink: #ff90e8
--purple: #90a8ed  
--green: #23a094
--orange: #ffc900
--yellow: #f1f333

/* Custom typography scale */
--text-size-1: 0.875rem    /* 14px */
--text-size-2: 1rem        /* 16px */
--text-size-3: 1.25rem     /* 20px */
--text-size-4: 1.5rem      /* 24px */
--text-size-5: 2.5rem      /* 40px */
```

### Components

All components are built with TypeScript and follow consistent patterns:

```tsx
// Example: Custom button component
import { GumroadButton } from '@/components/shared/gumroad-button'

<GumroadButton variant="pink" size="lg" href="/signup">
  Get Started
</GumroadButton>
```

### Blog Content

Blog posts support rich content with:

- **Markdown**: Full markdown support
- **Code Highlighting**: Syntax highlighting for code blocks
- **Images**: Optimized image handling
- **Tags**: Categorization and filtering
- **SEO**: Automatic meta tag generation

## 📝 Content Management

### Mock Data Mode (Default)

The template includes realistic sample content in `src/lib/blog/mock-data.ts`:

- 5 sample blog posts with rich content
- 6 tag categories
- Realistic view counts and dates
- Full tag relationships

### Database Mode (Optional)

When Supabase is configured:

- **Admin Interface**: Create and edit posts
- **Rich Text Editor**: WYSIWYG content editing
- **Media Management**: Image uploads and management
- **Real-time Updates**: Live content updates
- **Analytics**: View counts and engagement metrics

## 🚀 Performance

The template is optimized for performance:

- **Core Web Vitals**: Passing scores for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting and lazy loading
- **Static Generation**: ISR for blog posts with revalidation
- **Caching**: SWR for client-side caching

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type safety and developer experience
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com)** - High-quality component primitives
- **[Supabase](https://supabase.com)** - Backend-as-a-Service (optional)
- **[Framer Motion](https://www.framer.com/motion)** - Animation library
- **[SWR](https://swr.vercel.app)** - Data fetching and caching

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (if using Supabase)
npx supabase start   # Start local Supabase
npx supabase db push # Push schema changes
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | No* |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | No* |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | No* |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | Yes |

*Required only for database functionality. Template works with mock data without these.

## 📸 Pages Included

- **🏠 Homepage**: Hero section with call-to-action
- **📖 About Page**: Company story and team information  
- **✨ Features Page**: Product features and capabilities
- **💰 Pricing Page**: Pricing plans and comparisons
- **🔍 Discover Page**: Product discovery and categories
- **📝 Blog System**: Complete blog with posts, tags, and search
- **🔐 Auth Pages**: Login and registration forms

## 🎯 Learning Objectives

This template demonstrates:

- **Modern React Patterns**: Server components, client components, and hooks
- **Database Integration**: Supabase setup and real-time features
- **TypeScript Best Practices**: Type safety and developer experience
- **Performance Optimization**: Image optimization, caching, and SEO
- **Responsive Design**: Mobile-first design and breakpoint management
- **Component Architecture**: Reusable, composable component patterns

## 🤝 Contributing

Contributions are welcome! This is an educational project aimed at helping developers learn modern web development.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Gumroad](https://gumroad.com)** - Original design inspiration
- **[Vercel](https://vercel.com)** - Deployment platform
- **[Supabase](https://supabase.com)** - Backend infrastructure
- **Open Source Community** - For the amazing tools and libraries

---

**Built with ❤️ for the developer community**

*This template is for educational purposes. Please respect Gumroad's branding and intellectual property when using this template.*