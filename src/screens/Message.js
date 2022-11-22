import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import OnlineUsers from './components/OnlinUsers';
import SentMessages from './components/SentMessages';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.nrbytxt}>Message</Text>
        </View>
        <View style={styles.searchcnt}>
          <Image
            source={require('./assets/images/search.png')}
            style={styles.searchpng}
          />
          <TextInput placeholderTextColor={'#9B9B9B'} placeholder="Search..." />
        </View>
        <View style={styles.onuserscnt}>
          <Text style={styles.onusers}>ONLINE USERS</Text>
        </View>
        <ScrollView style={{width:382,height:0,}} showsHorizontalScrollIndicator="false" horizontal={true}>
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
          <OnlineUsers />
        </ScrollView>
        <ScrollView style={styles.secondscroll}>
          
          <SentMessages />
          <SentMessages />
          <SentMessages />
          <SentMessages />
          <SentMessages />
          <SentMessages />
          <SentMessages />
         
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
  searchcnt: {
    width: 342,
    height: 40,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 7,
  },
  searchpng: {
    width: 26,
    height: 26,
  },
  onuserscnt: {
    width: '90%',
    height: 22,
    marginTop: 20,
  },
  onusers: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#C1C0C9',
  },
  secondscroll:{
    width:359,
    height:448,
  }
});
