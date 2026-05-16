import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import PricingNotice from '@/components/PricingNotice'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Concrete Mixing & Laying' }

const PRODUCTS = [
  {
    title: 'Electric Tip-Up Cement Mixer',
    emoji: '🪣',
    altText: 'Electric Cement Mixer',
    description:
      'Portable mixers for all small to medium building projects both onsite or in a domestic environment.',
    specs: [
      { label: 'Drum Volume', value: '130 Litres' },
      { label: 'Mixing Output', value: '90 Litres' },
      { label: 'Portability', value: 'Compact & portable for easy transportation' },
      { label: 'Power', value: '110v & 240v Available' },
    ],
    pricing: [
      { period: '1 Day', price: '£16.00' },
      { period: 'Extra Day', price: '£6.40' },
      { period: 'Week', price: '£32.00' },
      { period: 'Weekend', price: '£25.60' },
    ],
  },
  {
    title: 'Petrol Tip-Up Cement Mixer',
    emoji: '🪣',
    altText: 'Petrol Cement Mixer',
    description:
      'Portable mixers for all small to medium building projects both onsite or in a domestic environment.',
    specs: [
      { label: 'Drum Volume', value: '130 Litres' },
      { label: 'Mixing Output', value: '90 Litres' },
      { label: 'Portability', value: 'Compact & portable for easy transportation' },
    ],
    pricing: [
      { period: '1 Day', price: '£17.50' },
      { period: 'Extra Day', price: '£7.00' },
      { period: 'Week', price: '£35.00' },
      { period: 'Weekend', price: '£28.00' },
    ],
  },
  {
    title: 'Diesel Site Mixer (Electric Start)',
    emoji: '🏗️',
    altText: 'Diesel Site Mixer',
    specs: [
      { label: 'Drum Volume', value: '250 Litres' },
      { label: 'Mixing Output', value: '110 Litres' },
      { label: 'Wheels', value: 'Heavy duty wheels; new wider profile for extra stability' },
      { label: 'Engine', value: 'Electric-Start Diesel engine' },
      { label: 'Tipping', value: 'Foot operated tip-lock and large tip wheel' },
      { label: 'Security', value: 'Lockable stay cool engine compartment' },
    ],
    pricing: [
      { period: '1 Day', price: '£27.50' },
      { period: 'Extra Day', price: '£11.00' },
      { period: 'Week', price: '£55.00' },
      { period: 'Weekend', price: '£44.00' },
    ],
  },
  {
    title: 'Vibrating Poker Unit (Petrol)',
    emoji: '⚡',
    altText: 'Vibrating Poker',
    description:
      'A portable, robust and compact drive system designed for heavy site use, fitted with a flexible shaft poker vibrator provides effective air removal from concrete from a portable independent power source.',
    pricing: [
      { period: '1 Day', price: '£32.00' },
      { period: 'Extra Day', price: '£12.80' },
      { period: 'Week', price: '£64.00' },
      { period: 'Weekend', price: '£51.20' },
    ],
  },
  {
    title: 'Power Float / Trowel (Petrol)',
    emoji: '🔄',
    altText: 'Power Float',
    description:
      'High performance power trowels provide the contractor with reliable robust machines suitable for finishing large areas of newly laid concrete.',
    specs: [
      { label: 'Handle', value: 'Adjustable Handle' },
      { label: 'Clutch', value: 'Heavy Duty Clutch' },
      { label: 'Balance', value: 'Precision Balanced' },
      { label: 'Build', value: 'Rugged Construction' },
      { label: 'Applications', value: 'Warehouses, Factories, Floor Slabs, Bridge Decks, Car Parks' },
    ],
    pricing: [
      { period: '1 Day', price: '£49.00' },
      { period: 'Extra Day', price: '£19.60' },
      { period: 'Week', price: '£98.00' },
      { period: 'Weekend', price: '£78.40' },
    ],
  },
  {
    title: 'Twin Vibrating Beam Screed (Petrol)',
    emoji: '📐',
    altText: 'Vibrating Beam Screed',
    description:
      'Ideal for striking off and vibrating concrete between form work. Its heavy-duty robust construction makes it suited to demanding users.',
    specs: [
      { label: 'Vibration Depth', value: 'Concrete vibrated to depth of 150mm' },
      { label: 'Handles', value: 'Fitted with low Hand-Arm Vibration comfort handles' },
      { label: 'Assembly', value: 'Quick Clamp system for tool free on site assembly' },
    ],
    pricing: [
      { period: '1 Day', price: '£47.50' },
      { period: 'Extra Day', price: '£19.00' },
      { period: 'Week', price: '£95.00' },
      { period: 'Weekend', price: '£76.00' },
    ],
  },
]

export default function ConcreteMixingPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Concrete Mixing & Laying" icon="🪣" />
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
