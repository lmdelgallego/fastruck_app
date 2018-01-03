import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../components/Login';
//TODO: Create Component for REgister and forgotpassword.

const LoginStack = StackNavigator(
  {
    Login: { 
      screen: LoginScreen 
    }
  }
);

export default LoginStack;
