import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, } from 'react-native';

export default class BottomBarApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: 'blue',
        flexDirection: 'row',
        bottom: 0,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute'
    }

})
