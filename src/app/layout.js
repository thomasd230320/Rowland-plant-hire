import './globals.css'
import Navbar from '@/components/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar'

export const metadata = {
  title: {
    default: 'Rowland Tool & Plant Hire | Witney, West Oxfordshire',
    template: '%s | Rowland Tool & Plant Hire',
  },
  description:
    'Plant hire and tool hire in Witney, West Oxfordshire and the Cotswolds. Mini excavators, dumpers, power tools, gardening equipment and more from Rowland Plant Ltd.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
