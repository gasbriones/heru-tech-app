import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
// import Screen
import Drawer from './containers/Drawer/Drawer';
import Splash from './containers/Splash/Splash';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';

const MainScreen = createStackNavigator({
  // navigation Screen
  Drawer: { screen: Drawer },
  Home: { screen: Home }
},
{
  initialRouteName: __DEV__ ? 'Home' : 'Splash',  // eslint-disable-line
  contentComponent: Drawer
});

const AppStack = createDrawerNavigator({
  MainScreen: { screen: MainScreen }
},
{
  contentComponent: Drawer
});

const AuthStack = createStackNavigator({
  Login: { screen: Login }
},
{
  mode: 'modal',
  swipeEnabled: true,
  animationEnabled: true,
  gesturesEnabled: true
});

const AppNavigator = createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
  AuthLoading: Splash
},
{
  headerMode: 'none',
  initialRouteName: 'AuthLoading'
});

export default AppNavigator;
