/* @flow */

import React, { Component } from 'react';
import {
  View,
  // Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Container, Button, Title, Content,Text,Tabs,Tab, Icon} from 'native-base';
import HeaderFast from './HeaderFast';
import TripList from './Trips/Trips';

export default class Home extends Component {
  static navigationOptions = {
    // header: null
  };
  render() {
    
    return (
      <Container>
        <HeaderFast navigation={this.props.navigation} />
          <View style={styles.tabs}>
            <Button transparent light style={styles.btnTabsSelected}>
              <Text style={styles.btnTabsText}>Solicitudes Pendientes</Text>
            </Button>
            <Button transparent light style={styles.btnTabs}>
              <Text style={styles.btnTabsText}>Viajes Agendados</Text>
            </Button>
            <TouchableOpacity style={styles.btnFilter}>
              <Icon name="ios-funnel-outline" style={{color: 'white', fontSize: 18}} />
            </TouchableOpacity>
          </View>
        <Content>
        
          <TripList/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs:{
    flexDirection: 'row',
    backgroundColor: '#316c50'
  },
  btnTabs: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: "transparent",
    borderBottomWidth: 3,
    borderRadius: 0
  },
  btnTabsSelected: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: "#25b36f",
    borderBottomWidth: 3,
    borderRadius: 0
  },
  btnTabsText:{
    fontSize: 12
  },
  btnFilter:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

