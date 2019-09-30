import React from 'react'
import { Image, Segment, Container, Grid } from 'semantic-ui-react'

import windowDimensions from "../actions/WindowDimensions"
import data from "../constants/TeamBarOptions"
import {Link} from "react-router-dom"

const TeamBarOption= (props) => {
    const {option} = props;
    var dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.05;
    // const dynamicHeight = dimensions.width * 0.35;
    const newTo = {
        pathname: "/team" + option.path,
        team: option.name
    };
    return (
        <Segment inverted vertical className="teamBar">
            <Image className="teamOption" key={option.id} as={Link} to={newTo} //'/team' + option.path + '/:id' 
            src={option.imageSrc} style={{ width: dynamicWidth }}/>
        </Segment>
    )
}

const TeamBar = () => {
    const options = (
        data.map((option, index) => <TeamBarOption key={index} option={option}></TeamBarOption>
            // <Image className="teamOption margin-1" key={option.id} as={Link} to={newTo} //'/team' + option.path + '/:id' 
            // src={option.imageSrc} style={{ width: dynamicWidth }}/>
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

