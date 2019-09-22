import React from 'react'
import { Grid } from 'semantic-ui-react'
import Fixtures from "../components/Fixtures"

const FixturesPage = () => {

    return (
        <Grid centered stretched >
            <Grid.Row>
                <Grid.Column>
                    <Fixtures></Fixtures>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default FixturesPage
