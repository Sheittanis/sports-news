import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'

import { loremIpsum } from "../utils"

const Article = () => {

    return (
        <Segment vertical>
            <Container>
                <Header as='h3'>{loremIpsum(Math.floor((Math.random() * 100) + 10))}</Header>
                <p>{loremIpsum(Math.floor((Math.random() * 10) + 1000))}</p>
                <p>{loremIpsum(Math.floor((Math.random() * 10) + 1000))}</p>
                <i>{loremIpsum(Math.floor((Math.random() * 10) + 500))}</i>
            </Container>
        </Segment>
    )
}

export default Article