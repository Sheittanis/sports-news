import React from 'react'
import { Image, Segment, Container, Grid } from 'semantic-ui-react'

import windowDimensions from "../actions/WindowDimensions"
import data from "../constants/TeamBarOptions"
import {Link} from "react-router-dom"

const TeamBar = () => {
    var dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.06;
    // const dynamicHeight = dimensions.width * 0.35;
    const options = (
        data.map((option) =>
            <Image key={option.id} as={Link} to={option.path} className="margin-1" src={option.imageSrc} style={{ width: dynamicWidth }}></Image>
        )
    );

    return (
        <Segment inverted vertical className="teamBar">
            <Container>
                <Grid centered>
                    <Grid.Row>{options}</Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default TeamBar
