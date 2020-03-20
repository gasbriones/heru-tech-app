import { AsyncStorage } from 'react-native';
import { STORE_NAME } from '../const';

export default class AsyncStore {
  static async setData (key, value) {
    try {
      await AsyncStorage.setItem(STORE_NAME + ':' + key, value);
    } catch (error) {
      console.warn('error', error); // eslint-disable-line
      // Error saving data
    }
  }

  static async getData (key) {
    try {
      const value = await AsyncStorage.getItem(STORE_NAME + ':' + key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  static async removeData (key) {
    try {
      const value = await AsyncStorage.removeItem(STORE_NAME + ':' + key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  }
}
