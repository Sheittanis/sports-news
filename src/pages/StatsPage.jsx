import React, { useState } from 'react'
import { Container, Grid, Dropdown, Segment } from 'semantic-ui-react'

import { playerStats, teamStats, dropdownOptions } from "../constants/Stats"

import PlayerStatCard from '../components/PlayerStatCard'
import TeamStatCard from '../components/TeamStatCard'

const StatsPage = () => {
    const [mode, setMode] = useState("playerStats");
    const [stats, setStats] = useState(playerStats);
    const selectedMode = (e, { value }) => {
        // e.persist();
        setMode(value)
        setModeData(value)
    };

    const selectedStats = (
        stats.map((option, index) => {
            switch (mode) {
                case "playerStats":
                  return <PlayerStatCard key={index} option={option}></PlayerStatCard>;
                case "teamStats":
                  return <TeamStatCard key={index} option={option}></TeamStatCard>;
                default:
                  return " "
            }
        })
    );


    function setModeData(mode) {
        switch (mode) {
          case "playerStats":
            return setStats(playerStats);
          case "teamStats":
            return setStats(teamStats);
          default:
            return " "
        }
      }

    return (
        <Grid centered style={{ minHeight: '80vh' }} >
            <Grid.Row columns={2}>
                <Container text textAlign='center'>
                    <Dropdown placeholder='Player Stats' fluid selection options={dropdownOptions} onChange={selectedMode} />
                    <Segment>
                        {selectedStats}
                    </Segment>

                </Container>
            </Grid.Row>
        </Grid>
    )
}

export default StatsPage
