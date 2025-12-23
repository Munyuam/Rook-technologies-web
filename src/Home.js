import React from 'react'
import Navbar from './componets/ui/Navbar'
import HeroSection from './componets/ui/HeroSection'
import Footer from './componets/ui/Footer'
import TechStack from './componets/ui/TechStack'
import StackedCards from './componets/ui/WhyUs'
import CardStack from './componets/ui/WhyUs'
import ContactAdvisor from './componets/ui/ContactAdvisor'
import WhyUs from './componets/ui/WhyUs'

function Index() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TechStack/>
      <WhyUs/>
      <ContactAdvisor/>
      <Footer/>
    </div>
  )
}

export default Index
