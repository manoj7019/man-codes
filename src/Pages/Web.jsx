import React from 'react'
import Navbar from '../Components/Navbar1'
import Hero2 from '../Components/Hero2'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import MoreAbout from '../Components/MoreAbout'
import Contact from '../Components/Contact'

const Web = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className='laptop:mx-32'>
            <Hero2 />
            <Projects />
            <Skills />
            <MoreAbout />
        </div>
        <Contact />
      </>
    </div>
  )
}

export default Web
