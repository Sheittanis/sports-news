import React from 'react'
import { Icon, Segment, Container, Grid } from 'semantic-ui-react'

import data from "../constants/TeamBarOptions"

const TeamBar = () => {

    const options = (
        data.map((option) =>
            <a key={option.id} href={option.url} className="margin-1" target="_blank" rel="noopener noreferrer">
                <Icon name={option.name} size="big" color={option.color} />
            </a>
        )
    );

    return (
        <Segment inverted vertical className="socialBar">
            <Container>
                <Grid centered>
                    <Grid.Row>
                        {options}
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default TeamBar
