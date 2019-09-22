import React from 'react'
import { Grid } from 'semantic-ui-react'
import Standings from "../components/Standings"

const FixturesPage = () => {

    return (
        <Grid centered stretched >
            <Grid.Row>
                <Grid.Column>
                    <Standings></Standings>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default FixturesPage
