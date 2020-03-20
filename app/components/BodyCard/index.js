/*
 * BodyCard
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles.js';

const BodyCard = ({ style, children }) => { // eslint-disable-line react/prefer-stateless-function
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

BodyCard.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
};
BodyCard.defaultProps = {
  style: {}
};

export default BodyCard;
