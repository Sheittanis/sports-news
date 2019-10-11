
import _ from 'lodash'
import React, { useState } from 'react'
import { Pagination, Image, Header, Segment, Icon, Grid } from 'semantic-ui-react'
import ArticleCard from "../components/ArticleCard"

import { fetchTeamData } from "../constants/TeamPageData"
import { useEffectAsync } from "../utils"
import windowDimensions from "../actions/WindowDimensions"
import { Link } from "react-router-dom"
import faker from "faker"
import { formatDate } from "../utils"


const ArticleList = () => {

    return (
        <Segment className="articleSegment margin-1" >
            <Grid as={Link} to="/article" >
                <Grid.Row columns={2}>
                    <Grid.Column computer={4}  tablet={4} mobile={6} >
                        <Image src={faker.image.sports()}/>
                    </Grid.Column>

                    <Grid.Column computer={12}  tablet={12} mobile={10}  >
                        <Header.Subheader as='h4'>{formatDate(faker.date.past())}</Header.Subheader>
                        <Header className="articleHeader">{faker.lorem.sentence()}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

const MobileView = () => {
    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column mobile={16} >
                    <Segment>
                        {_.times(10, i => (
                        <ArticleList key={i} data={i}></ArticleList>
                        ))}
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}
const DesktopView = () => {
    return (
        <Grid.Row columns={2}>
            <Grid.Column computer={8} tablet={16} >
                <Segment>
                    {_.times(10, i => (
                        <ArticleList key={i} data={i}></ArticleList>
                    ))}
                </Segment>
            </Grid.Column>
            <Grid.Column computer={8} tablet={16} >
                <Segment>
                    {_.times(10, i => (
                        <ArticleList key={i} data={i}></ArticleList>
                    ))}
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}

var archiveList = [];
_.times(20, i => (
    archiveList.push(
        <ArticleList key={i} data={i}></ArticleList>)
))

const ArchivePage = (props) => {
    const [info, setInfo] = useState([]);
    const [index, setIndex] = useState(0);

    const resultCount = archiveList.length;
    const resultsPerPage = 10;
    const pageCount = resultCount / resultsPerPage;

    var dimensions = windowDimensions();

    const isDesktop = dimensions.width >= 992;

    useEffectAsync(async () => {
        const items = await fetchTeamData(props.match.params.teamId);
        setInfo(items);
    }, [props]);

    const getNewPage = (e, data) => {
        setIndex(- resultsPerPage + (data.activePage * resultsPerPage))
    }

    return (
        <Grid centered>
            <Header as='h2' color="orange">Article Archive</Header>
            {isDesktop ? (
                <DesktopView info={info}></DesktopView>
            ) : (
                    <MobileView info={info}></MobileView>
                )}
            <Pagination className="marginT-1" defaultActivePage={1} totalPages={pageCount} onPageChange={getNewPage}></Pagination>
        </Grid>
    )

}

export default ArchivePage