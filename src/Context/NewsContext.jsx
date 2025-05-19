import { createContext, useEffect, useState } from "react";
import { getFeaturedArticles, getLatestArticles } from "../Utils/Newsfetch";

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    const [country, setCountry] = useState(null)
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState()
    const [featuredArticle, setFeaturedArticle] = useState(null)
    const [latestArticle, setLatestArticle] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const [featuredNews, LatestNews] = await Promise.all([
                    getFeaturedArticles(language, country),
                    getLatestArticles(language, country)
                ]);

                setFeaturedArticle(featuredNews)
                setLatestArticle(LatestNews)
                setLoading(false)
            }
            catch (error) {
                console.error(error);
                setLoading(false)
            }
        }
        fetchNews()
    }, [])

    return (
        <NewsContext.Provider value={{ featuredArticle, latestArticle,loading, setLanguage,setCountry, setCategory }}>
            {children}
        </NewsContext.Provider>
    )
}