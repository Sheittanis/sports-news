import React, { useState } from 'react'
import { Popup, Image, Container, Header, Segment } from 'semantic-ui-react'

import { breakingArticle } from "../constants/Articles"

const timeoutLength = 2500

const BreakingNews = () => {
    const [isOpen, setOpen] = useState(false);
    let timer = null;

    const handleOpen = () => {
        setOpen(true);

        timer = setTimeout(() => {
            setOpen(false)
        }, timeoutLength)
    }

    const handleClose = () => {
        setOpen(false);
        clearTimeout(timer)
    }
    return (
        <Popup on='click' open={isOpen} onClose={handleClose} onOpen={handleOpen} position='top right' hideOnScroll //change to mousehover and icon?
            trigger={
                <Segment>
                    <Header as='h2' color="orange">BREAKING NEWS</Header>
                    <Image src={breakingArticle.imagesrc}></Image>
                    <Header as='h2' color="orange">{breakingArticle.header}</Header>
                    <Container>{breakingArticle.description}</Container>
                </Segment>
            }>

            <Popup.Header>Peek</Popup.Header>
            <Popup.Content>
                <p>{breakingArticle.peek}</p>
            </Popup.Content>
        </Popup>
    )

}

export default BreakingNews
