
import React from 'react'
import { Header, Statistic, Grid, Progress, Image, Icon, Segment } from 'semantic-ui-react'

const TeamStatCard = (props) => {

    return (
        <Segment>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column >
                        <Header as='h3'>{props.option.teamName}

                        </Header>
                        <Header as='h1'>
                            <Image src={props.option.teamCrest} />
                        </Header>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>{props.option.firstStat}</Statistic.Value>
                            <Statistic.Label >{props.option.firstStatLabel}
                            </Statistic.Label>
                            <Statistic.Label >
                                <Icon name={props.option.iconName} size="big" className="marginL-1"></Icon>
                            </Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Progress className="possessionProgress" percent={props.option.averagePossession} color="green" progress precision></Progress>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default TeamStatCard
