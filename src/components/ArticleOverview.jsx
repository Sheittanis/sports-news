import React from 'react'
import { Segment, Container, Grid, Header, Image } from 'semantic-ui-react'
import PreviewExample from "../images/previews/previewTemplate.jpg"

const ArticleOverview = (props) => {

    const articles = (
        props.articles.map((option) =>
            <Segment style={{margin: '1rem'}}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column >
                            <Image src={PreviewExample}  />
                        </Grid.Column>

                        <Grid.Column>                            
                            <Header.Subheader as='h4'>{option.date} - {option.section}</Header.Subheader>
                            <Header as='h2' color="orange">{option.header}</Header>
                            <p>{option.description}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    );

    return (
        <Segment inverted vertical>
            <Header as='h2' color='red'>Article Overview</Header>
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
