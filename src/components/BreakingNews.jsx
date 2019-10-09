import React from 'react'
import { Popup, Image, Container, Header, Segment, Icon } from 'semantic-ui-react'

import { breakingArticle } from "../constants/Articles"
import { Link } from "react-router-dom"

const BreakingNews = () => {

    return (
        <Segment className="articleSegment">
                <Popup position='top right' on="click" trigger={
                    <Icon name='search plus' className="float-right"></Icon>
                }>
                    <Popup.Header>Peek article</Popup.Header>
                    <Popup.Content>
                        <p>breaking!</p>
                    </Popup.Content>
                </Popup>
                <Header as='h2' color="orange">BREAKING NEWS</Header>
            <Image src={breakingArticle.imagesrc} as={Link} to="/article" ></Image>
            <Header className="articleHeader" as={Link} to="/article" >{breakingArticle.header}</Header>
            <Container>{breakingArticle.description}</Container>
        </Segment>
    )
}

export default BreakingNews