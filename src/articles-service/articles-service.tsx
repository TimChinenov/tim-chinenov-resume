import { articles } from "./registry";

export interface Article {
    referenceId: string,
    coverPhoto: string,
    title: string,
    subtitle: string,
    episode: number,
    body: string[]
}

export function getArticles(): Article[] {
    return Array.from(articles.values());
}

export function getArticle(referenceId: string): Article {
    return articles.get(referenceId) as Article;
}