import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Colors.frost,
    flex:1
  },
  carditem:{
    flex:1,
    flexDirection: 'column'
  },
  boldLabelTitle: {
    fontWeight: 'bold',
    color: Colors.blue,
    marginBottom: Metrics.smallMargin,
    fontSize:18
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.coal,
},
  label: {
    color: Colors.coal
  },
  labeldate: {
    fontSize:12
  },
})
