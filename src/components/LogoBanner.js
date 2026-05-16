import Link from 'next/link'

export default function LogoBanner() {
  return (
    <div className="logo-banner">
      <Link href="/" className="logo-banner__logo">
        <span className="logo-banner__top">ROWLAND</span>
        <span className="logo-banner__bottom">Tool &amp; Plant Hire</span>
      </Link>
    </div>
  )
}
