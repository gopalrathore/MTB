import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {
        primary_data: {
          date_of_birth: "",
          gender: "",
          nationality: ""
        },
        profile_card: {
          display_name: "",
          personal_best_1: "",
          major_sponsor: "",
          social_media_link: "",
          previous_mtb_participation: "",
          bike: ""
        },
        day_1: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_2: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_3: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_4: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_5: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_6: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_7: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        day_8: {
          penalty: "",
          final_time: "",
          status: "",
          message: ""
        },
        overall: {
          day_1: "",
          cum_2: "",
          cum_3: "",
          cum_4: "",
          cum_5: "",
          cum_6: "",
          cum_7: "",
          cum_8: "",
        }
      },
    }
  }

  componentDidMount() {
    var time = new Date();
    fetch('http://www.hastpa.org/testing/hastpa_api/uid.php?uid='+this.props.navigation.state.params.uid+'&r='+time)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { nationality, category, full_name, profle_image_link, uid } = this.props.navigation.state.params;
    var info = this.state.data;
    console.log(info);

    return (
      <ScrollView style={{backgroundColor: "#D3D3D3"}}>
        <View style={styles.pro_pic}>
          <Image source={profle_image_link ? {uri: profle_image_link} : require('../assets/images/user.png')} style={{width: 70, height: 70,borderRadius: 50}} />
          <Text style={styles.imp}>{full_name}</Text>
          <Text style={styles.notImp}>{nationality}</Text>
        </View>
        <Text style={styles.heading}>PERSONAL INFORMATION</Text>
        <View style={{backgroundColor: "#fff"}}>
          {info.profile_card.display_name=="" || info.profile_card.display_name==full_name ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>A.K.A</Text>
            <Text style={styles.personal_value}>{info.profile_card.display_name}</Text>
          </View>
          }

          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Born</Text>
            <Text style={styles.personal_value}>{info.primary_data.date_of_birth}</Text>
          </View>

          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Gender</Text>
            <Text style={styles.personal_value}>{info.primary_data.gender}</Text>
          </View>
          
          {info.profile_card.personal_best_1=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Personal Best</Text>
            <Text style={styles.personal_value}>{info.profile_card.personal_best_1}</Text>
          </View>
          }
          {info.profile_card.previous_mtb_participation=="" || info.profile_card.previous_mtb_participation==null ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Previous Participant</Text>
            <Text style={styles.personal_value}>{info.profile_card.previous_mtb_participation}</Text>
          </View>
          }
          {info.profile_card.major_sponsor=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Sponsor</Text>
            <Text style={styles.personal_value}>{info.profile_card.major_sponsor}</Text>
          </View>
          }
          {info.profile_card.bike=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Bike</Text>
            <Text style={styles.personal_value}>{info.profile_card.bike}</Text>
          </View>
          }
          {info.profile_card.biking_style=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Bike Style</Text>
            <Text style={styles.personal_value}>{info.profile_card.biking_style}</Text>
          </View>
          }
          {info.profile_card.team_name=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Team</Text>
            <Text style={styles.personal_value}>{info.profile_card.team_name}</Text>
          </View>
          }
          {info.profile_card.personal_favourite=="" ? <Text style={{height:0}}></Text> :
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Text style={styles.personal_key}>Personal Favourite</Text>
            <Text style={styles.personal_value}>{info.profile_card.personal_favourite}</Text>
          </View>
          }
        </View>
        <Text style={styles.heading}>RESULTS</Text>
        <View style={styles.table}>
          <View style={{borderRightColor: "#d3d3d3",borderRightWidth: 1,paddingLeft:10,paddingRight:10}}>
            <Text style={styles.resultKey}>Day</Text>
            <Text style={styles.value}>Day 1</Text>
            {info.day_2.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 2</Text>}
            {info.day_3.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 3</Text>}
            {info.day_4.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 4</Text>}    
            {info.day_5.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 5</Text>}  
            {info.day_6.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 6</Text>}  
            {info.day_7.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 7</Text>} 
            {info.day_8.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>Day 8</Text>}  
          </View>

          <View style={{borderRightColor: "#d3d3d3",borderRightWidth: 1,paddingLeft:10,paddingRight:10}}>
            <Text style={styles.resultKey}>Penalty</Text>
            <Text style={styles.value}>{info.day_1.penalty}</Text>
            {info.day_2.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_2.penalty}</Text>}
            {info.day_3.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_3.penalty}</Text>}
            {info.day_4.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_4.penalty}</Text>}    
            {info.day_5.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_5.penalty}</Text>}  
            {info.day_6.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_6.penalty}</Text>}  
            {info.day_7.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_7.penalty}</Text>}  
            {info.day_8.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_8.penalty}</Text>}  
          </View>

          <View style={{borderRightColor: "#d3d3d3",borderRightWidth: 1,paddingLeft:10,paddingRight:10}}>
            <Text style={styles.resultKey}>Final Time</Text>
            <Text style={styles.value}>{info.day_1.final_time}</Text>
            {info.day_2.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_2.final_time}</Text>}
            {info.day_3.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_3.final_time}</Text>}
            {info.day_4.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_4.final_time}</Text>}    
            {info.day_5.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_5.final_time}</Text>}  
            {info.day_6.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_6.final_time}</Text>} 
            {info.day_7.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_7.final_time}</Text>}  
            {info.day_8.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_8.final_time}</Text>} 
          </View>

          <View>
            <Text style={styles.resultKey}>Status</Text>
            <Text style={styles.value}>{info.day_1.status}</Text>
            {info.day_2.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_2.status}</Text>}
            {info.day_3.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_3.status}</Text>}
            {info.day_4.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_4.status}</Text>}    
            {info.day_5.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_5.status}</Text>} 
            {info.day_6.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_6.status}</Text>}  
            {info.day_7.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_7.status}</Text>}  
            {info.day_8.status=="Yet Not Started" || info.day_2.status=="" ? <Text style={{height:0}}></Text> : <Text style={styles.value}>{info.day_8.status}</Text>} 
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default UserDetail;


const styles = StyleSheet.create({
  pro_pic: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imp: {
    color: '#000',
    fontSize: 15
  },
  notImp: {
    color: "#2196f3",
    fontSize: 10 
  },
  heading: {
    color: '#000',
    fontSize: 15,
    margin: 10,
    fontWeight: "700",
    fontFamily: "Outage",
  },
  infoTable: {
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  key: {
    margin: 5,
    marginLeft: 10,
    fontFamily: "Outage",
  },
  personal_key: {
    margin: 5,
    width: "40%",
    fontFamily: "Outage",
  },
  personal_value: {
    margin: 5,
    color: "#2196f3",
    width: "50%"
  },
  value: {
    margin: 5,
    marginLeft: 10,
    color: "#2196f3",
    maxWidth: 200
  },
  table: {
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  resultKey: {
    margin: 5,
    marginLeft: 10,
    paddingBottom: 5,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    fontFamily: "Outage",
  }
});