import Link from 'next/link'
import Image from 'next/image'
import LogoBanner from '@/components/LogoBanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Plant Hire Witney',
  description: 'Mini excavators, diggers and dumpers for hire in Witney, West Oxfordshire and The Cotswolds. Ideal for groundworks, landscaping and construction.',
  alternates: { canonical: '/plant-hire' },
}

const CATEGORIES = [
  {
    title: 'Mini Excavators & Diggers',
    desc: 'Compact excavators from 1T to 3T — ideal for footings, landscaping and restricted-access groundworks.',
    href: '/plant-hire/mini-excavators-diggers',
    image: '/images/IMG_7871.WEBP',
    imageAlt: 'Hitachi 3T mini excavator for hire',
    items: ['1T Mini Excavator', '1.5T Kubota U10-3', '3.0T Hitachi ZX27-3'],
  },
  {
    title: 'Skip Loaders & Dumpers',
    desc: 'Tracked and wheeled site dumpers for moving spoil and aggregates across all ground conditions.',
    href: '/plant-hire/skip-loaders-dumpers',
    image: '/images/IMG_7872.WEBP',
    imageAlt: 'Tracked mini dumper for hire',
    items: ['Tracked Mini Dumper (Kinowa HS701)', 'Wheeled Site Dumper (AUSA)'],
  },
]

export default function PlantHirePage() {
  return (
    <>
      <LogoBanner />

      <section className="plant-hero">
        <div className="plant-hero__inner">
          <p className="plant-hero__eyebrow">Plant Hire</p>
          <h1 className="plant-hero__title">Heavy Machinery,<br /><span>Hire by the Day</span></h1>
          <p className="plant-hero__sub">
            Mini excavators and site dumpers available throughout Witney, West Oxfordshire and The Cotswolds.
            Delivery and collection from site available.
          </p>
          <div className="plant-hero__ctas">
            <a href="tel:+441865922611" className="plant-hero__call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              01865 922611
            </a>
            <a href="#enquiry" className="plant-hero__quote">Get a Quote</a>
          </div>
        </div>
      </section>

      <section className="plant-cats">
        <div className="plant-cats__inner">
          <h2 className="plant-cats__heading">Browse Plant Categories</h2>
          <div className="plant-cats__grid">
            {CATEGORIES.map(cat => (
              <Link key={cat.href} href={cat.href} className="plant-cat-card">
                <div className="plant-cat-card__img-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="plant-cat-card__photo"
                  />
                  <div className="plant-cat-card__img-overlay" aria-hidden="true" />
                </div>
                <div className="plant-cat-card__body">
                  <h3 className="plant-cat-card__title">{cat.title}</h3>
                  <p className="plant-cat-card__desc">{cat.desc}</p>
                  <ul className="plant-cat-card__items">
                    {cat.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="plant-cat-card__cta">
                    View Equipment
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="plant-delivery">
        <div className="plant-delivery__inner">
          <div className="plant-delivery__item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <strong>Flexible Hire Periods</strong>
              <p>Daily, weekly and long-term rates available — POA for longer projects</p>
            </div>
          </div>
          <div className="plant-delivery__item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13" rx="2"/>
              <path d="M16 8h4l3 5v3h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <div>
              <strong>Delivery &amp; Collection</strong>
              <p>We deliver to and collect from site at a mutually convenient time</p>
            </div>
          </div>
          <div className="plant-delivery__item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <strong>Hire Insurance Available</strong>
              <p>Optional hire insurance across all plant equipment for a small additional fee</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
