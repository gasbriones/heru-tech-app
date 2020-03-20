/*
 * @flow
 * Splash
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BodyContainer from '../BodyContainer/BodyContainer';
import AsyncStore from '../../utils/AsyncStore';
import { APP_STATUS, LOGIN } from '../../const';
import { themeStyle, white } from '../../theme';
import styles from './styles';

type Props = {
  // navigation
  navigation: Object,
}

export class Splash extends Component <Props, {}>{
  componentDidMount () {

    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);

    AsyncStore.getData(LOGIN).then(data => {
      if (typeof data === 'undefined' && data !== APP_STATUS.on) {
        setTimeout(() => {
          this._onChangeRoute('Login');
        }, 2000);
      } else {
        this._onChangeRoute('Home');
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.warn('Error', err);
    });
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  }

  _handleBackPress = () => {
    const { navigation: { goBack } } = this.props;
    goBack(); // works best when the goBack is async
    return true;
  };

  _onChangeRoute = (toScreen) => {
    const { navigation: { navigate } } = this.props;
    navigate(toScreen);
  };

  render () {
    return (
      <BodyContainer>
        <StatusBar hidden />
        <View style={[themeStyle.content, styles.container ]}>
          <MaterialIcon name={ 'perm-device-information' } size={ 120 } color={ white } light />
          <Text style={styles.title}>Heru App</Text>
          <Text style={styles.subtitle}>Test Técnico</Text>
        </View>
      </BodyContainer>
    );
  }
}

Splash.navigationOptions = ({ navigation, screenProps }) => ({ // eslint-disable-line
  header: null
});


export default Splash;

