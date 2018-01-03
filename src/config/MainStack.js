import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../components/Home';
import SideBar from '../components/Sidebar/Sidebar.js';
import Profile from '../components/Profile/Profile';

const MainStack = DrawerNavigator(
  {
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

export default MainStack;
