
import React from 'react'
import { Grid } from 'semantic-ui-react'
import ArticleCarousel from "../components/ArticleCarousel"
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import "pure-react-carousel/dist/react-carousel.es.css";
import data from "../constants/HomeArticles"


const HomePage = () => {

  return (
    <Grid centered >
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <ArticleCarousel data={data.carouselImages}></ArticleCarousel>
        </Grid.Column>
        <Grid.Column width={6}>
          <ArticleCarousel data={data.carouselImages}></ArticleCarousel>
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