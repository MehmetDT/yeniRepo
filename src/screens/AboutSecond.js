import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.bckcntnr}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <Text style={styles.tyab}>Tell your about? </Text>
        <View style={styles.wght}>
          <Text style={styles.txtstyles}>Your Weight</Text>
          <View style={styles.txtinpt}>
            <TextInput style={styles.txt} placeholder="" />
          </View>
        </View>

        <View style={styles.wght}>
          <Text style={styles.txtstyles}>Your Height</Text>
          <View style={styles.txtinpt}>
            <TextInput style={styles.txt} placeholder="" />
          </View>
        </View>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bckcntnr: {
    width: 375,
    height: 92,
    justifyContent: 'center',
    marginLeft: 20,
  },
  back: {
    width: 40,
    height: 40,
  },
  tyab: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B164C',
  },
  txtinpt: {
    width: 327,
    height: 50,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'flex-start',

  },
  txt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#22172A',
    margin: 10,
  },
  button: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 295,
    height: 56,
    backgroundColor: 'purple',
    borderRadius: 22,
  },
  buttontxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  wght:{
    marginTop:40
  },
  txtstyles:{
    fontSize:17,
    fontWeight:"bold"
  }
})
