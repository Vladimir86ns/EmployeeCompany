
import React, {Component} from 'react';
import {Platform} from 'react-native';
import { Provider } from 'react-redux';

import RootStack from './src/navigation/appStack';
import configureStore from './src/store/configureStore';
const store = configureStore();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}
