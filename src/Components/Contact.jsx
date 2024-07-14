import React from 'react'
import InstaImage from '/instagram.webp'
import GithubImage from '/github.webp'
import CallImage from '/call.webp'
import WhatsappImage from '/whatsapp.webp'
import LinkedInImage from '/linkedin.webp'

const Contact = () => {
  return (
    <div id='contact' className='laptop:mt-12 flex flex-col gap-4 bg-black py-12 laptop:px-32'>
        <div className='flex laptop:items-baseline mobile:items-start laptop:flex-row mobile:flex-col px-7'>
            <h1 className='laptop:my-4 laptop:text-5xl mobile:text-3xl font-bold text-white'><span className='text-red-500'>Get in Touch</span> with me</h1>
            {/* <h2 className='laptop:text-xl laptop:m-3 mobile:m-0 mobile:text-sm'>(**Specially designed for smartphone.)</h2> */}
        </div>
        <div className="grid laptop:grid-cols-10 mobile:grid-cols-5 justify-center laptop:gap-10 mobile:gap-2 px-7">
            <a className='flex flex-col items-center gap-2 hover:scale-150'
                href='https://github.com/manoj7019?tab=repositories'>
                <img className='h-auto w-full' src={GithubImage}/>
            </a>
            <a className='flex flex-col items-center gap-2 hover:scale-150'
                href='https://www.instagram.com/manoj_a_n?igsh=MXNqY3MzOWJhZzc5eA=='>
                <img className='h-auto w-full' src={InstaImage}/>
            </a>
            <a className='flex flex-col items-center gap-2 hover:scale-150'
                href='https://wa.me/917019538168'>
                <img className='h-auto w-full' src={WhatsappImage}/>
            </a>
            <a className='flex flex-col items-center gap-2 hover:scale-150'
                href='tel:+91-7019538168'>
                <img className='h-auto w-full' src={CallImage}/>
            </a>
            <a className='flex flex-col items-center gap-2 hover:scale-150'
                href='https://www.linkedin.com/in/manoj-a-n-54099b1a3/'>
                <img className='h-auto w-full' src={LinkedInImage}/>
            </a>
        </div>
    </div>
  )
}

export default Contact
