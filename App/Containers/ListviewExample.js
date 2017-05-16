import React from 'react'
import { View, Text, ListView,Image, TouchableOpacity,ScrollView } from 'react-native'
import { Container, Content,Input,Form,Item, Left,Icon,Body, Right, ListItem,Thumbnail,List,Button,Card, CardItem,Label,Grid,Col, Badge,Spinner } from 'native-base';
import {Images, Metrics} from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyles'

import {api} from  "../Services/Api"

class ListviewExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
             joblist: {},
             loaded : false
         }

  }


componentWillMount () {
  this.loadjobs()
}
loadjobs() {

  api.getjob()
  .then((response) => {
    //console.log(response.data)
     this.setState({joblist : response.data, loaded : true})
    //   console.log('Response : ', this.state.joblist)
  })

}


render () {
    return (
      <ScrollView style ={styles.content}>
      {  this.state.loaded ? this.state.joblist.map(item => (
                  <Jobs key={item.id.toString()} job={item} />
                )) : <Spinner color='green' /> }
      </ScrollView>
    )
  }
}

class Jobs extends React.Component {

  constructor(props) {
        super(props);
        // this.state = {
        //
        // }
    }
    componentDidMount () {
      //this.commentsCounts()
    }



 render () {
return (
  <TouchableOpacity onPress={() => NavigationActions.jobdetail({job:this.props.job})} >
  <View style={styles.row} >
    <Image source={Images.logo} style ={styles.image} />
    <View style={styles.row2} >
      <Text numberOfLines={1} style={styles.boldLabelTitle}>{this.props.job.title}</Text>
      <Text style={styles.boldLabel}>{this.props.job.location}</Text>
      <Text style={styles.label}>{this.props.job.company}</Text>
      <Text style={styles.label}>{this.props.job.type}</Text>
      <Text style={styles.label}>{this.props.job.created_at}</Text>
    </View>

  </View>
  </TouchableOpacity>
)
 }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
