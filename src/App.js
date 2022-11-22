import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          resizeMethod="contain"
          style={styles.bgprflpc}
          source={require('./assets/images/userprofile.png')}>
          <TouchableOpacity>
            <Image style={styles.closepng} source={require('./assets/images/close.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.rectanglepic} source={require('./assets/images/rectangle.png')}/>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bgprflpc: {
    width: '100%',
    height: 567,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  closepng:{
    width:40,
    height:40,
  },
  rectanglepic:{
    width:9,
    height:9,
  }
});
