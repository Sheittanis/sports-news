
import React from 'react'
import { Header, Grid, Segment } from 'semantic-ui-react'
import ArticleCarousel from "../components/ArticleCarousel"

import "pure-react-carousel/dist/react-carousel.es.css";
import data from "../constants/HomeArticles"

const HomePage = () => {


  return (
    <Grid centered >

      <Grid>
          <ArticleCarousel data={data.carouselImages}></ArticleCarousel>
      </Grid>

    </Grid>
  )

}

export default HomePage