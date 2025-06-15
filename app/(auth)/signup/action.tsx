'use server'

import { createClient } from '@/app/utils/supabase/server'

interface SignUpInput {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface SignUpResult {
  data?: any
  error?: string
}

export async function HandleSignUp({ email, password, firstName, lastName }: SignUpInput): Promise<SignUpResult> {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { firstName, lastName, role: "user" }
    }
  })

  if (!error) {
    // insert user into public 'users' table (already automatically added to auth table but not the public users table)
    // Automatically assigns admin role (currently only admins are users, regular users only browse the site)
    console.log("Adding user to public users table")
    await supabase.from('users').insert([
      {
        id: data.user?.id, // store the auth user's id (UUID)
        email,
        firstName,
        lastName,
      },
    ])
    console.log("user added to public users table")
  }

  if (error) {
    return { error: error.message }
  }

  return { data }
}
