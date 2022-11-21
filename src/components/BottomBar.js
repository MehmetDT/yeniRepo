import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity, Text} from 'react-native';
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
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1, height: hp(10) }} onPress={() => {
                    this.props.navigation.navigate('Home')}}>
                    <Text style={{ color: 'white' }}>Hello</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1, height: hp(10) }} onPress={() => {
                    this.props.navigation.navigate('Second')}}>
                    <Text style={{ color: 'white' }}>Second</Text>
                </TouchableOpacity>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#131419',
        height: hp(10),
        position: 'absolute',
        bottom: 0,
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: wp(9),
        paddingRight: wp(9)
    }
})
