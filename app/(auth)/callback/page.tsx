'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function OAuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/admin')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Completing login, please wait...</p>
    </div>
  )
}
