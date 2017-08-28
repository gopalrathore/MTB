import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import PhotoView from 'react-native-photo-view';


class Stages extends Component {
    static navigationOptions = {
    title: 'Stages',
    drawerIcon: ({tintColor})=>{
        return (
            <Icon name="phone" size={30} color="#900" />
        )
    }
  }
    render(){
        return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-1.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-2.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-3.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-4.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-5.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-6.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-7.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
        <View style={styles.slide1}>
          <PhotoView
            source={{uri: 'http://www.mtbhimalaya.com/assets/img/stages/ev_b-8.jpg'}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={{width: 300, height: 300}} />
        </View>
      </Swiper>
    );
    }
}

const styles = StyleSheet.create({
   wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


export default Stages;