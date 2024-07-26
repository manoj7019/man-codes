import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
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
            <Hero />
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
