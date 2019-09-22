import React from 'react'
import { Header, Segment, Table, Image, List, Tab } from 'semantic-ui-react'

import data from "../constants/Fixtures"

const Fixtures = (props) => {

    const fixtures = (
        data.agonistiki.map((_agonistiki) =>
            <Table.Body>
                <Table.Row>
                    <Table.HeaderCell colSpan='6' textAlign="center">{_agonistiki.header}</Table.HeaderCell>
                </Table.Row>

                {_agonistiki.matches.map((_match) =>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h5'>
                                <Image src={_match.team1} size="mini"></Image> {_match.teams}
                                <Image src={_match.team2} size="mini"></Image>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{_match.date}</Table.Cell>
                        <Table.Cell>{_match.score}</Table.Cell>
                        <Table.Cell>{_match.location}</Table.Cell>
                        <Table.Cell>{_match.watch}</Table.Cell>
                        <Table.Cell>{_match.article}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        )
    );
    //gradient hover

    return (
        <Segment inverted vertical>
            <Header as='h2' color='red'>Fixtures</Header>
            {/* {articles} */}
            <Table striped celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Teams</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Where to watch</Table.HeaderCell>
                        <Table.HeaderCell>Article</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {fixtures}

            </Table>
        </Segment>
    )
}

export default Fixtures
