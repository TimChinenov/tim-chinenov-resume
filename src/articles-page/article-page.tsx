import { useParams } from "react-router-dom";
import { getArticle } from "../articles-service/articles-service"

export function ArticlePageWrapper()
{
    const { id } = useParams();

    return <ArticlePage referenceId={id} />;
}

export function ArticlePage({referenceId = "", summary = false})
{
    const article = getArticle(referenceId);
    let paragraphs: any[] = []

    for(let index = 0; index < article.body.length; index++) {
        paragraphs.push(<p key={index}>{article.body[index]}</p>)

        if (summary) {
            break;
        }
    }

    const imagePath = "./assets/" + article.coverPhoto;

    return(
        <div className="">
            {   imagePath &&
                <img src={imagePath} alt="turn off react warnings"></img>
            }
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            { paragraphs }
        </div>);
}