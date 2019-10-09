import React from 'react'
import { Grid, Header, Segment, Table, Image, Icon, Item, Responsive } from 'semantic-ui-react'
import { Link } from "react-router-dom"

import data from "../constants/Fixtures"

const Fixtures = (props) => {

    const fixtures = (
        data.agonistiki.map((_agonistiki, index) =>
            <Table.Body key={index} className="marginB-1">
                <Table.Row>
                    <Table.HeaderCell className="subHeader" colSpan='6' textAlign="center">
                        <Header className="tableSpacerHeader" as='h2' color='red'>{_agonistiki.header}</Header>
                    </Table.HeaderCell>
                </Table.Row>

                {_agonistiki.matches.map((_match, index) =>
                    <Table.Row key={index}>
                        <Table.Cell>
                            <Header as='h5'>
                                <Grid>
                                    <Grid.Row columns={3}>
                                        <Grid.Column width={3}>
                                            <Responsive as={Image} minWidth={1200} className="float-left" src={_match.team1} size="mini"></Responsive>
                                        </Grid.Column>
                                        <Grid.Column width={10}><Item>{_match.teams}</Item></Grid.Column>
                                        <Grid.Column width={3}>
                                            <Responsive as={Image} minWidth={1200} className="float-left" src={_match.team2} size="mini"></Responsive>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{_match.date}</Table.Cell>
                        <Table.Cell>{_match.score}</Table.Cell>
                        <Responsive as={Table.Cell} minWidth={900}>{_match.location}</Responsive>
                        <Table.Cell>
                            {_match.watch.length > 0 ? (
                                <a href={_match.watch} target="_blank" rel="noopener noreferrer">
                                    <Icon name='youtube' color='red' size='large'></Icon>
                                </a>
                            ) : (
                                    <span> </span>
                                )}
                        </Table.Cell>
                        <Table.Cell className="underline highlightedText"><Item  as={Link} to="/article">{_match.article}</Item></Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        )
    );

    return (
        <Segment vertical>
            <Header as='h2' color='red'>Fixtures</Header>
            <Table striped celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Teams</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Result</Table.HeaderCell>
                        <Responsive as={Table.HeaderCell} minWidth={900}>Location</Responsive>
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
