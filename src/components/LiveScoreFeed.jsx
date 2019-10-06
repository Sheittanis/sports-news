import React from 'react'
import { Header, Segment, Feed, Icon, Image } from 'semantic-ui-react'

const LiveScoreFeed = (props) => {
    const { selectedFeed } = props
    
    const matchFeed = (
        selectedFeed.feed !== undefined && selectedFeed.feed.map((_item, index) =>
            <Feed.Event key={index} >
                <Feed.Label> {_item.minute}</Feed.Label>
                <Feed.Label> <Icon name={_item.type}></Icon></Feed.Label>
                <Feed.Content>
                    <Feed.Summary >
                        {_item.matchEvent}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        )
    );

    return (
        <Segment vertical>
            {selectedFeed &&
                <Segment textAlign="center">
                    <Header as='h2' color='orange'>Match Live Thread</Header>
                    <Feed>
                        <Header as='h3' >{selectedFeed.status}</Header>
                        <Header as='h3' >
                            <Image src={selectedFeed.team1}></Image>
                            {selectedFeed.teams}
                            <Image src={selectedFeed.team2}></Image>
                        </Header>
                        <Header.Subheader>
                            {selectedFeed.team1goals}
                            -
                            {selectedFeed.team2goals}
                        </Header.Subheader>
                        {matchFeed}
                    </Feed>
                </Segment>
            }
        </Segment>
    )
}

export default LiveScoreFeed
