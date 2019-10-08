
import React, { useState, useEffect } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import { latestArticles, articleOverview } from "../constants/Articles"
import LiveScores from '../components/LiveScores'
import TeamBar from "../components/SponsorsBar";
import BreakingNews from '../components/BreakingNews'

import windowDimensions from "../actions/WindowDimensions"
import { withRouter, Link } from "react-router-dom"

const HomePage = (props) => {
  const { history } = props
  const [selectedMatch, setSelection] = useState();

  var dimensions = windowDimensions();
  const isMobile = dimensions.width < 768;

  const latestNews = (
    latestArticles.map((_project, index) =>

      <Grid.Column className="marginTop-1" key={index} computer={Math.floor(16 / latestArticles.length)} >
        <Segment className="articleSegment">
          <Image src={_project.imagesrc}></Image>
          <p >{_project.description}</p>
        </Segment>
      </Grid.Column>
    )
  );

  useEffect(() => {
    if (selectedMatch) {
      history.push({
        pathname: '/livescores',
        state: { matchId: selectedMatch.matchId }
      });
    }
  }, [selectedMatch, history]);

  return (
    <Grid centered >
      <Grid.Row columns={2}>
        <Grid.Column computer={10} tablet={16}>
          <BreakingNews></BreakingNews>
        </Grid.Column>


        <Grid.Column computer={6} tablet={16}>
          <Segment>
            {!isMobile ? (
              <LiveScores selectedMatch={setSelection}></LiveScores>
            ) : (
                <Segment className="upcoming">
                  <Segment.Inline as={Link} to="/livescores">
                    <Header as='h4' color="orange" textAlign="center" className="underline" >View Live Scores</Header>
                  </Segment.Inline>
                </Segment>
              )}
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <TeamBar></TeamBar>
      <Header as='h2' color="orange">LATEST NEWS</Header>
      <Grid.Row columns={latestArticles.length}>
        {latestNews}
      </Grid.Row>


      <Grid.Row columns={2} style={{ marginTop: '5rem' }} >
        <Grid.Column width={10}>
          <ArticleOverview articles={articleOverview}></ArticleOverview>
        </Grid.Column>
        <Grid.Column width={6}>
          <NewsFeed feed={articleOverview}></NewsFeed>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}

export default withRouter(HomePage)