import { Link } from 'react-router-dom'
import PageHeader from '../../components/shared/PageHeader.jsx'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import TempleIllustration from '../../components/shared/icons/TempleIllustration.jsx'
import { deityFigures } from '../../components/shared/icons/DeityFigures.jsx'
import { temples, deities } from '../../data/mockData.js'
import './Temples.css'

// Vary tier count per temple so cards feel distinct rather than repeated art
const tierByTemple = { 'meenakshi-amman': 6, 'thillai-nataraja': 5, 'vaitheeswaran-koil': 4, 'palani-murugan': 5 }

export default function Temples() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Core Logistics · Dhanush"
        title="Temples"
        description="Search and filter temples by deity, city, or distance from you. Every listing links through to darshan timings, stays, and the temple map."
      />

      <div className="mv-deity-filter" role="group" aria-label="Filter by deity">
        {deities.map((d) => (
          <button key={d.id} className="mv-deity-chip">
            {d.name} <span>{d.temples}</span>
          </button>
        ))}
      </div>

      <div className="mv-temple-grid">
        {temples.map((t) => {
          const Figure = deityFigures[t.deity.toLowerCase()]
          return (
          <article key={t.id} className="mv-card mv-temple-card">
            <div className="mv-temple-card-image">
              {t.image ? (
                <img src={t.image} alt={t.name} className="mv-temple-card-photo" />
              ) : (
                <>
                  <TempleIllustration tiers={tierByTemple[t.id] || 5} />
                  {Figure && (
                    <span className="mv-temple-card-deity-figure" title={t.deity}>
                      <Figure width="46" height="60" />
                    </span>
                  )}
                </>
              )}
            </div>
            <div className="mv-temple-card-body">
              <p className="mv-eyebrow">{t.deity}</p>
              <h3 style={{ fontSize: '1.15rem', margin: '4px 0' }}>{t.name}</h3>
              <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>{t.city}</p>
              <div className="mv-temple-card-meta">
                <span className="mv-mono">{t.distanceKm} km away</span>
                <span className="mv-mono">★ {t.rating}</span>
              </div>
              <Link to="/temples/map" className="mv-btn mv-btn-outline" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}>
                View on map
              </Link>
            </div>
          </article>
          )
        })}
      </div>

      <GopuramDivider />
    </div>
  )
}
