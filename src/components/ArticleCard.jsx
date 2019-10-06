
import React from 'react'
import { Header, Segment, Grid, Image, Popup, Icon } from 'semantic-ui-react'

import PreviewExample from "../images/previews/previewExample.png"
import { loremIpsum, getCurrentDate } from "../utils"
import { Link } from "react-router-dom"

const ArticleCard = () => {

    return (
        <Segment className="articleCard" style={{ margin: '1rem' }}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column >
                        <Image src={PreviewExample} as={Link} to="/article" />
                    </Grid.Column>

                    <Grid.Column>
                        <Popup position='top right' trigger={
                            <Icon name='search plus' className="float-right"></Icon>
                        }>
                            <Popup.Header>Peek article</Popup.Header>
                            <Popup.Content>
                                <p>{loremIpsum(Math.floor((Math.random() * 100) + 10))}</p>
                            </Popup.Content>
                        </Popup>

                        <Header.Subheader as='h4'>{getCurrentDate()} - {loremIpsum(Math.floor((Math.random() * 10) + 5))}</Header.Subheader>
                        <Header className="articleHeader" as={Link} to="/article">
                            {loremIpsum(Math.floor((Math.random() * 100) + 10))}
                        </Header>
                        <p>{loremIpsum(Math.floor((Math.random() * 100) + 100))}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default ArticleCard
