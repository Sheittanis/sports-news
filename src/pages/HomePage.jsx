
import React from 'react'
import { Header, Grid, Segment } from 'semantic-ui-react'

import SocialBar from "../components/TeamBar";

const HomePage = () => {


  return (
    <Grid centered >
      <Segment inverted size="massive">

        <strong>Hello, I'm Savvas Sheittanis</strong>
        <p>I'm a full-stack software developer. </p>
        <p>I design, build and fix applications. </p>
        <p>I design, build and fix games. </p>
        <p>lorem ipsum!</p>
      </Segment>
      <SocialBar></SocialBar>

      <Header as='h1' textAlign="center" style={{width: '100%'}} >WHAT I'M CURRENTLY WORKING ON</Header>
      <Grid>
        <Grid.Row columns={3} only={'computer'}>
        </Grid.Row>
      </Grid>

    </Grid>
  )

}

export default HomePage