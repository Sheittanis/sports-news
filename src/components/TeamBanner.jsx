import React from 'react'
import { Header, Grid, Image, Container, Segment } from 'semantic-ui-react'
import { loremIpsum } from "../utils"

const TeamBanner = (props) => {
    const { teamData } = props
    return (
        <Segment inverted>
            <Grid>
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
            </Grid>
        </Segment>
    )
}

export default TeamBanner