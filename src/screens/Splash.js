import React, {Component,} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';


export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
     this.props.navigation.navigate('Name')
    }, 1000)
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bckgrnd.png')}
        style={styles.bckgrnd}>
        <Image source={require('../assets/images/migo.png')} style={styles.migo} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bckgrnd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  migo: {
    width: 156,
    height: 43,
  },
});
