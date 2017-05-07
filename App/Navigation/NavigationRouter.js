import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import JobDetail from '../Containers/JobDetail'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSearching from '../Containers/ListviewSearchingExample'
import ListviewSections from '../Containers/ListviewSectionsExample'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene  key='login' component={LoginScreen} title='login' hideNavBar />
            <Scene initial  key='listview' component={ListviewExample} title='Job List' />
            <Scene  key='jobdetail' component={JobDetail} title='Job Detail' />
            <Scene key='listviewgrid' component={ListviewGridExample} title='Job Babu - Job List' />
            <Scene key='listviewsearch' component={ListviewSearching} title='Job Babu - Search' />
            <Scene  key='listviewsections' component={ListviewSections} title='Job Babu - Search' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
