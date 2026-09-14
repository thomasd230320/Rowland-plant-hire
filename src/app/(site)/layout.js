import SiteChrome from '@/components/SiteChrome'

// Wraps every public page. The (site) folder is a route group — it groups these
// pages under a shared layout without appearing in any URL.
export default function SiteLayout({ children }) {
  return <SiteChrome>{children}</SiteChrome>
}
