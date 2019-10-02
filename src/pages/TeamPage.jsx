
import _ from 'lodash'
import React, { useState } from 'react'
import { Grid, Image, Segment, Container, Header } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import ArticleCard from "../components/ArticleCard"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import TeamBanner from "../components/TeamBanner"

import { fetchTeamData } from "../constants/TeamPageData"
import { loremIpsum, useEffectAsync } from "../utils"

const TeamPage = (props) => {
    const [info, setInfo] = useState([]);

    useEffectAsync(async () => {
        const items = await fetchTeamData(props.match.params.teamId);
        setInfo(items);
    }, [props]);

    return (
        <Grid centered >

            {/* <Image src={PreviewExample} size="big" /> */}

            <Grid.Row columns={2}>
                <Grid.Column width={10}>
                    {_.times(info.amountOfArticles, i => (
                        <ArticleCard key={i} data={i}></ArticleCard>
                    ))}
                    {/* <ArticleOverview articles={data.articleOverview}></ArticleOverview> */}
                </Grid.Column>

                <Grid.Column width={6}>
                <TeamBanner teamData={info}></TeamBanner>
                    <NewsFeed feed={data.articleOverview}></NewsFeed>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default TeamPage