import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import LoginScreen from './Login';
import HomeScreen from './Home';
import SideBar from './Sidebar/Sidebar.js';

const RootNavigator = DrawerNavigator(
  {
    Login: { 
      screen: LoginScreen 
    },
    Home: { 
      screen: HomeScreen, 
    }
  },
  {
    headerMode: 'screen',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <SideBar {...props} />
  }
);

export default RootNavigator;
