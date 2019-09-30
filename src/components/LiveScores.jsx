import React from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'

import data from "../constants/LiveMatches"

const LiveScores = (props) => {

    const liveScores = (
        <Grid>
            {data.map((_match, index) =>

                <Grid.Row key={index} columns={3}>
                    <Grid.Column width={3}>
                        <Image className="float-left" src={_match.team1} size="mini" ></Image>
                    </Grid.Column>
                    <Grid.Column textAlign="center" width={10}>
                        <div className="float-left" style={{ background: 'red', height: '30px', width: '30px' }}>{_match.team1goals}</div>
                        <span>{_match.teams}    </span>
                        <div className="float-right" style={{ background: 'red', height: '30px', width: '30px' }}>{_match.team2goals}</div>

                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image className="float-left" src={_match.team2} size="mini" ></Image>
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    );

    return (
        <Segment vertical>
            {liveScores}
        </Segment>
    )
}

export default LiveScores
