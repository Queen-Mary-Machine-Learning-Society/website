import CTABanner from '@/components/CTBanner'
import CurrentTeam from '@/components/CurrentTeam'
import EventsSection from '@/components/EventsSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <CurrentTeam/>
        <EventsSection/>
        <CTABanner/>
    </div>
  )
}

export default page