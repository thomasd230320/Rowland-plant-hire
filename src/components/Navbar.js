'use client'
import { useState } from 'react'
import Link from 'next/link'

const HOME_LINKS = [
  { label: 'About Us', href: '/home/about-us' },
  { label: 'Terms & Conditions', href: '/home/terms-conditions' },
  { label: 'Plant Hire', href: '/home/plant-hire' },
  { label: '↳ Mini Excavators / Diggers', href: '/home/plant-hire/mini-excavators-diggers', sub: true },
]

const TOOL_LINKS = [
  { label: 'Concrete Mixing & Laying', href: '/tool-hire/concrete-mixing-laying' },
  { label: 'Wood & Metal Cutting', href: '/tool-hire/wood-metal-cutting' },
  { label: 'Masonry and Tile Cutting', href: '/tool-hire/masonry-and-tile-cutting' },
  { label: 'Diamond Core Drill & Core Cutters', href: '/tool-hire/diamond-core-drill-core-cutters' },
  { label: 'Concrete Breaking', href: '/tool-hire/concrete-breaking' },
  { label: 'Compacting Equipment', href: '/tool-hire/compacting-equipment' },
  { label: 'Drilling', href: '/tool-hire/drilling' },
  { label: 'Gardening Equipment', href: '/tool-hire/gardening-equipment' },
  { label: 'Access Scaffold Towers', href: '/tool-hire/access-scaffold-towers' },
  { label: '↳ Double Width', href: '/tool-hire/access-scaffold-towers/double-width', sub: true },
  { label: '↳ Single Width', href: '/tool-hire/access-scaffold-towers/single-width', sub: true },
  { label: 'Acro Props, Strongboys, Trestles & Scaffold', href: '/tool-hire/acro-props-strongboys-trestles-scaffold' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__brand">
            <Link href="/">Rowland Tool and Plant Hire</Link>
          </div>

          {/* Desktop nav */}
          <div className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </div>

          <div className="nav-item">
            <button className="nav-link" aria-haspopup="true">
              Home
              <svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
            </button>
            <div className="dropdown">
              {HOME_LINKS.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`dropdown__link${l.sub ? ' dropdown__sub-link' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link href="/tool-hire" className="nav-link">
              Tool Hire
              <svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
            </Link>
            <div className="dropdown">
              {TOOL_LINKS.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`dropdown__link${l.sub ? ' dropdown__sub-link' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile nav */}
        <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
          <Link href="/" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/home/about-us" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/home/terms-conditions" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Terms & Conditions</Link>
          <Link href="/home/plant-hire" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Plant Hire</Link>
          <Link href="/home/plant-hire/mini-excavators-diggers" className="mobile-nav__link mobile-nav__sub-link" onClick={() => setMobileOpen(false)}>Mini Excavators / Diggers</Link>
          <Link href="/tool-hire" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Tool Hire</Link>
          {TOOL_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`mobile-nav__link${l.sub ? ' mobile-nav__sub-link' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
