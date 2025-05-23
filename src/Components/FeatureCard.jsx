import React from 'react'
import { iconMap } from '../Utils/Data'

const FeatureCard = ({ feature }) => {
    const IconComponent = iconMap[feature.icon]
    
    return (
        <article className='w-4/5 flex flex-col items-center gap-y-2 rounded-lg py-5 px-2 shadow-xl transition-all duration-300 ease-in-out bg-bglight dark:bg-bgdark dark:shadow-black/50 hover:-translate-y-5 !lg:w-full'>
            <span className='bg-cyan-200/50 rounded-full flex items-center justify-center p-3'>
            {IconComponent && <IconComponent />}
            </span>
            <h1 className="font-bold text-center text-lg">{feature.Title}</h1>
            <p className='w-11/12 text-shadow-textlight text-sm text-center font-robotoSlab dark:text-shadow-textdark'>{feature.Description}</p>
        </article>
    )
}

export default FeatureCard
