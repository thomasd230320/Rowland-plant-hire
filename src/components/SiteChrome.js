import Providers from '@/components/Providers'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import StickyCallBtn from '@/components/StickyCallBtn'
import QuoteFloatingBtn from '@/components/QuoteFloatingBtn'
import QuoteDrawer from '@/components/QuoteDrawer'

/**
 * The shared furniture around every public page: nav, quote drawer and the
 * sticky call/quote buttons.
 *
 * Kept out of the root layout so the Keystatic admin panel at /keystatic
 * renders on a clean page instead of inheriting the site's navigation.
 */
export default function SiteChrome({ children }) {
  return (
    <Providers>
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <StickyCallBtn />
      <QuoteFloatingBtn />
      <QuoteDrawer />
    </Providers>
  )
}
