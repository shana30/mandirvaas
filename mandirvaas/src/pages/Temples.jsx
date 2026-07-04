import './Temples.css'

const TEMPLES = [
  { name: 'Kashi Vishwanath', deity: 'Shiva', location: 'Varanasi, Uttar Pradesh', glyph: 'ॐ', gradient: 'temple-grad-1', tag: 'Jyotirlinga', blurb: 'One of the twelve Jyotirlingas, on the western bank of the Ganges.' },
  { name: 'Meenakshi Amman', deity: 'Parvati', location: 'Madurai, Tamil Nadu', glyph: '卐', gradient: 'temple-grad-2', tag: 'Dravidian', blurb: 'Twin temple famed for its painted gopurams and thousand-pillar hall.' },
  { name: 'Tirupati Balaji', deity: 'Vishnu', location: 'Tirumala, Andhra Pradesh', glyph: 'ఓం', gradient: 'temple-grad-3', tag: "World's Richest", blurb: 'Set atop the Seven Hills — among the most visited pilgrim sites on Earth.' },
  { name: 'Brihadeeswarar', deity: 'Shiva', location: 'Thanjavur, Tamil Nadu', glyph: '🔱', gradient: 'temple-grad-4', tag: 'UNESCO Site', blurb: 'A thousand-year-old Chola masterpiece crowned by a granite vimana.' },
  { name: 'Somnath Temple', deity: 'Shiva', location: 'Prabhas Patan, Gujarat', glyph: 'ॐ', gradient: 'temple-grad-5', tag: 'Jyotirlinga', blurb: 'The first among the Jyotirlingas, rebuilt facing the Arabian Sea.' },
  { name: 'Vaishno Devi', deity: 'Devi', location: 'Katra, Jammu & Kashmir', glyph: '卐', gradient: 'temple-grad-6', tag: 'Cave Shrine', blurb: 'A trek through the Trikuta hills to the sacred cave of the Mother Goddess.' },
  { name: 'Jagannath Temple', deity: 'Krishna', location: 'Puri, Odisha', glyph: '🕉', gradient: 'temple-grad-1', tag: 'Char Dham', blurb: 'Home of the annual Rath Yatra chariot festival on the Bay of Bengal.' },
  { name: 'Kedarnath Temple', deity: 'Shiva', location: 'Rudraprayag, Uttarakhand', glyph: '🔱', gradient: 'temple-grad-3', tag: 'Jyotirlinga · Himalayan', blurb: 'A stone sanctuary at 3,583m, open only in the summer months.' },
]

const FILTERS = ['All Deities', 'Shiva', 'Vishnu', 'Devi', 'Krishna']

export default function Temples() {
  return (
    <div className="mv-page">
      <p className="mv-eyebrow">Core Logistics · Dhanush</p>
      <h1>Temples</h1>
      <p className="temples-sub">Browse pilgrimage sites across India — filter by deity, region, or tradition.</p>

      <div className="temples-filters">
        {FILTERS.map((f, i) => (
          <button key={f} className={`temples-filter-chip ${i === 0 ? 'is-active' : ''}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="temples-grid">
        {TEMPLES.map((t) => (
          <article key={t.name} className="mv-card temple-card">
            <div className={`temple-card-art ${t.gradient}`}>
              <span className="temple-card-glyph">{t.glyph}</span>
              <span className="temple-card-tag">{t.tag}</span>
            </div>
            <div className="temple-card-body">
              <h3 className="temple-card-name">{t.name}</h3>
              <p className="temple-card-location">📍 {t.location}</p>
              <p className="temple-card-blurb">{t.blurb}</p>
              <div className="temple-card-footer">
                <span className="temple-card-deity">{t.deity}</span>
                <button className="mv-btn mv-btn-outline temple-card-btn">Explore</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
