import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility, Grid, Header, Image } from 'semantic-ui-react'

import { getCurrentDate } from "../utils"
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar"
import BallImage from "../images/ball.png"

const dateNow = getCurrentDate();

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
const HomepageHeading = ({ mobile }) => (
  <Container text>

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = { open: false }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Grid className="pageHeader" inverted>
            <Grid.Row className="headerBanner" columns={3}>
              <Grid.Column>
                <Header as='h4'>{dateNow}</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' className="titleHeader"><Image src={BallImage} size="small"></Image>  SPORTS NEWS <Image src={BallImage} size="small"></Image>  </Header>
              </Grid.Column>
              <Grid.Column>
                <SearchBar></SearchBar>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="headerMenu">
              <Menu fixed={fixed ? 'top' : null} inverted pointing={!fixed} secondary={!fixed} size='large' >
                <Container className="justifyCenter">
                  <Menu.Item as={NavLink} to="/home" >Home </Menu.Item>
                  <Menu.Item as={NavLink} to="/fixtures" >Fixtures</Menu.Item>
                  <Menu.Item as={NavLink} to="/standings" >Standings</Menu.Item>
                  <Menu.Item as={NavLink} to="/stats" >Stats</Menu.Item>
                  <Menu.Item as={NavLink} to="/archive" >Archive</Menu.Item>

                </Container>
              </Menu>
            </Grid.Row>
          </Grid>
        </Visibility>
      </Responsive>
    )
  }
}


class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false, heightExpanded: 75 })
  navigate = (nav) => {
    this.handleSidebarHide();
    this.setState({ currentNavigation: nav })
  }

  handleToggle = () => this.setState({ sidebarOpened: true, heightExpanded: 200 })

  render() {
    const { sidebarOpened, heightExpanded, currentNavigation } = this.state;

    return (
      <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar as={Menu} animation='push' inverted onHide={this.handleSidebarHide} vertical visible={sidebarOpened} style={{ minWidth: '100vw' }}>
          <Menu.Item as={NavLink} to="/home" onClick={() => this.navigate("Home")} >Home</Menu.Item>
          <Menu.Item as={NavLink} to="/fixtures" onClick={() => this.navigate("Fixtures")} >Fixtures</Menu.Item>
          <Menu.Item as={NavLink} to="/standings" onClick={() => this.navigate("Standings")} >Standings</Menu.Item>
          <Menu.Item as={NavLink} to="/stats" onClick={() => this.navigate("Stats")} >Stats</Menu.Item>
          <Menu.Item as={NavLink} to="/archive" onClick={() => this.navigate("Archive")} >Archive</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign='center' style={{ minWidth: '100vw', padding: '1em 0em', height: heightExpanded }} vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item position="left">{currentNavigation}</Menu.Item>
                <Menu.Item onClick={this.handleToggle} position="right"><Icon name='sidebar' /></Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}


const ResponsiveContainer = () => (
  <div>
    <DesktopContainer></DesktopContainer>
    <MobileContainer></MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer style={{ minHeight: '100vw' }}></ResponsiveContainer>
)

export default HomepageLayout
