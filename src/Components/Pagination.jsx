
import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            // Show all pages if 5 or fewer
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                // Near beginning: [1, 2, 3, ..., last]
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Near end: [..., n-3, n-2, n-1, n]
                pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // Middle: [current-1, current, current+1, ..., last]
                pages.push(currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    const handlePageClick = (page) => {
        if (page !== '...' && page !== currentPage && page >= 1 && page <= totalPages) {
            setTimeout(() => onPageChange(page), 100);
        }
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="w-screen px-3 flex justify-center my-4">
            <div className="flex items-center h-10 bg-gray-900 border border-gray-600 rounded-lg overflow-hidden">
                {/* First page button */}
                <button
                    onClick={() => handlePageClick(1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-fit px-1.5 text-white border-r border-gray-700 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                    aria-label="First page"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>

                {/* Previous button */}
                <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-fit px-1.5 text-white border-r border-gray-700 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                    aria-label="Previous page"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Page numbers */}
                {pageNumbers.map((page, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageClick(page)}
                        disabled={page === '...'}
                        className={`flex items-center justify-center w-fit h-full px-3 text-sm font-medium transition-colors duration-150 ${
                            page === currentPage
                                ? 'bg-blue-600 text-white'
                                : page === '...'
                                ? 'text-gray-400 cursor-default'
                                : 'text-white hover:bg-gray-700'
                        } ${i < pageNumbers.length - 1 ? 'border-r border-gray-700' : ''}`}
                        aria-label={page === '...' ? 'More pages' : `Page ${page}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}

                {/* Next button */}
                <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-fit h-full px-1.5 text-white border-l border-gray-700 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                    aria-label="Next page"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Last page button */}
                <button
                    onClick={() => handlePageClick(totalPages)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-fit h-full px-1.5 text-white border-l border-gray-700 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
                    aria-label="Last page"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
        </div>
    );
};

export default Pagination