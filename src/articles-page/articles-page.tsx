import React from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "./article-icon";
import { Article, getArticles } from "../articles-service/articles-service";
import { ArticlePage } from "./article-page";

export default function ArticlesPage() {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => { 
        setArticles(getArticles());
    }, [])

    return (
        <div>
            <div>
                <h2>Latest Post</h2>
                { articles.length > 0 &&
                    <div>
                        <ArticlePage 
                            referenceId={articles[0].referenceId}
                            summary={true}/>
                        <Link to={`/articles/${articles[0].referenceId}`}>
                            {"Read More >"}
                        </Link>
                    </div>
                }
            </div>
            <div className="w-full h-48 grid grid-cols-2 gap-4">
                { articles.map((art: Article) => (
                    <div key={ art.referenceId }>
                        <Link to={`/articles/${art.referenceId}`}>
                            <ArticleIcon article={art}/>
                        </Link>
                    </div>
                ))}   
            </div>
        </div>
    )
}