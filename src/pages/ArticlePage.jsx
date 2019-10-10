
import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import Article from "../components/Article"
import RelatedArticles from "../components/RelatedArticles"


import faker from "faker"
const ArticlePage = () => {

    return (
        <Grid centered >
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={12} computer={12}>
                <Header className="articleHeader">{faker.lorem.sentence()}</Header>
                    <Image src={faker.image.sports()} size="massive" />
                    <Article></Article>
                </Grid.Column>
                
                <Grid.Column mobile={16} tablet={4} computer={4}>
                    <RelatedArticles feed={1}></RelatedArticles>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default ArticlePage