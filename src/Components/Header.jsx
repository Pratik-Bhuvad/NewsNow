import React, { useContext, useState } from 'react';
import { FaSearch, FaSun, FaMoon, FaBars, FaAngleLeft, FaGlobe, FaLanguage } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Header = ({setSearch}) => {
    const [sidebar, setSidebar] = useState(false)
    const [showRegionSelector, setShowRegionSelector] = useState(false);
    const [showLanguageSelector, setShowLanguageSelector] = useState(false);
    const [region, setRegion] = useState('US')
    const [language, setLanguage] = useState('en')

    const { theme, toggleTheme } = useContext(ThemeContext)

    const handleRegionChange = (region) => {
        setRegion(region);
        setShowRegionSelector(false);
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setShowLanguageSelector(false);
    };

    return (
        <div className='fixed w-screen z-50'>
            <header className='sticky w-screen h-[10vh] flex justify-between items-center p-4 shadow-md transition-all ease-in-out duration-300 bg-bglight dark:bg-bgdark dark:text-textdark dark:shadow-black'>
                <div className='text-2xl font-playwrite font-semibold text-textlight dark:text-textdark'>Newsnow</div>
                <div className='flex items-center space-x-4'>
                    <FaSearch className='cursor-pointer' onClick={() => setSearch(true)}/>
                    <button className='' onClick={() => toggleTheme()}>
                        <FaSun className='hidden dark:block' />
                        <FaMoon className='block dark:hidden' />
                    </button>
                    <FaBars className='cursor-pointer' onClick={() => setSidebar(true)} />
                </div>
            </header>
            <div className={`absolute top-0 right-0 w-2/3 h-screen pb-5 backdrop-blur-[2px] border-l-2 transition-all duration-300 ease-in-out ${sidebar ? 'translate-x-0' : 'translate-x-full'} border-l-gray-200/70 bg-gray-200/20 dark:text-textdark`}>
                <button className='w-screen h-[10vh] flex items-center gap-x-2 px-2' onClick={() => setSidebar(false)}>
                    <FaAngleLeft className='' />
                    <span>Close Menu</span>
                </button>
                <nav className='flex flex-col space-y-6 py-6'>
                    <NavLink
                        to='/'
                        onClick={()=> setSidebar(false)}
                        className={({ isActive }) => `${isActive ? 'text-blue-500 font-bold bg-bgdark' : 'text-gray-700 dark:text-gray-300'} p-2 transition-all duration-200 ease-in-out` } >
                        Home
                    </NavLink>
                    <NavLink
                        to='/trending'
                        onClick={()=> setSidebar(false)}
                        className={({ isActive }) =>`${isActive ? 'text-blue-500 font-bold bg-bgdark' : 'text-gray-700 dark:text-gray-300'} p-2 transition-all duration-200 ease-in-out`}>
                        Trending
                    </NavLink>
                    <NavLink
                        to='/news'
                        onClick={()=> setSidebar(false)}
                        className={({ isActive }) =>`${isActive ? 'text-blue-500 font-bold bg-bgdark' : 'text-gray-700 dark:text-gray-300'} p-2 transition-all duration-200 ease-in-out`}>
                        News
                    </NavLink>

                    {/* Region Selector */}
                    <div className='flex items-center space-x-2 relative p-2 cursor-pointer' onClick={() => {setShowRegionSelector(!showRegionSelector), setShowLanguageSelector(false)}}>
                        <FaGlobe className='relative' />
                        <span>Region: {region}</span>
                        {showRegionSelector && (
                            <div className='absolute top-full right-5 bg-bglight shadow-md rounded z-10 *:p-2 *:px-4 *:border-b-[1px] *:border-b-gray-300/50'>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('all')}>WORLD</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('US')}>USA</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('FR')}>FRANCE</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('IN')}>INDIA</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('CH')}>CHINA</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleRegionChange('JP')}>JAPAN</button>
                            </div>
                        )}
                    </div>

                    {/* Language Selector */}
                    <div className='flex items-center space-x-2 relative p-2 cursor-pointer' onClick={() => {setShowLanguageSelector(!showLanguageSelector), setShowRegionSelector(false)}}>
                        <FaLanguage className='relative top-0.5' />
                        <span>Language: {language}</span>
                        {showLanguageSelector && (
                            <div className='absolute top-full right-5 bg-bglight shadow-md rounded z-10 *:p-2 *:px-4 *:border-b-[1px] *:border-b-gray-300/50'>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleLanguageChange('en')}>ENGLISH</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleLanguageChange('FR')}>FR</button>
                                <button className='block w-full text-left p-1 hover:bg-gray-200' onClick={() => handleLanguageChange('hi')}>HINDI</button>
                            </div>
                        )}
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Header;
