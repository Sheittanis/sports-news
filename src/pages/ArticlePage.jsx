
import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import Article from "../components/Article"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import PreviewExample from "../images/previews/previewExample.png"

import { loremIpsum } from "../utils"
const ArticlePage = () => {

    return (
        <Grid centered >
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Header as='h2' color='red'>{loremIpsum(Math.floor((Math.random() * 100) + 10))}</Header>
                    <Image src={PreviewExample} size="massive" />
                    <Article></Article>
                </Grid.Column>
                
                <Grid.Column width={4}>
                    <NewsFeed feed={data.articleOverview}></NewsFeed>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default ArticlePage