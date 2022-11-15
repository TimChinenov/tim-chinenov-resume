import { Article } from "../articles-service/articles-service";

export default function ArticleIcon({article = {} as Article}) {
    const imagePath = "./assets/" + article.coverPhoto;
    return (
        <div className="w-full h-48 relative flex justify-center items-center pr-3 pb-3 border-4 border-transparent transition duration-100 ease-in-out hover:border-b-slate-400 hover:border-r-slate-400">
            <p className="left-2 text-white absolute top-0 z-10 text-sm md:text-base">Issue No. {article.episode}</p>
            <p className="text-center text-white z-10 p-10 text-base lg:text-xl">{article.title}</p>
            <img src={imagePath} className="absolute w-full h-full object-cover"></img>
            <div className="absolute w-full h-full bg-black opacity-60"></div>
        </div>
    )
}