import PageHeader from '../../components/shared/PageHeader.jsx'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import { stays } from '../../data/mockData.js'
import './Stays.css'

export default function Stays() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Core Logistics · Dhanush"
        title="Stays"
        description="Book a room near the temple you're visiting. Availability and pricing shown here are placeholders — connect to the booking service before launch."
      />

      <div className="mv-stay-list">
        {stays.map((s) => (
          <div key={s.id} className="mv-card mv-stay-row">
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px' }}>{s.name}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--mv-tulsi)' }}>
                Near {s.temple} · {s.rooms} rooms available
              </p>
            </div>
            <div className="mv-stay-price">
              <span className="mv-mono">₹{s.pricePerNight.toLocaleString('en-IN')}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--mv-basalt)' }}>/ night</span>
            </div>
            <button className="mv-btn mv-btn-primary">Book Stay</button>
          </div>
        ))}
      </div>

      <GopuramDivider />
    </div>
  )
}
