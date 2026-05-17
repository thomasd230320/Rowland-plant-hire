'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuote, calcItemTotal } from '@/contexts/QuoteContext'

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  )
}

function CartEmptyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Duration options
// ---------------------------------------------------------------------------

const DURATION_OPTIONS = [
  { label: '1 day',    days: 1  },
  { label: '2 days',   days: 2  },
  { label: '3 days',   days: 3  },
  { label: '4 days',   days: 4  },
  { label: '5 days',   days: 5  },
  { label: '1 week',   days: 7  },
  { label: '2 weeks',  days: 14 },
  { label: '3 weeks',  days: 21 },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCurrency(amount) {
  return `£${amount.toFixed(2)}`
}

function todayString() {
  return new Date().toISOString().split('T')[0]
}

function buildMailtoBody(items, startDate, days) {
  const durationLabel = DURATION_OPTIONS.find((o) => o.days === days)?.label ?? `${days} day(s)`
  const startLabel = startDate || 'TBC'
  const lines = items.map((item) => {
    const total = calcItemTotal(item.pricing, days, item.qty)
    const price = total != null ? formatCurrency(total) : 'POA'
    return `  - ${item.title} x${item.qty} — ${price} (${durationLabel})`
  })
  return [
    'Hi Rowland Plant Hire,',
    '',
    'Please could you provide a quote for the following equipment:',
    '',
    ...lines,
    '',
    `Start Date: ${startLabel}`,
    `Duration: ${durationLabel}`,
    '',
    'Please confirm availability and pricing (inc. VAT).',
    '',
    'Many thanks',
  ].join('\n')
}

// ---------------------------------------------------------------------------
// QuoteItem sub-component
// ---------------------------------------------------------------------------

function QuoteItem({ item, days }) {
  const { removeItem, updateQty } = useQuote()
  const total = calcItemTotal(item.pricing, days, item.qty)
  const priceLabel = total != null ? formatCurrency(total) : 'POA'
  const isPOA = total == null

  return (
    <div className="qd-item">
      <div className="qd-item__thumb">
        {item.image ? (
          <div className="qd-item__img-wrap">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="64px"
              className="qd-item__img"
            />
          </div>
        ) : (
          <div className="qd-item__img-placeholder" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
        )}
      </div>

      <div className="qd-item__info">
        <p className="qd-item__title">{item.title}</p>
        {item.category && (
          <span className={`qd-item__badge qd-item__badge--${item.category}`}>
            {item.category}
          </span>
        )}

        <div className="qd-item__controls">
          <div className="qd-item__qty">
            <button
              className="qd-item__qty-btn"
              onClick={() => updateQty(item.id, item.qty - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="qd-item__qty-val">{item.qty}</span>
            <button
              className="qd-item__qty-btn"
              onClick={() => updateQty(item.id, item.qty + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className={`qd-item__price${isPOA ? ' qd-item__price--poa' : ''}`}>
            {priceLabel}
          </span>
        </div>
      </div>

      <button
        className="qd-item__remove"
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.title}`}
      >
        <CloseIcon size={16} />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// QuoteDrawer
// ---------------------------------------------------------------------------

export default function QuoteDrawer() {
  const {
    items,
    days,
    setDays,
    startDate,
    setStartDate,
    drawerOpen,
    setDrawerOpen,
    clearQuote,
  } = useQuote()

  const drawerRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [drawerOpen, setDrawerOpen])

  // Scroll lock on body
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  // Focus trap: move focus into drawer when it opens
  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    }
  }, [drawerOpen])

  // ---------------------------------------------------------------------------
  // Totals
  // ---------------------------------------------------------------------------

  const lineItems = items.map((item) => ({
    ...item,
    lineTotal: calcItemTotal(item.pricing, days, item.qty),
  }))

  const hasPOA = lineItems.some((li) => li.lineTotal == null)
  const grandTotal = lineItems.reduce((sum, li) => sum + (li.lineTotal ?? 0), 0)

  // ---------------------------------------------------------------------------
  // Mailto
  // ---------------------------------------------------------------------------

  const mailtoHref = `mailto:Sales@Rowlandplant.co.uk?subject=${encodeURIComponent(
    'Quote Request — Rowland Plant Hire'
  )}&body=${encodeURIComponent(buildMailtoBody(items, startDate, days))}`

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="quote-backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <aside
        ref={drawerRef}
        className={`quote-drawer${drawerOpen ? ' quote-drawer--open' : ''}`}
        aria-label="Quote basket"
        aria-hidden={!drawerOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* ---- Header ---- */}
        <div className="qd-header">
          <div className="qd-header__left">
            <h2 className="qd-header__title">Your Quote</h2>
            {itemCount > 0 && (
              <span className="qd-header__count" aria-label={`${itemCount} items`}>
                {itemCount}
              </span>
            )}
          </div>
          <div className="qd-header__actions">
            {items.length > 0 && (
              <button
                className="qd-clear-btn"
                onClick={clearQuote}
                aria-label="Clear all items"
              >
                Clear all
              </button>
            )}
            <button
              className="qd-close-btn"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close quote drawer"
            >
              <CloseIcon size={20} />
            </button>
          </div>
        </div>

        {/* ---- Scrollable body ---- */}
        <div className="qd-body">

          {/* Hire Dates */}
          <div className="quote-dates">
            <p className="quote-dates__label">Hire Dates</p>

            <div className="quote-dates__row">
              <label className="quote-dates__field-label" htmlFor="qd-start-date">
                Start date
              </label>
              <input
                id="qd-start-date"
                className="quote-dates__date-input"
                type="date"
                min={todayString()}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <p className="quote-dates__field-label">Duration</p>
            <div className="quote-dates__duration-grid">
              {DURATION_OPTIONS.map((opt) => (
                <button
                  key={opt.days}
                  className={`quote-dates__dur-btn${days === opt.days ? ' quote-dates__dur-btn--active' : ''}`}
                  onClick={() => setDays(opt.days)}
                  aria-pressed={days === opt.days}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="qd-items">
            {items.length === 0 ? (
              <div className="qd-empty">
                <div className="qd-empty__icon" aria-hidden="true">
                  <CartEmptyIcon />
                </div>
                <p className="qd-empty__msg">Your quote is empty</p>
                <Link
                  href="/tool-hire"
                  className="qd-empty__link"
                  onClick={() => setDrawerOpen(false)}
                >
                  Browse Equipment
                </Link>
              </div>
            ) : (
              lineItems.map((item) => (
                <QuoteItem key={item.id} item={item} days={days} />
              ))
            )}
          </div>
        </div>

        {/* ---- Mobile close strip (shown when no footer) ---- */}
        {items.length === 0 && (
          <div className="qd-mobile-close">
            <button
              className="qd-mobile-close__btn"
              onClick={() => setDrawerOpen(false)}
            >
              ✕ Close
            </button>
          </div>
        )}

        {/* ---- Footer ---- */}
        {items.length > 0 && (
          <div className="qd-footer">
            <div className="qd-total">
              <span className="qd-total__label">Estimated total</span>
              <span className="qd-total__amount">
                {grandTotal > 0 ? formatCurrency(grandTotal) : '—'}
              </span>
            </div>
            {hasPOA && (
              <p className="qd-poa-notice">
                Includes POA items — call for full quote
              </p>
            )}

            <a
              href={mailtoHref}
              className="qd-enquiry-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Quote Enquiry
            </a>

            <p className="qd-small-print">
              Prices are estimates only, subject to VAT at 20%
            </p>

            <button
              className="qd-close-drawer-btn"
              onClick={() => setDrawerOpen(false)}
            >
              ✕ Close Quote
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
