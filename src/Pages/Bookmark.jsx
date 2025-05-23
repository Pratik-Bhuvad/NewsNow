import React, { useEffect, useState } from 'react';
import { getBookmarkArticles, clearBookmarkArticles } from '../Utils/LocalStorageUtil';
import NewsCard from '../Components/NewsCard';
import NewsCardLoader from '../Components/NewsCardLoader';
import Pagination from '../Components/Pagination';
import { toast } from 'react-toastify';

const ARTICLES_PER_PAGE = 10;

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedBookmarks = getBookmarkArticles();
    setBookmarks(storedBookmarks);
    setLoading(false);
  }, []);

  const handleClearBookmarks = () => {
    clearBookmarkArticles();
    setBookmarks([]);
    toast.success('Bookmark Cleard Successfully.');
  };

  const handleBookmarkRemoved = (removedArticleUrl) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bookmark => bookmark.url !== removedArticleUrl)
    );
  };

  const totalPages = Math.ceil(bookmarks.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentBookmarks = bookmarks.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div className='w-screen p-2'>
      <h1 className='text-3xl font-extrabold font-poppins leading-snug tracking-wider text-center py-5'>
        Bookmarked News Articles
      </h1>

      {bookmarks.length > 0 && (
        <div className="flex justify-center mb-4">
          <button
            onClick={handleClearBookmarks}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Clear All Bookmarks
          </button>
        </div>
      )}

      <section id="bookmarkArticles" className={`grid grid-cols-1 gap-3 justify-items-center items-center transition-opacity duration-300 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'} `}>
        {
          loading
            ? Array.from({ length: 3 }).map((_, index) => (
              <NewsCardLoader key={index} />
            ))
            : currentBookmarks.length > 0
              ? currentBookmarks.map((article, i) => (
                <NewsCard 
                key={i} 
                Article={article} 
                desc={true} 
                onBookmarkRemoved = {handleBookmarkRemoved}
                isInBookmarkPage = {true}
                />
              ))
              : <p className="text-center text-gray-500 my-5 text-xl">No bookmarks yet.</p>
        }
      </section>

      <Pagination
        currentPage={currentPage}
        totalItems={bookmarks.length}
        itemsPerPage={ARTICLES_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Bookmark;
