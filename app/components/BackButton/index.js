/*
 * BackButton
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js';
import assets from '../../assets';

const BackButton = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.touchable} onPress={()=>navigation.goBack()}>
      <Image source={ assets.backGray } style={styles.image} />
    </TouchableOpacity>
  </View>
);

BackButton.propTypes = {
  navigation: PropTypes.object
};
BackButton.defaultProps = {};

export default BackButton;
