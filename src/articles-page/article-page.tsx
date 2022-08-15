import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article, getArticle } from "../articles-service/articles-service"

export function ArticlePageWrapper()
{
    const { id } = useParams();

    return <ArticlePage referenceId={id} />;
}

export function ArticlePage({referenceId = "", summary = false})
{
    const article = getArticle(referenceId)
    let imagePath = "";
    let paragraphs: any[] = []

    for(let index = 0; index < article.body.length; index++) {
        if (article.body[index].fileName) {
            paragraphs.push(
                <div>
                    <img src={"/assets/" + article.body[index].fileName}></img>
                    <p>{article.body[index].subtext}</p>
                </div>
            )
        } else {
            paragraphs.push(<p key={index}>{article.body[index]}</p>)
        }

        if (summary) {
            break;
        }
    }

    imagePath = "/assets/" + article.coverPhoto;
    
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