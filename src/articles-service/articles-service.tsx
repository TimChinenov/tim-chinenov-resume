import { articles } from "./registry";

export interface Article {
    referenceId: string,
    coverPhoto: string,
    title: string,
    subtitle: string,
    episode: number,
    body: any[]
}

export interface ImageParagraph {
    fileName: string,
    subtext: string,
}

export function getArticles(): Article[] {
    return Array.from(articles.values());
}

export function getArticle(referenceId: string): Article {
    return articles.get(referenceId) as Article;
}