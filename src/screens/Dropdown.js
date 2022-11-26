import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import ProfilesCmp from '../components/ProfilesCmp';

export default class element extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.nrbytxt}>Favorites</Text>
                </View>
                <View style={styles.cathdr}>
                    <TouchableOpacity style={styles.categories}>
                        <Image style={styles.img} source={require("../assets/images/like.png")} />
                        <Text style={styles.yazi} >All connections</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.cathdr}>
                    <View style={styles.categories}>
                        <Image style={styles.img} source={require("../assets/images/like.png")} />
                        <Text style={styles.yazi} >Matches</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cathdr}>
                    <View style={styles.categories}>
                        <Image style={styles.img} source={require("../assets/images/like.png")} />
                        <Text style={styles.yazi} >Visits</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cathdr}>
                    <View style={styles.categories}>
                        <Image style={styles.img} source={require("../assets/images/like.png")} />
                        <Text style={styles.yazi} >Likes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cathdr}>
                    <View style={styles.categories}>
                        <Image style={styles.img} source={require("../assets/images/like.png")} />
                        <Text style={styles.yazi} >Superlikes</Text>
                    </View>
                </TouchableOpacity>

                <ScrollView showsVerticalScrollIndicator="false">
                    <View style={styles.scrllvw}>
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />
                        <ProfilesCmp />

                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,


    },
    header: {
        width: '90%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nrbytxt: {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft: 20
    },
    categories: {
        backgroundColor: "#E6E6E6",
        height: 45,
        width: 390,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10


    },
    cathdr: {
        alignItems: "center"
    },
    img: {
        width: 50,
        height: 50
    },
    yazi: {
        fontSize: 18,
        fontWeight: "bold"
    },
    scrllvw: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
