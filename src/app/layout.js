import './globals.css'
import { Oswald, Open_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar'
import Providers from '@/components/Providers'
import QuoteDrawer from '@/components/QuoteDrawer'
import QuoteFloatingBtn from '@/components/QuoteFloatingBtn'
import StickyCallBtn from '@/components/StickyCallBtn'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://rowlandplant.co.uk'),
  title: {
    default: 'Rowland Tool & Plant Hire | Witney, Oxfordshire',
    template: '%s | Rowland Plant Hire',
  },
  description:
    'Plant hire and tool hire in Witney, West Oxfordshire and the Cotswolds. Mini excavators, dumpers, power tools, gardening equipment and more from Rowland Plant Ltd.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Rowland Tool & Plant Hire',
    title: 'Rowland Tool & Plant Hire | Witney, Oxfordshire',
    description:
      'Plant hire and tool hire in Witney, West Oxfordshire and the Cotswolds. Mini excavators, dumpers, power tools, gardening equipment and more.',
    url: '/',
    images: [
      {
        url: '/images/IMG_7760.WEBP',
        width: 1200,
        height: 630,
        alt: 'Rowland Tool & Plant Hire — Witney, Oxfordshire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rowland Tool & Plant Hire',
  description:
    'Professional tool and plant hire in Witney, West Oxfordshire and The Cotswolds. Mini excavators, breakers, mixers, scaffold towers and more.',
  telephone: '+441865922611',
  email: 'Sales@Rowlandplant.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wharton Buildings, 5 Downs Rd',
    addressLocality: 'Witney',
    addressRegion: 'Oxfordshire',
    postalCode: 'OX29 0RF',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.7842,
    longitude: -1.4861,
  },
  areaServed: [
    { '@type': 'City', name: 'Witney' },
    { '@type': 'AdministrativeArea', name: 'West Oxfordshire' },
    { '@type': 'Place', name: 'The Cotswolds' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '07:30',
      closes: '12:00',
    },
  ],
  sameAs: ['https://facebook.com/61580028672223'],
  url: 'https://rowlandplant.co.uk',
  priceRange: '££',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </head>
      <body>
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <StickyCallBtn />
          <QuoteFloatingBtn />
          <QuoteDrawer />
        </Providers>
      </body>
    </html>
  )
}
