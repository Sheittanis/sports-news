
import React from 'react'
import { Grid, Image, Segment, Container, Header } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import ApoelCrest from "../images/crests/apoel.png";
import { loremIpsum } from "../utils"

const HomePage = () => {

    return (
        <Grid centered >

            <Segment inverted>
                <Grid>
                    <Grid.Row columns={2} only={'computer'} >
                        <Grid.Column width={4}  style={{ alignItems: 'center', display: 'flex',borderRight: '1px solid white' }} >
                            <Image src={ApoelCrest} />
                            <Header as='h1' color='orange'>ΑΠΟΕΛ</Header>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Container>
                                <p>Ο ΑΠΟΕΛ ιδρύθηκε το 1926. {loremIpsum()}</p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row only={'mobile'} >
                        <Grid.Column width={16}>
                            <Image src={ApoelCrest} style={{ borderBottom: '1px solid white' }} />
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Container>
                                <p>Ο ΑΠΟΕΛ ιδρύθηκε το 1926. {loremIpsum()}</p>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/* <Image src={PreviewExample} size="big" /> */}

            <Grid.Row columns={2}>
                <Grid.Column width={10}>
                    <ArticleOverview articles={data.articleOverview}></ArticleOverview>
                </Grid.Column>
                <Grid.Column width={6}>
                    <NewsFeed feed={data.articleOverview}></NewsFeed>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default HomePage