import { Article } from "./articles-service";

export const articles: Map<string, Article> = new Map([
    ["1", {
        referenceId: "1",
        coverPhoto: "goodfood.jpg",
        title: "first blog",
        subtitle: "subtitle",
        episode: 1,
        body: ["paragraph1, paragraph2"]
    }],
    ["2", {
        referenceId: "2",
        coverPhoto: "watch.PNG",
        title: "second blog",
        subtitle: "subtitle",
        episode: 2,
        body: ["paragraph1, paragraph2"]
    }]
])