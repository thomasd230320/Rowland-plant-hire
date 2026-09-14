import SiteChrome from '@/components/SiteChrome'
import LogoBanner from '@/components/LogoBanner'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <SiteChrome>
      <LogoBanner />

      <div className="not-found-page">

        <p className="not-found-page__code">404</p>

        <h1 className="not-found-page__title">Page Not Found</h1>

        <p className="not-found-page__sub">
          Sorry, we couldn&rsquo;t find the page you were looking for. It may have moved or the
          link may be out of date. Try one of the links below or give us a call.
        </p>

        <nav className="not-found-links" aria-label="Suggested pages">
          <Link href="/" className="not-found-link">Home</Link>
          <Link href="/tool-hire" className="not-found-link">Tool Hire</Link>
          <Link href="/plant-hire" className="not-found-link">Plant Hire</Link>
          <Link href="/about" className="not-found-link">About</Link>
        </nav>

        <a href="tel:+441865922611" className="not-found-call">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call us: 01865 922611
        </a>

      </div>

      <Footer />
    </SiteChrome>
  )
}
