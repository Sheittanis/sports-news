import React from 'react'
import { Image, Segment, Container, Grid, Header } from 'semantic-ui-react'

import windowDimensions from "../actions/WindowDimensions"
import data from "../constants/SponsorOptions"

const SponsorBarOption = (props) => {
    const { option } = props;
    var dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.05;

    return (
        <a href={option.url} className="marginL-1" target="_blank" rel="noopener noreferrer">
            <Image className="teamOption" src={option.imageSrc} style={{ width: dynamicWidth }} />
        </a>
    )
}

const TeamBar = () => {
    const options = (
        data.map((option, index) => <SponsorBarOption key={index} option={option}></SponsorBarOption>
        )
    );

    return (
        <Segment inverted vertical className="teamBar">
            <Container>
                <Grid centered>
                    <Header className="pageTitle" as='h2' color="orange">Sponsored By</Header>
                    <i style={{ color: 'red' }}>disclaimer: not actual sponsors </i>
                    <Grid.Row>
                        {options}
                    </Grid.Row>

                </Grid>
            </Container>
        </Segment>
    )
}

export default TeamBar

