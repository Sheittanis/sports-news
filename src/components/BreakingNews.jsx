import React from 'react'
import { Popup, Image, Container, Header, Segment, Icon } from 'semantic-ui-react'

import { breakingArticle } from "../constants/Articles"
import { Link } from "react-router-dom"

const BreakingNews = () => {

    return (
        <Segment>
            <div>
                <Popup position='top right' on="click" trigger={
                    <Icon name='search plus' className="float-right"></Icon>
                }>
                    <Popup.Header>Peek article</Popup.Header>
                    <Popup.Content>
                        <p>breaking!</p>
                    </Popup.Content>
                </Popup>
                <Header as='h2' color="orange">BREAKING NEWS</Header>
            </div>
            <Image src={breakingArticle.imagesrc} as={Link} to="/article" ></Image>
            <Header as='h2' color="orange">{breakingArticle.header}</Header>
            <Container>{breakingArticle.description}</Container>
        </Segment>
    )
}

export default BreakingNews
