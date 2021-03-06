/* @flow */

import React, { Component } from 'react';
import {
  // View,
  // Text,
  StyleSheet
} from 'react-native';
import {Container, Title, Content,Text} from 'native-base';
import HeaderFast from '../HeaderFast'

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
    // header: null
  };
  render() {
    return (
      <Container>
        <HeaderFast navigation={this.props.navigation} />
        <Content>
          <Title>Profile</Title>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
