import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.borderIcon} source={require("../assets/images/Icon.png")} />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.txtStyle} >What's Your Name?</Text>
        </View>
        <View style={styles.nameInput}>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,

  },
  borderIcon: {
    width: 45,
    height: 45,
    marginLeft: 20
  },
  headerText: {
    alignItems: "center",
    marginTop: 20
  },
  txtStyle: {
    color: "#4B164C",
    fontWeight: "bold",
    fontSize: 25
  },
  nameInput: {
    width:370,
    height: 50,
    backgroundColor: "red",
    marginLeft:30,
    marginTop:20,
    borderColor:"black",
    borderRadius:10
  }
})
