'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    // Hydrate session from storage
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    // Keep in sync with auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  async function signIn(email, password) {
    if (!supabase) return { error: { message: 'Auth not configured.' } }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) setUser(data.user)
    return { error }
  }

  async function signUp(email, password) {
    if (!supabase) return { error: { message: 'Auth not configured.' } }
    const redirectTo = typeof window !== 'undefined' ? window.location.origin : undefined
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo },
    })
    if (error) {
      // Surface a friendlier message for the common URL misconfiguration
      if (error.message?.toLowerCase().includes('invalid path') || error.message?.toLowerCase().includes('url')) {
        return { error: { message: 'Sign-up failed. Please check your Supabase Site URL in Authentication → URL Configuration matches this site\'s URL.' } }
      }
      return { error }
    }
    if (data.user && !data.user.email_confirmed_at) {
      return { error: null, needsConfirm: true }
    }
    setUser(data.user)
    return { error: null }
  }

  async function signOut() {
    if (!supabase) return
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, authAvailable: !!supabase }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
