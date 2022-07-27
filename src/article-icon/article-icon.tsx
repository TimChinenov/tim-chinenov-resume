import { Article } from "../articles-service/articles-service";

export default function ArticleIcon({article = {} as Article}) {
    const imagePath = "./assets/" + article.coverPhoto;
    console.log(imagePath)
    return (
        <div
            className={"bg-[url("+ imagePath +")] bg-cover bg-no-repeat w-full h-full relative flex justify-center items-center"}>
            <p className="left-2 text-white absolute top-0 z-10">Issue No. {article.episode}</p>
            <h2 className="text-center text-white z-10">title {article.title}</h2>
            <div className="absolute w-full h-full bg-black opacity-40 hover:opacity-20"></div>
        </div>
    )
}