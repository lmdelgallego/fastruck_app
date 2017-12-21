import React, { Component } from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Thumbnail
} from "native-base";

class SideBar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.containerHeader}>
          <Thumbnail source={require('../accets/fotico.jpg')} style={styles.photo} />
          <TouchableOpacity style={styles.btnProfile}>
            <Text style={styles.profileText} >Luis Miguel Del Gallego</Text>
            <Icon style={styles.profileIcon} name="settings" />
          </TouchableOpacity>
        </View>
        <Content style={styles.containerList}>
          <Text>Lista</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
    backgroundColor: '#25b36f',
    height: 144,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  photo:{
    width: 56,
    height: 56,
  },
  btnProfile:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  profileText:{
    color: 'white',
    flex: 1
  },
  profileIcon:{
    color: 'white',
  },
  containerList:{
    flex:1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 24,
    paddingVertical: 16
  }
});

export default SideBar;