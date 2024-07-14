import React from 'react'
import HtmlImage from '/html.webp'
import CssImage from '/css.png'
import JsImage from '/javascript.png'
import ReactImage from '/react.png'
import TailwindImage from '/tailwind.png'
import GitImage from '/git.png'
import CanvaImage from '/canva.png'

const Skills = () => {
  return (
    <div id='skills' className='m-7 laptop:my-12 flex flex-col gap-5'>
      <h1 className='laptop:my-4 laptop:text-5xl mobile:text-3xl font-bold'>My <span className='text-red-500'>Skills</span></h1>
      <div className="grid laptop:grid-cols-7 mobile:grid-cols-4 justify-center laptop:gap-10 mobile:gap-5">
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={HtmlImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>HTML</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={CssImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>CSS</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={JsImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>Javascript</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={ReactImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>ReactJS</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={TailwindImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>Tailwind CSS</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={GitImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>Git</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='h-auto w-full' src={CanvaImage}/>
            <p className='text-center laptop:text-xl mobile:text-sm'>Canva</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
