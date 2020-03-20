/*
 * Header
 */
import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { colorHeaderScreen, secondaryColor } from './../../theme';
import { elevationHelper } from '../../theme';

const Header = ({
  title,
  iconDrawer,
  shadow,
  navigation: {
    state:{
      routeName // eslint-disable-line
    },
    openDrawer,
    navigate, // eslint-disable-line
    goBack // eslint-disable-line
  },
  backgroundColor,
  titleColor,
  iconColor,
  textAlign
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, shadow && elevationHelper()]}>
      <View style={styles.containerIconLeft}>
        { iconDrawer && <TouchableOpacity onPress={() => openDrawer() }>
          <MaterialIcon name={ 'menu' } size={ 28 } color={ iconColor || colorHeaderScreen } light />
        </TouchableOpacity> }
      </View>
      <View style={[styles.containerTitle]}>
        <Text style={[styles.title, { color:titleColor, textAlign }]}>{title}</Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
  iconBack: PropTypes.bool, // eslint-disable-line
  iconDrawer: PropTypes.bool,
  backgroundColor:PropTypes.string,
  titleColor:PropTypes.string,
  iconColor:PropTypes.string,
  textAlign:PropTypes.string,
  shadow:PropTypes.bool
};

Header.defaultProps = {
  title: '',
  iconBack: false,
  iconDrawer: false,
  iconSubMenu: false,
  iconNewCustomers: false,
  backgroundColor:colorHeaderScreen,
  titleColor:secondaryColor,
  iconColor:'white',
  textAlign:'left',
  shadow:true
};

export default Header;
