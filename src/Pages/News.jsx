import React, { useContext, useEffect } from 'react'
import CategoriesSection from '../Components/CategoriesSection'
import { NewsContext } from '../Context/NewsContext'
import NewsCard from '../Components/NewsCard'
import NewsCardLoader from '../Components/NewsCardLoader'

const News = ({ newstype }) => {
  let { trendingArticle, newsArticle, loading } = useContext(NewsContext)
  let Article;

  (newstype === 'trendingArticle') ? Article = trendingArticle : Article = newsArticle

  return (
    <div>
      <CategoriesSection />
      <section className='grid grid-cols-1 gap-3 px-3 py-2 pb-5'>
        {!loading && Article ?
          Article.map((Article, i) => {
            return <NewsCard key={i} Article={Article} desc={true} />
          })
          :
          (Array.from({ length: 6 }).map((_, index) => {
            return <NewsCardLoader key={index} />
          }))
        }
      </section>
    </div>
  )
}

export default News
