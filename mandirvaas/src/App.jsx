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

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          {/* Luckshana's routes */}
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Dhanush's routes */}
          <Route path="/temples" element={<Temples />} />
          <Route path="/map" element={<TempleMap />} />
          <Route path="/stays" element={<Stays />} />
        </Routes>
      </main>
    </>
  )
}
