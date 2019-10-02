
import React from 'react'
import { Header, Segment, Grid, Image } from 'semantic-ui-react'
import PreviewExample from "../images/previews/previewTemplate.jpg"
import { loremIpsum, getCurrentDate } from "../utils"
import {Link} from "react-router-dom"

const ArticleCard = (props) => {

    return (
        <Segment className="articleCard" style={{ margin: '1rem' }}>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column >
                        <Image src={PreviewExample} as={Link} to="/article"  />
                    </Grid.Column>

                    <Grid.Column>
                        <Header.Subheader as='h4'>{getCurrentDate()} - {loremIpsum(Math.floor((Math.random() * 10) + 5))}</Header.Subheader>
                        <Header color="orange"  as={Link} to="/article">
                            {loremIpsum(Math.floor((Math.random() * 100) + 10))}
                        </Header>
                        <p>{loremIpsum(Math.floor((Math.random() * 100) + 100))}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ArticleCard
