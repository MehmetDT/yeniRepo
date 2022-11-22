import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet,ImageBackground} from 'react-native';

export default class ProfilesCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={{margin:5,}}>
        <ImageBackground
          style={styles.prflpc}
          source={{uri: 'https://picsum.photos/200/300'}}>
          <Text style={styles.prflname}>Augusto Castro</Text>
          <View style={styles.gndragecntnr}>
            <Image
              source={require('../assets/images/woman.png')}
              style={styles.gender}
            />
            <Text style={styles.age}>23</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  
    prflpc:{
        width:176,
        height:230,
        padding:4,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between'
        
      },
      prflname:{
        fontSize:13,
        fontWeight:'bold',
        color:'white'
      },
      gndragecntnr:{
        width:37,
        height:16,
        backgroundColor:'pink',
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      gender:{
        width:10,
        height:10,
      },
      age:{
        fontSize:10,
        fontWeight:'bold',
        color:'white',
      }
});
