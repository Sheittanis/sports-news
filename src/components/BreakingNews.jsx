import React from 'react'
import { Popup, Image, Header, Segment, Icon, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import faker from "faker"

const BreakingNews = () => {

    return (
        <Segment className="articleSegment margin-1" >
            <Grid as={Link} to="/article" >
                <Grid.Row columns={2}>
                    <Grid.Column width={16} >
                        <Header className="articleHeader">{faker.lorem.sentence()}
                        <Popup position='top right' trigger={
                            <Icon name='search plus' color='grey' className="float-right"></Icon>
                        }>
                            <Popup.Header>Peek article</Popup.Header>
                            <Popup.Content>
                                <p>{faker.lorem.words(20)}</p>
                            </Popup.Content>
                        </Popup>
                        </Header>
                        <Image src={`${faker.image.sports()}?random=${Date.now()}`} size="massive"/>
                    </Grid.Column>

                    <Grid.Column width={16}>
        
                        <p>{faker.lorem.sentences(3)}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default BreakingNews
