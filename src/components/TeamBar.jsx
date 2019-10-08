import React from 'react'
import { Image, Segment, Container, Grid, Responsive } from 'semantic-ui-react'

import windowDimensions from "../actions/WindowDimensions"
import data from "../constants/TeamBarOptions"
import { Link } from "react-router-dom"

const TeamBarOption = (props) => {
    const { option } = props;
    var dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.05;
    // const dynamicHeight = dimensions.width * 0.35;
    const newTo = {
        pathname: "/team" + option.path,
        team: option.name
    };
    return (
        <Segment inverted vertical className="teamBar">
            <Image className="teamOption" key={option.id} as={Link} to={newTo} src={option.imageSrc} style={{ width: dynamicWidth, minWidth: 35 }} />
        </Segment>
    )
}

const TeamBar = () => {
    var _splitArrayLength = (data.length / 2)
    var _first = data.slice(0, _splitArrayLength)
    var _second = data.slice(_splitArrayLength)

    const desktopOptions = (
        data.map((option, index) => <TeamBarOption key={index} option={option}></TeamBarOption>
        )
    );

    const mobileOptionsFirst = (
        _first.map((option, index) => <TeamBarOption key={index} option={option}></TeamBarOption>
        )
    );
    const mobileOptionsSecond = (
        _second.map((option, index) => <TeamBarOption key={index} option={option}></TeamBarOption>
        )
    );



    return (
        <Segment inverted vertical className="teamBar">
                <Grid centered>
                    <Responsive as={Grid.Row} minWidth={525}>
                        {desktopOptions}
                    </Responsive>
                    <Responsive className="teamBannerRow" as={Grid.Row} maxWidth={524}>
                        {mobileOptionsFirst}
                    </Responsive>
                    <Responsive  className="teamBannerRow" as={Grid.Row} maxWidth={524}>
                        {mobileOptionsSecond}
                    </Responsive>
                </Grid>
        </Segment>
    )
}

export default TeamBar

