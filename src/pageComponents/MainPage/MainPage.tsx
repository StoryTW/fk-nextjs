import dynamic from 'next/dynamic'
import React from 'react'

const OurTeam = dynamic(() => import('@/sections/OurTeam/OurTeam'))
const AboutSection = dynamic(() => import('@/sections/AboutSection/AboutSection'))
const HistorySection = dynamic(() => import('@/sections/HistorySection/HistorySection'))
const RulesSection = dynamic(() => import('@/sections/RulesSection/RulesSection'))
const ConditionSection = dynamic(() => import('@/sections/ConditionSection/ConditionSection'))

export const MainPage = () => {
  return (
    <main className='container'>
      <HistorySection />
      <RulesSection />
      <ConditionSection />
      <AboutSection />
      <OurTeam />
    </main>
  )
}
