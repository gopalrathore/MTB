import React, {Component} from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2196f3"
                    barStyle="light-content"
                />
                <View style={styles.titleWrapper}>
                    <Image source={require('./assets/images/man-on-motorbike.png')} />
                    <Text style={styles.title}>Hero MTB Himalaya</Text>
                    <Text style={styles.year}>2017</Text>
                </View>
                <View>
                    <Text style={styles.copyRight}>Copyright  &copy; 2017</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196f3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    year: {
        fontSize: 25,
        color: '#ecf0f1'
    },
    copyRight: {
        paddingBottom: 20,
        color: '#ecf0f1'
    }
});