import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import HireHopBanner from '@/components/HireHopBanner'
import PricingNotice from '@/components/PricingNotice'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Skip Loaders / Dumpers' }

const PRODUCTS = [
  {
    title: 'Tracked Mini Dumper (Kinowa HS701)',
    image: '/images/IMG_7872.WEBP',
    altText: 'Tracked Mini Dumper',
    availability: { status: 'available', units: 1, total: 1 },
    description:
      'The Kinowa HS701 is a compact, tracked mini dumper with a high-tip skip for maximum manoeuvrability on site. Ideal for moving spoil, aggregates and materials in restricted access areas.',
    specs: [
      { label: 'Type', value: 'Tracked' },
      { label: 'Skip', value: 'High-tip swivel' },
      { label: 'Engine', value: 'Petrol' },
    ],
    pricing: [
      { period: '1 Day', price: 'POA' },
      { period: 'Extra Day', price: 'POA' },
      { period: 'Week', price: 'POA' },
    ],
  },
  {
    title: 'Wheeled Site Dumper (AUSA)',
    image: '/images/IMG_7873.WEBP',
    altText: 'Wheeled Site Dumper',
    availability: { status: 'limited', units: 1, total: 2 },
    description:
      'The AUSA wheeled site dumper offers excellent on-site mobility with a front-tip skip. Perfect for moving large quantities of material across hard or compacted ground.',
    specs: [
      { label: 'Type', value: 'Wheeled' },
      { label: 'Skip', value: 'Front-tip' },
      { label: 'Engine', value: 'Diesel' },
    ],
    pricing: [
      { period: '1 Day', price: 'POA' },
      { period: 'Extra Day', price: 'POA' },
      { period: 'Week', price: 'POA' },
    ],
  },
]

export default function SkipLoadersDumpersPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Skip Loaders / Dumpers" />
      <HireHopBanner />
      <div className="product-section">
        {PRODUCTS.map(p => (
          <ProductCard key={p.title} {...p} />
        ))}
        <PricingNotice />
      </div>
      <CtaButton />
      <Footer />
    </>
  )
}
