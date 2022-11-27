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
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Nearby')
                }}>
                <Text style={styles.textBottom}>Nearby</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Favorites')
            }}>
                <Text style={styles.textBottom}>Favorites </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Message')
            }}>
                <Text style={styles.textBottom}>Message</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Profile')
            }}>
                <Text style={styles.textBottom}>Profile</Text>
            </TouchableOpacity>

        </View>
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
