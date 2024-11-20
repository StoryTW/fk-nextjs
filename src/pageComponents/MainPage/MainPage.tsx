import dynamic from 'next/dynamic'
import React from 'react'

const OurTeam = dynamic(() => import('@/sections/OurTeam/OurTeam'))
const AboutSection = dynamic(() => import('@/sections/AboutSection/AboutSection'))

export const MainPage = () => {
  return (
    <main className='container'>
      <AboutSection />
      <OurTeam />
    </main>
  )
}
