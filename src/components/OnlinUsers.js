import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class OnlineUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <TouchableOpacity style={styles.miniprofiles}>
        <Image
          style={styles.minipic}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text numberOfLines={2} ellipsizeMode='middle' style={styles.mname}>Eugenie</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    miniprofiles:{
        alignItems:'center',
        marginLeft:10,
      },
      minipic: {
        width:60,
        height:60,
        borderRadius:30,
        marginBottom:5,
      },
      mname:{
        fontSize:13,
        fontWeight:'500',
        
      },
  
})
