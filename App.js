/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/reducers';

import Navigator from './src/navigation/navigator';

export const store = createStore(Reducer);

import {
  StatusBar
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#009ebe" translucent={true} />
        <Navigator></Navigator>
      </Provider>
    )
  }
};
