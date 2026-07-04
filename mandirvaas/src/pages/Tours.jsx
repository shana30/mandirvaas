import './Tours.css'

const PACKAGES = [
  {
    name: 'Char Dham Yatra Express',
    duration: '8N / 9D',
    temples: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    price: '₹28,499',
    difficulty: 'Moderate',
    featured: true,
  },
  {
    name: 'South Temple Trail',
    duration: '5N / 6D',
    temples: ['Meenakshi Amman', 'Rameshwaram', 'Brihadeeswarar'],
    price: '₹16,999',
    difficulty: 'Easy',
  },
  {
    name: 'Jyotirlinga Circuit',
    duration: '10N / 11D',
    temples: ['Somnath', 'Kashi Vishwanath', 'Mahakaleshwar', 'Kedarnath', '+8 more'],
    price: '₹34,999',
    difficulty: 'Challenging',
  },
  {
    name: 'Weekend Darshan — Tirupati',
    duration: '2N / 3D',
    temples: ['Tirupati Balaji', 'Kanipakam Vinayaka'],
    price: '₹6,499',
    difficulty: 'Easy',
  },
  {
    name: 'Purvottar Sacred Trail',
    duration: '6N / 7D',
    temples: ['Kamakhya', 'Jagannath Puri'],
    price: '₹19,999',
    difficulty: 'Moderate',
  },
  {
    name: 'Vaishno Devi Quick Trip',
    duration: '2N / 3D',
    temples: ['Vaishno Devi', 'Katra'],
    price: '₹7,999',
    difficulty: 'Moderate',
  },
]

export default function Tours() {
  return (
    <div className="mv-page">
      <p className="mv-eyebrow">Experience · Luckshana</p>
      <h1>Tour Packages</h1>
      <p className="tours-sub">Curated multi-temple pilgrimages, with stays and transport bundled in.</p>

      <div className="tours-grid">
        {PACKAGES.map((p) => (
          <article key={p.name} className={`mv-card tour-card ${p.featured ? 'is-featured' : ''}`}>
            {p.featured && <span className="tour-card-ribbon">Most Booked</span>}
            <div className="tour-card-top">
              <h3 className="tour-card-name">{p.name}</h3>
              <span className="tour-card-duration">{p.duration}</span>
            </div>
            <p className="tour-card-temples">{p.temples.join(' · ')}</p>
            <div className="tour-card-footer">
              <div>
                <span className="tour-card-price">{p.price}</span>
                <span className="tour-card-per"> / person</span>
              </div>
              <span className={`tour-card-diff diff-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
            </div>
            <button className="mv-btn mv-btn-primary tour-card-btn">Book Package</button>
          </article>
        ))}
      </div>
    </div>
  )
}
