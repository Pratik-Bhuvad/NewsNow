// This file contains utility functions to manage bookmark articles in local storage
// It provides functions to add, remove, clear, and retrieve bookmark articles

import defaultImage from '../assets/image.png';

// Get the existing bookmark articles from local storage
const getBookmarkArticles = () => {
    try {
        const stored = localStorage.getItem("bookmarkArticles");
        if (!stored) return [];
        const bookmarkArticles = JSON.parse(stored);
        return Array.isArray(bookmarkArticles) ? bookmarkArticles : [];
    } catch (error) {
        console.error("Error retrieving bookmark articles:", error);
        return [];
    }
}

// Save bookmark articles to local storage
const saveBookmarkArticles = (articles) => {
    try {
        localStorage.setItem("bookmarkArticles", JSON.stringify(articles));
        return true;
    } catch (error) {
        console.error("Error saving bookmark articles:", error);
        return false;
    }
}

// Add bookmark articles to local storage
const addBookmarkArticle = (article) => {
    if (!article || !article.url || typeof article !== 'object') {
        return { status: 'invalid input', articles: [] };
    }
    try {
        const existingArticles = getBookmarkArticles();
        const isArticleAlreadyBookmarked = existingArticles.find(
            (item) => item.url === article.url // changed from item.title === article.title
        );
        if (!isArticleAlreadyBookmarked) {
            existingArticles.push({
                title: article.title,
                description: article.description,
                url: article.url,
                urlToImage: article.urlToImage || defaultImage,
                publishedAt: article.publishedAt,
                source: article.source,
            });
            const saved = saveBookmarkArticles(existingArticles);
            return { status: saved ? 'added' : 'error', articles: existingArticles };
        } else {
            return { status: 'already exists', articles: existingArticles };
        }
    } catch (error) {
        console.error("Error adding bookmark article:", error);
        return { status: 'error', articles: [] };
    }
}

const removeBookmarkArticle = (article) => {
    try {
        const existingArticles = getBookmarkArticles();
        const updatedArticles = existingArticles.filter(
            (item) => item.url !== article.url // changed from item.title !== article.title
        );
        const saved = saveBookmarkArticles(updatedArticles);
        return { status: saved ? 'removed' : 'error', articles: updatedArticles };
    } catch (error) {
        console.error("Error removing bookmark article:", error);
        return { status: 'error', articles: [] };
    }
}

const clearBookmarkArticles = () => {
    try {
        localStorage.removeItem("bookmarkArticles");
        return { status: 'cleared', articles: [] };
    } catch (error) {
        console.error("Error clearing bookmark articles:", error);
        return { status: 'error' };
    }
}

export {
    getBookmarkArticles,
    addBookmarkArticle,
    removeBookmarkArticle,
    clearBookmarkArticles,
}