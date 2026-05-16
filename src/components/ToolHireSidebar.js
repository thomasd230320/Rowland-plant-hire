'use client'
import { useState, useEffect, useRef } from 'react'

export default function ToolHireSidebar({ categories }) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')
  const navRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first entry that is intersecting (topmost visible section)
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    )

    categories.forEach(cat => {
      const el = document.getElementById(cat.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [categories])

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('.th-sidebar__link.active')
    if (active) {
      active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
    }
  }, [activeId])

  return (
    <aside className="th-sidebar">
      <div className="th-sidebar__heading">Categories</div>
      <nav className="th-sidebar__nav" ref={navRef} aria-label="Tool hire categories">
        {categories.map(cat => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className={`th-sidebar__link${activeId === cat.id ? ' active' : ''}`}
          >
            <span className="th-sidebar__icon" aria-hidden="true">{cat.icon}</span>
            <span className="th-sidebar__label">{cat.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
