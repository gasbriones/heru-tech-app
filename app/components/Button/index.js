/**
 * @flow
 * Button
 */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles.js';

type Props = {
  size: string,
  style: Object,
  theme: string,
  onPress: ()=>void,
  children: string
}

const Button = ({ size, children, onPress, theme, style }: Props) => (
  <TouchableOpacity
    onPress={theme!=='disable'? onPress: ()=>{}}
    style={[ styles.btn, styles[`btn${size}`], styles[`btn${theme}`], style ]}
  >
    <Text style={[ styles.text, styles[`text${theme}`] ]}>{children}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  size: 'mid',
  theme: 'white',
  onPress: ()=>{}
};

export default Button;