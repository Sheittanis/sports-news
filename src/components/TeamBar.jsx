import React from 'react'
import { Image, Segment, Grid, Responsive } from 'semantic-ui-react'

import data from "../constants/TeamBarOptions"
import { Link } from "react-router-dom"

const TeamBarOption = (props) => {
    const { option } = props;

    const newTo = {
        pathname: "/team" + option.path,
        team: option.name
    };
    return (
        <Segment as={Link}  to={newTo}  inverted vertical className="teamBar">
            <Responsive as={Image} minWidth={750}className="teamOption" key={option.id}src={option.imageSrc} style={{ width: 50 }} ></Responsive>
            <Responsive as={Image} minWidth={401} maxWidth={749} className="teamOption" key={option.id}src={option.imageSrc} style={{ width: 40 }} ></Responsive>
            <Responsive as={Image} maxWidth={400} className="teamOption" key={option.id}src={option.imageSrc} style={{ width: 30 }} ></Responsive>
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
        _first.map((option, index) => <TeamBarOption key={index} option={option} ></TeamBarOption>
        )
    );
    const mobileOptionsSecond = (
        _second.map((option, index) => <TeamBarOption key={index} option={option} ></TeamBarOption>
        )
    );



    return (
        <Segment inverted vertical className="teamBar">
            <Grid centered>
                <Responsive as={Grid.Row} minWidth={750}>
                    {desktopOptions}
                </Responsive>
                <Responsive className="teamBannerRow" as={Grid.Row} maxWidth={749}>
                    {mobileOptionsFirst}
                </Responsive>
                <Responsive className="teamBannerRow" as={Grid.Row} maxWidth={749}>
                    {mobileOptionsSecond}
                </Responsive>
            </Grid>
        </Segment>
    )
}

export default TeamBar

