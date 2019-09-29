import React from 'react'
import { Header, Segment, Table, Image, Icon } from 'semantic-ui-react'

import data from "../constants/Fixtures"

const Fixtures = (props) => {

    const fixtures = (
        data.agonistiki.map((_agonistiki) =>
            <Table.Body style={{ marginBottom: '1rem' }}>
                <Table.Row>
                    <Table.HeaderCell className="subHeader" colSpan='6' textAlign="center">
                        <Header  as='h2' color='red'>{_agonistiki.header}</Header>
                    </Table.HeaderCell>
                </Table.Row>

                {_agonistiki.matches.map((_match) =>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h5'>
                                <Image className="float-left" src={_match.team1} size="mini" floated ></Image> <span>{_match.teams}</span>
                                <Image className="float-right" src={_match.team2} size="mini" floated></Image>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{_match.date}</Table.Cell>
                        <Table.Cell>{_match.score}</Table.Cell>
                        <Table.Cell>{_match.location}</Table.Cell>
                        <Table.Cell>
                            {_match.watch.length > 0 ? (
                                <a href={_match.watch} target="_blank" rel="noopener noreferrer">
                                    <Icon name='youtube' color='red' size='large'></Icon>
                                </a>
                            ) : (
                                    <span> </span>
                            )}
                        </Table.Cell>
                        <Table.Cell>{_match.article}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        )
    );
    //gradient hover

    return (
        <Segment vertical>
            <Header as='h2' color='red'>Fixtures</Header>
            <Table striped celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Teams</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Result</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Highlights</Table.HeaderCell>
                        <Table.HeaderCell>Read more..</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {fixtures}

            </Table>
        </Segment>
    )
}

export default Fixtures
