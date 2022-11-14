import { Article } from "../articles-service/articles-service";

export default function ArticleIcon({article = {} as Article}) {
    const imagePath = "./assets/" + article.coverPhoto;
    return (
        <div className="w-full h-48 relative flex justify-center items-center">
            <p className="left-2 text-white absolute top-0 z-10">Issue No. {article.episode}</p>
            <h2 className="text-center text-white z-10 p-10">{article.title}</h2>
            <img src={imagePath} className="absolute w-full h-full object-cover"></img>
            <div className="absolute w-full h-full bg-black opacity-60 hover:opacity-20 transition ease-in-out"></div>
        </div>
    )
}