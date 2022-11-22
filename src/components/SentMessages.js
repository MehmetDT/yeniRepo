import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class SentMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <TouchableOpacity style={styles.sender}>
        <TouchableOpacity style={styles.miniprofiles}>
          <Image
            style={styles.minipic}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
        </TouchableOpacity>
        <View style={{marginLeft:10,}}>
          <Text style={styles.whosent}>Danny Rice</Text>
          <Text style={styles.messagesent}>Hey! How's it going?</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    sender: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15,
      },
      miniprofiles:{
        alignItems:'center',
        marginLeft:10,
      },
      minipic: {
        width:60,
        height:60,
        borderRadius:30,
        marginRight:5,
      },
      whosent:{
        fontSize:17,
        fontWeight:'bold',
    
      },
      messagesent:{
        fontSize:15,
        fontWeight:'500',
        color:'#C1C0C9'
    
      },
})
