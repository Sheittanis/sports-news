
import React from 'react'
import { Header, Segment, Grid, Image, Popup, Icon } from 'semantic-ui-react'

import { formatDate } from "../utils"
import { Link } from "react-router-dom"
import faker from "faker"
const ArticleCard = () => {
    return (
        <Segment className="articleSegment margin-1" >
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column mobile={16} tablet={8} computer={8} >
                        <Image src={`${faker.image.sports()}?random=${Date.now()}`} as={Link} to="/article" />
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Popup position='top right' trigger={
                            <Icon name='search plus' className="float-right"></Icon>
                        }>
                            <Popup.Header>Peek article</Popup.Header>
                            <Popup.Content>
                                <p>{faker.lorem.words(20)}</p>
                            </Popup.Content>
                        </Popup>

                        <Header.Subheader as='h4'>{formatDate(faker.date.past())}</Header.Subheader>
                        <Header className="articleHeader" as={Link} to="/article">{faker.lorem.sentence()}</Header>
                        <p>{faker.lorem.sentences(2)}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default ArticleCard
