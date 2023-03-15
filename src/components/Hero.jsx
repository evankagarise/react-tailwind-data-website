import React from 'react'
import {TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto justify-center text-center flex flex-col'> 
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl'>Fast, flexible financing for <span> </span> </p>
            <TypeAnimation 
            sequence={[
              'BTB',
              2000,
              'BTC',
              2000,
              'SASS',
              2000,
            ]}
            speed={50}
            className='md:text-5xl sm:text-4xl text-xl pl-4'
            wrapper='span' 
            repeat={Infinity}
            />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>Moniter your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:border-[#00df9a] border-2 hover:text-[#00df9a] hover:bg-transparent hover'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero