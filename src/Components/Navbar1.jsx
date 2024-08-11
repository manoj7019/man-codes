import React from 'react'
import { NavLink } from 'react-router-dom'
import Anchorlink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='fixed inset-x-0 z-50 top-0 flex justify-between items-center bg-gray-50 p-3'>
        <Anchorlink href='#hero'>
            <h1 className='mobile:px-4 text-2xl text-black font-bold'>My <span className='text-red-500'>Portfolio</span></h1>
        </Anchorlink>
        <div className='mobile:hidden laptop:flex justify-between gap-10'>
            <Anchorlink href='#projects'>
                <button className='text-xl text-red-500 hover:text-white hover:bg-red-500 rounded px-5 py-2'>Projects</button>
            </Anchorlink>
            <Anchorlink href='#skills'>
                <button className='text-xl text-red-500 hover:text-white hover:bg-red-500 rounded px-5 py-2'>Skills</button>
            </Anchorlink>
            <Anchorlink href='#about'>
                <button className='text-xl text-red-500 hover:text-white hover:bg-red-500 rounded px-5 py-2'>About</button>
            </Anchorlink>
            <Anchorlink href='#contact'>
                <button className='text-xl text-white bg-red-500 hover:text-red-500 hover:bg-white hover:border-2 hover:border-red-500 rounded px-5 py-2'>Contact</button>
            </Anchorlink>
        </div>
    </div>
  )
}

export default Navbar