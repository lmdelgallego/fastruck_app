/* @flow */

import React, { Component } from 'react';
import {
  // View,
  // Text,
  StyleSheet, Image,
} from 'react-native';

import { Button,Header, Left, Right, Icon, Text} from 'native-base';

export default class HeaderFast extends Component {

  handleMenu = () =>{
    // console.warn(this.props);
    this.props.navigation.navigate("DrawerOpen")
  }

  render() {
    return (
      <Header style={styles.header}>
          <Left style={styles.headerLeft}>
            <Button transparent
             onPress={this.handleMenu}>
              <Icon ios='ios-menu' android="md-menu" style={styles.menuIcon} />
            </Button>
            <Image source={require('./accets/logo_fastruck_white.png')} style={styles.logo}/>
          </Left>
          <Right style={styles.headerRigth} >
            <Button transparent>
              <Icon name="ios-filing-outline" style={styles.leftIcon} />
            </Button>
            <Button transparent>
              <Icon name="notifications" style={styles.leftIcon} />
            </Button>
            <Button transparent>
              <Icon name="person" style={styles.leftIcon} />
            </Button>
            <Button transparent>
              <Icon name="search" style={styles.leftIcon} />
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
  }
});
