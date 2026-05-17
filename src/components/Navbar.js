'use client'
import { useState } from 'react'
import Link from 'next/link'

const PLANT_LINKS = [
  { label: 'All Plant Hire', href: '/plant-hire' },
  { label: 'Mini Excavators / Diggers', href: '/plant-hire/mini-excavators-diggers' },
  { label: 'Skip Loaders / Dumpers', href: '/plant-hire/skip-loaders-dumpers' },
]

const TOOL_LINKS = [
  { label: 'All Tool Hire', href: '/tool-hire' },
  { label: 'Concrete Breaking', href: '/tool-hire/concrete-breaking' },
  { label: 'Concrete Mixing & Laying', href: '/tool-hire/concrete-mixing-laying' },
  { label: 'Masonry & Tile Cutting', href: '/tool-hire/masonry-and-tile-cutting' },
  { label: 'Wood & Metal Cutting', href: '/tool-hire/wood-metal-cutting' },
  { label: 'Diamond Core & Cutters', href: '/tool-hire/diamond-core-drill-core-cutters' },
  { label: 'Compacting Equipment', href: '/tool-hire/compacting-equipment' },
  { label: 'Drilling', href: '/tool-hire/drilling' },
  { label: 'Gardening Equipment', href: '/tool-hire/gardening-equipment' },
  { label: 'Scaffold Towers', href: '/tool-hire/access-scaffold-towers' },
  { label: 'Acro Props, Trestles & Boards', href: '/tool-hire/acro-props-strongboys-trestles-scaffold' },
]

function ChevronIcon({ open }) {
  return (
    <svg
      className={`nav-chevron${open ? ' nav-chevron--open' : ''}`}
      width="12" height="12"
      viewBox="0 0 12 8"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1 1l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [plantOpen, setPlantOpen] = useState(false)
  const [toolOpen, setToolOpen] = useState(false)

  const closeAll = () => {
    setMobileOpen(false)
    setPlantOpen(false)
    setToolOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <Link href="/" onClick={closeAll}>Rowland Tool &amp; Plant Hire</Link>
        </div>

        {/* Desktop nav links */}
        <div className="navbar__desktop">
          <Link href="/" className="nav-link">Home</Link>

          <div className="nav-item">
            <span className="nav-link nav-link--drop">
              Plant Hire
              <ChevronIcon />
            </span>
            <div className="dropdown">
              {PLANT_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="dropdown__link">{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link href="/tool-hire" className="nav-link nav-link--drop">
              Tool Hire
              <ChevronIcon />
            </Link>
            <div className="dropdown dropdown--wide">
              {TOOL_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="dropdown__link">{l.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="nav-link">About</Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </div>

      {/* Mobile drawer — accordion groups */}
      <div className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`} aria-hidden={!mobileOpen}>
        <Link href="/" className="mobile-link" onClick={closeAll}>Home</Link>
        <Link href="/about" className="mobile-link" onClick={closeAll}>About Us</Link>
        <Link href="/terms-conditions" className="mobile-link" onClick={closeAll}>Terms &amp; Conditions</Link>

        <div className="mobile-divider" />

        {/* Plant Hire accordion */}
        <div className="mobile-group">
          <button
            className="mobile-group__toggle"
            onClick={() => setPlantOpen(o => !o)}
            aria-expanded={plantOpen}
          >
            <span>Plant Hire</span>
            <ChevronIcon open={plantOpen} />
          </button>
          <div className={`mobile-group__items${plantOpen ? ' mobile-group__items--open' : ''}`}>
            {PLANT_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="mobile-sub-link" onClick={closeAll}>{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Tool Hire accordion */}
        <div className="mobile-group">
          <button
            className="mobile-group__toggle"
            onClick={() => setToolOpen(o => !o)}
            aria-expanded={toolOpen}
          >
            <span>Tool Hire</span>
            <ChevronIcon open={toolOpen} />
          </button>
          <div className={`mobile-group__items${toolOpen ? ' mobile-group__items--open' : ''}`}>
            {TOOL_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="mobile-sub-link" onClick={closeAll}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="mobile-drawer__cta">
          <a href="tel:+441865922611" className="mobile-call-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            01865 922611
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && <div className="mobile-overlay" onClick={closeAll} aria-hidden="true" />}
    </nav>
  )
}
