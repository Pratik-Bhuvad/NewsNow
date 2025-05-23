import React from 'react'
import bg from '../assets/bg.jpg'

const HeroSection = () => {
  return (
    <section className='w-screen h-[60vh] flex flex-col items-center justify-center text-shadow-textlight relative z-30 *:z-20 md:items-start  *:md:pl-5 *:md:text-center'>
      <div className='absolute w-full h-full z-10'
        style={{
          background: `linear-gradient(45deg,rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.5)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      >
      </div>
      <h1 className='text-3xl text-textlight font-bold font-poppins tracking-wide my-0.5 dark:text-textdark'>Stay Informed</h1>
      <h2 className='text-2xl text-textlight font-bold font-poppins tracking-wide my-0.5 dark:text-textdark md:ml-3'>With NewsNow</h2>
      <p className='text-center text-sm my-3 w-5/6 font-medium md:w-3/5 md:text-base md:!text-start'>Get real-time updates on breaking news, trending stories, and personalized content from around the globe.</p>
      <div className='w-full h-1/4 flex flex-col items-center justify-between *:w-fit *:px-4 *:py-2 *:font-semibold *:rounded-lg *:cursor-pointer md:w-fit md:flex-row md:gap-5'>
        <button className='bg-accentlight text-textdark'>Explore Categories</button>
        <button className='border-[1px] border-accentdark text-accentdark dark:text-textdark dark:border-textdark'>Featured Stores</button>
      </div>
    </section>
  )
}

export default HeroSection
