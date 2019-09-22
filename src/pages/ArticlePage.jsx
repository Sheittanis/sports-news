
import React from 'react'
import { Grid, Image, Segment, Container, Header } from 'semantic-ui-react'
import Article from "../components/Article"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import ApoelCrest from "../images/crests/apoel.png";
import { loremIpsum } from "../utils"
import PreviewExample from "../images/previews/previewTemplate.jpg"

const HomePage = () => {

    return (
        <Grid centered >
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Header as='h2' color='red'>Οι πορτοκαλί τιμούν τον Νούνο Μοράις</Header>
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

export default HomePage