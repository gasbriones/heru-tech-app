import { StyleSheet } from 'react-native';
import { screenWidth } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f4'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40
  },

  title:{
    fontSize: 20,
    textAlign: 'center'
  },
  user: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  map: {
    width: screenWidth,
    height: 500
  },
  mapContainer: {
    justifyContent: 'center'
  }
});

export default styles;
