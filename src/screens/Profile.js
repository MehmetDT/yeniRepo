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
                    <View style={styles.dede}>
                        <View style={styles.hdrbox}>
                            <View style={styles.baba}>
                                <Image style={styles.img} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={styles.txtbox}>
                                    <Text style={{ fontSize: 30, fontWeight: "bold",marginBottom:7 }}>Mary burgess</Text>
                                    <Text>Seattle, USA</Text>
                                </View>
                            </View>
                            <View style={styles.stats}>
                                <View style={styles.visitors}>
                                    <Text>Visitors</Text>
                                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>2318</Text>
                                </View>
                                <View style={styles.visitors}>
                                    <Text>Likes</Text>
                                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>364</Text>
                                </View>
                                <View style={styles.visitors}>
                                    <Text>Matched</Text>
                                    <Text style={{ fontWeight: "bold", fontSize: 22 }}>15</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/love.png")} />
                        <Text style={{fontSize:17}} >   Likes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/visits.png")} />
                        <Text style={{fontSize:17}} >   Visits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/groups.png")} />
                        <Text style={{fontSize:17}} >   Groups</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/mywallet.png")} />
                        <Text style={{fontSize:17}} >   My Wallet</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/vipcenter.png")} />
                        <Text style={{fontSize:17}} >   VIP center</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/findfriends.png")} />
                        <Text style={{fontSize:17}} >   Find Friends</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/blacklist.png")} />
                        <Text style={{fontSize:17}} >   Blacklist</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Image style={styles.imgx} source={require("../assets/images/settings.png")} />
                        <Text style={{fontSize:17}} >   Settings</Text>
                    </TouchableOpacity>

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
        width: 390,
        height: 1000,
        alignItems: "center",
    },
    hdrbox: {
        width: 350,
        height: 200,
        backgroundColor: "white",
        marginTop: 150,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,

    },
    dede: {
        alignItems: "center",
    },
    img: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 50

    },
    baba: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    txtbox: {
        marginRight: 30
    },
    stats: {
        width: 350,
        height: 70,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    visitors: {
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "space-around"
    },
    options: {
        backgroundColor: "#E6E6E6",
        width: 350,
        height: 45,
        marginTop: 15,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center",
        
    },
    imgx: {
        width: 30,
        height: 30,
        marginLeft:8
    },

})
