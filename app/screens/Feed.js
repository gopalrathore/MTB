import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

class Feed extends Component {
  static navigationOptions = {
    title: 'Feed',
  }
  constructor(props){
    super(props);
    this.state = {
      data: [],
      category: "all",
      stage: "1",
      isLoading: true
    }
  }

  componentDidMount() {
    var time = new Date();
    fetch('http://hastpa.org/testing/hastpa_api/timing_api/get_rank.php?stage='+this.state.stage+'&r='+time)
      .then((response) => response.json())
      .then((responseJson) => {
         var result = [];
      for(i=1;i<90;i++){
        if(responseJson[i]==undefined)
          break;
        result.push(responseJson[i]);
      }
      console.log("component mounteds");
      this.setState({
        data: result,
        isLoading: false
      });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  }
  
  filterByDay(selectedDay){
    console.log("selected day",selectedDay);
    this.setState({
      isLoading: true
    });

    var time = new Date();
    var link = 'http://hastpa.org/testing/hastpa_api/timing_api/get_rank.php?stage='+selectedDay+'&r='+time;
    fetch('http://hastpa.org/testing/hastpa_api/timing_api/get_rank.php?stage='+selectedDay+'&r='+time)
      .then((response) => response.json())
      .then((responseJson) => {
         var result = [];
      for(i=1;i<90;i++){
        if(responseJson[i]==undefined)
          break;
        result.push(responseJson[i]);
      }
      console.log("link", link);
      this.setState({
        data: result,
        stage: selectedDay,
        isLoading: false
      });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const isLoading = this.state.isLoading;
    if(isLoading){
      return (
					<ActivityIndicator
            animating = {isLoading}
            color = '#2196f3'
            size = "large"
            style = {styles.activityIndicator}
          />
    );

    }else{
      console.log("data: ",this.state.data);
    return (
      <ScrollView>
           <View style={{flexDirection:"row"}}>
          <Picker
          style={{width:"50%"}}
          selectedValue={this.state.stage}
          onValueChange={(itemValue)=>this.filterByDay(itemValue)}
        >
          <Picker.item label="Day 1" value="1" />
          <Picker.item label="Day 2" value="2" />
          <Picker.item label="Day 3" value="3" />
        </Picker>
        </View>  
        
         <List>
           {this.state.data.map((user,index) => (
             
            <ListItem
              key={user.uid}
              /*roundAvatar
              avatar={user.profle_image_link ? {uri: user.profle_image_link} : require('../images/user.png')}*/
              title={
                /* <View style={{flexDirection:"row",marginLeft:20}}>
                  <Image source={{uri: user.app_flag}} style={{width: 35, height: 20,position:"absolute",right:0}} />
                  <Text style={{position:"absolute",left:-60,top:-17,backgroundColor: "#2196f3",borderRadius: 10,color:"#fff",paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4}}>{index+1}</Text>
                  <Text style={{fontWeight:"bold"}}>{user.full_name.toUpperCase()}</Text>
                </View> */
                <View style={styles.item}>
                  <Text style={styles.rank}>{index+1}</Text>
                  <Image style={styles.pic} source={user.profle_image_link ? {uri: user.profle_image_link} : require('../assets/images/user.png')} />
                  <View style={styles.detail}>
                    <Text style={styles.name}>{user.full_name}</Text>
                    <Text style={styles.category}>{user.category}</Text>
                  </View>
                  <Image source={{uri: user.app_flag}} style={styles.flag} />
                </View>
              }
              /*subtitle= {
                <View style={{marginLeft:20,flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={{fontSize:10, color:"#2196f3"}}>{user.category}</Text>
                </View>
              }*/
              onPress={() => this.onLearnMore(user)}
              rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
              
            />
          ))}
        </List> 
      </ScrollView>
    );
  }
  }
}

export default Feed;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  rank: {
    backgroundColor: "#2196f3",
    color: "#fff",
    borderRadius: 50,
    width: 30,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10
  },
  name: {
    fontWeight: "bold"
  },
  category: {
    fontSize:10,
    color:"#2196f3"
  },
  flag: {
    width: 35,
    height: 20,
    position: "absolute",
    right: 0
  },
  detail: {
    marginLeft: 10
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});