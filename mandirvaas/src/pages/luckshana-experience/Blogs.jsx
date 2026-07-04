import PageHeader from '../../components/shared/PageHeader.jsx'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import { blogPosts } from '../../data/mockData.js'
import './Blogs.css'

export default function Blogs() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Experience · Luckshana"
        title="Blogs"
        description="Practical guides and temple stories to help pilgrims plan. Swap mock posts for CMS-driven content when ready."
      />

      <div className="mv-blog-list">
        {blogPosts.map((b) => (
          <article key={b.id} className="mv-card mv-blog-card">
            <h3 style={{ margin: '0 0 8px' }}>{b.title}</h3>
            <p style={{ margin: '0 0 12px' }}>{b.excerpt}</p>
            <span className="mv-mono" style={{ fontSize: '0.78rem', color: 'var(--mv-tulsi)' }}>
              {b.readMinutes} min read
            </span>
          </article>
        ))}
      </div>

      <GopuramDivider />
    </div>
  )
}
