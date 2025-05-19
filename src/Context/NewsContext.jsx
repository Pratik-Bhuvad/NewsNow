import { createContext, useEffect, useState } from "react";
import { getFeaturedArticles, getLatestArticles, getNews, getTrendingArticles } from "../Utils/Newsfetch";

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    const [country, setCountry] = useState(null)
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState(null)

    const [featuredArticle, setFeaturedArticle] = useState(null)
    const [latestArticle, setLatestArticle] = useState(null)
    const [trendingArticle, setTrendingArticle] = useState(null)
    const [newsArticle, setNewsArticle] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                
                const [featuredNews, LatestNews, trendingNews, news] = await Promise.all([
                    getFeaturedArticles(language, country),
                    getLatestArticles(language, country),
                    getTrendingArticles(language, country),
                    getNews(category, language, country)
                ]);
                
                setFeaturedArticle(featuredNews)
                setLatestArticle(LatestNews)
                setTrendingArticle(trendingNews)
                setNewsArticle(news)
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
        <NewsContext.Provider value={{ featuredArticle, latestArticle, trendingArticle, newsArticle ,loading, category, setLanguage,setCountry, setCategory }}>
            {children}
        </NewsContext.Provider>
    )
}