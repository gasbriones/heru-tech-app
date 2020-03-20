import { StyleSheet } from 'react-native';
import { elevationHelper } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 0,
    ...elevationHelper()
  }
});

export default styles;
