import './Stays.css'

export default function Stays() {
  return (
    <div className="mv-page">
      <p className="mv-eyebrow">Core Logistics · Dhanush</p>
      <h1>Stays</h1>

      <div className="stays-layout">
        {/* Sticky left sidebar — filter controls */}
        <aside className="stays-sidebar">
          <div className="mv-card stays-filter-block">
            <label className="stays-filter-label" htmlFor="checkin-date">
              Check-in Date
            </label>
            {/* TODO: wire real date picker */}
            <input id="checkin-date" type="date" className="stays-filter-input" />
          </div>

          <div className="mv-card stays-filter-block">
            <label className="stays-filter-label" htmlFor="guest-count">
              Guest Count
            </label>
            {/* TODO: wire real guest-count dropdown */}
            <select id="guest-count" className="stays-filter-input">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>

          <button className="mv-btn mv-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Apply Filters
          </button>
        </aside>

        {/* Right main grid — accommodation results */}
        <section className="stays-results">
          {/* TODO: replace placeholder cards with real stay listings — Day 2+ */}
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="mv-card stays-result-placeholder">
              Result card {n}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
