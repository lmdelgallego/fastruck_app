import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const City = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.bullet}></View>
      <Text style={styles.city}>{props.name.toUpperCase()}</Text>
      <Text style={styles.dir}>{props.dir}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 12
  },
  bullet: {
    backgroundColor: 'green',
    width: 8,
    height: 8,
    left: -18,
    top: 3,
    position: 'absolute',
    borderRadius: 8,
    zIndex: 1
  },
  city:{
    color: "#626262",
    fontSize: 11
  },
  dir:{
    color: "#cbcbcb",
    fontSize: 11,
  }
});

export default City;