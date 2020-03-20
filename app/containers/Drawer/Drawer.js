/*
 * @flow
 * Drawer
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import Header from '../../components/Header';
import styles from './styles.js';
import { dark } from '../../theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStore from '../../utils/AsyncStore';
import { LOGIN, USER_DATA } from '../../const';

type Props = {
  // navigation
  navigation: Object
}

export class Drawer extends Component <Props, {}>{
  state = {

  };
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

  _handleLogout = () => {
    AsyncStore.removeData(LOGIN);
    AsyncStore.removeData(USER_DATA);
    this._onChangeRoute('Login');
  };

  _handleConfirmLogout = () => {

    Alert.alert(
      'Alerta',
      '¿Desea salir de la aplicación?',
      [
        { text: 'Cancelar', onPress: () => console.warn('Cancel Pressed'), style: 'cancel' }, // eslint-disable-line
        { text: 'OK', onPress: () => this._handleLogout() }
      ],
      { cancelable: true }
    );
  }

  render () {
    const { navigation } = this.props;  // eslint-disable-line
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity style={styles.itemPress} onPress={this._handleConfirmLogout} >
            <MaterialIcon name={ 'exit-to-app' } size={20} color={dark} light />
            <Text style={styles.itemPressText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Drawer.navigationOptions = ({ navigation, screenProps }) => ({ // eslint-disable-line
  header: (
    <Header
      title={'Drawer'}
      iconDrawer={true}
      navigation={navigation}
    />
  )
});

export default Drawer;
