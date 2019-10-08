
import React from 'react'
import { Segment, Header, Statistic, Grid, Icon, Image } from 'semantic-ui-react'

const PlayerStatCard = (props) => {
    return (
        <Segment>

            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column >
                        <Header className="margin-0" as='h2'>{props.option.lastName}
                            <Header.Subheader>{props.option.name}</Header.Subheader>
                            <Header.Subheader>{props.option.number}</Header.Subheader>
                        </Header>
                        <Header className="margin-0" as='h3' color="grey">
                            <Image src={props.option.teamCrest} /> {props.option.teamName}
                        </Header>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>{props.option.firstStat}</Statistic.Value>
                            <Statistic.Label >{props.option.firstStatLabel}
                                <Icon name='soccer' size="big" className="marginL-1"></Icon>
                            </Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>{props.option.secondStat}</Statistic.Value>
                            <Statistic.Label>{props.option.secondStatLabel}
                                <Icon.Group size='big' className="marginL-1">
                                    <Icon name='soccer' color="grey" />
                                    <Icon size='tiny' color='green' name='plus' style={{ left: '66%', top: '66%' }} />
                                </Icon.Group>
                            </Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default PlayerStatCard
