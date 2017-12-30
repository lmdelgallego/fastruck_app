import React, { Component } from 'react';
import {Text, Icon, Button, List} from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import _ from 'lodash'

import City from './City'

class Trip extends Component {
  state = {  }
  render() {

    const stops = [
      {key: 1, city: "Barranquilla", dir:'Cr 66 no 73 - 23'},
      {key: 2, city: "Santa Marta", dir:'Cr 66 no 73 - 23'},
      {key: 3, city: "Cartagena", dir:'Cr 66 no 73 - 23'},
      {key: 4, city: "Valledupar", dir:'Cr 66 no 73 - 23'},
      {key: 5, city: "Cali", dir:'Cr 66 no 73 - 23'},
      {key: 6, city: "Medellin", dir:'Cr 66 no 73 - 23'},
    ]

    return (
      <TouchableOpacity style={styles.content}>
        <View style={styles.contentInfo}>
          <Text style={styles.price}>$270.000</Text>
          <View style={styles.tripInfo}>
            <Text style={styles.labels}>KJ0 - Barranquilla</Text>
            <Text style={styles.labels}>12 de abril de 2016</Text>
            <Text style={styles.labels}>8:00 A.M</Text>
            <Text style={styles.labels}>3 Toneladas</Text>
          </View>
        </View>
        <View style={styles.contentStops}>
           {
             _.slice(stops,0,3).map((data) => {
               return(
                <City style={styles.city} key={data.key} name={data.city} dir={data.dir} />
               )
             })
           }
          
        </View>
        <View style={styles.contentActions}>
          <Button Button transparent>
            <Icon name="share" style={styles.iconShare} />
          </Button>
          <Button Button transparent>
            <Icon name="close" style={styles.iconCancel}/>
          </Button>
          <Button Button transparent>
            <Icon name="checkmark" style={styles.iconAccept}/>
          </Button>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    flexDirection: 'row',
    height: 141,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 1,
    flex: 1,
    backgroundColor: 'white'
  },
  contentInfo:{
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 10,
    paddingVertical: 14,
    flex:2,
    borderLeftColor: '#1facc5',
    borderLeftWidth: 3,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    flexDirection: 'column'
  },
  price:{
    color: '#316c50',
    fontSize: 15,
    fontWeight: '800',
    flex: 1
  },
  tripInfo:{
    alignSelf: 'flex-end'
  },
  labels:{
    fontSize: 11,
    color: 'rgba(128, 128, 128, 0.8)',
    marginBottom: 2
  },
  contentStops:{
    flex: 3,
    padding: 14,
    borderRightColor: '#f3f3f3',
    borderRightWidth: 3
  },
  city:{
    marginBottom: 111
  },
  contentActions:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  iconShare:{
    fontSize: 25,
    color: '#1facc5',
  },
  iconCancel:{
    fontSize: 30,
    color: '#d46060',
  },
  iconAccept:{
    fontSize: 30,
    color: '#25b36f',
  }
})

export default Trip;