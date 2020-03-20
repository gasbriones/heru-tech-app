import { StyleSheet } from 'react-native';
import { white } from '../../theme';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: white,
    fontWeight: 'bold',
    fontSize: 40
  },
  subtitle: {
    color: white,
    fontSize: 16
  },
  logo: {
    width: 40,
    height: 40
  }
});

export default styles;
