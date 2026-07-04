import { useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // TODO: wire real search — Day 2+
    console.log('search:', query)
  }

  return (
    <section className="hero">
      <div className="mv-page hero-inner">
        <p className="mv-eyebrow" style={{ color: 'var(--mv-gold-light)' }}>
          Acquisition & Experience · Luckshana
        </p>
        <h1 className="hero-title">Begin Your Sacred Journey</h1>
        <p className="hero-sub">
          Search temples, plan darshan, and book your entire pilgrimage — all in one place.
        </p>

        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="text"
            className="hero-search-input"
            placeholder="Search a temple, city, or deity…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="mv-btn mv-btn-primary">
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
