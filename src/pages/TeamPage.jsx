
import _ from 'lodash'
import React, { useState } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ArticleCard from "../components/ArticleCard"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import TeamBanner from "../components/TeamBanner"

import { fetchTeamData } from "../constants/TeamPageData"
import { useEffectAsync } from "../utils"
import windowDimensions from "../actions/WindowDimensions"

const MobileView = (props) => {
    const { info } = props

    return (
        <Grid centered>
            <Grid.Row columns={2}>
                
            <Grid.Column computer={6} tablet={16}>
                    <TeamBanner teamData={info}></TeamBanner>
                    <NewsFeed feed={data.articleOverview}></NewsFeed>
                </Grid.Column>
                <Grid.Column computer={10} tablet={16} >
                    <Segment>
                        {_.times(info.amountOfArticles, i => (
                            <ArticleCard key={i} data={i}></ArticleCard>
                        ))}
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}
const DesktopView = (props) => {
    const { info } = props
    return (
        <Grid.Row columns={2}>
            <Grid.Column computer={10} tablet={16} >
                <Segment>
                    {_.times(info.amountOfArticles, i => (
                        <ArticleCard key={i} data={i}></ArticleCard>
                    ))}
                </Segment>
            </Grid.Column>

            <Grid.Column computer={6} tablet={16}>
                <TeamBanner teamData={info}></TeamBanner>
                <NewsFeed feed={data.articleOverview}></NewsFeed>
            </Grid.Column>
        </Grid.Row>
    )
}

const TeamPage = (props) => {
    const [info, setInfo] = useState([]);

    var dimensions = windowDimensions();
  
    const isMobile = dimensions.width < 768;

    useEffectAsync(async () => {
        const items = await fetchTeamData(props.match.params.teamId);
        setInfo(items);
    }, [props]);

    return (
        <Grid centered>
            

            {isMobile ? (
                <MobileView info={info}></MobileView>
            ) : (
                <DesktopView info={info}></DesktopView>
              )}

        </Grid>
    )

}

export default TeamPage