import React from 'react'
import HeroSection from './HeroSection.jsx'
import MemorySection from './MemorySection.jsx'
import TripCoursal from './TripCoursal.jsx'
import Step from './Step.jsx'
import TopAdventure from './TopAdventure.jsx'
import Aboutus from './Aboutus.jsx'
import NewsLetter from './NewsLetter.jsx'


const Main = () => {
  return (
    <div>
      <HeroSection/>
      <MemorySection/>
      <TripCoursal/>
      <Step/>
      <TopAdventure/>
      <Aboutus/>
      <NewsLetter/>
    </div>
  )
}

export default Main
