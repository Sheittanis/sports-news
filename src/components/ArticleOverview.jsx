import React from 'react'
import { Segment, Container, Grid } from 'semantic-ui-react'
import ArticleCard from "../components/ArticleCard"


const ArticleOverview = (props) => {

    const articles = (
        props.articles.map((option, index) =>
            <ArticleCard key={index} data={option}></ArticleCard>
        )
    );

    return (
        <Segment vertical>
            <Container>
                <Grid centered>
                    <Grid.Row >
                        <Grid.Column>
                            {articles}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default ArticleOverview
