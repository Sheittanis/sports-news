import React from 'react'
import { Image, Segment, Container, Grid } from 'semantic-ui-react'

import windowDimensions from "../actions/WindowDimensions"
import data from "../constants/TeamBarOptions"


const TeamBar = () => {
    var dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.06;
    // const dynamicHeight = dimensions.width * 0.35;
    const options = (
        data.map((option) =>
            <a key={option.id} href={option.path} className="margin-1" target="_blank" rel="noopener noreferrer">
                <Image src={option.imageSrc} style={{width: dynamicWidth}}></Image>
            </a>
        )
    );

    return (
        <Segment inverted vertical className="socialBar">
            <Container>
                <Grid centered>
                    <Grid.Row>{options}</Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default TeamBar
