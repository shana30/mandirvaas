<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
import { Routes, Route, Link, NavLink } from 'react-router-dom'

// Dhanush — Core Logistics & Operations
import Temples from './pages/Temples.jsx'
import TempleMap from './pages/TempleMap.jsx'
import Stays from './pages/Stays.jsx'

// Luckshana — Acquisition & Experience
import Home from './pages/Home.jsx'
import Tours from './pages/Tours.jsx'
import Blogs from './pages/Blogs.jsx'

function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/temples', label: 'Temples' },
    { to: '/map', label: 'Temple Map' },
    { to: '/stays', label: 'Stays' },
    { to: '/tours', label: 'Tours' },
    { to: '/blogs', label: 'Blogs' },
  ]
  return (
    <header style={{ background: 'var(--mv-maroon)', borderBottom: '3px solid var(--mv-gold)' }}>
      <nav
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          gap: 24,
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', color: 'var(--mv-white)', fontSize: '1.3rem' }}>
          MandirVaas
        </Link>
        {links.slice(1).map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={({ isActive }) => ({
              color: isActive ? 'var(--mv-white)' : 'var(--mv-gold-light)',
              fontSize: '0.9rem',
              fontWeight: 500,
            })}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
<<<<<<< HEAD
=======
=======
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Luckshana — Acquisition, Media & Experience
import Home from './pages/luckshana-experience/Home.jsx'
import TourPackages from './pages/luckshana-experience/TourPackages.jsx'
import Blogs from './pages/luckshana-experience/Blogs.jsx'
import JoinPartner from './pages/luckshana-experience/JoinPartner.jsx'

// Dhanush — Core Logistics & Operations
import Temples from './pages/dhanush-logistics/Temples.jsx'
import TempleMap from './pages/dhanush-logistics/TempleMap.jsx'
import Stays from './pages/dhanush-logistics/Stays.jsx'
import Shop from './pages/dhanush-logistics/Shop.jsx'
>>>>>>> 12c86fc69c54a28a8c922a2d6606e0fda1653ccf
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <Nav />
=======
<<<<<<< HEAD
      <Nav />
=======
      <Navbar />
>>>>>>> 12c86fc69c54a28a8c922a2d6606e0fda1653ccf
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
      <main>
        <Routes>
          {/* Luckshana's routes */}
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
          <Route path="/tours" element={<Tours />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Dhanush's routes */}
          <Route path="/temples" element={<Temples />} />
          <Route path="/map" element={<TempleMap />} />
          <Route path="/stays" element={<Stays />} />
        </Routes>
      </main>
<<<<<<< HEAD
=======
=======
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/partner" element={<JoinPartner />} />

          {/* Dhanush's routes */}
          <Route path="/temples" element={<Temples />} />
          <Route path="/temples/map" element={<TempleMap />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
>>>>>>> 12c86fc69c54a28a8c922a2d6606e0fda1653ccf
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
    </>
  )
}
