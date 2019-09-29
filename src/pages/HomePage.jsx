
import React from 'react'
import { Grid, Image, Header, Popup, Segment } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import "pure-react-carousel/dist/react-carousel.es.css";
import data from "../constants/HomeArticles"


const HomePage = () => {

  const latestNews = (
    data.latestNewsData.map((_project, index) =>
      <Image key={index} src={_project.imageSrc}></Image>
    )
  );

  return (
    <Grid centered >
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Popup
            trigger={
              <Segment>
                <Image src={data.breakingArticle.imageSrc}></Image>
                <Header as='h2' color="orange">{data.breakingArticle.header}</Header>
                <p>{data.breakingArticle.description}</p>
              </Segment>
            }
          >
            <Popup.Header>Peek</Popup.Header>
            <Popup.Content>
              <p>{data.breakingArticle.peek}</p>
            </Popup.Content>
          </Popup>


        </Grid.Column>
        <Grid.Column width={6}>
          {latestNews}
        </Grid.Column>
      </Grid.Row>


      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <ArticleOverview articles={data.articleOverview}></ArticleOverview>
        </Grid.Column>
        <Grid.Column width={6}>
          <NewsFeed feed={data.articleOverview}></NewsFeed>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}

export default HomePage