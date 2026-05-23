import Link from 'next/link'
import Footer from '@/components/Footer'
import ScrollVideoAnimation from '@/components/ScrollVideoAnimation'

export const metadata = {
  title: 'Rowland Tool & Plant Hire | Witney, Oxfordshire',
  description: 'Tool and plant hire in Witney, West Oxfordshire and The Cotswolds. Breakers, mixers, saws, drills, compactors, scaffold towers, mini excavators and more.',
  alternates: { canonical: '/' },
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

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
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
            Professional Equipment<br />
            <span>Hire for Every Job</span>
          </h1>
          <p className="home-hero__sub">
            Trade-quality tools and plant hire — delivered with expert advice
          </p>
          <div className="home-hero__ctas">
            <a href="#enquiry" className="home-hero__quote-btn">
              Get a Quote
            </a>
            <a href="tel:+441865922611" className="home-hero__phone-btn">
              <PhoneIcon />
              01865 922611
            </a>
            <a href="mailto:Sales@Rowlandplant.co.uk" className="home-hero__email-btn">
              <MailIcon />
              Email Us
            </a>
          </div>
          <nav className="home-hero__nav" aria-label="Main sections">
            <Link href="/tool-hire" className="home-hero__nav-link">Tool Hire</Link>
            <Link href="/plant-hire" className="home-hero__nav-link">Plant Hire</Link>
            <Link href="/about" className="home-hero__nav-link">About Us</Link>
            <Link href="/terms-conditions" className="home-hero__nav-link">Terms</Link>
          </nav>
        </div>
      </section>

      {/* Category feature cards */}
      <section className="home-cats">
        <h2 className="home-cats__heading">What do you need?</h2>
        <div className="home-cats__grid">
          <Link href="/tool-hire" className="home-cat-card">
            <div className="home-cat-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <div className="home-cat-card__body">
              <h3 className="home-cat-card__label">Tool Hire</h3>
              <p className="home-cat-card__desc">
                Breakers, mixers, saws, drills, compactors, scaffold towers and more.
                Browse our full tool hire range with transparent pricing.
              </p>
              <ul className="home-cat-card__list">
                <li>Concrete Breaking &amp; Mixing</li>
                <li>Cutting &amp; Drilling</li>
                <li>Compacting Equipment</li>
                <li>Scaffold Towers &amp; Access</li>
              </ul>
              <span className="home-cat-card__cta">
                Browse tools <ArrowIcon />
              </span>
            </div>
          </Link>

          <Link href="/plant-hire" className="home-cat-card">
            <div className="home-cat-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13" rx="2"/>
                <path d="M16 8h4l3 5v3h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div className="home-cat-card__body">
              <h3 className="home-cat-card__label">Plant Hire</h3>
              <p className="home-cat-card__desc">
                Mini excavators and diggers for groundworks, landscaping and construction.
                Ideal for trade and domestic projects.
              </p>
              <ul className="home-cat-card__list">
                <li>Mini Excavators (1T–3T)</li>
                <li>Tracked &amp; Wheeled Dumpers</li>
                <li>Delivery &amp; Collection Available</li>
                <li>Up to 3 Tonnes</li>
              </ul>
              <span className="home-cat-card__cta">
                View plant <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* How to Hire */}
      <section className="how-to-hire">
        <div className="how-to-hire__inner">
          <h2 className="how-to-hire__heading">How to Hire</h2>
          <p className="how-to-hire__sub">Simple, fast and flexible — getting equipment on site takes minutes</p>
          <div className="how-to-hire__steps">
            <div className="hire-step">
              <div className="hire-step__num">1</div>
              <div className="hire-step__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <h3>Browse Equipment</h3>
              <p>Search our full range of tools and plant hire, or call us and we&apos;ll recommend exactly what you need for your job.</p>
            </div>
            <div className="hire-step__connector" aria-hidden="true" />
            <div className="hire-step">
              <div className="hire-step__num">2</div>
              <div className="hire-step__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3>Call or Enquire</h3>
              <p>Call <a href="tel:+441865922611" className="hire-step__link">01865 922611</a> or use our quote builder to confirm availability and get a price. Weekend and weekly rates available.</p>
            </div>
            <div className="hire-step__connector" aria-hidden="true" />
            <div className="hire-step">
              <div className="hire-step__num">3</div>
              <div className="hire-step__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>Collect or Get Delivered</h3>
              <p>Collect from our Witney depot or we deliver directly to your site at a time that suits you — and collect it when you&apos;re done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="why-choose__inner">
          <h2 className="why-choose__heading">Why Choose Rowland?</h2>
          <div className="why-choose__grid">
            <div className="why-item">
              <div className="why-item__icon"><ShieldIcon /></div>
              <h3>HAE Accredited</h3>
              <p>Full member of the Hire Association Europe — your guarantee of quality, safety and professional standards.</p>
            </div>
            <div className="why-item">
              <div className="why-item__icon"><TruckIcon /></div>
              <h3>Delivery &amp; Collection</h3>
              <p>We deliver plant and equipment directly to your site and collect it when you're done — at a time that suits you.</p>
            </div>
            <div className="why-item">
              <div className="why-item__icon"><ClockIcon /></div>
              <h3>Flexible Hire Periods</h3>
              <p>Hire by the day, week or longer. We work with your project timeline, not against it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <h2 className="testimonials__heading">What Our Customers Say</h2>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="testimonial-card__text">
                "Excellent service from start to finish. The mini excavator was in perfect condition and the team gave us brilliant advice on which size we needed for the job."
              </p>
              <p className="testimonial-card__author">— Trade Customer, Witney</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="testimonial-card__text">
                "Really helpful and knowledgeable. Hired a breaker and scaffold tower — both arrived on time and in great condition. Would absolutely recommend."
              </p>
              <p className="testimonial-card__author">— DIY Customer, Burford</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="testimonial-card__text">
                "Best local hire company in the area. Very competitive pricing and always quick to respond. We use them for all our groundworks projects."
              </p>
              <p className="testimonial-card__author">— Building Contractor, Chipping Norton</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section className="coverage">
        <div className="coverage__inner">
          <div className="coverage__text">
            <h2>Covering West Oxfordshire &amp; The Cotswolds</h2>
            <p>
              Based in Witney, we serve trade and domestic customers across a wide area of
              West Oxfordshire and the surrounding Cotswolds. Whether you're in Witney,
              Chipping Norton, Burford, Carterton, Woodstock or further afield — get in
              touch and we'll confirm we can help.
            </p>
            <ul className="coverage__towns">
              <li><MapPinIcon /> Witney</li>
              <li><MapPinIcon /> Chipping Norton</li>
              <li><MapPinIcon /> Burford</li>
              <li><MapPinIcon /> Carterton</li>
              <li><MapPinIcon /> Woodstock</li>
              <li><MapPinIcon /> Charlbury</li>
            </ul>
            <a href="tel:+441865922611" className="coverage__cta">
              <PhoneIcon /> Call to check your area
            </a>
          </div>
          <div className="coverage__badge">
            <div className="coverage__badge-inner">
              <p className="coverage__badge-label">Serving</p>
              <p className="coverage__badge-area">West Oxfordshire</p>
              <p className="coverage__badge-area coverage__badge-area--small">&amp; The Cotswolds</p>
            </div>
          </div>
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
