import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview'

class Schedule extends Component {
    static navigationOptions = {
    title: 'Schedule',
  }

  constructor(){
    super()
    this.data = [
      {time: 'September 27th ,2017', title: 'Recommended Arival', description: 'The Beginner Archery and Beginner /n \n Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688',lineColor:'#009688'},
      {time: 'September 28th, 2017', title: 'Official Registration', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
      {time: '12:00', title: 'Lunch', icon: require('../assets/images/serve.png')},
      {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688'},
      {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688'}
    ]
  } 
    render(){
        return (
          <ScrollView>
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13,maxWidth:100}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'dot'}
        />
      </View>
      </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});

export default Schedule;