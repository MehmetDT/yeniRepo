import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <View style={styles.interests}>
        <Text style={styles.intrsttxt}>{this.props.interestName}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    interests:{
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:36,
        borderRadius:5,
        borderWidth:0.4,
        marginBottom:15,
        marginRight:20,
        
      },
      intrsttxt:{
        fontSize:17,
        fontWeight:'500',
        color:'#4A4A4A'
      }
  
})
