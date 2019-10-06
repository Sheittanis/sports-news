import Article1 from "../images/articles/article1.png";
import Article2 from "../images/articles/article2.png";
import Article3 from "../images/articles/article3.png";

import { loremIpsum } from "../utils"

const FirstArticle = {
    imagesrc: Article1,
    title: "Article 1",
    section: loremIpsum(10),
    header: loremIpsum(25),
    description: loremIpsum(100),
    date: "10/09/2019",
    url: "",
    peek: "",
}
const SecondArticle = {
    imagesrc: Article2,
    title: "Article 2",
    section: loremIpsum(10),
    header: loremIpsum(25),
    description: loremIpsum(100),
    date: "10/09/2019",
    url: "",
    peek: "",
}
const ThirdArticle = {
    imagesrc: Article3,
    title: "Article 3",
    section: loremIpsum(10),
    header: loremIpsum(25),
    description: loremIpsum(100),
    date: "10/09/2019",
    url: "",
    peek: "",
}


export const allArticles = [FirstArticle, SecondArticle, ThirdArticle]

export const latestArticles = [FirstArticle, SecondArticle, ThirdArticle]

export const articleOverview = [FirstArticle, SecondArticle, ThirdArticle]

export const breakingArticle = FirstArticle