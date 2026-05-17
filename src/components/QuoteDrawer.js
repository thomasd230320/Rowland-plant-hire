'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuote, calcItemTotal } from '@/contexts/QuoteContext'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabaseClient'

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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DURATION_OPTIONS = [
  { label: '1 day',   days: 1  },
  { label: '2 days',  days: 2  },
  { label: '3 days',  days: 3  },
  { label: '4 days',  days: 4  },
  { label: '5 days',  days: 5  },
  { label: '1 week',  days: 7  },
  { label: '2 weeks', days: 14 },
  { label: '3 weeks', days: 21 },
]

const WAIVER_RATE = 0.15

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCurrency(n) { return `£${n.toFixed(2)}` }
function todayString() { return new Date().toISOString().split('T')[0] }

function formatSignatureDate() {
  const now = new Date()
  const d = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const t = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return `${d} at ${t}`
}

function formatShortDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function buildMailtoBody(items, startDate, days, userEmail, signatureName, deliveryAddress, waivers) {
  const durationLabel = DURATION_OPTIONS.find((o) => o.days === days)?.label ?? `${days} day(s)`
  const lines = items.map((item) => {
    const base = calcItemTotal(item.pricing, days, item.qty)
    const total = base != null && waivers[item.id] ? base * (1 + WAIVER_RATE) : base
    const price = total != null ? formatCurrency(total) : 'POA'
    return `  - ${item.title} x${item.qty} — ${price} (${durationLabel}${waivers[item.id] ? ' + damage waiver' : ''})`
  })
  return [
    'Hi Rowland Plant Hire,',
    '',
    'Please could you provide a quote for the following equipment:',
    '',
    ...lines,
    '',
    `Start Date: ${startDate || 'TBC'}`,
    `Duration: ${durationLabel}`,
    '',
    ...(deliveryAddress ? [`Delivery Address:\n${deliveryAddress}`, ''] : []),
    ...(userEmail ? [`Customer email: ${userEmail}`, ''] : []),
    'Please confirm availability and pricing (inc. VAT).',
    '',
    'Many thanks',
    '',
    '--------------------------------',
    'HIRE AGREEMENT',
    'I agree to the Rowland Plant Ltd Terms & Conditions.',
    `Signed: ${signatureName}`,
    `Date: ${formatSignatureDate()}`,
    '--------------------------------',
  ].join('\n')
}

function buildWhatsAppText(items, startDate, days) {
  const durationLabel = DURATION_OPTIONS.find((o) => o.days === days)?.label ?? `${days} day(s)`
  const lines = items.map((item) => `  - ${item.title} x${item.qty}`)
  return [
    'Hi Rowland Plant Hire,',
    '',
    "I'd like to check availability for:",
    '',
    ...lines,
    '',
    `Start: ${startDate || 'TBC'}`,
    `Duration: ${durationLabel}`,
    '',
    'Please let me know availability and pricing.',
  ].join('\n')
}

// ---------------------------------------------------------------------------
// Hire Agreement
// ---------------------------------------------------------------------------

const AGREEMENT_BULLETS = [
  'You are responsible for the care and custody of all equipment during hire.',
  'Risk passes to you on delivery — hire insurance is available for a small additional fee.',
  'Equipment must be returned clean and in the same condition as received.',
  'Rowland Plant Ltd retains ownership of all goods at all times.',
]

