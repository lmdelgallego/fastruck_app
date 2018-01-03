/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    // header: null
  };
  
  
  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }
  
  render() {
    return (
      <ImageBackground source={require('./assets/bg_login.png')} style={styles.container}>
        <Image source={require('./assets/logo_fastruck_white.png')} style={styles.logo} />
        
        <View style={styles.inputContainer}>
          <View style={styles.iconInput}>
            <Icon name="ios-mail-outline" size={30} color="#25B36F" />
          </View>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="white" keyboardType="email-address"/>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconInput}>
            <Icon name="ios-lock-outline" size={30} color="#25B36F" />
          </View>
          <TextInput  style={styles.input} placeholder="Password" placeholderTextColor="white" secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Text style={styles.textButton}>Ingresar</Text>
          <Icon name="ios-arrow-dropright-outline" size={30} color="white" style={styles.iconButton} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 142,
    height: 59,
    marginBottom: 55
  },
  title:{
    color: 'white',
    fontSize: 16,
    letterSpacing: 11.45,
    backgroundColor: 'transparent',
    marginBottom: 55
  },
  inputContainer:{
    flexDirection: 'row',
    bottom: 0,
    right: 0, 
    left: 0,
    height: 45,
    paddingHorizontal: 35,
    alignItems: 'center',
    marginBottom: 25,
  },
  iconInput:{
    display: 'flex',
    backgroundColor: 'white',
    width: 45,
    height: 45,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  },
  input:{
    flex: 1,
    backgroundColor: 'transparent',
    height: 45,
    color: "white",
    paddingHorizontal: 15,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  button:{
    flexDirection: 'row',
    backgroundColor: "#316C50",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 35,
    height: 45
  },
  textButton:{
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 14
  },
  iconButton:{
    position: 'absolute',
    right: 15
  }

});
