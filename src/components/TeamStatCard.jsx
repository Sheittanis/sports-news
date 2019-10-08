
import React from 'react'
import { Header, Statistic, Grid, Progress, Image, Icon, Segment, Responsive } from 'semantic-ui-react'

const TeamStatCard = (props) => {

    return (
        <Segment>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column className="imageWithText" mobile={8} tablet={8} computer={6}>
                        <Header as='h3' ><Image src={props.option.teamCrest} />{props.option.teamName}</Header>
                    </Grid.Column>

                    <Grid.Column mobile={8} tablet={8} computer={5}>
                        <Statistic>
                            <Statistic.Value>{props.option.firstStat}</Statistic.Value>
                            <Statistic.Label >{props.option.firstStatLabel}</Statistic.Label>

                            <Responsive as={Statistic.Label} minWidth={800}>
                                <Icon name={props.option.iconName} size="big" className="marginL-1"></Icon>
                            </Responsive>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={5}>
                        <Progress className="possessionProgress marginT-1" percent={props.option.averagePossession} color="green" progress precision>AVG POSSESSION</Progress>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default TeamStatCard
