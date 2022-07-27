import { useParams } from "react-router-dom";
import { getArticle } from "../articles-service/articles-service"

export function ArticlePageWrapper()
{
    const { id } = useParams();

    return <ArticlePage referenceId={id} />;
}

export function ArticlePage({referenceId = ""})
{
    const article = getArticle(referenceId);
    let paragraphs: any[] = []
    article.body.forEach((paragraph, idx) => {
        paragraphs.push(<p key={idx}>{paragraph}</p>)
    })

    return(
        <div className="">
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            { paragraphs }
        </div>);
}