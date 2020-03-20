/*
 * @flow
 * Home
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler,
  Alert
} from 'react-native';

import MapView, { Circle } from 'react-native-maps';


import Header from '../../components/Header';
import BodyContainer from '../BodyContainer/BodyContainer';

import styles from './styles.js';
import AsyncStore from '../../utils/AsyncStore';
import { USER_DATA } from '../../const';
import { red0 } from '../../theme';

type Props = {
    // navigation
    navigation: Object
}

export class Home extends Component <Props, {}> {

    state = {
      userName: '',
      location: {
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    };

    latitudeDelta = 0.005;
    longitudeDelta = 0.005;

    componentDidMount () {
      BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);

      AsyncStore.getData(USER_DATA).then(data => {
        this.setState({ userName: data });
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.warn('Error', err);
      });

      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ location: position });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

    }

    componentWillUnmount () {
      BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
    }

    _handleBackPress = () => {
      const { navigation: { goBack } } = this.props;
      goBack(); // works best when the goBack is async
      return true;
    };

    render () {
      const { userName, location } = this.state;
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      const radio = 10000;
      const region = {
        latitude,
        longitude,
        latitudeDelta: this.latitudeDelta,
        longitudeDelta: this.longitudeDelta
      };

      return (
        <BodyContainer style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.user}>{userName}</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={region}
              // onPress={(val)=>this._pressGlobalMap(val)}
              showsUserLocation={true}
              maxZoomLevel={18}
              minZoomLevel={18}
              loadingEnabled
              loadingIndicatorColor={'#000'}
              loadingBackgroundColor={'rgba(256, 256, 256, 0.7)'}
            >
              <Circle
                zIndex={1}
                key={(region.latitude + region.longitude).toString()}
                center={region}
                radius={radio} // en metros
                strokeColor={red0}
                strokeWidth={3}
                fillColor={'rgba(163,204,255,0.0)'}
              />
              <MapView.Marker
                key={'1'}
                coordinate={{ latitude, longitude }}
              />
            </MapView>
          </View>
        </BodyContainer>
      );
    }
}

Home.navigationOptions = ({navigation, screenProps}) => ({ // eslint-disable-line
  header: (
    <Header
      title={'Heru App Test Técnico'}
      iconDrawer={true}
      navigation={navigation}
    />
  )
});

export default Home;
