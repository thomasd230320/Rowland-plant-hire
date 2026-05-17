'use client'
import { QuoteProvider } from '@/contexts/QuoteContext'

export default function Providers({ children }) {
  return (
    <QuoteProvider>
      {children}
    </QuoteProvider>
  )
}
