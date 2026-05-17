'use client'

import { useState } from 'react'
import { useQuote } from '@/contexts/QuoteContext'

function BasketIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function AddToQuoteBtn({ item }) {
  const { addItem } = useQuote()
  const [added, setAdded] = useState(false)

  function handleClick() {
    if (added) return
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button
      type="button"
      className={`add-to-quote-btn${added ? ' add-to-quote-btn--added' : ''}`}
      onClick={handleClick}
      aria-label={added ? 'Added to quote' : 'Add to quote'}
    >
      {added ? <CheckIcon /> : <BasketIcon />}
      {added ? 'Added!' : 'Add to Quote'}
    </button>
  )
}
