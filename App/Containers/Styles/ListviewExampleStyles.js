import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors,Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    flexDirection: 'row'
  },
  row2: {
    marginLeft: Metrics.baseMargin,

  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.coal,
    marginVertical: Metrics.smallMargin
  },
  label: {
    color: Colors.coal,
    marginBottom: Metrics.smallMargin
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
