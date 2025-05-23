import React, { useContext, useEffect, useState } from 'react'
import CategoriesSection from '../Components/CategoriesSection'
import { NewsContext } from '../Context/NewsContext'
import NewsCard from '../Components/NewsCard'
import NewsCardLoader from '../Components/NewsCardLoader'
import Pagination from '../Components/Pagination'

const ARTICLES_PER_PAGE = 12

const News = ({ newstype }) => {
  const { trendingArticle, newsArticle, loading } = useContext(NewsContext);
  const [currentPage, setCurrentPage] = useState(1);

  const allArticles = newstype === 'trendingArticle' ? trendingArticle : newsArticle;
  const totalItems = allArticles?.length || 0;

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = allArticles?.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div>
      <CategoriesSection />
      <section className={`grid grid-cols-1 gap-3 px-3 py-2 pb-5 transition-opacity duration-300 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'} md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}>
        {!loading && currentArticles ?
          currentArticles.map((article, i) => (
            <NewsCard key={i} Article={article} desc={true} />
          ))
          :
          Array.from({ length: 6 }).map((_, index) => (
            <NewsCardLoader key={index} />
          ))
        }
      </section>

      {!loading && totalItems > ARTICLES_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={ARTICLES_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}

export default News