function HireAgreement({ signatureName, onChange }) {
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const signed = signatureName.trim().length >= 2
  return (
    <div className="qd-agreement">
      <p className="qd-agreement__title">Hire Agreement</p>
      <ul className="qd-agreement__bullets">
        {AGREEMENT_BULLETS.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <Link href="/terms-conditions" className="qd-agreement__terms-link" target="_blank" rel="noopener noreferrer">
        View full Terms &amp; Conditions →
      </Link>
      <label className="qd-agreement__sig-label" htmlFor="qd-sig-name">
        Sign by typing your full name
      </label>
      <input
        id="qd-sig-name"
        className="qd-sig-input"
        type="text"
        placeholder="Your full name"
        value={signatureName}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="name"
        aria-required="true"
      />
      {signed && <p className="qd-agreement__confirmed">✓ {signatureName} — {today}</p>}
      <p className="qd-agreement__legal">
        By typing your name you confirm you have read and agree to the Rowland Plant Ltd Hire Terms &amp; Conditions.
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Auth panel + past quotes
// ---------------------------------------------------------------------------

function AuthPanel({ onHireAgain }) {
  const { user, loading, signIn, signUp, signOut, authAvailable } = useAuth()
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)
  const [pastQuotes, setPastQuotes] = useState([])
  const [quotesLoading, setQuotesLoading] = useState(false)

  useEffect(() => {
    if (!user || !supabase) { setPastQuotes([]); return }
    setQuotesLoading(true)
    supabase
      .from('quote_requests')
      .select('id, created_at, items, days, start_date, delivery_address')
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => { setPastQuotes(data ?? []); setQuotesLoading(false) })
  }, [user])

  if (!authAvailable) return null
  if (loading) return <div className="qd-auth"><p className="qd-auth__loading">Loading…</p></div>

  if (user) {
    return (
      <div className="qd-auth qd-auth--signed-in qd-auth--compact">
        <div className="qd-auth__user-row">
          <div className="qd-auth__user-info">
            <span className="qd-auth__signed-in-label">Enquiring as</span>
            <span className="qd-auth__email">{user.email}</span>
          </div>
          <button className="qd-auth__signout-btn" onClick={signOut}>Sign out</button>
        </div>
        {quotesLoading && <p className="qd-past__loading">Loading past quotes…</p>}
        {!quotesLoading && pastQuotes.length > 0 && (
          <div className="qd-past">
            <p className="qd-past__title">Your recent enquiries</p>
            {pastQuotes.map((q) => (
              <div key={q.id} className="qd-past__item">
                <div className="qd-past__meta">
                  <span className="qd-past__date">{formatShortDate(q.created_at)}</span>
                  <span className="qd-past__count">{Array.isArray(q.items) ? q.items.length : 0} item(s)</span>
                </div>
                <button className="qd-past__hire-again" onClick={() => onHireAgain(q)}>
                  Hire again
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return
    setBusy(true); setMsg(null)
    if (mode === 'signin') {
      const { error } = await signIn(email, password)
      if (error) setMsg({ type: 'error', text: error.message })
    } else {
      const { error, needsConfirm } = await signUp(email, password)
      if (error) setMsg({ type: 'error', text: error.message })
      else if (needsConfirm) setMsg({ type: 'info', text: 'Check your email to confirm your account, then sign in.' })
    }
    setBusy(false)
  }

  return (
    <div className="qd-auth">
      <div className="qd-auth__header">
        <p className="qd-auth__title">{mode === 'signin' ? 'Sign in for faster booking' : 'Create account'}</p>
      </div>
      <form className="qd-auth__form" onSubmit={handleSubmit} noValidate>
        <input className="qd-auth__input" type="email" placeholder="Your email" value={email}
          onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        <input className="qd-auth__input" type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} required />
        {msg && <p className={`qd-auth__msg qd-auth__msg--${msg.type}`}>{msg.text}</p>}
        <button className="qd-auth__submit" type="submit" disabled={busy}>
          {busy ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
      <button className="qd-auth__toggle" type="button"
        onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setMsg(null) }}>
        {mode === 'signin' ? 'No account? Create one' : 'Already have an account? Sign in'}
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// QuoteItem
// ---------------------------------------------------------------------------

function QuoteItem({ item, days, waiver, onToggleWaiver }) {
  const { removeItem, updateQty } = useQuote()
  const base = calcItemTotal(item.pricing, days, item.qty)
  const total = base != null && waiver ? base * (1 + WAIVER_RATE) : base
  const priceLabel = total != null ? formatCurrency(total) : 'POA'
  const isPOA = total == null

  return (
    <div className="qd-item">
      <div className="qd-item__thumb">
        {item.image ? (
          <div className="qd-item__img-wrap">
            <Image src={item.image} alt={item.title} fill sizes="52px" className="qd-item__img" />
          </div>
        ) : (
          <div className="qd-item__img-placeholder" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
        )}
      </div>
      <div className="qd-item__info">
        <p className="qd-item__title">{item.title}</p>
        <div className="qd-item__controls">
          <div className="qd-item__qty">
            <button className="qd-item__qty-btn" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
            <span className="qd-item__qty-val">{item.qty}</span>
            <button className="qd-item__qty-btn" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
          </div>
          <span className={`qd-item__price${isPOA ? ' qd-item__price--poa' : ''}`}>{priceLabel}</span>
        </div>
        {!isPOA && (
          <label className="qd-item__waiver">
            <input
              type="checkbox"
              className="qd-item__waiver-check"
              checked={!!waiver}
              onChange={onToggleWaiver}
            />
            <span>Add damage waiver (+15%)</span>
          </label>
        )}
      </div>
      <button className="qd-item__remove" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.title}`}>
        <CloseIcon size={16} />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// QuoteDrawer
// ---------------------------------------------------------------------------

export default function QuoteDrawer() {
  const { items, days, setDays, startDate, setStartDate, drawerOpen, setDrawerOpen, clearQuote, loadQuote } = useQuote()
  const { user, authAvailable } = useAuth()
  const [signatureName, setSignatureName] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [waivers, setWaivers] = useState({})
  const drawerRef = useRef(null)

  const signed = signatureName.trim().length >= 2

  function toggleWaiver(id) { setWaivers((w) => ({ ...w, [id]: !w[id] })) }

  // Reset signature only when drawer closes (keep delivery address)
  useEffect(() => { if (!drawerOpen) setSignatureName('') }, [drawerOpen])

  // Escape key
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape' && drawerOpen) setDrawerOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [drawerOpen, setDrawerOpen])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Focus first focusable element
  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      drawerRef.current
        .querySelector('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')
        ?.focus()
    }
  }, [drawerOpen])

  // Totals (including damage waiver per item)
  const lineItems = items.map((item) => {
    const base = calcItemTotal(item.pricing, days, item.qty)
    const lineTotal = base != null && waivers[item.id] ? base * (1 + WAIVER_RATE) : base
    return { ...item, lineTotal }
  })
  const hasPOA = lineItems.some((li) => li.lineTotal == null)
  const grandTotal = lineItems.reduce((sum, li) => sum + (li.lineTotal ?? 0), 0)
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  async function saveQuoteToSupabase() {
    if (!user || !supabase) return
    try {
      await supabase.from('quote_requests').insert({
        user_id: user.id,
        items: items.map((i) => ({ id: i.id, title: i.title, qty: i.qty, pricing: i.pricing, image: i.image })),
        days,
        start_date: startDate || null,
        delivery_address: deliveryAddress || null,
        total_estimate: grandTotal > 0 ? grandTotal : null,
      })
    } catch { /* silent */ }
  }

  const mailtoHref = `mailto:Sales@Rowlandplant.co.uk?subject=${encodeURIComponent(
    user ? `Quote Request from ${user.email} — Rowland Plant Hire` : 'Quote Request — Rowland Plant Hire'
  )}&body=${encodeURIComponent(buildMailtoBody(items, startDate, days, user?.email, signatureName, deliveryAddress, waivers))}`

  const whatsappHref = `https://wa.me/441865922611?text=${encodeURIComponent(buildWhatsAppText(items, startDate, days))}`

  function close() { setDrawerOpen(false) }

  function handleSend(e) {
    if (!signed) { e.preventDefault(); return }
    saveQuoteToSupabase()
    setTimeout(close, 150)
  }

  function handleHireAgain(quote) {
    if (quote.delivery_address) setDeliveryAddress(quote.delivery_address)
    loadQuote(
      Array.isArray(quote.items) ? quote.items : [],
      quote.days,
      quote.start_date,
    )
  }

  return (
    <>
      {drawerOpen && <div className="quote-backdrop" onClick={close} aria-hidden="true" />}

      <aside
        ref={drawerRef}
        className={`quote-drawer${drawerOpen ? ' quote-drawer--open' : ''}`}
        aria-label="Quote basket"
        aria-hidden={!drawerOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="qd-header">
          <div className="qd-header__left">
            <h2 className="qd-header__title">Your Quote</h2>
            {itemCount > 0 && <span className="qd-header__count" aria-label={`${itemCount} items`}>{itemCount}</span>}
          </div>
          <div className="qd-header__actions">
            {items.length > 0 && (
              <button className="qd-clear-btn" onClick={clearQuote} aria-label="Clear all items">Clear all</button>
            )}
            <button className="qd-close-btn" onClick={close} aria-label="Close quote drawer">
              <CloseIcon size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="qd-body">

          {authAvailable && user && (
            <div className="qd-status qd-status--ok">
              <span className="qd-status__dot" />
              <span className="qd-status__text">Enquiring as {user.email}</span>
            </div>
          )}

          <AuthPanel onHireAgain={handleHireAgain} />

          {/* Delivery address */}
          <div className="qd-delivery">
            <label className="qd-delivery__label" htmlFor="qd-delivery-addr">
              Delivery address <span className="qd-delivery__optional">(optional)</span>
            </label>
            <textarea
              id="qd-delivery-addr"
              className="qd-delivery__input"
              placeholder="Site address or postcode"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              rows={2}
            />
          </div>

          {/* Hire dates */}
          <div className="quote-dates">
            <p className="quote-dates__label">Hire Dates</p>
            <div className="quote-dates__row">
              <label className="quote-dates__field-label" htmlFor="qd-start-date">Start date</label>
              <input id="qd-start-date" className="quote-dates__date-input" type="date"
                min={todayString()} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <p className="quote-dates__field-label">Duration</p>
            <div className="quote-dates__duration-grid">
              {DURATION_OPTIONS.map((opt) => (
                <button key={opt.days}
                  className={`quote-dates__dur-btn${days === opt.days ? ' quote-dates__dur-btn--active' : ''}`}
                  onClick={() => setDays(opt.days)} aria-pressed={days === opt.days}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="qd-items">
            {items.length === 0 ? (
              <div className="qd-empty">
                <div className="qd-empty__icon" aria-hidden="true"><CartEmptyIcon /></div>
                <p className="qd-empty__msg">Your quote is empty</p>
                <Link href="/tool-hire" className="qd-empty__link" onClick={close}>Browse Equipment</Link>
              </div>
            ) : (
              lineItems.map((item) => (
                <QuoteItem
                  key={item.id}
                  item={item}
                  days={days}
                  waiver={!!waivers[item.id]}
                  onToggleWaiver={() => toggleWaiver(item.id)}
                />
              ))
            )}
          </div>

          {/* Hire agreement — in body so items are always reviewable above it */}
          {items.length > 0 && (
            <HireAgreement signatureName={signatureName} onChange={setSignatureName} />
          )}
        </div>

        {/* Footer — lean: just totals + send + WhatsApp + close */}
        {items.length > 0 ? (
          <div className="qd-footer">
            <div className="qd-total">
              <span className="qd-total__label">Estimated total</span>
              <span className="qd-total__amount">{grandTotal > 0 ? formatCurrency(grandTotal) : '—'}</span>
            </div>
            {hasPOA && <p className="qd-poa-notice">Includes POA items — call for full quote</p>}

            <a
              href={signed ? mailtoHref : undefined}
              className={`qd-enquiry-btn${!signed ? ' qd-enquiry-btn--disabled' : ''}`}
              aria-disabled={!signed}
              onClick={handleSend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Quote Enquiry
            </a>
            {!signed && <p className="qd-sig-nudge">Scroll up to sign the hire agreement</p>}

            <a
              href={whatsappHref}
              className="qd-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire via WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp Enquiry
            </a>

            <p className="qd-small-print">Prices are estimates only, subject to VAT at 20%</p>
            <button className="qd-close-drawer-btn" onClick={close}>✕ Close</button>
          </div>
        ) : (
          <div className="qd-footer qd-footer--empty">
            <button className="qd-close-drawer-btn qd-close-drawer-btn--full" onClick={close}>✕ Close</button>
          </div>
        )}
      </aside>
    </>
  )
}
