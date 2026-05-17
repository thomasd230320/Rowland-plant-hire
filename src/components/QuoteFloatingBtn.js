'use client'

import { useQuote } from '@/contexts/QuoteContext'

function CartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

export default function QuoteFloatingBtn() {
  const { items, loaded, setDrawerOpen } = useQuote()

  // Avoid hydration mismatch: render nothing until client state has loaded
  if (!loaded) return null

  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  // Hidden when basket is empty (CSS handles the animated transition)
  return (
    <button
      className={`quote-fab${itemCount > 0 ? ' quote-fab--visible' : ''}`}
      onClick={() => setDrawerOpen(true)}
      aria-label={`Open quote basket${itemCount > 0 ? ` — ${itemCount} item${itemCount !== 1 ? 's' : ''}` : ''}`}
      aria-live="polite"
    >
      <span className="quote-fab__icon">
        <CartIcon />
        {itemCount > 0 && (
          <span className="quote-fab__badge" aria-hidden="true">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </span>
      <span className="quote-fab__label">Quote</span>
    </button>
  )
}
