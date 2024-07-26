import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='hero' className='m-7 flex flex-col gap-5'>
      <div className='laptop:mb-12 laptop:mt-24 mobile:mt-12'>
        <h2 className='mobile:text-2xl laptop:text-4xl'>Hey!</h2>
        <h1 className='mobile:text-4xl laptop:text-8xl font-bold '>I'm <span className='text-red-500'>Manoj A N</span></h1>
        <h2 className='mobile:text-2xl laptop:text-4xl'>Web developer</h2>
      </div>
      <h2 className='mobile:text-2xl laptop:text-4xl font-bold'>I learnt programming online...</h2>
      <p className='mobile:text-xl laptop:text-2xl'>...through an Open source community 'The Odin Project'. After learning fundamentals of Programming, I sketched 
        <a className='cursor:pointer text-red-500' href='https://drive.google.com/file/d/1UUIr9ARJdla5v6A5gj52PPw4CIGdHVWt/view?usp=drivesdk'> <u>this thing</u> </a>
        on board and turned it into a 
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/impressing-zara/'> <u>small program.</u> </a>
        I was happy that i built something for the first time using code.
        <br></br>
        <br></br>
         Then i felt like extending my knowledge. So I kept learning more Javascript and kept on building more projects.
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/choose-a-movie/' > <u>Choose a movie,</u> </a>
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/rockPaperAndScissors/' > <u>Rock-Paper-Scissors,</u> </a>
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/truth-or-dare/' > <u>Truth or Dare,</u> </a>
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/etch-a-sketch/' > <u>Etch-a-sketch,</u> </a>
        <a className='cursor:pointer text-red-500' href='https://aaraike-nursery.netlify.app/' > <u>Aaraike nursery (pwa),</u> </a>
        <a className='cursor:pointer text-red-500' href='https://manoj7019.github.io/Calculator/' > <u>Calculator</u> </a>
        and so on. I've learnt HTML, CSS, JS languages, ReactJS Library, TailwindCSS framework and Firebase Database.
        <br></br>
        <br></br>
        Currently working on a finance consultation app 
        <a className='cursor:pointer text-red-500' href='https://sjfintech.in/' > <u>SJ Fintech.</u> </a>
      </p>
    </div>
  )
}

export default Hero
