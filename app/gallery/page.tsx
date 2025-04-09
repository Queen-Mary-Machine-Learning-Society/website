import CTABanner from '@/components/CTBanner'
import Gallery from '@/components/Gallery'
import React from 'react'

function page() {
    return (
        <div className="bg-[#000000]/20">
            <Gallery />
            <CTABanner/>
        </div>
    )
}

export default page