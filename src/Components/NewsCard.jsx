import React from 'react'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ Article, span, desc }) => {
  let date = new Date(Article.publishedAt)
  date = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article target='_blank' className='w-full h-fit flex flex-col gap-y-3 pb-3 rounded-lg bg-gray-200/50 dark:bg-carddark'>
      <Link to={Article.url} target='_blank' className='flex flex-col gap-y-3 '>
        <img src={Article.urlToImage} className='rounded-t-lg w-full object-cover' alt="Image" />
        <h1 className='font-semibold px-2 text-base'>{Article.title}</h1>
        {desc && <p className='px-2 text-justify text-sm'>{Article.description}</p>}
      </Link>
      <div className='text-shadow-textlight text-sm opacity-70 px-2 relative flex items-center gap-0.5'>
        <h2>{Article.source.name}</h2>
        <GoDotFill className='text-xs pt-1' />
        <h2>{date}</h2>
        <CiBookmark className='absolute right-2 text-lg !text-black' onClick={() => console.log("Bookmark")} />
      </div>
    </article>
  )
}

export default NewsCard
