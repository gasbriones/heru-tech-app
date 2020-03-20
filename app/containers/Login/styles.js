import { StyleSheet } from 'react-native';
import { opacity, primaryColor, secondaryColor, white } from '../../theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center'

  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    width: 360,
    backgroundColor: opacity
  },
  input: {
    paddingVertical: 10,
    backgroundColor: opacity,
    marginBottom: 10,
    padding: 10,
    color: white,
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: secondaryColor,
    paddingVertical: 15,
    opacity: 1,
    marginTop: 20
  },
  buttonText: {
    color: white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20
  }
});

export default styles;

