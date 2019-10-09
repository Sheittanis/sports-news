import _ from 'lodash'
import React from 'react'
import { Responsive, Header, Segment, Table, Image, Icon } from 'semantic-ui-react'

import data from "../constants/Standings"

function getResult(result) {
    switch (result) {
        case "W":
            return <Icon name='circle' color='green' size='large'></Icon>;
        case "L":
            return <Icon name='circle' color='red' size='large'></Icon>;
        case "D":
            return <Icon name='circle' color='blue' size='large'></Icon>;
        default:
            return " "
    }
}

const Standings = () => {

    var newArr = _.orderBy(data, 'points', 'desc')
    const fixtures = (
        newArr.map((_team, index) =>
            <Table.Row key={index}>
                <Responsive as={Table.Cell} minWidth={800}>{index + 1}</Responsive>
                <Table.Cell textAlign="left">
                    <Responsive as={Image} minWidth={1200}>
                        <Image src={_team.imageSrc} className="marginR-1" verticalAlign="middle" size="mini"></Image>
                    </Responsive>
                    <Responsive as={Image} minWidth={500}>
                        <div>{_team.name}</div>
                    </Responsive>
                    <Responsive as={Image} maxWidth={499}>
                        <Image src={_team.imageSrc} verticalAlign="middle" size="mini"></Image>
                    </Responsive>
                </Table.Cell>
                <Responsive as={Table.Cell} minWidth={600}>{_team.matches}</Responsive>

                <Table.Cell>{_team.wins}</Table.Cell>
                <Table.Cell>{_team.draws}</Table.Cell>
                <Table.Cell>{_team.losses}</Table.Cell>

                <Responsive as={Table.Cell} minWidth={520}>
                    {_team.goalsfor}
                </Responsive>
                <Responsive as={Table.Cell} minWidth={520}>
                    {_team.goalsAgainst}
                </Responsive>

                <Responsive as={Table.Cell} minWidth={420}>{_team.goalsfor - _team.goalsAgainst}</Responsive>
                <Table.Cell>{_team.points}</Table.Cell>
                <Responsive as={Table.Cell} minWidth={1200}>
                    {_team.form.map((_form, index) =>
                        <span key={index}> {getResult(_form)}</span>
                    )}
                </Responsive>
                <Responsive as={Table.Cell} minWidth={1200}>
                        <Image src={_team.upcoming} verticalAlign="middle" size="mini"></Image>
                </Responsive>
            </Table.Row>
        )
    );

    return (
        <Segment vertical>
            <Header as='h2' color='red'>Standings</Header>
            <Table unstackable striped celled textAlign="center">
                <Table.Header className="standingsTable">
                    <Table.Row>
                        <Responsive as={Table.HeaderCell} minWidth={800}>
                            Position
                        </Responsive>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Responsive as={Table.HeaderCell} minWidth={600}>
                            Played
                        </Responsive>
                        <Table.HeaderCell>Won</Table.HeaderCell>
                        <Table.HeaderCell>Drawn</Table.HeaderCell>
                        <Table.HeaderCell>Lost</Table.HeaderCell>
                        <Responsive as={Table.HeaderCell} minWidth={520}>GF</Responsive>
                        <Responsive as={Table.HeaderCell} minWidth={520}>GA</Responsive>
                        <Responsive as={Table.HeaderCell} minWidth={420}>GD</Responsive>
                        <Table.HeaderCell>Points</Table.HeaderCell>

                        <Responsive as={Table.HeaderCell} minWidth={1200}>
                            Form
                        </Responsive>
                        <Responsive as={Table.HeaderCell} minWidth={1200}>
                            Upcoming
                        </Responsive>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {fixtures}
                </Table.Body>

            </Table>
        </Segment>
    )
}

export default Standings
