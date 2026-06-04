import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { hash: '#hero', label: 'Accueil' },
  { hash: '#skills', label: 'Compétences' },
  { hash: '#projects', label: 'Projets' },
  { hash: '#recommendations', label: 'Recommandations' },
  { hash: '#services', label: 'Services' },
  { hash: '#availability', label: 'Disponibilité' },
  { hash: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const closeMenu = () => setOpen(false)

  return (
    <header className={`navbar ${open ? 'navbar--open' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          Ghofrane Hedna
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav className="navbar-links" aria-label="Navigation principale">
          {NAV_ITEMS.map(({ hash, label }) =>
            isHome ? (
              <a key={hash} href={hash} className="navbar-link" onClick={closeMenu}>
                {label}
              </a>
            ) : (
              <Link
                key={hash}
                to={`/${hash}`}
                className="navbar-link"
                onClick={closeMenu}
              >
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
