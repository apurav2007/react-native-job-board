import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text

} from 'react-native'
import { connect } from 'react-redux'

import {Images, Metrics} from '../Themes'
import { Container, Content, Card, CardItem,Left,List, ListItem } from 'native-base';
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/JobDetailStyles'
class JobDetail extends React.Component {

  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={styles.container} keyboardShouldPersistTaps='always'>
      <Container>
              <Content>
                  <Card>

                    <CardItem style={{flex: 1, flexDirection: 'column',alignItems:'flex-start'}} >

                          <Text  style={styles.boldLabelTitle}>{this.props.job.title}  </Text>
                          <Text  style={styles.boldLabel}> {this.props.job.company}  </Text>
                          <Text  style={styles.label}> {this.props.job.location}   </Text>
                          <Text style={styles.labeldate} > {this.props.job.created_at}   </Text>
                    </CardItem>

                  </Card>
                  <Card>
                      <CardItem>
                          <Text style={styles.boldLabel}> Description  </Text>
                      </CardItem>
                      <CardItem>
                          <Text> We are seeking highly motivated Software Developers who will directly impact the next-generation of our products and services. You will play a hands-on role in the design and development of new digital apps as well as improvements to our existing digital portfolio. In this position you will be exposed to all software system components, including the UI, backend systems, database, performance tuning, security design, and mobile and desktop deployment. You will have the ability to grow your experience and explore new technologies within our cross-collaboration team setting that is leading the digital transformation for United Technologies.
                           </Text>

                      </CardItem>
                  </Card>

                  <Card>
                      <CardItem>
                          <Text style={styles.boldLabel}> Job Detail  </Text>
                      </CardItem>
                      <CardItem >
                      <List >
                          <ListItem style={{flex: 1, flexDirection: 'column',alignItems:'flex-start'}} >
                              <Text  style={styles.boldLabel}>Employment  </Text>
                              <Text>Full Time</Text>
                          </ListItem>
                          <ListItem style={{flex: 1, flexDirection: 'column',alignItems:'flex-start'}}>
                              <Text  style={styles.boldLabel}>Job ID  </Text>
                              <Text>JU76G56GGYK-12</Text>
                          </ListItem>
                      </List>

                      </CardItem>
                  </Card>


              </Content>
          </Container>
      </ScrollView>
    )
  }
}

export default connect()(JobDetail)
