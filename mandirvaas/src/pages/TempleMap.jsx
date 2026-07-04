import './TempleMap.css'

const PINS = [
  { name: 'Kedarnath', region: 'North', top: '18%', left: '48%' },
  { name: 'Vaishno Devi', region: 'North', top: '10%', left: '38%' },
  { name: 'Kashi Vishwanath', region: 'North', top: '32%', left: '58%' },
  { name: 'Somnath', region: 'West', top: '52%', left: '22%' },
  { name: 'Jagannath Puri', region: 'East', top: '48%', left: '74%' },
  { name: 'Tirupati Balaji', region: 'South', top: '72%', left: '55%' },
  { name: 'Meenakshi Amman', region: 'South', top: '88%', left: '48%' },
  { name: 'Brihadeeswarar', region: 'South', top: '82%', left: '55%' },
]

const REGIONS = [
  { name: 'North India', count: 3, note: 'Himalayan shrines & the Ganges belt' },
  { name: 'West India', count: 1, note: 'Coastal Gujarat & Maharashtra' },
  { name: 'East India', count: 1, note: 'Odisha temple towns' },
  { name: 'South India', count: 3, note: 'Dravidian temple architecture' },
]

export default function TempleMap() {
  return (
    <div className="mv-page">
      <p className="mv-eyebrow">Core Logistics · Dhanush</p>
      <h1>Temple Map</h1>
      <p className="tmap-sub">A region-wise view of MandirVaas temples — full interactive map SDK lands next iteration.</p>

      <div className="tmap-layout">
        <div className="mv-card tmap-canvas">
          {PINS.map((p) => (
            <div key={p.name} className="tmap-pin" style={{ top: p.top, left: p.left }}>
              <span className="tmap-pin-dot" />
              <span className="tmap-pin-label">{p.name}</span>
            </div>
          ))}
        </div>

        <aside className="tmap-sidebar">
          {REGIONS.map((r) => (
            <div key={r.name} className="mv-card tmap-region-card">
              <div className="tmap-region-head">
                <h3>{r.name}</h3>
                <span className="tmap-region-count">{r.count}</span>
              </div>
              <p>{r.note}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
