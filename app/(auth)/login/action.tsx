'use server'

import { createClient as createServerClient } from '@/app/utils/supabase/server'

interface AuthResult { data?: any; error?: string }

export async function HandleLogin({ email, password }: { email: string; password: string }): Promise<AuthResult> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return error ? { error: error.message } : { data }
}

export async function HandleLoginWithGoogle(): Promise<AuthResult & { url?: string }> {
  const supabase = await createServerClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/callback` }
  })
  return error ? { error: error.message } : { url: data.url }
}
