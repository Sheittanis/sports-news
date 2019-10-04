import React from 'react'
import { Header, Segment, Feed } from 'semantic-ui-react'
import { loremIpsum } from "../utils"

const LiveScoreFeed = (props) => {
    const { selectedMatch } = props
    console.log(props)

    const matchFeed = (
        props.feed.map((option, index) =>
            <Feed.Event key={index}>
                <Feed.Label>Today - {loremIpsum(Math.floor((Math.random() * 10) + 10))}</Feed.Label>
                <Feed.Content>
                    <Feed.Summary as='a'>
                        {loremIpsum(Math.floor((Math.random() * 50) + 10))}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        )
    );

    return (
        <Segment vertical>
            {selectedMatch &&
                <Segment>
                    <Header as='h2' color='orange'>Match Live Thread</Header>
                    <Feed>
                        <Header as='h2' color='orange'>teams</Header>
                        {matchFeed}
                    </Feed>
                </Segment>
            }
        </Segment>
    )
}

export default LiveScoreFeed
