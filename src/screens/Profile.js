import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

export default class element extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bckgrnd} source={require("../assets/images/zort.png")} />
                <View style={styles.hdrbox} >

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bckgrnd: {
        width: 500,
        height: 1000
    }
})
