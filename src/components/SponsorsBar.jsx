import React from 'react'
import { Image, Segment, Grid, Header, Responsive } from 'semantic-ui-react'

import data from "../constants/SponsorOptions"
import faker from "faker"

const SponsorBarOption = (props) => {
    const { option } = props;

    return (
        <a href={option.url} target="_blank" rel="noopener noreferrer">
            <Responsive as={Image} className="marginL-1 teamOption"  minWidth={750}  src={faker.image.cats(100, 100)} ></Responsive>
            <Responsive as={Image} className="marginL-1 teamOption" minWidth={668} maxWidth={749}  src={faker.image.cats(75, 75)} ></Responsive>
            <Responsive as={Image} className="marginL-1 teamOption"  maxWidth={667}  src={faker.image.cats(40, 40)} ></Responsive>
        </a>
    )
}

const TeamBar = () => {

    const options = (
        data.map((option, index) => <SponsorBarOption key={index} option={option} ></SponsorBarOption>
        )
    );

    return (
        <Segment inverted vertical className="teamBar">
            <Grid centered>
                <Header className="pageTitle" as='h2' color="orange">Sponsored By</Header>
                <Grid.Row>
                    {options}
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default TeamBar

