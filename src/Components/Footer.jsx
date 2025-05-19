import React, { useContext } from 'react'
import { Categories } from '../Utils/Data'
import { NavLink } from 'react-router-dom'
import { NewsContext } from '../Context/NewsContext'

const Footer = () => {
  const { setCategory } = useContext(NewsContext)
  return (
    <footer className='w-screen py-5 px-4 pb-2 flex flex-col gap-5 bg-blue-950'>
      <section className='flex flex-col gap-2'>
        <h1 className='text-xl font-playwrite font-semibold text-textdark'>Newsnow</h1>
        <p className='font-robotoSlab text-sm text-textdark/70'>Your trusted source for real-time news and updates from around the world.</p>
      </section>
      <section>
        <h1 className='text-lg text-textdark font-medium font-poppins mb-2'>Categories</h1>
        <div className="grid grid-cols-2 justify-items-start gap-2 text-textdark/70 text-sm">
          {
            Categories.map((Category, i) => {
              return <button key={i} onClick={() => setCategory(Category.Title)}>{Category.Title}</button>
            })
          }
        </div>
      </section>
      <section className='flex justify-center items-center text-xs tracking-wider font-medium text-textdark col-span-full w-[95%] pt-2 mx-auto border-t-[1px] border-t-bglight/20'>
          &copy; 2025 NewsNow. All rights reserved
      </section>
    </footer>
  )
}

export default Footer
