import React from 'react'
import { Segment, Image, Table, Header, Item } from 'semantic-ui-react'

import { liveMatches } from "../constants/LiveMatches"

const LiveScores = (props) => {
    const { selectedMatch } = props

    function matchSelected(match) {
        selectedMatch(match)
    }

    const liveScores = (
        liveMatches.map((_match, index) =>
            <Table.Row key={index} onClick={() => matchSelected(_match)}>
                <Table.Cell>
                    <Image className="float-left" src={_match.team1} size="mini" ></Image>
                    {_match.team1goals}
                </Table.Cell>
                <Table.Cell>
                    <div>
                        {_match.teams}
                    </div>
                    <div>
                        <Item className="highlightedText">{_match.status}</Item>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {_match.team2goals}
                    <Image className="float-right" src={_match.team2} size="mini" ></Image>
                </Table.Cell>
            </Table.Row>
        )
    );

    return (
        <Segment vertical>
            <Header as='h2' color="orange">LIVE SCORES</Header>
            <Table unstackable striped celled textAlign="center">
                <Table.Header className="standingsTable">
                    <Table.Row>
                        <Table.HeaderCell>Team 1</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Team 2</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {liveScores}
                </Table.Body>
            </Table>
        </Segment>
    )
}

export default LiveScores
