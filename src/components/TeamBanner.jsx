import React from 'react'
import { Header, Grid, Image, Container, Segment, Responsive } from 'semantic-ui-react'
import { loremIpsum } from "../utils"

const TeamBanner = (props) => {
    const { teamData } = props
    return (
        <Segment inverted>
            <Responsive as={Grid} minWidth={500}>
                <Grid.Row columns={2} >
                    <Grid.Column width={6} style={{ borderRight: '1px solid white' }} >
                        <Image src={teamData.crest} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container>
                            <Header className="teamBannerHeader" as='h1' color='orange'>{teamData.teamName} </Header>
                            <p>{teamData.history} {loremIpsum(Math.floor((Math.random() * 100) + 100))}</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Responsive>

            <Responsive as={Grid} maxWidth={499}>
                <Grid.Row centered style={{ borderBottom: '1px solid white' }}>
                    <Image src={teamData.crest} />
                    <Header className="teamBannerHeader" as='h1' color='orange'>{teamData.teamName} </Header>
                </Grid.Row>
                <Grid.Row>
                    <Container>
                        <p>{teamData.history} {loremIpsum(Math.floor((Math.random() * 100) + 100))}</p>
                    </Container>
                </Grid.Row>
            </Responsive>
        </Segment>
    )
}

export default TeamBanner