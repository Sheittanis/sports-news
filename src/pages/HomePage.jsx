
import React, {useState} from 'react'
import { Grid, Image, Header, Popup, Segment } from 'semantic-ui-react'
import ArticleOverview from "../components/ArticleOverview"
import NewsFeed from "../components/NewsFeed"

import data from "../constants/HomeArticles"
import LiveScores from '../components/LiveScores'
import TeamBar from "../components/SponsorsBar";

const timeoutLength = 2500

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  let timer = null;

  const latestNews = (
    data.latestNewsData.map((_project, index) =>
      <Grid.Column className="marginTop-1" key={index} computer={Math.floor(16 / data.latestNewsData.length)} >
        <Image src={_project.imageSrc}></Image>
        <p >{_project.description}</p>
      </Grid.Column>
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
          <Header as='h2' color="orange">BREAKING NEWS</Header>
          <Popup on='click' open={isOpen} onClose={handleClose} onOpen={handleOpen} position='top right' hideOnScroll //change to mousehover and icon?
            trigger={
              <Segment style={{height: '90%'}}>
                <Image src={data.breakingArticle.imageSrc}></Image>
                <Header as='h2' color="orange">{data.breakingArticle.header}</Header>
                <p>{data.breakingArticle.description}</p>
              </Segment>
            }>

            <Popup.Header>Peek</Popup.Header>
            <Popup.Content>
              <p>{data.breakingArticle.peek}</p>
            </Popup.Content>
          </Popup>
        </Grid.Column>


        <Grid.Column width={6}>
          <Header as='h2' color="orange">LIVE SCORES</Header>
          <Segment>
            <LiveScores></LiveScores>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <TeamBar></TeamBar>
      <Header as='h2' color="orange">LATEST NEWS</Header>
      <Grid.Row columns={data.latestNewsData.length}>
        {latestNews}
      </Grid.Row>


      <Grid.Row columns={2} style={{marginTop: '5rem'}} >
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