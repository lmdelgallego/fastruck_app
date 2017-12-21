/* @flow */

import React, { Component } from 'react';
import {
  // View,
  // Text,
  StyleSheet, Image,
} from 'react-native';

import { Button,Header, Left, Right, Icon, Text,Badge} from 'native-base';

export default class HeaderFast extends Component {

  handleMenu = (route) =>{
    // console.warn(this.props);
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <Header style={styles.header}>
          <Left style={styles.headerLeft}>
            <Button transparent
             onPress={() => this.handleMenu('DrawerOpen')}>
              <Icon ios='ios-menu' android="md-menu" style={styles.menuIcon} />
            </Button>
            <Image source={require('./accets/logo_fastruck_white.png')} style={styles.logo}/>
          </Left>
          <Right style={styles.headerRigth} >
            <Button transparent>
              <Icon name="ios-filing-outline" style={styles.leftIcon} />
              <Badge style={styles.badge}><Text style={styles.textBadge}>2</Text></Badge>
            </Button>
            <Button transparent>
              <Icon name="ios-notifications-outline" style={styles.leftIcon} />
            </Button>
            <Button transparent onPress={()=> this.handleMenu('Profile')}>
              <Icon name="ios-person-outline" style={styles.leftIcon} />
            </Button>
            <Button transparent>
              <Icon name="ios-search-outline" style={styles.leftIcon} />
            </Button>
          </Right>
        </Header>
    );
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: '#25b36f',
    height: 60,
  },
  headerLeft:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRigth:{
    flex: 1
  },
  logo:{
    width: 76,
    height: 28,
  },
  menuIcon:{
    color: '#145b3d',
    marginRight: 22
  },
  leftIcon:{
    color: '#145b3d',
  },
  badge:{
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
  },
  textBadge:{
    color: '#145b3d',
  }
});
