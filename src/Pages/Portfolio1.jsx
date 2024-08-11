import React from 'react'
import Navbar from '../Components/Navbar1'
import Hero1 from '../Components/Hero1'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import MoreAbout from '../Components/MoreAbout'
import Contact from '../Components/Contact'

const Portfolio1 = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className='laptop:mx-32'>
            <Hero1 />
            <Projects />
            <Skills />
            <MoreAbout />
        </div>
        <Contact />
      </>
    </div>
  )
}

export default Portfolio1
