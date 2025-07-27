-- Insert sample tags
INSERT INTO tags (name, color, description) VALUES
('Product Updates', '#ff90e8', 'Latest updates and feature announcements'),
('Design', '#90a8ed', 'Design tips, trends, and inspiration'),
('Development', '#23a094', 'Code tutorials and development insights'),
('Business', '#ffc900', 'Business strategy and entrepreneurship'),
('Creator Economy', '#dc341e', 'Creator insights and success stories'),
('Tutorials', '#f1f333', 'Step-by-step guides and how-tos'),
('News', '#b23386', 'Industry news and announcements');

-- Insert sample blog posts
INSERT INTO posts (
  title, 
  content, 
  excerpt, 
  status, 
  published_at,
  featured_image_url
) VALUES
(
  'Welcome to Our New Blog',
  '<h2>Building the Future of Digital Commerce</h2><p>We''re excited to launch our new blog, where we''ll share insights about digital commerce, creator economy trends, and product updates that matter to you.</p><p>This space will be your go-to resource for:</p><ul><li>Product announcements and feature updates</li><li>Creator success stories and case studies</li><li>Industry insights and market trends</li><li>Tips and tutorials for digital entrepreneurs</li></ul><p>Stay tuned for regular updates, and don''t forget to follow us for the latest content!</p>',
  'Introducing our new blog with insights on digital commerce, creator economy, and product updates.',
  'published',
  NOW() - INTERVAL '1 day',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop'
),
(
  'The Rise of Digital Products in 2025',
  '<h2>Digital Products Are Reshaping Commerce</h2><p>The digital product market has experienced unprecedented growth, with creators earning millions through innovative digital offerings.</p><h3>Key Trends We''re Seeing</h3><p>From online courses to digital art, creators are finding new ways to monetize their expertise and creativity.</p><pre><code class="language-javascript">// Example: Simple product analytics
const trackSale = (productId, revenue) => {
  analytics.track(''Product Sold'', {
    product_id: productId,
    revenue: revenue,
    timestamp: new Date()
  });
};</code></pre><p>The data shows that digital products with clear value propositions perform best in today''s market.</p>',
  'Exploring the explosive growth of digital products and what it means for creators in 2025.',
  'published',
  NOW() - INTERVAL '3 days',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop'
),
(
  'Design Principles for Digital Products',
  '<h2>Creating Products People Love</h2><p>Great design isn''t just about aesthetics—it''s about creating experiences that users find valuable and easy to use.</p><h3>Core Principles</h3><ol><li><strong>Simplicity</strong>: Remove unnecessary complexity</li><li><strong>Clarity</strong>: Make your value proposition obvious</li><li><strong>Accessibility</strong>: Design for everyone</li></ol><p>When you focus on these principles, you create products that not only look great but also drive real results for your business.</p>',
  'Essential design principles that help create digital products users love and want to buy.',
  'published',
  NOW() - INTERVAL '5 days',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=630&fit=crop'
),
(
  'Building Your First API with Node.js',
  '<h2>Getting Started with RESTful APIs</h2><p>APIs are the backbone of modern web applications. Let''s build a simple one together.</p><h3>Setting Up Express</h3><pre><code class="language-javascript">const express = require(''express'');
const app = express();

app.use(express.json());

// Basic route
app.get(''/api/products'', (req, res) => {
  res.json({ products: [] });
});

app.listen(3000, () => {
  console.log(''API running on port 3000'');
});</code></pre><p>This basic setup gives you a foundation to build upon. Next, we''ll add database integration and authentication.</p>',
  'A beginner-friendly guide to building your first RESTful API using Node.js and Express.',
  'published',
  NOW() - INTERVAL '7 days',
  null
),
(
  'Upcoming Features and Roadmap',
  '<h2>What''s Coming Next</h2><p>We''re constantly working to improve our platform based on your feedback. Here''s what''s on the horizon.</p><h3>Q1 2025 Features</h3><ul><li>Enhanced analytics dashboard</li><li>Mobile app improvements</li><li>New payment methods</li><li>Advanced customization options</li></ul><p>We''ll be sharing more details about each of these features as we get closer to launch. Stay tuned!</p>',
  'A sneak peek at the exciting features and improvements coming to our platform.',
  'published',
  NOW() - INTERVAL '2 days',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop'
);

-- Link posts to tags
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id FROM posts p, tags t 
WHERE p.title = 'Welcome to Our New Blog' AND t.name IN ('Product Updates', 'News');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id FROM posts p, tags t 
WHERE p.title = 'The Rise of Digital Products in 2025' AND t.name IN ('Business', 'Creator Economy');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id FROM posts p, tags t 
WHERE p.title = 'Design Principles for Digital Products' AND t.name IN ('Design', 'Tutorials');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id FROM posts p, tags t 
WHERE p.title = 'Building Your First API with Node.js' AND t.name IN ('Development', 'Tutorials');

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id FROM posts p, tags t 
WHERE p.title = 'Upcoming Features and Roadmap' AND t.name IN ('Product Updates', 'News');