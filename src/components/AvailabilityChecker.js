'use client'
import { useState } from 'react'

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  )
}

function HireHopLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0072C6" aria-hidden="true">
      <path d="M3 5v14h18V5H3zm10 12H5v-2h8v2zm0-4H5v-2h8v2zm6-4H5V7h14v2z"/>
    </svg>
  )
}

export default function AvailabilityChecker({ productTitle, availability }) {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState(null)

  const today = new Date().toISOString().split('T')[0]

  function handleCheck() {
    if (!startDate || !endDate) return
    setResult({
      ok: availability?.status !== 'out',
      units: availability?.units ?? 1,
      dueBack: availability?.dueBack,
    })
  }

  function handleClose() {
    setOpen(false)
    setResult(null)
    setStartDate('')
    setEndDate('')
  }

  return (
    <>
      <button className="avail-check-btn" onClick={() => setOpen(true)} type="button">
        <CalendarIcon />
        Check Dates
      </button>

      {open && (
        <div className="avail-overlay" onClick={handleClose} aria-modal="true" role="dialog" aria-label={`Check availability for ${productTitle}`}>
          <div className="avail-modal" onClick={e => e.stopPropagation()}>

            <div className="avail-modal__head">
              <div className="avail-modal__head-text">
                <p className="avail-modal__subtitle">Check Availability</p>
                <h3 className="avail-modal__title">{productTitle}</h3>
              </div>
              <button className="avail-modal__close" onClick={handleClose} aria-label="Close modal" type="button">
                <CloseIcon />
              </button>
            </div>

            <div className="avail-modal__body">
              <div className="avail-modal__date-row">
                <div className="avail-modal__field">
                  <label className="avail-modal__label" htmlFor={`start-${productTitle}`}>
                    Hire Start Date
                  </label>
                  <input
                    id={`start-${productTitle}`}
                    type="date"
                    className="avail-modal__date-input"
                    value={startDate}
                    min={today}
                    onChange={e => { setStartDate(e.target.value); setResult(null) }}
                  />
                </div>
                <div className="avail-modal__field">
                  <label className="avail-modal__label" htmlFor={`end-${productTitle}`}>
                    Hire End Date
                  </label>
                  <input
                    id={`end-${productTitle}`}
                    type="date"
                    className="avail-modal__date-input"
                    value={endDate}
                    min={startDate || today}
                    onChange={e => { setEndDate(e.target.value); setResult(null) }}
                  />
                </div>
              </div>

              <button
                className="avail-modal__check-btn"
                onClick={handleCheck}
                disabled={!startDate || !endDate}
                type="button"
              >
                Check Availability
              </button>

              {result && (
                <div className={`avail-modal__result ${result.ok ? 'avail-modal__result--ok' : 'avail-modal__result--no'}`}>
                  {result.ok ? (
                    <>
                      <span className="avail-modal__result-icon avail-modal__result-icon--ok"><CheckIcon /></span>
                      <div>
                        <p className="avail-modal__result-title">Available for your dates</p>
                        <p className="avail-modal__result-sub">
                          {result.units > 0 ? `${result.units} unit${result.units !== 1 ? 's' : ''} available` : 'Available to book'}
                          {' '}&mdash; call us to confirm your hire
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="avail-modal__result-icon avail-modal__result-icon--no"><AlertIcon /></span>
                      <div>
                        <p className="avail-modal__result-title">Not available for selected dates</p>
                        <p className="avail-modal__result-sub">
                          {result.dueBack ? result.dueBack : 'Currently out on hire — contact us for alternative dates'}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="avail-modal__ctas">
                <a href="tel:+441865922611" className="avail-modal__call-btn">
                  Call to Book: 01865 922611
                </a>
              </div>
            </div>

            <div className="avail-modal__foot">
              <span className="avail-modal__powered">
                <HireHopLogo />
                Live availability powered by <strong>HireHop</strong>
              </span>
              <span className="avail-modal__demo-tag">Demo — not live yet</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
