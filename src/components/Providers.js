'use client'
import { QuoteProvider } from '@/contexts/QuoteContext'
import { AuthProvider } from '@/contexts/AuthContext'

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <QuoteProvider>
        {children}
      </QuoteProvider>
    </AuthProvider>
  )
}
