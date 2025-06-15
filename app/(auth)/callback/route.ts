import { createClient } from '@/app/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error || !data.session) {
      console.log("login 1")
      return NextResponse.redirect('/login?error=oauth')
    }
    console.log("login 2")
    return NextResponse.redirect('/admin')
  }

  console.log("login 3")
  return NextResponse.redirect('/login?error=no_code')
}
