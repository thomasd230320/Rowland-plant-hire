import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import PricingNotice from '@/components/PricingNotice'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Concrete Breaking' }

const PRODUCTS = [
  {
    title: 'Light Duty Breaker – 110v',
    emoji: '🔨',
    altText: 'Light Duty Breaker',
    description: 'For light duty breaking of plaster, render & small wall tiles.',
    specs: [
      { label: 'Tool Holder', value: 'SDS Plus' },
      { label: 'Max in Concrete', value: '32mm' },
      { label: 'Input Wattage', value: '850w' },
      { label: 'Vibration Drilling', value: '2.5 m/sec²' },
      { label: 'Vibration Chiseling', value: '7 m/sec²' },
      { label: 'Vibration Hammer Drilling', value: '10 m/sec²' },
      { label: 'Net Weight', value: '5.2–5.6 kg' },
    ],
    pricing: [
      { period: '1 Day', price: '£17.50' },
      { period: 'Extra Day', price: '£7.00' },
      { period: 'Week', price: '£35.00' },
      { period: 'Weekend', price: '£28.00' },
    ],
  },
  {
    title: 'Medium Duty Breaker – 110v – 6.2Kg',
    emoji: '🔨',
    altText: 'Medium Duty Breaker',
    description: 'This light weight breaker is mainly intended for horizontal chiseling in concrete and stone.',
    specs: [
      { label: 'Tool Holder', value: 'SDS Max' },
      { label: 'Chiseling Vibration', value: '11 m/s²' },
      { label: 'Net Weight', value: '6.2 kg' },
      { label: 'Impact Energy', value: '8.3 J' },
    ],
    pricing: [
      { period: '1 Day', price: '£22.00' },
      { period: 'Extra Day', price: '£8.80' },
      { period: 'Week', price: '£44.00' },
      { period: 'Weekend', price: '£25.20' },
    ],
  },
  {
    title: 'Heavy Duty Breaker – 110v – 11.0Kg',
    emoji: '⚒️',
    altText: 'Heavy Duty Breaker 11kg',
    description:
      'This breaker is ideal for use on demolition and breaking up of concrete and hard material. Can be used inside and outside. Ideal tool for flooring, tiles, brickwork and much more.',
    specs: [
      { label: 'Tool Holder', value: 'SDS Max' },
      { label: 'Chiseling Vibration', value: '20 m/s²' },
      { label: 'Net Weight', value: '10.1 kg' },
      { label: 'Impact Energy', value: '16.8 J' },
    ],
    pricing: [
      { period: '1 Day', price: '£27.50' },
      { period: 'Extra Day', price: '£11.00' },
      { period: 'Week', price: '£55.00' },
      { period: 'Weekend', price: '£44.00' },
    ],
  },
  {
    title: 'Heavy Duty Breaker – 110v (32Amp) – 27.0Kg',
    emoji: '💥',
    altText: 'Heavy Duty Breaker 27kg',
    description:
      'This heavy duty breaker is ideal for use on breaking in concrete slabs, roads, footings and stone.',
    specs: [
      { label: 'Tool Holder', value: 'HEX 28mm' },
      { label: 'Chiseling Vibration', value: '9.7 m/s²' },
      { label: 'Net Weight', value: '29.1 kg' },
      { label: 'Impact Energy', value: '62 J' },
    ],
    pricing: [
      { period: '1 Day', price: '£48.00' },
      { period: 'Extra Day', price: '£19.20' },
      { period: 'Week', price: '£96.00' },
      { period: 'Weekend', price: '£76.80' },
    ],
  },
]

export default function ConcreteBreakingPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Concrete Breaking" icon="🔨" />
      <div className="product-section">
        {PRODUCTS.map(p => (
          <ProductCard key={p.title} {...p} />
        ))}
        <PricingNotice extra="Sharpening charge per Chisel @ £3.75" />
      </div>
      <CtaButton />
      <Footer />
    </>
  )
}
