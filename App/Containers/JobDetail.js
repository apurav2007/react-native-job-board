import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  TouchableOpacity,

} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/JobDetailStyles'
import {Images, Metrics} from '../Themes'
import { Container, Content, Card, CardItem, Text } from 'native-base';
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

class JobDetail extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container]} keyboardShouldPersistTaps='always'>
      <Container>
              <Content>
                  <Card>
                      <CardItem>
                          <Text>
                              Testing
                          </Text>
                      </CardItem>
                  </Card>
              </Content>
          </Container>
      </ScrollView>
    )
  }
}

export default connect()(JobDetail)
