import _ from 'lodash'
import React from 'react'
import { Header, Segment, Table, Image, Icon } from 'semantic-ui-react'

import data from "../constants/Standings"

function getResult(result){
    switch (result) {
        case "W":
            return <Icon name='circle' color='green' size='large'></Icon>;
        case "L":
            return <Icon name='circle' color='red' size='large'></Icon>;
        case "D":
            return  <Icon name='circle' color='blue' size='large'></Icon>;
        default:
            return " "
    }
}

const Standings = () => {

    var newArr = _.orderBy(data, 'points', 'desc')
    const fixtures = (
        newArr.map((_team, index) =>
            <Table.Row key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell><Image src={_team.imageSrc} verticalAlign="middle" size="mini"></Image><div>{_team.name} </div></Table.Cell>
                <Table.Cell>{_team.matches}</Table.Cell>
                <Table.Cell>{_team.wins}</Table.Cell>
                <Table.Cell>{_team.draws}</Table.Cell>
                <Table.Cell>{_team.losses}</Table.Cell>
                <Table.Cell>{_team.goalsfor}</Table.Cell>
                <Table.Cell>{_team.goalsAgainst}</Table.Cell>
                <Table.Cell>{_team.goalsfor - _team.goalsAgainst}</Table.Cell>
                <Table.Cell>{_team.points}</Table.Cell>
                <Table.Cell>                
                    {_team.form.map((_form, index) =>
                        <span key={index}> {getResult(_form)}</span>
                )}
                {/* {_team.form} */}
                </Table.Cell>
                <Table.Cell>{_team.upcoming}</Table.Cell>
            </Table.Row>
        )
    );
    //gradient hover

    return (
        <Segment vertical>
            <Header as='h2' color='red'>Βαθμολογία</Header>
            <Table striped celled textAlign="center">
                <Table.Header className="standingsTable">
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Played</Table.HeaderCell>
                        <Table.HeaderCell>Won</Table.HeaderCell>
                        <Table.HeaderCell>Drawn</Table.HeaderCell>
                        <Table.HeaderCell>Lost</Table.HeaderCell>
                        <Table.HeaderCell>Goals For</Table.HeaderCell>
                        <Table.HeaderCell>Goals Against</Table.HeaderCell>
                        <Table.HeaderCell>Goal Difference</Table.HeaderCell>
                        <Table.HeaderCell>Points</Table.HeaderCell>
                        <Table.HeaderCell>Form</Table.HeaderCell>
                        <Table.HeaderCell>Upcoming</Table.HeaderCell>
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
