import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Usnn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <TouchableOpacity>
            <Text style={styles.sbhdrtxt}>{this.props.sbhdr}</Text>
          </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
    sbhdrtxt:{
        fontSize:17,
        fontWeight:'500',
      }
  
})
