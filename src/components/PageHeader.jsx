import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility, Grid, Header } from 'semantic-ui-react'

import {getCurrentDate} from "../utils"
import { NavLink } from "react-router-dom";

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
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    // const { children } = this.props
    const { fixed, sidebarOpened } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Sidebar as={Menu} animation='push' inverted onHide={this.handleSidebarHide} vertical visible={sidebarOpened} style={{ minWidth: '20vw' }}>
            <Menu.Item as={NavLink} to="/home" onClick={this.handleSidebarHide} >TO DO</Menu.Item>
          </Sidebar>
          <Grid className="pageHeader" inverted>
            <Grid.Row className="headerBanner" columns={3}>
              <Grid.Column>
                <Header as='h4'>{dateNow}</Header>
                <Icon name='sidebar' onClick={this.handleToggle}></Icon>
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' style={{display: 'inline'}}><Icon name='soccer'></Icon> MONO MAPPES <Icon name='soccer'></Icon> </Header>
              </Grid.Column>
              <Grid.Column>
                <Icon name='search'></Icon>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="headerMenu">
              <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large' >
                <Container className="justifyCenter">
                  <Menu.Item as={NavLink} to="/home" ><Icon name='home'></Icon></Menu.Item>
                  <Menu.Item as={NavLink} to="/fixtures" >Fixtures</Menu.Item>
                  <Menu.Item as={NavLink} to="/standings" >Standings</Menu.Item>
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

  // handleSidebarHide = (nav) => this.setState({ sidebarOpened: false, heightExpanded: 75 })
  handleSidebarHide = () => this.setState({ sidebarOpened: false, heightExpanded: 75 })
  navigate = (nav) => {
    this.handleSidebarHide();
    this.setState({ currentNavigation: nav })
  }

  handleToggle = () => this.setState({ sidebarOpened: true, heightExpanded: 350 })

  render() {
    const { sidebarOpened, heightExpanded, currentNavigation } = this.state;

    return (
      <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar as={Menu} animation='push' inverted onHide={this.handleSidebarHide} vertical visible={sidebarOpened} style={{ minWidth: '100vw' }}>
          <Menu.Item as={NavLink} to="/home" onClick={() => this.navigate("Home")} >Home <Icon name='home' size='large' color='teal'></Icon></Menu.Item>
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
