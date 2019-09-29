import Article1 from "../images/articles/1.jpg";
import Article2 from "../images/articles/2.jpg";
import Article3 from "../images/articles/3.jpg";

import { loremIpsum } from "../utils"

const HomeArticles = {
    breakingArticle: {        
        imageSrc: Article1,
        header: loremIpsum(25),
        description: loremIpsum(125),
        peek: loremIpsum(300),
    },
    latestNewsData: [
        {
            imageSrc: Article1
        },
        {
            imageSrc: Article2
        },
        {
            imageSrc: Article3
        },
    ],
    articleOverview: [
        {
            id: 1,
            imageSrc: Article1,
            section: loremIpsum(10),
            header: loremIpsum(25),
            description: loremIpsum(100),
            date: "10/09/2019",
            url: ""
        },
        {
            id: 2,
            imageSrc: Article2,
            section: loremIpsum(5),
            header: loremIpsum(15),
            description: loremIpsum(100),
            date: "10/09/2019",
            url: "",
        },
        {
            id: 3,
            imageSrc: Article3,
            section: loremIpsum(14),
            header: loremIpsum(20),
            description: loremIpsum(100),
            date: "10/09/2019",
            url: "",
        },
    ]
};

export default HomeArticles;
