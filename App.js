
import React, {Component} from 'react';
import {Platform} from 'react-native';
import { Provider } from 'react-redux';

import RootStack from './src/navigation/appStack';
import configureStore from './src/store/configureStore';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}
