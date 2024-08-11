import React from 'react'

const MoreAbout = () => {
  return (
    <div id='about' className='m-7 flex flex-col gap-5'>
     <div className='flex laptop:items-baseline mobile:items-start laptop:flex-row mobile:flex-col'>
            <h1 className='laptop:my-4 laptop:text-5xl mobile:text-3xl font-bold'>More <span className='text-red-500'>About me</span></h1>
            {/* <h2 className='laptop:text-xl laptop:m-3 mobile:m-0 mobile:text-sm'>(**Specially designed for smartphone.)</h2> */}
        </div>
        <p className='mobile:text-xl laptop:text-2xl'>
            I built 
            <a className='cursor:pointer text-red-500' href='https://aaraikechicken.in/' > <u>this website</u> </a>
            when I learnt enough HTML and CSS. Content in this website is quite harsh and straight forward. I made this for fun. Just read it. Please don't judge me i'm not this rude in person.
        </p>
        <h2 className='mobile:text-xl laptop:text-3xl font-bold'>Other than programming...</h2>
        <p className='mobile:text-xl laptop:text-2xl'>I do Graphic Designing, I worked as a Graphic Designer for 30+ Instagram pages on categories like Fitness, Stock market, Startup news, Fashion, Restaurant etc. Here's a 
            <a className='cursor:pointer text-red-500' href='https://manojthegraphicdesigner4u.blogspot.com/?zx=beec75ffbf1e60be'> <u>little blog</u> </a> 
            i created at the very beginning of my designing career. Here's  
            <a className='cursor:pointer text-red-500 ' href='https://drive.google.com/drive/folders/1Qu00B-zlr-fPxdwbPCXFeOIi_GrsgZnT'> <u>few more in my google drive</u> </a>
            if you wanna have a look. Or have a glance of few on
            <a className='cursor:pointer text-red-500' href='https://www.instagram.com/manoj_a_n?igsh=MXNqY3MzOWJhZzc5eA=='> <u>my Instagram.</u> </a>
            <br></br>
            <br></br>
            I built a course on weight loss 
            <a className='cursor:pointer text-red-500' href='https://bellyfatburninghacks.onepager.app/epicure-flat-belly-secrets-304782533471502913' > <u>'Epicure flat belly secrets'</u> </a> 
            and sold it to 7 people. But stopped promoting because i thought i need more knowledge to educate people on that topic.
            <br></br>
            <br></br>
            I speak 4 languages (Kannada, English, Hindi, Telugu) fluently and little French.
            I play chess.
            I love reading books on sci-fi, human history, technology and philosophy.
            <br></br>
            <br></br>
            That's all for now. Thank you so much for reading till here.
        </p>
    </div>
  )
}

export default MoreAbout
