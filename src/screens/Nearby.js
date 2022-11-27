import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import ProfilesCmp from '../components/ProfilesCmp';
import Usnn from '../components/Usnn';


export default class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.nrbytxt}>Nearby</Text>
          <TouchableOpacity>
            <Image
              style={styles.filter}
              source={require('../assets/images/filter.png')}
            />
          </TouchableOpacity>

        </View>
        <View style={styles.usnn}>
          <Usnn sbhdr="All user" />
          <Usnn sbhdr="Spotlight" />
          <Usnn sbhdr="New" />
          <Usnn sbhdr="Nearby" />
        </View>
        <ScrollView showsVerticalScrollIndicator="false">
          <View style={styles.scrllvw}>
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />
            <ProfilesCmp />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  header: {
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nrbytxt: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  filter: {
    width: 40,
    height: 39,
  },
  usnn: {
    width: 348,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrllvw: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
