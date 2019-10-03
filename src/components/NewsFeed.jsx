import React from 'react'
import { Header, Segment, Feed } from 'semantic-ui-react'
import { loremIpsum } from "../utils"

const NewsFeed = (props) => {

    const articles = (
        props.feed.map((option, index) =>
            <Segment key={index} style={{ margin: '1rem' }}>
                <Feed.Event>
                    <Feed.Label>Today - {loremIpsum(Math.floor((Math.random() * 10) + 10))}</Feed.Label>
                    <Feed.Content>
                        <Feed.Summary as='a'>
                            {loremIpsum(Math.floor((Math.random() * 50) + 10))}
                            </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Segment>
        )
    );

    return (
        <Segment vertical>
            <Header as='h2' color='orange'>News Feed</Header>
            {articles}
        </Segment>
    )
}

export default NewsFeed
