
import _ from 'lodash'
import React, { useState } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import ArticleCard from "../components/ArticleCard"

import { fetchTeamData } from "../constants/TeamPageData"
import { useEffectAsync } from "../utils"
import windowDimensions from "../actions/WindowDimensions"

const MobileView = (props) => {

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column mobile={16} >
                    <Segment>
                        {_.times(20, i => (
                            <ArticleCard key={i} data={i}></ArticleCard>
                        ))}
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}
const DesktopView = (props) => {
    return (
        <Grid.Row columns={2}>
            <Grid.Column computer={8} tablet={16} >
                <Segment>
                    {_.times(10, i => (
                        <ArticleCard key={i} data={i}></ArticleCard>
                    ))}
                </Segment>
            </Grid.Column>
            <Grid.Column computer={8} tablet={16} >
                <Segment>
                    {_.times(10, i => (
                        <ArticleCard key={i} data={i}></ArticleCard>
                    ))}
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}

const ArchivePage = (props) => {
    const [info, setInfo] = useState([]);

    var dimensions = windowDimensions();

    const isDesktop = dimensions.width >= 992;

    useEffectAsync(async () => {
        const items = await fetchTeamData(props.match.params.teamId);
        setInfo(items);
    }, [props]);

    return (
        <Grid centered>
        <Header as='h2' color="orange">Article Archive</Header>
            {isDesktop ? (
                    <DesktopView info={info}></DesktopView>
            ) : (
                <MobileView info={info}></MobileView>
                )}

        </Grid>
    )

}

export default ArchivePage