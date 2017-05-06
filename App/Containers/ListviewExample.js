import React from 'react'
import { View, Text, ListView,Image } from 'react-native'
import { Container, Content,Input,Form,Item, Left,Icon,Body, Right, ListItem,Thumbnail,List,Button,Card, CardItem,Label,Grid,Col, Badge } from 'native-base';
import {Images, Metrics} from '../Themes'
import { connect } from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyles'

class ListviewExample extends React.Component {
  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {title: 'Site Reliability Engineer (SRE) 1', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},
      {title: 'Site Reliability Engineer (SRE)', location: 'Remote/Anywhere',type:'Full Time',company:'CircleCI',created :'24 May 2017', logo: 'http://github-jobs.s3.amazonaws.com/3f106ece-3113-11e7-81a3-7a4e0d644d3b.png'},


    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Thumbnail square size={80} source={Images.logo} />
        <View style={styles.row2} >
          <Text style={styles.boldLabelTitle}>{rowData.title}</Text>
          <Text style={styles.boldLabel}>{rowData.location}</Text>
          <Text style={styles.label}>{rowData.company}</Text>
          <Text style={styles.label}>{rowData.type}</Text>
          <Text style={styles.label}>{rowData.created}</Text>
        </View>

      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
