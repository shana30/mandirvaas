import './Blogs.css'

const FEATURED = {
  title: 'The Complete First-Timer\u2019s Guide to Char Dham Yatra',
  category: 'Travel Tips',
  excerpt: 'Everything to pack, when to go, and how to pace the four Himalayan shrines without burning out.',
  author: 'Luckshana',
  readTime: '9 min read',
  date: 'Jun 18, 2026',
  gradient: 'blog-grad-1',
}

const POSTS = [
  { title: 'Why Temple Gopurams Are Painted So Colourfully', category: 'Architecture', readTime: '6 min read', date: 'Jun 10, 2026', gradient: 'blog-grad-2' },
  { title: 'Prasadam Across India: 8 Temple Foods You Must Try', category: 'Food', readTime: '5 min read', date: 'Jun 3, 2026', gradient: 'blog-grad-3' },
  { title: 'Rath Yatra Explained: The Story Behind Puri\u2019s Chariot Festival', category: 'Festivals', readTime: '7 min read', date: 'May 27, 2026', gradient: 'blog-grad-4' },
  { title: 'Solo Pilgrim\u2019s Checklist: Staying Safe on the Trail', category: 'Travel Tips', readTime: '4 min read', date: 'May 19, 2026', gradient: 'blog-grad-5' },
  { title: 'The Twelve Jyotirlingas: A Map for Your Next Yatra', category: 'Culture', readTime: '8 min read', date: 'May 12, 2026', gradient: 'blog-grad-6' },
  { title: 'Packing for Kedarnath: What the Altitude Really Demands', category: 'Travel Tips', readTime: '6 min read', date: 'May 4, 2026', gradient: 'blog-grad-1' },
]

export default function Blogs() {
  return (
    <div className="mv-page">
      <p className="mv-eyebrow">Experience · Luckshana</p>
      <h1>Blogs</h1>
      <p className="blogs-sub">Stories, guides, and traditions from across India\u2019s pilgrim trails.</p>

      <article className={`mv-card blogs-featured ${FEATURED.gradient}`}>
        <div className="blogs-featured-text">
          <span className="blogs-tag">{FEATURED.category}</span>
          <h2 className="blogs-featured-title">{FEATURED.title}</h2>
          <p className="blogs-featured-excerpt">{FEATURED.excerpt}</p>
          <div className="blogs-meta">
            <span>{FEATURED.author}</span>
            <span>·</span>
            <span>{FEATURED.date}</span>
            <span>·</span>
            <span>{FEATURED.readTime}</span>
          </div>
        </div>
      </article>

      <div className="blogs-grid">
        {POSTS.map((p) => (
          <article key={p.title} className="mv-card blog-card">
            <div className={`blog-card-art ${p.gradient}`} />
            <div className="blog-card-body">
              <span className="blogs-tag blogs-tag-sm">{p.category}</span>
              <h3 className="blog-card-title">{p.title}</h3>
              <div className="blogs-meta blogs-meta-sm">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
