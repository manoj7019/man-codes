import React from 'react'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import MoreAbout from './Components/MoreAbout'
import Contact from './Components/Contact'

const App = () => {
  return (
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
  )
}

export default App
