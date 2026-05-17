import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import HireHopBanner from '@/components/HireHopBanner'
import PricingNotice from '@/components/PricingNotice'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Mini Excavators / Diggers' }

const PRODUCTS = [
  {
    title: '1T Mini Excavator',
    image: '/images/IMG_7870.WEBP',
    altText: '1T Mini Excavator',
    availability: { status: 'available', units: 1, total: 1 },
    description:
      'This super-compact, highly efficient and reliable mini excavator with enhanced operator protection, is the ideal super mini-excavator of choice for tough jobs where space is limited.',
    specs: [
      { label: 'Width', value: 'Adjustable 750–960mm' },
      { label: 'Height', value: '2230–1655mm ROPS Down' },
      { label: 'Max Dig Depth', value: '1720mm' },
      { label: 'Weight', value: '1100kg' },
    ],
    pricing: [
      { period: '1 Day', price: '£90.00' },
      { period: 'Extra Day', price: 'POA' },
      { period: 'Week', price: '£180.00' },
    ],
    downloads: [
      { label: 'Wacker 1404 Spec Sheet', href: '#' },
      { label: 'Bobcat E17 Spec Sheet', href: '#' },
      { label: 'Bobcat E19 Spec Sheet', href: '#' },
    ],
  },
  {
    title: '1.5T Mini Excavator (Kubota U10-3)',
    image: '/images/IMG_7869.WEBP',
    altText: '1.5T Mini Excavator',
    availability: { status: 'out', dueBack: 'Due back 29 May' },
    description:
      'This excavator is ideal for excavating most footings and can also make light work of the larger landscaping jobs, with a width of 980mm this excavator is easily maneuverable and the tracks can expand up to 1300mm for extra stability.',
    specs: [
      { label: 'Width', value: 'Adjustable 1000–1300mm' },
      { label: 'Height', value: '2230mm' },
      { label: 'Max Dig Depth', value: 'Up to 2300mm' },
      { label: 'Weight', value: 'Up to 1800kg' },
    ],
    pricing: [
      { period: '1 Day', price: 'POA' },
      { period: 'Extra Day', price: 'POA' },
      { period: 'Week', price: 'POA' },
    ],
  },
  {
    title: '3.0T Excavator (Hitachi ZX27-3)',
    image: '/images/IMG_7871.WEBP',
    altText: '3T Excavator',
    availability: { status: 'available', units: 1, total: 1 },
    description:
      "This larger excavator is ideal for excavating most footings and can also make light work of the larger landscaping jobs, with cab as standard this machine is the operator's choice in tough conditions.",
    specs: [
      { label: 'Width', value: 'Adjustable 1000–1300mm' },
      { label: 'Height', value: '2230mm' },
      { label: 'Max Dig Depth', value: 'Up to 2300mm' },
      { label: 'Weight', value: 'Up to 1800kg' },
    ],
    pricing: [
      { period: '1 Day', price: '£120.00' },
      { period: 'Extra Day', price: 'POA' },
      { period: 'Week', price: '£240.00' },
    ],
  },
]

export default function MiniExcavatorsPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Mini Diggers / Excavators" />
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
