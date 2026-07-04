import PageHeader from '../../components/shared/PageHeader.jsx'
import { temples } from '../../data/mockData.js'
import './TempleMap.css'

export default function TempleMap() {
  return (
    <div className="mv-page">
      <PageHeader
        eyebrow="Core Logistics · Dhanush"
        title="Temple Map"
        description="A geographic view of every listed temple. Swap the placeholder surface below for the Maps SDK integration (Google Maps / Mapbox) once the API key is provisioned."
      />

      <div className="mv-map-surface" role="img" aria-label="Map of temple locations across Tamil Nadu">
        <div className="mv-map-grid" aria-hidden="true" />
        {temples.map((t, i) => (
          <button
            key={t.id}
            className="mv-map-pin"
            style={{ left: `${18 + i * 20}%`, top: `${30 + (i % 2) * 34}%` }}
            title={t.name}
          >
            <span className="mv-map-pin-dot" />
            <span className="mv-map-pin-label">{t.name}</span>
          </button>
        ))}
      </div>

      <p className="mv-eyebrow" style={{ marginTop: 16 }}>
        TODO — replace mv-map-surface with real map SDK canvas
      </p>
    </div>
  )
}
