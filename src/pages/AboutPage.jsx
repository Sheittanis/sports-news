import React from 'react'
import { Container, Grid} from 'semantic-ui-react'

const AboutPage = () => {

    return (
        <div>
            <Grid centered style={{ minHeight: '80vh' }} >
                <Grid.Row columns={2}>
                    <Container text textAlign='center'>
                        {/* <TeamBar></TeamBar> */}
                    </Container>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default AboutPage
