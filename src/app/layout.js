import './globals.css'
import Navbar from '@/components/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar'
import Providers from '@/components/Providers'
import QuoteDrawer from '@/components/QuoteDrawer'
import QuoteFloatingBtn from '@/components/QuoteFloatingBtn'
import StickyCallBtn from '@/components/StickyCallBtn'

export const metadata = {
  title: {
    default: 'Rowland Tool & Plant Hire | Witney, West Oxfordshire',
    template: '%s | Rowland Tool & Plant Hire',
  },
  description:
    'Plant hire and tool hire in Witney, West Oxfordshire and the Cotswolds. Mini excavators, dumpers, power tools, gardening equipment and more from Rowland Plant Ltd.',
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
    addressLocality: 'Witney',
    addressRegion: 'Oxfordshire',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
