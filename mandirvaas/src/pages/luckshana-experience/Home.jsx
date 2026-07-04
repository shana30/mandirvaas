import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deities } from '../../data/mockData.js'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import { deityFigures } from '../../components/shared/icons/DeityFigures.jsx'
import './Home.css'

export default function Home() {
  const [selectedDeity, setSelectedDeity] = useState(deities[0].id)
  const active = deities.find((d) => d.id === selectedDeity)

  return (
    <>
      <section className="mv-hero">
        <div className="mv-page mv-hero-inner">
          <p className="mv-eyebrow" style={{ color: 'var(--mv-gold-light)' }}>
            Acquisition & Experience · Luckshana
          </p>
          <h1 className="mv-hero-title">Which deity are you seeking darshan of?</h1>
          <p className="mv-hero-sub">
            Choose a deity to see temples, festivals, and tour packages built around their tradition.
          </p>

          <div className="mv-deity-selector" role="radiogroup" aria-label="Select a deity">
            {deities.map((d) => {
              const Figure = deityFigures[d.id]
              return (
                <button
                  key={d.id}
                  role="radio"
                  aria-checked={selectedDeity === d.id}
                  className={`mv-deity-tile ${selectedDeity === d.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedDeity(d.id)}
                >
                  <span className="mv-deity-tile-glyph" aria-hidden="true">
                    {d.image ? (
                      <img src={d.image} alt="" className="mv-deity-tile-photo" />
                    ) : (
                      Figure && <Figure width="52" height="70" />
                    )}
                  </span>
                  <span>{d.name}</span>
                </button>
              )
            })}
          </div>

          <div className="mv-hero-cta-row">
            <Link to="/temples" className="mv-btn mv-btn-primary">
              See {active.name} Temples ({active.temples})
            </Link>
            <Link to="/packages" className="mv-btn mv-btn-outline" style={{ borderColor: 'var(--mv-gold-light)', color: 'var(--mv-gold-light)' }}>
              Browse Tour Packages
            </Link>
          </div>
        </div>
      </section>

      <div className="mv-page">
        <GopuramDivider />
      </div>
    </>
  )
}
