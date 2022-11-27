import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Interests from '../components/Interests';
import OnlineUsers from '../components/OnlinUsers';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator="false" style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <ImageBackground
          source={require("../assets/images/userprofile.png")}
          style={styles.prflimage}>
          <View style={styles.clandrctcnt}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/close.png')}
                style={styles.closepng}
              />
            </TouchableOpacity>
            <View style={styles.rctnglcnt}>
              <Image
                style={styles.rectanglepng}
                source={require('../assets/images/rectangle.png')}
              />
              <Image
                style={styles.rectanglepng}
                source={require('../assets/images/rectangle.png')}
              />
              <Image
                style={styles.rectanglepng}
                source={require('../assets/images/rectangle.png')}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={{padding:20,}}>
        <View style={styles.nmagecnt}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.name}>Mary Burgess</Text>
            <View style={styles.genage}>
              <Image
                style={styles.gender}
                source={require('../assets/images/woman.png')}
              />
              <Text style={styles.age}>23</Text>
            </View>
          </View>
          <Text style={styles.location}> Seattle, USA</Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.txt}>About</Text>
          <Text style={styles.info}>
            My name is Mary Burgess and I enjoy meeting new people and finding
            ways to help them have an upllifting expreience.
          </Text>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text style={styles.showbutton}>Show More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txt}>Friends</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator="false">
            <OnlineUsers />
            <OnlineUsers />
            <OnlineUsers />
            <OnlineUsers />
            <OnlineUsers />
            <OnlineUsers />
          </ScrollView>
        </View>
        <View style={styles.bpcnt}>
          <Text style={styles.txt}>Basic Profile</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.hwrsjd}>Height:</Text>
          <Text style={styles.datas}>165cm</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.hwrsjd}>Weight:</Text>
          <Text style={styles.datas}>65kg</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.hwrsjd}>Relationship status:</Text>
          <Text style={styles.datas}>Single</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.hwrsjd}>Joined date:</Text>
          <Text style={styles.datas}>Dec 25, 2021</Text>
        </View>
        <View>
          <Text style={styles.txt}>Interests</Text>
          <View style={styles.intrstcnt}>
            <Interests interestName="Guitar" />
            <Interests interestName="Swimming" />
            <Interests interestName="Music" />
            <Interests interestName="Book" />
            <Interests interestName="Fishing" />
            <Interests interestName="Dancing" />
          </View>
        </View>
        <View>
          <Text style={styles.txt}>Looking for</Text>
          <View style={styles.intrstcnt}>
            <Interests interestName="Friend"/>
            <Interests interestName="Soul Mate"/>
            <Interests interestName="Marriage"/>
          </View>
        </View>
        <View style={styles.lslmcnt}>
          <TouchableOpacity>
            <Image style={styles.lslm} source={require('../assets/images/like.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.lslm} source={require('../assets/images/superlike.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.lslm} source={require('../assets/images/message.png')}/>
          </TouchableOpacity>
        </View>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  prflimage: {
    width: '100%',
    height: 567,
  },
  clandrctcnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  closepng: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  rctnglcnt: {},
  rectanglepng: {
    width: 9,
    height: 9,
    marginTop: 5,
    marginRight: 20,
  },
  nmagecnt: {
    width: 343,
    height: 61,
    alignItems: 'flex-start',
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  genage: {
    width: 37,
    height: 16,
    backgroundColor: 'pink',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  gender: {
    width: 10,
    height: 10,
  },
  age: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    color: '#C1C0C9',
  },
  about: {
    width: 343,
    height: 160,
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 17,
    fontWeight: '500',
    color: '#262628',
  },
  showbutton: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FF689A',
  },
  bpcnt: {
    flexDirection: 'row',
    marginTop: 20,
  },
  hwrsjd: {
    fontSize: 17,
    fontWeight: '500',
    marginRight: 5,
    color: '#262628',
  },
  datas: {
    fontSize: 17,
    fontWeight: '500',
    color: 'grey',
  },
  intrstcnt: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lslmcnt:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:'100%'

  },
  lslm:{
    width:80,
    height:80,
  }
});
