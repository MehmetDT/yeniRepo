import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity, Text, Image } from 'react-native';
import { hp, wp } from '../configs/react-native-responsive';

export default class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('About ')
                    }}>
                    <Image style={styles.bttm} source={require('../assets/images/nearbybottom.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Favorites')
                }}>
                    <Image style={styles.bttm} source={require('../assets/images/favoritesbottom.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Message')
                }}>
                    <Image style={styles.bttm} source={require('../assets/images/messagebottom.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Image style={styles.bttm} source={require('../assets/images/profilebottom.png')}/>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp(10),
        position: 'absolute',
        bottom: 0,
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white'
       
    },
    bttm:{
        width:30,
        height:30,
        

    }
    
})
