// Mock data for blog when Supabase is not configured
// This allows the template to be deployed and viewed without requiring database setup

import type { PostWithTags, Tag } from '@/types/blog'

export const mockTags: Tag[] = [
  {
    id: '1',
    name: 'Product Updates',
    slug: 'product-updates',
    color: '#ff90e8',
    description: 'Latest updates and feature announcements',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2', 
    name: 'Design',
    slug: 'design',
    color: '#90a8ed',
    description: 'Design tips, trends, and inspiration',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Development',
    slug: 'development', 
    color: '#23a094',
    description: 'Code tutorials and development insights',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Business',
    slug: 'business',
    color: '#ffc900',
    description: 'Business strategy and entrepreneurship',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Creator Economy',
    slug: 'creator-economy',
    color: '#dc341e', 
    description: 'Creator insights and success stories',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Tutorials',
    slug: 'tutorials',
    color: '#f1f333',
    description: 'Step-by-step guides and how-tos',
    created_at: '2024-01-01T00:00:00Z'
  }
]

export const mockPosts: PostWithTags[] = [
  {
    id: '1',
    title: 'Welcome to Our Template Blog',
    slug: 'welcome-to-template-blog',
    content: `
      <h2>Building the Future of Digital Commerce Templates</h2>
      <p>Welcome to our blog template! This is a demonstration of how the blog system works when integrated with Supabase.</p>
      
      <p>This template includes:</p>
      <ul>
        <li>📝 Rich text content with full HTML support</li>
        <li>🏷️ Tag-based categorization and filtering</li>
        <li>📱 Responsive design that looks great on all devices</li>
        <li>⚡ Fast loading with optimized performance</li>
        <li>🔍 SEO-friendly URLs and meta tags</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To use this blog with your own content:</p>
      <ol>
        <li>Set up a Supabase project</li>
        <li>Run the provided SQL migrations</li>
        <li>Add your environment variables</li>
        <li>Start creating amazing content!</li>
      </ol>
      
      <p>Check out the README for detailed setup instructions.</p>
    `,
    excerpt: 'Welcome to our template blog! Learn how to set up and customize this blog system for your own projects.',
    status: 'published',
    published_at: '2024-01-15T10:00:00Z',
    created_at: '2024-01-15T10:00:00Z', 
    updated_at: '2024-01-15T10:00:00Z',
    author_id: null,
    view_count: 150,
    featured_image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop',
    meta_description: 'Welcome to our template blog system built with Next.js and Supabase',
    meta_keywords: ['blog', 'template', 'nextjs', 'supabase'],
    tags: [mockTags[0], mockTags[2]] // Product Updates, Development
  },
  {
    id: '2',
    title: 'Building Modern Web Applications', 
    slug: 'building-modern-web-applications',
    content: `
      <h2>The Power of Modern Web Development</h2>
      <p>Modern web applications require a thoughtful approach to architecture, performance, and user experience.</p>
      
      <h3>Key Technologies</h3>
      <p>This template showcases several cutting-edge technologies:</p>
      
      <pre><code class="language-typescript">
// Example: Type-safe database queries
const { data: posts } = await supabase
  .from('posts')
  .select(\`
    *,
    post_tags (
      tags (*)
    )
  \`)
  .eq('status', 'published')
  .order('published_at', { ascending: false })
      </code></pre>
      
      <h3>Performance Benefits</h3>
      <ul>
        <li>⚡ Server-side rendering with Next.js</li>
        <li>🎯 Optimized images and assets</li>
        <li>📊 Real-time data with Supabase</li>
        <li>🎨 Modern styling with Tailwind CSS</li>
      </ul>
      
      <p>These technologies work together to create fast, scalable, and maintainable applications.</p>
    `,
    excerpt: 'Explore modern web development techniques and learn how to build scalable applications with the right tools.',
    status: 'published',
    published_at: '2024-01-12T14:30:00Z',
    created_at: '2024-01-12T14:30:00Z',
    updated_at: '2024-01-12T14:30:00Z', 
    author_id: null,
    view_count: 89,
    featured_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    meta_description: 'Learn modern web development techniques with Next.js, Supabase, and TypeScript',
    meta_keywords: ['web development', 'nextjs', 'typescript', 'supabase'],
    tags: [mockTags[2], mockTags[5]] // Development, Tutorials
  },
  {
    id: '3',
    title: 'Design Principles for Digital Products',
    slug: 'design-principles-digital-products', 
    content: `
      <h2>Creating Products People Love</h2>
      <p>Great design isn't just about aesthetics—it's about creating experiences that users find valuable and easy to use.</p>
      
      <h3>Core Design Principles</h3>
      <ol>
        <li><strong>Simplicity</strong>: Remove unnecessary complexity</li>
        <li><strong>Clarity</strong>: Make your value proposition obvious</li>
        <li><strong>Consistency</strong>: Maintain visual and interaction patterns</li>
        <li><strong>Accessibility</strong>: Design for everyone</li>
      </ol>
      
      <h3>Visual Hierarchy</h3>
      <p>This template demonstrates effective visual hierarchy through:</p>
      <ul>
        <li>Typography scale that guides the reader</li>
        <li>Strategic use of color and contrast</li>
        <li>Proper spacing and white space</li>
        <li>Clear navigation and interaction patterns</li>
      </ul>
      
      <p>When you focus on these principles, you create products that not only look great but also drive real results.</p>
    `,
    excerpt: 'Essential design principles that help create digital products users love and want to engage with.',
    status: 'published',
    published_at: '2024-01-10T09:15:00Z',
    created_at: '2024-01-10T09:15:00Z',
    updated_at: '2024-01-10T09:15:00Z',
    author_id: null,
    view_count: 234,
    featured_image_url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=630&fit=crop',
    meta_description: 'Learn essential design principles for creating successful digital products',
    meta_keywords: ['design', 'ui/ux', 'product design', 'user experience'],
    tags: [mockTags[1], mockTags[5]] // Design, Tutorials
  },
  {
    id: '4',
    title: 'The Creator Economy Revolution',
    slug: 'creator-economy-revolution',
    content: `
      <h2>How Creators Are Reshaping Commerce</h2>
      <p>The creator economy has transformed how people build businesses and connect with audiences.</p>
      
      <h3>Key Trends We're Seeing</h3>
      <p>From online courses to digital art, creators are finding innovative ways to monetize their expertise:</p>
      
      <ul>
        <li>💰 Direct fan monetization through subscriptions</li>
        <li>📚 Educational content and online courses</li>
        <li>🎨 Digital art and NFT marketplaces</li>
        <li>🛠️ Tools and software for niche markets</li>
        <li>📱 Mobile-first content experiences</li>
      </ul>
      
      <h3>Success Strategies</h3>
      <p>Successful creators focus on:</p>
      <ol>
        <li>Building genuine relationships with their audience</li>
        <li>Consistently delivering value</li>
        <li>Diversifying their revenue streams</li>
        <li>Leveraging technology to scale their impact</li>
      </ol>
      
      <p>This template provides the foundation for creators to build their own digital presence and start monetizing their expertise.</p>
    `,
    excerpt: 'Exploring the explosive growth of the creator economy and opportunities for entrepreneurs in 2024.',
    status: 'published',
    published_at: '2024-01-08T16:45:00Z',
    created_at: '2024-01-08T16:45:00Z',
    updated_at: '2024-01-08T16:45:00Z',
    author_id: null,
    view_count: 178,
    featured_image_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop',
    meta_description: 'Discover opportunities and trends in the rapidly growing creator economy',
    meta_keywords: ['creator economy', 'entrepreneurship', 'digital business', 'monetization'],
    tags: [mockTags[3], mockTags[4]] // Business, Creator Economy
  },
  {
    id: '5',
    title: 'Setting Up Your Development Environment',
    slug: 'setting-up-development-environment',
    content: `
      <h2>Getting Started with This Template</h2>
      <p>Setting up a modern development environment is crucial for productivity and success.</p>
      
      <h3>Prerequisites</h3>
      <p>Before you begin, make sure you have:</p>
      <ul>
        <li>Node.js 18+ installed</li>
        <li>A code editor (VS Code recommended)</li>
        <li>Git for version control</li>
        <li>A Supabase account (for database features)</li>
      </ul>
      
      <h3>Quick Start</h3>
      <pre><code class="language-bash">
# Clone the repository
git clone https://github.com/lucasygu/gumroad_educational_template_nextjs.git

# Install dependencies  
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run the development server
npm run dev
      </code></pre>
      
      <h3>Configuration</h3>
      <p>The template includes:</p>
      <ul>
        <li>🔧 TypeScript for type safety</li>
        <li>💅 Tailwind CSS for styling</li>
        <li>📊 Supabase for data management</li>
        <li>⚡ Next.js for full-stack capabilities</li>
        <li>🧪 ESLint for code quality</li>
      </ul>
      
      <p>Check the README for detailed setup instructions and customization options.</p>
    `,
    excerpt: 'Step-by-step guide to setting up your development environment and getting started with this template.',
    status: 'published',
    published_at: '2024-01-05T11:20:00Z',
    created_at: '2024-01-05T11:20:00Z',
    updated_at: '2024-01-05T11:20:00Z',
    author_id: null,
    view_count: 92,
    featured_image_url: null,
    meta_description: 'Learn how to set up your development environment for this Next.js template',
    meta_keywords: ['setup', 'development', 'tutorial', 'nextjs', 'supabase'],
    tags: [mockTags[2], mockTags[5]] // Development, Tutorials
  }
]