import { StyleSheet } from 'react-native';
import { white, green, elevationHelper } from '../../theme';

const styles = StyleSheet.create({
  btn: {
    height: 35,
    margin: 10,
    ...elevationHelper(),
    backgroundColor: white,
    borderRadius:2,
    justifyContent: 'center'
  },
  btnmid: {
    width: 100
  },
  btnbig: {
    width: 200
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    textAlignVertical: 'center'
  },

  btnwhite: {
    backgroundColor: white
  },
  btndisable: {
    backgroundColor: '#D2D2D2'
  },
  btngreen: {
    backgroundColor: green
  },

  textwhite: {
    color: green
  },
  textdisable: {
    color: '#9E9E9E'
  },
  textgreen: {
    color: white
  }
});

export default styles;
