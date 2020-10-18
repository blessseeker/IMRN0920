/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, View} from 'react-native';
import Splash from './app/pages/Splash';
import Register from './app/pages/Register';
import Login from './app/pages/Login';
import HomeScreen from './app/pages/HomeScreen';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Login />
      </View>
    </ScrollView>
  );
};

export default App;
