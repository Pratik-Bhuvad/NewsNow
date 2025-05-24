import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../Components/HeroSection'
import { Features, Categories, iconMap } from '../Utils/Data'
import FeatureCard from '../Components/FeatureCard'
import { NewsContext } from '../Context/NewsContext'
import NewsCard from '../Components/NewsCard'
import NewsCardLoader from '../Components/NewsCardLoader'

const Home = () => {
  const { featuredArticle, latestArticle, loading } = useContext(NewsContext)
  const navigate = useNavigate()

  return (
    <div>
      <HeroSection />
      <section className='w-screen py-5 h-fit'>
        <h1 className='font-bold text-2xl text-center my-2'>Why Choose NewsNow</h1>
        <p className='w-11/12 mx-auto text-center my-2'>Discover a better way to stay informed with our cutting-edge news platform</p>
        <div className='w-full flex flex-col items-center gap-y-5 md:flex-row md:flex-wrap md:items-center md:justify-evenly *:md:w-2/5 lg:flex-nowrap lg:justify-evenly lg:*:w-1/5 lg:*:min-h-[12.5rem]'>
          {
            Features.map((feature, i) => {
              return <FeatureCard key={i} feature={feature} />
            })
          }
        </div>
      </section>
      <section className='w-screen py-5 px-2 bg-gray-100 dark:bg-black/20'>
        <h1 className='font-bold font-poppins text-2xl px-3'>Categories</h1>
        <div className='px-2 my-2 content-center grid grid-cols-3 justify-items-center *:m-2 md:grid-cols-4 *:md:mx-0 lg:grid-cols-7 lg:my-3'>
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
      <section className='w-screen py-5 px-2 flex flex-col items-center xl:p-10'>
        <h1 className='font-bold text-2xl font-robotoSlab text-shadow-lg text-shadow-gray-400/50 mb-3 text-start w-full'>Featured Stories</h1>
        <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:px-7 lg:grid-cols-3 xl:gap-x-10 xl:py-10 xl:w-4/5'>
          {featuredArticle ?
            (featuredArticle.filter(article => article.urlToImage).slice(0,3).map((Article, i) => {
              return ((Article.urlToImage) && <NewsCard key={i} Article={Article} span={(i === 0) ? 'col-span-full justify-between lg:col-span-2 lg:row-span-2' : ''} desc={(i === 0) ? true : false} featured={true} />)
            }))
            :
            (Array.from({ length: 3 }).map((_, index) => {
              return <NewsCardLoader key={index} />
            }))
          }
        </div >
        <button onClick={() => navigate('/news')} className='w-fit border-[1px] border-accentdark p-2 px-3 rounded-md text-accentdark text-sm my-5'>View all News</button>
      </section >
      <section className="w-screen px-2 py-4">
        <h1 className='font-bold text-2xl font-poppins my-4'>Latest Headlines</h1>
        <div className='w-full grid grid-cols-1 gap-3 px-2 md:grid-cols-3 xl:px-14 xl:gap-x-8'>
          {
            !loading && latestArticle ?
              latestArticle.filter(article => article.urlToImage).slice(0,3).map((Article, i) => {
                return <NewsCard key={i} Article={Article} desc={true} />
              })
              :
              (Array.from({ length: 3 }).map((_, index) => {
                return <NewsCardLoader key={index} />
              }))
          }
        </div>
      </section>
    </div >
  )
}

export default Home
