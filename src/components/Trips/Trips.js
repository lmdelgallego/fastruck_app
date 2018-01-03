import React, { Component } from 'react';
import {Text,Content, List} from 'native-base';

import Trip from './Trip';

class TripList extends Component {
  render() {
    const tripList = [
      {key: 1, name: '12'},
      {key: 2, name: '2'},
      {key: 3, name: '3'},
      {key: 4, name: '4'},
    ];
    return (
      <Content>
        <List 
          dataArray={tripList} 
          renderRow={data => {
            return(
              <Trip key={data.key}/>
            );
          }}
        />
      </Content>
    );
  }
}

export default TripList;