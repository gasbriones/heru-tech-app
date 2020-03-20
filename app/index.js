import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import AppNavigator from './routes';
import { primaryColor, colorHeaderScreen } from './theme';

class App extends Component {
  render () {
    const heightStatusBar = (Platform.OS === 'ios') ? 20 : 0;
    return (
      <View style={{ flex:1 }}>
        <View style={{ height: heightStatusBar, backgroundColor: colorHeaderScreen }}>
          <StatusBar
            backgroundColor={primaryColor}
            barStyle="light-content"
          />
        </View>
        <AppNavigator />
      </View>
    );
  }
}

export default App;
