import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const myIcon = <Icon name="arrowleft" size={30} color="#900" />;
const Profile = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0759E2' }}>
      <StatusBar
        animated={true}
        backgroundColor="#0759E2"
        barStyle="dark-content"
      />
      <ScrollView contentContainerStyle={{ backgroundColor: '#FFFFFF' }}>
        <View style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity
              onPress={() => {
                
                  if(props.route.params){
                    navigation.pop()
                  }else{
                    navigation.openDrawer()
                  }

              }}
            >
              <Icon name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('32%'),
              }}>
              Profile
            </Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{
            width: 120,
            height: 120,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 60,
            alignSelf: 'center',
            marginTop: hp('-8%'),
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            textAlign: 'center',
          }}>
          John Smith
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp('1.5%'), marginBottom: hp("5%") }}>
          <TouchableOpacity style={style.icon}>
            <Image source={require('../../assets/icons/f.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Image source={require('../../assets/icons/i.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Image source={require('../../assets/icons/t.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Image source={require('../../assets/icons/p.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={style.inputtext}>
          <Image
            source={require('../../assets/icons/mail.png')}
            style={{
              width: 15,
              height: 11,
              marginLeft: wp('3%'),
              marginRight: wp('1%'),

            }}
          />
          <TextInput
            style={{ width: wp('80%'), marginLeft: 10, fontSize: 12 }}
            placeholder="Email"
            placeholderTextColor="#939393"
            // keyboardType="email-address"
            // color="black"
          // onChangeText={email => setEmail(email)}
          // value={email}
          />
        </View>
        <View
          style={style.inputtext}>
          <Image
            source={require('../../assets/icons/phone.png')}
            style={{
              width: 15,
              marginLeft: wp('3%'),
              marginRight: wp('1%'),

            }}
          />
          <TextInput
            style={{ width: wp('80%'), marginLeft: 10, fontSize: 12 }}
            placeholder="Phone number"
            placeholderTextColor="#939393"
            // keyboardType="number"
            // color="black"
          // onChangeText={email => setEmail(email)}
          // value={email}
          />
        </View>
        <View
          style={style.inputtext}>
          <Image
            source={require('../../assets/icons/build.png')}
            style={{
              height: 11,
              marginLeft: wp('3%'),
              marginRight: wp('1%'),

            }}
          />
          <TextInput
            style={{ width: wp('80%'), marginLeft: 10, fontSize: 12 }}
            placeholder="Company name"
            placeholderTextColor="#939393"
            // keyboardType="text"
            // color="black"
          // onChangeText={email => setEmail(email)}
          // value={email}
          />
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={{ fontSize: 16, color: 'white', textAlign: 'center',}}>NEXT</Text>
        </TouchableOpacity>




      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    // flex :1,
    backgroundColor: '#0759E2',
    width: wp('100%'),
    height: hp('18%'),
  },
  headerapp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: wp('2%'),
    marginTop: hp('2%'),
    alignItems:'center'
  },
  icon: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: 26,
    height: 26,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },

  inputtext: {
    width: wp('90%'),
    height: 50,
    borderRadius: 6,
    borderColor: '#DADADA',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%')
  },
  button:{ 
    backgroundColor: '#0759E2', 
    width: wp('90%'), 
    height: 55, 
    borderRadius: 6, 
    alignSelf: 'center', 
    alignContent: 'center', 
    marginTop: hp('6%'), 
    marginBottom: hp("15%"),
    justifyContent:'center'
  }
});

export default Profile;
