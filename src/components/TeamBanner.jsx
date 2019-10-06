import React from 'react'
import { Header, Grid, Image, Container, Segment } from 'semantic-ui-react'
import { loremIpsum } from "../utils"

const TeamBanner = (props) => {
    const { teamData } = props
    return (

        <Segment className="teamBanner" inverted>
            <Grid>
                <Grid.Row columns={2} >
                    <Grid.Column width={6} style={{ borderRight: '1px solid white' }} >
                        <Image src={teamData.crest} />
                        <Header className="teamBannerHeader" as='h1' color='orange'>{teamData.teamName} </Header>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container>
                            <p>{teamData.history} {loremIpsum(Math.floor((Math.random() * 100) + 100))}</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>

                {/* <Grid.Row only={'mobile'} >
                    <Grid.Column width={16}>
                        <Image src={teamData.crest} style={{ borderBottom: '1px solid white' }} />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Container>
                            <p>{teamData.history} {loremIpsum()}</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row> */}
            </Grid>
        </Segment>
    )
}

export default TeamBanner