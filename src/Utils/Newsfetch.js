import axiosClient from "./api";

export const getFeaturedArticles = async () => {
    try {
        const response = await axiosClient.get('/top-headlines', {
            params: {
                pageSize: 4,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching featured articles:', error);
        throw error;
    }
}