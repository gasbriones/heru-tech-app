/*
 * @flow
 * Login
 */
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  BackHandler,
  ToastAndroid // eslint-disable-line
} from 'react-native';
import BodyContainer from '../BodyContainer/BodyContainer';
import styles from './styles.js';
import LoginForm from './Form';
import AsyncStore from '../../utils/AsyncStore';
import { APP_STATUS, LOGIN, USER_DATA } from '../../const';

type Props = {
  // navigation
  navigation: Object
}

export class Login extends Component <Props, {}>{

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  }

  _onChangeRoute = (toScreen) => {
    const { navigation: { navigate } } = this.props;
    navigate(toScreen);
  };

  _handleBackPress = () => {
    const { navigation: { goBack } } = this.props;
    goBack(); // works best when the goBack is async
    return true;
  };

  showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  _handleIsValidForm = (isValid, user) => {
    if (isValid) {
      this._onChangeRoute('Home');
      AsyncStore.setData(LOGIN, APP_STATUS.on);
      AsyncStore.setData(USER_DATA, user);
    } else {
      this.showToast('Contraseña incorrecta');
    }
  };

  render () {
    const { navigation } = this.props;  // eslint-disable-line
    return (
      <BodyContainer>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard}>
            <LoginForm validForm={(isValid, data) => this._handleIsValidForm(isValid, data)} />
          </KeyboardAvoidingView>
        </View>
      </BodyContainer>
    );
  }
}

Login.navigationOptions = ({ navigation, screenProps }) => ({ // eslint-disable-line
  header: null
});

export default Login;
