'use server'

import { createClient as createServerClient } from '@/app/utils/supabase/server'
import { AuthResponse, OAuthResponse } from '@supabase/supabase-js'

export async function HandleLogin({ email, password }: { email: string; password: string }): Promise<AuthResponse> {
  const supabase = await createServerClient()
  const res : AuthResponse = await supabase.auth.signInWithPassword({ email, password })
  return res
}

export async function HandleLoginWithGoogle(): Promise<OAuthResponse> {
  const supabase = await createServerClient()
  const res : OAuthResponse = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/callback` }
  })
  return res
}
