import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import LoginScreen from './Login';
import HomeScreen from './Home';
import SideBar from './Sidebar/Sidebar.js';
import Profile from './Profile/Profile';

const RootNavigator = DrawerNavigator(
  {
    Login: { 
      screen: LoginScreen 
    },
    Home: { 
      screen: HomeScreen, 
    },
    Profile:{
      screen: Profile
    }
  },
  {
    headerMode: 'screen',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />
  }
);

export default RootNavigator;
