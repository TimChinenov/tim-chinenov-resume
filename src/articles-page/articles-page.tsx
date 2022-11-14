import React from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "./article-icon";
import { Article, getArticles } from "../articles-service/articles-service";

export default function ArticlesPage() {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => { 
        setArticles(getArticles());
    }, [])

    return (
        <div>
            <div className="mt-4 mb-4">
                <h2 className="pb-2">Latest Post</h2>
                { articles.map((art: Article, index) => (
                    index === 0 && <div key={ art.referenceId }>
                        <a href={art.link} target="_blank">
                            <ArticleIcon article={art}/>
                        </a>
                    </div>
                ))} 
            </div>
            <h2 className="pb-2">Older Posts</h2>
            <div className="w-full h-48 grid grid-cols-2 gap-4 pb-8">
                { articles.map((art: Article, index) => (
                    index != 0 && <div key={ art.referenceId }>
                        <a href={art.link} target="_blank">
                            <ArticleIcon article={art}/>
                        </a>
                    </div>
                ))}   
            </div>
        </div>
    )
}