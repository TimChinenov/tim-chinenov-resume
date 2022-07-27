import React from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "../article-icon/article-icon";
import { Article, getArticles } from "../articles-service/articles-service";

export default function ArticlesPage() {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => { 
        setArticles(getArticles());
    }, [])

    return (
        <div className="w-full h-48 grid grid-cols-2 gap-4">
            { articles.map((art: Article) => (
                <div key={ art.referenceId }>
                    <Link to={`/articles/${art.referenceId}`}>
                        <ArticleIcon article={art}/>
                    </Link>
                </div>
            ))}   
        </div>
    )
}