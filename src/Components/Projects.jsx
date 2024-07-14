import React from 'react'
import MovieImage from '/1.png'
import RPSImage from '/2.png'
import TruthDareImage from '/3.png'
import ZaraImage from '/4.png'
import PWAImage from '/5.png'
import SketchImage from '/6.png'
import CalcImage from '/7.png'
import WebImage from '/8.png'

const Projects = () => {
  return (
    <div id='projects' className='m-7 laptop:my-12 flex flex-col gap-5'>
        <div className='flex laptop:items-baseline mobile:items-start laptop:flex-row mobile:flex-col'>
            <h1 className='laptop:my-4 laptop:text-5xl mobile:text-3xl font-bold'>My <span className='text-red-500'>Projects</span></h1>
            {/* <h2 className='laptop:text-xl laptop:m-3 mobile:m-0 mobile:text-sm'>(**Specially designed for smartphone.)</h2> */}
        </div>
      <div className="grid laptop:grid-cols-4 mobile:grid-cols-2 justify-center laptop:gap-10 mobile:gap-5">
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://aaraike-nursery.netlify.app/'>
                <img className='h-auto w-full' src={PWAImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Aaraike Nursery (pwa)</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/rockPaperAndScissors/'>
                <img className='h-auto w-full' src={RPSImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Rock-Paper-Scissors</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/truth-or-dare/'>
                <img className='h-auto w-full' src={TruthDareImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Truth or Dare</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://aaraikechicken.in/'>
                <img className='h-auto w-full' src={WebImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Website</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/impressing-zara/'>
                <img className='h-auto w-full' src={ZaraImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Impressing Zara</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/choose-a-movie/'>
                <img className='h-auto w-full' src={MovieImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Choose a movie</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/etch-a-sketch/'>
                <img className='h-auto w-full' src={SketchImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Etch-a-sketch</p>
            </a>
        </div>
        <div>
            <a className='flex flex-col gap-4 justify-center items-center bg-gray-100 hover:bg-red-500 hover:text-white hover:scale-105 p-5 rounded-xl' href='https://manoj7019.github.io/Calculator/'>
                <img className='h-auto w-full' src={CalcImage}/>
                <p className='text-center laptop:text-xl mobile:text-sm'>Calculator</p>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
