import React, { useContext } from 'react'
import HeroSection from '../Components/HeroSection'
import { Features, Categories, iconMap } from '../Utils/Data'
import FeatureCard from '../Components/FeatureCard'
import { NewsContext } from '../Context/NewsContext'
import NewsCard from '../Components/NewsCard'

const Home = () => {
  const { featuredArticle, loading } = useContext(NewsContext)

  return (
    <div>
      <HeroSection />
      <section className='w-screen py-5 h-fit'>
        <h1 className='font-bold text-2xl text-center my-2'>Why Choose NewsNow</h1>
        <p className='w-11/12 mx-auto text-center my-2'>Discover a better way to stay informed with our cutting-edge news platform</p>
        <div className='w-full flex flex-col items-center gap-y-5'>
          {
            Features.map((feature, i) => {
              return <FeatureCard key={i} feature={feature} />
            })
          }
        </div>
      </section>
      <section className='w-screen py-5 px-2 bg-gray-100 dark:bg-black/20'>
        <h1 className='font-bold font-poppins text-2xl px-3'>Categories</h1>
        <div className='px-2 my-2 content-center grid grid-cols-3 justify-items-center *:m-2'>
          {
            Categories.map((Category, i) => {
              const IconComponent = iconMap[Category.Icon]
              return (
                <div key={i} className='flex flex-col items-center gap-y-0.5'>
                  <span className='p-4 rounded-full bg-bgdark/10 dark:bg-bglight/10'> {IconComponent && <IconComponent />} </span>
                  <h2 className='font-semibold text-sm text-center w-full'>{Category.Title}</h2>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='w-screen py-5 px-2 flex flex-col items-center'>
        <h1 className='font-bold text-2xl font-robotoSlab text-shadow-lg text-shadow-gray-400/50 mb-3 text-start w-full'>Featured Stories</h1>
        <div className='w-full grid grid-cols-1 gap-4'>
          {featuredArticle ?
            (featuredArticle.map((Article, i) => {
               return ( (Article.urlToImage) && <NewsCard key={i} Article={Article} span={(i === 0) ? 'row-span-2' : ''} desc={(i === 0) ? true : false} /> )
            }))
            :
            (Array.from({ length: 3 }).map((_, index) => {
              return (
                <div key={index} className='w-full h-fit flex flex-col gap-y-3 pb-3 rounded-lg bg-gray-200/50 animate-pulse dark:bg-carddark'>
                  <div className='w-full h-48 bg-gray-300 rounded-t-lg dark:bg-black/70' /> {/* Image Placeholder */}

                  <div className='px-2 space-y-2  *:dark:bg-gray-800'>
                    <div className='h-4 bg-gray-300 rounded w-3/4' />  {/* Title Placeholder */}
                    <div className='h-3 bg-gray-300 rounded w-full' /> {/* Description line 1 */}
                    <div className='h-3 bg-gray-300 rounded w-11/12' /> {/* Description line 2 */}
                  </div>

                  <div className='px-2 flex items-center gap-2 mt-2 *:dark:bg-gray-800'>
                    <div className='h-3 w-20 bg-gray-300 rounded' /> {/* Source name */}
                    <div className='h-1.5 w-1.5 bg-gray-300 rounded-full' /> {/* Dot */}
                    <div className='h-3 w-16 bg-gray-300 rounded' /> {/* Date */}
                  </div>
                </div>
              )
            }))
          }
        </div >
        <button className='w-fit border-[1px] border-accentdark p-2 px-3 rounded-md text-accentdark text-sm my-5'>View all News</button>
      </section >
      <section className="w-screen px-2">
        <h1 className='font-bold text-2xl font-poppins'>Latest Headlines</h1>
        
      </section>
    </div >
  )
}

export default Home
