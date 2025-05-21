import axiosClient from "./api";

export const getFeaturedArticles = async (language, country) => {
    try {
        const response = await axiosClient.get('/top-headlines', {
            params: {
                pageSize: 4,
                sortBy: 'popularity',
                language: language ,
                ...(country ? { country } : {})
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching featured articles:', error);
        throw error;
    }
}

export const getLatestArticles = async (language, country) => {
    try {
        const response = await axiosClient.get(`/everything`, {
            params: {
                q: 'everything',
                sortBy: 'publishedAt',
                pageSize: 3,
                language: language ,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching latest articles:', error);
        throw error;
    }
}

export const getTrendingArticles = async (language, country) => {
    try {
        const response = await axiosClient.get('/top-headlines', {
            params: {
                sortBy: 'popularity',
                language: language ,
                ...(country ? { country } : {})
            },
        });
        
        return response.data.articles;
    }
    catch (error) {
        console.error('Error fetching trending articles:', error);
        throw error;
    }
}

export const getNews = async (category, language, country) => {
    try {
        if (category !== null) {
            const response = await axiosClient.get('/top-headlines', {
                params: {
                    category,
                    sortBy: 'popularity',
                    language: language ,
                    ...(country ? { country } : {})
                },
            });
            return response.data.articles;
        }
        else {
            return getEverything(language, country);
        }
    }
    catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

export const getEverything = async (language, country) => {
    try {
        
        const response = await axiosClient.get('/everything', {
            params: {
                q: 'everything',
                language: language ,
            },
        });
        
        return response.data.articles;
    }
    catch (error) {
        console.error('Error fetching everything:', error);
        throw error;
    }
}

export const searchNews = async (query) => {
    try {
        const response = await axiosClient.get('/everything', {
            params: {
                q: query,
            }
        });
        return response.data.articles;
    }
    catch (error) {
        console.error('Error searching news:', error);
        throw error;
    }
}