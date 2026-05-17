import { createClient } from '@supabase/supabase-js'

// Trim whitespace and trailing slash — common copy-paste mistakes
const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = rawUrl?.trim().replace(/\/$/, '')
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[Supabase] NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY not set. Auth disabled.')
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Used by the diagnostic panel so you can verify the exact URL being sent
export const debugSupabaseUrl = supabaseUrl ?? '(not set)'
