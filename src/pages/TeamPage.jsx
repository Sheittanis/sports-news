
import _ from 'lodash'
import React, { useState } from 'react'
import { Grid, Segment, Responsive } from 'semantic-ui-react'
import ArticleCard from "../components/ArticleCard"
import NewsFeed from "../components/NewsFeed"

import TeamBanner from "../components/TeamBanner"

import { fetchTeamData } from "../constants/TeamPageData"
import { useEffectAsync } from "../utils"

const MiniView = (props) => {
    const { info } = props

    return (
        <Grid centered>
            <Grid.Row columns={2}>
                <Grid.Column computer={6} tablet={16}>
                    <TeamBanner teamData={info}></TeamBanner>
                    <NewsFeed feed={info.amountOfNews}></NewsFeed>
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
const TabletView = (props) => {
    const { info } = props

    return (
        <Grid centered>
            <Grid.Row columns={2}>
                <Grid.Column width={16} >
                    <TeamBanner teamData={info}></TeamBanner>
                    <NewsFeed feed={info.amountOfNews}></NewsFeed>
                </Grid.Column>
                <Grid.Column width={16} >
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
            <Grid.Column computer={10}>
                    {_.times(info.amountOfArticles, i => (
                        <ArticleCard key={i} data={i}></ArticleCard>
                    ))}
            </Grid.Column>

            <Grid.Column computer={6}>
                <TeamBanner teamData={info}></TeamBanner>
                <NewsFeed feed={info.amountOfNews}></NewsFeed>
            </Grid.Column>
        </Grid.Row>
    )
}

const TeamPage = (props) => {
    const [info, setInfo] = useState([]);

    useEffectAsync(async () => {
        const items = await fetchTeamData(props.match.params.teamId);
        setInfo(items);
    }, [props]);

    return (
        <Grid centered>
            <Responsive as={DesktopView} minWidth={992} info={info}></Responsive>
            <Responsive as={TabletView} minWidth={500} maxWidth={991} info={info}></Responsive>
            <Responsive as={MiniView} maxWidth={499} info={info}></Responsive>
        </Grid>
    )

}

export default TeamPage