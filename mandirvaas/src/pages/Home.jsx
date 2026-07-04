import Hero from '../components/home/Hero.jsx'
import './Home.css'

const DEITIES = [
  { name: 'Shiva', glyph: 'ॐ', grad: 'temple-grad-1' },
  { name: 'Vishnu', glyph: 'ఓం', grad: 'temple-grad-3' },
  { name: 'Devi', glyph: '卐', grad: 'temple-grad-2' },
  { name: 'Ganesha', glyph: '🐘', grad: 'temple-grad-5' },
  { name: 'Murugan', glyph: '🔱', grad: 'temple-grad-4' },
  { name: 'Hanuman', glyph: '🚩', grad: 'temple-grad-6' },
  { name: 'Krishna', glyph: '🕉', grad: 'temple-grad-1' },
]

const FEATURED = [
  { name: 'Tirupati Balaji', location: 'Tirumala, AP', glyph: 'ఓం', grad: 'temple-grad-3' },
  { name: 'Meenakshi Amman', location: 'Madurai, TN', glyph: '卐', grad: 'temple-grad-2' },
  { name: 'Kashi Vishwanath', location: 'Varanasi, UP', glyph: 'ॐ', grad: 'temple-grad-1' },
  { name: 'Vaishno Devi', location: 'Katra, J&K', glyph: '卐', grad: 'temple-grad-6' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mv-page">
        <section className="home-section">
          <div className="home-section-head">
            <h2>Choose Your Deity</h2>
          </div>
          <div className="deity-strip">
            {DEITIES.map((d) => (
              <div key={d.name} className="deity-item">
                <div className={`deity-icon ${d.grad}`}>{d.glyph}</div>
                <span className="deity-label">{d.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <h2>Featured Temples</h2>
            <a href="/temples" className="home-section-link">View all →</a>
          </div>
          <div className="featured-grid">
            {FEATURED.map((t) => (
              <article key={t.name} className="mv-card featured-card">
                <div className={`featured-card-art ${t.grad}`}>
                  <span className="featured-badge">Featured</span>
                  <span className="glyph">{t.glyph}</span>
                </div>
                <div className="featured-card-body">
                  <h3>{t.name}</h3>
                  <p>{t.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
