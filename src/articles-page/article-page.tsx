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
                <div className="pb-4 text-center flex flex-col">
                    <img className="pb-2 w-7/12 ml-auto mr-auto" src={"/assets/" + article.body[index].fileName}></img>
                    <p className="text-slate-700 text-lg">{article.body[index].subtext}</p>
                </div>
            )
        } else {
            paragraphs.push(
            <p className="pb-4 text-lg" key={index}>
                {article.body[index]}
            </p>)
        }

        if (summary) {
            break;
        }
    }

    imagePath = "/assets/" + article.coverPhoto;
    
    return(
        <div className="">
            <div className="pb-2">
                {   imagePath &&
                    <img src={imagePath} alt="turn off react warnings"></img>
                }
            </div>
            <h2>{article.title}</h2>
            <h3 className="text-slate-700 pb-4">{article.subtitle}</h3>
            { paragraphs }
        </div>);
}