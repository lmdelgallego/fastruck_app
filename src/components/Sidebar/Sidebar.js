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
  Thumbnail,
  Left,
  Body
} from "native-base";

class SideBar extends Component {
  render() {
   const routes = [
      {title: 'Inicio',icon: 'ios-home-outline', navigate: () => {this.props.navigation.navigate('Home')}}, 
      {title: 'Mis Viajes',icon: 'ios-navigate-outline', navigate: () => {console.warn(this.props)}}, 
      {title: 'Mis Camiones',icon: 'ios-car-outline', navigate: () => {console.warn("Mis Camiones")}}, 
      {title: 'Notificaciones',icon: 'ios-notifications-outline', navigate: () => {console.warn("Notificaciones")}}, 
      {title: 'Perfil',icon: 'ios-person-outline', navigate: () => {this.props.navigation.navigate("Profile")}}, 
      {title: 'FAQ',icon: 'ios-chatbubbles-outline', navigate: () => {console.warn("FAQ")}}, 
      {title: 'Contacto',icon: 'ios-paper-plane-outline', navigate: () => {console.warn("Contacto")}}, 
    ];
    return (
      <Container style={styles.container}>
        <View style={styles.containerHeader}>
          <Thumbnail source={require('../../assets/fotico.jpg')} style={styles.photo} />
          <TouchableOpacity style={styles.btnProfile}>
            <Text style={styles.profileText} >Luis Miguel Del Gallego</Text>
            <Icon style={styles.profileIcon} name="settings" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerList}>
          <List
            dataArray={routes} 
            renderRow={data => {
              return(
                <TouchableOpacity style={styles.listItem} onPress={data.navigate}>
                    <Icon name={data.icon} style={styles.iconItem} />
                    <Text style={styles.textItem}>{data.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fafafa'
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
    marginVertical: 15,
  },
  listItem:{
    backgroundColor: '#fafafa',
    borderBottomColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  textItem:{
    flex: 1,
    marginLeft: 15,
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  iconItem:{
    marginHorizontal:15,
    fontSize: 22,
    width: 25,
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

export default SideBar;