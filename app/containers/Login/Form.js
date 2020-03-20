import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles.js';

export class LoginForm extends Component <Props, {}>{

  constructor (props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };
  }

  _handleSubmit = () => {
    const { user, password } = this.state;
    const { validForm } = this.props;
    const reversePassword = user.split('').reverse().join('');

    if (reversePassword === password) {
      validForm(true, user);
    } else {
      validForm(false);
    }
  };

  render () {

    const { user, password } = this.state;

    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Usuario'
          placeholderTextColor='rgba(225,225,225,0.7)'
          underlineColorAndroid="transparent"
          value={user}
          onChangeText={e => this.setState({ user: e })}
        />

        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={e => this.setState({ password: e })}
        />

        <View style={{ opacity: (user !== '' && password !== '') ? 1 : .6 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={.2}
            disabled={!(user !== '' && password !== '')}
            onPress={this._handleSubmit}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginForm;
