import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  WebView

} from 'react-native'
import { connect } from 'react-redux'

import {Images, Metrics} from '../Themes'
import { Container, Content, Card, CardItem,Left,List, ListItem } from 'native-base';
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/JobDetailStyles'
import {api} from  "../Services/Api"
class JobDetail extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
             jobdetail: {},
             loaded : false
         }
    }

  componentWillMount () {
    this.loadjobdetail()
  }
  loadjobdetail() {
    console.log(this.props.job.id);
    api.getjobdetail(this.props.job.id)
    .then((response) => {
      console.log(response.data)
       this.setState({jobdetail : response.data, loaded : true})
         console.log('Response : ', this.state.jobdetail)
    })

  }

  render () {
    return (
      <View style={styles.container}>
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
                          <Text> {this.state.jobdetail.description}</Text>

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
                              <Text>{this.state.jobdetail.type}</Text>
                          </ListItem>
                          <ListItem style={{flex: 1, flexDirection: 'column',alignItems:'flex-start'}} >
                              <Text  style={styles.boldLabel}>Company Site  </Text>
                              <Text>{this.state.jobdetail.company_url}</Text>
                          </ListItem>
                          <ListItem style={{flex: 1, flexDirection: 'column',alignItems:'flex-start'}}>
                              <Text  style={styles.boldLabel}>Job ID  </Text>
                              <Text>{this.state.jobdetail.type}</Text>
                          </ListItem>
                      </List>

                      </CardItem>
                  </Card>


              </Content>
          </Container>
      </View>
    )
  }
}

export default connect()(JobDetail)
