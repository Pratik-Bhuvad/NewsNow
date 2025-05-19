import React from 'react'

const NewsCardLoader = () => {
    return (
        <article className='w-full h-fit flex flex-col gap-y-3 pb-3 rounded-lg bg-gray-200/50 animate-pulse dark:bg-carddark'>
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
        </article>
    )
}

export default NewsCardLoader
