
import _ from 'lodash'
import React from 'react'
import { Grid, Segment, Image, Header } from 'semantic-ui-react'
import faker from "faker"
import {Link } from "react-router-dom"
const Article = () => {

    return (
        <Grid.Column className="marginT-1" >
            <Segment className="articleSegment">
                <Image src={`${faker.image.sports()}?random=${Date.now()}`}  as={Link} to="/article"></Image>
                <p >{faker.lorem.sentences(2)}</p>
            </Segment>
        </Grid.Column>
    )
}

const RelatedArticles = () => {
    return (
        <Grid centered>
            <Grid.Row>
                <Header className="articleHeader">Related</Header>
                <Grid.Column width={16} >
                    <Segment>
                        {_.times(3, i => (
                            <Article key={i} data={i}></Article>
                        ))}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}

export default RelatedArticles
