import { StyleSheet } from 'react-native';
import { fontBig } from './../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  containerIconLeft: {
    left: 15,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 16,
    height: 16
  },
  containerTitle: {
    justifyContent: 'center',
    alignSelf:'center'
  },
  containerIconRight: {
    right: 15,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: fontBig,
    paddingHorizontal: 60,
    fontWeight: '400'
  }
});

export default styles;

