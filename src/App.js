import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.bckcntnr}>
          <Image
            source={require('./assets/images/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <Text style={styles.tyab}> Tell your about </Text>
        <TextInput placeHolder />
        <TouchableOpacity>
          <Text>Continue</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B164C',
  },
});
