import PageHeader from '../../components/shared/PageHeader.jsx'
import GopuramDivider from '../../components/shared/GopuramDivider.jsx'
import { tourPackages } from '../../data/mockData.js'
import './TourPackages.css'

export default function TourPackages() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Experience · Luckshana"
        title="Tour Packages"
        description="Multi-day pilgrimage circuits, bundled with transport and stays. Connect to the pricing engine before these go live."
      />

      <div className="mv-package-list">
        {tourPackages.map((p) => (
          <article key={p.id} className="mv-card mv-package-card">
            <div className="mv-package-days">
              <span className="mv-mono">{p.days}</span>
              <span>days</span>
            </div>
            <div className="mv-package-body">
              <h3 style={{ margin: '0 0 6px' }}>{p.name}</h3>
              <p style={{ margin: 0, fontSize: '0.92rem' }}>{p.highlight}</p>
            </div>
            <div className="mv-package-price">
              <span className="mv-mono">₹{p.price.toLocaleString('en-IN')}</span>
              <button className="mv-btn mv-btn-primary" style={{ marginTop: 10 }}>
                View Itinerary
              </button>
            </div>
          </article>
        ))}
      </div>

      <GopuramDivider />
    </div>
  )
}
