import { createContext, useEffect, useState } from "react";
import { getFeaturedArticles } from "../Utils/Newsfetch";

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    const [country, setCountry] = useState()
    const [featuredArticle, setFeaturedArticle] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const featuredNews = await getFeaturedArticles();
                setTimeout(() => {
                    setFeaturedArticle(featuredNews)
                }, 3000);
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
        <NewsContext.Provider value={{ featuredArticle }}>
            {children}
        </NewsContext.Provider>
    )
}