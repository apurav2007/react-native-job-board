import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors,Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.frost
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingBottom: 20
  },
  row2: {
    marginLeft: 20,

  },
  boldLabelTitle: {
    fontWeight: 'bold',
    color: Colors.blue,
    marginTop: Metrics.baseMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.coal,
},
  label: {
    color: Colors.coal
  },
  image: {
    height:50,
    width:50,
    paddingVertical: Metrics.doubleBaseMargin,
    marginRight:10,
    marginLeft: Metrics.baseMargin
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
