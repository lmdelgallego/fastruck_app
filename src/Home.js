/* @flow */

import React, { Component } from 'react';
import {
  // View,
  // Text,
  StyleSheet
} from 'react-native';
import {Container, Title, Content,Text} from 'native-base';
import HeaderFast from './HeaderFast'

export default class Home extends Component {
  static navigationOptions = {
    // header: null
  };
  render() {
    return (
      <Container>
        <HeaderFast navigation={this.props.navigation} />
        <Content>
          <Text>Dashboard</Text>
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

