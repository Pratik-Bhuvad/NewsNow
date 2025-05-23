import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import defaultImage from '../assets/image.png';
import {
  addBookmarkArticle,
  getBookmarkArticles,
  removeBookmarkArticle
} from '../Utils/LocalStorageUtil';
import { toast } from 'react-toastify';

const NewsCard = ({ Article, desc, onBookmarkRemoved, isInBookmarkPage }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarkArticles();
    const exists = bookmarks.some(item => item.url === Article.url);
    setIsBookmarked(exists);
  }, [Article.url]);

  const handleBookmark = () => {
    const result = addBookmarkArticle(Article);
    if (result.status === 'added') {
      setIsBookmarked(true);
      toast.success('Article bookmarked!');
    } else if (result.status === 'invalid input') {
      toast.error('Invalid article data.');
    } else {
      toast.error('Failed to bookmark article.');
    }
  };

  const removeBookmark = () => {
    const result = removeBookmarkArticle(Article);
    if (result.status === 'removed') {
      setIsBookmarked(false);
      toast.success('Article removed from bookmarks.');
      if (isInBookmarkPage && onBookmarkRemoved) {
        onBookmarkRemoved(Article.url);
      }
    } else {
      toast.error('Failed to remove bookmark.');
    }
  };

  const formattedDate = new Date(Article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className='w-full h-fit flex flex-col gap-y-3 pb-3 rounded-lg bg-gray-200/50 dark:bg-carddark'>
      <Link to={Article.url} target='_blank' className='flex flex-col gap-y-3'>
        <img
          src={Article.urlToImage || defaultImage}
          alt="Article"
          loading='lazy'
          className='rounded-t-lg w-full object-cover h-52'
        />
        <h1 className='font-semibold px-2 text-base'>{Article.title}</h1>
        {desc && <p className='px-2 text-justify text-sm'>{Article.description}</p>}
      </Link>

      <div className='text-shadow-textlight text-sm opacity-70 px-2 relative flex items-center gap-0.5'>
        <h2>{Article.source.name}</h2>
        <GoDotFill className='text-xs pt-1' />
        <h2>{formattedDate}</h2>
        <button
          aria-label="Bookmark article"
          onClick={isBookmarked ? removeBookmark : handleBookmark}
          className={`absolute right-2 text-lg p-1 rounded-full transition-colors ${isBookmarked
            ? 'text-white'
            : 'bg-transparent text-black dark:text-white'
          }`}
        >
          <i className={`fa-bookmark ${isBookmarked ? 'text-blue-700 fa-solid' : 'fa-regular'}`}></i>
        </button>
      </div>
    </article>
  );
};

export default NewsCard;
