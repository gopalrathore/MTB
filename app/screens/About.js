import React, { Component } from 'react';
import { View, Text } from 'react-native';

class One extends Component {
    static navigationOptions = {
    title: 'About',
  }
    render(){
        return(
            <View>
                <Text>ONE Screen</Text>
            </View>
        );
    }
}

export default One;