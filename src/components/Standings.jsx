import _ from 'lodash'
import React from 'react'
import { Header, Segment, Table, Image, Icon } from 'semantic-ui-react'

import data from "../constants/Standings"

const Standings = () => {

    var newArr = _.orderBy(data, 'points', 'desc')
    const fixtures = (
        newArr.map((_team) =>
            <Table.Row>
                <Table.Cell><Image src={_team.imageSrc} verticalAlign="middle" size="mini"></Image><div>{_team.name} </div></Table.Cell>
                <Table.Cell>{_team.matches}</Table.Cell>
                <Table.Cell>{_team.wins}</Table.Cell>
                <Table.Cell>{_team.draws}</Table.Cell>
                <Table.Cell>{_team.losses}</Table.Cell>
                <Table.Cell>{_team.goalsfor}</Table.Cell>
                <Table.Cell>{_team.goalsAgainst}</Table.Cell>
                <Table.Cell>{_team.goalDifference}</Table.Cell>
                <Table.Cell>{_team.points}</Table.Cell>
                <Table.Cell>{_team.form}</Table.Cell>
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
                        <Table.HeaderCell>Ομάδα</Table.HeaderCell>
                        <Table.HeaderCell>Αγώνες</Table.HeaderCell>
                        <Table.HeaderCell>Νίκες</Table.HeaderCell>
                        <Table.HeaderCell>Ισοπαλίες</Table.HeaderCell>
                        <Table.HeaderCell>Ήττες</Table.HeaderCell>
                        <Table.HeaderCell>Γκολ υπέρ</Table.HeaderCell>
                        <Table.HeaderCell>Γκολ κατά</Table.HeaderCell>
                        <Table.HeaderCell>Διαφορά Γκολ</Table.HeaderCell>
                        <Table.HeaderCell>Βαθμοί</Table.HeaderCell>
                        <Table.HeaderCell>Form</Table.HeaderCell>
                        <Table.HeaderCell>Επόμενος αγώνας</Table.HeaderCell>
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
