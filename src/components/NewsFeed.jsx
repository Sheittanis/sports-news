import React from 'react'
import { Header, Segment, Feed } from 'semantic-ui-react'
import faker from "faker"
import {formatDate} from "../utils"
import _ from "lodash"


const Article = (props) => {
    const { option } = props;
    return (
        <Segment key={option} className="articleSegment">
            <Feed.Event>
                <Feed.Label>{formatDate(faker.date.recent())}</Feed.Label>
                <Feed.Content>
                    <Feed.Summary as='a'>
                        {faker.lorem.sentences(1)}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Segment>
    )
}


const NewsFeed = (props) => {
    
    return (
        <Segment vertical>
            <Segment inverted>
                <Header as='h2' color='orange'>News Feed</Header>
                {_.times(props.feed, i => (
                    <Article key={i} data={i}></Article>
                ))}
            </Segment>

        </Segment>
    )
}

export default NewsFeed
