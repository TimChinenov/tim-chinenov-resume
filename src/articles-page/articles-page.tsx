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
                <h2 className="pb-2">Latest Post</h2>
                { articles.length > 0 &&
                    <div>
                        <Link to={`/articles/${articles[0].referenceId}`}>
                        <ArticlePage 
                            referenceId={articles[0].referenceId}
                            summary={true}/>
                            <p className="pb-2">{"Read More >"}</p>
                        </Link>
                        <hr className="pb-6"/>
                    </div>
                }
            </div>
            <div className="w-full h-48 grid grid-cols-2 gap-4 pb-8">
                { articles.map((art: Article, index) => (
                    index != 0 && <div key={ art.referenceId }>
                        <Link to={`/articles/${art.referenceId}`}>
                            <ArticleIcon article={art}/>
                        </Link>
                    </div>
                ))}   
            </div>
        </div>
    )
}