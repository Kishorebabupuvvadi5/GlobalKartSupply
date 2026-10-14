
import { Link, NavLink } from 'react-router-dom'
import { Globe2, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState, useCallback } from 'react'
import ContactModal from './ContactModal'
import './Navbar.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const openContact = useCallback(() => {
    setMenuOpen(false)
    setContactOpen(true)
  }, [])

  const closeContact = useCallback(() => {
    setContactOpen(false)
  }, [])

  return (
    <>
      <header className="gcs-navbar">
        <div className="gcs-navbar-inner">
          <Link
            to="/"
            className="gcs-brand"
            onClick={closeMenu}
            aria-label="Global Kart Supply home"
          >
            <span className="gcs-brand-mark" aria-hidden="true">
              <Globe2 size={25} strokeWidth={1.8} />
            </span>

            <span className="gcs-brand-copy">
              <strong>Global Kart Supply</strong>
              <small>COMMERCE, CONNECTED</small>
            </span>
          </Link>

          <nav
            id="gcs-primary-navigation"
            className={`gcs-nav ${menuOpen ? 'gcs-nav-open' : ''}`}
            aria-label="Primary navigation"
          >
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `gcs-nav-link ${isActive ? 'gcs-nav-active' : ''}`
                }
                onClick={closeMenu}
              >
                <span>{label}</span>
                <span className="gcs-nav-underline" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          <div className="gcs-navbar-actions">
            <button
              type="button"
              className="gcs-navbar-cta"
              onClick={openContact}
            >
              <span>Get in Touch</span>
              <ArrowUpRight
                size={17}
                className="gcs-navbar-cta-icon"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="gcs-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={
                menuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-controls="gcs-primary-navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <ContactModal
        open={contactOpen}
        onClose={closeContact}
      />
    </>
  )
}