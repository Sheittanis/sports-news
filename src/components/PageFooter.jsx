import React from 'react'
import { Icon, Container, Grid, Header, Segment } from 'semantic-ui-react'


const PageFooter = () => (
  <Segment inverted vertical className="pageFooter">
    <Container className="justifyCenter">
      <Grid textAlign="center">
        <Grid.Row centered>
          <span className="marginR-1">Copyright © 2019 </span>
          <a href="https://www.linkedin.com/in/sheittanis/">
            <Header as="h4" color="blue" className="underline">
              <Icon name="linkedin" color="blue" />Savvas Sheittanis</Header>
          </a>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default PageFooter
