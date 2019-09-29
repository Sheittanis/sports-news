import React from 'react'
import { Header, Segment, Feed } from 'semantic-ui-react'

const NewsFeed = (props) => {


    const articles = (
        props.feed.map((option, index) =>
            <Segment key={index} style={{ margin: '1rem' }}>
                <Feed.Event>
                    <Feed.Label >{option.date} - {option.header}</Feed.Label>
                    <Feed.Content>
                        <Feed.Summary as='a'>{option.header}</Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Segment>
        )
    );

    return (
        <Segment inverted vertical>
        <Header as='h2' color='red'>News Feed</Header>
            {articles}
        </Segment>
    )
}

export default NewsFeed
