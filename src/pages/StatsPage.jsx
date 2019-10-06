import React, { useState } from 'react'
import { Container, Grid, Dropdown, Segment } from 'semantic-ui-react'

import { playerStats, teamStats, dropdownOptions } from "../constants/Stats"

import PlayerStatCard from '../components/PlayerStatCard'
import TeamStatCard from '../components/TeamStatCard'

const StatsPage = () => {
    // const data = fetchTeamData();
    const [mode, setMode] = useState("playerStats");
    const [stats, setStats] = useState(playerStats);

    // useEffect(() => {

    // }, [mode]);

    const selectedMode = (e, { value }) => {
        // e.persist();
        setMode(value)
        setModeData(value)
    };

    const selectedStats = (
        // teamStats.map((option, index) => <PlayerStatCard key={index} option={option}></PlayerStatCard>)
        stats.map((option, index) => {
            // return mode === "playerStats" ?
            // <PlayerStatCard key={index} option={option}></PlayerStatCard>
            // :
            // <TeamStatCard key={index} option={option}></TeamStatCard>
            switch (mode) {
                case "playerStats":
                  return <PlayerStatCard key={index} option={option}></PlayerStatCard>;
                case "teamStats":
                        console.log(stats)
                  return <TeamStatCard key={index} option={option}></TeamStatCard>;
                default:
                  return " "
            }
        })
    );


    function setModeData(mode) {
        console.log(mode)
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
