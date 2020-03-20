/*
 * BodyContainer
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  BackHandler
} from 'react-native';

// my components
import Header from '../../components/Header';

import styles from './styles.js';

export class BodyContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {

  };
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  }

  _handleBackPress = () => {
    const { navigation: { goBack } } = this.props; // eslint-disable-line
    goBack(); // works best when the goBack is async
    return true;
  };
  render () {
    const { navigation, children } = this.props;  // eslint-disable-line
    return (
      <View style={styles.container} >
        {children}
      </View>
    );
  }
}

BodyContainer.navigationOptions = ({ navigation, screenProps }) => ({ // eslint-disable-line
  header: (
    <Header
      title={'BodyContainer'}
      iconDrawer={true}
      navigation={navigation}
    />
  )
});

BodyContainer.propTypes = {
  children: PropTypes.any
};

export default BodyContainer;
