import faker from "faker"

const BreakingArticle = {
    title: "Article 1",
    section: faker.lorem.sentences(10),
    header: faker.lorem.sentence(),
    description: faker.lorem.words(30),
    date: "10/09/2019",
    url: "",
    peek: faker.lorem.words(30),
}

const FirstArticle = {
    title: "Article 1",
    section: faker.lorem.sentences(10),
    header: faker.lorem.sentence(),
    description: faker.lorem.words(30),
    date: "10/09/2019",
    url: "",
    peek: faker.lorem.words(30),
}
const SecondArticle = {
    title: "Article 2",
    section: faker.lorem.sentences(10),
    header: faker.lorem.sentence(),
    description: faker.lorem.words(30),
    date: "10/09/2019",
    url: "",
    peek: faker.lorem.words(30),
}
const ThirdArticle = {
    title: "Article 3",
    section: faker.lorem.sentences(10),
    header: faker.lorem.sentence(),
    description: faker.lorem.words(30),
    date: "10/09/2019",
    url: "",
    peek: faker.lorem.words(30),
}


export const allArticles = [FirstArticle, SecondArticle, ThirdArticle]

export const latestArticles = [FirstArticle, SecondArticle, ThirdArticle]

export const articleOverview = [FirstArticle, SecondArticle, ThirdArticle]

export const breakingArticle = BreakingArticle