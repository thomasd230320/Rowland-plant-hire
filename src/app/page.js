import Link from 'next/link'
import Footer from '@/components/Footer'
import ScrollVideoAnimation from '@/components/ScrollVideoAnimation'

export const metadata = {
  title: 'Rowland Tool & Plant Hire | Witney, West Oxfordshire & The Cotswolds',
  description: 'Tool and plant hire in Witney, West Oxfordshire and The Cotswolds. Breakers, mixers, saws, drills, compactors, scaffold towers, mini excavators and more.',
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
    </svg>
  )
}

function ToolIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function PlantIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Scroll-driven video animation — very first thing on page */}
      <ScrollVideoAnimation />

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="home-hero__eyebrow">
            <LocationIcon />
            Witney, West Oxfordshire &amp; The Cotswolds
          </p>
          <h1 className="home-hero__title">
            Tool &amp; Plant<br />
            <span>Hire</span>
          </h1>
          <p className="home-hero__sub">
            Professional equipment hire for trade and DIY — delivered with expert advice
          </p>
          <div className="home-hero__ctas">
            <a href="tel:+441865922611" className="home-hero__phone-btn">
              <PhoneIcon />
              01865 922611
            </a>
            <a href="mailto:Sales@Rowlandplant.co.uk" className="home-hero__email-btn">
              <MailIcon />
              Sales@Rowlandplant.co.uk
            </a>
            <a href="#enquiry" className="home-hero__quote-btn">
              <QuoteIcon />
              Get a Quote
            </a>
          </div>
          <nav className="home-hero__nav" aria-label="Main sections">
            <Link href="/tool-hire" className="home-hero__nav-link">Tool Hire</Link>
            <Link href="/home/plant-hire" className="home-hero__nav-link">Plant Hire</Link>
            <Link href="/home/about-us" className="home-hero__nav-link">About Us</Link>
            <Link href="/home/terms-conditions" className="home-hero__nav-link">Terms</Link>
          </nav>
        </div>
      </section>

      {/* Category feature cards */}
      <section className="home-cats">
        <h2 className="home-cats__heading">What do you need?</h2>
        <div className="home-cats__grid">
          <Link href="/tool-hire" className="home-cat-card">
            <div className="home-cat-card__icon">
              <ToolIcon />
            </div>
            <div className="home-cat-card__body">
              <h3 className="home-cat-card__label">Tool Hire</h3>
              <p className="home-cat-card__desc">
                Breakers, mixers, saws, drills, compactors, scaffold towers and more.
                Browse our full tool hire range with transparent pricing.
              </p>
              <span className="home-cat-card__cta">
                Browse tools <ArrowIcon />
              </span>
            </div>
          </Link>

          <Link href="/home/plant-hire" className="home-cat-card">
            <div className="home-cat-card__icon">
              <PlantIcon />
            </div>
            <div className="home-cat-card__body">
              <h3 className="home-cat-card__label">Plant Hire</h3>
              <p className="home-cat-card__desc">
                Mini excavators and diggers for groundworks, landscaping and construction.
                Ideal for trade and domestic projects.
              </p>
              <span className="home-cat-card__cta">
                View plant <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact strip */}
      <section className="home-contact-strip">
        <div className="home-contact-strip__inner">
          <div className="home-contact-strip__item">
            <PhoneIcon />
            <div>
              <p className="home-contact-strip__label">Hire Desk</p>
              <a href="tel:+441865922611" className="home-contact-strip__value">01865 922611</a>
            </div>
          </div>
          <div className="home-contact-strip__item">
            <MailIcon />
            <div>
              <p className="home-contact-strip__label">Email</p>
              <a href="mailto:Sales@Rowlandplant.co.uk" className="home-contact-strip__value">Sales@Rowlandplant.co.uk</a>
            </div>
          </div>
          <div className="home-contact-strip__item">
            <LocationIcon />
            <div>
              <p className="home-contact-strip__label">Area Covered</p>
              <p className="home-contact-strip__value">Witney, West Oxfordshire &amp; The Cotswolds</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
