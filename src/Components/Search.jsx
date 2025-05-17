import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Search = ({setSearch}) => {
    return (
        <section className='w-screen h-screen flex justify-center pt-[25vh] backdrop-blur-md text-textlight bg-gray-200/50 dark:bg-gray-800/80'>
            <div id="searchComponent" className='w-11/12 h-fit rounded-lg py-2 bg-bglight text-textlight dark:bg-bgdark dark:text-textdark *:w-full'>
                <div className='flex items-center justify-evenly'>
                    <FaSearch></FaSearch>
                    <input type="text" name="search" id="search" className='w-4/5 focus:outline-none active:bg-transparent text-textlight dark:text-textdark' placeholder='Search for news, topics, sources...' />
                    <IoCloseSharp onClick={() => setSearch(false)}/>
                </div>
                <div className='p-2 pt-0'>
                    <h1 className='font-semibold text-gray-500 my-2 dark:text-gray-300/60'>Trending Searches</h1>
                    <article className='grid grid-cols-2 items-center justify-items-start gap-y-2 *:bg-blue-400/20 *:w-fit *:rounded-2xl *:text-sm *:font-medium *:content-center *:text-center *:p-1 *:px-2.5'>
                        <Link to={`/`}>Climate Change</Link>
                        <Link to={`/`}>Climate Change</Link>
                        <Link to={`/`}>Climate Change</Link>
                        <Link to={`/`}>Climate Change</Link>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Search