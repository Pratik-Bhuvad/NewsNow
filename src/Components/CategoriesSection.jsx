import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsContext'
import { Categories } from '../Utils/Data'

const CategoriesSection = () => {
    const { category, setCategory } = useContext(NewsContext)

    return (
        <section className="relative w-11/12 mx-auto h-20 flex items-center">

            <div className="absolute left-0 top-0 h-full w-8 z-10 pointer-events-none bg-gradient-to-r from-bglight/80 dark:from-bgdark/80 to-transparent lg:hidden" />
            
            <div className="relative flex items-center gap-x-2 overflow-x-auto px-2 w-full scrollbar-hide text-sm font-medium text-white *:rounded-3xl *:py-1.5 *:px-3.5 *:transition-all *:duration-300 *:ease-in-out">
                <span
                    onClick={() => setCategory(null)}
                    className={`cursor-pointer whitespace-nowrap 
                    ${category === null ? 'bg-blue-600' : 'bg-bgdark/70'}`}
                >
                    All
                </span>
                {
                    Categories.map((cat, i) => (
                        <span
                            key={i}
                            onClick={() => setCategory(cat.Title)}
                            className={`cursor-pointer whitespace-nowrap
                            ${category === cat.Title ? 'bg-blue-600' : 'bg-bgdark/70 dark:bg-bglight/50 dark:text-textlight'}`}
                        >
                            {cat.Title}
                        </span>
                    ))
                }
            </div>
            <div className="absolute right-0 top-0 h-full w-8 z-10 pointer-events-none bg-gradient-to-l from-bglight/80 dark:from-bgdark/80 to-transparent lg:hidden" />
        </section>
    )
}

export default CategoriesSection
