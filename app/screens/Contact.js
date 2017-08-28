import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Two extends Component {
    static navigationOptions = {
    title: 'Contact',
    drawerIcon: ({tintColor})=>{
        return (
            <Icon name="phone" size={30} color="#900" />
        )
    }
  }

  componentDidMount() {
    var time = new Date();
    fetch('http://hastpa.org/testing/hastpa_api/app.php?app=contact'+'&r='+time)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log("response ",responseJson);
    //   this.setState({
    //     data: result,
    //     isLoading: false
    //   });
      })
      .catch((error) => {
        console.error(error);
      });
  }
    render(){
        return(
            <View>
                <Text>TWO Screen</Text>
            </View>
        );
    }
}

export default Two;