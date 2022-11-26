import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class element extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.bckgrnd} source={require("../assets/images/zort.png")}  >
                    <View style={styles.baba}>
                        <View style={styles.hdrbox}>

                        </View>
                    </View>

                </ImageBackground>

            </SafeAreaView>

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
    },
    hdrbox: {
        width: 350,
        height: 200,
        backgroundColor: "white",
        marginTop: 150,
        borderRadius:10,

    },
    baba: {
        alignItems: "center",
    }
})
