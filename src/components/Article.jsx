import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'

import faker from "faker"

const Article = () => {

    return (
        <Segment vertical>
            <Container>
                <Header as='h3'>{faker.lorem.words(5)}</Header>
                <p>{faker.lorem.sentences(15)}</p>
                <p>{faker.lorem.sentences(25)}</p>
                <i>{faker.lorem.sentences(10)}</i>
            </Container>
        </Segment>
    )
}

export default Article