import axiosClient from "./api";

export const getFeaturedArticles = async (language, country) => {
    try {
        const response = await axiosClient.get('/top-headlines', {
            params: {
                pageSize: 4,
                sortBy: 'popularity',
                language: language || 'en',
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
                language: language || 'en',
                ...(country ? { country } : {})
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching latest articles:', error);
        throw error;
    }
}