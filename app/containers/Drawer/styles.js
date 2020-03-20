import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f4'
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 60
  },
  itemPress: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemPressText: {
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default styles;
