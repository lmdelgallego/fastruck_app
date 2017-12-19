import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './Login';
import HomeScreen from './Home';

const RootNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen, }
  },
  {
    headerMode: 'screen'
  }
);

export default RootNavigator;
