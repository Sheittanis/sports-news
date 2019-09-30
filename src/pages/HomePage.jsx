
import React, {useState} from 'react'
import { Grid, Image, Header, Popup, Segment } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"

const timeoutLength = 2500

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  let timer = null;

  const latestNews = (
    data.latestNewsData.map((_project, index) =>
      <Image key={index} src={_project.imageSrc}></Image>
    )
  );
  
  const handleOpen = () => {
    setOpen(true);

    timer = setTimeout(() => {
      setOpen(false)
    }, timeoutLength)
  }

  const handleClose = () => {
    setOpen(false);
    clearTimeout(timer)
  }

  return (
    <Grid centered >
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Popup on='click' open={isOpen} onClose={handleClose} onOpen={handleOpen} position='top right' hideOnScroll
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