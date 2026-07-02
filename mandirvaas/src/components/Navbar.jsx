import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/temples', label: 'Temples' },
  { to: '/temples/map', label: 'Temple Map' },
  { to: '/stays', label: 'Stays' },
  { to: '/packages', label: 'Tour Packages' },
  { to: '/shop', label: 'Shop' },
  { to: '/blogs', label: 'Blogs' },
]

export default function Navbar() {
  return (
    <header className="mv-nav">
      <div className="mv-nav-inner">
        <NavLink to="/" className="mv-nav-brand">
          MandirVaas
        </NavLink>
        <nav className="mv-nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/partner" className="mv-btn mv-btn-primary mv-nav-cta">
          Join as Partner
        </NavLink>
      </div>
    </header>
  )
}
