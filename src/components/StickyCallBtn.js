'use client'

import { useQuote } from '@/contexts/QuoteContext'

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0, color: '#22c55e' }}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export default function StickyCallBtn() {
  const { drawerOpen } = useQuote()

  // Hide when the quote drawer is open so it doesn't overlap drawer content
  if (drawerOpen) return null

  return (
    <div className="sticky-call-bar">
      <a
        href="tel:+441865922611"
        className="sticky-call-bar__phone"
        aria-label="Call us on 01865 922611"
      >
        <PhoneIcon />
        01865 922611
      </a>

      <a href="#enquiry" className="sticky-call-bar__quote">
        Get a Quote
      </a>
    </div>
  )
}
